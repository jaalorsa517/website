import { HttpGet } from "@/shared/services/http.services";
import { describe, it, expect, vi } from "vitest";

describe("HttpService", async () => {
  const fetchMock = vi
    .spyOn(window, "fetch")
    .mockResolvedValue(
      await Promise.resolve({
        json: vi.fn().mockResolvedValue({}),
      } as unknown as Response)
    );

  it("Method Get", async () => {
    const httpService = new HttpGet();
    const url = "https://url.com";
    const response = await httpService.get(url);
    expect(fetchMock).toBeCalledWith(url, { method: "GET" , headers:{}});
    expect(response).toEqual({});
  });
});
