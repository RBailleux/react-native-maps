import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Container, Header, Content, Button, Text } from 'native-base';

const styles = StyleSheet.create({
  footer: {
    height: 50,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  selected: {
    backgroundColor: "#62B1F6"
  },
  unselected: {

  }
});

const ActionButton = props => (
  <Button onPress={props.onPress} style={props.selected ? styles.selected : styles.unselected}>
    <Text>
      {props.label}
    </Text>
  </Button>
);

const Footer = props => (
  <View style={styles.footer}>
    <ActionButton
      label="Visited"
      selected={props.selected === "visited"}
      onPress={props.onSelectFilter.bind(this, "visited")}
    />
    <ActionButton
      label="New"
      onPress={props.onSelectFilter.bind(this, "new")}
      selected={props.selected === "new"}
    />
    <ActionButton
      label="All"
      onPress={props.onSelectFilter.bind(this, "all")}
      selected={props.selected === "all"}
    />
  </View>
);
export default Footer;
