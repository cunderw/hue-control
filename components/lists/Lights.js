import React from "react";
import {
  AsyncStorage,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";
import {
  getLights,
  getLight,
  toggleLight,
  getGroups,
  getGroupLights
} from "../data/LightData";

export default class LightsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lights: {},
      isLoading: true,
      error: null
    };
  }
  componentWillMount() {}

  componentDidMount() {
    this.setState({ isLoading: true });
    return getLights()
      .then(lights => {
        this.setState(
          {
            lights: lights,
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

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { lights, isLoading } = this.state;
    if (this.state.isLoading) {
      return <Text>Loading...</Text>;
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.lights}
          renderItem={({ item }) => <Light id={item.id} />}
        />
      </View>
    );
  }
}

class Light extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light: {},
      isLoading: true,
      error: null
    };
  }

  onPressLightToggle() {
    this.setState({ isLoading: true });
    return toggleLight(this.props.id, this.state.light.state.on)
      .then(light => {
        this.setState(
          {
            light: light,
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
  componentDidMount() {
    this.setState({ isLoading: true });
    return getLight(this.props.id)
      .then(light => {
        this.setState(
          {
            light: light,
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

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { light, isLoading } = this.state;
    if (this.state.isLoading) {
      return (
        <View style={styles.Light}>
          <Text style={styles.LightText}>light.name</Text>
          <Button onPress={() => {}} title="Loading..." color="#841584" />
        </View>
      );
    }
    return (
      <View style={styles.Light}>
        <Text style={styles.LightText}>{light.name}</Text>
        <Button
          onPress={() => {
            this.onPressLightToggle();
          }}
          title={light.state.on ? "ON" : "OFF"}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

export class GroupsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: {},
      isLoading: true,
      error: null
    };
  }
  componentWillMount() {}

  componentDidMount() {
    this.setState({ isLoading: true });
    return getGroups()
      .then(groups => {
        this.setState(
          {
            groups: groups,
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

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { groups, isLoading } = this.state;
    if (this.state.isLoading) {
      return <Text>Loading...</Text>;
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.groups}
          renderItem={({ item }) => <Group group={item} />}
        />
      </View>
    );
  }
}

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    return getGroupLights(this.props.group.id)
      .then(groupLights => {
        this.setState(
          {
            groupLights: groupLights,
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
    const { group, isLoading } = this.state;
    if (this.state.isLoading) {
      return <Text>Loading...</Text>;
    }
    return (
      <View style={Group.Light}>
        <Text style={styles.GroupText}>{this.props.group.name}</Text>
        <FlatList
          data={this.state.groupLights}
          renderItem={({ item }) => <Light id={item.id} />}
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
  Group: {
    padding: 10,
    height: 60
  },
  GroupText: {},
  LightText: {}
});
