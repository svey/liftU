import React from 'react';
import { View } from 'react-native';

const Card = ({ children }) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      {children}
    </View>
  );
};

const styles = {
  containerStyle: {
    //width: '100%',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#F8F8F8',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
