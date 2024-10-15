import React, { useState } from "react";

import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={welcomeStyles.container}>
      <ScrollView
        style={{ flex: 1 }}
        // indicatorStyle={"white"}
        keyboardDismissMode="on-drag"
        // keyboardDismissMode="none"
        indicatorStyle={"black"}
      >
        <Text style={welcomeStyles.headerText}>Welcome to Little Lemon</Text>
        <Text style={welcomeStyles.text}>
          Little Lemon is a charming neibhorhood bistro that serves simple food
          and classic food in a lively but casual environment. we would love to
          hear more about your experience with us!
        </Text>
      </ScrollView>
    </View>
  );
}

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    color: "black",
    padding: 20,
    marginVertical: 8,
    textAlign: "center",
  },
  userInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#F4CE14",
  },
});
