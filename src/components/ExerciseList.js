import React, { Component } from 'react';
import { ListView, Modal, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { exercisesFetch, exerciseDeselect } from '../actions';
import ListItem from './ExerciseListItem';
import { Card, CardSection, Button } from './common';

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


  closeModal() {
    this.props.exerciseDeselect();
  }

  renderRow(exercise) {
    return <ListItem exercise={exercise} />;
  }

  render() {
    return (
      <View>
        <Modal
          animationType={'slide'}
          transparent
          visible={this.props.modalVisible}
          onRequestClose={() => {}}
        >
        <Card>
          <CardSection>
            <Image
              style={{ width: 350, height: 350 }}
              resizeMode={'contain'}
              source={{ uri: this.props.exercise }}
            />
          </CardSection>
          <CardSection>
            <Button onPress={this.closeModal.bind(this)}>Close</Button>
          </CardSection>
          </Card>
        </Modal>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

// const styles = {
//   imageStyle: {
//     height: 350,
//     flex: 1,
//     width: null
//   }
// };

const mapStateToProps = ({ exercises }) => {
  const { routine, exercise, modalVisible } = exercises;
  return { routine, exercise, modalVisible };
};

export default connect(mapStateToProps, { exercisesFetch, exerciseDeselect })(ExerciseList);
