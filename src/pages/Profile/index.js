import React, { useState } from 'react';
import { Text, View, StyleSheet, Image,FlatList } from 'react-native';


function ProfileScreen() {
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

  ])
  return (
    <View style={styles.container}>
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
  nextIcon:{
     alignSelf: 'flex-end' 
  }
});