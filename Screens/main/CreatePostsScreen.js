import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const CreatePostsScreen = () => {
  const keyboartHide = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboartHide}>
        <View>
          <Text style={styles.title}>Create Post </Text>
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

export default CreatePostsScreen;
