import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";

export default function RegistrationScreen() {
  const [value, setValue] = useState("");

  const inputHandler = (text) => setValue(text);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/image/registrationScreenPhoto.jpg")}
      >
        <Text style={styles.text}>Регистрация</Text>
        <TextInput
          style={styles.input}
          placeholder="Логин"
          value={value}
          onChangeText={inputHandler}
        />
        <TextInput
          style={styles.input}
          placeholder="Адрес электронной почты"
          value={value}
          onChangeText={inputHandler}
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль Показать"
          value={value}
          onChangeText={inputHandler}
        />
      </ImageBackground>
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: normal,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    background: linear - gradient("0deg, #F6F6F6, #F6F6F6"),
    // boxSizing: border - box,
    // position: absolute,
    // left: 0,
    // right: 0,
    // top: 0,
    // bottom: 0,
  },
});
