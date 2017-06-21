import React, { Component } from 'react';
import { ListView, Modal, View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { exercisesFetch, exerciseDeselect } from '../actions';
import ListItem from './ExerciseListItem';
import { Button, Card, CardSection } from './common';
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
    const { modalButtonStyle, imageStyle, headerStyle, titleStyle, timerStyle } = styles;
    const { exercise, programming, image } = this.props.exercise;
    
    return (
      <View>
        <Modal
          animationType={'slide'}
          //transparent
          supportedOrientations={['portrait']}
          visible={this.props.modalVisible}
          onRequestClose={() => {}}
        >
          <Card>
            <CardSection>
              <View style={headerStyle}>
                <Text style={titleStyle}>{exercise}</Text>
                <Text>{programming}</Text>  
              </View>
              <View style={timerStyle}>
                <Timer />  
              </View>
            </CardSection>
            <CardSection style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image style={imageStyle} resizeMode={'contain'} source={{ uri: image }} />
            </CardSection>
            <View style={{ ...headerStyle, paddingBottom: 5, paddingLeft: 5 }}>
              <Text style={titleStyle}>Description</Text>
              <Text>This will contain an exercise description of key points about performing each exercise. Coming soon!</Text>
            </View>
          </Card>
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
  // modalStyle: {

  // },
  modalButtonStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  imageStyle: {
    width: 300,
    height: 300,
    margin: 10
  },
  headerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleStyle: {
    fontSize: 18
  },
  timerStyle: {
    flex: 1,
    alignItems: 'flex-end'
  }
};

const mapStateToProps = ({ exercises }) => {
  const { routine, exercise, modalVisible } = exercises;
  return { routine, exercise, modalVisible };
};

export default connect(mapStateToProps, { exercisesFetch, exerciseDeselect })(ExerciseList);
