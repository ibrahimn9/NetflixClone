import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./menuBar.style";
import {
  Foundation,
  FontAwesome5,
  Octicons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { COLORS } from "../../../constants/theme";

const Menu = ({ select }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Foundation name="home" size={30} color={COLORS.neutral.grey} />
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Octicons name="video" size={30} color={COLORS.neutral.grey} />
        <Text style={styles.menuText}>New & Hot</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <FontAwesome5 name="laugh-beam" size={30} color={COLORS.neutral.grey} />
        <Text style={styles.menuText}>Fast Laughs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Feather name="search" size={30} color={COLORS.neutral.grey} />
        <Text style={styles.menuText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <MaterialCommunityIcons
          name="download-circle-outline"
          size={30}
          color={COLORS.neutral.grey}
        />
        <Text style={styles.menuText}>Downloads</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
