// import React, { Component } from "react";
// import {
//   Container,
//   Header,
//   Title,
//   Content,
//   Button,
//   Icon,
//   Text,
//   Left,
//   Body,
//   Right,
//   List,
//   ListItem
// } from "native-base";
// import styles from "./styles";

// const datas = [
//   {
//     route: "BasicCard",
//     text: "Basic Card"
//   },
//   {
//     route: "NHCardHeaderAndFooter",
//     text: "Card Header & Footer"
//   },
//   {
//     route: "NHCardItemBordered",
//     text: "Bordered CardItem"
//   },
//   {
//     route: "NHCardTransparent",
//     text: "Transparent Card"
//   },
//   {
//     route: "NHCardItemButton",
//     text: "Button CardItem"
//   },
//   {
//     route: "NHCardList",
//     text: "Card List"
//   },
//   {
//     route: "NHCardImage",
//     text: "Card Image"
//   },
//   {
//     route: "NHCardShowcase",
//     text: "Card Showcase"
//   }
// ];

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
    Textarea,
    InputGroup

} from "native-base";


const headerBg = require("./assets/header.png");
const product = require("./assets/product_3.png");
const {height, width} = Dimensions.get("window");
const aerobics = require("./assets/aerobics.png");
const experience = require("./assets/experience.png");
const location = require("./assets/location.png");
const userAdd = require("./assets/users_add.png");
const message = require("./assets/users_add.png");
const arrowIcon = require("./assets/arrow_icon.png");
const filter = require("./assets/filter.png");
const backIcon = require("./assets/back_icon.png");
const boxIcon = require("./assets/icon.png");
const downArrow = require("./assets/arrow.png");
const remove = require("./assets/remove.png");
const move = require("./assets/move.png");



class NHCard extends Component {
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
                    style={{position: "absolute", height: 30,width:30, top: 20, left: 20}}
                    source={backIcon }
                    resizeMode="cover"
                />
                <Title style={styles.title}>Cart</Title>
                <Title style={{left:320,bottom:40,  fontSize: 30,
                    fontWeight: "bold"}}>$582</Title>
                <Title style={{left:320,bottom:40,  fontSize: 20,
                    fontWeight: "bold"}}>4 Items</Title>
                </Body>
            </Header>
            <Content>
                <Form style={styles.form} >
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
                                source={product}
                                resizeMode="cover"
                            />
                  </View>
              <View>
                
                    <Card style={{zIndex:1,right:80
}}>
                        <CardItem style={{zIndex:1,height:150,width:340}}>
                       

                            <View style={{shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,}}>
                                <Image
                                    style={{width: 80, height: 80, right: 60,}}
                                    source={product}
                                    resizeMode="cover"
                                />
                            </View>
                            <Title
                                style={{fontSize: 20, fontWeight: 'bold', color: 'black', right: 50, bottom: 30}}>
                                Sinfit Crunch Bar
                            </Title>


                            <View>

                                <Text style={{right: 200, fontSize: 14,bottom:5}}>
                                    Caramel Crunch
                                </Text>
                            </View>
                            <View>
                                <Text style={{right: 300, fontSize: 20,fontWeight:'bold',color:'blue', top:60}}>
                                    $49.99
                                </Text>

                                <Image
                                    style={{width: 30, height: 30, right: 200, top: 35}}
                                    source={boxIcon}
                                    resizeMode="cover"
                                />
                                <Text style={{right: 195, fontSize: 12,fontWeight:'bold',top:8}}>
                                    1
                                </Text>
                                <Image
                                    style={{width: 5, height: 5, right: 180,}}
                                    source={downArrow}
                                    resizeMode="cover"
                                />
                                <Text style={{right: 140, fontSize: 20,fontWeight:'bold',color:'blue', bottom:17}}>
                                    $49.99
                                </Text>
                            </View>

                            <View style={{height:140,top:40}}>
                                <Image
                                    style={{width: 20, height: 20, right: 360, top: 80}}
                                    source={remove}
                                    resizeMode="cover"
                                />
                                <Text style={{right: 330, fontSize: 15, top: 60}}>
                                    REMOVE
                                </Text>
                            </View>
                            <View style={{height:140,top:40}}>
                                <Image
                                    style={{width: 20, height: 20, right: 320, top: 80}}
                                    source={move}
                                    resizeMode="cover"
                                />
                                <Text style={{right: 290, fontSize: 15, top: 60}}>
                                    MOVE TO WISHLIST
                                </Text>
                            </View>



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
                                source={product}
                                resizeMode="cover"
                            />
                  </View>
              <View>
                
                    <Card style={{zIndex:1,right:80
}}>
                        <CardItem style={{zIndex:1,height:150,width:340}}>
                       

                            <View style={{shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,}}>
                                <Image
                                    style={{width: 80, height: 80, right: 60,}}
                                    source={product}
                                    resizeMode="cover"
                                />
                            </View>
                            <Title
                                style={{fontSize: 20, fontWeight: 'bold', color: 'black', right: 50, bottom: 30}}>
                                Sinfit Crunch Bar
                            </Title>


                            <View>

                                <Text style={{right: 200, fontSize: 14,bottom:5}}>
                                    Caramel Crunch
                                </Text>
                            </View>
                            <View>
                                <Text style={{right: 300, fontSize: 20,fontWeight:'bold',color:'blue', top:60}}>
                                    $49.99
                                </Text>

                                <Image
                                    style={{width: 30, height: 30, right: 200, top: 35}}
                                    source={boxIcon}
                                    resizeMode="cover"
                                />
                                <Text style={{right: 195, fontSize: 12,fontWeight:'bold',top:8}}>
                                    1
                                </Text>
                                <Image
                                    style={{width: 5, height: 5, right: 180,}}
                                    source={downArrow}
                                    resizeMode="cover"
                                />
                                <Text style={{right: 140, fontSize: 20,fontWeight:'bold',color:'blue', bottom:17}}>
                                    $49.99
                                </Text>
                            </View>

                            <View style={{height:140,top:40}}>
                                <Image
                                    style={{width: 20, height: 20, right: 360, top: 80}}
                                    source={remove}
                                    resizeMode="cover"
                                />
                                <Text style={{right: 330, fontSize: 15, top: 60}}>
                                    REMOVE
                                </Text>
                            </View>
                            <View style={{height:140,top:40}}>
                                <Image
                                    style={{width: 20, height: 20, right: 320, top: 80}}
                                    source={move}
                                    resizeMode="cover"
                                />
                                <Text style={{right: 290, fontSize: 15, top: 60}}>
                                    MOVE TO WISHLIST
                                </Text>
                            </View>



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
                                source={product}
                                resizeMode="cover"
                            />
                  </View>
              <View>
                
                    <Card style={{zIndex:1,right:80
}}>
                        <CardItem style={{zIndex:1,height:150,width:340}}>
                       

                            <View style={{shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,}}>
                                <Image
                                    style={{width: 80, height: 80, right: 60,}}
                                    source={product}
                                    resizeMode="cover"
                                />
                            </View>
                            <Title
                                style={{fontSize: 20, fontWeight: 'bold', color: 'black', right: 50, bottom: 30}}>
                                Sinfit Crunch Bar
                            </Title>


                            <View>

                                <Text style={{right: 200, fontSize: 14,bottom:5}}>
                                    Caramel Crunch
                                </Text>
                            </View>
                            <View>
                                <Text style={{right: 300, fontSize: 20,fontWeight:'bold',color:'blue', top:60}}>
                                    $49.99
                                </Text>

                                <Image
                                    style={{width: 30, height: 30, right: 200, top: 35}}
                                    source={boxIcon}
                                    resizeMode="cover"
                                />
                                <Text style={{right: 195, fontSize: 12,fontWeight:'bold',top:8}}>
                                    1
                                </Text>
                                <Image
                                    style={{width: 5, height: 5, right: 180,}}
                                    source={downArrow}
                                    resizeMode="cover"
                                />
                                <Text style={{right: 140, fontSize: 20,fontWeight:'bold',color:'blue', bottom:17}}>
                                    $49.99
                                </Text>
                            </View>

                            <View style={{height:140,top:40}}>
                                <Image
                                    style={{width: 20, height: 20, right: 360, top: 80}}
                                    source={remove}
                                    resizeMode="cover"
                                />
                                <Text style={{right: 330, fontSize: 15, top: 60}}>
                                    REMOVE
                                </Text>
                            </View>
                            <View style={{height:140,top:40}}>
                                <Image
                                    style={{width: 20, height: 20, right: 320, top: 80}}
                                    source={move}
                                    resizeMode="cover"
                                />
                                <Text style={{right: 290, fontSize: 15, top: 60}}>
                                    MOVE TO WISHLIST
                                </Text>
                            </View>



                        </CardItem>


                    </Card>
                    </View>
                    </View>
                 
                </Form>
            </Content>

        </Container>
    );
}
}

const styles = StyleSheet.create({
container: {
    backgroundColor: "#fff"
},
headerStyle: {
  height:200

    // backgroundColor: "#009FDB",
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

    position:'relative',
    paddingTop: 10,
    paddingLeft: 50,
    paddingRight: 20
}
});

export default NHCard;
