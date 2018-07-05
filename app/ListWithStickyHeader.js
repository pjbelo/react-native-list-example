import React, { Component } from 'react';
import { StyleSheet,View, FlatList, Text, Alert, Platform } from 'react-native';
 
export default class ListWithStickyHeader extends Component {
  
  constructor(props) {
    super(props);
 
    this.state = { FlatListItems: [
      {key: 'Apple'},
      {key: 'Apricot'},
      {key: 'Avocado'},
      {key: 'Banana'},
      {key: 'Blackberry'},
      {key: 'Blackcurrant'},
      {key: 'Blueberry'},
      {key: 'Boysenberry'},
      {key: 'Cherry'},
      {key: 'Coconut'},
      {key: 'Grape'},
      {key: 'Grapefruit'},
      {key: 'Kiwifruit '},
      {key: 'Lemon'},
      {key: 'Lime'},
      {key: 'Litchi'},
      {key: 'Mango'},
      {key: 'Melon'},
      {key: 'Nectarine'},
      {key: 'Orange'},
      {key: 'Papaya'},
    ]}
  }
 
  static navigationOptions = {
    title: 'List With Sticky Header',
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

  Render_FlatList_Sticky_header = () => {
    var Sticky_header_View = (
    <View style={styles.header_style}>
      <Text style={{textAlign: 'center', color: '#fff', fontSize: 22}}> FlatList Sticky Header </Text>
    </View>
    );
    return Sticky_header_View;
  };

 
  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={ this.state.FlatListItems }
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) => <Text style={styles.FlatList_Item} onPress={this.GetItem.bind(this, item.key)} > {item.key} </Text>}
          ListHeaderComponent={this.Render_FlatList_Sticky_header}
          stickyHeaderIndices={[0]}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    flex:1,
    paddingTop: (Platform.OS === 'iOS') ? 20 : 0
  },
  
  FlatList_Item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  header_style: {
    width: '100%', 
    height: 45, 
    backgroundColor: 'dodgerblue', 
    alignItems: 'center', 
    justifyContent: 'center'
  }
 
});