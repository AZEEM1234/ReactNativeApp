import {
  Dimensions
} from "react-native";
const window = Dimensions.get("window");

export default {
  container: {
    backgroundColor: "#fff"
  },
  headerStyle: {
    height:150
    // backgroundColor: "#009FDB",
  },
  title: {
  paddingTop:10,
  paddingLeft:20,
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  ham:{
alignSelf:'flex-start',
  },
  topTextContainer: {
    // flex : 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    padding:3,
    paddingBottom: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  topText: {
    fontSize: window.width / 22,
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    flexDirection: "row"
  },
  firstPart: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  secondPart: {
    flex: 1,
    marginRight: 10
  },
  buttonContainerStyle: {
    flexDirection: "row",
  },
  buttonStyle: {
    backgroundColor: "#009FDB",
    color: "#fff",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  sessionSliderStyle: {
    // width: "100%",
    // height: 130,
    //marginTop: 10,
    width: window.width / 2.18,
    height: window.height * 0.2
  },
  sessionsContainerStyle: {
    //textAlign : 'center',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009FDB",
    paddingTop: 10,
    paddingBottom: 10,
  },
  sessionsText: {
    fontSize: window.width / 22,
    color: "#fff"
  },
  trainerSliderStyle: {
    // width: "95%",
    // height: 130,
    // marginTop: 10,
    // marginLeft: 10,
    // marginBottom: 10,
    alignSelf:"center",
    margin:5,
    width: window.width / 1.05,
    height: window.height * 0.2
  },
  onlineStore: {
    marginTop: 10,
  },
  buttonContainerStyle1: {
    flexDirection: "row"
  },
  onlineStoreText: {
    fontSize: window.width / 22,
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#009FDB"
  },
  checkOnlinestoreProductsSlider:{
    alignSelf:"center",
    margin:10,
    width: window.width / 1.1,
    height: window.height * 0.5
  },
  // book: {
  //   flexDirection: "row",
  //   marginTop: 10,
  //   width: window.width / 1,
  //   backgroundColor: "#009FDB",
  // },
  // bookText: {
  //   fontSize: window.width / 22,
  //   fontWeight:"700",
  //   color: "#fff"
  //   // fontSize: 20,
  //   // width: "100%",
  //   // color: "#fff",
  //   // backgroundColor: "#009FDB",
  //   // textAlign: "center",
  //   // justifyContent: "center",
  //   // paddingBottom: 10,
  //   // paddingTop: 10
  // },
  joinSessionView: {
    backgroundColor: "#009FDB",
    marginTop: 2
  },
  joinSessionButton: {
    width: window.width / 1,
    alignItems: "center",
    justifyContent: "center"
  },
  trainerText: {
    color: "#fff",
    fontSize: 16
  },
  trainerTextContainer: {
    // borderWidth: 1,
    // borderRadius: 100,
    // borderColor: "#fff",
    padding: 5,
    height: 40,
    width:40,
    marginBottom: 80,
  }
};
