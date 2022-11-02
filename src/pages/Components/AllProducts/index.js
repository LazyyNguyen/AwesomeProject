import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Button } from "react-native";


export default function AllProducts({ navigation }) {

  const [listProducts, setListProducts] = useState([
    {
      id: 0,
      name: 'Accu-check Active Test Strip',
      img: require('../../../../assets/images/AllProducts/image20.png'),
      price: '112'
    },
    {
      id: 1,
      name: 'Omron HEM-8712 BP Monitor',
      img: require('../../../../assets/images/AllProducts/image21.png'),
      price: '150',
      status: 'sale'
    },
    {
      id: 2,
      name: 'Accu-check Active Test Strip',
      img: require('../../../../assets/images/AllProducts/image22.png'),
      price: '112'
    },
    {
      id: 3,
      name: 'Omron HEM-8712 BP Monitor',
      img: require('../../../../assets/images/AllProducts/image23.png'),
      price: '150'
    }
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.allProducts}>
        <Text style={styles.title}>All Products</Text>
        <FlatList
          numColumns={2}
          data={listProducts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return <View style={styles.products}>
              <View style={{
                width: 167,
                height: 158,
              }}>
                <Image

                  style={styles.img}
                  source={item.img}
                />

              </View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <Button
                title="Go to Details"
                // onPress={() => navigation.navigate('Details')}
              />
            </View>
          }}>
        </FlatList>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({

  title: {
    marginTop: 15,
    marginBottom: 24,
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20
  },
  products: {
    position: 'relative',
    borderRadius: 8,
    justifyContent: 'space-between',
    flex: 1,
    marginRight: 13,
    flexDirection: 'column',
    width: 0,
    height: 250,
    backgroundColor: '#FFFFFF',
    marginBottom: 16
  },
  name: {
    marginLeft: 16,
    marginBottom: 6,
    width: 108,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    color: '#090F47'
  },
  price: {
    marginBottom: 10,
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    color: '#090F47',
  },
  img: {
    width: 116,
    height: 120,
    margin: 22,
  },
  triangleCorner: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 40,
    borderTopWidth: 40,
    borderTopColor: "red",
    borderLeftColor: "white",
    transform: [{ rotate: "-90deg" }],
  },
});