import React from 'react';
import {View, ImageBackground, Text, Pressable, ScrollView} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const FeedScreen = (props) => {

  return (
    <View>

        <ScrollView> 
            <Text style={styles.main}>You have no requests or parties at the moment...</Text>
      </ScrollView>

    </View>
  );
};

export default FeedScreen;
