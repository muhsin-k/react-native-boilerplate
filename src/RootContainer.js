import React, { Component } from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Login from './screens/Login/Login';
class RootContainer extends Component {
  render() {
    return <Login />;
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({});

export default connect(
  null,
  mapDispatchToProps,
)(RootContainer);
