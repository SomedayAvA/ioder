import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { Layout, useTheme } from 'react-native-rapi-ui';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const EditProfileScreen = ({ navigation }) => {
    const { isDarkmode } = useTheme();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSave = () => {
        // Implement logic for saving profile updates (e.g., API call)
        console.log('Save button clicked');
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        navigation.goBack();
    };

    return (
        <Layout style={{ flex: 1, padding: 20, backgroundColor: isDarkmode ? '#000000' : '#ffffff' }}>
            <View>
                <Text style={{ fontSize: 40, marginBottom: 10, color: isDarkmode ? 'white' : 'black' }}>Edit Profile</Text>
                <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 20, color: isDarkmode ? 'white' : 'black' }}>
                    You can update your profile information here.
                </Text>

                <TextInput
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="Full Name"
                    style={{ marginBottom: 10, color: isDarkmode ? 'white' : 'black', borderColor: isDarkmode ? 'white' : 'black', borderBottomWidth: 1 }}
                />
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email Address"
                    style={{ marginBottom: 10, color: isDarkmode ? 'white' : 'black', borderColor: isDarkmode ? 'white' : 'black', borderBottomWidth: 1 }}
                />
                <TextInput
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholder="Phone Number"
                    style={{ marginBottom: 10, color: isDarkmode ? 'white' : 'black', borderColor: isDarkmode ? 'white' : 'black', borderBottomWidth: 1 }}
                />

                <Button title="Save" color={isDarkmode ?  '#0000FF':'#FFA500' } onPress={handleSave} />
            </View>
        </Layout>
    );
};

export default EditProfileScreen;
