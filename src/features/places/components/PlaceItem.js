import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, CardItem, Text, Icon, Button, Right } from 'native-base';

const styles = StyleSheet.create({
  item: {
    fontSize: 32
  },
  itemVisited: {
    backgroundColor: "#62B1F6"
  },
  itemNotVisited: {

  }
});

const Item = props => {
  const itemStyle = props.visited
    ? styles.itemVisited
    : styles.itemNotVisited;
  return (
      <CardItem style={itemStyle}>
        <Button onPress={props.onPress} transparent>
          <Text>{props.label}</Text>
          <Right>
            <Icon name="navigate"/>
          </Right>
        </Button>
      </CardItem>
  );
};

export default Item;
