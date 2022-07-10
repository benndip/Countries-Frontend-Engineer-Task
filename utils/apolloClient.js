import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-us-west-2.graphcms.com/v2/cl5ejng21157r01t72knz3eg4/master",
  cache: new InMemoryCache(),
});

export default client;
