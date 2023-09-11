import { StyleSheet } from "react-native";
import { SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  navBarCountainer: {
    height: 20,
    zIndex: 100,
  },
  navBarItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SIZES.large,
  },
  navText: {
    color: "white",
    fontWeight: "500",
  },
  cardsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.small,
    marginBottom: 50,
  },
  sectionTitle: {
    color: "white",
    fontSize: SIZES.large,
    fontWeight: "700",
    marginBottom: SIZES.small
  }
});

export { styles };
