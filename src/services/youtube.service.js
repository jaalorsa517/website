import { get } from "@/services/http.services";
import { playlistItemsDto } from "@/shared/youtube.dto";

const Params = {
  part: "snippet,contentDetails",
  playlistId: import.meta.env.VITE_YOUTUBE_LIST,
};
const host = import.meta.env.VITE_YOUTUBE_API_HOST;

/**
 * Traer los vídeos del canal de Youtube
 * @param {Object} {maxResults, pageToken}}
 * @returns Promise<playlistItemsDto>
 */
export function getVideos({maxResults = 5, pageToken = ""} = {}) {
  const fields =
  "items/snippet/title,items/snippet/description,items/contentDetails,items/snippet/thumbnails/medium/url,nextPageToken";
  const params = { ...Params, fields, maxResults, pageToken };
  const paramsInString = Object.keys(params)
  .filter((param) => Boolean(params[param]))
  .map((param) => `${param}=${params[param]}`)
  .join("&");
  const url = `${host}/playlistItems?${paramsInString}`;
  return new Promise((resolve, reject) => {
    get(url)
      .then((json) => resolve(playlistItemsDto(json)))
      .catch((error) => reject(error));
  });
}
