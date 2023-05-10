import { SafeAreaView } from "react-native-safe-area-context";
import { statusBarHeight } from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import theme from "./theme/theme.js";
import ListScreen from "./screens/ListScreen";
import DeleteModal from "./components/modals/DeleteModal";

export default function App() {
  const noteId = uuid();
  const [notes, setNotes] = useState([]);
  const [modal, setModal] = useState(false);
  const [noteIdToDelete, setNoteIdToDelete] = useState("");

  const addNote = (note) => {
    note !== "" && setNotes([...notes, { noteId, note, favorite: false }]);
    console.log(notes);
  };
  const viewModal = (id) => {
    id && setNoteIdToDelete(id);
    setModal(!modal);
  };

  const deleteNote = () => {
    const index = notes.findIndex((e) => e.noteId === noteIdToDelete);
    notes.splice(index, 1);
    setNotes(notes);
    setModal(!modal);
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="light" />
      <ListScreen addNote={addNote} notes={notes} viewModal={viewModal} />
      {modal ? (
        <DeleteModal
          visible={modal}
          viewModal={viewModal}
          deleteNote={deleteNote}
        />
      ) : null}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: statusBarHeight,
    backgroundColor: theme.colors.primary,
  },
});
