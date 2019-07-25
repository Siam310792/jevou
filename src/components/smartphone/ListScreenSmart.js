import React from "react";

import { View, FlatList, Text, TouchableOpacity } from "react-native";

const ListScreenSmart = props => {
  return (
    /*<View style={{flexDirection:"column", borderRightWidth:1, borderRightColor:"transparent", elevation:3}}>
            <View>
                <Calendrier height={heightPercentageToDP("10%")} tabletMode={false} ></Calendrier>
            </View>
            <View>
                <InfosListElementSmart
                    heure="12:00"
                    noInter="12345678"
                    site="Auchan Centre Commercial"
                    adresse={["2 rue des grands peupliers", "01000", "Bourg-en-Bresse"]}
                    contacts={[["Steeven Lanoix", "0123456789"], ["Julien Duprès", "9876543210"], ["Matthieu Thibault", "0678351676"]]}
                    navigate={props.navigate}
                    statut={2}
                /> 
                <InfosListElementSmart 
                heure="14:00"
                    noInter="45678912"
                    site="Carrefour Cité Europe"
                    adresse={["Avenue de Coquelles", "71000", "Paris"]}
                    contacts={[ ["Stéphane Lagrange","0212314569"], ["Charlie Hebdo", "0474565478"] ]} 
                    navigate={props.navigate}
                    statut={2}
                /> 
                <InfosListElementSmart 
                heure="16:00"
                    noInter="35487958"
                    site="Leclerc La Rochelle"
                    adresse={["2 rue des PETITS peupliers", "62250", "Marquise"]}
                    contacts={[["Pierre Petit", "0321564587"], ["Paul Legrand", "0545698778"]]} 
                    navigate={props.navigate}
                    statut={1}
                /> 
                <InfosListElementSmart 
                heure="18:00"
                    noInter="35642154"
                    site="Aéroport Charles De Gaule"
                    adresse={["172 Allée de Paris", "59160", "Lomme"]}
                    contacts={[ ["Corine Dupuit", "0836656565"], ["Stéphanie Boisson", "0336153615"]]} 
                    navigate={props.navigate}
                    statut={0}
                /> 
                <InfosListElementSmart 
                heure="20:00"
                    noInter="00045632"
                    site="Epicerie Sainte Marguerite"
                    adresse={["9 Avenue des lilas", "17160", "La Rochelle"]}
                    contacts={[["Julie Lafayette", "0987745663"], ["Octave Raimbault", "0874456998"]]} 
                    navigate={props.navigate}
                    statut={0}
                /> 
            </View>
        </View>*/
    <FlatList
      style={{
        margin: "auto"
      }}
      data={props.interventions}
      renderItem={({ item }) => (
        <TouchableOpacity style={{ backgroundColor: "transparent" }}>
          <View>
            <Text>{item.code}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.code}
      numColumns={1}
    />
  );
};

export default ListScreenSmart;
