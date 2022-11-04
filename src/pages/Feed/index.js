import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Banner from '../Components/Banner';
import DiabetesCare from '../Components/DiabetesCare';
import AllProducts from '../Components/AllProducts';
function Feed({navigation}) {
  return (

    <View style={styles.wrapper}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Banner />
          <DiabetesCare />
          <AllProducts navigation={navigation}/>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    marginHorizontal: 20
  }

})
export default Feed;