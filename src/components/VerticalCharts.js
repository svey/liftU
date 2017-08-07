import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

class VerticalCharts extends Component {
  render() {
    //const { workout } = this.props;//new Date();
    const workout = { completed: 15, dateObj: new Date() };
    const value = workout.completed;
    const month = workout.dateObj.getMonth() + 1; //months from 1-12
    const day = workout.dateObj.getDate();
    const date = `${month}-${day}`;
    const unitHeight = 10;

    const entity = value; //The bar
    const empty = 16 - value; //Faded part of the bar
    //16 should be set to the final amount of exercises in the routine

    return (
      <TouchableHighlight underlayColor='transparent'>
        <View style={styles.container}>
          <View style={styles.barWrapper}>
            <View style={[styles.bar, styles.empty, { height: (empty * unitHeight) }]} />
            <View style={[styles.bar, { height: (entity * unitHeight) }]} />
            <Text style={{ color: '#CBCBCD' }}>{date}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

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
  empty: {
    opacity: 0.2
  }
};

export default VerticalCharts;
