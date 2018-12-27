import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Button} from 'react-native';

import {goToHome} from './../../../navigation'

class LoginScreen extends Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
        <Button
          title="Login"
          onPress={()=>{
            goToHome();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default LoginScreen;