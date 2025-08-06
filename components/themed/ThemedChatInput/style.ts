import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  chatInputContainer: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#5c7587",
  },
  chatInputWrapper: {
    width: "80%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  chatInput: {
    width: "80%",
    padding: 10,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "#ecdce1",
    color: "#ecdce1",
  },
  sendBtn: {
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderRadius: 40,
    borderColor: "#ecdce1",
    backgroundColor: "#ecdce1",
  },
  sendBtnIcon: {
    fontSize: 20,
    color: "#5c7587",
  },
});
