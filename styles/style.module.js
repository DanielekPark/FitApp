import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /* =======================
    Home screen 
    ======================= */
  /* =====Images===== */
  homeImg: {
    height: 120,
    width: "33%",
  },
  homeImgContainer: {
    flexDirection: "row",
    width: "95%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  /* =======================
    Screen styles
    ======================= */
    topImgWrap: {
      marginLeft: 'auto',
      marginRight: 'auto' 
    },
    screenWrapper: {
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto' 
    },
  /* =======================
    Button styles
    ======================= */
    activeBtn: {
      backgroundColor: "#33cccc",
      borderWidth: 0,
      borderRadius: 30,
    },
    transparentBtn: { color: "transparent" },
    inactiveBtn: {
      backgroundColor: 'transparent',
      borderColor: "#33cccc",
      borderWidth: 1,
      borderRadius: 30,
    },
    btnContainer: {
      borderColor: 'transparent',
    },
    btnWrapper: {
      marginTop: 4,
      marginBottom: 4,   
    },
    // Start over button
    btnTitleContain: {
      width: 200,
      marginVertical: 10,
      marginLeft: 'auto', 
      marginRight: 'auto'
    },
  /* =======================
    Color
    ======================= */
    aqua: {color: "#33cccc"},
    aquaBg: {backgroundColor: "#33cccc"},
  /* =======================
    Accordion styles
    ======================= */
  accordionFont: {
    fontSize: 23,
  },
  /* =======================
    Spacing
    ======================= */
  smMarTop: {
    marginTop: 15,
  },
  smMarBottom: {
    marginTop: 15,
  },
  /* =======================
    Text styles 
    ======================= */
  centerText: {
    textAlign: "center",
  },
  fontTwenty: {
    fontSize: 20,
  },
  /* =======================
    Calculator styles 
    ======================= */
  calcWrapper: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  inputContainer: {
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputStyle: {
    textAlign: "center",
  },
  calcBtn: {
    backgroundColor: "#33cccc",
    borderRadius: 5,
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
  redBrdr: {
    borderColor: 'red',
    borderWidth: 3,
  }, 
  /* =======================
  Weights Screen 
  ======================= */
  listItem : {
    width: '90%'
  },
  mxAuto: {
    marginLeft: "auto",
    marginRight: "auto",
  }, 
  selectedItem: {
    outline: 'white',
    backgroundColor: "#33cccc", 
  }
});

export default styles;