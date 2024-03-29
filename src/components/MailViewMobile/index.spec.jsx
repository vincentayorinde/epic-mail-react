
import React from 'react';
import { shallow } from 'enzyme';
import MailViewMobile from './index';

describe('MailViewMobile Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<MailViewMobile />);
    expect(component.find('.box-11-inbox').length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
