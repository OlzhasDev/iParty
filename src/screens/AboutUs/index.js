import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.js';



const AboutUs = (props) => {
return (
    <View>
        <Text style={styles.description} numberOfLines={2}>
            iParty app was created in 2021
        </Text>
    </View>
  );
};


export default AboutUs;
