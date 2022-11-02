import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


function ProfileScreen() {
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
        <View style={styles.profileItems}>
          <Image
            style={{ marginRight: 20 }}
            source={require("../../../assets/images/profile/private.png")}
          />
          <View style={styles.Items}>
            <Text>Private Account</Text>
            <Image
              style={{ alignSelf: 'flex-end' }}
              source={require("../../../assets/images/profile/next.png")}
            />
          </View>
        </View>
        <View style={styles.profileItems}>
          <Image
            style={{ marginRight: 20 }}
            source={require("../../../assets/images/profile/myconsults.png")}
          />
          <View style={styles.navItem}>
            <Text>My Consults</Text>
            <Image
              source={require("../../../assets/images/profile/next.png")}
            />
          </View>
        </View>
        <View style={styles.profileItems}>
          <Image
            style={{ marginRight: 20 }}
            source={require("../../../assets/images/profile/clock.png")}
          />
          <View style={styles.navItem}>
            <Text>My orders</Text>
            <Image
              source={require("../../../assets/images/profile/next.png")}
            />
          </View>
        </View>
        <View style={styles.profileItems}>
          <Image
            style={{ marginRight: 20 }}
            source={require("../../../assets/images/profile/clock.png")}
          />
          <View style={styles.navItem}>
            <Text>Billing</Text>
            <Image
              source={require("../../../assets/images/profile/next.png")}
            />
          </View>
        </View>
        <View style={styles.profileItems}>
          <Image
            style={{ marginRight: 20 }}
            source={require("../../../assets/images/profile/clock.png")}
          />
          <View style={styles.navItem}>
            <Text>Faq</Text>
            <Image
              source={require("../../../assets/images/profile/next.png")}
            />
          </View>
        </View>
        <View style={styles.profileItems}>
          <Image
            style={{ marginRight: 20 }}
            source={require("../../../assets/images/profile/clock.png")}
          />
          <View style={styles.navItem}>
            <Text>Settings</Text>
            <Image
              source={require("../../../assets/images/profile/next.png")}
            />
          </View>
        </View>
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
  { fontSize: 20,
    fontWeight: '700',
    color: '#091C3F' },
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
  ItenavItemms: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});