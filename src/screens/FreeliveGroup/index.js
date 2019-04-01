/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
// import Stars from 'react-native-stars';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
    Dimensions,
    ImageBackground
} from "react-native";


import {
    Container,
    Content,
    Header,
    Title,

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
const backgroundImage = require("./assets/bg.png");
const backIcon=require("./assets/back_icon.png")
const {height, width} = Dimensions.get("window");


export default class FreeLiveGroup extends Component{
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
            <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%'}}>

                <View style={{height: 60,top:520}}>
                    <Image
                        style={{position: "absolute", height: 30,width:30, bottom: 520, left: 360}}
                        source={backIcon }
                        resizeMode="cover"
                    />
                    <Title style={{right:78,bottom:30,fontSize:30,fontWeight:'bold'}}>Aliza Mural</Title>

                    <View style={{height: 60, flexDirection: 'row',left:20,bottom:30}}>
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
                        scoreTextStyle={{color: '#fff',fontSize: 20}}
                        // onStarValueChanged={(score) => {
                        //     console.log('new score:' + score);
                        // }}
                    />
                        <Image
                            style={{width: 60, height: 60,right:300,top:60}}
                            source={ratingImage}
                            resizeMode="cover"
                        />
                        <Image
                            style={{width: 60, height: 60,right:300,top:60}}
                            source={ratingImage}
                            resizeMode="cover"
                        />
                        <Image
                            style={{width: 60, height: 60,right:300,top:60}}
                            source={ratingImage}
                            resizeMode="cover"
                        />
                        <Image
                            style={{width: 60, height: 60,right:300,top:60}}
                            source={ratingImage}
                            resizeMode="cover"
                        />
                        <Image
                            style={{width: 60, height: 60,right:300,top:60}}
                            source={ratingImage}
                            resizeMode="cover"
                        />
                    </View>


                </View>
            </ImageBackground>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    },
    headerStyle: {
        // backgroundColor: "#009FDB",
    },
    card: {
        position: 'absolute',
        top: 80,
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
    }
});
