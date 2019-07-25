import {
  createStackNavigator,
  createAppContainer,
  StackNavigator,
  DrawerNavigator
} from "react-navigation";
import AccueilScreen from "./src/screens/AccueilScreen";
import ListScreen from "./src/screens/ListScreen";
import DetailScreen from "./src/screens/DetailScreen";
import React from "react";

const AppNavigator = createStackNavigator(
  {
    accueil: {
      screen: AccueilScreen,
      navigationOptions: {
        header: null
      }
    },
    list: {
      screen: ListScreen
    },
    detail: {
      screen: DetailScreen
    }
  },
  {
    initialRouteName: "accueil"
  }
);

export default createAppContainer(AppNavigator);
