import React ,{ Component } from "react";
import { View ,Text,FlatList,Modal, TouchableOpacity,Alert,Platform, Image,ActivityIndicator,Dimensions } from "react-native";
var ImagePicker = require("react-native-image-picker");
import RNThumbnail from "react-native-thumbnail";
import API from "@utils/ApiUtils";
import Images from "@theme/images/images";
import VideoPlayer from "./VideoPlayer";
import styles from "./styles";
import RNFetchBlob from 'rn-fetch-blob'

const window = Dimensions.get("window");
const data = [];
class TrainersMedia extends Component{
  constructor(props){
    super(props);
    this.state = {
      avatarSource: "",
      MediaData:this.props.Media,
      videoavatarSource:"",
      modalVisible:false,
      videoUrl:"",
      isModalVisible:false,
      userData:this.props.userData,
      charges:"",
      imageId:"",
      spinner:false
    };
    this.onAddMedia = this.onAddMedia.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.onVideoIcon = this.onVideoIcon.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }
  componentWillMount(){
    this.fetchVideoUploadCharges();
  }
  componentWillReceiveProps(newProps){
    if (newProps.Media){
      this.setState({
        MediaData: newProps.Media
      });
    }
    if (newProps.videopaymentConfirm) {
      this.setState({
        imageId: newProps.imageId
      },()=>{
        console.log("willreceiveimageID",this.state.imageId);
        this.onVideo();
      });
    }
  }
  fetchVideoUploadCharges(){
    API.getVideoUploadCharges().then(async (response) => {
        this.setState({
          isLoading:false,
          charges:response.data.charges
        });
     });
  }

  onVideoIcon(item){
    this.setState({
      videoUrl : item.videoUrl
    },()=>{
      this.setState({modalVisible:true});
    });
  }
  onModalOpen(){
    this.setState({
      isModalVisible:true
    });
  }
  onModal_Close(){
    this.setState({
      isModalVisible:false
    });
  }
  onAddMedia(index){
    Alert.alert("Want to add Images/Videos", "What do you want to upload?", [
      {
        text: "Images",
        onPress: () => {
          this.setState({
            imageId: index
          },()=>{
            this.onImageUpload();
          });

        }
      },
      {
        text: "Videos",
        onPress: () => {
          this.setState({
            imageId: index
          },()=>
          {this.onModalOpen();}
          );
        }
      },
      { text: "Cancel", onPress: () => console.log("cancel Pressed") }
    ]);
  }
  onVideo(){
    var options = {
      title: "Add Video", // specify null or empty string to remove the title
      cancelButtonTitle: "Cancel",
      takePhotoButtonTitle: "Take Video", // specify null or empty string to remove this button
      chooseFromLibraryButtonTitle: "Choose from Library", // specify null or empty string to remove this button
      mediaType: "video",
      videoQuality: "medium", // 'low', 'medium', or 'high'
      aspectX: 2, // aspectX:aspectY, the cropping image's ratio of width to height
      aspectY: 1, // aspectX:aspectY, the cropping image's ratio of width to height
      quality: 1, // photos only
      angle: 0, // photos only
      durationLimit:15 ,
      allowsEditing: false, // Built in functionality to resize/reposition the image
      noData: false, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
      storageOptions: {
        // if this key is provided, the image will get saved in the documents/pictures directory (rather than a temporary directory)
        skipBackup: true, // image will NOT be backed up to icloud
        path: "images" // will save image at /Documents/images rather than the root
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePickerManager Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        var vidsource1;
        console.log("response video",response);
        if (Platform.OS === "android") {
          vidsource1 = { uri: response.uri, isStatic: true };
        } else {
          vidsource1 = { uri: response.uri.replace("file://", ""), isStatic: true };
        }
        this.setState({
            videoavatarSource: vidsource1
          },()=>{
            RNThumbnail.get(response.uri).then((result) => {
              console.log("Thumbnail",result.path); // thumbnail path
              let thumbnailpath = { uri: result.path, isStatic: true };
              var record = {type: "Video", videoUrl: vidsource1,source:thumbnailpath,id:(this.state.imageId).toString()};
              let data = ''
                RNFetchBlob.fs.readStream(
                    // file path
                    vidsource1.uri,
                    // encoding, should be one of `base64`, `utf8`, `ascii`
                    'base64',
                    // (optional) buffer size, default to 4096 (4095 for BASE64 encoded data)
                    // when reading file in BASE64 encoding, buffer size must be multiples of 3.
                    4095)
                .then((ifstream) => {
                    ifstream.open()
                    ifstream.onData((chunk) => {
                      data += chunk
                    })
                    ifstream.onError((err) => {
                      console.log('oops', err)
                    })
                    ifstream.onEnd(() => {  
                      var base64 = data;
                      var string = {"data":"data:video/mp4;base64," + base64}; 
                      console.log("database64",data)
                      API.uploadVideo(string).then(async (responseData) => {
                        if (responseData) {
                          if (responseData.status){
                            Alert.alert("Home Fit",responseData.message);
                            console.log("sldklklksdlsd",responseData)
                            this.setState({avatarSource: { uri: responseData.image },spinner:false,});
                            // this.props.onVideoUploding(record,this.state.imageId);
                          }
                          else {
                            Alert.alert("HomeFit",responseData.message);
                          }
                        } else {
                          Alert.alert("Error","Error uploading video");
                        }
                      });
                      
                    })
                })
             
            });
          });
      }
    });
  }
  onImageUpload(){
    const options = {
      title: "Upload Picture",
      takePhotoButtonTitle: "Take Photo",
      chooseFromLibraryButtonTitle: "Choose from Library",
      quality: 0.5,
      storageOptions: {
        skipBackup: true
      },
      allowsEditing: true
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
       this.setState({imagepicker:false});
        console.log("User cancelled photo picker");
      }
      else if (response.error) {
        console.log("ImagePickerManager Error: ", response.error);
      }
      else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      }
      else {
        var source;
        if (Platform.OS === "android") {
          source = {uri: response.uri, isStatic: true};
        } else {
          source = {uri: response.uri.replace("file://", ""), isStatic: true};
        }
        this.setState({spinner:true});
        var base64 = "data:image/png;base64," + response.data;
        var string = {"action":"trainers_upload_image","trainer_id":this.state.userData.id,"data":base64};
        API.uploadImage(string).then(async (responseData) => {
          if (responseData) {
            if (responseData.status){
              let source = { uri: responseData.imaage };
              Alert.alert("Home Fit",responseData.message);
              var record = {type: "Image", source: source,id:(this.state.imageId).toString()};
              this.setState({spinner:false});
              this.props.onImageUploding(record,this.state.imageId);
            }
            else {
              this.setState({spinner:false});
              Alert.alert("HomeFit",responseData.message);
            }
          } else {
            this.setState({spinner:false});
            Alert.alert("Error","Error uploading image");
          }
        });
      }
      });
  }
  onModalClose(){
    this.setState({modalVisible: false});
  }
  onDone(){
    this.setState({isModalVisible: false},()=>{
      this.props.onPayment(this.state.imageId);
    });
  }
  renderItem = ({item,index}) => {
    console.log("itemquantity",item);
    return (
      <View>
        {item.type === "Video" ? (
          <TouchableOpacity onPress={()=>this.onVideoIcon(item)} style={{margin:10,width:window.height / 10,height:window.height / 10,borderWidth:1,borderColor:"grey",borderRadius:(window.height / 10 )/ 2,alignItems:"center"}}>
            <Image style={{width:window.height / 10,height:window.height / 10,borderWidth:1,borderColor:"grey",borderRadius:(window.height / 10 )/ 2}} source={item.source}/>
          </TouchableOpacity>
          ) : item.type === "Image" ? (
          <View style={{margin:10,width:window.height / 10,height:window.height / 10,borderWidth:1,borderColor:"grey",borderRadius:(window.height / 10 )/ 2,alignItems:"center"}}>
            <Image style={{width:window.height / 10,height:window.height / 10,borderWidth:1,borderColor:"grey",borderRadius:(window.height / 10 )/ 2}} source={item.source}/>
          </View>
          ) :
          <TouchableOpacity style={{justifyContent:"center",margin:10,width:window.height / 10,height:window.height / 10,borderWidth:1,borderColor:"grey",borderRadius:(window.height / 10 ) / 2,alignItems:"center"}} onPress={()=>this.onAddMedia(index)} >
            <Text style={{fontSize:window.width / 30,textAlign:"center",color:"grey"}}>+ Add {"\n"} photos/videos</Text>
          </TouchableOpacity>
        }
        {item.type === "Video" ?
          <View style={{position:"absolute",marginTop:30,alignItems:"center",width:window.height / 10,height:window.height / 10,alignSelf:"center"}}>
            <Image source={Images.playIcon} style={{tintColor:"white"}}/>
          </View> : null }
       </View>
    );
  }
  render() {
    return (
      <View style={{flex:1,flexDirection:"row",alignSelf:"center",}}>
      <View>
      <FlatList
        horizontal
         data={this.state.MediaData}
         extraData={this.state}
         keyExtractor={(x, i) =>typeof x === "object" ? x.id : x }
         renderItem={this.renderItem}
       />
      </View>
         <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}>
            <VideoPlayer
              onClose={this.onModalClose}
              videoUrl = {this.state.videoUrl}
            />
          </Modal>
          <Modal
             animationType="slide"
             transparent={true}
             visible={this.state.isModalVisible}>
             <View style={styles.modalView}>
               <View style={{width: 300,height: 120,backgroundColor:"white",borderWidth:1,borderColor:"white",borderRadius:10}}>
                 <View style={{flex:0.5,justifyContent:"center",alignItems:"center",margin:10}}>
                   <Text style={{textAlign:"center",fontSize:16,fontWeight:"700"}}>Do you want to pay  $ {this.state.charges} to upload this video?</Text>
                 </View>
                 <View style={{flex:0.5,marginBottom:10,flexDirection:"row"}}>
                  <View style={{flex:0.5,justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity onPress={this.onDone.bind(this)}>
                       <Text style={{textAlign:"center",fontSize:18,fontWeight:"800", color:"#009FDB"}}>Continue</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex:0.5,justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity onPress={this.onModal_Close.bind(this)}>
                       <Text style={{textAlign:"center",fontSize:18,fontWeight:"800", color:"#009FDB"}}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                 </View>
               </View>
            </View>
           </Modal>
            {this.state.spinner === true ? (
            <View style={styles.container_spinnerOne}>
              <View style={styles.spinnerView1}>
                <ActivityIndicator size="large" color="black"/>
              </View>
            </View>
          ) : null }
      </View>
    );
  }
}
export default TrainersMedia;
