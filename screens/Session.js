import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Session = props => (
  <View style={styles.container}>
    <Text>Session Screen</Text>
    
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Session;