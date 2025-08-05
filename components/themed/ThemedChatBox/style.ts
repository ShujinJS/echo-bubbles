import { StyleSheet } from "react-native";

export const styles = (isSenderUser = false) =>
  StyleSheet.create({
    chatMessageContainer: {
      minWidth: 100,
      minHeight: 75,
      padding: 20,
      alignSelf: isSenderUser ? "flex-end" : "flex-start",
    },
    chatMessageWrapper: {
      maxWidth: "70%",
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 20,
      marginLeft: isSenderUser ? 0 : 20,
      marginRight: isSenderUser ? 20 : 0,
      alignSelf: isSenderUser ? "flex-end" : "flex-start",
    },
    chatMessage: {
      fontSize: 16,
      padding: 10,
    },
    senderWrapper: {
      alignItems: "center",
      marginBottom: 15,
      flexDirection: isSenderUser ? "row-reverse" : "row",
    },
    senderImage: {
      width: 35,
      height: 35,
      borderRadius: 20,
    },
    senderName: {
      marginRight: isSenderUser ? 10 : 0,
      marginLeft: isSenderUser ? 0 : 10,
    },
  });
