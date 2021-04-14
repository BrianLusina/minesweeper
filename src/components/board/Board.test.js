import React from "react";
import { render } from "react-dom";
import Board from "./index";
import { mount, shallow } from "enzyme";
import sinon from "sinon";
import faker from "faker";
import { assert } from "chai";

describe("Board", () => {
  let mountWrapper;
  let shallowWrapper;

  let props = {
    mines: 10,
    height: 8,
    width: 8,
  };

  beforeEach(() => {
    mountWrapper = mount(<Board {...props} />);
    shallowWrapper = shallow(<Board {...props} />);
  });

  it("should be able to render", () => {
    render(<Board {...props} />, document.createElement("div"));
  });

  it("should be able to mount", () => {
    mount(<Board {...props} />);
  });

  it("should call static method getDerivedStateFromProps to update state", () => {
    sinon.stub(Board, "getDerivedStateFromProps").callsFake(() => props);

    // receive props
    shallowWrapper.setProps(props);

    expect(Board.getDerivedStateFromProps.calledOnce).toEqual(true);
    expect(Board.getDerivedStateFromProps.returnValues[0]).toEqual(props);
    expect(shallowWrapper.state().mines).toEqual(props.mines);
    expect(shallowWrapper.state().height).toEqual(props.height);
    expect(shallowWrapper.state().width).toEqual(props.width);
  });

  it("should call componentDidMount once and call __initBoardData", () => {
    sinon.spy(Board.prototype, "componentDidMount");
    sinon.spy(Board.prototype, "__initBoardData");

    mount(<Board {...props} />);

    expect(Board.prototype.componentDidMount.calledOnce).toEqual(true);
    expect(Board.prototype.__initBoardData.calledOnce).toEqual(true);
  });

  xit("should call __initBoardData instance method and call __createEmptyArray, __plantMines", () => {
    mountWrapper.instance().__createEmptyArray = jest.fn();
    mountWrapper.instance().__plantMines = jest.fn();
    mountWrapper.instance().__getNeighbours = jest.fn();

    mountWrapper.instance().render();

    mountWrapper.instance().__initBoardData();

    expect(mountWrapper.instance().__createEmptyArray).toHaveBeenCalledTimes(1);
    expect(mountWrapper.instance().__plantMines).toHaveBeenCalledTimes(1);
    expect(mountWrapper.instance().__getNeighbours).toHaveBeenCalledTimes(1);
  });

  it("should call __getRandomNumber that always returns a number", () => {
    let dimension = faker.random.number(10);
    let randomNum = mountWrapper.instance().__getRandomNumber(dimension);
    assert.isNumber(randomNum);
  });
});
