import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { FONT, COLORS, SIZES } from "../constants/theme";
import images from "../constants/images";
import { Ionicons } from "@expo/vector-icons";

const Welcome = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{ backgroundColor: "#000000", flex: 1, alignItems: "center" }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={images.logoWordmark}
            style={{ marginTop: 70, width: "60%", height: 60 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.accountContainer}>
          <TouchableOpacity
            style={styles.accountWrapper}
            onPress={() => router.push("/home/adults")}
          >
            <Image source={images.avatar1} style={styles.accountImg} />
            <Text style={styles.accountText}>Emenalo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.accountWrapper}
            onPress={() => router.push("/home/adults")}
          >
            <Image source={images.avatar2} style={styles.accountImg} />
            <Text style={styles.accountText}>onyka</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.accountWrapper}
            onPress={() => router.push("/home/adults")}
          >
            <Image source={images.avatar3} style={styles.accountImg} />
            <Text style={styles.accountText}>Themla</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.accountWrapper}
            onPress={() => router.push("/home/kids")}
          >
            <Image source={images.avatar4} style={styles.accountImg} />
            <Text style={styles.accountText}>Kids</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountWrapper}>
            <Ionicons name="ios-add-circle-sharp" size={40} color="white" />
            <Text style={styles.accountText}>Add profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "70%",
    margin: "auto",
    height: 1000,
  },
  accountContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 100,
    justifyContent: "space-between",
  },
  accountWrapper: {
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SIZES.large,
  },
  accountImg: {
    width: "100%",
    aspectRatio: "1/1",
  },
  accountText: {
    color: "white",
    fontSize: SIZES.medium,
    marginTop: SIZES.small,
  },
});

export default Welcome;

