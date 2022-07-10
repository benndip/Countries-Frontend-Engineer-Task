import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SectionList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import styles from "./Home.style";
import client from "../../utils/apolloClient";
import { gql } from "@apollo/client";

import Item from "../../components/Item/Item.component";
import Filter from "../../components/Filter/Filter.component";
import Search from "../../components/Search/Search.component";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearChTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchInitialCountries = async () => {
    setLoading(true);
    const query = gql`
      {
        countries {
          id
          name
          population
          region
          capital
          imgurl
          date
        }
      }
    `;
    const { data } = await client.query({ query });
    setCountries(data.countries);
    setLoading(false);
  };

  // Takes care of pagination
  const fetchNextCountries = async (after) => {
    setLoadingMore(true);
    const query = gql`
      {
        countries(after: "${after}") {
          id
          name
          population
          region
          capital
          imgurl
          date
        }
      }
    `;
    const { data } = await client.query({ query });
    setCountries((prev) => [...prev, ...data.countries]);
    setLoadingMore(false);
  };

  useEffect(() => {
    fetchInitialCountries();
  }, []);

  const data = Object.values(countries);

  const search_parameters = Object.keys(Object.assign({}, ...data));
  const filter_items = [...new Set(data.map((item) => item.region))];

  // Takes care of search
  const search = (items) => {
    return items.filter(
      (item) =>
        item.region.includes(filter) &&
        search_parameters.some((parameter) =>
          item[parameter].toString().toLowerCase().includes(searchTerm)
        )
    );
  };

  const changeFilter = (item) => {
    setFilter(item);
  };

  //  This function organizes the data in a format that suites the UI we want
  const organizer = (items) => {
    const object = items.reduce((prev, curr) => {
      prev[curr.date] = prev[curr.date] || [];
      prev[curr.date].push(curr);
      return prev;
    }, Object.create(null));

    const finalArray = Object.keys(object).map((key, index) => {
      return { title: key, data: object[key] };
    });

    return finalArray;
  };

  return (
    <View style={styles.container}>
      <Search onChangeText={(text) => setSearChTerm(text.toLowerCase())} />
      <Filter items={filter_items} onPress={changeFilter} />
      {filter.length > 0 && (
        <TouchableOpacity
          style={styles.clearFilter}
          onPress={() => setFilter("")}
        >
          <Text style={{ color: "#ee5253", fontWeight: "bold" }}>
            Clear filter
          </Text>
        </TouchableOpacity>
      )}
      <SectionList
        showsVerticalScrollIndicator={false}
        style={styles.sectionList}
        sections={organizer(search(countries))}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>
            {new Date(title).toLocaleDateString().replace(/\//g, "-")}
          </Text>
        )}
        ListEmptyComponent={
          !loading && (
            <Text style={styles.noItemsFoundText}>oops, no items found...</Text>
          )
        }
        onEndReached={
          () => fetchNextCountries(countries[countries.length - 1].id) //pagination initiated here.
        }
        onRefresh={() => fetchInitialCountries()}
        refreshing={loading}
      />
      {loadingMore && <Text style={styles.loadingMore}>Loading more...</Text>}
    </View>
  );
};

export default Home;
