// React Native
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "react-native-reanimated";
// Expo
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
// Tanstack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Hooks
import { useColorScheme } from "@/hooks/useColorScheme";
import AuthProvider from "../context/AuthContext";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const queryClient = new QueryClient();

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Slot />
          <StatusBar style="auto" />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
