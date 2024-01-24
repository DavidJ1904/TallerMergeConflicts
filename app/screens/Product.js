import { View, Text, StyleSheet, Button } from "react-native";

export const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a mi tienda, soy Ariel Alomoto</Text>
      <Text>Productos de ventas</Text>
      <Text style={styles.producto1}>L/C NORMA </Text>
      <Text style={styles.producto2}>ACAD NORMA </Text>
      <Text style={styles.producto3}>CART BRIST A4 </Text>
      <Button
        title="HOME"
        onPress={() => {
          navigation.navigate("WellcomeAriel");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  producto1: {
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  producto2: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  producto3: {
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
