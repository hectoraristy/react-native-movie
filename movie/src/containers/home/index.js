/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList,
  Image
} from 'react-native';

import {styles} from './styles';
import {screenName} from './constants';
import {movieApi} from '../../api';

import TouchableImage from '../../components/touchable-image';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    movieApi('getPopular').then((response) => this.setState({ data: response.results}))
  }

  renderItem({item}) {
    return (
      <TouchableImage
        onPress={() => console.warn('on press')}
        image={item.poster_path}
      />
    )
  }

  render() {
    return (
      <FlatList
        horizontal={false}
        contentContainerStyle={styles.flatlist}
        keyExtractor={ item => `${item.id}`}
        data={this.state.data}
        renderItem={this.renderItem}
      />
    );
  }
}

export default {
  screen: Home,
  screenName
}

