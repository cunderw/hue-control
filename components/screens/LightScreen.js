import React from "react";
import { SearchBar, List, ListItem } from "react-native-elements";
import {
  Text,
  View,
  AsyncStorage,
  Button,
  ScrollView,
  Image
} from "react-native";
import { StackNavigator } from "react-navigation";

export default class LightScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.lightData.name
  });
  render() {
    const { params } = this.props.navigation.state;
    console.log(params.lightData);
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
        <Button title={"MARSHALL"} onPress={() => toggleLight(1)} />
      </View>
    );
  }
}

function toggleLight(id) {
  console.log("Toggle: " + id);
}
