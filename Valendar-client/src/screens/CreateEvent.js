import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  TextInput,
} from "react-native";
import MultiSelect from "react-native-multiple-select";

let mainBlack = "#414352";
let mainGray = "#F5F5F5";
let mainRed = "#FF0000";
let mainPurple = "#5C3CFA";
let secPurple = "#7053FC";

export default function CreateEvent({ navigation }) {
  let [title, setTitle] = useState();
  let [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("A");
    fetch("http://192.168.1.106:3000/api/getUsers")
      .then((data) => data.json())
      .then((json) => {
        setUsers(json);
        console.log(json);
      });
  }, []);

  function onSelectedChange() {}

  return (
    <View style={styles.container}>
      <TextInput style={styles.forminput} placeholder="" />
      <MultiSelect
        items={[
          { u: "admin", id: 3 },
          { u: "ciao", id: 2 },
        ]}
        onSelectedItemsChange={onSelectedChange}
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{ color: "#CCC" }}
        submitButtonColor="#CCC"
        submitButtonText="Submit"
        style={{ width: "300" }}
      />
    </View>
  );
}
/*
{users.map((user) => (
        
      ))}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemcnt: {
    borderRadius: 0,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  item: {
    borderRadius: 0,
    backgroundColor: "white",
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
});
