import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import TestImg from "../../assets/icon.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={TestImg} style={styles.img} />
      <Text style={styles.title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
        repudiandae.
      </Text>
      <Text style={{ marginTop: 100, marginBottom: 30 }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus commodi
        doloribus temporibus nemo esse dolores tenetur quod non distinctio, unde
        modi accusantium, vero ab perspiciatis reiciendis. Aliquam at quidem
        labore cumque eveniet doloribus dignissimos error, fugiat facilis porro!
        Nobis quibusdam fugit ipsam sequi quasi! Odit, itaque. Itaque
        consequuntur iure esse.
      </Text>

      <View style={styles.card}>
        <Text>hello, this is a card</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 8,
    margin: 10,
    width: "90%",
    alignItems: "center",
    boxShadow: "4px 4px rgba(0,0,0, 0.1)",
  },
  img: {
    height: 100,
    width: 100,
    marginVertical: 50,
    marginHorizontal: 100,
  },
});
