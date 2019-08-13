
import React from 'react';
import { shallow } from 'enzyme';
import MailLink from './index';

describe('MailLink Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<MailLink />);
    expect(component.find('.record').length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
