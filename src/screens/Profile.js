import React, { useState } from 'react';
import {View, TextInput,  Switch, Text, TouchableOpacity} from 'react-native';
import {Layout, useTheme,Button} from 'react-native-rapi-ui';

const ProfileScreen = ({ navigation }) => {
	const [isEnglish, setIsEnglish] = useState(true);
	const { isDarkmode, setTheme } = useTheme();
	const handleEditInformation = () => {
		// Implement logic for editing information here
		console.log('Edit information button clicked');
		navigation.navigate("Editinformation");
	};

	const handleLogout = () => {
		// Implement logout logic here
		console.log('Logout button clicked');

		// Toggle between dark and light mode
		const newTheme = isDarkmode ? 'light' : 'light';
		setTheme(newTheme);

		// Navigate to the login screen
		navigation.navigate('login');
	};


	return (

		<Layout style={{ flex: 1, padding: 20,marginBottom: 20}}>
			<View style={{ marginBottom: 20 }}>
				<Text style={{ fontSize: 40,color: isDarkmode ? "white" : "black"  }}>Profile</Text>
			</View>

			<View style={{ marginBottom: 20, }}>
				<Text style={{ fontSize: 20,color: isDarkmode ? "white" : "black"  }}>Full Name</Text>
				<Text style={{ fontSize: 20,color: isDarkmode ? "white" : "black"  }}>Admin</Text>
			</View>

			<View style={{ marginBottom: 20 }}>
				<Text style={{ fontSize: 20,color: isDarkmode ? "white" : "black"  }}>Email</Text>
				<Text style={{ fontSize: 20,color: isDarkmode ? "white" : "black"  }}>Admin@123.com</Text>
			</View>

			<View style={{ marginBottom: 20 }}>
				<Text style={{ fontSize: 20,color: isDarkmode ? "white" : "black"  }}>Phone Number</Text>
				<Text style={{ fontSize: 20,color: isDarkmode ? "white" : "black"  }}>123456789</Text>
			</View>

			<View style={{ marginBottom: 20 }}>
				<Text style={{ fontSize: 20, color: isDarkmode ? "white" : "black"}}>Password</Text>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
					<TextInput style={{ flex: 1 }} placeholder="********" secureTextEntry={true} />
					<TouchableOpacity onPress={() => {navigation.navigate("Changepassword");}}>
						<Text style={{ fontSize: 20, color: '#FFA500' }}>Change</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={{ marginBottom: 20 }}>
				<Text style={{ fontSize: 20,color: isDarkmode ? "white" : "black" }}>Language</Text>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Switch
						trackColor={{ false: "#767577", true: "#81b0ff" }}
						thumbColor={isEnglish ? "#f5dd4b" : "#f4f3f4"}
						ios_backgroundColor="#3e3e3e"
						onValueChange={setIsEnglish}
						value={isEnglish}
					/>
					<Text style={{color: isDarkmode ? "white" : "black"}}>{isEnglish ? 'English' : 'Swedish'}</Text>
				</View>
			</View>

			<View style={{ marginBottom: 20 }}>
				<TouchableOpacity onPress={handleEditInformation}>
					<Text style={{ fontSize: 20, textAlign: 'center', color: '#FFA500' }}>Edit Information</Text>
				</TouchableOpacity>
			</View>
			<Button
				onPress={handleLogout}
				text="Logout"
				status={isDarkmode ? "success" : "warning"}
				style={{ marginTop: 10 }}
			/>
			<Button
				onPress={() => setTheme(isDarkmode ? "light" : "dark")}
				text={isDarkmode ? "Light Mode" : "Dark Mode"}
				status={isDarkmode ? "success" : "warning"}
				style={{ marginTop: 10 }}
			/>
		</Layout>
	);
};

export default ProfileScreen;
