import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen({ route, navigation }) {
  const [userPosts, setUserPosts] = useState([]);
  const [like, setLike] = useState(0);
  const [comment, setComment] = useState(0);
  const cameraRef = useRef();
  const [avatarPhoto, setAvatarPhoto] = useState(null);
  const [makePhoto, setMakePhoto] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const options = { quality: 0.5, base64: true, skipProcessing: true };
        const data = await cameraRef.current.takePictureAsync(options);
        const source = data.uri;
        if (source) {
          await cameraRef.current.pausePreview();
          setIsPreview(true);
          setAvatarPhoto(source);
          setMakePhoto("user");
          await ImagePicker.launchImageLibraryAsync(source);
        }
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    }
  };

  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const toggleMakePhoto = () => {
    if (!makePhoto) {
      setMakePhoto("camera");
    }
    if (makePhoto === "camera" || makePhoto === "user") {
      setMakePhoto(null);
    }
  };

  const onPress = () => {
    setLike(like + 1);
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/image/registrationScreenPhoto.jpg")}
      >
        <View>
          {!makePhoto && (
            <Image style={styles.imageAvatar} source={{ uri: avatar }} />
          )}
          {makePhoto === "camera" && (
            <Camera style={styles.camera} ref={cameraRef} type={cameraType}>
              <View style={styles.takePhotoContainer} onPress={switchCamera}>
                {makePhoto && (
                  <TouchableOpacity onPress={takePhoto}>
                    <EvilIcons name="camera" size={25} color="black" />
                  </TouchableOpacity>
                )}
              </View>
            </Camera>
          )}
          {makePhoto === "user" && (
            <View>
              <Image
                source={{ uri: avatarPhoto }}
                style={{ width: 120, height: 120 }}
              />
              <TouchableOpacity>
                <FontAwesome name="cloud-upload" size={24} color="orange" />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <TouchableOpacity
          style={styles.addButtonContainer}
          onPress={toggleMakePhoto}
        >
          <View>
            <AntDesign name="pluscircleo" size={24} color="grey" />
          </View>
        </TouchableOpacity>

        <View style={styles.flatContainer}>
          <FlatList
            data={userPosts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.photo }} style={styles.imagePost} />
                <View>
                  <Text>{item.photoName.postName}</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.buttonContainerDelete}
                >
                  <AntDesign name="delete" size={24} color="grey" />
                </TouchableOpacity>

                <View style={styles.commentsContainer}>
                  <TouchableOpacity
                    title={"Comments"}
                    style={{ marginRight: 30 }}
                    onPress={() =>
                      navigation.navigate("Comments", {
                        id: item.id,
                        photo: item.photo,
                      })
                    }
                  >
                    <Text style={{ color: "grey" }}>
                      <FontAwesome5 name="comments" size={24} color="grey" />
                      {comment}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    title={"Like"}
                    style={{ marginRight: 20 }}
                    onPress={onPress}
                  >
                    <Text style={{ color: "grey" }}>
                      <Fontisto name="like" size={24} color="grey" />
                      {like}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    title={"Map"}
                    style={{ marginRight: 5 }}
                    onPress={() =>
                      navigation.navigate("Map", {
                        location: item.location,
                      })
                    }
                  >
                    <Text style={{ color: "grey" }}>
                      <Ionicons
                        name="location-outline"
                        size={24}
                        color="grey"
                      />
                      <View>
                        <Text>{item.photoName.location}</Text>
                      </View>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    minHeight: "100%",
    minWidth: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imageAvatar: {
    width: 120,
    height: 120,
    top: 20,
    borderRadius: 10,
  },
  imageAvatarContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "flex-start",
  },

  imageContainer: {
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imagePost: {
    marginHorizontal: 10,
    height: 200,
    width: 250,
    borderRadius: 10,
  },
  commentsContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  flatContainer: {
    backgroundColor: "#ffffff",
    marginHorizontal: 30,
    padding: 16,
    height: "70%",
    width: "100%",
    borderRadius: 16,
    display: "flex",
    justifyContent: "flex-end",
  },
  camera: {
    width: 120,
    height: 120,
    marginHorizontal: 16,
    marginTop: 372,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  takePhotoContainer: {
    top: -8,
    left: -10,
    borderColor: "#e8e8e8",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    width: 60,
    height: 60,
  },
  buttonContainer: {
    width: 60,
    height: 60,
    marginBottom: 25,
    marginHorizontal: 170,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  addButtonContainer: {
    left: 60,
    top: -20,
    backgroundColor: "#ffffff",
    borderRadius: 50,
  },
  buttonContainerDelete: {
    width: 30,
    height: 30,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});
