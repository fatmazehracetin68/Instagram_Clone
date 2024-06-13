import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import stories from '../../../data/stories';

export default function Stories() {
  return (
    <View styles={styles.stories}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {stories.map(story => (
          <View key={story.id} style={styles.story}>
            <Image source={{uri: story.user.avatar}} style={styles.avatar} />
            <Text numberOfLines={1} style={styles.username}>
              {story.user.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  stories: {
    paddingVertical: 8,
  },
  story: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    width: 67,
    marginHorizontal: 5,
  },
  cover: {},
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  username: {
    fontSize: 12,
  },
});
