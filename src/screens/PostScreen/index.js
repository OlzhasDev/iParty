import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import {useRoute} from '@react-navigation/native';

import { DataStore } from "aws-amplify";
import { Party } from "../../models";

import DetailedPost from '../../components/DetailedPost';
const PostScreen = (props) => {
  const route = useRoute();

  const [parties, setParties] = useState([]);

  useEffect(() => {
    //fetch parties
    DataStore.query(Party).then(setParties);
  }, [])

  return (
    <View>
      <FlatList
        data={parties}
        renderItem={({item}) => <DetailedPost post={item} />}
      />
    </View>
  );
};

export default PostScreen;
