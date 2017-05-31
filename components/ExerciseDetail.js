import React from 'react';
import { Image, View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const ExerciseDetail = ({ movement }) => {
  const { image } = movement;
  const { imageStyle, headerStyle, titleStyle } = styles;
        // <View style={headerStyle}>
        //   <Text>
        //     Get into plank position, lockout your elbows, and focus on the space between shoulder blades.
        //   </Text>
        //   <Text>
        //     The first part of the motion is retraction: Squeeze your shoulder blades together, keep a straight back and allow your body to fall through your shoulders.
        //   </Text>
        //   <Text>
        //     The second part of the motion is protraction: Push your shoulder blades apart from the center of your back, keep your back straight and raise your body up, through, and above your shoulders.
        //   </Text>
        // </View>

  return (
    <Card>
      <CardSection>
        <View style={imageStyle}>
          <Image resizeMode="contain" style={imageStyle} source={{ uri: image }} />
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
  },
  headerStyle: {
    height: 200,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleStyle: {
    fontSize: 18
  },
};

export default ExerciseDetail;
