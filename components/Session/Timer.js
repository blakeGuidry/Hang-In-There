import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity, Text, Dimensions } from 'react-native';

const screen = Dimensions.get('window');

const Timer = props => {
  const [remaining, setRemaining] = useState(10);
  const [active, setActive] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [int, setInt] = useState(0);
  const [remain, setRemain] = useState(60);
  const [stage, setStage] = useState(1);

  const startStop = () => {
    setActive(!active);
  }

  const reset = () => {
    setActive(false);
    setRemaining(10);
    setElapsed(0);
    setInt(0);
    setRemain(60);
    setStage(1);
  }

  useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {
        setRemaining(remaining => remaining - 1);

        // Elapsed and remaining for hangs
        if (stage % 2 === 0 && remaining > 0) {
          setElapsed(elapsed => elapsed + 1);
          setRemain(remain => remain - 1);
        }
  
        // Reset time for rests and hangs
        if (remaining === 0) {
          if (stage % 2 !== 0) {
            setInt(int => int + 1);
            setStage(stage => stage + 1);
            setRemaining(10);
          } else if (stage % 2 === 0 && stage < 12) {
            setStage(stage => stage + 1);
            setRemaining(5);
          } else {
            clearInterval(interval);
            setRemaining(0);
            props.toggle();
          }
        }

      }, 1000);
    } else if (!active) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [active, remaining]);

  const formatNumber = number => `0${number}`.slice(-2);

  let current, next;
  if (stage === 1) {
    current = <Text style={[styles.current, {color: '#fff'}]}>READY!</Text>;
    next = <Text style={[styles.next, {color: '#00ff00'}]}>NEXT: HANG</Text>;
  } else if (stage % 2 === 0) {
    current = <Text style={[styles.current, {color: '#00ff00'}]} >HANG</Text>;
    next = <Text style={[styles.next, {color: '#ffff00'}]}>NEXT: REST</Text>;
  } else {
    current = <Text style={[styles.current, {color: '#ffff00'}]}>REST</Text>;
    next = <Text style={[styles.next, {color: '#00ff00'}]} >NEXT: HANG</Text>;
  }

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle='light-content' /> */}
      <Text style={styles.timerText}>{formatNumber(remaining)}</Text>
      
      <View style={styles.eir}>
        <View style={styles.eirInner}>
          <Text style={styles.eirText}>ELAPSED</Text>
          <Text style={styles.eirCountText}>{formatNumber(elapsed)}</Text>
        </View>
        <View style={styles.eirInner}>
          <Text style={styles.eirText}>INTERVAL</Text>
          <Text style={styles.eirCountText}>{`${int}/6`}</Text>
        </View>
        <View style={styles.eirInner}>
          <Text style={styles.eirText}>REMAINING</Text>
          <Text style={styles.eirCountText}>{formatNumber(remain)}</Text>
        </View>
      </View>

      <Text style={styles.hang}>{props.hang.name}</Text>
      <Text style={styles.prev}>Last Time: {props.prev && props.prev.Time ? props.prev.Time : 0}     Last Weight: {props.prev && props.prev.Weight ? props.prev.Weight : 0}</Text>
      
      {current}
      {next}

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={reset} style={[styles.button, styles.resetButton]}>
          <Text style={[styles.buttonText, styles.resetText]}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={startStop} style={styles.button}>
          <Text style={styles.buttonText}>{active ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>
      </View>
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
  eir: {
    //flex: 1,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between'
  },
  eirInner: {
    alignItems: 'center',
    width: '30%'
  },
  eirText: {
    color: '#fff',
    fontSize: 13
  },
  eirCountText: {
    color: '#fff',
    fontSize: 23
  },
  hang: {
    marginTop: 23,
    marginBottom: 5,
    color: '#40e0d0',
    fontSize: 20,
    fontWeight: 'bold'
  },
  prev: {
    marginBottom: 15,
    color: '#40e0d0',
    fontSize: 15
  },
  current: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
  },
  next: {
    fontSize: 20,
    marginBottom: 20
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 50,
    justifyContent: 'center'
  },
  button: {
    borderWidth: 5,
    marginLeft: 10,
    borderColor: '#00ff00',
    width: screen.width / 4,
    height: screen.width / 4,
    borderRadius: screen.width / 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#00ff00'
  },
  resetButton: {
    marginLeft: 0,
    marginRight: 10,
    borderColor: '#FF851B'
  },
  resetText: {
    color: '#FF851B'
  }
})

export default Timer;