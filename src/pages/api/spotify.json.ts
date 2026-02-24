import { Buffer } from "node:buffer";

export const prerender = false;

function requireEnv(name: string): string {
  const v = import.meta.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

async function getAccessToken(): Promise<string> {
  const client_id = requireEnv("SPOTIFY_CLIENT_ID");
  const client_secret = requireEnv("SPOTIFY_CLIENT_SECRET");
  const refresh_token = requireEnv("SPOTIFY_REFRESH_TOKEN");

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Token refresh failed (${res.status}): ${text}`);
  }

  const json = JSON.parse(text);
  if (!json?.access_token) throw new Error("Token refresh response missing access_token.");
  return json.access_token;
}

function toPayload(track: any, extra?: { isPlaying?: boolean; source?: string }) {
  return {
    title: track?.name ?? null,
    artist: Array.isArray(track?.artists)
      ? track.artists.map((a: any) => a?.name).filter(Boolean).join(", ")
      : null,
    album: track?.album?.name ?? null,
    image: track?.album?.images?.[0]?.url ?? null,
    url: track?.external_urls?.spotify ?? null,
    isPlaying: extra?.isPlaying ?? false,
    source: extra?.source ?? "unknown",
  };
}

async function getCurrentlyPlaying(accessToken: string) {
  const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (res.status === 204) return null;
  if (!res.ok) return null;

  const data = await res.json();
  if (!data?.item) return null;

  return toPayload(data.item, {
    isPlaying: Boolean(data?.is_playing),
    source: "currently-playing",
  });
}

async function getRecentlyPlayed(accessToken: string) {
  const res = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) return null;

  const data = await res.json();
  const track = data?.items?.[0]?.track ?? null;
  if (!track) return null;

  return toPayload(track, { isPlaying: false, source: "recently-played" });
}

export async function GET(): Promise<Response> {
  try {
    const accessToken = await getAccessToken();

    const now = await getCurrentlyPlaying(accessToken);
    if (now) {
      return new Response(JSON.stringify(now), {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
    }

    const recent = await getRecentlyPlayed(accessToken);
    if (recent) {
      return new Response(JSON.stringify(recent), {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
    }

    return new Response(JSON.stringify({ message: "No track found.", source: "none" }), {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        error: err?.message ?? String(err),
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store",
        },
      }
    );
  }
}