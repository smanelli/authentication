import React, { Component } from 'react';
import { View, TextInput, ActivityIndicator } from 'react-native';
import {Button, Input} from 'react-native-elements'
import InnerSection from './inner-section'
import firebase from 'firebase'
import {authInputChange, login} from '../actions'
import {connect} from 'react-redux'

class LoginForm extends Component {
  constructor(props) {
    super(props);

  }
  
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyA5rn9KL-jR8aNB02ksH86y5-8TnsabmJo",
      authDomain: "authentication-b0012.firebaseapp.com",
      databaseURL: "https://authentication-b0012.firebaseio.com",
      projectId: "authentication-b0012",
      storageBucket: "",
      messagingSenderId: "112660177360",
      appId: "1:112660177360:web:560bf99aa7ef6c8594d9d5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  login() {
    console.log('prima di loggin in')
    const {email, password} = this.props
    this.props.login({email, password})
  }

  showButton() {
    if (this.props.loading) {
      return (
        <View>
          <ActivityIndicator size={'small'}/>
        </View>
      )
    }
    return (
      <Button title="Login" onPress={this.login.bind(this)} buttonStyle={{ backgroundColor:'#3bd3d4' }} />
      )
  }

  showError() {
    if(this.props.error) {
      return (
        <Input disabled={true} inputStyle={{ color: 'red' }}>{this.props.error}</Input>
      )
    }
  }

  render() {
    
    return (
      <View>
        <InnerSection>
          <Input
            style={{ borderColor: 'gray', borderWidth: 1 }}
            placeholder='Email'
            value={this.props.email}
            onChangeText={text => this.props.authInputChange({'field': 'email', 'value': text})}
          />
        </InnerSection>
        <InnerSection>  
          <Input
            style={{ borderColor: 'gray', borderWidth: 1 }}
            placeholder='Password'
            secureTextEntry={true}
            value={this.props.password}
            onChangeText={text => this.props.authInputChange({'field': 'password', 'value': text})}
          />
        {this.showError()}  
        </InnerSection>  
        {this.showButton()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password, 
    user: state.auth.user,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps, {authInputChange, login})(LoginForm)