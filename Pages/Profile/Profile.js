import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Text>Profile Page</Text>
    );
  }
}
export default ProfileScreen;
