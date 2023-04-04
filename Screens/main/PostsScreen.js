import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Octicons, AntDesign } from "@expo/vector-icons";

import DefaultPostsScreen from "../nested/DefaultScreensPosts";
import CommentsScreen from "../nested/CommentScreen";
import MapScreen from "../nested/MapScreen";

const NestedScreen = createNativeStackNavigator();

export default function PostsScreen() {
  return (
    <NestedScreen.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: "#212121",
          fontFamily: "Roboto-Medium",
          fontSize: 18,
          lineHeight: 22,
          letterSpacing: 0.5,
          paddingLeft: 15,
          paddingRight: 15,
        },
      }}
    >
      <NestedScreen.Screen
        name="DefaultPost"
        component={DefaultPostsScreen}
        options={{
          title: "The Publications",
          headerRight: () => (
            <TouchableOpacity>
              <Octicons name="sign-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={({ navigation }) => ({
          title: "The Comments",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                name="arrowleft"
                size={24}
                color="rgba(33,33,33,0.8)"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={({ navigation }) => ({
          title: "Map & location",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                name="arrowleft"
                size={24}
                color="rgba(33,33,33,0.8)"
              />
            </TouchableOpacity>
          ),
        })}
      />
    </NestedScreen.Navigator>
  );
}
