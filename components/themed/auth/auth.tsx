import { useState } from "react";
import { View } from "react-native";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import { styles } from "./style";

export function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <View style={styles.authContainer}>
      <View style={styles.authWrapper}>
        {isLogin ? <Login /> : <Register />}
      </View>
    </View>
  );
}
