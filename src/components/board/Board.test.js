import React from 'react';
import { render } from 'react-dom';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import faker from 'faker';
import { assert } from 'chai';
import Board from './index';

xdescribe('Board', () => {
  let mountWrapper;
  let shallowWrapper;

  const props = {
    mines: 10,
    height: 8,
    width: 8,
  };

  beforeEach(() => {
    mountWrapper = mount(<Board {...props} />);
    shallowWrapper = shallow(<Board {...props} />);
  });

  it('should be able to render', () => {
    render(<Board {...props} />, document.createElement('div'));
  });

  it('should be able to mount', () => {
    mount(<Board {...props} />);
  });

  it('should call static method getDerivedStateFromProps to update state', () => {
    sinon.stub(Board, 'getDerivedStateFromProps').callsFake(() => props);

    // receive props
    shallowWrapper.setProps(props);

    expect(Board.getDerivedStateFromProps.calledOnce).toEqual(true);
    expect(Board.getDerivedStateFromProps.returnValues[0]).toEqual(props);
    expect(shallowWrapper.state().mines).toEqual(props.mines);
    expect(shallowWrapper.state().height).toEqual(props.height);
    expect(shallowWrapper.state().width).toEqual(props.width);
  });

  it('should call componentDidMount once and call initBoardData', () => {
    sinon.spy(Board.prototype, 'componentDidMount');
    sinon.spy(Board.prototype, 'initBoardData');

    mount(<Board {...props} />);

    expect(Board.prototype.componentDidMount.calledOnce).toEqual(true);
    expect(Board.prototype.initBoardData.calledOnce).toEqual(true);
  });

  xit('should call initBoardData instance method and call createEmptyArray, plantMines', () => {
    mountWrapper.instance().createEmptyArray = jest.fn();
    mountWrapper.instance().plantMines = jest.fn();
    mountWrapper.instance().getNeighbours = jest.fn();

    mountWrapper.instance().render();

    mountWrapper.instance().initBoardData();

    expect(mountWrapper.instance().createEmptyArray).toHaveBeenCalledTimes(1);
    expect(mountWrapper.instance().plantMines).toHaveBeenCalledTimes(1);
    expect(mountWrapper.instance().getNeighbours).toHaveBeenCalledTimes(1);
  });

  it('should call getRandomNumber that always returns a number', () => {
    const dimension = faker.random.number(10);
    const randomNum = mountWrapper.instance().getRandomNumber(dimension);
    assert.isNumber(randomNum);
  });
});
