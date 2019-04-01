// import React, { Component } from "react";
// import {Image,View,TouchableOpacity,FlatList,TextInput,Alert,Dimensions} from "react-native";
// import {Container,Header,Title,Content,Text,Button,Card,CardItem,Icon,Spinner,Left,Right,Body} from "native-base";
// import { Col, Grid } from "react-native-easy-grid";
// import { Dropdown } from "react-native-material-dropdown";

// import { filter } from "ramda";
// import styles from "./styles";
// import API from "@utils/ApiUtils";
// import {IMAGE_PATH} from "@common/global";
// import Images from "@theme/images/images";

// const window = Dimensions.get("window");


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
    // Modal,
    TouchableHighlight,
    Alert
} from "react-native";

import {
    Container,
    Content,
    Header,
    Title,
    Icon,
    // Button,
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
    InputGroup,


} from "native-base";


const headerBg = require("./assets/header.png");
const ratingImage = require("./assets/add_home.png");
const {height, width} = Dimensions.get("window");
const aerobics = require("./assets/aerobics.png");
const experience = require("./assets/experience.png");
const location = require("./assets/location.png");
const userAdd = require("./assets/users_add.png");
const message = require("./assets/users_add.png");
const arrowIcon = require("./assets/arrow_icon.png");
const filter = require("./assets/filter.png");
const backIcon = require("./assets/back_icon.png");
const searchIcon = require("./assets/search_icon.png");
const product1 = require("./assets/product_1.png");
const product2 = require("./assets/product_2.png");
const product3 = require("./assets/product_3.png");

// import Button from 'react-native-button';
// import Modal from 'react-native-modalbox';
// import Slider from 'react-native-slider';


var screen = Dimensions.get('window');




class OnlineStore extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     allProducts: [],
  //     onlineProductsArray: [],
  //     spinner:true,
  //     fromTrainerPersonalPage:this.props.navigation.getParam("toOnlineStore"),
  //     onChangeColumn: false,
  //     fromClientHome:this.props.navigation.getParam("forBack"),
  //     searchedvalue:"",
  //     categoryvalue:"",
  //     allCategories:[],
  //     newCategoryarry:[],
  //     text:""
  //   };
  //   this.onGrid = this.onGrid.bind(this);
  //   this.onChangeDropdown = this.onChangeDropdown.bind(this);
  //   this.onCategoryChangeDropdown = this.onCategoryChangeDropdown.bind(this);
  // }
  // async componentWillMount(){
  //   this.getProducts();
  //   this.getCategories();
  // }
  // getProducts(){
  //   API.getProducts().then(async (response) => {
  //     if (response){
  //       if (response.status){
  //         this.setState({allProducts: response.data,spinner:false});
  //       } else {
  //         this.setState({spinner:false});
  //       }
  //     } else {
  //       this.setState({spinner:false});
  //       alert("Error getting product details | Check Network ");
  //     }
  //   }).catch((error)=> {
  //     this.setState({spinner:false});
  //     console.log("Console Error", error);
  //   });
  // }
  // getCategories(){
  //   API.getCategories().then(async (response) => {
  //     if (response){
  //       if (response.status) {
  //         this.setState({allCategories: response.data,spinner:false},()=>{
  //           var categoryarray = [];
  //            this.state.allCategories.map((res,i)=>{
  //              var rec = {
  //                "id":res.id,
  //                "value": res.name,
  //                "status":res.status
  //              };
  //              categoryarray.push(rec);
  //            });
  //            this.setState({newCategoryarry : categoryarray});
  //         });
  //       }
  //       else {
  //         this.setState({spinner:false});
  //       }
  //     } else {
  //       this.setState({spinner:false});
  //       Alert.alert("Error getting product details | Check Network ");
  //     }
  //   }).catch((error)=> {
  //     this.setState({spinner:false});
  //       Alert.alert("Console Error", error);
  //   });
  // }

  // onBackPressed(){
  //  if (this.state.fromTrainerPersonalPage){
  //    this.props.navigation.navigate("TrainerPersonalPage");
  //  } else if (this.state.fromTrainerPersonalPage){
  //    this.props.navigation.navigate("ClientHome");
  //  } else {
  //    this.props.navigation.navigate("ClientHome");
  //  }
  // }
  // onGrid(){
  //   this.setState({onChangeColumn: !this.state.onChangeColumn});
  // }
  // onChangeDropdown(item,index){
  //   this.setState({searchedvalue : item},()=>{
  //     if (this.state.searchedvalue === "Search by None" || this.state.searchedvalue === "Search by Name"){
  //       this.getProducts();
  //     }
  //   });
  // }
  // onCategoryChangeDropdown(item,index){
  //   this.setState({categoryvalue : item},()=>{
  //     let me = this.refs.categoryref;
  //     var selectedItem =  me.selectedItem();
  //     this.setState({spinner: true});
  //     this.getProductsByCategory(selectedItem.id);
  //   });
  // }
  // getProductsByCategory(id){
  //       API.getProductsByCategory(id).then(async (response) => {
  //         if (response){
  //           if (response.status) {
  //             this.setState({allProducts: response.data,spinner:false});
  //           }
  //           else {
  //             this.setState({spinner:false});
  //           }
  //         } else {
  //           this.setState({spinner:false});
  //           Alert.alert("Error getting product details | Check Network ");
  //         }
  //       }).catch((error)=> {
  //         this.setState({spinner:false});
  //           Alert.alert("Console Error", error);
  //       });
  // }
  // onChangeSearchText(text){
  //   this.setState({text},()=>{
  //     if (this.state.text.length > 2) {
  //       let products = this.state.allProducts;
  //       let searchArray = filter(this.filterProducts, products);
  //        this.setState({allProducts:searchArray});
  //     } else if (this.state.text.length === 0 ){
  //         this.getProducts();
  //       }
  //   });
  // }
  // filterProducts = item => {
  //   let name = item.name;
  //   let text = this.state.text;
  //   if (name.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
  //     return item;
  //   }
  // }
  // renderData = ({item, index}) => {
  //   return (
  //     this.state.onChangeColumn === true ? (
  //       <TouchableOpacity  style={styles.colOnestoreProducts} onPress = {() => {this.props.navigation.navigate("ProductDetails",(user = { productId: item.id}));}}>
  //         <View style={styles.colOneContent}>
  //           <View style={styles.colOneImageinRow}>
  //             <View style={styles.colOneIndexLabelView}>
  //               <View style={styles.colOneIndexLabelSubView}>
  //                 <Text style={{color: "#FFFFFF", fontFamily: "Arial"}}>{index + 1}</Text>
  //               </View>
  //             </View>
  //             <Image source = {{uri: IMAGE_PATH + item.image}} style = {{width: window.width / 2.5,height: window.width / 2.5}}/>
  //           </View>
  //           <View style={styles.colOneProductDescription}>
  //             <Text numberOfLines={1} style={styles.colOnetype}>{item.cat_name}</Text>
  //             <Text numberOfLines={1} style={styles.colOnename}>{item.name}</Text>
  //             <Text numberOfLines={5} style={styles.colOnedescription}>{item.description}</Text>
  //           </View>
  //         </View>
  //       </TouchableOpacity>
  //       ) : (
  //       <TouchableOpacity  style={styles.storeProducts} onPress = {() => {this.props.navigation.navigate("ProductDetails",(user = { productId: item.id}));}}>
  //           <View style={styles.productsHeader}>
  //             <View style={styles.productCount}>
  //                 <Text style={{color: "#FFFFFF", fontFamily: "Arial",}}>
  //                    {index + 1}
  //                 </Text>
  //             </View>
  //           </View>
  //           <View style={styles.cardImage}>
  //             <Image source = {{uri: IMAGE_PATH + item.image}} style = {{width: window.width / 3,height: window.width / 3}}/>
  //           </View>
  //           <View style={styles.cardContent}>
  //             <Text numberOfLines={1} style={styles.type}>{item.cat_name}</Text>
  //             <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
  //             <Text numberOfLines={3} style={styles.description}>{item.description}</Text>
  //           </View>
  //       </TouchableOpacity>
  //     )
  //     );
  // }
  // render() {
  //   let data = [
  //     {
  //       value: "Search by Name",
  //      }, {
  //       value: "Search by Category",
  //      }, {
  //       value: "Search by None",
  //      }
  //   ];
  //   return (
  //     <Container style={styles.container}>
  //        <Header style={styles.headerStyle}>
  //         <Left style={[styles.ham,{flexDirection:"row"}]}>
  //           {this.state.fromTrainerPersonalPage || this.state.fromClientHome ? (
  //           <Button style={styles.ham}
  //             transparent
  //             onPress={this.onBackPressed.bind(this)}>
  //               <Icon name="ios-arrow-back" style={{color: "white"}}/>
  //           </Button>) : (
  //           <Button style={styles.ham}
  //             transparent
  //             onPress = {() => this.props.navigation.navigate("DrawerOpen")}>
  //               <Icon name = "ios-menu" style={{color: "white"}}/>
  //           </Button>
  //           )}
  //         </Left>
  //         <Body>
  //           <Title style={styles.title}>Store</Title>
  //         </Body>
  //         <Right />
  //       </Header>
  //       <Content>
  //         <View style={{flex:1,marginTop:5,paddingTop:10}}>
  //           <Dropdown
  //             label={this.state.searchedvalue === "" ? "Select Search Type.." : ""}
  //             data={data}
  //             value={this.state.searchedvalue}
  //             dropdownPosition={0}
  //             onChangeText={this.onChangeDropdown}
  //             inputContainerStyle={{borderBottomColor:"transparent"}}
  //             containerStyle={{borderWidth:1,borderColor:"#009FDB",height:50,justifyContent:"center",margin:5,padding:10}}
  //            />
  //         </View>

  //         {this.state.searchedvalue === "Search by Name" ? (
  //           <View style={{flex:1,flexDirection:"row",borderWidth:1,borderColor:"#009FDB",height:50,margin:5}}>
  //             <View style={{flex:0.15,justifyContent:"center",alignItems:"center"}}>
  //               <Icon active name="search" style={styles.inputIcon}/>
  //             </View>
  //             <View style={{flex:0.85,justifyContent:"center",alignItems:"flex-start"}}>
  //               <TextInput placeholder="Search" style={{flex:1,fontSize:18,marginLeft:10}} onChangeText={this.onChangeSearchText.bind(this)}  value={this.state.text}/>
  //             </View>
  //           </View>
  //         ) : this.state.searchedvalue === "Search by Category" ? (
  //           <Dropdown
  //             label={this.state.categoryvalue === "" ? "Select Categories.." : ""}
  //             data={this.state.newCategoryarry}
  //             value={this.state.categoryvalue}
  //             dropdownPosition={0}
  //             ref={"categoryref"}
  //             onChangeText={this.onCategoryChangeDropdown}
  //             inputContainerStyle={{borderBottomColor:"transparent"}}
  //             containerStyle={{borderWidth:1,borderColor:"#009FDB",height:50,justifyContent:"center",margin:5,padding:10}}
  //            />
  //           ) : (<View/>)}
  //         <Card style={[styles.card,{marginTop:10}]}>
  //           <Image source={{uri: "https://www.t-nation.com/system/publishing/articles/10003259/original/The-Single-Best-Muscle-Building-Method.jpg?1451932310"}} style={{ width: "100%", height: 200 }}  />
  //           <CardItem>
  //             <Body>
  //               <Text style={styles.cardTitle}>
  //                 BROWSE OUR PRODUCTS
  //               </Text>
  //               <Text style={styles.cardDescription}>
  //                 Only the elite gets to earn a position in our store.These proven supplements can help you achieve the results that you are working
  //                 for.
  //               </Text>
  //             </Body>
  //           </CardItem>
  //         </Card>
  //         <View style={styles.storeHeader}>
  //           <Grid>
  //             <Col size={4} style={{ backgroundColor: "#FFFFFF", height: 50, display: "flex", justifyContent: "center", alignItems: "flex-start", paddingLeft: 16 }}>
  //                <Text>Products</Text>
  //             </Col>
  //             <Col size={1} style={{flex:1, backgroundColor: "#FFFFFF"}} >
  //               <TouchableOpacity onPress={this.onGrid} style={{flex:1,borderLeftColor: "#C8C8C8", borderLeftWidth: 1,justifyContent: "center", alignItems: "center" }}>
  //                 {this.state.onChangeColumn === false ? (
  //                   <Image source = {Images.productsinList} style = {{width: 25,height: 25}}/>
  //                   ) : (
  //                   <Image source = {Images.productsinGrid} style = {{width: 25,height: 25}}/>
  //                 )}
  //               </TouchableOpacity>
  //             </Col>
  //           </Grid>
  //         </View>
  //         <View style={styles.storeItems}>
  //             {this.state.spinner === true ? (
  //                 <View style={styles.spinnerView}>
  //                   <Spinner color={"black"} style={styles.spinnerPosition} />
  //                 </View>
  //               ) : this.state.allProducts === [] || this.state.allProducts.length === 0 ? (<View style={{justifyContent:"center",alignItems:"center"}}><Text>No Products</Text></View>) :
  //               <FlatList
  //                 data={this.state.allProducts}
  //                 keyExtractor={(x, i) => x.id}
  //                 extraData={this.state}
  //                 renderItem={this.renderData.bind(this)}
  //                 removeClippedSubViews={true}
  //                 numColumns={ this.state.onChangeColumn === true ? 1 : 2 }
  //                 key = {( this.state.onChangeColumn ) ? "ONE COLUMN" : "TWO COLUMN" }
  //                 style={{backgroundColor:"#dce2ef"}}
  //                 />
  //             }
  //         </View>
  //       </Content>
  //     </Container>
  //   );
  // }
  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
}

componentWillMount() {

    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
        this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
}

constructor() {
    super();
    this.state = {
        isOpen: false,
        isDisabled: false,
        swipeToClose: true,
        sliderValue: 0.3
    };
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
                        style={{position: "absolute", height: 30,width:40, top: 20, left: 20}}
                        source={backIcon }
                        resizeMode="cover"
                    />
                    <View style={{ alignSelf:'flex-end'}}>
                    <Image
                        style={{position: "absolute", height: 30,width:30, top: 20, right:50}}
                        source={searchIcon }
                        resizeMode="cover"
                    />
                    <Image
                        style={{position: "absolute", height: 30,width:30, top: 20, right:20}}
                        source={filter }
                        resizeMode="cover"
                    />
                    </View>
                    <Title style={styles.title}>Online Store</Title>
                    </Body>
                </Header>

 
                <Card style={{borderRadius: 22 / 2,height:150, padding:10, width:400, marginLeft:-20,shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
    
                            elevation: 5,
                            position:'absolute',
                            zIndex:4,
                            overflow:'visible',
                            top:140,
            
                            alignSelf:'center'
                        }}>
                            <Title style={{ color:'black',fontSize:20,fontWeight:'bold',top:10 ,alignSelf:'center'}}>RECOMMENDED FOR YOU</Title>
                            <Text style={{left:10,fontSize:15, width:270 ,top:15,textAlign:'justify',alignSelf:'center'}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text
                            </Text>
    
                        </Card>
                         


                <Content>
                    <Form style={styles.form} >
   
                    <View style={{ 
    flexDirection: 'row',
alignItems: 'center'}}>
                  <View sytle={{ alignSelf:'center'}}>

                <Image
                                style={{
                                
                                width: 80,
                                height: 80,
                                borderRadius: 50 / 2,
                                zIndex: 2,
                                // flex:1,
                                right:20,
                                bottom: 15,
                                overflow:'visible',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.2,
                                shadowRadius: 10,
                                elevation: 7,}}
                                source={product1}
                                resizeMode="cover"
                            />
                  </View>
                        <View style={{width:300,paddingRight:100}}>
                
                <Card style={{zIndex:1,marginBottom:20 ,alignSelf:'center'
}}>
                    <CardItem style={{zIndex:1,height:120,width:320}}>
                   

                        <View style={{shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,}}>
                            
                        </View>
                        <Title
                            style={{fontSize: 20, fontWeight: 'bold', color: 'black', left: 40, bottom: 40}}>
                            Sinfit Crunch Bar
                        </Title>


                        <View>

                            <Text style={{right: 120, fontSize: 14,bottom:15}}>
                                Caramel Crunch
                            </Text>
                        </View>
                        <View>
                            <Text style={{right: 220, fontSize: 20,fontWeight:'bold',color:'blue', top:30}}>
                                $49.99
                            </Text>

                            <Image
                                style={{width: 10, height: 10, left: 20, top: 10}}
                                source={arrowIcon}
                                resizeMode="cover"
                            />
                            
                        </View>
                    </CardItem>


                </Card>
                </View>
                </View>
                
                
                <View style={{ 
    flexDirection: 'row',
alignItems: 'center'}}>
                  <View sytle={{ alignSelf:'center'}}>

                <Image
                                style={{
                                
                                width: 80,
                                height: 80,
                                borderRadius: 50 / 2,
                                zIndex: 2,
                                // flex:1,
                                right:20,
                                bottom: 15,
                                overflow:'visible',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.2,
                                shadowRadius: 10,
                                elevation: 7,}}
                                source={product2}
                                resizeMode="cover"
                            />
                  </View>
                        <View style={{width:300,paddingRight:100}}>
                
                <Card style={{zIndex:1,marginBottom:20 ,alignSelf:'center'
}}>
                    <CardItem style={{zIndex:1,height:120,width:320}}>
                   

                        <View style={{shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,}}>
                            
                        </View>
                        <Title
                            style={{fontSize: 20, fontWeight: 'bold', color: 'black', left: 40, bottom: 40}}>
                            Sinfit Crunch Bar
                        </Title>


                        <View>

                            <Text style={{right: 120, fontSize: 14,bottom:15}}>
                                Caramel Crunch
                            </Text>
                        </View>
                        <View>
                            <Text style={{right: 220, fontSize: 20,fontWeight:'bold',color:'blue', top:30}}>
                                $49.99
                            </Text>

                            <Image
                                style={{width: 10, height: 10, left: 20, top: 10}}
                                source={arrowIcon}
                                resizeMode="cover"
                            />
                            
                        </View>
                    </CardItem>


                </Card>
                </View>
                </View>

                <View style={{ 
    flexDirection: 'row',
alignItems: 'center'}}>
                  <View sytle={{ alignSelf:'center'}}>

                <Image
                                style={{
                                
                                width: 80,
                                height: 80,
                                borderRadius: 50 / 2,
                                zIndex: 2,
                                // flex:1,
                                right:20,
                                bottom: 15,
                                overflow:'visible',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.2,
                                shadowRadius: 10,
                                elevation: 7,}}
                                source={product3}
                                resizeMode="cover"
                            />
                  </View>
                        <View style={{width:300,paddingRight:100}}>
                
                <Card style={{zIndex:1,marginBottom:20 ,alignSelf:'center'
}}>
                    <CardItem style={{zIndex:1,height:120,width:320}}>
                   

                        <View style={{shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,}}>
                            
                        </View>
                        <Title
                            style={{fontSize: 20, fontWeight: 'bold', color: 'black', left: 40, bottom: 40}}>
                            Sinfit Crunch Bar
                        </Title>


                        <View>

                            <Text style={{right: 120, fontSize: 14,bottom:15}}>
                                Caramel Crunch
                            </Text>
                        </View>
                        <View>
                            <Text style={{right: 220, fontSize: 20,fontWeight:'bold',color:'blue', top:30}}>
                                $49.99
                            </Text>

                            <Image
                                style={{width: 10, height: 10, left: 20, top: 10}}
                                source={arrowIcon}
                                resizeMode="cover"
                            />
                            
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

export default OnlineStore;


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

        alignSelf:'center',
        position:'relative',
        paddingTop: 120,
        paddingLeft: 40,
        paddingRight: 20
    }
});
