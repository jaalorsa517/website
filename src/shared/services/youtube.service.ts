import { IHttpGet } from "@/shared/models/interfaces/IHttpClient";
import { IYoutubeService } from "@/shared/models/interfaces/IYoutubeService";
import { PlaylistItemsType, YoutubeTypes } from "@/shared/models/types/youtube";
import { playlistItemsDto } from "@/shared/youtube.dto";

export class YoutTubeService implements IYoutubeService {
  private host = "";
  private playlistId = "";

  constructor(private httpGet: IHttpGet, youtubeTypes: YoutubeTypes) {
    this.host = youtubeTypes.host;
    this.playlistId = youtubeTypes.playlistId;
  }

  getVideos({
    maxResults = 5,
    pageToken = "",
  } = {}): Promise<PlaylistItemsType> {
    const fields =
      "items/snippet/title,items/snippet/description,items/contentDetails,items/snippet/thumbnails/medium/url,nextPageToken";
    const paramsDefault: Record<string, any> = {
      part: "snippet,contentDetails",
      playlistId: this.playlistId,
    };
    const params: Record<string, any> = {
      ...paramsDefault,
      fields,
      maxResults,
      pageToken,
    };
    const paramsInString = Object.keys(params)
      .filter((param) => Boolean(params[param]))
      .map((param) => `${param}=${params[param]}`)
      .join("&");
    const url = `${this.host}/playlistItems?${paramsInString}`;
    return new Promise((resolve, reject) => {
      this.httpGet
        .get(url)
        .then((json) => resolve(playlistItemsDto(json)))
        .catch((error) => reject(error));
    });
  }
}
