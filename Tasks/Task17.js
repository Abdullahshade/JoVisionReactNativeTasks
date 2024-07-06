import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Task17 extends Component {
  constructor() {
    super();
    this.state = {
      showName: false
    };
  }
//rkth
  toggleShowName = () => {
    this.setState(prevState => ({
      showName: !prevState.showName
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={this.state.showName ? 'Hide' : 'Show'}
          onPress={this.toggleShowName}
        />
        {this.state.showName && (
          <Text style={styles.headerText}>Abdullah</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
});
