import { getGif } from "./getGif";

describe("getGif", () => {
  test("should get 10 elements", async () => {
    const gifs = await getGif("Futurama");
    expect(gifs.length).toBe(10);
  });
});
