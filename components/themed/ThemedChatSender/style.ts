import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  senderContainer: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5c7587",
  },
  senderInfoWrapper: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  senderImage: {
    width: 35,
    height: 35,
    marginRight: 15,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#fff",
  },
  senderName: {
    color: "#fff",
  },
});
