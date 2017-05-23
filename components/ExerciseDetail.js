import React from 'react';
import { Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const ExerciseDetail = ({ movement }) => {
  const { image } = movement;
  const { imageStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={imageStyle}>
          <Image style={imageStyle} source={{ uri: image }} />
        </View>
      </CardSection>
    </Card>
  );
      
};

const styles = {
  imageStyle: {
    height: 350,
    flex: 1,
    width: null
  }
};

export default ExerciseDetail;
