import { ApolloProvider } from "@apollo/client";
import React from "react";

import Home from "./screens/Home/Home.screen";
import client from "./utils/apolloClient";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
