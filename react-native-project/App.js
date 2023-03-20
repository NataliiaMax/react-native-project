import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";

const loadApplication = async () => {
  await Font.loadAsync({
    "DMMono-Regular": require("./assets/fonts/DMMono-Regular.ttf"),
  });
};


export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [iasReady, setIasReady] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(isShowKeyboard);
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
if (!iasReady) {
  return (
    <AppLoading
      startAsync={loadApplication}
      onFinish={() => setIasReady(true)}
      onError={console.warn}
    />
  );
}
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/image/registrationScreenPhoto.jpg")}
        >
          <RegistrationScreen />
          <LoginScreen />
        </ImageBackground>
        <StatusBar style="auto" />
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
});
