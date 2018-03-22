import 'react-native';
// Note: test renderer must be required after react-native.
import shallow from 'react-test-renderer/shallow';
import React from 'react';
import Home from './index';
import configureStore from 'redux-mock-store'
 
// create any initial state needed
const initialState = {}; 
// here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore();
let wrapper;
const shallows = new shallow();

let store;
beforeEach(() => {
  //creates the store with any initial state or middleware needed  
  store = mockStore(initialState)
 });
 

it('renders correctly', () => {
  const tree = shallows.render(
    <Home.screen store={store}/>
  );
});