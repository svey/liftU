import React, { Component } from 'react';
import { DatePickerAndroid } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { noteUpdate } from '../actions';

//Refactor with Redux Form

class NoteCreate extends Component {

  async datePick() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        console.log(`${month} ${day} ${year}`);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    } 
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Title"
            placeholder="Name your note!"
            value={this.props.title}
            onChangeText={value => this.props.noteUpdate({ prop: 'title', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Text"
            placeholder="Your note here..."
            value={this.props.text}
            onChangeText={value => this.props.noteUpdate({ prop: 'text', value })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.datePick.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ noteForm }) => {
  const { title, text, date } = noteForm;
  return { title, text, date };
};

export default connect(mapStateToProps, { noteUpdate })(NoteCreate);
