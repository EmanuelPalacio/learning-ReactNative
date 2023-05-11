import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StyledText } from "../components/styles/index";
import theme from "../theme/theme";

export default function FavoriteList({ notes, viewModal }) {
  const favoriteNotes = notes.filter((e) => e.favorite === true);
  return (
    <View style={styles.container}>
      <StyledText fontSize="title">Favoritos</StyledText>
      <FlatList
        contentContainerStyle={styles.containerList}
        data={favoriteNotes}
        keyExtractor={(item) => item.noteId}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.note}
            onPress={() => viewModal(item.noteId)}
          >
            <AntDesign
              name="delete"
              size={20}
              color="black"
              style={styles.delete}
            />
            <StyledText color="third" fontSize="subheading">
              {item.note}
            </StyledText>
          </TouchableOpacity>
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
  note: {
    position: "relative",
    width: 300,
    minHeight: 100,
    padding: 20,
    backgroundColor: theme.colors.secondary,
  },
  delete: {
    position: "absolute",
    right: 5,
    top: 5,
  },
});
