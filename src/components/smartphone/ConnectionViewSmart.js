import React from "react";
import { View, TextInput } from "react-native";
import AccueilStyles from "../../styles/AccueilStyles";
import { Button, CheckBox } from "react-native-elements";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";

class ConnectionViewSmart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameText: "name",
      passwordText: "password",
      checked: false
    };
  }

  render() {
    const radius = 20;
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: "white",
          borderRadius: radius,
          shadowColor: "#565656",
          elevation: 4,
          flexDirection: "column",
          height: 300
        }}
      >
        <View
          style={{
            height: 150,
            backgroundColor: "white",
            borderTopLeftRadius: radius,
            borderTopRightRadius: radius,
            justifyContent: "center",
            paddingHorizontal: widthPercentageToDP("2%")
          }}
        >
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              padding: 5,
              color: "#565656"
            }}
            onChangeText={usernameText => this.setState({ usernameText })}
            value={this.state.usernameText}
          />
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              padding: 5,
              color: "#565656"
            }}
            value={this.state.passwordText}
          />
        </View>

        <View
          style={{
            height: 150,
            backgroundColor: "white",
            borderBottomLeftRadius: radius,
            borderBottomRightRadius: radius,
            justifyContent: "center",
            paddingHorizontal: widthPercentageToDP("2%")
          }}
        >
          <Button
            title="Connection"
            onPress={() => this.props.navigate("list", this.props.navigation)}
          />
          <CheckBox
            containerStyle={{ backgroundColor: "white", borderColor: "white" }}
            textStyle={{ color: "#565656" }}
            title="Remember me"
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
        </View>
      </View>
    );
  }
}

export default ConnectionViewSmart;
