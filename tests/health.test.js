import { test } from "node:test";
import assert from "node:assert/strict";
import { BASE_URL } from "../config.js";

// GET: liveness check.
test("GET /health returns ok", async () => {
  const res = await fetch(`${BASE_URL}/health`);
  assert.equal(res.status, 200);
  assert.match(res.headers.get("content-type"), /application\/json/);

  const body = await res.json();
  console.log("\nGET /health ->", res.status);
  console.log(JSON.stringify(body, null, 2));

  assert.equal(body.status, "ok");
});
