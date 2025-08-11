import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useState } from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import { styles } from "./style";

export interface ThemedAuthInputProps {
  lightColor?: string;
  darkColor?: string;
  inputLabel: string;
  inputPlaceholder: string;
  inputType: "ascii-capable" | "numeric" | "email-address";
  isMasked?: boolean;
}

export function ThemedAuthInput({
  lightColor,
  darkColor,
  inputLabel,
  inputPlaceholder,
  inputType,
  isMasked = false,
}: ThemedAuthInputProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const [inputText, setInputText] = useState("");

  return (
    <SafeAreaView style={styles.authInputContainer}>
      <View style={styles.authInputWrapper}>
        <View style={styles.labelWrapper}>
          <ThemedText>{inputLabel}</ThemedText>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            keyboardType={inputType}
            style={[{ color }, styles.authInput]}
            value={inputText}
            onChangeText={setInputText}
            placeholder={inputPlaceholder}
            autoCapitalize={isMasked ? "none" : "sentences"}
            secureTextEntry={isMasked}
            autoCorrect={isMasked}
          />
        </View>

        {/* <Pressable style={styles.sendBtn} onPress={handleSendMessage}>
          <Text style={styles.sendBtnIcon}>+</Text>
        </Pressable> */}
      </View>
    </SafeAreaView>
  );
}
