import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

class InfosListElementSmart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigate("detail", {
            title: this.props.noInter,
            heure: this.props.heure,
            noInter: this.props.noInter,
            site: this.props.site,
            adresse: this.props.adresse,
            contacts: this.props.contacts,
            statut: this.props.statut,
            tabletMode: false
          });
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderColor: "#565656",
            borderBottomWidth: 0.5,
            height: 70
          }}
        >
          <View
            style={{
              backgroundColor:
                this.props.statut == 2
                  ? "#9ACD32"
                  : this.props.statut == 1
                  ? "#6495ed"
                  : "",
              width: 8
            }}
          />
          <View
            style={{
              borderRightColor: "#565656",
              borderRightWidth: 0.5,
              justifyContent: "center",
              alignItems: "center",
              width: 60
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#565656" }}>
              {this.props.heure}
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              justifyContent: "center",
              width: "60%"
            }}
          >
            <Text
              style={{ fontSize: 15, fontWeight: "bold", color: "#565656" }}
            >
              {this.props.site}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{ color: "#565656" }}
            >
              {this.props.adresse[0]}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{ color: "#565656" }}
            >
              {this.props.adresse[1]} {this.props.adresse[2]}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default InfosListElementSmart;
