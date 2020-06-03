import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Exercise = props => (
  <View style={styles.card}>
    <Text>Jug</Text>
    <Text>Previous: {}</Text>
    <Text>Best: {}</Text>
  </View>
)

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: .3,
    borderRadius: 10,
    padding: 10,
    margin: 5
  }
})

export default Exercise;