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
const aerobics = require("./assets/aerobics.png");
const experience = require("./assets/experience.png");
const location = require("./assets/location.png");
const userAdd = require("./assets/users_add.png");
const message = require("./assets/users_add.png");

const backIcon = require("./assets/back_icon.png");

const {height, width} = Dimensions.get("window");
import Category from "./Explore/Category";




class TrainersProfile extends Component {


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
                style={{position: "absolute", height: 20,width:20, top: 20, left: 20}}
                source={backIcon }
                resizeMode="cover"
            />
            </Body>
          </Header>
         <View style={{ flexDirection:'row',justifyContent:'center',bottom:70}}> 
          <View style={styles.cardSection1}>
    <View >
    <Image style={styles.image}
                        source={userAdd}
                        resizeMode="cover" />
    </View>
    <View style={{ paddingLeft:50,paddingRight:50}}>
    <Image style={styles.image}
                        source={userAdd}
                        resizeMode="cover" />
    </View>
    <View>
    <Image style={styles.image}
                        source={userAdd}
                        resizeMode="cover" />
    </View>
  </View>
  <View style={styles.cardSection2}>
  <Title style={{fontSize: 20, fontWeight: 'bold', color: 'black',justifyContent: 'center',top:50}}>
                    Aliza Mural
                  </Title>

                    <View style={{top:60,flex: 1, flexDirection: 'row',justifyContent: 'space-between',}}>
                   <View>                
                      
                         <Image
                        style={{width: 20, height: 20,right:30}}
                        source={aerobics}
                        resizeMode="cover"
                    />
                    <Text style={{fontSize:12,bottom:20}}>
                      Fitness, Aerobics
                    </Text>
                    </View>
                  
                    <View style={{paddingLeft:10,paddingRight:30}}>                
                      
                      <Image
                     style={{width: 20, height: 20}}
                     source={experience}
                     resizeMode="cover"
                 />
                 <Text style={{fontSize:12,left:30,bottom:20}}>
                   2 years
                 </Text>
                 </View>
               
                 <View>                
                      
                      <Image
                     style={{width: 20, height: 20,left:10}}
                     source={location}
                     resizeMode="cover"
                 />
                 <Text style={{fontSize:12,left:40,bottom:20}}>
                   New York, US
                 </Text>
                 </View>

               
                  </View>

                 <View style={{height:170,top:100,}}>
                  <Text style={{fontSize:15,justifyContent:"center",textAlign:'center'}}>
                     "Hi,My name is Aliza and I enjoy eveery moment when I'm in a gym.my goal is to make the world healthy!"
                  </Text>
                  </View>
                  
 

                 
  </View>
  </View>
          <Content>
            <Form style={styles.form}>
              

              <Card  style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 10,}}>
                <CardItem>

                  <SafeAreaView style={{ flex: 1 }}>
                          <View style={{ flex: 1 }}>
                             <ScrollView scrollEventThrottle={16}>
                               <View style={{ flex: 1, backgroundColor: "white",  }}>
                                 <Text
                                style={{
                                  fontSize: 15,
                                  fontWeight: "bold",
                                  color:"black",
                                  paddingHorizontal: 20
                                }}
                              >
                               Photos
                              </Text>

                              <View style={{ height: 100, marginTop: 20 }}>
                                <ScrollView
                                  horizontal={true}
                                  showsHorizontalScrollIndicator={false}
                                >
                                  <Category
                                    imageUri={require("./assets/home.jpg")}

                                  />
                                  <Category
                                    imageUri={require("./assets/experiences.jpg")}

                                  />
                                  <Category
                                    imageUri={require("./assets/restaurant.jpg")}

                                  />
                                  <Category
                                    imageUri={require("./assets/restaurant.jpg")}

                                  />
                                  <Category
                                    imageUri={require("./assets/restaurant.jpg")}

                                  />
                                </ScrollView>
                              </View>
                               </View>
                             </ScrollView>
                          </View>

                  </SafeAreaView>
                </CardItem>



              </Card>
              <Card style={{height:110,

                shadowColor: "#000",
                shadowOffset: {
                width: 0,
                height: 2,
              },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 10,}} >
                <CardItem>

                  <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color:"black",
                        paddingHorizontal: 10,bottom:5
                      }}
                  >
                    Training Speciality
                  </Text>
                  <Text style={{right:140,fontSize:12,top:30}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>


                </CardItem>



              </Card>
              <Card style={{height:180,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 10,}} >
                <CardItem> 

                <View style={{ bottom:80}}>
                  <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color:"black",
                        
                      }}
                  >
                    Training Categories
                  </Text>
                  </View>

                  <View style={{ top:50,right:134,height:200}}>
                    <Button info style={{ width:100,borderRadius:44/2,  shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,

                      elevation: 10,}}><Text style={{left:20,color:"white",}}> FITNESS </Text></Button>
                  </View>
                  <View style={{right:130,bottom:25}}>
                    <Button info style={{ width:100,borderRadius:44/2,  shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,

                      elevation: 10,}}><Text style={{left:15,color:"white",}}> AEROBICS </Text></Button>
                  </View>
                  <View style={{right:120,bottom:25}}>
                    <Button light style={{ width:100,borderRadius:44/2,  shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,

                      elevation: 10,}}><Text style={{left:5,color:"grey",}}> KICK BOXING </Text></Button>
                  </View>
                  <View style={{ right:435,top:30}}>
                    <Button light style={{ width:150,borderRadius:44/2,  shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,

                      elevation: 10,}}><Text style={{left:20,color:"grey",}}> BODY BUILDING </Text></Button>
                  </View>
                  <View style={{right:430,top:30}}>
                    <Button light style={{ width:100,borderRadius:44/2,  shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,

                      elevation: 10,}}><Text style={{left:15,color:"grey",}}>RUNNING  </Text></Button>
                  </View>


                </CardItem>



              </Card>
              <View style={{  top:50 ,height:200,left:120, }}>
                <Button info style={{ width:140,borderRadius:44/2,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 10,}}><Text style={{left:30,color:"white",fontSize:15,fontWeight:'bold'}}>BOOK NOW</Text></Button>
                <Text
                    style={{
                      top:15,
                      right:20,
                      fontSize: 15,
                      fontWeight: "bold",
                      color:"grey",
                      paddingHorizontal: 10
                    }}
                >
                  Per Session $34.99 only
                </Text>
              </View>
            </Form>
          </Content>
        </Container>
    );
  }
}
export default TrainersProfile;

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
  shadowbox:{
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
    paddingTop: 80,
    paddingLeft: 20,
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  form: {

    paddingTop: 140,
    paddingLeft: 20,
    paddingRight: 20
  }
  ,image: {
    width: 40, height: 40,
    
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
