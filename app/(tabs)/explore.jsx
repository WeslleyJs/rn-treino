import { useState, useContext } from "react";
import { StyleSheet, View, TextInput, Text, FlatList } from "react-native";
import { ItemContext } from "../../context/ItemContext";

export default function TabTwoScreen() {
  const [cod, onChangeCod] = useState();
  const { listItem } = useContext(ItemContext); // Corrigido aqui

  console.log("aqui", listItem);

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCod}
        value={cod}
        placeholder="CNPJ"
        keyboardType="numeric"
      />
      <FlatList
        data={listItem}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      {/* Outros componentes e lógica aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
  },
});
