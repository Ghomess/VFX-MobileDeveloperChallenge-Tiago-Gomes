import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from '../../redux/store';
import {render, waitFor} from '@testing-library/react-native';

import Stocks from './Stocks';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    getState: () => ({
      routes: [{name: 'Stocks'}],
      index: 0,
    }),
  }),
}));

test('renders correctly', async () => {
  await waitFor(() => {
    const tree = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stocks />
        </NavigationContainer>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
