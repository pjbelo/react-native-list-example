import React from 'react';
import { WebView, StyleSheet, Text, View } from 'react-native';


export default class InfoDetails extends React.Component {

  static navigationOptions = {
    title: 'About',
  };


  render() {
    return (

      <View style={styles.container}>

        <Text style={styles.myStyle}>Examples based on tutorials from </Text>
        <Text style={styles.myStyle}>https://reactnativecode.com/ </Text>

        <WebView
          source={{uri: 'https://reactnativecode.com/'}}
          style={{marginTop: 20}}
          renderLoading={this.renderLoading}
          startInLoadingState
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginBottom: 20
  },

  myStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
},
});









