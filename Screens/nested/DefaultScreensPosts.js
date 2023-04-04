import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Octicons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function DefaultPostsScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  
  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <FlatList
        data={posts}
        keyExtractor={posts.id}
        renderItem={({ item }) => (
          <View>
            <View style={styles.avatarWrapper}>
              <View style={{ overflow: "hidden", borderRadius: 16 }}>
                <Image style={styles.avatar} source={{ uri: item.avatar }} />
              </View>
              <View style={styles.userInfoWrapper}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userEmail}>{item.email}</Text>
              </View>
            </View>
            <View style={styles.postsContainer}>
              <Image source={{ uri: item.photo }} style={styles.postImage} />
              <View style={styles.postImageWrapper}>
                <Text style={styles.postImageTitle}>{item.description}</Text>
              </View>
              <View style={styles.postInfoContainer}>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    style={{ ...styles.postInfoBtn, marginRight: 25 }}
                    activeOpacity={0.7}
                    onPress={() =>
                      navigation.navigate("Comments", {
                        postId: item.id,
                        photo: item.photo,
                      })
                    }
                  >
                    <FontAwesome
                      name={item.comments ? "comment" : "comment-o"}
                      size={24}
                      color={item.comments ? "#FF6C00" : "#BDBDBD"}
                    />
                    <Text
                      style={{
                        ...styles.postInfoText,
                        color: item.comments ? "#212121" : "#BDBDBD",
                      }}
                    >
                      {item.comments || 0}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.postInfoBtn}
                    activeOpacity={0.7}
                  >
                    <AntDesign
                      name="like2"
                      size={24}
                      color={item.likes ? "#FF6C00" : "#BDBDBD"}
                    />
                    <Text
                      style={{
                        ...styles.postInfoText,
                        color: item.likes ? "#212121" : "#BDBDBD",
                      }}
                    >
                      {item.likes || 0}
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.postInfoBtn}
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate("Map", {
                      location: item.location,
                      title: item.description,
                      description: item.place,
                    })
                  }
                >
                  <Octicons name="location" size={24} color="#BDBDBD" />
                  <Text
                    style={{
                      ...styles.postInfoText,
                      color: "#212121",
                      textDecorationLine: "underline",
                    }}
                  >
                    {item.city} {item.place}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 18,
    lineHeight: 22,
    paddingBottom: 11,
    textAlign: "center",
    color: "#212121",
  },
  avatarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 16,
    overflow: "hidden",
  },
  avatar: {
    width: 60,
    height: 60,
    resizeMode: "cover",
  },
  userInfoWrapper: {
    marginLeft: 10,
  },
  userName: {
    fontFamily: "Roboto-Medium",
    fontSize: 14,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  postsContainer: {
    marginHorizontal: 16,
  },
  postImage: {
    height: 240,
    borderRadius: 8,
    resizeMode: "cover",
  },
  postImageWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  postImageTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#212121",
    marginBottom: 8,
  },
  postInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  postInfoBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  postInfoText: {
    marginLeft: 10,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
