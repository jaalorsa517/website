import { IHttpGet } from "@/shared/models/interfaces/IHttpClient";

export class HttpGet implements IHttpGet {
  async get(url: string, headers = {}) {
    const response = await fetch(url, { method: "GET", headers });
    const responseJson = await response.json();
    return responseJson;
  }
}
