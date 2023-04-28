import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { useState } from "react";
import { StyledBtn, StyledInput, StyledText } from "../components/styles/index";
import theme from "../theme/theme";
import DeleteModal from "../components/modals/DeleteModal";

export default function ListScreen() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const handleNote = (text) => {
    setNote(text);
  };
  const handleBtn = () => {
    note !== "" && setNotes([...notes, note]);
  };
  console.log(notes);
  return (
    <>
      <DeleteModal />
      <View style={styles.container}>
        <View style={styles.send}>
          <StyledInput
            placeholder="Escribe una nota"
            onChangeText={handleNote}
          />
          <StyledBtn
            text="agregar"
            type="primary"
            width="15%"
            action={handleBtn}
          />
        </View>
        <FlatList
          contentContainerStyle={styles.containerList}
          data={notes}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.note} key={index}>
              <StyledText color="third" fontSize="subheading">
                {item}
              </StyledText>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 30,
  },
  containerList: {
    minHeight: "100%",
    gap: 10,
    marginTop: 20,
  },
  send: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    width: "100%",
  },
  note: {
    width: 300,
    minHeight: 100,
    padding: 20,
    backgroundColor: `rgb(${theme.colors.secondary})`,
  },
});
