import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Spinner } from './common';

import { logoutUser } from '../actions';

class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser();
  }
  render() {
    return (
      <View>
        <Text> Logging Out...</Text>
        <Spinner size="large" />
      </View>
    );
  }
}

export default connect(null, { logoutUser })(Logout);