import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
    Layout,
    TopNav,
    Text,
    themeColor,
    useTheme, Button,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";


export default function ({ navigation }) {
    const { isDarkmode } = useTheme();

    return (
        <Layout>
            <View
                style={{
                    flex: 1,

                }}
            >
                    <Image source={require("./image1.jpg")} style={{ flex: 1, width: null, height: null }} />
                    <Image source={require("./image2.jpg")} style={{ flex: 1, width: null, height: null }} />
                    <Image source={require("./image3.jpg")} style={{ flex: 1, width: null, height: null }} />
            </View>
            <View>
                    <Text style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 500, // Adjust as needed
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        color: "orange",
                        fontWeight: "bold", // Add bold styling
                        fontSize: 50, // Increase font size (adjust as needed)
                    }}>
                        iOrder
                    </Text>
                <Button
                    text="Login"
                    onPress={() => {
                        navigation.navigate("login");
                    }}
                    color={"orange"}
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 400,
                        marginTop: 10,
                        borderRadius: 100,

                    }}
                />
                <Text style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 300, // Adjust as needed
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "orange",
                    fontWeight: "bold", // Add bold styling
                    fontSize: 30, // Increase font size (adjust as needed)
                }}>
                    Dont have an account?
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("CreateAccountScreen");
                    }}
                    style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 270, // Adjust as needed
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",

                }}>
                    <Text style={ {color: "white",
                        fontWeight: "bold", // Add bold styling
                        fontSize: 20,}}>
                        Create an account now!
                    </Text>

                </TouchableOpacity>

            </View>

        </Layout>
    );
}
