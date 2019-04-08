import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableHighlight } from "react-native-gesture-handler";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigation.push("User")}
        >
          <Text style={styles.buttonTitle}>Open User</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    marginBottom: 20,
    color: "#f00"
  },
  button: {
    padding: 12,
    backgroundColor: "#30A9DE"
  },
  buttonTitle: {
    color: "#fff"
  }
});
