import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

import { connect } from 'react-redux';

import { onLogin } from '../../actions/auth';
import styles from './LoginContainer.style';

class LoginContainer extends Component {
  state = {
    username: '',
    password: '',
  };

  onContainer = () => {
    this.props.onLogin(this.state.username);
  };

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <ScrollView style={styles.container}>
          <Text style={styles.header}>Shape Gallery</Text>

          <TextInput value={this.state.username} onChangeText={username => this.setState({ username })} placeholder="Username" style={styles.input} autoCapitalize={'none'} underlineColorAndroid={'transparent'} />

          <TextInput value={this.state.password} onChangeText={password => this.setState({ password })} placeholder="Password" style={styles.input} autoCapitalize={'none'} secureTextEntry={true} underlineColorAndroid={'transparent'} />

          <TouchableOpacity style={styles.loginButton} onPress={this.onLogin}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

function bindAction(dispatch) {
  return {
    onLogin: data => dispatch(onLogin(data)),
  };
}
function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  bindAction,
)(LoginContainer);
