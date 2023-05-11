import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { StyledBtn, StyledInput, StyledText } from "../components/styles/index";
import theme from "../theme/theme";

export default function ListScreen({ notes, addNote, viewModal, favorite }) {
  const [note, setNote] = useState("");
  const handleNote = (text) => {
    setNote(text);
  };
  const setAndClearNote = () => {
    addNote(note);
    setNote("");
  };

  return (
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
          action={setAndClearNote}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.containerList}
        data={notes}
        keyExtractor={(item) => item.noteId}
        renderItem={({ item }) => (
          <View style={styles.note}>
            <TouchableOpacity
              style={styles.favorite}
              onPress={() => favorite(item.noteId)}
            >
              <FontAwesome
                name="star"
                size={20}
                color={
                  item.favorite ? theme.colors.third : theme.colors.primary
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.delete}
              onPress={() => viewModal(item.noteId)}
            >
              <AntDesign name="delete" size={20} color="black" />
            </TouchableOpacity>
            <StyledText color="third" fontSize="subheading">
              {item.note}
            </StyledText>
          </View>
        )}
      />
    </View>
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
    backgroundColor: theme.colors.secondary,
  },
  delete: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  favorite: {
    position: "absolute",
    top: 5,
    right: 40,
  },
});
