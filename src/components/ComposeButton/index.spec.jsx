
import React from 'react';
import { shallow } from 'enzyme';
import ComposeButton from './index';

describe('ComposeButton Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<ComposeButton />);
    expect(component.find('.box-1-inbox').length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
