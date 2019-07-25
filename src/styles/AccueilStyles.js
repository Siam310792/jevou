import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";

export default (AccueilStyles = StyleSheet.create({
  divConnectionSmart: {
    flexDirection: "row",
    color: "#565656",
    margin: "auto",
    height: heightPercentageToDP("100%"),
    //width:widthPercentageToDP("100%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efefef"
  },
  divConnectionTablet: {
    flexDirection: "column",
    color: "#565656",
    margin: "auto",
    //width:widthPercentageToDP("100%"),
    height: heightPercentageToDP("65%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efefef"
  }
}));
