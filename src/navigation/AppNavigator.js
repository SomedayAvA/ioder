import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "../screens/login";
import Menu from "../screens/History";
import SecondScreen from "../screens/SecondScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import Tabs from "../screens/Tab";
import Tabs1 from "../screens/Tab1";
import Order from "../screens/Order";
import Changepassword from "../screens/Changepassword";
import Editinformation from "../screens/Editinformation";
import { SafeAreaProvider } from 'react-native-safe-area-context';


const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <MainStack.Screen name="SecondScreen" component={SecondScreen} />
        <MainStack.Screen name="MainTabs" component={Tabs} />
        <MainStack.Screen name="MainTabs1" component={Tabs1} />
        <MainStack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
        <MainStack.Screen name="login" component={login} />
        <MainStack.Screen name="Menu" component={Menu} />
        <MainStack.Screen name="Order" component={Order} />
        <MainStack.Screen name="Changepassword" component={Changepassword} />
        <MainStack.Screen name="Editinformation" component={Editinformation} />
    </MainStack.Navigator>
  );
};




export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
