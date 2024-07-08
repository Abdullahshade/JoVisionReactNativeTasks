import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MyClassPage from '../Components/Task19Component';

export default class Task19 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPage: false,
    };
  }

  toggleMyClassPage = () => {
    this.setState((prevState) => ({
      showPage: !prevState.showPage,
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={this.state.showPage ? 'Hide' : 'Show'}
          onPress={this.toggleMyClassPage}
        />
        {this.state.showPage && <MyClassPage />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
