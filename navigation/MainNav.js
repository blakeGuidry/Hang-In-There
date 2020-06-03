
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import StatsScreen from '../screens/Stats';
import SessionScreen from '../screens/Session';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Stats' component={StatsScreen} />
      <Stack.Screen name='Session' component={SessionScreen} />
    </Stack.Navigator>
  )
}

export default MyStack;