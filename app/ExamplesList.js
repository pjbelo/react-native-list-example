import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, FlatList, ItemSeparatorComponenti, Text, View, Alert } from 'react-native';


export default class ExamplesList extends React.Component {
  
  constructor(props){
    super(props);
  }

  static navigationOptions = {
    title: 'List Examples',
  };

  render(){

    return(

      <View style={styles.MainContainer}>
    
        <Text style={styles.item} onPress={() => 
          this.props.navigation.navigate('MyFlatList')}>Flat List</Text>

        <View style={styles.itemSeparator}/>

        <Text style={styles.item} onPress={() => 
          this.props.navigation.navigate('ListWithStickyHeader')}>List With Sticky Header</Text>

        <View style={styles.itemSeparator}/>

        <Text style={styles.item} onPress={() => 
          this.props.navigation.navigate('MySectionList')}>Section List</Text>

        <View style={styles.itemSeparator}/>

        <Text style={styles.item} onPress={() => 
          this.props.navigation.navigate('FlowersList')}>Images List</Text>

        <View style={styles.itemSeparator}/>

        <Text style={styles.item} onPress={() => 
          this.props.navigation.navigate('GridView')}>Grid View</Text>

        <View style={styles.itemSeparator}/>

        <Text style={styles.item} onPress={() => 
          this.props.navigation.navigate('ImageGallery')}>Image Gallery</Text>

        <View style={styles.itemSeparator}/>

        <Text style={styles.item} onPress={() => 
          this.props.navigation.navigate('SearchEx')}>Search Example</Text>

        <View style={styles.itemSeparator}/>

        <Text style={styles.item} onPress={() => 
          this.props.navigation.navigate('InfinitePagination')}>Infinite Pagination</Text>

        <View style={styles.itemSeparator}/>

        <Text style={styles.item} onPress={() => 
          this.props.navigation.navigate('About')}>About</Text>

        <View style={styles.itemSeparator}/>

      </View>            
    );
  }
}

const styles = StyleSheet.create({

MainContainer: {
flex:1,
margin: 10
},

item: {
    padding: 10,
    fontSize: 18,
    height: 44,
},

itemSeparator: {
  height: 1, 
  width: "100%", 
  backgroundColor: "#607D8B"
}

});

