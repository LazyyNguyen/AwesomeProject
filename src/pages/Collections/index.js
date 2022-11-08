import { Text, View, Image, StyleSheet,FlatList,Pressable,ScrollView } from 'react-native';
import React, { useState } from 'react';

function Collections() {
  const [listProducts, setListProducts] = useState([
    {
      id: 0,
      name: "21WN reversible angora cardigan",
      price: 120,
      img: require("../../../assets/images/fashion/images/image20.png")
    },
    {
      id: 1,
      name: "21WN reversible angora cardigan",
      price: 120,
      img: require("../../../assets/images/fashion/images/image21.png")
    },
    {
      id: 2,
      name: "21WN reversible angora cardigan",
      price: 120,
      img: require("../../../assets/images/fashion/images/image22.png")
    },

  ]);

  return (
    <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Image source={require('../../../assets/images/fashion/icons/Menu.png')} />
      <Image style={styles.logo} source={require('../../../logo.png')} />
      <View style={styles.iconHeaderRight}>
        <Image style={styles.iconRight} source={require('../../../assets/images/fashion/icons/Search.png')} />
        <Image style={styles.iconRight} source={require('../../../assets/images/fashion/icons/shoppingbag.png')} />
      </View>
      
    </View>
    <FlatList 
      numColumns={1}
      data={listProducts}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return <Pressable
          style={styles.products}>
          <Image

            style={{width: 355,}}
            source={item.img}
          />
          <Text style={{fontSize:17, alignSelf: 'center', marginTop:15, fontWeight:'bold'}}>{item.name}</Text>
          <Text style={{fontSize:17, alignSelf: 'center', marginTop:15,marginBottom:25, fontWeight:'bold', color: '#DDAC55'}}>${item.price}</Text>
          <Text style={{fontSize:14, alignSelf: 'center',textAlign:'center',marginBottom:25,}}>I found this Saint Laurent canvas handbag this summer 
            and immediately fell in love. The neutral fabrics are so 
            beautiful and I like how this handbag can also carry into fall. 
            The mini Fendi bucket bag with the sheer fabric is so fun and such a 
            statement bag. Also this DeMellier off white bag is so cute to carry to a 
            dinner with you or going out, it’s small but not too small to fit your 
            phone and keys still.</Text>
        </Pressable>
      }}>
    </FlatList>
    </ScrollView>
  );
}
export default Collections;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 15,
    flex: 1,
  },
  menu: {
    elevation: 3,
    //  marginTop:20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: "row"
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
  logo: {
    marginLeft: 50,
    // marginRight: 75,
    // alignSelf: 'center',
  },
  iconHeaderRight: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  iconRight: {
    marginLeft: 10,
  },
})