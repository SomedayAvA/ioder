import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
    Layout,
    Text,
    useTheme,
    Button,
} from "react-native-rapi-ui";
import { StyleSheet } from 'react-native';
import { useNavigation } from "react-router-dom";
import SecondScreen from "./SecondScreen";

const CreateAccountScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        // Handle account creation logic here (e.g., API calls)
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        // After successful account creation, navigate back
        // (assuming navigation is available in this context)
        navigation.navigate("login"); // Replace with your login screen name
    };

    return (
        <Layout style={{ flex: 1, paddingHorizontal: 20, paddingTop: 30 }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("SecondScreen");
                }}
                style={{
                    position: "absolute",
                    top: 10,
                    left: 20,
                    zIndex: 1,
                }}
            >
                <Text style={{ color: "black", fontSize: 20 }}>Back</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 40, marginBottom: 20 }}>Create Account</Text>
            <Text style={{ color: "grey", fontSize: 16, marginBottom: 20 }}>
                Please enter your username, e-mail and password to sign up.
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("login")}
                style={{ marginBottom: 20 }}
            >
                <Text style={{ color: "orange", fontSize: 16 }}>
                    Already have an account?
                </Text>
            </TouchableOpacity>
            <TextInput
                placeholder="Type your username here."
                value={username}
                onChangeText={setUsername}
                style={{
                    marginBottom: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                    padding: 5,
                }}
            />
            <TextInput
                placeholder="Type your e-mail here."
                value={username}
                onChangeText={setUsername}
                style={{
                    marginBottom: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                    padding: 5,
                }}
            />
            <TextInput
                placeholder="Type your password here."
                value={username}
                onChangeText={setUsername}
                style={{
                    marginBottom: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                    padding: 5,
                }}
            />
            <Button
                text="Sign up"
                color={"orange"}
                onPress={handleSubmit}
                style={{ backgroundColor: "orange", borderRadius: 100, padding: 15 }}
            />
            <Text style={{ fontSize: 12, color: "grey", marginTop: 10 }}>
                By signing up, you agree to our Terms of Service and Privacy Policy.
            </Text>
        </Layout>
    );
};

export default CreateAccountScreen;
