import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Button, Pressable } from "react-native";
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
export default function AllProducts({ navigation }) {
  const [listProducts, setListProducts] = useState([
    {
      id: 0,
      name: "21WN reversible angora cardigan",
      price: 120,
      img: require("../../../../assets/images/fashion/images/model2.png")
    },
    {
      id: 1,
      name: "21WN reversible angora cardigan",
      price: 120,
      img: require("../../../../assets/images/fashion/images/model3.png")
    },
    {
      id: 2,
      name: "21WN reversible angora cardigan",
      price: 120,
      img: require("../../../../assets/images/fashion/images/model4.png")
    },
    {
      id: 3,
      name: "21WN reversible angora cardigan",
      price: 120,
      img: require("../../../../assets/images/fashion/images/model5.png")
    },

  ]);
  return (
    <FlatList columnWrapperStyle={{ justifyContent: 'space-between' }}
      numColumns={2}
      data={listProducts}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return <Pressable
          onPress={() => navigation.navigate('DetailsScreen')}
          style={styles.products}>
          <Image

            style={styles.productImg}
            source={item.img}
          />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>

        </Pressable>
      }}>
    </FlatList>

  )
};
const styles = StyleSheet.create({

  products:{
    width: 175,

  },
  productImg:{
    width:175,
    height:200,
    },
  productPrice:{    
    textAlign:'center',
    color:'#DDAC55',
    fontWeight:'bold',
},
  productName:{ 
    marginTop:10,
    marginBottom:10,
    textAlign:'center',
},
});