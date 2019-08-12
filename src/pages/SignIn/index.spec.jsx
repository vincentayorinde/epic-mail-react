import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import SignIn, { SignInComponent, cleanUp } from './index';
import store from '../../redux/storeConfig';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Sign In View Component', () => {
  it('Should render without errors', () => {
    const component = shallow(
      <Router>
        <SignIn store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  it('Should Render With Children Component', () => {
    const component = mount(
      <Router>
        <SignIn store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
    expect(component.find('button')).toHaveLength(1);
    expect(component.find('input')).toHaveLength(2);
  });

  it('Should intiate onChange Props', () => {
    const event = {
      preventDefault() { },
      target: { value: 'vincent', name: 'email' }
    };
    const mockOnSignInFn = jest.fn();
    const component = mount(
      <Router>
        <SignInComponent onSignIn={mockOnSignInFn} />
      </Router>
    );
    const inputTag = component.find('input').at(0);
    const submitBtn = component.find('button').at(0);
    inputTag.simulate('change', event);
    submitBtn.simulate('submit',
      { preventDefault() { } });
    expect(mockOnSignInFn.mock.calls.length).toBe(1);
  });

  test('USE EFFECT => Should set toast if isCompleted is true', () => {
    const signInStore = mockStore({
      authLogin:
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
        <SignIn store={signInStore} />
      </Router>
    );

    const p = component.find('p').at(5);
    expect(p.text()).toEqual('Email');
  });

  test('Should initiate errors if error exist and is a string', () => {
    const signInStore = mockStore({
      authLogin:
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
        <SignIn store={signInStore} />
      </Router>
    );

    const p = component.find('p').at(5);
    expect(p.text()).toEqual('Email');
  });

  test('Should initiate errors if error exist and is an array', () => {
    const signInStore = mockStore({
      authLogin:
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
        <SignIn store={signInStore} />
      </Router>
    );

    const p = component.find('p').at(5);
    expect(p.text()).toEqual('Email');
  });

  test('Should run clean up action ', () => {
    expect(cleanUp()).toEqual({ type: 'CLEAN_SIGNIN' });
  });

});