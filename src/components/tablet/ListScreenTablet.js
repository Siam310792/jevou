import React from "react";

import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";
import DetailScreen from "../../screens/DetailScreen";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import InfosListElementTablet from "./InfosListElementTablet";

class ListScreenTablet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heure: "",
      noInter: "",
      site: "",
      adresse: "",
      contacts: [[]],
      statut: 0,
      isSelected: false
    };
  }

  renderRightComponent() {
    return this.state.isSelected ? (
      <View style={{ flex: 3 }}>
        <DetailScreen
          tabletMode={true}
          heure={this.state.heure}
          adresse={this.state.adresse}
          noInter={this.state.noInter}
          site={this.state.site}
          contacts={this.state.contacts}
          statut={this.props.statut}
        />
      </View>
    ) : (
      <View style={{ flex: 3 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: heightPercentageToDP("53%"),
            width: widthPercentageToDP("87%")
          }}
        >
          <Text>Aucune intervention sélectionnée</Text>
        </View>
      </View>
    );
  }

  buttonPress(heure, noInter, site, adresse, contacts, statut, isSelected) {
    this.setState({
      heure,
      noInter,
      site,
      adresse,
      contacts,
      statut,
      isSelected
    });
  }

  render() {
    return (
      <View
        style={{ flexDirection: "row", width: widthPercentageToDP("100%") }}
      >
        <View
          style={{
            flexDirection: "column",
            borderRightWidth: 1,
            borderRightColor: "transparent",
            elevation: 3
          }}
        >
          <View>
            <Calendrier height={heightPercentageToDP("5%")} tabletMode={true} />
          </View>
          <View
            style={{ flex: 6, borderTopWidth: 0.5, borderTopColor: "#565656" }}
          >
            <InfosListElementTablet
              heure="12:00"
              noInter="12345678"
              site="Auchan Centre Commercial"
              adresse={[
                "2 rue des grands peupliers",
                "01000",
                "Bourg-en-Bresse"
              ]}
              contacts={[
                ["Steeven Lanoix", "0123456789"],
                ["Julien Duprès", "9876543210"],
                ["Matthieu Thibault", "0678351676"]
              ]}
              onPress={this.buttonPress.bind(this)}
              statut={2}
              isSelected={this.state.isSelected}
            />
            <InfosListElementTablet
              heure="14:00"
              noInter="45678912"
              site="Carrefour Cité Europe"
              adresse={["Avenue de Coquelles", "71000", "Paris"]}
              contacts={[
                ["Stéphane Lagrange", "0212314569"],
                ["Charlie Hebdo", "0474565478"]
              ]}
              onPress={this.buttonPress.bind(this)}
              statut={2}
              isSelected={this.state.isSelected}
            />
            <InfosListElementTablet
              heure="16:00"
              noInter="35487958"
              site="Leclerc La Rochelle"
              adresse={["2 rue des PETITS peupliers", "62250", "Marquise"]}
              contacts={[
                ["Pierre Petit", "0321564587"],
                ["Paul Legrand", "0545698778"]
              ]}
              onPress={this.buttonPress.bind(this)}
              statut={1}
              isSelected={this.state.isSelected}
            />
            <InfosListElementTablet
              heure="18:00"
              noInter="35642154"
              site="Aéroport Charles De Gaule"
              adresse={["172 Allée de Paris", "59160", "Lomme"]}
              contacts={[
                ["Corine Dupuit", "0836656565"],
                ["Stéphanie Boisson", "0336153615"]
              ]}
              onPress={this.buttonPress.bind(this)}
              statut={0}
              isSelected={this.state.isSelected}
            />
            <InfosListElementTablet
              heure="20:00"
              noInter="00045632"
              site="Epicerie Sainte Marguerite"
              adresse={["9 Avenue des lilas", "17160", "La Rochelle"]}
              contacts={[
                ["Julie Lafayette", "0987745663"],
                ["Octave Raimbault", "0874456998"]
              ]}
              onPress={this.buttonPress.bind(this)}
              statut={0}
              isSelected={this.state.isSelected}
            />
          </View>
        </View>

        {this.renderRightComponent()}
      </View>
    );
  }
}

export default ListScreenTablet;
