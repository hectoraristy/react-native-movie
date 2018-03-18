import { Navigation } from 'react-native-navigation';

import Containers from '../containers';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent(Containers.Home.screenName, () => Containers.Home.screen);
}