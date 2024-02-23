import React, { useState } from "react";
import { View, Image, TouchableOpacity, TextInput } from "react-native";
import { Layout, Text, useTheme } from "react-native-rapi-ui";

export default function ({ navigation }) {
    const { isDarkmode } = useTheme();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleForgotPassword = () => {
        // 处理忘记密码逻辑
        console.log("Forgot Password clicked");
    };

    const handleLogin = () => {
        navigation.navigate("MainTabs");
        // 处理登录逻辑
        console.log("Login clicked");
    };
    const handleLogin1 = () => {
        navigation.navigate("MainTabs1");
        // 处理登录逻辑
        console.log("Login clicked");
    };

    return (

        <Layout>

            <View style={{ flex: 1, position: "relative" }}>
                <Image
                    source={require("./loginPage2.png")}
                    style={{ flex: 1, width: null, height: null }}
                />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("SecondScreen");
                    }}
                    style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        zIndex: 1,
                    }}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>Back</Text>
                </TouchableOpacity>

                <View style={{ position: "absolute", top: 300, paddingHorizontal: 20, width: "100%" }}>
                    <TextInput
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                        style={{
                            backgroundColor: isDarkmode ? "#303030" : "#f4f4f4",
                            borderRadius: 10,
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            marginBottom: 20,
                            color: isDarkmode ? "#fff" : "#000",
                        }}
                    />

                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={{
                            backgroundColor: isDarkmode ? "#303030" : "#f4f4f4",
                            borderRadius: 10,
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            marginBottom: 20,
                            color: isDarkmode ? "#fff" : "#000",
                        }}
                    />

                    <TouchableOpacity
                        onPress={handleForgotPassword}
                        style={{
                            backgroundColor: "transparent",
                            alignItems: "flex-end",
                            marginBottom: 20,
                        }}
                    >
                        <Text style={{ color: "white" }}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleLogin}
                        style={{
                            backgroundColor: "orange",
                            borderRadius: 10,
                            paddingVertical: 15,
                            alignItems: "center",

                        }}
                    >
                        <Text style={{ color: "white" }}>Login as a customer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleLogin1}
                        style={{
                            backgroundColor: "orange",
                            borderRadius: 10,
                            paddingVertical: 15,
                            alignItems: "center",
                            marginTop: 20,
                        }}
                    >
                        <Text style={{ color: "white" }}>Login as a merchant</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    );
}
