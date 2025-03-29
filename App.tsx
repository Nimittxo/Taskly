import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={
          styles.itemContainer
          //borderBottomWidth: 1,
          //borderBottomColor: "#1a759f",
          // backgroundColor: "pink",
          //paddingHorizontal: 8,
          //paddingVertical: 16,
        }
      >
        <Text style={styles.itemText}>Coffee</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#1a759f",
    //backgroundColor: "pink",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
});
