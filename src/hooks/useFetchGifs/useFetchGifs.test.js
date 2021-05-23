import { useFetchGifs } from "./useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("useFetchGifs", () => {
  test("should return initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Simpsons")
    );

    const { data, isLoading } = result.current;
    await waitForNextUpdate();
    expect(data).toStrictEqual([]);
    expect(isLoading).toBeTruthy();
  });

  test("should return new state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Simpsons")
    );

    await waitForNextUpdate();
    const { data, isLoading } = result.current;
    expect(data.length).toEqual(10);
    expect(isLoading).toBe(false);
  });
});
