declare module "expo-constants" {
  export interface Extra {
    apiBaseUrl?: string;
    apiEndpointsCreateUser?: string;
  }

  export interface ExpoConfig {
    extra?: Extra;
  }

  export interface ConstantsType {
    expoConfig?: ExpoConfig;
  }

  const constants: ConstantsType;
  export default constants;
}
