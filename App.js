import React, { Component } from 'react'
import { StyleSheet, Text, View , Platform} from 'react-native';
import Feeding from "./screens/feeding";
import Constants from "expo-constants";

export default class App extends Component {

  render() {
  return(
  <View style={styles.container}>
      <Feeding style={styles.feed}/>
  </View>
);
}
}

const platformVersion =
  Platform.OS === 'ios'
    ? parseInt(Platform.Version, 10)
    : Platform.Version;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight
        : 0,
  },
});
