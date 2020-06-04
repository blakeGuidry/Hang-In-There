import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Exercise = ({best}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{best.name}</Text>
      <Text>Best: {best.date.slice(0, 10)}</Text>
      <Text>Time: {best.time}</Text>
      <Text>Weight: {best.weight}</Text>
    </View>
  )
}

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