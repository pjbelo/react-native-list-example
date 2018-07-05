import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ExamplesList from './ExamplesList'
import MyFlatList from './MyFlatList'
import ListWithStickyHeader from './ListWithStickyHeader'
import MySectionList from './MySectionList'
import FlowersList from './FlowersList'
import GridView from './GridView'
import ImageGallery from './ImageGallery'
import SearchEx from './SearchEx'
import InfinitePagination from './InfinitePagination'
import About from './About'

const ListMenu = createStackNavigator(
  {
    ExamplesList: ExamplesList,
    MyFlatList: MyFlatList,
    ListWithStickyHeader: ListWithStickyHeader,
    MySectionList: MySectionList,
    FlowersList: FlowersList,
    GridView: GridView,
    ImageGallery: ImageGallery,
    SearchEx: SearchEx,
    InfinitePagination: InfinitePagination,
    About: About,
  },
  {
    initialRouteName: 'ExamplesList',
        // Sharing common navigationOptions across screens
        navigationOptions: {
          headerStyle: {
            backgroundColor: '#f451',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
  }
);

export default class MyNavigation extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ListMenu/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
  },
});