import { Image, Text, View } from "react-native";
import { styles } from "./style";

export default function ThemedChatSender() {
  const sender = {
    senderName: "Uğur Yıldırım",
    senderImage:
      "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
  };

  const { senderName, senderImage } = sender;

  return (
    <View style={styles.senderContainer}>
      <View style={styles.senderInfoWrapper}>
        <Image style={styles.senderImage} source={{ uri: senderImage }} />
        <Text style={styles.senderName}>{senderName}</Text>
      </View>
    </View>
  );
}
