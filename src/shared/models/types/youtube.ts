export type YoutubeTypes = {
  playlistId: string;
  host: string;
};

export type PlayItemType = {
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
  videoPublishedAt: string;
};

export type PlaylistItemsType = {
  nextPageToken: string;
  items: PlayItemType[];
};

export type GetVideosYoutueType ={
  maxResults: number;
  pageToken: string;
}