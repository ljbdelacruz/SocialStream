import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header:null,
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.view}>
        <View style={styles.container}>
        </View>
        <Image style={{ flex: 1, resizeMode:'cover' }} source={require('./bg.png')} />
          <TextInput style={styles.textInput}
          placeholder="Username" />
        <TextInput style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={true} />
          <Button onPress={()=>navigate('Dashboard')}
          title="LOGIN">
          <Image style={{flex:1, resizeMode:'cover'}} source={require('./loginButton.png')} />
        </Button>
      </View>

    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  view:{
    marginTop:"20%",
  },
  container:{
    marginTop:"50%"
  },
  textInput:{
    width: '80%',
    height:40,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft:'10%'
  },
  passwordInput:{
    width: '80%',
    height:40,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft:'10%',
    marginTop:'5%'
  },
});
