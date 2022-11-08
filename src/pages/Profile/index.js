import React, { useState } from 'react';
import { Button, ScrollView, Image, StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from "react-native-maps"

const listStore = [
  {
    id: 0,
    name: "Open Fashion",
    location: "03 Pham Van Thoai street, Son Tra district, Da nang city, Vietnam",
    phonenumber: "0986130777",
    img: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1600",
    latitude: 16.064979,
    longitude: 108.223180,
  },
  {
    id: 1,
    name: "Open Fashion",
    location: "123 Le Duan street, Hai Chau district, Da nang city, Vietnam",
    phonenumber: "0912562999",
    img: "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    latitude: 16.054957,
    longitude: 108.239359,
  },
]

function ProfileScreen() {
  const [location, setLocation] = useState({
    latitude: 16.06089,
    longitude: 108.24079,
  })

  const markers = listStore.map((store) => {
    if (store.latitude != location.latitude) {
      return (
        <Marker coordinate={{
          latitude: store.latitude,
          longitude: store.longitude,
        }}>
        </Marker>
      )
    } else {
      return (
        <Marker coordinate={location}>
        </Marker>
      )
    }
  }
  )

  const stores = listStore.map((store) =>
    <TouchableOpacity style={styles.store}
      onPressIn={newLocation => setLocation({
        latitude: store.latitude,
        longitude: store.longitude,
      })}
    >
      <View style={{ width: 330 }}>
        <Image source={{ uri: store.img }} style={styles.img} />
        <Text style={styles.name}>{store.name}</Text>
        <Text style={styles.location}><Icon name="location-arrow" size={20} color="#1E90FF" />     {store.location}</Text>
        <Text style={styles.location}><Icon name="phone" size={20} color="#1E90FF" />     +84 {store.phonenumber}</Text>
      </View>
    </TouchableOpacity>
  )
  const [listItems, setListItems] = useState([
    {
      id: 0,
      name: 'Private Account',
      icon: require("../../../assets/images/profile/private.png")
    },
    {
      id: 1,
      name: 'My Consults',
      icon: require("../../../assets/images/profile/myconsults.png")
    },
    {
      id: 2,
      name: 'My orders',
      icon: require("../../../assets/images/profile/clock.png")
    },
    {
      id: 3,
      name: 'Billing',
      icon: require("../../../assets/images/profile/billing.png")
    }, {
      id: 4,
      name: 'Faq',
      icon: require("../../../assets/images/profile/ques.png")
    },
    {
      id: 5,
      name: 'Settings',
      icon: require("../../../assets/images/profile/setting.png")
    },

  ]);
  const [pin, setPin] = React.useState({
    latitude: 16.06089,
    longitude: 108.24079,
  })
  const [region, setRegion] = React.useState({
    latitude: 16.06089,
    longitude: 108.24079,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  })
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Image
            source={require("../../../assets/images/profile/avatar.png")}
          />
          <View style={styles.user}>
            <Text style={styles.name}>Hi, Ben Cline</Text>
            <Text style={{ fontSize: 14, fontWeight: '400' }}>Welcome to Medtech</Text>
          </View>
        </View>
        <View style={styles.mainContent}>
          <FlatList
            data={listItems}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return <View style={styles.profileItems}>
                <Image
                  style={{ marginRight: 20 }}
                  source={item.icon}
                />
                <View style={styles.navItemms}>
                  <Text>{item.name}</Text>
                  <Image
                    style={styles.nextIcon}
                    source={require("../../../assets/images/profile/next.png")}
                  />
                </View>
              </View>

            }}>
          </FlatList>
        </View>
        <View style={styles.mapView}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 16.06089,
              longitude: 108.24079,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
          >

            <Marker coordinate={{
              latitude: 16.060959,
              longitude: 108.240774,
            }} >
            </Marker>
            {markers}
            <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
            <Marker
              coordinate={pin}
              pinColor="black"
              draggable={true}
              onDragStart={(e) => {
                console.log("Drag start", e.nativeEvent.coordinates)
              }}
              onDragEnd={(e) => {
                setPin({
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude
                })
              }}
            >
              <Callout>
                <Text>I'm here</Text>
              </Callout>
            </Marker>
            <Circle center={pin} radius={300} />
          </MapView>
        </View>
        <View style={{ top: 30 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            {stores}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 48,
    paddingLeft: 23,
    paddingRight: 23,
  },
  wrapper: {
    marginTop: 26,
    flexDirection: 'row',
    alignItems: 'center'
  },
  name:
  {
    marginTop: 15,
    marginLeft: 5,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: '700',
    color: '#091C3F'
  },
  mainContent: {
    marginTop: 42,
  },
  profileItems: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderColor: '#091C3F14',
    borderStyle: 'solid'
  },
  navItemms: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nextIcon: {
    alignSelf: 'flex-end'
  },
  mapView: {
    // ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 330,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  icon: {
    width: 35,
    height: 35,
  },
  store: {
    height: 350,
  },
  img: {
    width: 330,
    height: 150
  },
  location: {
    marginLeft: 5,
    color: "black",
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
  },
});