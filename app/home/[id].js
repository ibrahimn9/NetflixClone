import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Stack } from "expo-router";
import { SIZES } from "../../constants/theme";
import images from "../../constants/images";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../components/home/home.style";
import { Header, Menu, PosterLoading, Poster } from "../../components";

import { useEffect, useState } from "react";
import { getTrendingThisWeek } from "../../services/getTrendingThisWeek";
import { getPopular } from "../../services/getPopular";
import { getTvShows } from "../../services/getTvShows";
import axios from "axios";

console.reportErrorsAsExceptions = false;

export default function home() {
  const [trending, setTrending] = useState([]);
  const [trendingHeader, setTrendingHeader] = useState();
  const [popular, setPopular] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const res1 = await getTrendingThisWeek();
    setTrending(res1);
    setTrendingHeader(res1[0]);
    const res2 = await getPopular();
    setPopular(res2);
    const res3 = await getTvShows();
    setTvShows(res3);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SafeAreaView>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#000000" },
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => (
              <Image
                source={images.logoLettermark}
                resizeMode="contain"
                style={{ width: SIZES.xxLarge }}
              />
            ),
            headerRight: () => (
              <View
                style={{
                  flexDirection: "row",
                  gap: 15,
                  alignItems: "center",
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={images.global}
                    resizeMode="contain"
                    style={{ width: SIZES.xxLarge }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={images.avatar1}
                    resizeMode="contain"
                    style={{ width: SIZES.xxLarge }}
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <View style={styles.navBarCountainer}>
          <View
            style={{
              height: 50,
              position: "absolute",
              top: 0,
              width: "100%",
              padding: 0,
              zIndex: 0,
            }}
          >
            <LinearGradient
              colors={[
                "rgba(0, 0, 0, 1)",
                "rgba(0, 0, 0, 0.2)",
                "rgba(0, 0, 0, 0.1)",
                "rgba(0, 0, 0, 0)",
              ]}
              locations={[0, 0.6, 0.7, 0.8]}
              style={{ flex: 1 }}
            />
          </View>
          <View style={styles.navBarItems}>
            <TouchableOpacity>
              <Text style={styles.navText}>TV Shows</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navText}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navText}>Categories</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ top: -20 }}>
          <View
            style={{
              width: "100%",
              backgroundColor: "#000000",
              marginBottom: 30,
            }}
          >
            <Header header={trendingHeader} />
            <View
              style={{
                backgroundColor: "#000000",
                width: "100%",
                padding: SIZES.large,
              }}
            >
              <View>
                <Text style={styles.sectionTitle}>Trending Now</Text>
                <ScrollView horizontal>
                  {isLoading ? (
                    <View style={styles.cardsContainer}>
                      <PosterLoading />
                      <PosterLoading />
                      <PosterLoading />
                      <PosterLoading />
                      <PosterLoading />
                    </View>
                  ) : (
                    <View style={styles.cardsContainer}>
                      {trending.map((poster, index) => (
                        <TouchableOpacity>
                          <Poster poster={poster} key={index} />
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </ScrollView>
              </View>
              <View>
                <Text style={styles.sectionTitle}>Popular on Netflix</Text>
                <ScrollView horizontal>
                  {isLoading ? (
                    <View style={styles.cardsContainer}>
                      <PosterLoading />
                      <PosterLoading />
                      <PosterLoading />
                      <PosterLoading />
                      <PosterLoading />
                    </View>
                  ) : (
                    <View style={styles.cardsContainer}>
                      {popular.map((poster, index) => (
                        <TouchableOpacity>
                          <Poster poster={poster} key={index} />
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </ScrollView>
              </View>
              <View>
                <Text style={styles.sectionTitle}>TV Shows</Text>
                <ScrollView horizontal>
                  {isLoading ? (
                    <View style={styles.cardsContainer}>
                      <PosterLoading />
                      <PosterLoading />
                      <PosterLoading />
                      <PosterLoading />
                      <PosterLoading />
                    </View>
                  ) : (
                    <View style={styles.cardsContainer}>
                      {tvShows.map((poster, index) => (
                        <TouchableOpacity>
                          <Poster poster={poster} key={index} />
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Menu />
    </>
  );
}
