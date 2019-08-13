
import React from 'react';
import { shallow } from 'enzyme';
import MailView from './index';

describe('MailView Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<MailView />);
    expect(component.find('.mailView').length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
