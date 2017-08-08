import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import { exercisesLogFetch } from '../actions';
import VerticalChart from './VerticalChart';

class WorkoutHistory extends Component {
  componentWillMount() {
    this.props.exercisesLogFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ log }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(log);
  }

  renderRow(log, sectionID, rowID) {
    return <VerticalChart rowID={rowID} log={log} />;
  }

  render() {
    return (
      <View>
        <ListView
          horizontal
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ exercises }) => {
  const { log } = exercises;
  return { log };
};

export default connect(mapStateToProps, {
  exercisesLogFetch,
})(WorkoutHistory);
