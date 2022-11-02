import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';


export default function Banner() {
  return(
      <View style={styles.banner}>
        <ImageBackground source={require('../../../../assets/images/banner/banner.png')}  style={styles.image}>
          <View style={styles.groupText}>
            <Text style={styles.text}>Save extra on every order</Text>
            <Text style={styles.smallText}>Etiam mollis metus non faucibus sollicitudin.</Text>
          </View>
          </ImageBackground>
        
      </View>
  );
};



const styles =  StyleSheet.create({
  
  banner: {
 
  },
  image: {
    
  },
  text: {
    marginBottom: 6,
    width: 119,
    height: 42,
    fontSize: 18,
    marginTop: 28,
    marginLeft: 24,
    color: '#1987FB',
    fontWeight: '700',
    lineHeight: 21,
    fontFamily:'Overpass'
  },
  smallText:{
    marginLeft: 23,
    fontSize: 12,
    width: 124,
    height: 32,
    marginBottom: 32,
    fontWeight: '300',
    fontFamily:'Overpass',
    color: 'rgba(9, 15, 71, 0.65)',
  },
});