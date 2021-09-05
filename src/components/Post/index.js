
import React, { useState, useEffect } from "react";
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { Party } from "../../models/";
import { DataStore } from 'aws-amplify';

const Post = (props) => {

  const post = props.post;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  }

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* Image  */}
      <Image
        style={styles.image}
        source={{uri: post.image}}
      />

      {/* date  address*/}
      <Text style={styles.date}>
        Dates: {post.date}
      </Text>
      

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/*  entry fee and age */}
      <Text style={styles.gens}>
        <Text style={styles.entryfee}>${post.entryfee}/per person |</Text>
        <Text style={styles.gen}> {post.age}+ </Text>
      </Text>

      {/*  Drinking restrictions */}
      <Text style={styles.drinkinking}>{post.drinkinking} </Text>
    </Pressable>
  );
};

export default Post;