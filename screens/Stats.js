import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import axios from 'axios';

import NewRecord from '../components/Stats/NewRecord';
import Exercise from '../components/Stats/Exercise';
import NoStats from '../components/Stats/NoStats';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addMode: false,
      bests: []
    }

    this.getBests = this.getBests.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
    this.updateBests = this.updateBests.bind(this);
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

  cancelAdd() {
    this.setState({addMode: false});
  }

  updateBests(newRecord) {
    // let id = 0;

    // if (this.state.bests > 0) {
    //   const newBests = this.state.bests.map(best => {
    //     const record = newRecord[best.name];
    //     if (record.Time > best.time && record.Weight > best.weight) {
    //       const newBest = { name: best.name, time: record.Time, weight: record.Weight, date: newRecord.Date }
    //       axios.put('http://localhost:8000/best', newBest)
    //         .catch(err => console.error(err, 'Error updating best record'));
    //       newBest._id = id++;
    //       return newBest;
    //     } else {
    //       return best;
    //     }
    //   })
    //   this.setState({bests: newBests});
    // } else {
    //   const newBests = [];
    //   for (let key in newRecord) {
    //     if (key !== 'Date') {
    //       const newBest = { name: key, time: newRecord[key].Time, weight: newRecord[key].Weight, date: newRecord.Date };
    //       axios.put('http://localhost:8000/best', newBest)
    //         .catch(err => console.error(err, 'Error updating best record'));
    //       newBest._id = id++;
    //       newBests.push(newBest);
    //     }
    //   }
    //   this.setState({bests: newBests});
    // }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Add Session Record' onPress={() => this.setState({addMode: true})} />
        <NewRecord visible={this.state.addMode} cancel={this.cancelAdd} update={this.updateBests}/>
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