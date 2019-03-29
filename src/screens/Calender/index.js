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
const menu = require("./assets/menu.png");

import EventCalendar from 'react-native-events-calendar'

//const events =


export default class Calender extends Component {
    constructor(props){
        super(props)
        this.state = {
            events :  [

                { start: '2017-09-07 01:00:00', end: '2017-09-07 01:30:00', title: 'Painting and Decoration', summary: '1hr   InCall  $150' },

            ]
        }
    }
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    componentWillMount() {
        this.startHeaderHeight = 80;
        if (Platform.OS == "android") {
            this.startHeaderHeight = 100 + StatusBar.currentHeight;
        }
    }
    _eventTapped(event) {
        alert(JSON.stringify(event));
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
                    {/* <Image
                        style={{position: "absolute", height: 30,width:30, top: 20, left: 20}}
                        source={menu }
                        resizeMode="cover"
                    /> */}
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
                    <Title style={styles.title}>Calender</Title>

                    </Body>
                </Header>
                <Content>
                    <Form style={styles.form} >
                        <EventCalendar
                            style={{color: '#5f9ea0'}}
                            eventTapped={this._eventTapped.bind(this)}
                            events={this.state.events}
                            width={width}
                            initDate={'2017-09-07'}
                        />

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
        paddingTop: 40,

        paddingRight: 20
    }
});
