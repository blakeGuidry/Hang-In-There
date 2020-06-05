import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import axios from 'axios';

import Timer from '../components/Session/Timer';
import Record from '../components/Session/Record';

let resetState;

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

    this.recordActive = this.recordActive.bind(this);
    this.record = this.record.bind(this);
  }

  componentDidMount() {
    resetState = Object.assign({}, this.state);
    this.getPrev();
  }

  reset() {
    this.setState(resetState, this.getPrev());
  }

  getPrev() {
    axios.get('http://localhost:8000/prev')
      .then(prev => {
        this.setState({prev: prev.data[0]})
      })
      .catch(err => console.error(err, 'Error getting previous'));
  }

  recordActive() {
    this.setState({record: true})
  }

  record(time, weight) {
    let hangs = this.state.hangs.slice();
    hangs[this.state.current].Time = time;
    hangs[this.state.current].Weight = weight;

    if (this.state.current === 10) {
      this.setState({
        hangs: hangs,
        record: false
      }, this.post)
    } else {
      this.setState({
        hangs: hangs,
        current: this.state.current + 1,
        record: false
      })
    }
  }

  post() {
    const record = { Date: this.state.Date }
    this.state.hangs.forEach(hang => {
      record[hang.name] = { Time: hang.Time, Weight: hang.Weight }
    })
    axios.post('http://localhost:8000/stats', record)
      .then(() => this.resetState() )
      .catch(err => console.error(err));
  }

  render() {
    let current = this.state.hangs[this.state.current];
    let previous = this.state.prev ? this.state.prev[current.name] : null;

    return (
      <View style={styles.container}>
        <Timer hang={current} prev={previous} toggle={this.recordActive}/>
        <Record visible={this.state.record} record={this.record}/>
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