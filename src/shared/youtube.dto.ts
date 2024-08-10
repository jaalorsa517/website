import { PlaylistItemsType } from "@/shared/models/types/youtube";

export function playlistItemsDto(json: any): PlaylistItemsType {
  return {
    nextPageToken: json.nextPageToken || "",
    items: json.items.map((item: any) => ({
      title: item.snippet.title || "",
      description: item.snippet.description || "",
      thumbnail: item.snippet.thumbnails.medium.url || "",
      videoId: item.contentDetails.videoId,
      videoPublishedAt: item.contentDetails.videoPublishedAt,
    })),
  };
}
