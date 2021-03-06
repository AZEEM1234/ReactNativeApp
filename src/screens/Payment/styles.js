import {
  Dimensions,
  StyleSheet
} from "react-native";
const window = Dimensions.get("window");

export default {
  container: {
    backgroundColor: "#fff"
  },
  headerStyle: {
    backgroundColor: "#009FDB",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    backgroundColor: "#fff",
    flex: 1
  },
  contentView:{flex:1},
  // cardView:{margin:10},
  cardInputStyle:{ fontSize: 16, color: "black" },
  inputView:{marginLeft:20, marginRight:20},
  buttonView:{flex:1,flexDirection:"row", marginTop:10},
  iconStyle:{height:20,width:20, marginLeft:20},
  checkBoxView:{flex:0.15, alignItems:"center",justifyContent:"center"},
  textView:{flex:0.8},
  textStyle:{textAlign:"justify", fontSize:14},
  emptyView:{flex:0.05},
  confirmButtonView:{backgroundColor:"#009FDB", margin:20},
  confirmButtonText:{fontWeight:"700"},
  rowView:{flexDirection:"row",margin:5,padding:5, height:70,backgroundColor:"#f9f9f9",borderRadius:5, borderWidth:2, alignItems:"center"},
  rowImageStyle:{height:20,width:20},
  cardHolderNameStyle: {fontSize: window.width / 21},
  cardView:{flex:0.2,backgroundColor:"white",alignItems:"center",justifyContent:"center"},
  cardImgStyle:{height:40,width:50},
  rowDataView:{flex:0.5,paddingLeft:20,alignItems:"flex-start",justifyContent:"center"},
  rowTextView:{flex:0.2,alignItems:"flex-end"},
  rowTextStyle:{color:"#b3b3b3"},
  mainRowView:{flex:0.1,alignItems:"center",justifyContent:"center"},
  container_spinner: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.72)"
  },
  spinnerView: {
    height: window.width / 3,
    width: window.width / 3,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(242, 242, 242, 0.83)",
  },
  creditCardDetailsTextStyle:{marginLeft:10, fontSize:15, fontWeight:'700', marginTop:5},
  creditCardTextBorderView:{height:40, backgroundColor:'#F0F0F0', borderColor:'lightgrey', borderWidth:1, justifyContent:'center', margin:10 },
  creditCardDataText:{marginLeft:5, fontSize:15, fontWeight:'700'},
  dataRowBorderView:{flex:1, backgroundColor:'white', borderColor:'#009FDB', borderWidth:2, margin:5, borderRadius:5},
  cardNumberView:{flex:0.7, justifyContent:'center'},
  cardIconView:{flex:0.3,alignItems:'flex-end', marginRight:5},
  expiryDateView:{flex:0.5}
};
