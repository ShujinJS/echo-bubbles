import { ThemedChatInput } from "@/components/themed/ThemedChatInput/ThemedChatInput";
import { StyleSheet, View } from "react-native";

export default function ChatScreen() {
  return (
    <View style={styles.chatContainer}>
      <ThemedChatInput
        message="test chat https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vW"
        sender={{
          senderImage:
            "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
          senderName: "Uğur Yıldırım",
          isSenderUser: true,
        }}
      />

      <ThemedChatInput
        message="test chat https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vW"
        sender={{
          senderImage:
            "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
          senderName: "Uğur Yıldırım",
          isSenderUser: false,
        }}
      />

      <ThemedChatInput
        message="test chat https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vW"
        sender={{
          senderImage:
            "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
          senderName: "Uğur Yıldırım",
          isSenderUser: false,
        }}
      />

      <ThemedChatInput
        message="test chat https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vW"
        sender={{
          senderImage:
            "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
          senderName: "Uğur Yıldırım",
          isSenderUser: true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chatContainer: {},
});
