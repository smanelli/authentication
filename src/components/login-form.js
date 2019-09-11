import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button} from 'react-native-elements'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Button title='login' buttonStyle={{backgroundColor: 'red'}}/>
      </View>
    );
  }
}
