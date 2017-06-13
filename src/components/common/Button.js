import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
      <Text style={textStyle}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f8f8f8',
    fontSize: 13,
    padding: 5,
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 7
  }
};

export { Button };
