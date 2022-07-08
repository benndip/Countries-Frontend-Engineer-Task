import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SectionList,
  ActivityIndicator,
  TextInput,
} from "react-native";

import styles from "./Home.style";
import client from "../../utils/apolloClient";
import { gql } from "@apollo/client";

import Item from "../../components/Item/Item.component";
import Filter from "../../components/Filter/Filter.component";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [searChTerm, setSearChTerm] = useState("");

  const fetchTransactions = async () => {
    const query = gql`
      {
        transaction_histories {
          id
          name
          type
          state
          date
        }
      }
    `;
    const { data } = await client.query({ query });

    const { transaction_histories } = data;

    client.writeQuery({
      query,
      data,
    });

    // Grouping transactions according to date created
    const transactions_object = transaction_histories.reduce((prev, curr) => {
      prev[curr.date] = prev[curr.date] || [];
      prev[curr.date].push(curr);
      return prev;
    }, Object.create(null));

    let finalArray = Object.keys(transactions_object).map((key, index) => {
      return { title: key, data: transactions_object[key] };
    });

    setTransactions(finalArray);
  };

  const filterBySearch = async () => {
    const FILTER_BY_SEARCH = gql`
      {
        transaction_histories(where: { name_contains: "${searChTerm}") {
          id
          name
        }
      }
    `;

    const { data } = await client.query({
      query: FILTER_BY_SEARCH,
    });

    console.log(data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => {
          setSearChTerm(text);
          filterBySearch();
        }}
        style={styles.input}
        placeholder="Search..."
      />
      <Filter />
      <SectionList
        showsVerticalScrollIndicator={false}
        style={styles.sectionList}
        sections={transactions}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>
            {new Date(title).toLocaleDateString()}
          </Text>
        )}
        ListEmptyComponent={<ActivityIndicator size={32} color="indigo" />}
      />
    </View>
  );
};

export default Home;
