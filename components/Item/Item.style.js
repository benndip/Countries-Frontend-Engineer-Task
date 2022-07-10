import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  imageContainer: {
    width: "20%",
    height: 60,
    overflow: "hidden",
  },
  dataContainer: {
    width: "70%",
    borderWidth: 0.4,
    padding: 5,
    borderRadius: 6,
    borderColor: "#ccc",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    opacity: 0.7,
  },
});

export default styles;
