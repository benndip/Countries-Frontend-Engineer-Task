import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./Item.style";

const Item = ({ item }) => {
  const { name, population, capital, region, imgurl } = item;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imgurl }} style={styles.image} />
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text>Population: {population}</Text>
        <Text>Region: {region}</Text>
        <Text>Capital: {capital}</Text>
      </View>
    </View>
  );
};

export default Item;
