/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar'


const headerBg = require("./assets/header.png");
const ratingImage = require("./assets/add_home.png");
const menu = require("./assets/menu.png");
const {height, width} = Dimensions.get("window");


export default class rating extends Component<Props> {
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
                    <Button style={{right:170}}
                transparent
                onPress = {() => this.props.navigation.navigate("DrawerOpen")}>
                {/* < Icon name = "ios-menu" style={{color: "black"}}/ > */}
                   <Image
                    style={{ height: 30, width: 30,right:10}}
                    source={menu}
                    resizeMode="cover"
                />
              </Button>
{/* 
              <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                    <Image
                        style={{width: 20, height: 20, position: 'absolute', left: 20, top: 0}}
                        source={menu}
                        resizeMode="cover"
                    />
                    </TouchableOpacity> */}
                    </Body>
                </Header>
                <View style={{ flexDirection:'row',justifyContent:'center',bottom:70}}> 
          <View style={styles.cardSection1}>
    <View >
    <Image style={styles.image}
                        source={ratingImage}
                        resizeMode="cover" />
    </View>
    
  </View>
  <View style={styles.cardSection2}>
  <Title style={{fontSize: 20, fontWeight: 'bold', color: 'black',justifyContent: 'center',top:30}}>
                    Aliza Mural
                  </Title>

                   
                 
                 <View style={{height: 80, flexDirection: 'row', alignItems: 'center', left: 25, top: 30}}>

<StarRatingBar

    starStyle={{
        width: 40,
        height: 40,

    }}
    readOnly={false}
    continuous={true}
    score={3.7}
    allowsHalfStars={true}
    accurateHalfStars={true}
    scoreTextStyle={{color: '#fff'}}
    // onStarValueChanged={(score) => {
    //     console.log('new score:' + score);
    // }}
/>
                  </View>
                  
 

                 
  </View>
  </View>

                <Content>
                    <Form style={styles.form}>
                        

                        <View style={{
                            top: 150,
                            left: 30,
                            height: 200,
                            width: 350,
                            position: 'absolute',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 8,
                            },
                            shadowOpacity: 0.44,
                            shadowRadius: 10.32,

                            elevation: 10,
                        }}>

                            <Textarea rowSpan={5} bordered placeholder="Write your feedback"/>
                        </View>

                        <View  style={{paddingTop: 100}}>

                            <Button
                                style={{

                                    width: 180,
                                    height: 60,
                                    backgroundColor: "#0C94EC",
                                    alignSelf: 'center',
                                    borderRadius: 100 / 2,
                                    shadowColor: '#000000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 8
                                    },
                                    shadowRadius: 5,
                                    shadowOpacity: 1.0,
                                    elevation:10
                                }}
                            >
                                <Text
                                    style={{left: 50, color: 'white', fontSize: 20, fontWeight: 'bold'}}> SUBMIT </Text>
                            </Button>

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
        position: 'absolute',
        top: 40,
        left: 30,
        height: 240,
        width: 350,
        borderRadius: 11 / 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 10,
    },
    title: {
        paddingTop: 100,
        paddingLeft: 20,
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold"
    },
    form: {
        paddingTop: 200,
        paddingLeft: 20,
        paddingRight: 20
    },
    image: {
        bottom:20,
        width: 80, height: 80,
        
       },
       cardSection1: {
         alignItems: 'flex-start',
         justifyContent: 'space-between',
         
         position: 'absolute',
         flexDirection:'row',
         width: 'auto',
         top:10,
         height: 100,
        //  right:220,
         
        //  borderRadius: 50 / 2,
         zIndex: 2,
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 0 },
         shadowOpacity: 0.2,
         shadowRadius: 10,
         elevation: 7,
       },
       cardSection2: {
         alignItems: 'center',
         justifyContent: 'center',
         position: 'absolute',
         top: 25,
         width: 360,
         height: 180,
         borderRadius: 8,
         backgroundColor: 'white',
         zIndex: 1,
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 0 },
         shadowOpacity: 0.2,
         shadowRadius: 10,
         elevation: 5,
       }
});
