import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.neutral.grey_dark_3,
    position: "absolute",
    bottom: 0,
    zIndex: 100000,
    height: "auto",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: SIZES.xSmall,
    justifyContent: "space-between",
  },
  menuText: {
    color: COLORS.neutral.grey,
    fontSize: SIZES.small,
    fontWeight: "600",
  }
});

export default styles
