import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Exercise from '../components/Stats/Exercise';

const Stats = props => (
  <View style={styles.container}>
    <Exercise />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Stats;