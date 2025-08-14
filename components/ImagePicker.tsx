import * as ExpoImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";

export default function ImagePicker() {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const requestPermission = async (type: "camera" | "mediaLibrary") => {
    if (type === "camera") {
      const { status } = await ExpoImagePicker.requestCameraPermissionsAsync();
      console.log("status: ", status);
      return status === "granted";
    } else {
      const { status } =
        await ExpoImagePicker.requestMediaLibraryPermissionsAsync();
      console.log("status: ", status);

      return status === "granted";
    }
  };

  const pickFromGallery = async () => {
    const hasPermission = await requestPermission("mediaLibrary");
    if (!hasPermission) {
      Alert.alert("Permission required", "We need access to your photos.");
      return;
    }

    const result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      console.log(imageUri);
    }
  };

  const takePhoto = async () => {
    const hasPermission = await requestPermission("camera");
    if (!hasPermission) {
      Alert.alert("Permission required", "We need access to your camera.");
      return;
    }

    const result = await ExpoImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      {imageUri && <Text>{imageUri}</Text>}
      {/* <Pressable onPress={pickFromGallery}>
        <Text>Pick from Gallery</Text>
      </Pressable>
      <Pressable onPress={takePhoto}>
        <Text>Take a Photo</Text>
      </Pressable> */}
      <Button title="Pick from Gallery" onPress={pickFromGallery} />
      <Button title="Take a Photo" onPress={takePhoto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
});
