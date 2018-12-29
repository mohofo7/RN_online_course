import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Button , ScrollView} from 'react-native';

import {goToHome} from './../../../navigation'
import LoginForm from './LoginForm'
class LoginScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <LoginForm/>
          <Button
            title="go to Home"
            onPress={()=>{goToHome()}}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FDFFFC',
    alignItems:'center',
    justifyContent: 'center'
  }
});

export default LoginScreen;