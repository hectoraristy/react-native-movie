
// External
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './register-screens';
import {Provider} from 'react-redux';
import {store} from '../store';


// Internal
import Containers from '../containers';
import Resources from '../resources';

registerScreens(store, Provider); // this is where you register all of your app's screens

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: Containers.Home.screenName, // unique ID registered with Navigation.registerScreen
    title: 'Movies', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {
      navBarBackgroundColor: '#3A4F72',
      navBarTextColor: '#FFFFFF',
      navBarButtonColor: '#FFFFFF'
    }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {
      leftButtons: [
        {
          id: 'home',
          icon: Resources.home,
        }
      ],
      rightButtons: [
        {
          id: 'favorites',
          icon: Resources.start,
        }
      ]
    } // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
});