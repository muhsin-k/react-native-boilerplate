import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppNavigation from './AppNavigation';

class RootContainer extends Component {
  render() {
    return <AppNavigation />;
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({});

export default connect(
  null,
  mapDispatchToProps,
)(RootContainer);
