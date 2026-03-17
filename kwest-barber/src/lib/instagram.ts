/**
 * Instagram Basic Display API integration.
 *
 * The access token expires every 60 days. Set up a Lambda function
 * on a 50-day EventBridge cron to call the refresh endpoint:
 * GET https://graph.instagram.com/refresh_access_token
 *   ?grant_type=ig_refresh_token
 *   &access_token={token}
 * Store the new token in your environment variables.
 */

export interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  timestamp: string;
  thumbnail_url?: string;
}

export async function getInstagramPosts(
  limit = 12
): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    console.warn(
      "INSTAGRAM_ACCESS_TOKEN is not set. Instagram feed will show placeholder."
    );
    return [];
  }

  try {
    const fields = "id,media_url,permalink,caption,media_type,timestamp,thumbnail_url";
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      console.warn(`Instagram API returned ${res.status}`);
      return [];
    }

    const data = await res.json();
    const posts: InstagramPost[] = data.data ?? [];

    return posts.filter(
      (post) => post.media_type !== "VIDEO" || post.thumbnail_url
    );
  } catch (error) {
    console.warn("Failed to fetch Instagram posts:", error);
    return [];
  }
}
