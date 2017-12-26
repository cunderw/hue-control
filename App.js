import React from "react";
import { Platform, StatusBar, View, Icon } from "react-native";
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
} from "react-navigation";
import getSlideFromRightTransition from "react-navigation-slide-from-right-transition";
import HomeScreen from "./components/screens/HomeScreen";
import GroupsScreen from "./components/screens/GroupsScreen";

const HueControl = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Lights"
      })
    },
    Groups: {
      screen: GroupsScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Groups"
      })
    }
  },
  {
    tabBarPosition: "top",
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#e91e63"
    }
  }
);

export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return <HueControl />;
  }
}
