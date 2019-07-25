import React from "react";
import { View, TextInput } from "react-native";
import { Button, CheckBox } from "react-native-elements";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";

class ConnectionViewTablet extends React.Component {
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
          shadowColor: "#000",
          elevation: 4,
          flexDirection: "row",
          height: 250,
          width: 600
        }}
      >
        <View
          style={{
            width: 300,
            backgroundColor: "white",
            borderTopLeftRadius: radius,
            borderBottomLeftRadius: radius,
            justifyContent: "center",
            paddingHorizontal: widthPercentageToDP("2%")
          }}
        >
          <View style={{ justifyContent: "space-evenly", height: 100 }}>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                padding: 5
              }}
              onChangeText={usernameText => this.setState({ usernameText })}
              value={this.state.usernameText}
            />
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                padding: 5
              }}
              value={this.state.passwordText}
            />
          </View>
        </View>

        <View
          style={{
            width: 300,
            backgroundColor: "white",
            borderTopRightRadius: radius,
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
            containerStyle={{ backgroundColor: "white" }}
            textStyle={{ color: "black" }}
            title="Remember me"
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
        </View>
      </View>
    );
  }
}

export default ConnectionViewTablet;
