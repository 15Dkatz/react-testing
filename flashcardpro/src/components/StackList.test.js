import React from 'react';
import { shallow } from 'enzyme';
import { StackList } from './StackList';
import { stacks } from '../data/fixtures';

const props = { stacks };

describe('StackList', () => {
  const stackList = shallow(<StackList {...props} />);

  it('renders the correct number of links', () => {
    expect(stackList.find('Link').length).toEqual(props.stacks.length);
  });
});