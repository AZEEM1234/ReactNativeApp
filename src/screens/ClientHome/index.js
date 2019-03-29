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
  Dimensions
} from "react-native";
import { ButtonThree } from "../common";
import ImageSlider from "react-native-image-slider";
import { Container,Content,Header,Title,Icon,Button,Left,Right,Body,Spinner} from "native-base";

import styles from "./styles";
import API from "@utils/ApiUtils";
import {IMAGE_PATH} from "@common/global";
const window = Dimensions.get("window");

import Category from "../../Explore/Category"
import OnlineStore from "../../Explore/OnlineStore"
import GroupClasses from "../../Explore/GroupClasses"

const { height, width } = Dimensions.get("window");
const headerBg = require("../../../assets/camera.png");
const trainerIcon = require("../../../assets/trainer.png");

const arrowIcon = require("../../../assets/arrow_icon.png");
class ClientHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      images:[],
      spinner:true,
      ifnoresponse: false
    };
  }
   // componentWillMount() {
  //   this.startHeaderHeight = 80;
  //   if (Platform.OS == "android") {
  //     this.startHeaderHeight = 100 + StatusBar.currentHeight;
  //   }
  // }
  componentWillMount(){
   this.getImagesList();
   this.startHeaderHeight = 80;
     if (Platform.OS == "android") {
       this.startHeaderHeight = 100 + StatusBar.currentHeight;
     }
 }
  getImagesList(){
     API.getImages().then(async (response) => {
      if (response){
          if (response.status) {
            this.setState({images: response.data,spinner:false});
          } else {
            this.setState({spinner:false,ifnoresponse:true});
          }
        } else {
          this.setState({spinner:false,ifnoresponse:true});
        }
     });
   }
  render(){
      return (
        <Container style={styles.container}>
          <Header style={styles.headerStyle}>
          <Image
        style={{ position: 'absolute', top: 0, left: 0}}
        source={headerBg}
        resizeMode="cover"
      />
            <Body style={{alignSelf:'flex-start'}}>

            <Left style={styles.ham}>
              <Button style={styles.ham}
                transparent
                onPress = {() => this.props.navigation.navigate("DrawerOpen")}>
                < Icon name = "ios-menu" style={{color: "white"}}/ >
              </Button>

              <Title style={styles.title}>Hello Johny</Title>
              <Text style={{ fontSize:12,color:'#fff', paddingLeft: 20,}}>We manage the homepage for your interest</Text>
            </Left>
            </Body>
            <Right>
                <TouchableOpacity style={styles.trainerTextContainer}
                  onPress={() => this.props.navigation.navigate("TrainerLogin")}>
                    {/* <Text style={styles.trainerText}>Trainers</Text> */}
                    < Image source={trainerIcon} style={{color:"white", height:30, width:30,marginBottom:30,}}/ >
                </TouchableOpacity>
            </Right>
          </Header>

          <SafeAreaView style={{ flex: 1 }}>
         <View style={{ flex: 1 }}>
           <ScrollView scrollEventThrottle={16}>
             <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
               <Text
                 style={{
                   fontSize: 15,
                   fontWeight: "700",
                   paddingHorizontal: 20
                 }}
               >
                 Featured Trainers
               </Text>
               <Right style={{alignSelf:'flex-end',paddingRight:10,flex:1,  paddingHorizontal: 20}}>
                <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate("TrainerLogin")}>
                    {/* <Text style={styles.trainerText}>Trainers</Text> */}
                    < Image source={arrowIcon} style={{color:"white", height:10, width:10,alignSelf:'flex-end' }}/ >
                </TouchableOpacity>
            </Right>

               <View style={{ height: 130, marginTop: 20 }}>
                 <ScrollView
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                 >
                   <Category
                  
                     imageUri={require("../../../assets/drawer-cover.png")}
                     name="Home"
                   />
                   <Category
                     imageUri={require("../../../assets/drawer-cover.png")}
                     name="World"
                   />
                   <Category
                     imageUri={require("../../../assets/drawer-cover.png")}
                     name="Pakistan"
                   />
                   <Category
                     imageUri={require("../../../assets/drawer-cover.png")}
                     name="Pakistan"
                   />
                   <Category
                     imageUri={require("../../../assets/drawer-cover.png")}
                     name="Pakistan"
                   />
                 </ScrollView>
               </View>

               <View style={{ height: 130, marginTop: 20 }}>
               <Text
                 style={{
                   fontSize: 15,
                   fontWeight: "700",
                   paddingHorizontal: 20
                 }}
               >
                 Online Store
               </Text>
               <Right style={{alignSelf:'flex-end',paddingRight:10,flex:1,  paddingHorizontal: 20}}>
                <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate("TrainerLogin")}>
                    {/* <Text style={styles.trainerText}>Trainers</Text> */}
                    < Image source={arrowIcon} style={{color:"white", height:10, width:10,alignSelf:'flex-end' }}/ >
                </TouchableOpacity>
            </Right>
                 <ScrollView
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                 >
                   <OnlineStore
                  
                     imageUri={require("../../../assets/shoes.png")}
                     name="Home"
                   />
                   <OnlineStore
                     imageUri={require("../../../assets/t_shirt.png")}
                     name="World"
                   />
                   <OnlineStore
                     imageUri={require("../../../assets/trousers.png")}
                     name="Pakistan"
                   />
                  
                 </ScrollView>
               </View>
                
               <View style={{ height: 130, marginTop: 20 }}>
               <Text
                 style={{
                   fontSize: 15,
                   fontWeight: "700",
                   paddingHorizontal: 20
                 }}
               >
                 Group Classes
               </Text>
               <Right style={{alignSelf:'flex-end',paddingRight:10,flex:1,  paddingHorizontal: 20}}>
                <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate("TrainerLogin")}>
                    {/* <Text style={styles.trainerText}>Trainers</Text> */}
                    < Image source={arrowIcon} style={{color:"white", height:10, width:10,alignSelf:'flex-end' }}/ >
                </TouchableOpacity>
            </Right>
                 <ScrollView
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                 >
                   <GroupClasses
                  
                     imageUri={require("../../../assets/group/yoga.png")}
                     name="Home"
                   />
                   <GroupClasses
                     imageUri={require("../../../assets/group/aerobics_icon.png")}
                     name="World"
                   />
                   <GroupClasses
                     imageUri={require("../../../assets/group/cycling.png")}
                     name="Pakistan"
                   />
                   <GroupClasses
                     imageUri={require("../../../assets/group/cardio.png")}
                     name="Pakistan"
                   />
                  
                 </ScrollView>
               </View>
                
             </View>
           </ScrollView>
         </View>
       </SafeAreaView>


          <Content>
          <View style={styles.container}>
           {/* <View style={styles.topTextContainer}>
               <Text style={styles.topText}>
                   Browse through our Personal Trainers
                   and find the one that will be best in
                   helping you reach your fitness goals.
               </Text>
           </View> */}
           <View style={styles.browseTrainersContainer}>
              <View style={styles.buttonContainerStyle}>
                   <ButtonThree onPress={() => this.props.navigation.navigate("FeaturedTrainers")}
                    style={styles.buttonStyle}>
                       View Our Featured Trainers
                   </ButtonThree>
               </View>
               <View style={[styles.buttonContainerStyle,{marginTop:5}]}>
                 <ButtonThree onPress={() => this.props.navigation.navigate("BrowseTrainers")}
                  style={styles.buttonStyle}>
                     View Our Personal Trainers
                 </ButtonThree>
               </View>
                <View style={styles.trainerSliderStyle}>
                 <ImageSlider
                     images={trainerImages}
                     customSlide={({ index, item, style, width }) => (
                        <Image key={index} source={{ uri: item.image }} style={{width: window.width / 1.05,height: window.height * 0.2}} />
                     )}
                   />
                </View>
           </View>
           <View style={styles.topContainer}>
               <View style={styles.firstPart}>
                   <View style={styles.sessionsContainerStyle}>
                       <Text style={styles.sessionsText}>
                           Group Classes
                       </Text>
                   </View>
                    <View style={styles.sessionSliderStyle}>
                      <ImageSlider
                          images={trainerImages}
                          customSlide={({ index, item, style, width }) => (
                              <Image key={index} source={{ uri: item.image }} style={{width: window.width / 2.18,height: window.height * 0.2}} />
                          )}
                        />
                    </View>
               </View>
               <View style={styles.secondPart}>
                   <View style={styles.sessionsContainerStyle}>
                       <Text style={styles.sessionsText}>
                           Free Live Sessions
                       </Text>
                   </View>
                    <View style={styles.sessionSliderStyle}>
                     <ImageSlider
                         images={storeImages}
                         customSlide={({ index, item, style, width }) => (
                             <Image key={index} source={{ uri: item.image }} style={{width: window.width / 2.18,height: window.height * 0.2}} />
                         )}
                       />
                    </View>
               </View>
           </View>
           <View style={styles.onlineStore}>
               <View style={styles.buttonContainerStyle1}>
                   <ButtonThree style={styles.buttonStyle}
                    onPress={() => this.props.navigation.navigate("OnlineStore",{forBack:true})}>
                       ORDER ONLINE
                   </ButtonThree>
               </View>
               <View style={styles.topTextContainer}>
                   <Text style={styles.onlineStoreText}>
                       Check out our online store for daily specials
                       and all your supplement and equipment needs.
                   </Text>
                </View>
                {this.state.spinner === true ? (<Spinner size="large" color="black"/>) : this.state.ifnoresponse ? (<View/>) : (
                  <View style={styles.checkOnlinestoreProductsSlider}>
                     <ImageSlider
                         images={this.state.images}
                         customSlide={({ index, item, style, width }) => (
                            <Image key={index} source={{ uri: IMAGE_PATH + item.image }} style={{width: window.width / 1.1,height: window.height * 0.5}} />
                         )}
                       />
                  </View>
                )}
           </View>
           <View style={styles.request}>
               <ButtonThree style={styles.buttonStyle}>
                   Request a 5 minute quick advice
               </ButtonThree>
           </View>
            <Button full style={styles.joinSessionView}>
              <View style={styles.joinSessionButton}>
                <Text style={{color:"white"}}> JOIN NEXT UPCOMING TRAINING SESSION </Text>
              </View>
            </Button>
          </View>
          </Content>
        </Container>
      );
  }
}

export default ClientHome;

// const trainerImages = [
//     {
//         "id" : 3,
//         "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/trainer1.jpg"
//     },
//     {
//         "id" : 2,
//         "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/trainer1.jpg"
//     },
//     {
//         "id" : 1,
//         "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/trainer1.jpg"
//     },
//     {
//         "id" : 0,
//         "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/trainer1.jpg"
//     },
//     {
//         "id" : 5,
//         "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/trainer1.jpg"
//     },
//     {
//         "id" : 6,
//         "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/trainer1.jpg"
//     }
// ];


const trainerImages = [
    {
        "id" : 3,
        "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/trainer1.jpg"
    },
    {
        "id" : 2,
        "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/trainer2.jpeg"
    },
    {
        "id" : 1,
        "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/trainer3.jpg"
    },
    {
        "id" : 0,
        "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/trainer4.jpeg"
    },
    {
        "id" : 5,
        "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/trainer5.jpg"
    },
    {
        "id" : 6,
        "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/trainer6.jpg"
    }
];

const storeImages = [
    {
        "id" : 3,
        "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/product1.jpg"
    },
    {
        "id" : 2,
        "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/product2.jpg"
    },
    {
        "id" : 1,
        "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/product1.jpeg"
    },
    {
        "id" : 0,
        "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/product3.jpg"
    },
    {
        "id" : 5,
        "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/product5.jpg"
    },
    {
        "id" : 6,
        "image" : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/product6.jpg"
    }
];
