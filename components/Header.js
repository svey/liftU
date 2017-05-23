import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ text }) => {
    const { textStyle, viewStyle } = styles;
    
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{text}</Text>
      </View>
    );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

export default Header;
