import React from 'react';
import { render } from 'react-dom';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Cell from './index';

xdescribe('Cell', () => {
  let mountWrapper;
  let shallowWrapper;
  let value = {
    isFlagged: true,
    isMine: false,
    neighbour: 5,
    isRevealed: false,
  };
  let props = {
    value,
    onClick: jest.fn(),
    onCtxMenu: jest.fn(),
  };

  beforeEach(() => {
    shallowWrapper = shallow(<Cell {...props} />);
    mountWrapper = mount(<Cell {...props} />);
  });

  it('render without crash', () => {
    render(<Cell {...props} />, document.createElement('div'));
  });

  it('should be able to mount', () => {
    mount(<Cell {...props} />);
  });

  it('should call getDerivedStateFromProps when we receive props', () => {
    sinon.stub(Cell, 'getDerivedStateFromProps').callsFake(() => props);
    shallowWrapper.setProps(props);
    expect(Cell.getDerivedStateFromProps.calledOnce).toEqual(true);
    expect(Cell.getDerivedStateFromProps.returnValues[0]).toEqual(props);
  });

  it('should call props onClick function when div is clicked', () => {
    shallowWrapper.find('div').simulate('click');
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should call onCtxMenu prop function when div onContextMenu is clicked', () => {
    shallowWrapper.find('div').simulate('contextMenu');
    expect(props.onCtxMenu).toHaveBeenCalledTimes(1);
  });

  it('should call private function getValue when render phase is reached', () => {
    shallowWrapper.instance().getValue = jest.fn();
    shallowWrapper.instance().render();
    expect(shallowWrapper.instance().getValue).toHaveBeenCalledTimes(1);
  });

  it('should update state when props are received', () => {
    expect(mountWrapper.state('value')).toEqual(props.value);

    // update the props
    value = {
      isFlagged: true,
      isMine: true,
      neighbour: 10,
      isRevealed: false,
    };

    props = {
      ...props,
      value,
    };

    mountWrapper.setProps(props);
    expect(mountWrapper.state('value')).toEqual(value);
  });

  it('should call getValue and return null if not revealed and not isFlagged for cell', () => {
    value = {
      ...value,
      isFlagged: false,
      isRevealed: false,
    };

    props = {
      ...props,
      value,
    };

    mountWrapper.setState(props);

    expect(mountWrapper.instance().getValue()).toEqual(null);
  });

  it('should call getValue and return 🚩 if isFlagged is true and isRevealed is false', () => {
    value = {
      ...value,
      isFlagged: true,
      isRevealed: false,
    };

    props = {
      ...props,
      value,
    };

    mountWrapper.setState(props);

    expect(mountWrapper.instance().getValue()).toEqual('🚩');
  });

  it('should call getValue and return mine 💣 if isMine is true', () => {
    value = {
      ...value,
      isRevealed: true,
      isMine: true,
    };

    props = {
      ...props,
      value,
    };

    mountWrapper.setState(props);

    expect(mountWrapper.instance().getValue()).toEqual('💣');
  });

  it('should call getValue and return null if neighbour is 0', () => {
    value = {
      ...value,
      isRevealed: true,
      isMine: false,
      neighbour: 0,
    };

    props = {
      ...props,
      value,
    };

    mountWrapper.setState(props);

    expect(mountWrapper.instance().getValue()).toEqual(null);
  });

  it('should vall getValue and return number of neighbouring mines if neighbor is not 0', () => {
    value = {
      ...value,
      isRevealed: true,
      isMine: false,
      neighbour: 5,
    };

    props = {
      ...props,
      value,
    };

    mountWrapper.setState(props);

    expect(mountWrapper.instance().getValue()).toEqual(value.neighbour);
  });
});
