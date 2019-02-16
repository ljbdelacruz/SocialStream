import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class MovieDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'MovieDetails',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Text>MovieDetails Page</Text>
    );
  }
}

export default MovieDetailsScreen;
