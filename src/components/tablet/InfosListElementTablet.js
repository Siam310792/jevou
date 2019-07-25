import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

class InfosListElementTablet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //color : this.props.isSelected ? "#C29064" : "#565656",
      isSelected: this.props.isSelected
    };
  }

  render() {
    const blackColorLight = "#565656";
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPress(
            this.props.heure,
            this.props.noInter,
            this.props.site,
            this.props.adresse,
            this.props.contacts,
            this.props.statut,
            true
          );
          this.setState({ isSelected: this.props.isSelected });
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderColor: blackColorLight,
            borderBottomWidth: 0.5,
            paddingVertical: 5
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
              borderRightColor: blackColorLight,
              borderRightWidth: 0.5,
              paddingHorizontal: 10,
              justifyContent: "center",
              width: 65
            }}
          >
            <Text
              style={{
                color: this.state.isSelected ? "#C29064" : "#565656",
                fontWeight: "bold"
              }}
            >
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
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: this.state.isSelected ? "#C29064" : "#565656"
              }}
            >
              {this.props.site}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{ color: this.state.isSelected ? "#C29064" : "#565656" }}
            >
              {this.props.adresse[0]}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{ color: this.state.isSelected ? "#C29064" : "#565656" }}
            >
              {this.props.adresse[1]} {this.props.adresse[2]}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  /*componentWillUpdate(nextProps, nextState) {
            console.log("prevProps.selected vaut : " + nextProps.isSelected)
            console.log("this.selected vaut : " + this.state.isSelected)
            console.log("prevProps.selected vaut : " + nextState.isSelected)
            console.log("this.props.selected vaut : " + this.props.isSelected)
            //this.setState({isSelected:this.props.isSelected})
    }*/

  /*componentDidUpdate(prevProps, prevState) {
        console.log("nextProps.selected vaut : " + prevProps.isSelected)
        console.log("this.state.selected vaut : " + this.state.isSelected)
        console.log("prevState.selected vaut : " + prevState.isSelected)
        console.log("this.props.selected vaut : " + this.props.isSelected)
    }*/
}

export default InfosListElementTablet;
