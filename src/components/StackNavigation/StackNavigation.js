import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ico-material-design';

const Stack = createBottomTabNavigator();

import DetailsScreen from '../../pages/DetailsScreen';
import Feed from '../../pages/Feed';

export default function StackNavigation({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Feed"
      screenOptions={{
        tabBarStyle: { display: 'none' }
      }}
    >
      <Stack.Screen
      options={{
        headerShown: false,
      }}
        name="Feed" component={Feed} />
      <Stack.Screen
        options={{
          headerLeft: ({ color, size }) => (
            <Icon style={{marginLeft: 5}} name="go-back-left-arrow" 
            onPress={() => navigation.goBack()}
            />
          ),
        }}
        name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}