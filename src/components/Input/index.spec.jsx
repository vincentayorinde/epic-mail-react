
import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';

describe('Input Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<Input />);
    expect(component.find('input').length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
