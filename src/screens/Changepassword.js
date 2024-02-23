import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { Layout, useTheme } from 'react-native-rapi-ui';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ChangePasswordScreen = ({ navigation }) => {
    const { isDarkmode } = useTheme();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCancel = () => {
        // Implement logic for canceling password change
        console.log('Cancel button clicked');
        navigation.goBack();
    };

    const handleSave = () => {
        // Implement logic for saving the new password (e.g., API call)
        console.log('Save button clicked');
        navigation.goBack();
    };

    return (
        <Layout style={{ flex: 1, padding: 20, backgroundColor: isDarkmode ? '#000000' : '#ffffff' }}>
            <View>
                <Text style={{ fontSize: 20, marginBottom: 10, color: isDarkmode ? 'white' : 'black' }}>Change Password</Text>
                <TextInput
                    value={oldPassword}
                    onChangeText={setOldPassword}
                    placeholder="Current Password"
                    secureTextEntry={true}
                    style={{ marginBottom: 10, color: isDarkmode ? 'white' : 'black' }}
                />
                <TextInput
                    value={newPassword}
                    onChangeText={setNewPassword}
                    placeholder="New Password"
                    secureTextEntry={true}
                    style={{ marginBottom: 10, color: isDarkmode ? 'white' : 'black' }}
                />
                <TextInput
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirm New Password"
                    secureTextEntry={true}
                    style={{ marginBottom: 10, color: isDarkmode ? 'white' : 'black' }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Button title="Cancel" color={isDarkmode ? '#777777' : '#FFA500'} onPress={handleCancel} />
                    <Button title="Save" color={isDarkmode ? '#0000FF' : '#FFA500'} onPress={handleSave} />
                </View>
            </View>
        </Layout>
    );
};

export default ChangePasswordScreen;
