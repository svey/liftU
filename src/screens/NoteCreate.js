import React from 'react';
import { View } from 'react-native';
import NoteCreate from '../components/NoteCreate';
import ColumnCharts from '../components/ColumnCharts';
import VerticalCharts from '../components/VerticalCharts';
import { Card, CardSection, Header } from '../components/common';

export default () => (
  <View>
    <Card>
      <Header headerText={'CURRENT WORKOUT'} />
      <CardSection>
        <ColumnCharts />
      </CardSection>
    </Card>
    <Card>
      <Header headerText={'WORKOUT HISTORY'} />
      <CardSection>
        <VerticalCharts />
      </CardSection>
    </Card>
  </View>
);
