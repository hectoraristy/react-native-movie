/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  FlatList,
  Image
} from 'react-native';

import {styles} from './styles';
import {screenName, LIMIT_PAGE} from './constants';
import {movieApi} from '../../api';

import TouchableImage from '../../components/touchable-image';


class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
    this.page = 1;
    this.onEndReached = this.onEndReached.bind(this);
  }

  componentDidMount() {
    movieApi('getPopular', undefined , this.page).then((response) => this.setState({ data: response.results}))
  }

  onEndReached() {
    this.page += 1;
    movieApi('getPopular', undefined , this.page).then((response) => {
      if (LIMIT_PAGE >= this.page) {
        this.setState({ 
          data: this.state.data.concat(response.results)
        });
      }
    });
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
        onEndReached={this.onEndReached}
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

