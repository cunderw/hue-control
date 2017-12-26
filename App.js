import React from "react";
import { Platform, StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";
import getSlideFromRightTransition from "react-navigation-slide-from-right-transition";
import HomeScreen from "./components/screens/HomeScreen";

const HueControl = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
    }
  },
  {
    transitionConfig: getSlideFromRightTransition
  }
);

export default class App extends React.Component {
  render() {
    return <HueControl />;
  }
}
