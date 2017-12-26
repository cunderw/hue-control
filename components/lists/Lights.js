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
import { getLights } from "../data/LightData";

const lights = [];

export default class LightsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      error: null
    };
  }
  componentWillMount() {}

  componentDidMount() {
    this.setState({ isLoading: true });
    return getLights()
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            data: responseJson,
            isLoading: false
          },
          function() {
            // do something with new state
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { data, isLoading } = this.state;
    if (this.state.isLoading) {
      return <Text>Loading...</Text>;
    }
    Object.keys(data).forEach(function(id, index) {
      let light = data[id];
      lights[index] = light;
    });
    return (
      <List
        containerStyle={{
          marginBottom: 20
        }}
      >
        {lights.map((l, i) => (
          <ListItem
            roundAvatar
            avatar={{
              uri: "https://i.imgur.com/qOdVtcS.jpg"
            }}
            key={i}
            title={l.name}
            onPress={() => this.props.navigate("Light", { lightData: l })}
          />
        ))}
      </List>
    );
  }
}
