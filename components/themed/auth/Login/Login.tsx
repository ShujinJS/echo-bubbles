import { View } from "react-native";
import { ThemedAuthInput } from "../ThemedAuthInput/ThemedAuthInput";

export function Login() {
  return (
    <View style={{ flex: 1 }}>
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
    </View>
  );
}
