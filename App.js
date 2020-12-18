/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import DrawerSelector from './components/DrawerSelector';

const App = () => {
  const [index, setIndex] = useState(0);
  // setDrawerVisible() will be used to open the drawer
  var setDrawerVisible;
  const setDrawerSelector = (func) => {
    setDrawerVisible = func;
  }
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Hello World React Native!</Text>
      <Button
        onPress={() => { setDrawerVisible(); }}
        title='Open Drawer'
      />
      <DrawerSelector index={index} setIndex={setIndex} data={[['1', 'Item 1', () => { console.log('Item 1 Selected') }], ['2', 'Item 2', () => { console.log('Item 2 Selected') }]]} setDrawerSelector={setDrawerSelector} />
    </View>
  );
};


const styles = StyleSheet.create({
  view: {
    backgroundColor: '#c3b3b3',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
});

export default App;
