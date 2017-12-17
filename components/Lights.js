import React from "react";
import { SearchBar, List, ListItem } from "react-native-elements";
import { Text, View, AsyncStorage } from "react-native";
const LIGHTS_URL =
  "http://192.168.85.93/api/Za56aBeEzoWfSkS38UcHHKPqswjki1m1fGoS5v3q/lights";
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

    return fetch(LIGHTS_URL)
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
      //console.log("Index:" + index + " - " + lights[index].name);
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
            onPress={() => this.props.navigate("Details", { lightData: l })}
          />
        ))}
      </List>
    );
  }
}
