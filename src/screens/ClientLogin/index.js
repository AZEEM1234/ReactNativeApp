// import React, { Component } from "react";
// import { View, TouchableOpacity,Alert,AsyncStorage,ActivityIndicator,TouchableWithoutFeedback,ImageBackground } from "react-native";
// import {Container,Header,Title,Content,Text,ListItem,CheckBox,Button,Icon,Footer,FooterTab,Left,Right,Body,Spinner} from "native-base";
// import { Input, Card, CardSection, ButtonTwo } from "../common";
// import dismissKeyboard from "dismissKeyboard";
// import styles from "./styles";
// import API from "@utils/ApiUtils";
// const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

// import Header8 from "../Header/8";


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
  Label
} from "native-base";



const headerBg = require("./assets/header.png");
const { height, width } = Dimensions.get("window");

class ClientLogin extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       email:"",
//       password:"",
//       userData:{},
//       spinner:false,
//       afterBookSession: this.props.navigation.getParam("afterBookSession")
//     };
//   }
//   onChangeEmail(text){
//     this.setState({
//       email:text
//     });
//   }
//   onChangePassword(text){
//     this.setState({
//       password:text
//     });
//   }
//   validEmail = Email => {
//      var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//      return email.test(Email);
//    }
//   onLogin(){
//     dismissKeyboard();
//     if (this.state.email === "" || this.state.email === null){
//       Alert.alert("Email","Email should not be empty");
//     }
//     else if (!this.validEmail(this.state.email)) {
//        Alert.alert("Email","Please enter correct Email-id");
//      }
//      else if (this.state.password === "" || this.state.password === null) {
//         Alert.alert("Password","Password should not be empty");
//       }
//      else {
//        this.setState({
//          spinner:true
//        });
//   AsyncStorage.getItem("@token:key", (err, token) => {
//       let getToken = JSON.parse(token);
//          var login = {
//              email:this.state.email,
//              password:this.state.password,
//              deviceType:getToken === null ? "" : getToken.os,
//              deviceToken:getToken === null ? "" : getToken.token
//          };
//          API.clientLogin(login).then(async (response) => {
//             // alert(JSON.stringify(response))
//            if (response.status === true){
//            console.log("USERDTAAAA!@@@@: ", response);
//              this.setState({
//                userData:response.data,
//                spinner:false
//              },()=>{
//               var getUserData = this.state.userData;
//               AsyncStorage.setItem("@getUserType:key", "User");
//               AsyncStorage.setItem("@getUserData:key", JSON.stringify(getUserData));
//               console.log("afterBookSession@@@@" + this.state.afterBookSession);
//               if (this.state.afterBookSession === true){
//                 this.props.navigation.navigate("ViewTrainer");
//               } else {
//                 this.props.navigation.navigate("ClientHome");
//               }
//              });
//            } else {
//              this.setState({
//                spinner:false
//              },()=>{
//                Alert.alert(response.message,"");
//              });
//            }
//          }).catch((error)=>{
//          this.setState({spinner:false});
//            console.log("Console Error",error);
//          });
//         }).done();
//      }
//   }

//   render() {
//     return (

//       <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
//         <View style={styles.container}>
//           <View style={styles.title}>
//             <Text style={styles.titleText}>Login Here</Text>
//           </View>
//           {/* <View style={styles.logoContainer}>
            
//           </View> */}

//             <View style={styles.imputBoxContainer}>
//               <View style={{ marginBottom : 10 }}>
//                 <CardSection style={{backgroundColor:"black"}}>
//                   <Input
//                     label="Email"
//                     placeholder="user@gmail.com"
//                     keyboardType = "email-address"
//                     onChangeText={this.onChangeEmail.bind(this)}
//                     value={this.state.email}
//                   />
//                 </CardSection>
//               </View>

//               <View>
//                 <CardSection>
//                   <Input
//                     label="Password"
//                     placeholder="Password"
//                     secureTextEntry
//                     keyboardType = "default"
//                     onChangeText={this.onChangePassword.bind(this)}
//                     value={this.state.password}
//                   />
//                 </CardSection>
//               </View>
//             </View>

//           <ListItem style={{ marginBottom : 20}}>
//             <CheckBox checked={false} color="white" />
//             <Body>
//               <Text style={{ color : "#fff"}}>Remember Me!</Text>
//             </Body>
//           </ListItem>
//           <View style={{ paddingLeft : 10, paddingRight : 10, marginBottom : 10 }}>
//             <Button block light
//               onPress={this.onLogin.bind(this)}>
//               <Text>Login</Text>
//             </Button>
//           </View>
//           <View style={{ paddingLeft : 10, paddingRight : 10}}>
//             <Button block light
//               onPress={ () => this.props.navigation.navigate("ClientSignup")}>
//               <Text>Sign Up</Text>
//             </Button>
//           </View>
//           <TouchableOpacity style={styles.goBack}
//             onPress={ () => this.props.navigation.navigate("ClientHome")}>
//             <Text style={styles.goBackText}>Go back!</Text>
//           </TouchableOpacity>
//         {this.state.spinner === true ? (
//         <View style={styles.container_spinner}>
//           <View style={styles.spinnerView}>
//             <ActivityIndicator size="large" color="black"/>
//           </View>
//         </View>
//         ) : null}
//         </View>
//       </TouchableWithoutFeedback>
//       // <Header8/>
//       );
//   }
// componentWillMount() {
//   this.startHeaderHeight = 80;
//   if (Platform.OS == "android") {
//     this.startHeaderHeight = 100 + StatusBar.currentHeight;
//   }
// }
render() {

  return (
    <Container style={styles.container}>
      <Header style={styles.headerStyle}>
        <Image
          style={{ position: "absolute",  top: 0, left: 0 }}
          source={headerBg}
          resizeMode="cover"
        />
        <Body style={{ alignSelf: "flex-start" }}>
          <Title style={styles.title}>Login Now</Title>
          <Text style={{ fontSize: 18, color: "#fff", paddingLeft: 20 }}>
            Login with your registered email address
          </Text>
        </Body>
      </Header>
      <Content>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label style={{ fontWeight: "bold", color: "#0C94EC" }}>
              Email
            </Label>
            <Input value="example@gmail.com" keyboardType="email-address" />
          </Item>
          <Item floatingLabel last>
            <Label style={{ fontWeight: "bold", color: "#0C94EC" }}>
              Password
            </Label>
            <Input
              value="example@gmail.com"
              secureTextEntry
              keyboardType="default"
            />
          </Item>
          <View style={{paddingTop:40}}>
            <Text style={{ left:90,color:'#0C94EC',fontSize:18,fontWeight:'bold'}}> FORGOT PASSWORD? </Text>
          </View>
          <View style={{paddingTop:40}}>

          <Button
            style={{

              width: 180,
              height: 60,
              backgroundColor: "#0C94EC",
              alignSelf:'center',
              borderRadius: 100/2,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.44,
              shadowRadius: 10.32,

              elevation: 9,
            }}
          >
            <Text style={{ left:50,color:'white',fontSize:20,fontWeight:'bold'}}> SIGN IN </Text>
          </Button>

          </View>
          <View style={{paddingTop:40}}>
            <Text style={{ left:90,color:'grey',fontSize:18,fontWeight:'bold'}}> Don't have a account? </Text>
            <Text style={{ left:125,color:'#0C94EC',fontSize:18,fontWeight:'bold'}}> CREATE NOW </Text>
          </View>

        </Form>
      </Content>
    </Container>
  );
}
}
export default ClientLogin;


const styles = StyleSheet.create({
container: {
  backgroundColor: "#fff"
},
headerStyle: {
  height: 200
  // backgroundColor: "#009FDB",
},
title: {
  paddingTop: 65,
  paddingLeft: 20,
  color: "#fff",
  fontSize: 40,
  fontWeight: "bold"
},
form: {
  paddingTop: 50,
  paddingLeft: 20,
  paddingRight: 20
}
});


