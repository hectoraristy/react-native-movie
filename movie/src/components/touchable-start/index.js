/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Resources from '../../resources';
import {styles} from './styles';

class TouchableStart extends PureComponent {
  constructor(props) {
    super(props);
  }

  onPress = () => {
    this.props.onPress(!this.props.isFavorite);
  }

  render() {
    const image = this.props.isFavorite ? Resources.start : Resources.emptyStart;
    return (
      <TouchableOpacity
        style={this.props.style}
        onPress={this.onPress}
      >
        <Image
          style={styles.image}
          source={image}
        />
      </TouchableOpacity>
    );
  }
};


export default TouchableStart


