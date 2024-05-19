import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Image source={require("../images/pic2.jpg")} style={styles.img} />
      <Text style={styles.textStyle}>All Recipes all in one place </Text>
      <Text style={styles.txt2}>Cook like a pro chef now!</Text>
      <TouchableOpacity style={styles.tOp}
      onPress={() => navigation.navigate("RecipeList")}
      >
        <Text style={styles.tOpTxt}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  view: {
   // flex: 1,
    alignItems: "center",
  },
  img: {
    width: 350,
    height: 300,
    alignSelf: "center",
    // paddingTop: 150,
    marginTop: 160,
    borderRadius:50,
  },
  textStyle: {
    color: "#f96163",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 50,
  },
  txt2: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#3c444c",
    marginTop: 50,
  },
  tOp: {
    backgroundColor: "#f96163",
    borderRadius: 18,
    paddingVertical: 18,
    width: 185,
    alignItems: "center",
    marginTop: 100,
  },
  tOpTxt: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },
});
