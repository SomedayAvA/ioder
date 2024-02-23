import React, { useEffect, useState } from "react";
import { View, FlatList, Image } from "react-native";
import {
    Layout,
    Button,
    Text,
    useTheme,
} from "react-native-rapi-ui";

const HISTORY_DATA = [
    {
        image: require("./image1.jpg"),
        brand: "Spaghetti Bolognese",
        description: "Hearty pasta, rich meat sauce, savory herbs, Parmesan perfection.",
        price: "110kr*1",
    },
    {
        image: require("./image2.jpg"),
        brand: "Caesar Salad",
        description: "Crisp romaine, tangy Caesar, Parmesan, croutons - timeless salad delight.",
        price: "90kr*2",
    },
    {
        image: require("./image3.jpg"),
        brand: "Beef Bourguignon",
        description: "Luxurious beef stew, red wine, mushrooms, onions - French comfort.",
        price: "260kr*1",
    },
];




const MenuItem = ({ item}) => {
    const [, setQuantity] = useState(1);

    useEffect(() => {
        setQuantity(1);
    }, []);

    return (
        <View
            style={{
                flexDirection: "row",
                padding: 25,
                borderBottomWidth: 1,
            }}
        >
            <Image
                source={item.image}
                style={{ width: 150, height: 100, borderRadius: 10 }}
            />
            <View
                style={{
                    flex: 1,
                    marginLeft: 10,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={{ fontSize: 18 }}>{item.brand}</Text>
                    <Text style={{ fontSize: 14 }}>{item.description}</Text>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>{item.price}</Text>


                </View>
            </View>
        </View>
    );
};

export default function ({ navigation }) {
    const { isDarkmode} = useTheme();
    const [historyData] = useState(HISTORY_DATA);




    historyData.filter((item) => item.quantity > 0);
    return (
        <Layout>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: 20,
                    }}
                >
                    <Text style={{ fontSize: 20 }}>Order</Text>
                </View>
                <FlatList
                    data={historyData}
                    renderItem={({ item, index }) => (
                        <MenuItem
                            item={item}
                            onQuantityChange={(newQuantity) =>
                                handleQuantityChange(newQuantity, index)
                            }
                            index={index}
                        />
                    )}
                    keyExtractor={(item) => item.brand}
                />



            </View>
        </Layout>
    );
}
