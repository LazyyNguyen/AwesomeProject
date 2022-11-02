import React, {useState} from 'react';
import { View, Text, StyleSheet, Image,FlatList, ImageBackground, ScrollView, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DiabetesCare')}
      />
    </View>
  );
};
function DiabetesCare() {
  const [products, setProducts] = useState([
    {
      id:0,
      name:'Sugar Substitute',
      img:require('./images/image133.png'),
      price:''
    },
    {
      id:1,
      name:'Juices & Vinegars',
      img:require('./images/image134.png'),
      price:''
    },
    {
      id:2,
      name:'Vitamins Medicines',
      img: require('./images/image135.png'),
      price:''
    },
    {
      id:3,
      name:'denden',
      img:require('./images/image134.png'),
      price:''
    }
  ]);
  const [listProducts, setListProducts] = useState([
    {
      id:0,
      name:'Accu-check Active Test Strip',
      img: require('./images/image20.png'),
      price:'112'
    },
    {
      id:1,
      name:'Omron HEM-8712 BP Monitor',
      img: require('./images/image21.png'),
      price:'150'
    },
    {
      id:2,
      name:'Accu-check Active Test Strip',
      img: require('./images/image22.png'),
      price:'112'
    },
    {
      id:3,
      name:'Omron HEM-8712 BP Monitor',
      img: require('./images/image23.png'),
      price:'150'
    }
  ]);
  return(
    <View style={styles.container}>
      <View style={styles.banner}>
        <ImageBackground source={require("./images/banner.png" )}  style={styles.image}>
          <View style={styles.txtGroup}>
            <Text style={styles.text}>Save extra on every order</Text>
            <Text style={styles.txt}>Etiam mollis metus non faucibus sollicitudin.</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.product}>
        <Text style={styles.title}>
          Diabetic Diet
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
        horizontal
        data={products}
        keyExtractor={item => item.name}
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
      <View style={styles.allProducts}>
        <Text style={styles.titlePro}>All Products</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
          numColumns={2}
          data={listProducts}
          keyExtractor={item => item.name}
          renderItem = {({item}) => {
            return <View style={styles.bgListProducts}>
              <View style={{
                width: 167,
                height: 158,
                backgroundColor: '#EBEBEB'
              }}>
                <Image
                style={styles.img}
                source={item.img}
                />
              </View>
              <Text style={styles.proName}>{item.name}</Text>
              <Text style={styles.proPrice}>${item.price}</Text>
            </View>
          }}>
          </FlatList>
        </ScrollView>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DiabetesCare" component={DiabetesCare} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles =  StyleSheet.create({
  container:{
    flex:1,
    paddingLeft: 25,
    paddingRight: 25
  },
  banner: {
    position: 'relative',
    marginTop: 45,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  txtGroup:{
    position: 'absolute',
  },
  text: {
    marginTop: 28,
    marginLeft: 24,
    marginBottom: 6,
    width: 119,
    height: 42,
    fontSize: 18,
    color: '#1987FB',
    fontWeight: '700',
    lineHeight: 21,
    fontFamily:'Overpass'
  },
  txt:{
    width: 124,
    height: 32,
    marginBottom: 32,
    marginLeft: 23,
    fontSize: 12,
    fontWeight: '300',
    fontFamily:'Overpass',
    color: 'rgba(9, 15, 71, 0.65)',
  },
  product:{
    flex:1,
  },
  title:{
    marginTop: 19,
    marginBottom: 16,
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20
  },
  allProducts:{
    flex:2,
  },
  titlePro:{
    marginTop: 15,
    marginBottom: 24,
    color: '#090F47',
    fontSize:16,
    fontWeight: '600',
    lineHeight: 20
  },
  bgListProducts:{
    flex:1,
    flexDirection: 'column',
    width: 157,
    height: 250,
    backgroundColor: '#FFFFFF',
    marginRight: 14,
    marginBottom: 16
  },
  proName:{
    marginLeft: 16,
    marginBottom: 8,
    width: 108,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    color: '#090F47'
  },
  proPrice:{
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    color: '#090F47',
  },
  img:{
    width: 116,
    height: 120,
    margin: 22,
  }
});