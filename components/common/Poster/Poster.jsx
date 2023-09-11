import { View, Text, Image } from "react-native";
import styles from "./poster.style";

const Poster = ({ poster }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${poster.poster_path}`,
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
};

export default Poster;
