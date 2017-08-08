import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ColumnCharts from '../components/ColumnCharts';
import WorkoutHistory from '../components/WorkoutHistory';
import { Card, CardSection, Header, Button } from '../components/common';
import { exerciseLog } from '../actions';

class WorkoutInfo extends Component {
  onButtonPress() {
    const { completed } = this.props;
    this.props.exerciseLog({ completed });
  }

  render() {
    return (
      <View>
        <Card>
          <Header headerText={'CURRENT WORKOUT'}>
            <Button onPress={this.onButtonPress.bind(this)} text="LOG WORKOUT">
              <Icon name='backup' size={20} />
            </Button>
          </Header>
          <CardSection>
            <ColumnCharts />
          </CardSection>
        </Card>
        <Card>
          <Header headerText={'WORKOUT HISTORY'} />
          <CardSection>
            <WorkoutHistory log={{ completed: 10, date: '8-8' }} />
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({ exercises }) => {
  const { completed, skipped } = exercises;
  return { completed, skipped };
};

export default connect(mapStateToProps, { exerciseLog })(WorkoutInfo);
