import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles.js';
import { Party } from "../../models";
import { DataStore } from 'aws-amplify';

const Post = (props) => {

  const post = props.post;

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Image  */}
        <Image
          style={styles.image}
          source={{uri: post.image}}
        />

        {/* date and address*/}
        <Text style={styles.date}>
          Dates: {post.date} 
        </Text>

        {/* Type & Description */}
        <Text style={styles.description} numberOfLines={2}>
          {post.type}. {post.title}
        </Text>

        {/*  Old gen & new gen */}
        <Text style={styles.gens}>
          <Text style={styles.entryFee}>${post.entryFee}/per person |</Text>
          <Text style={styles.gen}>  {post.age}+ </Text>
        </Text>

        {/*  drinking restrictions */}
        <Text style={styles.drinkinging}>{post.drinkinging} </Text>

        <Text style={styles.longDescription}>
          {post.description}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Post;