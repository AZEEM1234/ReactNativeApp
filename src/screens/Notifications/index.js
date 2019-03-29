// import React, { Component } from "react";
// import { Text, View, StyleSheet, ScrollView, Modal, TouchableOpacity, AsyncStorage, Image, Platform} from 'react-native';
// import {Container,Header,Title,Content,Icon,Button,Footer,FooterTab,Left,Right,Body} from "native-base";

// import styles from "./styles";
// import Images from "@theme/images/images";

import React, {Component} from "react";

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";

import {
    Container,
    Content,
    Header,
    Title,
    Icon,
    Button,
    Left,
    Right,
    Body,
    Spinner,
    Form,
    Input,
    Item,
    Label,
    Card,
    CardItem,
    Textarea

} from "native-base";

const headerBg = require("./assets/header.png");
const ratingImage = require("./assets/add_home.png");
const menu = require("./assets/menu.png");
const arrowIcon = require("./assets/arrow_icon.png");
const {height, width} = Dimensions.get("window");

class Notifications extends Component {
  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
}

componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
        this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
}

render() {

    return (
        <Container style={styles.container}>
            <Header style={styles.headerStyle}>
                <Image
                    style={{position: "absolute", height: 200, top: 0, left: 0}}
                    source={headerBg}
                    resizeMode="cover"
                />
                <Body style={{alignSelf: "flex-start"}}>
                <Image
                    style={{width: 20, height: 20, position: 'absolute', left: 20, top: 30}}
                    source={menu}
                    resizeMode="cover"
                />

                <Title style={styles.title}>Notifications</Title>
                </Body>
            </Header>
            <Content>
                <Form style={styles.form}>
                <View style={{ 
    flexDirection: 'row',
alignItems: 'center'}}>
                  <View>

                <Image
                                style={{
                                
                                width: 80,
                                height: 80,
                                borderRadius: 50 / 2,
                                zIndex: 2,
                                // flex:1,
                                right:35,
                                top: 10,
                                overflow:'visible',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.2,
                                shadowRadius: 10,
                                elevation: 7,}}
                                source={ratingImage}
                                resizeMode="cover"
                            />
                  </View>
              <View>
                
                    <Card style={{zIndex:1,right:80
}}>
                        <CardItem style={{zIndex:1,height:100,width:350}}>
                       
                    {/* <Card style={styles.shadowBox}>
                        <CardItem>

                            <Image
                                style={{width: 80, height: 80,right:60}}
                                source={ratingImage}
                                resizeMode="cover"
                            /> */}
                            <Title style={{fontSize: 20, fontWeight: 'bold', color: 'black' ,left:30,bottom:30}}>
                                Aliza Moral
                            </Title>

                            <Text style={{right:70,fontSize:13, width:270 ,top:5}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Text>

                            <Image
                                style={{width:10, height: 10 ,right:60}}
                                source={arrowIcon}
                                resizeMode="cover"
                            />
                            <Text style={{right:150,fontSize:13,top:30}}>
                                22 Hours Ago
                            </Text>


                        </CardItem>



                    </Card>
                    </View>
                    </View>
                    <View style={{ 
    flexDirection: 'row',
alignItems: 'center'}}>
                  <View>

                <Image
                                style={{
                                
                                width: 80,
                                height: 80,
                                borderRadius: 50 / 2,
                                zIndex: 2,
                                // flex:1,
                                right:35,
                                top: 10,
                                overflow:'visible',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.2,
                                shadowRadius: 10,
                                elevation: 7,}}
                                source={ratingImage}
                                resizeMode="cover"
                            />
                  </View>
              <View>
                
                    <Card style={{zIndex:1,right:80
}}>
                        <CardItem style={{zIndex:1,height:100,width:350}}>
                       
                    {/* <Card style={styles.shadowBox}>
                        <CardItem>

                            <Image
                                style={{width: 80, height: 80,right:60}}
                                source={ratingImage}
                                resizeMode="cover"
                            /> */}
                            <Title style={{fontSize: 20, fontWeight: 'bold', color: 'black' ,left:30,bottom:30}}>
                                Aliza Moral
                            </Title>

                            <Text style={{right:70,fontSize:13, width:270 ,top:5}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Text>

                            <Image
                                style={{width:10, height: 10 ,right:60}}
                                source={arrowIcon}
                                resizeMode="cover"
                            />
                            <Text style={{right:150,fontSize:13,top:30}}>
                                22 Hours Ago
                            </Text>


                        </CardItem>



                    </Card>
                    </View>
                    </View>

                <View style={{ 
    flexDirection: 'row',
alignItems: 'center'}}>
                  <View>

                <Image
                                style={{
                                
                                width: 80,
                                height: 80,
                                borderRadius: 50 / 2,
                                zIndex: 2,
                                // flex:1,
                                right:35,
                                top: 10,
                                overflow:'visible',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.2,
                                shadowRadius: 10,
                                elevation: 7,}}
                                source={ratingImage}
                                resizeMode="cover"
                            />
                  </View>
              <View>
                
                    <Card style={{zIndex:1,right:80
}}>
                        <CardItem style={{zIndex:1,height:100,width:350}}>
                       
                    {/* <Card style={styles.shadowBox}>
                        <CardItem>

                            <Image
                                style={{width: 80, height: 80,right:60}}
                                source={ratingImage}
                                resizeMode="cover"
                            /> */}
                            <Title style={{fontSize: 20, fontWeight: 'bold', color: 'black' ,left:30,bottom:30}}>
                                Aliza Moral
                            </Title>

                            <Text style={{right:70,fontSize:13, width:270 ,top:5}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Text>

                            <Image
                                style={{width:10, height: 10 ,right:60}}
                                source={arrowIcon}
                                resizeMode="cover"
                            />
                            <Text style={{right:150,fontSize:13,top:30}}>
                                22 Hours Ago
                            </Text>


                        </CardItem>



                    </Card>
                    </View>
                    </View>
                    <View style={{ 
    flexDirection: 'row',
alignItems: 'center'}}>
                  <View>

                <Image
                                style={{
                                
                                width: 80,
                                height: 80,
                                borderRadius: 50 / 2,
                                zIndex: 2,
                                // flex:1,
                                right:35,
                                top: 10,
                                overflow:'visible',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.2,
                                shadowRadius: 10,
                                elevation: 7,}}
                                source={ratingImage}
                                resizeMode="cover"
                            />
                  </View>
              <View>
                
                    <Card style={{zIndex:1,right:80
}}>
                        <CardItem style={{zIndex:1,height:100,width:350}}>
                       
                    {/* <Card style={styles.shadowBox}>
                        <CardItem>

                            <Image
                                style={{width: 80, height: 80,right:60}}
                                source={ratingImage}
                                resizeMode="cover"
                            /> */}
                            <Title style={{fontSize: 20, fontWeight: 'bold', color: 'black' ,left:30,bottom:30}}>
                                Aliza Moral
                            </Title>

                            <Text style={{right:70,fontSize:13, width:270 ,top:5}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Text>

                            <Image
                                style={{width:10, height: 10 ,right:60}}
                                source={arrowIcon}
                                resizeMode="cover"
                            />
                            <Text style={{right:150,fontSize:13,top:30}}>
                                22 Hours Ago
                            </Text>


                        </CardItem>



                    </Card>
                    </View>
                    </View>
                 
                </Form>
            </Content>
        </Container>
    );
}
  // constructor(){
  //   super()
  //   this.state ={
  //   }
  //   this.onMessages = this.onMessages.bind(this)
  //   this.onAlerts = this.onAlerts.bind(this)
  // }
  // onAlerts(){
  //   alert("Alerts")
  // }
  // onMessages(){
  //   this.props.navigation.navigate("NotificationMessages")
  // }
  // render(){
  //     return(
  //       <Container style={styles.container}>
  //         <Header style={styles.headerStyle}>
  //           <Left style={styles.ham}>
  //             <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
  //               <Icon name = "ios-menu" style={{color: "white"}} />
  //             </Button>
  //           </Left>
  //           <Body>
  //             <Title style={styles.title}>Notifications</Title>
  //           </Body>
  //           <Right/>
  //         </Header>
  //         <Content scrollEnabled={false}>
  //           <View style={styles.contentStyle}>
  //             <View style={styles.buttonsView}>
  //               <Button full style={{backgroundColor:"#009FDB",marginTop:25}} onPress={this.onAlerts}>
  //                 <Text style={{fontSize:18,fontWeight:"900",color:"white"}}>Alerts</Text>
  //               </Button>
  //               <Button full style={{backgroundColor:"#009FDB",marginTop:5}} onPress={this.onMessages}>
  //                 <Text style={{fontSize:18,fontWeight:"900",color:"white"}}>Messages</Text>
  //               </Button>
  //             </View>
  //           </View>
  //         </Content>
  //       </Container>
  //     );
  // }
}

export default Notifications;

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#fff"
  },
  headerStyle: {
    height:200
      // backgroundColor: "#009FDB",
  },
  shadowBox:{
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      borderRadius:11/2
  },
  card: {

      height: 110,
      width: 350,
      borderBottomEndRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
      borderBottomStartRadius: 10
  },
  title: {
      paddingTop: 100,
      paddingLeft: 20,
      color: "#fff",
      fontSize: 30,
      fontWeight: "bold"
  },
  form: {
      paddingTop: 10,
      paddingLeft: 40,
      paddingRight: 20
  }
});
