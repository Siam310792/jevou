import React from "react";
import { View, Text, Dimensions } from "react-native";
import Orientation from "react-native-orientation";

import ListScreenSmart from "../components/smartphone/ListScreenSmart";
import ListScreenTablet from "../components/tablet/ListScreenTablet";

class ListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interventions: []
    };
  }

  static navigationOptions = () => ({
    title: "Interventions",
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center",
      color: "#363636"
    },
    headerStyle: {
      backgroundColor: "#C29064"
    }
  });

  //Utilisation d'une flatlist
  render() {
    const { navigate } = this.props.navigation;
    const { height, width } = Dimensions.get("window");
    const aspectRatio = height / width;

    if (aspectRatio > 1.6) {
      Orientation.lockToPortrait();
      return (
        <ListScreenSmart
          navigate={navigate}
          interventions={this.state.interventions}
        />
      );
    } else {
      Orientation.lockToLandscape();
      return <ListScreenTablet navigate={navigate} />;
    }
  }

  fetchData = () => {
    request = new Request(
      `http://demo2.jev-ou.fr/RestServiceImpl.svc/JLT_CHANTIER/`
    );

    fetch(request)
      .then(results => {
        const statusCode = results.status;
        console.log(statusCode);
        return results.json();
      })
      .then(data => {
        this.setState({ interventions: data });
      })
      .catch(e => {
        console.log("erreur " + e.statusCode);
      });
  };

  componentDidMount() {
    this.fetchData();
  }
}

export default ListScreen;
