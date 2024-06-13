import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import stories from '../../../data/stories';

export default function ProfileStory() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      {stories.map((story, index) => (
        <View key={index} style={styles.story}>
          <Image
            style={styles.story.image}
            source={{
              uri: story.user.avatar,
            }}
          />
          <Text style={styles.story.label}>Story 1</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  story: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    width: 67,
    marginHorizontal: 5,

    // Image Styles
    image: {
      width: 60,
      height: 60,
      borderRadius: 60,
    },

    // Label Styles
    label: {
      color: '#000000',
      marginTop: 3,
    },
  },
});
