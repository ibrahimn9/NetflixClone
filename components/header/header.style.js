import { StyleSheet } from "react-native";
import { SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    position: "relative",
  },
  detailsContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "auto",
    padding: SIZES.large,
    zIndex: 100,
  },
  categoriesContainer: {
    flexDirection: "row",
    gap: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsText: {
    color: "white",
    fontSize: SIZES.medium,
    fontWeight: "500",
  },
  playBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.medium,
    paddingLeft: SIZES.large,
    paddingRight: SIZES.large,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "white",
    borderRadius:5, 
  }, 
});

export default styles;
