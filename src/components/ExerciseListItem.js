import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { CardSection } from './common';
import {
  exerciseSelect
} from '../actions';

class ExerciseListItem extends Component {

  onListItemPress(exercise, rowID) {
    this.props.exerciseSelect(exercise, rowID);
  }

  render() {
    const { imageContainerStyle, titleStyle, thumbnailStyle, headerStyle } = styles;
    const { exercise, programming, image } = this.props.exercise;
    
    return (
      <Swipeout left={swipeoutBtns}>
      <TouchableOpacity onPress={this.onListItemPress.bind(this, this.props.exercise, this.props.rowID)}>
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
      </Swipeout>
    );
  }
}

const swipeoutBtns = [
  {
    text: 'Button'
  }
];

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
