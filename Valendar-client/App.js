import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreateEvent from "./src/screens/CreateEvent";
import Calendar from "./src/screens/CalendarPage";
import SignIn from "./src/screens/SignInPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewEvent">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="NewEvent" component={CreateEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
export default function App() {
  <NavigationContainer>{}</NavigationContainer>;

  const createUser = () => {
    console.log("test");

    fetch("http://192.168.1.130:3000/api/createUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "admin",
        password: "1234",
      }),
    }).catch(function (error) {
      console.log(
        "There has been a problem with your fetch operation: " + error.message
      );
      // ADD THIS THROW error
      throw error;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "red", fontSize: 100 }}>Test5</Text>
      <Button onPress={createUser} title="ciao, come va?" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
*/
