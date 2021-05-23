import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "./GifGridItem";

describe("<GifGridItem />", () => {
  const titleProvided = "Title";
  const urlProvided = "https://exmple.com";
  const wrapper = shallow(
    <GifGridItem title={titleProvided} url={urlProvided} />
  );

  test("should display component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should display the title in p tag correctly", () => {
    const p = wrapper.find("p").text();
    expect(p).toBe(titleProvided);
  });
  test("should have the correct url", () => {
    const url = wrapper.find("img").prop("src");
    expect(url).toBe(urlProvided);
  });
  test("should have the correct alt", () => {
    const alt = wrapper.find("img").prop("alt");
    expect(alt).toBe(titleProvided);
  });
  test("should have the correct class", () => {
    const className = wrapper.find("div").hasClass("animate__fadeInDown");
    expect(className).toBeTruthy();
  });
});
