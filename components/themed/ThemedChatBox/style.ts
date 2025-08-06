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
      marginLeft: isSenderUser ? 0 : 20,
      marginRight: isSenderUser ? 20 : 0,
      paddingVertical: 5,
      paddingHorizontal: 10,
      alignSelf: isSenderUser ? "flex-end" : "flex-start",
      backgroundColor: isSenderUser ? "#016554" : "#0e2f44",
      borderRadius: 20,
      boxShadow:
        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
    },
    chatMessage: {
      fontSize: 16,
      padding: 10,
      color: "#fff",
    },
    senderWrapper: {
      alignItems: "center",
      marginBottom: 8,
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
