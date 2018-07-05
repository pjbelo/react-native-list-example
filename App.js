import React from 'react';
import { StyleSheet, View } from 'react-native';

import MyNavigation from './app/MyNavigation'

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <MyNavigation/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});







