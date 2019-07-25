import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Icon from "react-native-ionicons";

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 17,
    flexWrap: "wrap",
    color: "#565656",
    paddingLeft: 15
  }
});

class ContentDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Card containerStyle={{ elevation: 5 }}>
          <View
            style={{ width: widthPercentageToDP("82%"), flexDirection: "row" }}
          >
            <View
              style={{
                width: 50,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Icon
                //resizeMode="cover"
                name="md-home"
                size={32}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: widthPercentageToDP("59%")
              }}
            >
              <Text style={styles.textStyle}>{this.props.site}</Text>
            </View>
          </View>
        </Card>

        <Card containerStyle={{ elevation: 5 }}>
          <View
            style={{ width: widthPercentageToDP("82%"), flexDirection: "row" }}
          >
            <View
              style={{
                width: 50,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Icon
                //resizeMode="cover"
                name="md-home"
                size={32}
              />
            </View>

            <View
              style={{
                flexDirection: "column",
                width: widthPercentageToDP("59%")
              }}
            >
              <Text style={styles.textStyle}>{this.props.adresse[0]}</Text>
              <Text style={styles.textStyle}>
                {this.props.adresse[1]} {this.props.adresse[2]}
              </Text>
            </View>
          </View>
        </Card>

        <Card containerStyle={{ elevation: 5 }}>
          <View
            style={{ width: widthPercentageToDP("82%"), flexDirection: "row" }}
          >
            <View
              style={{
                width: 50,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Icon
                //resizeMode="cover"
                name="md-contact"
                size={42}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: widthPercentageToDP("59%"),
                alignSelf: "baseline",
                justifyContent: "space-between"
              }}
            >
              <View>
                {this.props.contacts.map(contact => (
                  <View key={contact}>
                    <Text
                      style={{
                        fontSize: 17,
                        flexWrap: "wrap",
                        color: "#565656",
                        paddingLeft: 15,
                        fontWeight: "bold"
                      }}
                    >
                      {contact[0]}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        flexWrap: "wrap",
                        color: "#565656",
                        paddingLeft: 16
                      }}
                    >
                      {contact[1]}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

export default ContentDetails;
