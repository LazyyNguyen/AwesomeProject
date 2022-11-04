import * as React from 'react';
import { Button, View, Text } from 'react-native';


export default function DetailsScreen({ navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Text>Details Screen</Text>
      </View>
    );
  }