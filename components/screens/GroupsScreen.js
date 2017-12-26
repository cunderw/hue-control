import React from "react";
import { View, ScrollView } from "react-native";
import { DrawerNavigator } from "react-navigation";
import LightsList from "../lists/Lights";

export default class GroupsScreen extends React.Component {
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
