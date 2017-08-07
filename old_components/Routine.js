import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import ExerciseDetail from './ExerciseDetail';
import ExerciseHeader from './ExerciseHeader';
import ExerciseFooter from './ExerciseFooter';


class Routine extends Component {
  state = {
    routine: [{ exercise: 'Please wait', programming: 'Loading..' }]
  }

  componentWillMount() {
    fetch('https://api-sv.herokuapp.com/bodyweightfitness')
    .then((routine) => routine.json())
    .then((routine) => this.setState({ routine }));
  }

  renderRoutine() {
    return this.state.routine.map(movement => {
       const width = Dimensions.get('window').width;
       //const height = Dimensions.get('window').height;
        return (
        <View style={{ width, backgroundColor: '#F8F8F8' }} key={movement.exercise}>
          <ExerciseHeader movement={movement} />
          <ExerciseDetail movement={movement} />
          <ExerciseFooter />
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView horizontal={true} pagingEnabled={true}>
        {this.renderRoutine()}
      </ScrollView>
    );
  }
}

export default Routine;
