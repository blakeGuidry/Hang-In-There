import React from 'react';
import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native';

const Home = ({ navigation }) => (
  <ImageBackground style={styles.container} source={require('../assets/kitty.png')}>
    <View style={styles.container}>
      <Button title='Stats' onPress={() => navigation.navigate('Stats')}/>
      <Button title='New Session' onPress={() => navigation.navigate('Session')}/>
    </View>
    <Text style={styles.title}>Hang In There</Text>
  </ImageBackground>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 50
  }
})

export default Home;