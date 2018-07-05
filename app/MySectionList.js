import React, { Component } from 'react';
import { StyleSheet, View, SectionList, Text, Platform, Alert } from 'react-native';

export default class MySectionList extends Component {

  static navigationOptions = {
    title: 'Section List',
  };

  GetSectionListItem=(item)=>{
    Alert.alert(item)
  }

  render() {

    let A = ['Apple', 'Apricot', 'Avocado', 'Apple', 'Apricot', 'Avocado'];
    let B = ['Banana', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry'] ;
    let C = ['Currant', 'Cherry', 'Cloudberry', 'Coconut', 'Cranberry', 'Cucumber'] ;
    let D = ['Damson', 'Date', 'Dragonfruit', 'Durian', 'Damson', 'Date', 'Dragonfruit', 'Durian'];
    let P = ['Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate'];

    return (
      <View style={{ marginBottom: (Platform.OS) == 'ios' ? 20 : 10 }}>
        <SectionList
          sections={[
            { title: 'Fruits Name From A', data: A },
            { title: 'Fruits Name From B', data: B },
            { title: 'Fruits Name From C', data: C },
            { title: 'Fruits Name From D', data: D },
            { title: 'Fruits Name From P', data: P },
          ]}
          renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }
          renderItem={ ({item}) => <Text style={styles.SectionListItemStyle} onPress={this.GetSectionListItem.bind(this, item)}> { item } </Text> }
          keyExtractor={ (item, index) => index }
        />
      </View> 
    );
  }
}

const styles = StyleSheet.create({

  SectionHeaderStyle:{
    backgroundColor : 'dodgerblue',
    fontSize : 20,
    padding: 5,
    color: '#fff',
  },

  SectionListItemStyle:{
    fontSize : 15,
    padding: 5,
    color: '#000',
    backgroundColor : '#F5F5F5'
  }

});
