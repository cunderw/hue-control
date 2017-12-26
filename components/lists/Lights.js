import React from "react";
import {
  AsyncStorage,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";
import { StackNavigator } from "react-navigation";
import { getLights, toggleLight } from "../data/LightData";

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
      .then(response => {
        this.setState(
          {
            data: this.buildLights(response),
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

  buildLights(json) {
    let lights = [];
    Object.keys(json).forEach(function(id, index) {
      let light = json[id];
      lights[index] = light;
      lights[index].key = light.name;
      lights[index].id = id;
    });
    return lights;
  }

  shouldComponentUpdate() {
    return true;
  }
  onPressLightToggle(id, currState) {
    toggleLight(id, currState);
    this.setState(this.state);
  }
  render() {
    const { data, isLoading } = this.state;
    if (this.state.isLoading) {
      return <Text>Loading...</Text>;
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.Light}>
              <Text style={styles.LightText}>{item.key}</Text>
              <Button
                onPress={() => {
                  this.onPressLightToggle(item.id, item.state.on);
                }}
                title={item.state.on ? "ON" : "OFF"}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  Light: {
    padding: 10,
    height: 60
  },
  LightText: {}
});
