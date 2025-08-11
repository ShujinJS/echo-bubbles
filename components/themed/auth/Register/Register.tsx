import { Pressable, Text, View } from "react-native";
import { ThemedAuthInput } from "../ThemedAuthInput/ThemedAuthInput";
import { styles } from "./style";

export function Register() {
  const handleRegister = () => {
    console.log("register");
  };
  return (
    <View style={styles.registerWrapper}>
      <ThemedAuthInput
        inputLabel="Username/email"
        inputPlaceholder="Enter username or email"
        inputType={"ascii-capable"}
      />
      <ThemedAuthInput
        inputLabel="Password"
        inputPlaceholder="Enter password"
        inputType={"ascii-capable"}
        isMasked={true}
      />
      <Pressable style={styles.authBtn} onPress={handleRegister}>
        <Text>Register</Text>
      </Pressable>
    </View>
  );
}
