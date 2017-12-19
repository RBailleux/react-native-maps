import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PlaceInput from "./Input";

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: "100%",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "#FFF"
  }
});

const Header = props => (
  <View style={styles.header}>
    <PlaceInput onAdd={props.onAdd} />
  </View>
);
export default Header;
