import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const NoStats = props => (
  <View style={styles.container}>
    <Text style={styles.title}>No Stats</Text>
    <Button title='Start a Session' />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default NoStats;