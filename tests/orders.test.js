import { test } from "node:test";
import assert from "node:assert/strict";
import { BASE_URL } from "../config.js";

// The traditional way: point at the API by hand (config.js) and write the
// assertions yourself. Two calls -- one GET, one POST. Run with:  npm test
// Each test prints the response so you can see what the API sent back.

// GET: read the menu.
test("GET /api/menu returns items", async () => {
  const res = await fetch(`${BASE_URL}/api/menu`);
  assert.equal(res.status, 200);

  const body = await res.json();
  console.log("\nGET /api/menu ->", res.status);
  console.log(JSON.stringify(body, null, 2));

  assert.ok(body.items.length > 0, "menu should not be empty");
});