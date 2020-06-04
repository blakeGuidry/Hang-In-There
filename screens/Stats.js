import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import axios from 'axios';

import Exercise from '../components/Stats/Exercise';
import NoStats from '../components/Stats/NoStats';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bests: []
    }
  }

  componentDidMount() {
    this.getBests();
  }

  getBests() {
    axios.get('http://localhost:8000/bests')
      .then(bests => {
        this.setState({bests: bests.data})
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.bests.length > 0 ? 
          <FlatList
            keyExtractor={item => item._id}
            data={this.state.bests}
            renderItem={({ item }) => <Exercise best={item}/> }
          /> :
          <NoStats />
        }
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