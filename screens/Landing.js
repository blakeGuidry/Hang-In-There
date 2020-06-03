import React from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';

const Landing = props => (
  <ImageBackground 
    style={styles.container} 
    source={require('../assets/kitty.png')}
    // onPress={}
  >
    <Text style={styles.title}>Hang In There</Text>
  </ImageBackground>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 50
  }
})

export default Landing;