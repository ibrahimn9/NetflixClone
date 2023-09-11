import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import images from "../../constants/images";
import styles from "./header.style";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SIZES } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { getGenres } from "../../utils/getGenres";

const Header = ({ header }) => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{ width: "100%", justifyContent: "center", height: "100%" }}
        >
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original${header?.backdrop_path}`,
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.categoriesContainer}>
            {header && (
              <Text style={styles.detailsText}>
                {getGenres(
                  header?.genre_ids.slice(0, 2),
                  header?.media_type
                ).map((genre, index) =>
                  index !== 1 ? ` ${genre} -` : ` ${genre}`
                )}
              </Text>
            )}
          </View>
          <View
            style={{ ...styles.categoriesContainer, marginTop: SIZES.medium }}
          >
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Ionicons name="add" size={30} color="white" />
              <Text style={{ ...styles.detailsText, fontSize: SIZES.medium }}>
                My List
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.playBtn}>
              <Foundation name="play" size={30} color="black" />
              <Text
                style={{
                  ...styles.detailsText,
                  fontSize: SIZES.medium,
                  color: "black",
                }}
              >
                Play
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Feather name="info" size={30} color="white" />
              <Text style={{ ...styles.detailsText, fontSize: SIZES.medium }}>
                My List
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            ...styles.detailsContainer,
            zIndex: 10,
            height: 100,
            width: "100%",
            padding: 0,
          }}
        >
          <LinearGradient
            colors={[
              "rgba(0, 0, 0, 0)",
              "rgba(0, 0, 0, 0.1)",
              "rgba(0, 0, 0, 0.2)",
              "rgba(0, 0, 0, 1)",
            ]}
            locations={[0, 0.1, 0.15, 0.8]}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </>
  );
};

export default Header;
