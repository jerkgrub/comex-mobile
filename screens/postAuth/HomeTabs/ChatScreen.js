import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const list = [
  {
    name: 'Anthony Tampol',
    avatar_url: 'https://media.licdn.com/dms/image/C5603AQEs_54FCyGLFg/profile-displayphoto-shrink_100_100/0/1638716686159?e=2147483647&v=beta&t=LHNjak594cyIoTI0GJVuFZ7zyFBrPECc20x-Wki1hYY',
    subtitle: 'Hello there!'
  },
  {
    name: 'Michael Jackson',
    avatar_url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-211182-GettyImages-51129873.jpg?w=1581&h=1054&crop=1',
    subtitle: 'Musta?'
  },
];

export const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <Avatar source={{uri: item.avatar_url}} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});