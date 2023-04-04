import { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CommentsScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsShowKeyboard(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsShowKeyboard(false);
      }
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={{ ...styles.container }}>
        <Image
          source={{ uri: photo }}
          style={{ height: 240, borderRadius: 8 }}
        />
        <View style={styles.inputContainer}></View>
        <View>
          <TextInput
            placeholder="Add comment"
            onFocus={() => setIsShowKeyboard(true)}
            style={{
              ...styles.submitBtn,
              fontFamily: "Roboto",
            }}
          />
          <TouchableOpacity style={styles.addCommentBtn} activeOpacity={0.7}>
            <AntDesign name="arrowup" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 32,
  },
  avatarIcon: {
    height: 40,
    width: 40,
    borderRadius: 40,
    overflow: "hidden",
    resizeMode: "cover",
  },
  comment: {
    marginLeft: 16,
    padding: 14,
    width: 300,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  commentMessage: {
    marginBottom: 5,
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    color: "#212121",
  },
  commentDate: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    color: "#BDBDBD",
  },
  submitBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    padding: 16,
    height: 50,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "rgba(189, 189, 189, 1)",
    backgroundColor: "#E8E8E8",
  },
  addCommentBtn: {
    position: "absolute",
    right: 6,
    bottom: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  commentAuthor: {
    marginBottom: 5,
    fontFamily: "Roboto-Medium",
    fontSize: 11,
    color: "#656565",
  },
});
