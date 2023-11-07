import { redis } from "./redis";

export async function loginWithTwitch() {
  const TWITCH_ID = process.env.TWITCH_ID;
  const TWITCH_SECRET = process.env.TWITCH_SECRET;

  const res = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${TWITCH_ID}&client_secret=${TWITCH_SECRET}&grant_type=client_credentials`,
    {
      method: "POST",
    }
  );

  if (res.status !== 200) {
    throw new Error("Failed to login with twitch");
  }

  const body = (await res.json()) as {
    access_token: string;
    expires_in: number;
    token_type: string;
  };

  return (await redis.set("twitch-access", body.access_token, {
    ex: body.expires_in,
  })) as string;
}

export async function getTwitchAccess() {
  let twitchAccessToken = await redis.get<string>("twitch-access");

  const TWITCH_ID = process.env.TWITCH_ID;

  if (!TWITCH_ID) throw new Error("Null twitch id");

  if (!twitchAccessToken) {
    twitchAccessToken = await loginWithTwitch();
  }

  return {
    clientId: TWITCH_ID,
    accessToken: twitchAccessToken,
  };
}
