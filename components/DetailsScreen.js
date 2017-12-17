import React from "react";
import { View, Text, Button, ScrollView, Image } from "react-native";
import { StackNavigator } from "react-navigation";
import styles from "./styles/style";

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.lightData.name
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{
            uri: params.lightData.img_url
          }}
          style={{
            flex: 1
          }}
        />
        <Button title={"BUTTON"} onPress={() => toggleLight(1)} />
      </View>
    );
  }
}

function toggleLight(id) {
  console.log("Toggle: " + id);
}
