import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { StackNavigator } from "react-navigation";
import LightsList from "../lists/Lights";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Hue Control"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <ScrollView>
          <LightsList navigate={navigate} />
        </ScrollView>
      </View>
    );
  }
}
