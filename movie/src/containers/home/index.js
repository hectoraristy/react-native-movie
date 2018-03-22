/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  FlatList,
  Image,
  View
} from 'react-native';
import {connect} from 'react-redux';

import {screenName, LIMIT_PAGE} from './constants';
import {movieApi} from '../../api';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {mapStateToProps, mapDispatchToProps}  from './props';

import TouchableImage from '../../components/touchable-image';


class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.page = 1;
  }

  componentDidMount() {
    movieApi('getPopular', undefined , this.page).then((response) => {
      this.props.setMovies(response.results);
    })
  }

  onEndReached = () => {
    this.page += 1;
    movieApi('getPopular', undefined , this.page).then((response) => {
      if (LIMIT_PAGE >= this.page) {
        this.props.loadmoreMovies(response.results);
      }
    });
  }

  onFavoritePress = (state, item) => {
    if (state) {
      return this.props.addFavorite(item);
    }
    return this.props.removeFavorite(item);
  }

  renderItem = ({item}) => {
    return (
      <TouchableImage
        onFavoritePress={(state) => this.onFavoritePress(state, item)}
        onPress={() => console.warn('on press')}
        isFavorite={item.isFavorite}
        image={item.poster_path}
      />
    )
  }

  renderFlatList = (data, onEndReached) => {
    return (
      <FlatList
          horizontal={false}
          numColumns={2}
          onEndReached={onEndReached}
          keyExtractor={ item => `${item.id}`}
          data={data}
          renderItem={this.renderItem}
      />
    );
  } 

  render() {
    return (
      <ScrollableTabView>
        <View tabLabel="Home">
          {this.renderFlatList(this.props.movies, this.onEndReached)}
        </View>
        <View tabLabel="Favorites">
          {this.renderFlatList(this.props.favorites, () => {})}
        </View>
      </ScrollableTabView>
    );
  }
}

export default {
  screen: connect(mapStateToProps, mapDispatchToProps)(Home),
  screenName
}

