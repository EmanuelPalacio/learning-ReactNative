import { StyleSheet, TouchableOpacity } from "react-native";
import { Modal } from "react-native";
import theme from "../../theme/theme";
import { View } from "react-native";
import { StyledText } from "../styles";

export default function DeleteModal({ deleteNote, viewModal, visible }) {
  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.content}>
          <StyledText fontSize="subheading" fontWeight="bold">
            ¿eliminar la nota?
          </StyledText>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={viewModal}>
              <StyledText fontSize="subheading" fontWeight="bold">
                Cancelar
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteNote}>
              <StyledText
                fontSize="subheading"
                fontWeight="bold"
                color="warning"
              >
                Eliminar
              </StyledText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: "80%",
    height: "40%",
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    shadowColor: theme.colors.third,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  buttons: {
    flexDirection: "row",
    gap: 20,
  },
});
