import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function ProfileInfo() {
  return (
    <View style={styles.profileInfo}>
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        style={styles.avatar}
      />
      <View style={styles.state}>
        <Text style={styles.stateNumber}>1,000</Text>
        <Text style={styles.stateLabel}>Posts</Text>
      </View>
      <View style={styles.state}>
        <Text style={styles.stateNumber}>0,000</Text>
        <Text style={styles.stateLabel}> Followers</Text>
      </View>
      <View style={styles.state}>
        <Text style={styles.stateNumber}>0,000</Text>
        <Text style={styles.stateLabel}>Following</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },

  avatar: {width: 80, height: 80, borderRadius: 40},
  stateLabel: {
    fontSize: 12,
    color: '#888',
  },
  stateNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  state: {
    alignItems: 'center',
  },
});
