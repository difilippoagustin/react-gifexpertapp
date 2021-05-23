import React from "react";
import "@testing-library/jest-dom";

import { GifExpertApp } from "./GifExpertApp";
import { shallow } from "enzyme";

describe("<GifExpertApp />", () => {
  test("should display correctly", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test("should display a categories list", () => {
    const mockCategories = ["Simpsons", "Futurama"];
    const wrapper = shallow(
      <GifExpertApp defaultCategories={mockCategories} />
    );
    expect(wrapper.find("GifGrid").length).toBe(2);
  });
});
