import { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  FlatList,
} from "react-native";
import { ItemProvider } from "../../context/ItemContext";
import Item from "../../components/Item";

import data from "@/data/data";

export default function TabTwoScreen() {
  const [cod, onChangeCod] = useState("");
  const [list, setList] = useState([]);
  const Clean = useCallback(() => {
    onChangeCod("");
    setList(null);
  }, []);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!cod || cod.length === 1) {
        onChangeCod(null);
        return;
      }
      const results = data.filter((c) =>
        c.codigo.toUpperCase().includes(cod.toUpperCase())
      );
      setList(results);
    },
    [cod]
  );
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <SafeAreaView style={styles.area}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeCod}
            value={cod}
            placeholder="Cód. produto"
          />
        </SafeAreaView>
        <View style={styles.btnArea}>
          <Button title="X" onPress={Clean} />
          <Button title="Enviar" onPress={handleSubmit} />
        </View>
        <FlatList
          data={list}
          keyExtractor={(item) => String(item.codigo)}
          renderItem={(item) => <Item title={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    marginTop: 40,
  },
  container: {
    flex: 1,
    padding: 12,
  },
  area: {
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  btnArea: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    gap: 10,
  },
});
