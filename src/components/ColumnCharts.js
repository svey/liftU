import React, { Component } from 'react';
import {  
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';


class ColumnCharts extends Component {
  render() {
    const { width } = Dimensions.get('window');
    console.log(width);
    const state = {
      skipped: new Animated.Value((width / 18) * this.props.skipped),
      completed: new Animated.Value((width / 18) * this.props.completed),
      remaining: new Animated.Value((width / 18) * (16 - (this.props.completed + this.props.skipped)))
    };
    const { skipped, completed, remaining } = state;
    const { container, item, label, data, bar, dataNumber } = styles;

    return (
      <View style={container}>
        <View style={item}>
          <Text style={label}>COMPLETED EXERCISES</Text>
          <View style={data}>
            {completed &&
              <Animated.View style={[bar, styles.completed, { width: completed }]} />
            }
            <Text style={dataNumber}>{completed.value}</Text>
          </View>
        </View>
        <View style={item}>
          <Text style={label}>SKIPPED EXERCISES</Text>
          <View style={data}>
            {skipped &&
              <Animated.View style={[bar, styles.skipped, { width: skipped }]} />
            }
            <Text style={dataNumber}>{skipped.value}</Text>
          </View>
        </View>
        <View style={item}>
          <Text style={label}>REMAINING EXERCISES</Text>
          <View style={data}>
            {skipped &&
              <View style={[bar, styles.remaining, { width: remaining._value }]} />
            }
            <Text style={dataNumber}>{remaining.value}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  // Item
  item: {
    flexDirection: 'column',
    marginBottom: 12,
    paddingHorizontal: 10
  },
  label: {
    color: '#CBCBCD',
    //fontSize: 12,
    position: 'relative',
    //top: 2,
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
  // Bar
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
  },
  // controller
  // controller: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   marginTop: 15
  // },
  // button: {
  //   flex: 1,
  //   position: 'relative',
  //   top: -1
  // },
  // chevronLeft: {
  //   alignSelf: 'flex-end',
  //   height: 28,
  //   marginRight: 10,
  //   width: 28
  // },
  // chevronRight: {
  //   alignSelf: 'flex-start',
  //   height: 28,
  //   marginLeft: 10,
  //   width: 28
  // },
  // date: {
  //   color: '#6B7C96',
  //   flex: 1,
  //   fontSize: 22,
  //   fontWeight: '300',
  //   height: 28,
  //   textAlign: 'center'
  // }

});

const mapStateToProps = ({ exercises }) => {
  const { completed, skipped } = exercises;
  return { completed, skipped };
};

export default connect(mapStateToProps, {})(ColumnCharts);

