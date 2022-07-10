import React from "react";
import { View, Text, Image } from "react-native";
import NumberFormat from "react-number-format";

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
        <Text>
          Population:{" "}
          <NumberFormat
            value={population}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value, props) => <Text {...props}>{value}</Text>}
          />
        </Text>
        <Text>Region: {region}</Text>
        <Text>Capital: {capital}</Text>
      </View>
    </View>
  );
};

export default Item;
