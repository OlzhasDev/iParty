import React, {useState, useEffect } from "react";
import { View, Pressable, Text, SafeAreaView, StyleSheet, ActivityIndicatorBase, FlatList } from "react-native";
import { Auth } from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import { Avatar, Title, Caption, TouchableRipple, } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { DataStore } from "aws-amplify";
import { User } from "../../models/";

const ProfileScreen = (props) => {



  const post = props.post;

  const [user, setUser] = useState([]);

  useEffect(() => {
    //fetch user
    DataStore.query(User).then(setUser);
  }, [])

  const navigation = useNavigation();
  const logout = () => {
    Auth.signOut();
  }


  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom:5,
              }]}>Olzhas Satpayev</Title> 
              <Caption style={styles.caption}>0 friends</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="phone" color="grey" size={20}/>
          <Text style={{color:"grey", marginLeft: 20}}>+7-705-717-21-81</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="grey" size={20}/>
          <Text style={{color:"grey", marginLeft: 20}}>mosalat10@gmail.com</Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Fontisto name="heart-alt" size={25} color={'blue'} />
            <Text style={styles.menuItemText}>Your Parties</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple 
        onPress={() => navigation.navigate('AboutUs')}>
          <View style={styles.menuItem}>
          <Fontisto name="persons" size={25} color={'blue'} />
            <Text style={styles.menuItemText}>About Us</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('Support')}>
          <View style={styles.menuItem}>
          <Fontisto name="comments" size={25} color={'blue'} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple 
        onPress={() => navigation.navigate('Edit')}>
          <View style={styles.menuItem}>
          <Fontisto name="player-settings" size={25} color={'blue'} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>

      <View style={styles.commandButton}>
      <Pressable onPress={logout}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Log Out
        </Text>
      </Pressable>
    </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

