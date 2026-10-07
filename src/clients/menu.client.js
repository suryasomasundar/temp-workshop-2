import { BASE_URL } from "../../config.js";

export const menuClient = {
  async list() {
    const res = await fetch(`${BASE_URL}/api/menu`);
    return { status: res.status, body: await res.json() };
  },
};
