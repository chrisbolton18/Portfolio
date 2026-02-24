import readline from "node:readline/promises";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = "https://example.org/callback";

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Missing env vars. Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET before running.");
  process.exit(1);
}

const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-recently-played",
].join(" ");

const authUrl =
  "https://accounts.spotify.com/authorize" +
  `?client_id=${encodeURIComponent(CLIENT_ID)}` +
  `&response_type=code` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
  `&scope=${encodeURIComponent(scopes)}`;

console.log("\n1) Open this URL in your browser and approve:\n");
console.log(authUrl);
console.log("\n2) After approving, you’ll be redirected to example.org.");
console.log("   Copy the FULL redirected URL from your browser address bar and paste it here.\n");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const redirected = await rl.question("Paste redirected URL: ");
rl.close();

let code;
try {
  const u = new URL(redirected);
  code = u.searchParams.get("code");
} catch {
  console.error("That didn’t look like a URL. Paste the full redirected URL.");
  process.exit(1);
}

if (!code) {
  console.error("No ?code= found in the URL. Make sure you pasted the full redirected URL.");
  process.exit(1);
}

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  headers: {
    Authorization: `Basic ${basic}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: REDIRECT_URI,
  }),
});

const text = await tokenRes.text();
if (!tokenRes.ok) {
  console.error(`Token exchange failed (${tokenRes.status}):`);
  console.error(text);
  process.exit(1);
}

const json = JSON.parse(text);

if (!json.refresh_token) {
  console.error("No refresh_token returned. This usually happens if you already authorized before.");
  console.error("Fix: Spotify Account -> Apps -> Remove access for this app, then run again.");
  process.exit(1);
}

console.log("\n✅ Copy this into your .env:\n");
console.log(`SPOTIFY_REFRESH_TOKEN=${json.refresh_token}\n`);