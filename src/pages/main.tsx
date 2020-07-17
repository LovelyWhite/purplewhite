import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "./chat";
import SelfScreen from "./self";
import ZoneScreen from "./zone";
import AntDesign from "react-native-vector-icons/AntDesign";
import { primaryColor } from "../const";
const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: primaryColor,
      }}
    >
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: "聊天",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="message1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Zone"
        component={ZoneScreen}
        options={{
          tabBarLabel: "空间",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="staro" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Self"
        component={SelfScreen}
        options={{
          tabBarLabel: "我",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
