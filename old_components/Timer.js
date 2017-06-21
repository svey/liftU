import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { timerStart, timerStop } from '../src/actions';

class Timer extends Component {
  componentWillUnmount() {
    this.props.timerStop();
  }

  render() {
    const { headerStyle, titleStyle } = styles;

    return (
      <TouchableOpacity
        dev={false}
        onPress={this.props.timerStart.bind(this, this.props.exercise.time)}
        style={headerStyle}
      >
        <Text style={titleStyle}>Timer</Text>
        <Text>{this.props.timer.time}</Text>
      </TouchableOpacity>
    );
  }
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

const mapStateToProps = ({ exercises, timer }) => {
  const { exercise } = exercises;
  return { exercise, timer };
};

export default connect(mapStateToProps, { timerStart, timerStop })(Timer);
