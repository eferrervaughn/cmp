import React from 'react';
import { mount } from 'enzyme';
import Sauce from './Sauce'

describe("Sauce", () => {
  let props;
  let mountedSauce ;
  const sauce = () => {
    if (!mountedSauce) {
      mountedSauce = mount(
        <Sauce {...props} />
      );
    }
    return mountedSauce;
  }

  beforeEach(() => {
    props = {
      name: undefined,
      money: false
    };
    mountedSauce = undefined;
  });

  // All tests will go here
  it("always renders a div", () => {
      const divs = sauce().find("div");
      expect(divs.length).toBeGreaterThan(0);
  });
  describe("the rendered div", () => {
      it("contains everything else that gets rendered", () => {
          const divs = sauce().find("div");
          const wrappingDiv = divs.first();
          expect(wrappingDiv.type()).toEqual("div");
      });
  });
  describe("when 'name' is passed", () => {
      beforeEach(() => {
          props.name = "some name";
      });

      it("shows the name on the page", () => {
          expect(sauce().find('p.name').length).toBe(1);
      });
  });
  describe("when money is passed", () => {
    beforeEach(() => {
        props.money = true
      });
    it("renders House component", () => {
        expect(sauce().find('House').length).toBe(1)
    });
  });
});

