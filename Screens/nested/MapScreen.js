import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function MapScreen({ route }) {
  const { latitude, longitude } = route.params.location;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          longitude,
          latitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker coordinate={{ longitude, latitude }} title="travel photo" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
