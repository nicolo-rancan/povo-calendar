import { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Image,
} from "react-native";

import { styles } from "../../assets/styles/SignInStyle";

export default function SignIn({ navigation }) {
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();
  let [formOk, setFormOk] = useState(true);

  async function submitForm() {
    setFormOk(false);
  }

  useEffect(() => {
    //setFormOk(true);
  }, []);

  return (
    //{ backgroundColor: "#f2f2f2" }
    <View style={styles.maincnt}>
      <View style={formOk ? { display: "none" } : styles.errcnt}>
        <Text style={styles.errtxt}>Compila tutti i campi</Text>
      </View>

      <View style={styles.imgcnt}>
        <Image source={require("../../assets/images/auth.png")} />
      </View>
      <View style={styles.formcnt}>
        <View>
          <Text style={styles.title}>LOGIN</Text>
          <Text style={styles.subtitle}>
            Accedi con il tuo nome utente e password
          </Text>
          <TextInput
            //onChangeText={onChangeNumber}
            //value={number}
            style={styles.forminput}
            placeholder="Username"
            keyboardType="default"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            //onChangeText={onChangeNumber}
            //value={number}
            style={styles.forminput}
            placeholder="Password"
            secureTextEntry={true}
            keyboardType="default"
            onChangeText={(text) => setPassword(text)}
          />
          <View style={styles.signincnt}>
            <Pressable onPress={submitForm} style={styles.singinwrapper}>
              <Text style={styles.signintxt}>Accedi</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
