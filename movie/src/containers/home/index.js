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
import {connect} from 'react-redux';

import {screenName, LIMIT_PAGE} from './constants';
import {movieApi} from '../../api';
import {mapStateToProps, mapDispatchToProps}  from './props';

import TouchableImage from '../../components/touchable-image';


class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
    this.page = 1;
    this.renderItem = this.renderItem.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this.onFavoritePress = this.onFavoritePress.bind(this);
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

  onFavoritePress(state, item) {
    if (state) {
      return this.props.addFavorite(item);
    }
    return this.props.removeFavorite(item);
  }

  renderItem({item}) {
    return (
      <TouchableImage
        onFavoritePress={(state) => this.onFavoritePress(state, item)}
        onPress={() => console.warn('on press')}
        image={item.poster_path}
      />
    )
  }

  render() {
    return (
      <FlatList
        horizontal={false}
        numColumns={2}
        onEndReached={this.onEndReached}
        keyExtractor={ item => `${item.id}`}
        data={this.state.data}
        renderItem={this.renderItem}
      />
    );
  }
}

export default {
  screen: connect(mapStateToProps, mapDispatchToProps)(Home),
  screenName
}

