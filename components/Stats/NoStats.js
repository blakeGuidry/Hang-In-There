import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import NewRecord from './NewRecord';

const NoStats = props => {
  const [addMode, setAddMode] = useState(false);

  const cancelAdd = () => {
    setAddMode(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Stats</Text>
      <Button title='Start a Session' />
      <Button title='Add Session Record' onPress={() => setAddMode(true)} />
      <NewRecord visible={addMode} cancel={cancelAdd}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default NoStats;