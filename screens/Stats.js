import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import axios from 'axios';

import Exercise from '../components/Stats/Exercise';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.getStats();
  }

  getStats() {
    axios.get('http://localhost:8000/stats')
      .then(() => console.log('axios works'))
      .catch(() => console.log('no bueno'));
  }

  render() {
    return (
      <View style={styles.container}>
        <Exercise />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Stats;