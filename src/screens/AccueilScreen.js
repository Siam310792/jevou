import React from "react";
import { View, Text, TextInput } from "react-native";
import ConnectionView from "../components/ConnectionView";

class AccueilScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null
    };
  }

  render() {
    return <ConnectionView navigation={this.props.navigation} />;
  }
}

export default AccueilScreen;
