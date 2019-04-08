import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/Home/HomeScreen";
import UserScreen from "./src/screens/User/UserScreen";

const AppStack = createStackNavigator({
  Home: { screen: HomeScreen },
  User: {
    screen: UserScreen,
    path: "user"
  }
});

const App = createAppContainer(AppStack);

export default App;
