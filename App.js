import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { cs } from './helpers';
import Intro from './components/intro';
//import { StackNavigator, } from 'react-navigation';


export default class App extends React.Component {

  constructor(props) {
    super(props);
  
    cs('hiiiiii');
  }
  render() {
    return (
      <View style={styles.container}>
        <Intro data={'dddd'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});