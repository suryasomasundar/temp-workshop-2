import { test } from "node:test";
import assert from "node:assert/strict";
import { healthClient } from "../src/clients/health.client.js";

test("reports the service as ok when it is up", async () => {
  const { status, body } = await healthClient.check();
  assert.equal(status, 200);
  assert.deepEqual(body, { status: "ok" });
});

test("responds with a JSON content type", async () => {
  const { contentType } = await healthClient.check();
  assert.match(contentType, /^application\/json/);
});
