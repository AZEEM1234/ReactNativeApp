// import React, { Component } from "react";
// import { View, AsyncStorage, StyleSheet,Alert,Dimensions,Image } from "react-native";
// import { Container,Content, Text, Footer,FooterTab } from "native-base";
// import ImageSlider from "react-native-image-slider";
// import { Button, Header } from "../common";
// import API from "@utils/ApiUtils";
// import {IMAGE_PATH} from "@common/global";

// const window = Dimensions.get("window");
// var PushNotification = require("react-native-push-notification");


import React, { Component } from "react";

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
const aerobics = require("./assets/aerobics_icon.png");
const experience = require("./assets/experience.png");
const location = require("./assets/location.png");
const userAdd = require("./assets/users_add.png");
const message = require("./assets/users_add.png");

const backIcon = require("./assets/back_icon.png");
const menu = require("./assets/menu.png");
const trainer = require("./assets/trainer.png");
const arrowIcon = require("./assets/arrow_icon.png");
const shoes = require("./assets/shoes.png");
const tshirt = require("./assets/t_shirt.png");
const trousers = require("./assets/trousers.png");
const yoga = require("./assets/yoga.png");
const cycling = require("./assets/cycling.png");
const cardio = require("./assets/cardio.png");

const { height, width } = Dimensions.get("window");
import Category from "./Explore/Category";
import OnlineStore from "./Explore/OnlineStore";
import GroupClasses from "./Explore/GroupClasses";
import LiveSessions from "./Explore/LiveSessions";

import ProgressCircle from 'react-native-progress-circle'
// 
class Landing extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.startHeaderHeight = 80;
        if (Platform.OS == "android") {
            this.startHeaderHeight = 100 + StatusBar.currentHeight;
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.headerStyle}>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")} style={{
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: 10
                    }}>
                        <Image
                            style={{
                                width: 30,
                                height: 30,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            source={menu}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>

                    {/* <View style={styles.menuButton}><Image
                    style={{flex:1}}
                    source={trainer}
                    resizeMode="cover"
                     /></View> */}
                </View>
                <View style={styles.bgImg}>
                    <View>
                        <Text style={styles.title}>Hello Johny</Text>
                        <Text style={{ color: '#fff', fontSize: 20, left: 20 }}>We manage is homepage for your best interest</Text>
                    </View>
                </View>
                <Content>
                    <Form style={styles.form}>

                        <View >

                            <SafeAreaView style={{ flex: 1 }}>
                                <View style={{ flex: 1 }}>

                                    <ScrollView scrollEventThrottle={16}>
                                        <View style={{ flex: 1, backgroundColor: "white", }}>
                                            <View><Text
                                                style={{
                                                    fontSize: 15,
                                                    fontWeight: "bold",
                                                    color: "grey",
                                                    top: 10

                                                }}
                                            >
                                                Featured Trainers
                                        </Text>
                                                <Image
                                                    style={{ top: 10, right: 20, height: 10, width: 10, position: 'absolute' }}
                                                    source={arrowIcon}
                                                    resizeMode="cover"
                                                />
                                            </View>

                                            <View style={{ height: 100, marginTop: 20 }}>

                                                <ScrollView
                                                    horizontal={true}
                                                    showsHorizontalScrollIndicator={false}
                                                >
                                                    <Category
                                                        imageUri={require("./assets/home.jpg")}
                                                        name="Micheal Clark"

                                                    />
                                                    <Category
                                                        imageUri={require("./assets/experiences.jpg")}
                                                        name="Micheal Clark"

                                                    />
                                                    <Category
                                                        imageUri={require("./assets/restaurant.jpg")}
                                                        name="Micheal Clark"

                                                    />
                                                    <Category
                                                        imageUri={require("./assets/restaurant.jpg")}
                                                        name="Micheal Clark"

                                                    />
                                                    <Category
                                                        imageUri={require("./assets/restaurant.jpg")}
                                                        name="Micheal Clark"

                                                    />
                                                </ScrollView>
                                            </View>
                                        </View>
                                        <View style={{ flex: 1, backgroundColor: "white", top: 10 }}>
                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 15,
                                                        fontWeight: "bold",
                                                        color: "grey",
                                                        top: 10

                                                    }}
                                                >
                                                    Online Store
                                              </Text>
                                                <Image
                                                    style={{ top: 10, right: 20, height: 10, width: 10, position: 'absolute' }}
                                                    source={arrowIcon}
                                                    resizeMode="cover"
                                                />
                                            </View>


                                            <View style={{ height: 100, marginTop: 20 }}>

                                                <ScrollView
                                                    horizontal={true}
                                                    showsHorizontalScrollIndicator={false}
                                                >
                                                    <OnlineStore
                                                        imageUri={shoes}
                                                        name="Micheal Clark"

                                                    />

                                                    <OnlineStore
                                                        imageUri={tshirt}
                                                        name="Micheal Clark"

                                                    />
                                                    <OnlineStore
                                                        imageUri={trousers}
                                                        name="Micheal Clark"

                                                    />

                                                </ScrollView>
                                            </View>
                                        </View>
                                        <View style={{ flex: 1, backgroundColor: "white", top: 10 }}>
                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 15,
                                                        fontWeight: "bold",
                                                        color: "grey",
                                                        top: 10

                                                    }}
                                                >
                                                    Group Classes
                                        </Text>
                                                <Image
                                                    style={{ top: 10, right: 20, height: 10, width: 10, position: 'absolute' }}
                                                    source={arrowIcon}
                                                    resizeMode="cover"
                                                />
                                            </View>

                                            <View style={{ height: 100, marginTop: 20 }}>

                                                <ScrollView
                                                    horizontal={true}
                                                    showsHorizontalScrollIndicator={false}
                                                >
                                                    <GroupClasses
                                                        imageUri={yoga}
                                                        name="Yoga"

                                                    />
                                                    <GroupClasses
                                                        imageUri={aerobics}
                                                        name="Aerobics"

                                                    />
                                                    <GroupClasses
                                                        imageUri={cycling}
                                                        name="Cycling"

                                                    />
                                                    <GroupClasses
                                                        imageUri={cardio}
                                                        name="Cardio"

                                                    />

                                                </ScrollView>
                                            </View>
                                        </View>
                                        <View style={{ flex: 1, backgroundColor: "white", top: 10 }}>
                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 15,
                                                        fontWeight: "bold",
                                                        color: "grey",
                                                        top: 10

                                                    }}
                                                >
                                                    Live Sessions
                                        </Text>
                                                <Image
                                                    style={{ top: 10, right: 20, height: 10, width: 10, position: 'absolute' }}
                                                    source={arrowIcon}
                                                    resizeMode="cover"
                                                />
                                            </View>

                                            <View style={{ height: 100, marginTop: 20 }}>

                                                <ScrollView
                                                    horizontal={true}
                                                    showsHorizontalScrollIndicator={false}
                                                >
                                                    <LiveSessions
                                                        imageUri={ratingImage}
                                                        name="Yoga"

                                                    />
                                                    <LiveSessions
                                                        imageUri={ratingImage}
                                                        name="Aerobics "

                                                    />
                                                    <LiveSessions
                                                        imageUri={ratingImage}
                                                        name="Cycling"

                                                    />
                                                    <LiveSessions
                                                        imageUri={ratingImage}
                                                        name="Cardio "

                                                    />

                                                </ScrollView>
                                            </View>
                                        </View>
                                    </ScrollView>
                                </View>

                            </SafeAreaView>
                        </View>
                        <View style={styles.contentWrap}>
                            <View style={styles.RowHolder}>
                                <Text style={styles.itemrow}>Next</Text>
                                <Text style={styles.itemrow}>Upcoming</Text>
                                <Text style={[styles.itemrow]}>Training</Text>
                                <Text style={[styles.itemrow]}>Session</Text>
                                <Text style={[styles.itemrow, styles.boldTxt]}>Join Now >></Text>
                                <View style={{position:'absolute', right:10, top:10, bottom: 10}}><ProgressCircle

                                    percent={70}
                                    radius={60}
                                    borderWidth={8}
                                    color="#7E4278"
                                    shadowColor="#999"
                                    bgColor="#fff"
                                >
                                    <Text style={{ fontSize: 18, color: '#7E4278' }}>{'02:44'}</Text>
                                    <Text style={{ fontSize: 18, color: '#000' }}>{'hours'}</Text>
                                </ProgressCircle>
                                <Image
                                        style={{ position: "absolute", height: 80, width: 80, top: 90, bottom:10, right:30, left:40 }}
                                        source={ratingImage}
                                        resizeMode="cover"
                                    />
                                </View>

                            </View>
                        </View>

                        {/* <View style={{ top: 50, height: 300, width: 600, right: 40, backgroundColor: '#DAEBF5' }}>
                            <Card style={{
                                marginBottom: 8,
                                borderColor: '#ebebeb',
                                borderWidth: 1,
                                borderRadius: 5,
                                padding: 12,
                                left: 20,
                            }}>
                                <View style={{ width: 110, height: 100 }}>
                                    <Text
                                        style={{
                                            top: 15,
                                            left: 20,
                                            fontSize: 18,

                                            color: "black",
                                            paddingHorizontal: 10
                                        }}
                                    >
                                        Next
                                </Text>
                                    <Text
                                        style={{
                                            top: 15,
                                            left: 20,
                                            fontSize: 18,

                                            color: "black",
                                            paddingHorizontal: 10
                                        }}
                                    >
                                        Upcoming
                                </Text>
                                    <Text
                                        style={{
                                            top: 15,
                                            left: 20,
                                            fontSize: 18,

                                            color: "black",
                                            paddingHorizontal: 10
                                        }}
                                    >
                                        Training
                                </Text>
                                    <Text
                                        style={{
                                            top: 15,
                                            left: 20,
                                            fontSize: 18,

                                            color: "black",
                                            paddingHorizontal: 10
                                        }}
                                    >
                                        Session
                                </Text>
                                    <Text
                                        style={{
                                            top: 15,
                                            left: 30,
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            color: "black",

                                        }}
                                    >
                                        Join Now >>
                                </Text>
                                    <View style={{ bottom: 110, width: 100, height: 100, left: 190 }}>
                                        <ProgressCircle

                                            percent={70}
                                            radius={60}
                                            borderWidth={8}
                                            color="#7E4278"
                                            shadowColor="#999"
                                            bgColor="#fff"
                                        >
                                            <Text style={{ fontSize: 18, color: '#7E4278' }}>{'02:44'}</Text>
                                            <Text style={{ fontSize: 18, color: '#000' }}>{'hours'}</Text>
                                        </ProgressCircle>
                                    </View>
                                    <Image
                                        style={{ position: "absolute", height: 80, width: 80, top: 80, left: 270 }}
                                        source={ratingImage}
                                        resizeMode="cover"
                                    />
                                </View>

                            </Card>
                        </View> */}
                    </Form>
                </Content>
            </View>
        );
    }
    // constructor(){
    //   super();
    //   this.state = {
    //     libraries: []
    //   };
    // }
    // static navigationOptions = {
    //     title: "Landing",
    //   };
    // componentWillMount(){
    //   this.onPushNotification();
    //   this.getLandingPageImages();
    // }
    // onPushNotification(){
    //     PushNotification.configure({
    //       // (optional) Called when Token is generated (iOS and Android)
    //       onRegister: function(token) {
    //           console.log( "TOKEN@@@@@@:",token);
    //            AsyncStorage.setItem("@token:key", JSON.stringify(token));
    //       },

    //       // (required) Called when a remote or local notification is opened or received
    //       onNotification: function(notification) {
    //           console.log( "NOTIFICATION:", notification );

    //           // process the notification

    //           // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
    //           notification.finish(PushNotificationIOS.FetchResult.NoData);
    //       },

    //       // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
    //       senderID: "YOUR GCM SENDER ID",

    //       // IOS ONLY (optional): default: all - Permissions to register.
    //       permissions: {
    //           alert: true,
    //           badge: true,
    //           sound: true
    //       },

    //       // Should the initial notification be popped automatically
    //       // default: true
    //       popInitialNotification: true,

    //       /**
    //         * (optional) default: true
    //         * - Specified if permissions (ios) and token (android and ios) will requested or not,
    //         * - if not, you must call PushNotificationsHandler.requestPermissions() later
    //         */
    //       requestPermissions: true,
    //   });
    // }
    // getLandingPageImages(){
    //   API.getLandingPageImages().then(async (response) => {
    //     this.setState({loading : false});
    //     if (response.status) {
    //       this.setState({libraries: response.data});
    //     } else {

    //     }
    //   }).catch((error)=>{
    //     this.setState({spinner:false});
    //     console.log("Console Error",error);
    //   });
    // }
    // onEnter(){
    //   AsyncStorage.getItem("@getUserType:key", (err, type) => {
    //     if (err){
    //       Alert.alert("HomeFit", "Can't Fetch the Data");
    //     }
    //     if (type){
    //       this.setState({
    //         userType:type
    //       },()=>{
    //         if (type === "Trainer"){
    //           this.props.navigation.navigate("TrainerPersonalPage");
    //         } else {
    //           this.props.navigation.navigate("ClientHome");
    //         }
    //       });
    //     } else {
    //       this.props.navigation.navigate("ClientHome");
    //     }
    //   });
    // }
    // render() {
    //   return (
    //     <Container style={styles.container}>
    //       <Header headerText="HomeFit" />
    //       <Content>
    //         <View style={{flex:1}}>
    //           <View style={styles.sliderStyle}>
    //             <ImageSlider
    //                 autoPlayWithInterval={3000}
    //                 images={this.state.libraries}
    //                 customSlide={({ index, item, style, width }) => (
    //                     <Image key={index} source={{ uri: IMAGE_PATH + item.image }} style={{width: window.width / 1,height: window.height * 0.45}} />
    //                 )}
    //               />
    //           </View>
    //           <View style={styles.lowerContainer}>
    //             <View style={styles.cardStyle}>
    //               <Text style={styles.subTitle}>One Stop Shop For All Your Gym Needs!</Text>
    //             </View>
    //           </View>
    //           <View style={styles.lowerTextContainer}>
    //             <Text style={styles.lowerText}>Browse our professaional trainers! {"\n"} Have video consultations with them! {"\n"} Pay by the hour! {"\n"} Buy the best products!</Text>
    //           </View>
    //         </View>
    //       </Content>
    //       <Footer>
    //         <FooterTab style={{marginBottom:10}}>
    //             <Button full transparent onPress={this.onEnter.bind(this)} style={{alignItems:"center",justifyContent:"center"}}>
    //               <Text style={{color : "#009FDB",fontSize:18}}>Enter</Text>
    //             </Button>
    //           </FooterTab>
    //       </Footer>
    //     </Container>
    //   );
    // }
}
export default Landing;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    headerStyle: {
        height: 65,
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "rgba(0,0,0,0.1)",
        // borderBottomLeftRadius: 14,
        // borderBottomRightRadius: 14,
        backgroundColor: "#009FDB",
    },
    menuButton: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 100,
    },
    bgImg: {
        height: 135,
        backgroundColor: "#009FDB",
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
    shadowbox: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        paddingTop: 20,
        paddingLeft: 20,
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold"
    },
    form: {
        paddingLeft: 30,

        paddingTop: 20,

    },
    contentWrap: {
        paddingRight: 30,
    },
    RowHolder: {
        marginBottom: 8,
        borderColor: '#ebebeb',
        borderWidth: 3,
        borderRadius: 10,
        padding: 50,
        marginTop: 30,
    },
    itemrow: {
        fontSize: 12,
        lineHeight: 14,
        marginBottom: 5,
        flexDirection: 'row',
        color: '#747474',
    },
    boldTxt: {
        fontWeight: 'bold'
    },
});


// const styles = StyleSheet.create({
//   container : {
//     backgroundColor : "#fff"
//   },
//   sliderStyle : {
//       flex:0.5,
//       backgroundColor:"brown",
//       width: window.width / 1,
//       height: window.height * 0.45,
//       marginTop: 10,
//       margin:10,
//       alignSelf:"center"
//   },
//   subTitle : {
//       color : "#fff",
//       fontSize : window.width / 22,
//       lineHeight : 60,
//       alignItems : "center",
//       fontWeight : "800",
//       shadowColor : "#000",
//       shadowOffset : { width : 0, height : 2 },
//       shadowOpacity : 0.8,
//       elevation : 2,
//       position : "relative"
//   },
//   lowerContainer : {
//     //height : '100%',
//     flex:0.2,
//     marginTop:5,
//     paddingVertical:5
//   },
//   cardStyle : {
//       borderRadius : 5,
//       justifyContent : "center",
//       marginHorizontal:10,
//       margin:2,
//       alignItems : "center",
//       backgroundColor  : "#009FDB",
//       shadowColor : "#000",
//       shadowOffset : { width : 0, height : 2 },
//       shadowOpacity : 0.8,
//       // elevation : 2,
//       // position : "relative"
//   },
//   lowerTextContainer : {
//       flex:0.3,
//       // alignSelf:"center",
//       //alignItems : "center",
//       justifyContent : "center",
//       backgroundColor : "#FFF",
//       padding:15
//   },
//   lowerText : {
//       fontSize : window.width / 22,
//       color : "#009FDB",
//       fontWeight : "600",
//       textAlign:"center"
//   }
// });
