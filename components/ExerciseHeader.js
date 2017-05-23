import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Timer from './Timer';

class ExerciseHeader extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      timer: 'Tap to start',
    };

    this.movement = props.movement;
  }

  startTimer(duration = 0) {
    let timer = duration;
    const interval = setInterval(() => {
      let minutes = parseInt(timer / 60, 10);
      let seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      this.setState({ timer: `${minutes}:${seconds}` });
      
      if (--timer < 0) {
          this.setState({ timer: 'Tap to start' });
          clearInterval(interval);
      }
    }, 1000);
  }

  render() {
    const { timerStyle, headerStyle, titleStyle, thumbnailStyle, imageContainerStyle } = styles;
    const { exercise, programming, time } = this.movement;

    return (
      <Card>
        <CardSection>
          <View style={imageContainerStyle}>
            <Image style={thumbnailStyle} source={require('../liftu.png')} />
          </View>
          <View style={headerStyle}>
            <Text style={titleStyle}>{exercise}</Text>
            <Text>{programming}</Text>  
          </View>
          <View style={timerStyle}>
            <Timer time={this.state.timer} onPress={this.startTimer.bind(this, time)} />  
          </View>
        </CardSection>
      </Card>
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
  },
    timerStyle: {
    flex: 1,
    alignItems: 'flex-end'
  }
};

export default ExerciseHeader;
