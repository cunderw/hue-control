import {StyleSheet, Text, View, TextInput} from 'react-native';
import Expo from 'expo'

export default StyleSheet.create({
  seachContainer: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Expo.Constants.statusBarHeight
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeScreen: {
    backgroundColor: '#fff',
  }
});
