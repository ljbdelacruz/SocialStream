import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class DashboardScreen extends React.Component {
  static navigationOptions={
    header:null,
    title: 'Dashboard',
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View>
        <View style={styles.header}>
        </View>
        <Button style={styles.backButton} onPress={()=> navigate('Login') } title="BACK"></Button>
        <Text>Dashboard Page</Text>
      </View>
    );
  }
}
// this.props.navigator.pop()

export default DashboardScreen;

const styles = StyleSheet.create({
  header:{
    backgroundColor:"red",
    height:"35%"
  },
  backButton:{
    marginTop:"20%",
    position:"absolute",
    top:"20%"
  }

});
