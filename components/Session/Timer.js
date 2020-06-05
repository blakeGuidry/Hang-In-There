import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity, Text, Dimensions } from 'react-native';

const screen = Dimensions.get('window');

const Timer = props => {
  const [remaining, setRemaining] = useState(60);
  const [active, setActive] = useState(false);

  const startStop = () => {
    setActive(!active);
  }

  const reset = () => {
    setActive(false);
    setRemaining(60);
  }

  useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {
        setRemaining(remaining => remaining - 1);
      }, 1000);
    } else if (!active) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [active, remaining]);

  const formatNumber = number => `0${number}`.slice(-2);

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle='light-content' /> */}
      <Text style={styles.timerText}>{formatNumber(remaining)}</Text>
      <TouchableOpacity onPress={startStop} style={styles.button}>
        <Text style={styles.buttonText}>{active ? 'Pause' : 'Start'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={reset} style={[styles.button, styles.resetButton]}>
        <Text style={[styles.buttonText, styles.resetText]}>Reset</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07121B',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timerText: {
    color: '#fff',
    fontSize: 90,
    marginBottom: 20
  },
  button: {
    borderWidth: 10,
    borderColor: '#00ff00',
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 45,
    color: '#00ff00'
  },
  resetButton: {
    margin: 20,
    borderColor: '#FF851B'
  },
  resetText: {
    color: '#FF851B'
  }
})

export default Timer;