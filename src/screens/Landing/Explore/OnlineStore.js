import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class OnlineStore extends Component {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 130,
          // marginLeft: 20
          //   borderWidth: 0.5
          //   borderColor: "#dddddd"
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: 100,
              height: 200,
              borderRadius: 11,
              resizeMode: "cover"
            }}
          />

        </View>

          <View style={{ flex: 1, }}>
              {/*<Text style={{color: '#000'}}>{this.props.name}</Text>*/}
          </View>
      </View>
    );
  }
}
export default OnlineStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
