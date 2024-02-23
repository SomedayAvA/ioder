import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {themeColor, useTheme} from "react-native-rapi-ui";
import Home from "./Home";
import TabBarText from "../components/utils/TabBarText";
import TabBarIcon from "../components/utils/TabBarIcon";
import Profile from "./Menu";
import About from "./Profile";


const Tabs = createBottomTabNavigator();

const MainTabs = () => {
    const { isDarkmode } = useTheme();
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
                    backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
                },
            }}
        >
            {/* these icons using Ionicons */}
            <Tabs.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TabBarText focused={focused} title="Order" />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} icon={"reader-outline"} />
                    ),
                }}
            />

            <Tabs.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TabBarText focused={focused} title="Menu" />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} icon={"fast-food-outline"} />
                    ),
                }}
            />
            <Tabs.Screen
                name="About"
                component={About}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TabBarText focused={focused} title="Profile" />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} icon={"person"} />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
};
export default MainTabs;

