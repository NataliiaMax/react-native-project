import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const PostsScreen = () => {
  const keyboartHide = () => {
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboartHide}>
        <TouchableOpacity title="LogOut">
          <Ionicons name="log-out-outline" size={24} color="black" />
        </TouchableOpacity>
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

export default PostsScreen;
