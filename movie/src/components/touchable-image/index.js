/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import {styles} from './styles';
import {getImageUrl} from '../../utils/format-image';
import TouchableStar from '../touchable-start';


const TouchableImage = (props) => {

  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={{uri: getImageUrl(props.image)}}
      >
        <TouchableStar
          style={styles.star}
          onPress={props.onFavoritePress}
        />
      </ImageBackground>
    </TouchableOpacity>
  );
};


export default TouchableImage


