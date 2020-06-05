import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import axios from 'axios';

import Timer from '../components/Session/Timer';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prev: null,
      Date: new Date().toISOString().slice(0,10),
      hangs: [
        { name: 'Jug', Time: '', Weight: '' },
        { name: 'IMR', Time: '', Weight: '' },
        { name: 'Medium Edge', Time: '', Weight: '' },
        { name: 'Wide Pinch (L)', Time: '', Weight: '' },
        { name: 'Wide Pinch (R)', Time: '', Weight: '' },
        { name: 'MR', Time: '', Weight: '' },
        { name: 'Lg Open-Hand', Time: '', Weight: '' },
        { name: 'Medium Pinch (L)', Time: '', Weight: '' },
        { name: 'Medium Pinch (R)', Time: '', Weight: '' },
        { name: 'Sloper', Time: '', Weight: '' },
        { name: 'MRP', Time: '', Weight: '' }
      ],
      current: 0,
      record: false
    }
  }

  componentDidMount() {
    this.getPrev();
  }

  getPrev() {
    axios.get('http://localhost:8000/prev')
      .then(prev => {
        this.setState({prev: prev.data[0]})
      })
      .catch(err => console.error(err, 'Error getting previous'));
  }

  record() {

  }

  render() {
    let current = this.state.hangs[this.state.current];
    let previous = this.state.prev ? this.state.prev[current.name] : null;

    return (
      <View style={styles.container}>
        <Timer hang={current} prev={previous}/>
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