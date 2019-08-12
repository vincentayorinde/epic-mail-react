import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button Component', () => {
  it('Should render button without errors', () => {
    const component = shallow(<Button />);
    expect(component.find('button').length).toBe(1);
    expect(component).toMatchSnapshot();
  });
  
  it('sets start button to Loading... when isSubmit is true', () =>{
    const component = shallow(<Button name="Start" isSubmit={true} />);
    expect(component.find('button').text()).toBe('Loading...');
  })
})