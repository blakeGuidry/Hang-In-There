import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button title='Stats' onPress={() => navigation.navigate('Stats')}/>
    <Button title='New Session' onPress={() => navigation.navigate('Session')}/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home;