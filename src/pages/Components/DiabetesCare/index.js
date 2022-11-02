import React, {useState} from 'react';
import { View, Text, StyleSheet, Image,FlatList, ScrollView} from "react-native";

export default function DiabetesCare() {
    const [products, setProducts] = useState([
      {
        id:0,
        name:'Sugar Substitute',
        img:require('../../../../assets/images/DiabetesCare/image133.png'),
        price:''
      },
      {
        id:1,
        name:'Juices & Vinegars',
        img:require('../../../../assets/images/DiabetesCare/image134.png'),
        price:''
      },
      {
        id:2,
        name:'Vitamins Medicines',
        img:require('../../../../assets/images/DiabetesCare/image135.png'),
        price:''
      },
      {
        id:3,
        name:'Sugar Substitute',
        img:require('../../../../assets/images/DiabetesCare/image133.png'),
        price:''
      }
    ]);
    return(
        <View style={styles.container}>
          <View style={styles.product}>
            <Text style={styles.title}>
              Diabetic Diet
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <FlatList
            horizontal
            data={products}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return <View
              style={{
                width: 110,
                height: 162,
                backgroundColor: '#F5F7FA',
                borderRadius: 10,
                marginRight: 16
              }}>
                <Image
                  style={{
                    width: 110,
                    height: 100,
                  }}
                  source={item.img}/>
                <Text
                  style={{
                    width: 60,
                    fontSize: 13,
                    fontWeight: '400',
                    color: '#090F47',
                    lineHeight: 18
                  }}>{item.name}</Text>
              </View>
            }}>
            </FlatList>
            </ScrollView>
          </View>
          </View>
          )
};
const styles =  StyleSheet.create({
    container:{
    },
    product:{
    },
    title:{
      marginTop: 19,
      marginBottom: 16,
      color: '#090F47',
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 20
    }
  });