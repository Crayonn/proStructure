import { StackNavigator } from 'react-navigation';
import React from 'react';
import { View, Text } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    )
  }
}

const AppNavigator = StackNavigator({
  Home: { screen: Home }
});

export default AppNavigator;