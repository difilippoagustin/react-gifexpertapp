import React from "react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import GifGrid from "./GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs/useFetchGifs";

jest.mock("../../hooks/useFetchGifs/useFetchGifs");
describe("<GifGrid />", () => {
  const category = "category test";

  test("should display correctly", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      isLoading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("should display images and should not display loading text when the data has been loaded", () => {
    const mockData = [
      { url: "https://image1.com", title: "Image 1", id: "1" },
      { url: "https://image2.com", title: "Image 2", id: "2" },
      { url: "https://image3.com", title: "Image 3", id: "3" },
    ];
    useFetchGifs.mockReturnValue({
      data: mockData,
      isLoading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    const loading = wrapper.find("p");
    expect(loading.exists()).toBeFalsy();
    expect(wrapper.find("GifGridItem").length).toBe(mockData.length);
  });
});
