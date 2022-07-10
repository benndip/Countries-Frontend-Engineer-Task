import { Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./Filter.style";

const Filter = ({ items, onPress }) => {
  const changeFilter = (item) => onPress(item);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {items.map((item, index) => (
        <TouchableOpacity
          onPress={() => changeFilter(item)}
          key={index}
          style={styles.statusContainer}
        >
          <Text style={styles.statusText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filter;
