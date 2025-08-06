import { useThemeColor } from "@/hooks/useThemeColor";
import { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "./style";

export interface ThemedChatInputProps {
  lightColor?: string;
  darkColor?: string;
}

export function ThemedChatInput({
  lightColor,
  darkColor,
}: ThemedChatInputProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    console.log("message is sent");
  };

  return (
    <SafeAreaView style={styles.chatInputContainer}>
      <View style={styles.chatInputWrapper}>
        <TextInput
          style={[{ color }, styles.chatInput]}
          value={inputText}
          onChangeText={setInputText}
          placeholder="..."
        />
        <Pressable style={styles.sendBtn} onPress={handleSendMessage}>
          <Text style={styles.sendBtnIcon}>+</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
