import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import axios from 'axios';

import Timer from '../components/Session/Timer';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prev: {}
    }
  }

  componentDidMount() {
    this.getPrev();
  }

  getPrev() {
    axios.get('http://localhost:8000/prev')
      .then(prev => {
        this.setState({prev: prev.data[0]})})
      .catch(err => console.error(err, 'Error getting previous'));
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Session;