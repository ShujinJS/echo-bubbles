import { ThemedChatBox } from "@/components/themed/ThemedChatBox/ThemedChatBox";
import { ThemedChatInput } from "@/components/themed/ThemedChatInput/ThemedChatInput";
import ThemedChatSender from "@/components/themed/ThemedChatSender/ThemedChatSender";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function ChatScreen() {
  const messages = [
    {
      message:
        "test chat https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vW",
      sender: {
        senderImage:
          "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
        senderName: "Uğur Yıldırım",
        isSenderUser: false,
      },
    },
    {
      message:
        "test chat https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vW",
      sender: {
        senderImage:
          "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
        senderName: "Uğur Yıldırım",
        isSenderUser: true,
      },
    },
    {
      message:
        "test chat https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vW",
      sender: {
        senderImage:
          "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
        senderName: "Uğur Yıldırım",
        isSenderUser: false,
      },
    },
    {
      message:
        "test chat https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vW",
      sender: {
        senderImage:
          "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
        senderName: "Uğur Yıldırım",
        isSenderUser: false,
      },
    },
    {
      message:
        "test chat https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vW",
      sender: {
        senderImage:
          "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
        senderName: "Uğur Yıldırım",
        isSenderUser: true,
      },
    },
    {
      message:
        "test chat https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vW",
      sender: {
        senderImage:
          "https://lh3.googleusercontent.com/ogw/AF2bZyjlLXQS9YtdarQZfIWAOJCn4c2vWhTImP10p3i1C93o6n0=s32-c-mo",
        senderName: "Uğur Yıldırım",
        isSenderUser: false,
      },
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemedChatSender />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        >
          <View style={{ flex: 1 }}>
            <FlatList
              contentContainerStyle={{ padding: 10 }}
              inverted // optional: newest messages at bottom
              data={messages}
              renderItem={({ item }) => (
                <ThemedChatBox message={item.message} sender={item.sender} />
              )}
            />
          </View>

          <View>
            <ThemedChatInput />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  chatContainer: {},
  chatBoxWrapper: {},
  chatInputWrapper: {},
});
