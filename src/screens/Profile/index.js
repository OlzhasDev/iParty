import React from "react";
import { View, Pressable, Text, SafeAreaView, StyleSheet, ActivityIndicatorBase } from "react-native";
import { Auth } from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import { Avatar, Title, Caption, TouchableRipple, } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';

const ProfileScreen = (props) => {

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
              }]}>test</Title> 
              <Caption style={styles.caption}>@test</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="grey" size={20}/>
          <Text style={{color:"grey", marginLeft: 20}}>Almaty,Kazakhstan</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="grey" size={20}/>
          <Text style={{color:"grey", marginLeft: 20}}>+1-123123123</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="grey" size={20}/>
          <Text style={{color:"grey", marginLeft: 20}}>test@gmail.com</Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name = "heart-outline" color="blue" size={25}/>
            <Text style={styles.menuItemText}>Your Parties</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          })}>
          <View style={styles.menuItem}>
            <Icon name = "account-check-outline" color="blue" size={25}/>
            <Text style={styles.menuItemText}>About Us</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name = "account-check-outline" color="blue" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple 
        onPress={() => navigation.navigate('Edit')}>
          <View style={styles.menuItem}>
            <Icon name = "settings-outline" color="blue" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>

      <View style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Pressable
        onPress={logout}
        style={{
        width: '90%',
        height: 40,
        backgroundColor: 'blue',
        justifyContent: 'center', alignItems: 'center',
        borderRadius: 15,
        marginBottom: 300,
        marginHorizontal: 20,
      }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Log Out
        </Text>
      </Pressable>
    </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

