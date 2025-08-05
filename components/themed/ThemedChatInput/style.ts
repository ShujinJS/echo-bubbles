import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  chatInput: {
    minWidth: 100,
    minHeight: 75,
    padding: 20,
    // alignSelf: "flex-start", // depends the sender
  },
  chatMessageWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    // marginLeft: 20, // depends the sender
    borderWidth: 1,
    borderRadius: 20,
  },
  chatMessage: {
    fontSize: 16,
    padding: 10,
  },
  senderWrapper: {
    // flexDirection: "row", // depends the sender
    alignItems: "center",
    marginBottom: 15,
  },
  senderImage: {
    width: 35,
    height: 35,
    borderRadius: "5em",
  },
  senderName: {
    marginLeft: 10,
  },
});
