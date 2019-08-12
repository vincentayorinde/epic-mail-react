import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp, { SignUpComponent, cleanUp } from './index';
import store from '../../redux/storeConfig';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Sign Up View Component', () => {
  it('Should render without errors', () => {
    const component = shallow(
      <Router>
        <SignUp store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  it('Should Render With Children Component', () => {
    const component = mount(
      <Router>
        <SignUp store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
    expect(component.find('button')).toHaveLength(1);
    expect(component.find('input')).toHaveLength(6);
  });

  it('Should intiate onChange Props', () => {
    const event = {
      preventDefault() { },
      target: { value: 'vincent', name: 'email' }
    };
    const mockOnSignUpFn = jest.fn();
    const component = mount(
      <Router>
        <SignUpComponent onSignUp={mockOnSignUpFn} />
      </Router>
    );
    const inputTag = component.find('input').at(0);
    const submitBtn = component.find('button').at(0);
    inputTag.simulate('change', event);
    submitBtn.simulate('submit',
      { preventDefault() { } });
    expect(mockOnSignUpFn.mock.calls.length).toBe(1);
  });

  test('USE EFFECT => Should set toast if isCompleted is true', () => {
    const signUpStore = mockStore({
      auth:
      {
        error: null,
        user: {},
        isAuthenticated: false,
        isCompleted: true,
        isSubmit: false
      }
    });
    const component = mount(
      <Router>
        <SignUp store={signUpStore} />
      </Router>
    );

    const p = component.find('p').at(5);
    expect(p.text()).toEqual('Email');
  });

  test('Should initiate errors if error exist and is a string', () => {
    const signUpStore = mockStore({
      auth:
      {
        error: 'errors',
        user: {},
        isAuthenticated: false,
        isCompleted: false,
        isSubmit: false
      }
    });
    const component = mount(
      <Router>
        <SignUp store={signUpStore} />
      </Router>
    );

    const p = component.find('p').at(5);
    expect(p.text()).toEqual('Email');
  });

  test('Should initiate errors if error exist and is an array', () => {
    const signUpStore = mockStore({
      auth:
      {
        error: [{ message: 'errors' }],
        user: {},
        isAuthenticated: false,
        isCompleted: false,
        isSubmit: false
      }
    });
    const component = mount(
      <Router>
        <SignUp store={signUpStore} />
      </Router>
    );

    const p = component.find('p').at(5);
    expect(p.text()).toEqual('Email');
  });

  test('Should run clean up action ', () => {
    expect(cleanUp()).toEqual({ type: 'CLEAN_SIGNUP' });
  });

  it('Should check if password match', () => {
    const mockOnSignUpFn = jest.fn();
    const component = mount(
      <Router>
        <SignUpComponent onSignUp={mockOnSignUpFn} />
      </Router>
    );
    const inputTag = component.find('input');
    inputTag.at(0).simulate('change', {
      target:
        { name: 'email', value: 'vincent@epicmail.com' }
    });
    inputTag.at(1).simulate('change', {
      target:
        { name: 'firstName', value: 'vincent' }
    });
    inputTag.at(2).simulate('change', {
      target:
        { name: 'lastName', value: 'ayorinde' }
    });
    inputTag.at(3).simulate('change', {
      target:
        { name: 'password', value: 'password1' }
    });
    inputTag.at(4).simulate('change', {
      target:
        { name: 'confirmPassword', value: 'password2' }
    });
    const submitBtn = component.find('button').at(0);
    submitBtn.simulate('submit',
      { preventDefault() { } });
    expect(mockOnSignUpFn.mock.calls.length).toBe(0);
  });
  
});