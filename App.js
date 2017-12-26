import React from "react";
import { Platform, StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";
import getSlideFromRightTransition from "react-navigation-slide-from-right-transition";
import styles from "./components/styles/style";
import HomeScreen from "./components/screens/HomeScreen";
import LightScreen from "./components/screens/LightScreen";

const HueControl = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Light: {
      screen: LightScreen
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
