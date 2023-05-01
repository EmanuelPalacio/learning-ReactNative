import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyledBtn, StyledInput, StyledText } from "../components/styles/index";
import theme from "../theme/theme";
import DeleteModal from "../components/modals/DeleteModal";

export default function ListScreen() {
  const [note, setNote] = useState("");
  const [noteDelete, setNoteDelete] = useState("");
  const [notes, setNotes] = useState([]);
  const [modal, setModal] = useState(false);
  const handleNote = (text) => {
    setNote(text);
  };
  const handleBtn = () => {
    note !== "" && setNotes([...notes, note]);
    setNote("");
  };
  const viewModal = (index) => {
    index && setNoteDelete(index);
    setModal(!modal);
  };
  const deleteNote = () => {
    notes.splice(noteDelete, 1);
    setNotes(notes);
    setModal(!modal);
    setNoteDelete("");
  };
  return (
    <>
      <DeleteModal
        visible={modal}
        viewModal={viewModal}
        deleteNote={deleteNote}
      />
      <View style={styles.container}>
        <View style={styles.send}>
          <StyledInput
            placeholder="Escribe una nota"
            onChangeText={handleNote}
            value={note}
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
            <TouchableOpacity
              style={styles.note}
              key={index}
              onPress={() => viewModal(index)}
            >
              <AntDesign
                name="delete"
                size={20}
                color="black"
                style={styles.delete}
              />

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
    position: "relative",
    width: 300,
    minHeight: 100,
    padding: 20,
    backgroundColor: `rgb(${theme.colors.secondary})`,
  },
  delete: {
    position: "absolute",
    right: 5,
    top: 5,
  },
});
