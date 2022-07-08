import React from "react";
import { View, Text } from "react-native";

import styles from "./Item.style";

const Item = ({ item }) => {
  const { name, state, type } = item;
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text>{state}</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text>{name}</Text>
        <Text>{type}</Text>
      </View>
    </View>
  );
};

export default Item;
