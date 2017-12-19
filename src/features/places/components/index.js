import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar
} from "react-native";
import { Card } from 'native-base';
import PlaceList from "./PlaceList";
import Header from "./Header";
import Footer from "./Footer";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ecf0f1"
  }
});

const Places = props => (
  <View style={styles.root}>
    <Header onAdd={props.addItem} />
    <ScrollView>
      <Card>
        <PlaceList places={props.places} onSelectItem={props.onToggleItem} />
      </Card>
    </ScrollView>
    <Footer onSelectFilter={props.updateFilter} selected={props.filter} />
  </View>
);
export default Places;
