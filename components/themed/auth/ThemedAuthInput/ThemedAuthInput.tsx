import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { SafeAreaView, TextInput, View } from "react-native";
import { styles } from "./style";

export interface ThemedAuthInputProps {
  value: string;
  onValueChange: (param: string) => void;
  lightColor?: string;
  darkColor?: string;
  inputLabel: string;
  inputPlaceholder: string;
  inputType: "ascii-capable" | "numeric" | "email-address";
  isMasked?: boolean;
}

export function ThemedAuthInput({
  value,
  onValueChange,
  lightColor,
  darkColor,
  inputLabel,
  inputPlaceholder,
  inputType,
  isMasked = false,
}: ThemedAuthInputProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

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
            value={value}
            onChangeText={onValueChange}
            placeholder={inputPlaceholder}
            autoCapitalize={isMasked ? "none" : "sentences"}
            secureTextEntry={isMasked}
            autoCorrect={isMasked}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
