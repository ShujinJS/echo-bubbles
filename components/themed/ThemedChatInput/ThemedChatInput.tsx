import { ThemedView } from "@/components/ThemedView";
import { Image, Text, View } from "react-native";
// Hooks
import { useThemeColor } from "@/hooks/useThemeColor";
import { styles } from "./style";

export interface ThemedChatInputProps {
  sender: {
    senderName: string;
    senderImage: string;
    isSenderUser: boolean; // TODO: REMOVE AFTER AUTH
  };
  message: string;
  lightColor?: string;
  darkColor?: string;
}

export function ThemedChatInput({
  message,
  sender: { senderImage, senderName, isSenderUser },
  lightColor,
  darkColor,
}: ThemedChatInputProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <View
      style={[
        { alignSelf: isSenderUser ? "flex-end" : "flex-start" },
        styles.chatInput,
      ]}
    >
      <View
        style={[
          { flexDirection: isSenderUser ? "row-reverse" : "row" },
          styles.senderWrapper,
        ]}
      >
        <Image style={styles.senderImage} source={{ uri: senderImage }} />
        <Text
          style={[
            {
              color,
              marginRight: isSenderUser ? 10 : 0,
              marginLeft: isSenderUser ? 0 : 10,
            },
            styles.senderName,
          ]}
        >
          {senderName}
        </Text>
      </View>
      <ThemedView style={styles.chatMessageWrapper}>
        <Text style={[{ color }, styles.chatMessage]}>{message}</Text>
      </ThemedView>
    </View>
  );
}
