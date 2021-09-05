import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";

import { DataStore } from "aws-amplify";
import { Party } from "../../models";

import Post from '../../components/Post';

const SearchResultsScreen = () => {

  const [parties, setParties] = useState([]);

  useEffect(() => {
    //fetch parties
    DataStore.query(Party).then(setParties);
  }, [])

  return (
    <View>
      <FlatList
        data={parties}
        renderItem={({item}) => <Post post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;
