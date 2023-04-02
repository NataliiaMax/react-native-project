import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Dimensions,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({navigation}) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/image/registrationScreenPhoto.jpg")}
        ></ImageBackground>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? 32 : 100,
              width: dimensions,
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Registration</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.inputTitle}>Login</Text>
              <TextInput
                style={styles.input}
                textAlign={"center"}
                value={state.email}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
              />
              <Text style={styles.inputTitle}>Email address</Text>
              <TextInput
                style={styles.input}
                textAlign={"center"}
                value={state.email}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.input}
                textAlign={"center"}
                value={state.password}
                secureTextEntry={true}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={keyboardHide}
            >
              <Text style={styles.btnTitle}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ alignSelf: "center" }}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={{ marginRight: 5 }}>
                Already have an account? {""}
                <Text style={styles.navigate}>Sign in</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  form: {
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    height: 50,
    borderRadius: 8,
    color: "#212121",
    backgroundColor: "#f6f6f6",
  },
  inputTitle: {
    color: "#212121",
    marginBottom: 16,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
  btn: {
    backgroundColor: "#ff6C00",
    height: 50,
    borderRadius: 30,
    marginTop: 43,
    marginHorizontal: 20,
  },
  btnTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    marginVertical: 8,
  },
  navigate: {
    color: "#1B4371",
  },
  header: {
    alignItems: "center",
    marginBottom: 33,
  },
  headerTitle: {
    fontSize: 30,
    color: "#212121",
    fontFamily: "Roboto-Medium",
  },
});
