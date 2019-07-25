import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ContentDetails from "../components/ContentDetails";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";

class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.noInter}`,
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center",
      color: "#363636"
    },
    headerStyle: {
      backgroundColor: "#C29064"
    }
  });

  isNavigator = () => Boolean(this.props.navigation);

  getParams = () =>
    this.isNavigator()
      ? {
          noInter: this.props.navigation.getParam("noInter"),
          site: this.props.navigation.getParam("site"),
          adresse: this.props.navigation.getParam("adresse"),
          contacts: this.props.navigation.getParam("contacts")
        }
      : {
          noInter: this.props.noInter,
          site: this.props.site,
          adresse: this.props.adresse,
          contacts: this.props.contacts
        };

  render() {
    const width = this.isNavigator() ? "87%" : "100%";

    return (
      <View>
        <View
          style={{
            height: heightPercentageToDP("100%"),
            width: widthPercentageToDP(width)
          }}
        >
          <ContentDetails
            noInter={this.getParams().noInter}
            site={this.getParams().site}
            adresse={this.getParams().adresse}
            contacts={this.getParams().contacts}
          />
        </View>
      </View>
    );
  }
}

export default DetailScreen;
