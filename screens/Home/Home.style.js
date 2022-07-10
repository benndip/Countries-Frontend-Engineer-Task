import { StyleSheet, StatusBar, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 20,
  },
  header: {
    fontSize: 16,
    backgroundColor: "#fff",
    fontWeight: "bold",
    color: "#5f27cd",
  },
  sectionList: {
    alignSelf: "center",
    width: "95%",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    alignSelf: "center",
    paddingLeft: 10,
    borderRadius: 25,
  },
  clearFilter: {
    color: "blue",
    position: "absolute",
    zIndex: 9999,
    top: -(height * 0.1),
    right: 10,
  },
});

export default styles;
