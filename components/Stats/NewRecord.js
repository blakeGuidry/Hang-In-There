import React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Modal, ScrollView } from 'react-native';
import axios from 'axios';

import NewStat from './NewStat';

class NewRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Date: '',
      Jug: { Time: '', Weight: '' },
      IMR: { Time: '', Weight: '' },
      'Medium Edge': { Time: '', Weight: '' },
      'Wide Pinch (L)': { Time: '', Weight: '' },
      'Wide Pinch (R)': { Time: '', Weight: '' },
      MR: { Time: '', Weight: '' },
      'Lg Open-Hand': { Time: '', Weight: '' },
      'Medium Pinch (L)': { Time: '', Weight: '' },
      'Medium Pinch (R)': { Time: '', Weight: '' },
      Sloper: { Time: '', Weight: '' },
      MRP: { Time: '', Weight: '' },
    }

    this.handleInput = this.handleInput.bind(this);
    this.submitRecord = this.submitRecord.bind(this);
  }

  handleInput(name, param, input) {
    const update = {...this.state[name]};
    update[param] = input;
    this.setState({[name]: update});
  }

  submitRecord() {
    const record = this.state;
    axios.post('http://localhost:8000/stats', record)
      .then(() => {
        this.props.cancel();
      })
      .catch(err => console.error(err));
    
    this.props.update(record);
  }

  render() {
    return (
      <Modal visible={this.props.visible} animationType='slide' >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text>Date</Text>
          <TextInput 
            placeholder='Date (YYYY-MM-DD)' 
            style={styles.input} 
            onChangeText={date => this.setState({Date: date})}
            value={this.state.Date}
          />

          <NewStat name={'Jug'} time={this.state.Jug.Time} weight={this.state.Jug.Weight} handleInput={this.handleInput} />
          <NewStat name={'IMR'} time={this.state.IMR.Time} weight={this.state.IMR.Weight} handleInput={this.handleInput} />
          <NewStat name={'Medium Edge'} time={this.state['Medium Edge'].Time} weight={this.state['Medium Edge'].Weight} handleInput={this.handleInput} />
          <NewStat name={'Wide Pinch (L)'} time={this.state['Wide Pinch (L)'].Time} weight={this.state['Wide Pinch (L)'].Weight} handleInput={this.handleInput} />
          <NewStat name={'Wide Pinch (R)'} time={this.state['Wide Pinch (R)'].Time} weight={this.state['Wide Pinch (R)'].Weight} handleInput={this.handleInput} />
          <NewStat name={'MR'} time={this.state.MR.Time} weight={this.state.MR.Weight} handleInput={this.handleInput} />
          <NewStat name={'Lg Open-Hand'} time={this.state['Lg Open-Hand'].Time} weight={this.state['Lg Open-Hand'].Weight} handleInput={this.handleInput} />
          <NewStat name={'Medium Pinch (L)'} time={this.state['Medium Pinch (L)'].Time} weight={this.state['Medium Pinch (L)'].Weight} handleInput={this.handleInput} />
          <NewStat name={'Medium Pinch (R)'} time={this.state['Medium Pinch (R)'].Time} weight={this.state['Medium Pinch (R)'].Weight} handleInput={this.handleInput} />
          <NewStat name={'Sloper'} time={this.state.Sloper.Time} weight={this.state.Sloper.Weight} handleInput={this.handleInput} />
          <NewStat name={'MRP'} time={this.state.MRP.Time} weight={this.state.MRP.Weight} handleInput={this.handleInput} />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='CANCEL' color='red' onPress={this.props.cancel}/>
            </View>
            <View style={styles.button}>
              <Button title='ADD' onPress={this.submitRecord}/>
            </View>
          </View>

        </ScrollView>
      </Modal>
    )
  }
}
  
const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 50,
    paddingLeft: 15,
    //flex: 1,
    justifyContent: 'center', 
    //alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
    width: '40%'
  }
})

export default NewRecord;