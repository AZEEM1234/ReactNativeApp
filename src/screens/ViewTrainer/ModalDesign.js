import React, { Component } from "react";
import {Text,View,TouchableOpacity,ListView,FlatList,Image} from "react-native";
import Images from "@theme/images/images";

// var rowData = [];
var selectedTime = [];
export default class ModalDesign extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds,
      selectedTime: [],
      timesData: [],
      time_slot:[],
      forEmptyTimeSlot: false,
      indexValue:null,
      duplicateArray:[]
    };
  }
  componentWillMount() {
  var _selectedTimeArray = this.props.selectedTime;
  console.log("this.props.selectedTimes;dk", this.props.selectedTimes)
  console.log("sdlsdkls;_selectedTimeArray", _selectedTimeArray)
  _selectedTimeArray.map((res, key)=>{
      if (res.date === this.props.selectedDate){
        res.time_slot.map((res1,j)=>{
          var time = res1.time_slot.replace(/\s/g,'');
          this.props.selectedTimes.map((selectedTime,k)=>{
            if(selectedTime.time === time){
              res1["disabled"] = true
            }
          })
        })
         this.state.time_slot.push({timeSlot:res.time_slot});
      }
  });
  if (this.props.selectedTimes){
    this.props.selectedTimes.map((res, key)=>{
      if (res.date === this.props.selectedDate){
        this.state.duplicateArray.push( { time_slot: res.time, disabled: true });
      }
  });
  }
    if (this.state.time_slot === [] || this.state.time_slot.length === 0){
      console.log("jjkkll:  ", JSON.stringify(this.state.time_slot));
      this.setState({forEmptyTimeSlot: true},()=>{
        console.log("Hiiii123");
      });
    } else {
      console.log("sjdsjdk;jdjsdl;jsl;dj",this.state.time_slot)
      this.setState({ forEmptyTimeSlot: false,timesData: this.state.time_slot[0].timeSlot, selectedTime: [] });
    }
  }
  onPropsModalClose() {
    this.props.onClose();
  }
  onPropsModalDone() {
    if (this.state.duplicateArray.length > 0) {
      var finalArray = [];
      console.log("modal...........",JSON.stringify(this.state.duplicateArray))
      var rec = {date:this.props.selectedDate, time:this.state.duplicateArray[0].time_slot};
      finalArray.push(rec);
      this.props.getDataObj(finalArray);
    } else {
      this.props.onClose();
    }
  }
  onSingleSelection(item, index){
    if (this.state.indexValue === index){
      this.state.duplicateArray.map((res,i)=>{
        var restime = res.time_slot.replace(/\s/g,'');
        var itemtimne = item.time_slot.replace(/\s/g,'');
        if ( restime === itemtimne){
          this.state.duplicateArray.splice(i,1);
          this.setState({
            duplicateArray :  this.state.duplicateArray,
            indexValue:null
          })
        }
      })
    } else {
      this.setState({indexValue:index},()=>{
        var arr =[];
        arr.push({ time_slot: item.time_slot, disabled:false })
        this.setState({duplicateArray : arr})
      });
    }
  }
  renderData = ({item, index}) =>  {
    console.log("item.............",item)
    let data1;
    let images = [];
    let count = 0;
    console.log("this.state.duplicateArray",this.state.duplicateArray)
    this.state.duplicateArray.map((res1, j) => {
      var time = item.time_slot.replace(/\s/g,'');
      var restime = res1.time_slot.replace(/\s/g,'');
      if (restime === time) {
        console.log("skjdkds;dl;",res1.time_slot)
        data1 = "true";
        count = count + 1;
      }
      if (count === 0) {
        data1 = "";
      }
    });
    if (data1 === "true") {
      images.push(
          <Image key={item.time_slot} source={Images.checked} style={{height:20,width:20}} />
      );
    } else {
      images.push(<View key={item.time_slot}/>);
    }
    console.log("kfl;adkfal;",item.disabled)
    return (
     item.disabled ? (
        <View style={{flexGrow: 1, flexDirection: "row", marginTop: 5, height: 55}}>
        <View style={{flex: 0.8,justifyContent: "center",paddingLeft: 15}}>
          <View>
            <Text style={{ color: "black", fontSize: 18 }}>
               {item.time_slot}
            </Text>
          </View>
        </View>
        <View style={{flex: 0.2,justifyContent: "center",alignItems: "flex-end",paddingRight: 20}}>
        <Image key={item.time_slot} source={Images.checked} style={{height:20,width:20,tintColor:"grey"}} />
        </View>
      </View>
     ) :
      (<View style={{flexGrow: 1, flexDirection: "row", marginTop: 5, height: 55}}>
        <View style={{flex: 0.8,justifyContent: "center",paddingLeft: 15}}>
          <TouchableOpacity onPress={this.onSingleSelection.bind(this, item,index)}>
            <Text style={{ color: "black", fontSize: 18 }}>
               {item.time_slot}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.2,justifyContent: "center",alignItems: "flex-end",paddingRight: 20}}>
          {images}
        </View>
      </View>)
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 20 }}/>
          {this.state.forEmptyTimeSlot === true ? (
            <View style={{height: 44,backgroundColor: "white",justifyContent: "space-between", alignItems: "center", paddingLeft: 10, paddingRight: 10, borderBottomWidth: 1, borderBottomColor: "grey", flexDirection: "row"}}>
              <TouchableOpacity onPress={this.props.onClose}>
                <Text style={{fontSize:16, fontWeight:"800", color:"#009FDB"}}>Close</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{height: 44,backgroundColor: "white",justifyContent: "space-between", alignItems: "center", paddingLeft: 10, paddingRight: 10, borderBottomWidth: 1, borderBottomColor: "grey", flexDirection: "row"}}>
              <TouchableOpacity onPress={this.props.onClose}>
                <Text style={{fontSize:16, fontWeight:"800", color:"#009FDB"}}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onPropsModalDone.bind(this)}>
                <Text style={{fontSize:16, fontWeight:"800", color:"#009FDB"}}>Done</Text>
              </TouchableOpacity>
            </View>
          )}
          {this.state.forEmptyTimeSlot === true ? (
            <View style={{marginTop:10,alignItems:"center"}}>
              <Text > No Time Slots Available For The Selected Date</Text>
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <FlatList
                data={this.state.timesData}
                renderItem={this.renderData.bind(this)}
                keyExtractor={(x, i) => x.time_slot}
                extraData={this.state}
              />
            </View>
          )}
      </View>
    );
  }
}
