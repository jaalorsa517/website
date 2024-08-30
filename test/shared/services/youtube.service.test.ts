import { J5HttpGetI } from "@jaalorsa/j5-components";
import { describe, it, expect, vi } from "vitest";
import { YoutubeTypes } from "@/shared/models/types/youtube";
import { YoutTubeService } from "@/shared/services/youtube.service";

describe("YoutTubeService", () => {
  const youtubeTypes: YoutubeTypes = {
    host: "host",
    playlistId: "playlistId",
  };

  it("Get videos success", async () => {
    const responseService = {
      nextPageToken: "nextPageToken",
      items: [
        {
          snippet: {
            title: "title",
            description: "description",
            thumbnails: { medium: { url: "url" } },
          },
          contentDetails: {
            videoId: "videoId",
            videoPublishedAt: "videoPublishedAt",
          },
        },
      ],
    };
    const httpMock: J5HttpGetI = {
      get: vi.fn().mockResolvedValue(responseService),
    };
    const youtubeService = new YoutTubeService(httpMock, youtubeTypes);

    const response = {
      nextPageToken: "nextPageToken",
      items: [
        {
          title: "title",
          description: "description",
          thumbnail: "url",
          videoId: "videoId",
          videoPublishedAt: "videoPublishedAt",
        },
      ],
    };

    const result = await youtubeService.getVideos();

    expect(result).toStrictEqual(response);
  });

  it("Get videos error", async () => {
    const errorMsg = "error in http get request";
    const httpMock: J5HttpGetI = {
      get: vi.fn().mockRejectedValue(errorMsg),
    };
    const youtubeService = new YoutTubeService(httpMock, youtubeTypes);

    try {
      await youtubeService.getVideos();
    } catch (error) {
      expect(error).toEqual(errorMsg);
    }
  });
});
