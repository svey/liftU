import React from 'react';
import { View, Text } from 'react-native';

import Header from './components/Header';
import Routine from './components/Routine';

const App = () => (
  <View style={{ flex: 1 }} dev={false}>
    <Header text={'liftU'} />
    <Routine />
  </View>
);

export default App;
