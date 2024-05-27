import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Post = ({ author, title, image, onPress, navigation }) => (
  <TouchableOpacity style={styles.container} onPress={onPress(navigation)}>
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.title}>{title}</Text>
    <ImageBackground 
      style={[styles.image, { borderRadius: 10 }]}
      resizeMode="cover"
      source={{ uri: image }}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden', 
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5, // for Android
  },
  author: {
    fontSize: 14,
    marginHorizontal: 10,
    color: '#808080',
  },
  title: {
    fontSize: 18,
    marginHorizontal: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: height / 3,
    borderRadius: 10,
  },
});

export default Post;