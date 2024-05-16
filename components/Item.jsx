import { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";

import { ItemContext } from "../context/ItemContext";

const Lista = ({ title }) => {
  const [inpt, setInpt] = useState(false);
  const { listItem, setListItem } = useContext(ItemContext);

  const handleCheck = (value, isChecked) => {
    if (isChecked) {
      setListItem([...listItem, value]);
    } else {
      setListItem(listItem.filter((item) => item !== value));
    }
  };

  return (
    <View style={{ width: "100%" }}>
      <View style={styles.table}>
        <CheckBox
          value={inpt}
          onValueChange={(isChecked) => {
            setInpt(isChecked);
            handleCheck(`${title.item.codigo} - ${title.item.desc}`, isChecked);
          }}
          style={styles.checkbox}
        />
        <Text>{title.item.codigo}</Text>
        <Text style={styles.desc}>{title.item.desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
    alignItems: "center",
    width: "100%",
    borderColor: "black",
    borderBottomWidth: 0.5,
    padding: 10,
    marginTop: 10,
  },
  desc: {
    width: "50%",
  },
  checkbox: {
    marginRight: 10,
  },
});

export default Lista;
