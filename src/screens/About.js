import React from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Header } from '../components/common';

export default () => (
  <Card>
    <Header headerText="About liftU" />
    <CardSection>
      <Text style={styles.textStyle}>liftU is an ad-free bodyweight fitness application built around the Reddit community r/bodyweightfitness’ ‘Recommended Routine’</Text>
    </CardSection>
  </Card>
);


const styles = {
  textStyle: {
    fontSize: 20
  }
};
