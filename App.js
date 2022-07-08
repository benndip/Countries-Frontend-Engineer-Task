import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "./screens/Home/Home.screen";
import client from "./utils/apolloClient";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
