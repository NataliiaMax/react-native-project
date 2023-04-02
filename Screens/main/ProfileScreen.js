import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Keyboard,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const ProfileScreen = () => {
  const keyboartHide = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboartHide}>
        <View>
          <Text style={styles.title}> Profile</Text>
        </View>
        <StatusBar style="auto" />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default ProfileScreen;
