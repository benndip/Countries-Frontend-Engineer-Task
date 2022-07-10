import { StyleSheet, StatusBar, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 20,
  },
  header: {
    fontSize: 16,
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
    position: "absolute",
    zIndex: 9999,
    top: height * 0.2,
    right: 10,
    height: 30,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  noItemsFoundText: {
    alignSelf: "center",
    fontSize: 22,
  },
});

export default styles;
