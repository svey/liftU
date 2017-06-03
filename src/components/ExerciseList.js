import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { exercisesFetch } from '../actions';
import ListItem from './ExerciseListItem';

class ExerciseList extends Component {
  componentWillMount() {
    this.props.exercisesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ routine }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(routine);
  }

  renderRow(exercise) {
    return <ListItem exercise={exercise} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = ({ exercises }) => {
  const { routine } = exercises;
  console.log(routine);
  return { routine };
};

export default connect(mapStateToProps, { exercisesFetch })(ExerciseList);
