import axios from "axios";
import { parseStringPromise } from "xml2js";

type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
};

export async function fetchYoutubeVideos(
  channelId: string,
  maxResults: number = 3,
): Promise<YouTubeVideo[]> {
  try {
    // YouTube RSS feed URL
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

    // Fetch the RSS feed
    const response = await axios.get(rssUrl);

    // Parse the XML
    const result = await parseStringPromise(response.data);

    // Extract video data
    const entries = result.feed.entry || [];

    // Map to our video format
    const videos = entries.slice(0, maxResults).map((entry: any) => {
      const videoId = entry["yt:videoId"][0];
      return {
        id: videoId,
        title: entry.title[0],
        description: entry.summary
          ? entry.summary[0]
          : entry["media:group"][0]["media:description"][0],
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        publishedAt: new Date(entry.published[0]).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };
    });

    return videos;
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
}
