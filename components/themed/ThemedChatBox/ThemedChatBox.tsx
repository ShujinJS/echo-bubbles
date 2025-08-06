import { ThemedView } from "@/components/ThemedView";
import { Image, Text, View } from "react-native";
// Hooks
import { useThemeColor } from "@/hooks/useThemeColor";
import { styles } from "./style";

export interface ThemedChatBoxProps {
  sender: {
    senderName: string;
    senderImage: string;
    isSenderUser: boolean; // TODO: REMOVE AFTER AUTH
  };
  message: string;
  lightColor?: string;
  darkColor?: string;
}

export function ThemedChatBox({
  message,
  sender: { senderImage, senderName, isSenderUser },
  lightColor,
  darkColor,
}: ThemedChatBoxProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <View style={styles(isSenderUser).chatMessageContainer}>
      <View style={styles(isSenderUser).senderWrapper}>
        <Image
          style={styles(isSenderUser).senderImage}
          source={{ uri: senderImage }}
        />
        <Text
          style={[
            {
              color,
            },
            styles(isSenderUser).senderName,
          ]}
        >
          {senderName}
        </Text>
      </View>
      <ThemedView style={styles(isSenderUser).chatMessageWrapper}>
        <Text style={[styles(isSenderUser).chatMessage]}>{message}</Text>
      </ThemedView>
    </View>
  );
}
