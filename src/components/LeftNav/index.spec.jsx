
import React from 'react';
import { shallow } from 'enzyme';
import LeftNav from './index';

describe('LeftNav Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<LeftNav />);
    expect(component.find('.nav').length).toBe(4);
    expect(component).toMatchSnapshot();
  });
});
