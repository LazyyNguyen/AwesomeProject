import * as React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Pressable,
  Button,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Banner from '../Components/Banner';
import DiabetesCare from '../Components/DiabetesCare';
import AllProducts from '../Components/AllProducts';
const Feed = ({ navigation }) => {

  return (
  <View style={styles.container}>
    <ScrollView>
    <View style={styles.header}>

          <Image source={require('../../../assets/images/fashion/icons/Menu.png')}/>
          <Image style={styles.logo} source={require('../../../logo.png')} />
          <View style={styles.iconHeaderRight}>
            <Image style={styles.iconRight} source={require('../../../assets/images/fashion/icons/Search.png')}/>
            <Image style={styles.iconRight} source={require('../../../assets/images/fashion/icons/shoppingbag.png')}/>
          </View>
    </View>
    <View style={styles.banner}>
      <Image source={require('../../../assets/images/fashion/images/model1.png')} style={styles.bannerImage}/>
      <Image source={require('../../../assets/images/fashion/images/BannerTitle.png') }style={styles.bannerTitle}/>
      <TouchableOpacity style={styles.bannerButton} onPress={() => navigation.navigate('Collections')}>
        <Text style={{fontSize:16, textAlign: 'center'}}>Explore collection</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.newArrival}> 
      <Text style={styles.newArrivalTitle}>New Arrival</Text>
      <Image style={{marginBottom:20,alignSelf:'center',}} source={require('../../../assets/images/fashion/images/Devider.png')}/>
      <View style={styles.newArrivalTabs}>
        <Text>All</Text>
        <Text>Apparel</Text>
        <Text>Dress</Text>
        <Text>TShirt</Text>
        <Text>Bag</Text>
      </View>
      <View style={styles.newArrivalProducts}>
      <AllProducts navigation={navigation}/>
        <TouchableOpacity style={styles.emore}>
          <Text style={{fontSize:16}}>Explore more</Text>
          <Image style={styles.forwardArrow} source={require('../../../assets/images/fashion/icons/ForwardArrow.png')}/>
        </TouchableOpacity>
      </View> 
    </View>
    <View >
        <Image style={{width:330, marginTop:15,marginLeft:18}} source={require('../../../assets/images/fashion/images/Group269.png')}/>
      </View>
      <View style={styles.collection}>
        <Text style={styles.collectionTitle}>Collection</Text>
        <Image  source={require('../../../assets/images/fashion/images/collect.png')}/>
      </View>
    </ScrollView>
  </View>
)};
const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginHorizontal:10,
    flex: 1,
  },
  menu: {
    elevation: 3,
  //  marginTop:20,
  },
  header:{
    justifyContent: 'space-between',
    flexDirection:"row"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  logo:{
    marginLeft:50,
    // marginRight: 75,
    // alignSelf: 'center',
  },
  iconHeaderRight: {
    flexDirection:"row",
    justifyContent: 'space-between',
  },
  iconRight:{
    marginLeft: 10,
  },
  banner: {
    position: 'relative',
    alignItems:'center',
    marginBottom:25,
    // justifyContent: 'center',
  },
  bannerImage:{
    width:362,
  },
  bannerTitle:{
    position: 'absolute',
    marginTop: 250,

  },
  bannerButton:{
    position: 'absolute',
    backgroundColor: "#DDDDDD",
    width:240,
    padding: 16,
    marginTop: 500,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#111',
    opacity: 0.5,

  },
  newArrival:{
    // alignItems:'center',

  },
  newArrivalTitle:{
    alignSelf:'center',
    textTransform: 'uppercase',
    fontSize:18, 
    color: '#111',
    fontWeight: 'bold',
  },
  newArrivalTabs:{
    fontSize:16,
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:20,
    // alignItems:'center'
  },
  newArrivalProducts:{

  },
  
emore:{
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'row',
  marginTop:20,
},
forwardArrow:{
  marginTop:2,
  marginLeft:5
},
collection:{
  marginTop:25,
  justifyContent:'center',
  alignItems:'center',

},
collectionTitle:{
  fontSize:20,
  fontWeight:'bold',
  alignSelf:'center',
},
});

export default Feed;