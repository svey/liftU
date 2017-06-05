import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, CardSection } from './common';
import {
  exerciseSelect
} from '../actions';

class ExerciseListItem extends Component {

  onListItemPress(uri) {
    this.props.exerciseSelect(uri);
  }

  render() {
    const { imageContainerStyle, titleStyle, thumbnailStyle, headerStyle } = styles;
    const { exercise, programming, image } = this.props.exercise;
          //<Image style={thumbnailStyle} source={require('../liftu.png')} />

    return (
      <TouchableOpacity onPress={this.onListItemPress.bind(this, image)}>
        <CardSection>
          <View style={imageContainerStyle}>
            <Image style={thumbnailStyle} resizeMode='stretch' source={{ uri: image }} />
          </View>
          <View style={headerStyle}>
            <Text style={titleStyle}>{exercise}</Text>
            <Text>{programming}</Text>  
          </View>
        </CardSection>
      </TouchableOpacity>
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

export default connect(null, { exerciseSelect })(ExerciseListItem);
