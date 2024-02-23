import React, { useState } from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { Layout, Text } from "react-native-rapi-ui";

const HistoryItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ padding: 15, borderBottomWidth: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={item.image} style={{ width: 200, height: 100, marginRight: 10 ,borderRadius: 10,}} />
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18 }}>{item.brand}</Text>
                    <Text style={{ fontSize: 14, color: "#888" }}>{item.date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const HistoryScreen = ({ navigation }) => {
    const [historyData] = useState([
        {
            image: require("./image1.jpg"),
            brand: "KFC",
            date: "2023-11-16",
        },
        {
            image: require("./image2.jpg"),
            brand: "MAX",
            date: "2023-10-25",
        },
        {
            image: require("./image3.jpg"),
            brand: "McDonald's",
            date: "2023-09-12",
        },
    ]);

    const handleItemPress = (item) => {
        navigation.navigate("Menu");
        console.log("Item Pressed:", item);
    };

    return (
        <Layout style={{ flex: 1 }}>
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 20 }}>History</Text>
                <FlatList
                    data={historyData}
                    renderItem={({ item }) => (
                        <HistoryItem item={item} onPress={() => handleItemPress(item)} />
                    )}
                    keyExtractor={(item) => item.brand}
                />

            </View>
        </Layout>
    );
};

export default HistoryScreen;
