export function playlistItemsDto(json) {
  return {
    nextPageToken: json.nextPageToken || "",
    items: json.items.map((item) => ({
      title: item.snippet.title || "",
      description: item.snippet.description || "",
      thumbnail: item.snippet.thumbnails.medium.url || "",
      videoId: item.contentDetails.videoId,
      videoPublishedAt: item.contentDetails.videoPublishedAt,
    })),
  };
}
