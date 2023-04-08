import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getReactNativePersistence,
} from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyDNbGy6VrrZxNyaDCdSHMZXynx8WIblJ2A",
  authDomain: "react-native-project-35b8d.firebaseapp.com",
  projectId: "react-native-project-35b8d",
  storageBucket: "react-native-project-35b8d.appspot.com",
  messagingSenderId: "819178224835",
  appId: "1:819178224835:web:039a53e38a5d9c04af7676",
  measurementId: "G-3K1NNT75H7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
