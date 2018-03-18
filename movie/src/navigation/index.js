import { Navigation } from 'react-native-navigation';

import { registerScreens } from './register-screens';

import Containers from '../containers';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: Containers.Home.screenName, // unique ID registered with Navigation.registerScreen
    title: 'Movie', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
});