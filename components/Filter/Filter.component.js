import { Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./Filter.style";

const statuses = ["Successful", "Failed", "Pending", "Canceled"];

const Filter = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {statuses.map((status, index) => (
        <TouchableOpacity key={index} style={styles.statusContainer}>
          <Text style={styles.statusText}>{status}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filter;
