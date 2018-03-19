import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { cs } from './helpers';
import Intro from './components/intro';

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});