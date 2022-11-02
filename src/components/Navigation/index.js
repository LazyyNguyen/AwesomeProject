import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Feed from '../../pages/Feed';
import Notifications from '../../pages/Notifications';
import Profile from '../../pages/Profile';
import Cart from '../../pages/Cart';
import Create from '../../pages/Create';



const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="My Profile"
      screenOptions={{
        tabBarActiveTintColor: '#4157FF',

      }}
    >
      <Tab.Screen

        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}
export default Navigation;