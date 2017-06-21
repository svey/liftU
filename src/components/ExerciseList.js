import React, { Component } from 'react';
import { ListView, Modal, View, Image } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { exercisesFetch, exerciseDeselect } from '../actions';
import ListItem from './ExerciseListItem';
import { Button } from './common';
import Timer from '../../old_components/Timer';

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
    const { modalStyle, modalButtonStyle, imageStyle } = styles;

    return (
      <View>
        <Modal
          animationType={'slide'}
          transparent
          visible={this.props.modalVisible}
          onRequestClose={() => {}}
        >
        <View style={modalStyle}>
            <Image
              style={imageStyle}
              resizeMode={'contain'}
              source={{ uri: this.props.exercise.image }}
            />
            <Timer />
          <View style={modalButtonStyle}>
            <Button onPress={this.closeModal.bind(this)} text="COMPLETED" >
              <Icon name='check' size={20} />
            </Button>
            <Button onPress={this.closeModal.bind(this)} text="SKIPPED">
              <Icon name='block' size={20} />
            </Button>
            <Button onPress={this.closeModal.bind(this)} text="CLOSE">
              <Icon name='close' size={20} />
            </Button>
          </View>
        </View>
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

const styles = {
  modalStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  modalButtonStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  imageStyle: {
    width: 350,
    height: 350
  }
};

const mapStateToProps = ({ exercises }) => {
  const { routine, exercise, modalVisible } = exercises;
  return { routine, exercise, modalVisible };
};

export default connect(mapStateToProps, { exercisesFetch, exerciseDeselect })(ExerciseList);
