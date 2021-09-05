/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React, {useEffect} from 'react';
 import { PermissionsAndroid, Platform, StatusBar, } from 'react-native';
 import Geolocation from '@react-native-community/geolocation';

 import Amplify, {Auth} from 'aws-amplify';
 
 import Router from './src/navigation/Router';
 
 import HomeScreen from './src/screens/Home';
 
 import { withAuthenticator } from 'aws-amplify-react-native';
<<<<<<< HEAD
// import { User } from "./src/models"

 navigator.geolocation = require('@react-native-community/geolocation');
=======
>>>>>>> a879b1fcfd6797fbd286af49525695f72b5d4f5a
 
 const App: () => React$Node = () => {

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "iParty App Location Permission",
          message:
            "iParty App needs access to your location " +
            "so you can find awesome parties.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, [])
  
  // useEffect(() => {
  //   const saveUserToDB = async () => {
  //     // get user from cognito.
  //     const userInfo = await Auth.currentAuthenticatedUser();

  //     if (!userInfo){
  //       return;
  //     }

  //     const userId = userInfo.attributes.sub;
      
  //     // check if user exists in DB.
  //     const user = (await DataStore.query(User)).find(user => user.sub === userId);
  //     if (!user) {
  //     //  if not, save user to DB.
  //       await DataStore.save(
  //         new User({
  //         sub: userId,
  //         username: '',
  //         name: '',
  //         friends: 0,
  //       })
  //       );
  //     }else{
  //       console.warn('User already exists');
  //     }
     
  //   };

  //   saveUserToDB();
  // }, []);

   return (
     <>
       <StatusBar barStyle="dark-content" />
       <Router />
     </>
   );
 };
<<<<<<< HEAD

 export default withAuthenticator(App);
=======
 
 export default withAuthenticator(App);
>>>>>>> a879b1fcfd6797fbd286af49525695f72b5d4f5a
