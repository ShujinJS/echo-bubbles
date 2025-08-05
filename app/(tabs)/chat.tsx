import { ThemedChatBox } from "@/components/themed/ThemedChatBox/ThemedChatBox";
import { ThemedChatInput } from "@/components/themed/ThemedChatInput/ThemedChatInput";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import {} from "react-native-gesture-handler";

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.chatContainer}>
      <ScrollView style={styles.chatBoxWrapper}>
        <ThemedChatBox
          message="test chat https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vW"
          sender={{
            senderImage:
              "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
            senderName: "Uğur Yıldırım",
            isSenderUser: true,
          }}
        />

        <ThemedChatBox
          message="test chat https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vW"
          sender={{
            senderImage:
              "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
            senderName: "Uğur Yıldırım",
            isSenderUser: false,
          }}
        />

        <ThemedChatBox
          message="test chat https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vW"
          sender={{
            senderImage:
              "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
            senderName: "Uğur Yıldırım",
            isSenderUser: false,
          }}
        />

        <ThemedChatBox
          message="test chat https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vW"
          sender={{
            senderImage:
              "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
            senderName: "Uğur Yıldırım",
            isSenderUser: true,
          }}
        />

        <ThemedChatBox
          message="test chat https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vW"
          sender={{
            senderImage:
              "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
            senderName: "Uğur Yıldırım",
            isSenderUser: false,
          }}
        />
        <View style={styles.chatInputWrapper}>
          <ThemedChatInput />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chatContainer: {},
  chatBoxWrapper: {},
  chatInputWrapper: {},
});
