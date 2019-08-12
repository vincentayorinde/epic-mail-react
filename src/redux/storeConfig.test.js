import store from './storeConfig';

describe('Test Store', () => {
  test('Should Test Redux Store', () => {
    expect(store).toMatchSnapshot();
  });
});
