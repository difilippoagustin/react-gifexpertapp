import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategorie } from "./AddCategorie";

describe("<AddCategorie />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategorie setCategories={setCategories} />);

  beforeEach(() => {
    wrapper = shallow(<AddCategorie setCategories={setCategories} />);
  });

  test("should display correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change input value", () => {
    const newValue = "New value";
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: newValue } });
    expect(wrapper.find("p").text()).toBe(newValue);
  });

  test("should not post information when the input value length is less than 3", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should call #setCategories and clean input box when the input value length is greater than 3", () => {
    const newValue = "New value";
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: newValue } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop("value")).toBe("");
  });
});
