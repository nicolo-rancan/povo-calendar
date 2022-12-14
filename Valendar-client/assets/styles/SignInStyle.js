import { StyleSheet } from "react-native";

let mainBlack = "#414352";
let mainGray = "#F5F5F5";
let mainRed = "#FF0000";
let mainPurple = "#5C3CFA";

const styles = StyleSheet.create({
  maincnt: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: mainGray,
  },
  errcnt: {
    width: 200,
    padding: 10,
    top: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: mainRed,
  },
  errtxt: {
    maxWidth: 200,
    color: "white",
  },
  imgcnt: {
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  formcnt: {
    height: "60%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: mainBlack,
  },
  subtitle: {
    maxWidth: 200,
    marginBottom: 25,
    fontSize: 13,
    color: mainBlack,
  },
  forminput: {
    height: 40,
    width: 200,
    padding: 10,
    marginBottom: 25,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "AFA2FF",
    borderColor: mainPurple,
    color: mainBlack,
  },
  signincnt: {
    width: 200,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  signinwrapper: {
    width: 200,
  },
  signintxt: {
    fontSize: 17,
    color: mainPurple,
  },
});

export { styles };
