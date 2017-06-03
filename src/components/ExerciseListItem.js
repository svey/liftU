import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from './common';

class ExerciseListItem extends Component {
  render() {
    const { imageContainerStyle, titleStyle, thumbnailStyle, headerStyle } = styles;
    const { exercise, programming, image } = this.props.exercise;
    console.log(this.props.exercise);
          //<Image style={thumbnailStyle} source={require('../liftu.png')} />
    return (
      <CardSection>
        <View style={imageContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: image }} />
        </View>
        <View style={headerStyle}>
          <Text style={titleStyle}>{exercise}</Text>
          <Text>{programming}</Text>  
        </View>
      </CardSection>
    );
  }
}

const styles = {
  headerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  titleStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 51,
    width: 50,
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default ExerciseListItem;
