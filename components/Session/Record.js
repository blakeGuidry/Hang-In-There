import React, { useState } from 'react';
import { StyleSheet, Modal, View, TextInput, Button } from 'react-native';

const Record = props => {
  const [time, setTime] = useState('');
  const [weight, setWeight] = useState('');

  const addRecord = () => {
    props.record(time, weight)
    setTime('');
    setWeight('');
  }

  return (
    <Modal visible={props.visible} animationType='slide' >
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Time (secs)' 
          style={styles.input} 
          onChangeText={input => setTime(input)}
          value={time}
        />
        <TextInput 
          placeholder='Weight (lbs)' 
          style={styles.input} 
          onChangeText={input => setWeight(input)}
          value={weight}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='ADD' onPress={addRecord} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
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
    // justifyContent: 'space-between',
    width: '60%'
  },
//   button: {
//     width: '40%'
//   }
})

export default Record;