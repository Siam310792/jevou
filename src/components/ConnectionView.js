import React from "react";
import { View, TextInput, Dimensions } from "react-native";
import Orientation from "react-native-orientation";

import AccueilStyles from "../styles/AccueilStyles";
import ConnectionViewSmart from "./smartphone/ConnectionViewSmart";
import ConnectionViewTablet from "./tablet/ConnectionViewTablet";

class ConnectionView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    const { height, width } = Dimensions.get("window");
    const aspectRatio = height / width;

    if (aspectRatio > 1.6) {
      Orientation.lockToPortrait();
      return (
        <View style={AccueilStyles.divConnectionSmart}>
          <ConnectionViewSmart navigate={navigate} />
        </View>
      );
    } else {
      Orientation.lockToLandscape();

      return (
        <View style={AccueilStyles.divConnectionTablet}>
          <ConnectionViewTablet navigate={navigate} />
        </View>
      );
    }
  }
}

export default ConnectionView;
