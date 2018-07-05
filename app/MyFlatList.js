import React, { Component } from 'react';
import {  StyleSheet, FlatList, Text, View, Alert } from 'react-native';

export default class MyFlatList extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = { FlatListItems: [
      {key: 'One'},
      {key: 'Two'},
      {key: 'Three'},
      {key: 'Four'},
      {key: 'Five'},
      {key: 'Six'},
      {key: 'Seven'},
      {key: 'Eight'},
      {key: 'Nine'},
      {key: 'Ten'},
      {key: 'Eleven'},
      {key: 'Twelve'}
    ]}
  }

  static navigationOptions = {
    title: 'Flat List',
  };

  FlatListItemSeparator = () => {
    return (
      <View
        style={{height: 1, width: "100%", backgroundColor: "#607D8B"}}
      />
    );
  }

  GetItem (item) {
    Alert.alert(item);
  }


  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={ this.state.FlatListItems }
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.key)} > {item.key} </Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    flex:1,
    margin: 10
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});

