import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image
} from "react-native";
import Header from "./components/Header";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    channelName: "Web Developer Blog",
    title: "React js видео",
    imageUrl: "http://i3.ytimg.com/vi/jT8wO8aKea0/hqdefault.jpg",
    channel: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Топ-7 плагинов",
    channelName: "Web Developer Blog",
    imageUrl: "http://i3.ytimg.com/vi/R1tRDrTYoGA/hqdefault.jpg",
    channel: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Уроки React Native",
    channelName: "Web Developer Blog",
    imageUrl: "http://i3.ytimg.com/vi/N-q8B0aXnwE/hqdefault.jpg",
    channel: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    id: "58694a0f-3da1-471f-bd96-11e29d72",
    title: "Wordpress",
    channelName: "Web Developer Blog",
    imageUrl: "http://i3.ytimg.com/vi/ogusjqOglZg/hqdefault.jpg",
    channel: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: "58694a0f-3d1f-bd96-145571e29d72",
    title: "React JS в одном видео",
    channelName: "Web Developer Blog",
    imageUrl: "http://i3.ytimg.com/vi/2fk-AYxwYKs/hqdefault.jpg",
    channel: "https://randomuser.me/api/portraits/men/4.jpg"
  }
];

function Item({ title, imageUrl, channel, channelName }) {
  return (
    <View style={styles.item}>
      <Image source={{ uri: imageUrl }} style={{ height: 225 }} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Image
            source={{ uri: channel }}
            style={{ height: 60, width: 60, borderRadius: 30, margin: 10 }}
          />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text
              style={{
                paddingLeft: 6,
                paddingTop: 4,
                color: "gray"
              }}
            >
              {channelName} . {parseInt(Math.random() * 1000)}K Views
            </Text>
            <Text
              style={{
                paddingLeft: 6,
                marginBottom: 10,
                color: "gray"
              }}
            >
              {parseInt(Math.random() * 10)} months ago
            </Text>
          </View>
        </View>
        <Icon
          name="dots-vertical"
          size={25}
          color="gray"
          style={{ paddingTop: 20 }}
        />
      </View>
    </View>
  );
}

function LibraryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            imageUrl={item.imageUrl}
            channel={item.channel}
            channelName={item.channelName}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  item: {
    height: 325,
    borderStyle: "solid",
    borderBottomColor: "gray"
  },
  title: {
    fontSize: 25,
    paddingLeft: 6,
    paddingTop: 10,
    shadowOpacity: 0
  }
});


export default LibraryScreen;