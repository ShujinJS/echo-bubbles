import "dotenv/config";
import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "echo-bubbles",
  slug: "echo-bubbles",
  version: "1.0.0",
  android: {
    package: "com.shujin.echobubbles", // ✅ Required
  },
  extra: {
    apiBaseUrl: process.env.API_BASE_URL,
    apiEndpointsCreateUser: process.env.API_ENDPOINTS_CREATE_USER,
  },
});
