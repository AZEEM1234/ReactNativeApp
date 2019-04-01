
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
    Label,
    Card,
    CardItem,
    Textarea,
    InputGroup

} from "native-base";


const headerBg = require("./assets/header.png");
const ratingImage = require("./assets/add_home.png");
const { height, width } = Dimensions.get("window");
const aerobics = require("./assets/aerobics.png");
const experience = require("./assets/experience.png");
const location = require("./assets/location.png");
const cancel = require("./assets/cancel.png");
const message = require("./assets/users_add.png");
const arrowIcon = require("./assets/arrow_icon.png");
const filter = require("./assets/filter.png");
const backIcon = require("./assets/back_icon.png");


import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Warning: isMounted(...) is deprecated", "Module RCTImageLoader"]);

class BrowseTrainers extends Component {
    // constructor(props){
    //   super(props);
    //   this.state = {
    //     trainersList: [],
    //     spinner: true,
    //     text:"",
    //     searchedvalue:"",
    //     specialitySearchedValue:"",
    //     specialitiesData:[],
    //     allSpecialtiesList:[],
    //     newallSpecialtiesListArray:[],
    //     specailityDatabyId:[],
    //     ifnoResponse: false,
    //     notrainerData: false
    //   };
    //   this.onChangeDropdown = this.onChangeDropdown.bind(this);
    //   this.onSpecialityChangeDropdown = this.onSpecialityChangeDropdown.bind(this);
    // }
    // async componentWillMount() {
    //   this.fetchTrainerList();
    // }
    // fetchTrainerList(){
    //   API.getTrainerList().then(async (response) => {
    //     if (response) {
    //       if (response.status){
    //          var newarray = this.checkDuplicates(response.data);
    //          this.setState({trainersList: newarray,spinner:false});
    //       } else {
    //         Alert.alert("HomeFit",response.message);
    //       }
    //     } else {
    //       this.setState({spinner:false,ifnoResponse: true});
    //     }
    //   });

    // }
    // onChangeDropdown(item,index){
    //   this.setState({searchedvalue : item},()=>{
    //      this.getTrainersList();
    //   });
    // }
    // onSpecialityChangeDropdown(item,index){
    //   this.setState({specialitySearchedValue : item},()=>{
    //     let me = this.refs.specialityref;
    //     var selectedItem =  me.selectedItem();
    //     this.setState({spinner: true});
    //     this.getTrainersBySpecialityId(selectedItem.id);
    //   });
    // }
    // getTrainersList(){
    //   let filterdkey = this.state.searchedvalue;
    //   if (filterdkey === "Highest rated") {
    //     this.setState({spinner : true});
    //     API.getHighestRatedTrainerList().then(async (response) => {
    //       if (response) {
    //         if (response.status){
    //         var newarray = this.checkDuplicates(response.data);
    //          var sortedArray = newarray.sort(function(a, b){
    //             return parseFloat(b.avg_rating) - parseFloat(a.avg_rating);
    //          });
    //          this.setState({trainersList: sortedArray,spinner:false});
    //         } else {
    //           this.setState({spinner:false,notrainerData: true,notrainerDataText: response.message});
    //         }
    //       } else {
    //         this.setState({spinner:false,ifnoResponse: true});
    //       }
    //     });
    //   } else if (filterdkey === "Most no. of sessions"){
    //       this.setState({spinner : true});
    //       API.getTrainersWithMostSessions().then(async (response) => {
    //         if (response) {
    //           if (response.status){
    //             var newarray = this.checkDuplicates(response.data);
    //             var sortedArray = newarray.sort(function(a, b){
    //               return b.num_of_sessions - a.num_of_sessions;
    //             });
    //             this.setState({trainersList: sortedArray,spinner:false});
    //           } else {
    //             this.setState({spinner:false,notrainerData: true,notrainerDataText: response.message});
    //           }
    //         } else {
    //           this.setState({spinner:false,ifnoResponse: true});
    //         }
    //       });
    //   } else if ( filterdkey === "Speciality"){
    //       this.setState({spinner: true});
    //       API.getAllSpecialties().then(async (response) => {
    //         if (response){
    //           if (response.status){
    //             this.setState({allSpecialtiesList: response.data,spinner:false},()=>{
    //               var specialitiesListArray = [];
    //                response.data.map((res,i)=>{
    //                 var rec = {
    //                    id:res.id,
    //                    value: res.speciality,
    //                    status:res.status
    //                   };
    //                 specialitiesListArray.push(rec);
    //                });
    //                this.setState({newallSpecialtiesListArray : specialitiesListArray});
    //             });
    //           } else {
    //             this.setState({spinner:false,notrainerData: true,notrainerDataText: response.message});
    //           }
    //         } else {
    //           this.setState({spinner:false,ifnoResponse: true});
    //         }
    //       });
    //   } else if ( filterdkey === "Male"){
    //       this.setState({spinner : true});
    //       var maleId = 0;
    //       API.getTrainersByGender(maleId).then(async (response) => {
    //         if (response) {
    //           if (response.status) {
    //             var newarray = this.checkDuplicates(response.data);
    //             this.setState({trainersList: newarray,spinner:false});
    //           } else {
    //             this.setState({spinner:false,notrainerData: true,notrainerDataText: response.message});
    //           }
    //         } else {
    //           this.setState({spinner:false,ifnoResponse: true});
    //         }
    //       });
    //   } else if ( filterdkey === "Female"){
    //       this.setState({spinner : true});
    //       var femaleId = 1;
    //       API.getTrainersByGender(femaleId).then(async (response) => {
    //         if (response) {
    //           if (response.status){
    //             var newarray = this.checkDuplicates(response.data);
    //             this.setState({trainersList: newarray,spinner:false});
    //           } else {
    //             this.setState({spinner:false,notrainerData: true,notrainerDataText: response.message});
    //           }
    //         } else {
    //           this.setState({spinner:false,ifnoResponse: true});
    //         }
    //       });
    //     }
    // }
    // getTrainersBySpecialityId(id){
    //   this.setState({spinner : true});
    //   API.getTrainersBySpecialityId(id).then(async (response) => {
    //     if (response) {
    //       if (response.status){
    //         var newarray = this.checkDuplicates(response.data);
    //         var sortedArray = newarray.sort(function(a, b){
    //           return parseFloat(b.avg_rating) - parseFloat(a.avg_rating);
    //         });
    //         this.setState({trainersList: sortedArray,spinner:false});
    //       } else {
    //         this.setState({spinner:false,notrainerData: true,notrainerDataText: response.message});
    //       }
    //     } else {
    //       this.setState({spinner:false,ifnoResponse: true});
    //     }
    //   });
    // }
    // checkDuplicates(a) {
    //      var r = [];
    //      var count = 0;
    //      o: for (var i = 0, n = a.length; i < n; i++){
    //         for (var x = 0, y = r.length; x < y; x++){
    //            if (r[x].id === a[i].id){
    //               continue o;
    //            }
    //            // else {
    //            //   count = 0
    //            // }
    //         }
    //         r.push(a[i]);
    //      }
    //      return r;
    //   }
    // renderData(item){
    //   var res =  item.item.name.split(" ");
    //   var firstname = "";
    //   var lastname = "";
    //   if (res[1] === undefined) {
    //       firstname = res[0].charAt(0);
    //       lastname = "";
    //   } else {
    //       firstname = res[0].charAt(0);
    //       lastname = res[1].charAt(0);
    //   }
    //   var rating = "";
    //   if (item.item.avg_rating === null || item.item.avg_rating === undefined ){
    //     rating = 0.0;
    //   } else {
    //     rating = item.item.avg_rating.substring(0, item.item.avg_rating.length - 3);
    //   }
    //   var date = ''
    //   var time = ''
    //   if(item.item.next_available_date && item.item.next_available_time_slot){
    //     date = moment(item.item.next_available_date).format('MM/DD/YYYY');
    //     time = item.item.next_available_time_slot.replace(/ /g,'')
    //   }else{
    //     date = ''
    //     time = ''
    //   }
    //   console.log("item.item.speciality", item.item.speciality)
    //   var specialities = []
    //   if(item.item.speciality){
    //     specialities=item.item.speciality
    //   }else{
    //     specialities=[]
    //   }
    //   // var specialities=item.item.speciality
    //   return (
    //   <Card onPress={() => this.props.navigation.navigate("ViewTrainer",{trainersList: item.item,keyValue:false,keyViewTrainer:"undefined"})}>
    //     <CardSection>
    //         <View style={styles.trainerImage}>
    //           {item.item.image === "" ? (
    //             <View style={styles.emptyImageStyle}><Text style={styles.emptyImageTextStyle}>{firstname.toUpperCase()}{lastname.toUpperCase()}</Text></View>
    //               ) : (
    //                 <Image style={styles.trainerImage} source={{uri : "https://ajaypalsidhu.com/demo/HomeFit/Admin/uploads/gym-trainer1.jpg"}} />
    //                 )
    //           }
    //         </View>
    //         <View style={styles.trainerDescription}>
    //             <Text style={styles.descriptionLine}>Name: {item.item.name} </Text>
    //             <Text style={styles.descriptionLine}>Rating: {rating}/10, Exp: {item.item.experience} years</Text>
    //             <View style={{flex: 1, flexDirection:'row'}}>
    //               <Text style={styles.descriptionLine3}>
    //                   Specialities:
    //               </Text>
    //               {specialities === [] || specialities.length === 0 ? (
    //                 <Text style={[styles.descriptionLine3,{paddingLeft: 0}]}>No specialities available</Text>
    //               ):(
    //                 <FlatList
    //                   data={specialities}
    //                   extraData={this.state}
    //                   keyExtractor={this._keyExtractor}
    //                   removeClippedSubviews={false}
    //                   renderItem={({item}) => <Text style={[styles.descriptionLine3,{paddingLeft: 0}]}>{item.speciality}</Text>}
    //                   />)}
    //               </View>
    //               <View style={{flex: 1, flexDirection:'row'}}>
    //               <Text style={styles.descriptionLine3}>
    //                   Available date:
    //               </Text>
    //               {date === '' && time === ''?(
    //                 <Text style={[styles.descriptionLine3,{paddingLeft: 0}]}>
    //                     No dates available
    //                 </Text>
    //               ):(
    //                 <Text style={[styles.descriptionLine3,{paddingLeft: 0}]}>
    //                     {date}{"\n"}{time}
    //                 </Text>
    //               )}

    //               </View>
    //         </View>
    //     </CardSection>
    //   </Card>
    //   );
    // }
    // _keyExtractor = (item, index) => item.id || item.speciality_id;
    // render() {
    //   let data = [{
    //      value: "Highest rated",
    //      }, {
    //        value: "Most no. of sessions",
    //      }, {
    //        value: "Speciality",
    //      },{
    //        value: "Available right now",
    //      },{
    //        value: "Male",
    //      },{
    //        value: "Female",
    //     }];
    //   return (
    //     <Container style={styles.container}>
    //       <Header style={styles.headerStyle}>
    //         <Left style={styles.ham}>
    //           <Button style={styles.ham} transparent onPress={() => this.props.navigation.navigate("ClientHome")}>
    //             <Icon name="ios-arrow-back" style={{color: "white",width:30,height:30}}/>
    //           </Button>
    //         </Left>
    //         <Body>
    //           <Title style={styles.title}>Browse</Title>
    //         </Body>
    //         <Right />
    //       </Header>
    //     {this.state.ifnoResponse === true || this.state.notrainerData === true ? (
    //       <View style={{flex:1,alignItems:"center",marginTop:25}}>
    //         {this.state.ifnoResponse === true ? (
    //           <Text>Please Check Your Network Connection</Text>
    //           ) : (
    //             <Text>{this.state.notrainerDataText}</Text>
    //           )}
    //       </View>
    //     ) : (
    //     <Content padder>
    //         <View style={styles.container}>
    //           <Dropdown
    //              label={this.state.searchedvalue === "" ? "Select Search Type.." : ""}
    //              data={data}
    //              value={this.state.searchedvalue}
    //              dropdownPosition={0}
    //              onChangeText={this.onChangeDropdown}
    //              pickerStyle={styles.pickerStyle}
    //              inputContainerStyle={{borderBottomColor:"transparent"}}
    //              containerStyle={{borderWidth:1,borderColor:"#009FDB",height:50,justifyContent:"center",paddingBottom:10,paddingLeft:10,marginLeft:5,marginRight:5}}
    //            />
    //           {this.state.searchedvalue === "Speciality" ? (
    //           <Dropdown
    //              label={this.state.specialitySearchedValue === "" ? "Select Search Speciality.." : ""}
    //              data={this.state.newallSpecialtiesListArray}
    //              value={this.state.specialitySearchedValue}
    //              dropdownPosition={0}
    //              onChangeText={this.onSpecialityChangeDropdown}
    //              pickerStyle={styles.pickerStyleContainer}
    //              ref={"specialityref"}
    //              inputContainerStyle={{borderBottomColor:"transparent"}}
    //              containerStyle={{borderWidth:1,borderColor:"#009FDB",height:50,justifyContent:"center",paddingBottom:10,paddingLeft:10,marginLeft:5,marginRight:5,marginTop:5}}
    //            />
    //           ) : (<View/>)}
    //           {this.state.spinner === true ? (
    //               <Spinner size="large" color="black"/>
    //           ) : (
    //             <FlatList
    //               data={this.state.trainersList}
    //               extraData={this.state}
    //               keyExtractor={this._keyExtractor}
    //               removeClippedSubviews={false}
    //               renderItem={this.renderData.bind(this)}
    //               />
    //           )}
    //         </View>
    //       </Content>
    //     )}
    //     </Container>
    //   );
    // }
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
                   
                   <View style={styles.backBar}>
				
                    <Image style={styles.backIcon} 
                    source={backIcon}
                    resizeMode="cover"
                    />
							
					</View>

                </View>
                <View style={styles.bgImg}>
                    <View>
                        <Text style={styles.title}>Browse Trainers</Text>
                    </View>
                </View>
                <Card rounded style={{
                    borderRadius: 44 / 2, top: 160, shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    borderBottomColor: '#000',
                    borderBottomWidth: 1, position: 'absolute',
                    zIndex: 3,
                    overflow: 'visible',
                    borderColor: "#000"
                }}>
                    <InputGroup searchBar rounded style={{ backIcongroundColor: '#fff', borderRadius: 44 / 2, width: 350, borderColor: "#000"}}>
                        <Icon name='ios-search' />
                        <TextInput placeholder='Search by Trainer name' placeholderTextColor="grey"
                            style={{ color: '#000', width: 250 }} />
                        <Image
                        style={{height:20, width:20, position:'absolute', right:10}}
                        source={cancel}
                        resizeMode="cover"
                       />
                    </InputGroup>
                </Card>


                <Content>
                    <Form style={styles.form} >
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View>

                                <Image
                                    style={{

                                        width: 80,
                                        height: 80,
                                        borderRadius: 50 / 2,
                                        zIndex: 2,
                                        // flex:1,
                                        right: 35,
                                        top: 10,
                                        overflow: 'visible',
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 0 },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 10,
                                        elevation: 7,
                                    }}
                                    source={ratingImage}
                                    resizeMode="cover"
                                />
                            </View>
                            <View>

                                <Card style={{
                                    zIndex: 1, right: 80
                                }}>
                                    <CardItem style={{ zIndex: 1, height: 100, width: 300 }}>

                                        <Title
                                            style={{ fontSize: 20, fontWeight: 'bold', color: 'black', bottom: 30, left: 40, }}>
                                            Michael Clark
                                        </Title>
                                        
                                            <Image
                                                style={{ width: 10, height: 10, right: 20 , top:10 ,  position:'absolute' }}
                                                source={arrowIcon}
                                                resizeMode="cover"
                                            />

                                       


                                        <View>
                                            <Image
                                                style={{ width: 20, height: 20, right: 90, top: 10 }}
                                                source={aerobics}
                                                resizeMode="cover"
                                            />
                                            <Text style={{ fontSize: 12, bottom: 10, right: 60, }}>
                                                Aerobics
                                 </Text>
                                        </View>
                                        <View>
                                            <Image
                                                style={{ width: 20, height: 20, right: 40, top: 10 }}
                                                source={experience}
                                                resizeMode="cover"
                                            />
                                            <Text style={{ right: 10, fontSize: 12, bottom: 10 }}>
                                                7 years
                                </Text>
                                        </View>

                                        <View>
                                            <Image
                                                style={{ width: 20, height: 20, right: 180, top: 40 }}
                                                source={location}
                                                resizeMode="cover"
                                            />
                                            <Text style={{ right: 150, fontSize: 12, top: 20, }}>
                                                California, US
                                </Text>
                                        </View>
                                       


                                    </CardItem>


                                </Card>
                            </View>

                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View>

                                <Image
                                    style={{

                                        width: 80,
                                        height: 80,
                                        borderRadius: 50 / 2,
                                        zIndex: 2,
                                        // flex:1,
                                        right: 35,
                                        top: 10,
                                        overflow: 'visible',
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 0 },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 10,
                                        elevation: 7,
                                    }}
                                    source={ratingImage}
                                    resizeMode="cover"
                                />
                            </View>
                            <View>

                                <Card style={{
                                    zIndex: 1, right: 80
                                }}>
                                    <CardItem style={{ zIndex: 1, height: 100, width: 300 }}>

                                        <Title
                                            style={{ fontSize: 20, fontWeight: 'bold', color: 'black', bottom: 30, left: 40, }}>
                                            Michael Clark
                                        </Title>
                                        
                                            <Image
                                                style={{ width: 10, height: 10, right: 20 , top:10 ,  position:'absolute' }}
                                                source={arrowIcon}
                                                resizeMode="cover"
                                            />

                                       


                                        <View>
                                            <Image
                                                style={{ width: 20, height: 20, right: 90, top: 10 }}
                                                source={aerobics}
                                                resizeMode="cover"
                                            />
                                            <Text style={{ fontSize: 12, bottom: 10, right: 60, }}>
                                                Aerobics
                                 </Text>
                                        </View>
                                        <View>
                                            <Image
                                                style={{ width: 20, height: 20, right: 40, top: 10 }}
                                                source={experience}
                                                resizeMode="cover"
                                            />
                                            <Text style={{ right: 10, fontSize: 12, bottom: 10 }}>
                                                7 years
                                </Text>
                                        </View>

                                        <View>
                                            <Image
                                                style={{ width: 20, height: 20, right: 180, top: 40 }}
                                                source={location}
                                                resizeMode="cover"
                                            />
                                            <Text style={{ right: 150, fontSize: 12, top: 20, }}>
                                                California, US
                                </Text>
                                        </View>
                                       


                                    </CardItem>


                                </Card>
                            </View>

                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View>

                                <Image
                                    style={{

                                        width: 80,
                                        height: 80,
                                        borderRadius: 50 / 2,
                                        zIndex: 2,
                                        // flex:1,
                                        right: 35,
                                        top: 10,
                                        overflow: 'visible',
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 0 },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 10,
                                        elevation: 7,
                                    }}
                                    source={ratingImage}
                                    resizeMode="cover"
                                />
                            </View>
                            <View>

                                <Card style={{
                                    zIndex: 1, right: 80
                                }}>
                                    <CardItem style={{ zIndex: 1, height: 100, width: 300 }}>

                                        <Title
                                            style={{ fontSize: 20, fontWeight: 'bold', color: 'black', bottom: 30, left: 40, }}>
                                            Michael Clark
                                        </Title>
                                        
                                            <Image
                                                style={{ width: 10, height: 10, right: 20 , top:10 ,  position:'absolute' }}
                                                source={arrowIcon}
                                                resizeMode="cover"
                                            />

                                       


                                        <View>
                                            <Image
                                                style={{ width: 20, height: 20, right: 90, top: 10 }}
                                                source={aerobics}
                                                resizeMode="cover"
                                            />
                                            <Text style={{ fontSize: 12, bottom: 10, right: 60, }}>
                                                Aerobics
                                 </Text>
                                        </View>
                                        <View>
                                            <Image
                                                style={{ width: 20, height: 20, right: 40, top: 10 }}
                                                source={experience}
                                                resizeMode="cover"
                                            />
                                            <Text style={{ right: 10, fontSize: 12, bottom: 10 }}>
                                                7 years
                                </Text>
                                        </View>

                                        <View>
                                            <Image
                                                style={{ width: 20, height: 20, right: 180, top: 40 }}
                                                source={location}
                                                resizeMode="cover"
                                            />
                                            <Text style={{ right: 150, fontSize: 12, top: 20, }}>
                                                California, US
                                </Text>
                                        </View>
                                       


                                    </CardItem>


                                </Card>
                            </View>

                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View>

                                <Image
                                    style={{

                                        width: 80,
                                        height: 80,
                                        borderRadius: 50 / 2,
                                        zIndex: 2,
                                        // flex:1,
                                        right: 35,
                                        top: 10,
                                        overflow: 'visible',
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 0 },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 10,
                                        elevation: 7,
                                    }}
                                    source={ratingImage}
                                    resizeMode="cover"
                                />
                            </View>
                            <View>

                                <Card style={{
                                    zIndex: 1, right: 80
                                }}>
                                    <CardItem style={{ zIndex: 1, height: 100, width: 300 }}>

                                        <Title
                                            style={{ fontSize: 20, fontWeight: 'bold', color: 'black', bottom: 30, left: 40, }}>
                                            Michael Clark
                                        </Title>
                                        
                                            <Image
                                                style={{ width: 10, height: 10, right: 20 , top:10 ,  position:'absolute' }}
                                                source={arrowIcon}
                                                resizeMode="cover"
                                            />

                                       


                                        <View>
                                            <Image
                                                style={{ width: 20, height: 20, right: 90, top: 10 }}
                                                source={aerobics}
                                                resizeMode="cover"
                                            />
                                            <Text style={{ fontSize: 12, bottom: 10, right: 60, }}>
                                                Aerobics
                                 </Text>
                                        </View>
                                        <View>
                                            <Image
                                                style={{ width: 20, height: 20, right: 40, top: 10 }}
                                                source={experience}
                                                resizeMode="cover"
                                            />
                                            <Text style={{ right: 10, fontSize: 12, bottom: 10 }}>
                                                7 years
                                </Text>
                                        </View>

                                        <View>
                                            <Image
                                                style={{ width: 20, height: 20, right: 180, top: 40 }}
                                                source={location}
                                                resizeMode="cover"
                                            />
                                            <Text style={{ right: 150, fontSize: 12, top: 20, }}>
                                                California, US
                                </Text>
                                        </View>
                                       


                                    </CardItem>


                                </Card>
                            </View>

                        </View>

                    </Form>
                </Content>
            </View>
        );
    }
}

export default BrowseTrainers;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    headerStyle: {
        height: 65,
        backgroundColor: "#009FDB",
    },
    backBar: {
		padding: 15,
		// color: '#fff',
	},
	backIcon: {
        height: 20,
        width: 20,
		marginRight: 20,
	},
    bgImg: {
        height: 135,
        backgroundColor: "#009FDB",
    },
    title: {
        paddingTop: 20,
        paddingLeft: 20,
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold"
    },
    card: {
        borderRadius: 6 / 2, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        height: 110,
        width: 350,
        // borderBottomEndRadius: 10,
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
        // borderTopRightRadius: 10,
        // borderBottomStartRadius: 10
    },

    form: {
        // position:'relative',
        paddingTop: 50,
        paddingLeft: 40,
        paddingRight: 20
    }
});
