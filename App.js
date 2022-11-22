import {
  ScrollView,
  View,
  SafeAreaView,
  Platform,
  Text,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor="black" />
      <ScrollView
        style={{
          marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
        }}
      >
        <View style={styles.header}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://ia.media-imdb.com/images/M/MV5BOTc2MzQ4MjAwM15BMl5BcG5nXkFtZTgwMzY2MzQ2OTE@._V1_.png",
            }}
          />
        </View>
        <View style={styles.presentation}>
          <Text style={styles.title}>Interstellar</Text>
          <Text style={styles.information}>
            2014 PG-13 2h 49min Adventure, Drama, Sci-Fi
          </Text>
          <View style={styles.centerDiv}>
            <View style={styles.leftDiv}>
              <Image
                style={styles.pictureFilm}
                source={require("./assets/film.jpg")}
              />
            </View>

            <View style={styles.rightDiv}>
              <Text style={styles.description}>
                A team of explorers travel trought a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <Button title="+ ADD TO WATCHLIST" style={styles.button} />
            </View>
            <View style={styles.endDiv}>
              <View style={styles.note}>
                <Entypo name="star" size={24} color="yellow" />
                <Text style={styles.bold}>8.6</Text>
                <Text style={styles.maxNote}>/10</Text>
                <Text style={styles.vote}>1.1M</Text>
              </View>
              <View style={styles.midle}>
                <EvilIcons name="star" size={24} color="white" />
                <Text style={styles.rate}>RATE THIS</Text>
              </View>
              <View style={styles.meta}>
                <View style={styles.box}>
                  <Text style={styles.textBox}>74</Text>
                </View>
                <Text style={styles.textMeta}>Metascore</Text>
                <Text style={styles.critic}> 46 critic reviews</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.casting}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    // width: 400,

    height: 60,
    backgroundColor: "grey",
  },
  tinyLogo: {
    height: 30,
    width: 50,
    marginLeft: 10,
    resizeMode: "cover",
    marginTop: 15,
  },

  presentation: {
    backgroundColor: "#212121",
    height: 400,
    marginBottom: 20,
  },

  title: {
    fontSize: 35,
    margin: 5,
    color: "white",
  },

  information: {
    color: "lightgray",
    margin: 5,
  },

  pictureFilm: {
    height: 150,
    width: 100,
  },

  description: {
    color: "white",
    marginBottom: 10,
  },

  centerDiv: {
    width: 250,
    flexDirection: "row",
  },
  button: {
    borderRadius: 3,
  },

  leftDiv: {
    marginHorizontal: 15,
    marginTop: 30,
  },

  rightDiv: {
    width: 230,
    marginTop: 30,
  },
  note: {},
  bold: {
    color: "white",
    fontWeight: "bold",
  },
  maxNote: {
    color: "white",
  },
  vote: {
    color: "silver",
  },
  rate: {
    color: "white",
  },
  box: {
    height: 20,
    width: 20,
    backgroundColor: "chartreuse",
    justifyContent: "center",
    alignItems: "center",
  },
  textMeta: {
    color: "white",
  },
  critic: {
    color: "silver",
  },
  casting: {
    backgroundColor: "#212121",
    height: 400,
  },
});
