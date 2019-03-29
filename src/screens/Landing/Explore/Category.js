import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Category extends Component {
  render() {
    return (
      <View
        style={{
          height: 110,
          width: 110,
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
              width: 70,
              height: 70,
              borderRadius: 50,
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
export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
