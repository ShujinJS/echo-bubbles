import axios from "axios";
import Constants from "expo-constants";

const { apiBaseUrl } = Constants.expoConfig?.extra ?? {};

console.log("apibaseurl: ", apiBaseUrl);
console.log("Constants: ", Constants.expoConfig?.extra);

export const api = axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000,
});
