import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
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
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.wrapper}>
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
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={style.btn}
            title="Зарегистрироваться"
          ></TouchableOpacity>
          <Text>Уже есть аккаунт? Войти</Text></View>
        </KeyboardAvoidingView>{" "}
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
  wrapper:{
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    padding: 16,
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
  },
  btn: {
    display: 1,
    flexDirection: column,
    alignItems: center,
    padding: 32,
    gap: 12,
    height: 51,
    background: "#FF6C00",
    borderRadius: 10,
  },
});
