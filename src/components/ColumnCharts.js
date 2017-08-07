import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';


class ColumnCharts extends Component {
  render() {
    const { width } = Dimensions.get('window');
    const routine = {
      skipped: ((width / 18) * this.props.skipped),
      completed: ((width / 18) * this.props.completed),
      remaining: ((width / 18) * (16 - (this.props.completed + this.props.skipped)))
    };
    const { skipped, completed, remaining } = routine;
    const { container, item, label, data, bar } = styles;

    return (
      <View style={container}>
        <View style={item}>
          <Text style={label}>COMPLETED EXERCISES</Text>
          <View style={data}>
            <View style={[bar, styles.completed, { width: completed }]} />
          </View>
        </View>
        <View style={item}>
          <Text style={label}>SKIPPED EXERCISES</Text>
          <View style={data}>
            <View style={[bar, styles.skipped, { width: skipped }]} />
          </View>
        </View>
        <View style={item}>
          <Text style={label}>REMAINING EXERCISES</Text>
          <View style={data}>
            <View style={[bar, styles.remaining, { width: remaining }]} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'column',
  },
  item: {
    flexDirection: 'column',
    marginBottom: 12,
    paddingHorizontal: 10
  },
  label: {
    color: '#CBCBCD',
    position: 'relative',
    marginBottom: 9
  },
  data: {
    flex: 2,
    flexDirection: 'row'
  },
  dataNumber: {
    color: '#CBCBCB',
    fontSize: 11,
  },
  bar: {
    alignSelf: 'center',
    borderRadius: 5,
    height: 10,
    marginRight: 5
  },
  skipped: {
    backgroundColor: '#F55443'
  },
  completed: {
    backgroundColor: '#3ABAA4'
  },
  remaining: {
    backgroundColor: '#4D98E4'
  }
};

const mapStateToProps = ({ exercises }) => {
  const { completed, skipped } = exercises;
  return { completed, skipped };
};

export default connect(mapStateToProps, {})(ColumnCharts);

