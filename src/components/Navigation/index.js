import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNavigation from '../StackNavigation/StackNavigation';
// import Feed from '../../pages/Feed';
import Collections from '../../pages/Collections';
import Profile from '../../pages/Profile';
import Cart from '../../pages/Cart';
import Create from '../../pages/Create';
import DetailsScreen from '../../pages/DetailsScreen';


const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#4157FF',

      }}
    >
      <Tab.Screen

        name="Home"
        component={StackNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Collections"
        component={Collections}
        options={{
          tabBarLabel: 'Collections',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={size} />
          ),
          headerShown: false,
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
        name="About us"
        component={Profile}
        options={{
          tabBarLabel: 'About us',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    </>
  );
}
export default Navigation;