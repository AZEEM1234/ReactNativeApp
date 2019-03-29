import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
 
} from "react-native";


class GroupClasses extends Component {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 20
          //   borderWidth: 0.5
          //   borderColor: "#dddddd"
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: 88,
              height: 88,
              borderRadius:  50/ 2,
              resizeMode: "cover",
              
            }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 22, paddingTop: 10, }}>
          <Text style={{color: '#000'}}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}
export default GroupClasses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
