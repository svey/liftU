import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class ExerciseFooter extends Component {
  state = {
    reps: 0
  }

  addRep() {
    const reps = this.state.reps + 1;
    this.setState({ reps });
  }

  subtractRep() {
    const reps = this.state.reps - 1;
    this.setState({ reps });
  }

  render() {
    const { headerStyle, buttonContainerStyle } = styles;

    return (
      <Card>
        <CardSection>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={this.subtractRep.bind(this)} style={buttonContainerStyle}>
            <Text style={{ fontSize: 24 }}>◀</Text>
          </TouchableOpacity>
          <View style={headerStyle}>
            <Text style={{ fontSize: 18 }}>Reps</Text>
            <Text>{this.state.reps}</Text>
          </View>
          <TouchableOpacity onPress={this.addRep.bind(this)} style={buttonContainerStyle}>
            <Text style={{ fontSize: 24 }}>▶</Text>
          </TouchableOpacity>
          </View>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  headerStyle: {
    alignItems: 'center'
  },
  buttonContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default ExerciseFooter;
