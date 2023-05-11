import { SafeAreaView } from "react-native-safe-area-context";
import { statusBarHeight } from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import theme from "./theme/theme.js";
import ListScreen from "./screens/ListScreen";
import DeleteModal from "./components/modals/DeleteModal";
import StyledBtn from "./components/styles/StyledBtn.jsx";
import FavoriteList from "./screens/FavoriteList.jsx";

export default function App() {
  const noteId = uuid();
  const [notes, setNotes] = useState([]);
  const [modal, setModal] = useState(false);
  const [noteIdToDelete, setNoteIdToDelete] = useState("");
  const [screen, setScreen] = useState(true);

  const addNote = (note) => {
    note !== "" && setNotes([...notes, { noteId, note, favorite: false }]);
    console.log(notes);
  };
  const viewModal = (id) => {
    id && setNoteIdToDelete(id);
    setModal(!modal);
  };
  const setFavorite = (id) => {
    const note = notes.find((e) => e.noteId === id);
    note.favorite = !note.favorite;
    setNotes([...notes]);
    console.log(note);
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
      {screen ? (
        <ListScreen
          addNote={addNote}
          notes={notes}
          viewModal={viewModal}
          favorite={setFavorite}
        />
      ) : (
        <FavoriteList notes={notes} favorite={setFavorite} />
      )}
      {modal ? (
        <DeleteModal
          visible={modal}
          viewModal={viewModal}
          deleteNote={deleteNote}
        />
      ) : null}
      <StyledBtn
        text={screen ? "Ir a favoritos" : "Volver al inicio"}
        restStyleProps={styles.favoriteBtn}
        fontSize="subheading"
        action={() => setScreen(!screen)}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: statusBarHeight,
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
  favoriteBtn: {
    marginBottom: 10,
  },
});
