import { View, Text, StyleSheet, Button } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a mi aplicación mi nombre es David Jima</Text>
      <Text>Espero que te guste!</Text>

      <View style={styles.botones}>
        <View style={styles.boton1}>
          <Button
            title="CONTACTS"
            onPress={() => {
              navigation.navigate("CallNumber");
            }}
          />
        </View>

        <Button
          title="PRODUCTOS"
          onPress={() => {
            navigation.navigate("ProductNavigation");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E36E55",
    alignItems: "center",
    justifyContent: "center",
  },
  botones: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "green",
  },
  boton1: {
    marginRight: 60,
  },
});
