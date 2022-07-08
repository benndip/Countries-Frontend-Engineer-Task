import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 20,
  },
  header: {
    fontSize: 16,
    backgroundColor: "#fff",
    fontWeight: "bold",
  },
  sectionList: {
    alignSelf: "center",
    width: "95%",
    paddingHorizontal: 10,
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
});

export default styles;
