import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class LiveSessions extends Component {
  render() {
    return (
      <View
        style={{
          height: 100,
          width: 100,
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: 50,
              height: 50,
              borderRadius: 11/2,
              resizeMode: "cover"
            }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 5, paddingTop: 10 }}>
          <Text style={{color:'black'}}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}
export default LiveSessions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
