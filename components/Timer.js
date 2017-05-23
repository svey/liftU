import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Timer = ({ time, onPress }) => {
  const { headerStyle, titleStyle } = styles;

    return (
      <TouchableOpacity dev={false} onPress={onPress} style={headerStyle}>
        <Text style={titleStyle}>Timer</Text>
        <Text>{time}</Text>
      </TouchableOpacity>
    );
}

const styles = {
  headerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingRight: 10
  },

  titleStyle: {
    fontSize: 24
  },
};

export default Timer;
