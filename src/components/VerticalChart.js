import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

const VerticalChart = ({ log }) => {
    const { completed, date } = log;
    const unitHeight = 10;
    const opaque = completed; //The bar
    const shaded = 16 - completed; //Faded part of the bar
    //16 should be set to the final amount of exercises in the routine

    return (
      <TouchableHighlight underlayColor='transparent'>
        <View style={styles.container}>
          <View style={styles.barWrapper}>
            <View style={[styles.bar, styles.shaded, { height: (shaded * unitHeight) }]} />
            <View style={[styles.bar, { height: (opaque * unitHeight) }]} />
            <Text style={{ color: '#CBCBCD' }}>{date}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
};

const styles = {
  container: {
    position: 'relative',
    margin: 5,
    borderRightWidth: 1,
    borderRightColor: '#CBCBCD'
  },
  // Bar
  barWrapper: {
    position: 'relative',
    margin: 2
  },
  bar: {
    width: 20,
    backgroundColor: 'orange',
    marginRight: 10
  },
  shaded: {
    opacity: 0.2
  }
};

export default VerticalChart;
