import { View, Text, StyleSheet, Button } from "react-native";

export const Contacts = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Estoy en contact</Text>
      <Button
        title="HOME"
        onPress={() => {
          navigation.navigate("PhoneNumberNav");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
