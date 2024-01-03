import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { colors, globalStyleSheet } from "../../utilites/Theme";
import Events from "../../../assets/Events";
import Website from "../../../assets/Website";
const DiscoverBar = () => {
  return (
    <View style={styles.DiscoverRow}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => Linking.openURL("https://isa.ualberta.ca/")}
      >
        <Website />

        <View style={styles.row}>
          <Text style={[globalStyleSheet.text, styles.label]}>ISA Website</Text>

          <Image
            source={require("../../../assets/Arrow.png")}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.container}
        onPress={() => Linking.openURL("https://isa.ualberta.ca/events")}
      >
        <Events />

        <View style={styles.row}>
          <Text style={[globalStyleSheet.text, styles.label]}>Events</Text>

          <Image
            source={require("../../../assets/Arrow.png")}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#FBFBFB",
    borderRadius: 15,
    marginTop: 8,
    marginRight: 16,
    flexGrow: 1,
    alignItems: "center",
    flex: 1,
    shadowOpacity: 0.7,
    shadowRadius: 2,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    elevation: 5,
    minWidth: '100px',
    maxWidth: '400px'
  },
  label: {
    fontSize: 16,
    color: colors.darkGray,
  },
  DiscoverRow: {
    flexDirection: "row",
    // marginLeft: 24,
    marginRight: 8,
    // justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    marginBotton: 12,
    marginTop: 8,
  },
  image: {
    marginTop: 6.5,
    marginLeft: 4.2,
  },
});

export default DiscoverBar;
