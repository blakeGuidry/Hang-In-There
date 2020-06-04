import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

class NewStat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <Text>{this.props.name}</Text>
        <TextInput 
          placeholder='Time (secs)' 
          style={styles.input} 
          onChangeText={number => this.props.handleInput(this.props.name, 'Time', number)}
          value={this.props.time}
        />
        <TextInput 
          placeholder='Weight (lbs)' 
          style={styles.input} 
          onChangeText={number => this.props.handleInput(this.props.name, 'Weight', number)}
          value={this.props.weight}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
})

export default NewStat;