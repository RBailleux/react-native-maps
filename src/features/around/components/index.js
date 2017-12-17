import React, { Component } from "react";
import {
  Text,
  View
} from "react-native";
import MapView from "react-native-maps";

const Around = props => (
  <View style={{ flex: 1 }}>
    <MapView style={{ flex: 1 }}>
      {props.markers.map(marker => (
        <MapView.Marker key={marker.id} coordinate={marker.position}/>
      ))}
    </MapView>
  </View>
);

export default Around;
