import { GetVideosYoutueType } from "@/shared/models/types/youtube";

export interface IYoutubeService {
  getVideos(getVideosYoutue: GetVideosYoutueType): Promise<any>;
}
