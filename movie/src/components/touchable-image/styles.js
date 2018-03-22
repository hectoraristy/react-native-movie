import {
  StyleSheet,
  Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  image: {
    width: width / 2,
    height: 300
  },
  star: {
    position:'absolute',
    right: 0,
    bottom:0
  }
});
