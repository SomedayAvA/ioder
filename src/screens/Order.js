import React from "react";
import { View, FlatList, Text, Image, SafeAreaView } from "react-native";
import { Button } from "react-native-rapi-ui";

const Order = ({ route, navigation }) => {
    const { selectedItems } = route.params;

    const totalPrice = selectedItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 20 }}>Your Order:</Text>
            <FlatList
                data={selectedItems}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                        <Image
                            source={item.image}
                            style={{ width: 50, height: 50, borderRadius: 5, marginRight: 10 }}
                        />
                        <View>
                            <Text>{item.brand}</Text>
                            <Text>Quantity: {item.quantity}</Text>
                            <Text>Description: {item.description}</Text>
                            <Text>Price: {item.price.toFixed(2)}kr</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.brand}
            />
            <View style={{ alignItems: "flex-end", marginTop: 10,marginBottom:10 }}>
                <Text>Total Price: {totalPrice.toFixed(2)}kr</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Button
                    text="Back"
                    width={100}
                    color={"orange"}
                    onPress={() => navigation.goBack()}
                />
                <Button
                    text="Pay Now"
                    width={100}
                    color={"orange"}
                />
            </View>
        </SafeAreaView>
    );
};

export default Order;
