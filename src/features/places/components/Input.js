import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Input, Button, Text } from 'native-base';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row"
  },
  input: {
    flex: 1,
    margin: 20,
    height: 40,
    padding: 10,
    backgroundColor: "#FFF",
    borderBottomWidth: 1
  },
  button: {
    flex: 0,
    height: 50,
    marginVertical: 20,
    paddingTop: 15,
    marginRight: 20
  }
});
export default class PlaceInput extends Component {
  constructor() {
    super();
    this.addHandler = this.addHandler.bind(this);
    this.state = {
      text: undefined
    };
  }
  addHandler() {
    if (this.props.onAdd) this.props.onAdd(this.state.text);
    this.setState({
      text: undefined
    });
  }
  render() {
    return (
      <View style={styles.root}>
        <Input
          style={styles.input}
          placeholder="Enter a destination"
          underlineColorAndroid="transparent"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button style={styles.button} onPress={this.addHandler}>
          <Text>Add</Text>
        </Button>
      </View>
    );
  }
}
