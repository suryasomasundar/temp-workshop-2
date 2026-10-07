import { BASE_URL } from "../../config.js";

export const healthClient = {
  async check() {
    const res = await fetch(`${BASE_URL}/health`);
    return {
      status: res.status,
      contentType: res.headers.get("content-type"),
      body: await res.json(),
    };
  },
};
