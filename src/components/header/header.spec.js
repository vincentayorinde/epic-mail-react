/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = component.find('[data-test=\'headerComponent\']');
    expect(wrapper.length).toBe(1);
  });

  it('Should renter a logo', () => {
    const logo = component.find('[data-test=\'logoText\']');
    expect(logo.length).toBe(1);
  });
});
