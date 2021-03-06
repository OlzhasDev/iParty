import React, {useState, useEffect } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';

import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {User} from '../../models/';
import { Auth, DataStore } from 'aws-amplify';


const EditScreen = () => {
const [user, setUser] = useState(null);
const [name, setName] = useState('');
const [username, setUsername] = useState('');
const [number, setNumber] = useState('');
const [email, setEmail] = useState('');

useEffect(() => {
  const getCurrentUser=async() => {
    
    const user = await Auth.currentAuthenticatedUser();
    const dbUsers = await DataStore.query(User, u => u.sub === user.attributes.sub,); 
    if (dbUsers.length < 0) {
      return;
    }
    const dbUser = dbUsers[0];
    setUser(dbUser);
    setName(dbUser.name);
    setUsername(dbUser.username);
    setImage(dbUser.image);
    setNumber(dbUser.number);
    setEmail(dbUser.email);
  };
  getCurrentUser();
}, []);

const isValid = () => {
  return name && username && image && number && email;
};

const save = async () => {
  if (!isValid()) {
    console.warn('Not Valid');
    return;
  }

  if(user) {
    const updatedUser = User.copyOf(user, updated => {
    updated.name = name;
    updated.username = username;
    updated.image = image;
    updated.number = number;
    updated.email = email;
    });

    await DataStore.save(updatedUser);
  } else{
    // create a new user
  const authUser = await Auth.currentAuthenticatedUser();

  const newUser = new User({
    sub: authUser.attributes.sub,
    name,
    username,
    image,
    number,
    email,
  });
  await DataStore.save(newUser);
  }
  Alert.alert('User saved successfully')
};

const {colors} = useTheme();
const [image, setImage] = useState('https://reactjs.org/logo-og.png');

const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }

renderInner = () => (
    <View style={styles.panel}>
        <View style={{alignItems:'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
        </View>
        <TouchableOpacity style={styles.panelButton}>
            <Text style={styles.panelButtonTitle} onPress={takePhotoFromCamera}>Take a Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
            <Text style={styles.panelButtonTitle}>Choose From Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.panelButton} onPress={() => this.bs.current.snapTo(1)}>
            <Text style={styles.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
    </View>
);

renderHeader = () => (
    <View style={styles.header}>
        <View style={styles.panelHeader}>
            <View style={styles.panelHandle}></View>
        </View>
    </View>
);

    bs = React.createRef();
    fall = new Animated.Value(1);

return (
    <View style={styles.container}>
        <BottomSheet
            ref={this.bs}
            snapPoints={[330, 0]}
            renderContent={this.renderInner}
            renderHeader={this.renderHeader}
            initialSnap={1}
            callbackNode={this.fall}
            enabledGestureInteraction={true}
        />
        <Animated.View style={{margin: 20,
            opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
        }}>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity onPress={()=> this.bs.current.snapTo(0)}>
                    <View style={{
                        height: 100,
                        width: 100,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <ImageBackground
                        source={{
                            uri: image,
                        }}
                        style={{height:100, width:100}}
                        imageStyle={{borderRadius: 15}}>
                             <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
                <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>test</Text>
            </View>
            <View style={styles.action}>
                <FontAwesome name="user-o" color={colors.text} size={20}/>
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="black"
                    value={username}
                    onChangeText={setUsername}
                    autoCorrect={false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}/>
            </View>
            <View style={styles.action}>
                <FontAwesome name="user-o" color={colors.text} size={20}/>
                <TextInput
                    placeholder="First Name"
                    placeholderTextColor="black"
                    value={name}
                    onChangeText={setName}
                    autoCorrect={false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}/>
            </View>
            <View style={styles.action}>
                <FontAwesome name="envelope-o" color={colors.text} size={20}/>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="black"
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                    autoCorrect={false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}/>
            </View>
            <View style={styles.action}>
                <FontAwesome name="phone" color={colors.text} size={20}/>
                <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor="black"
                    keyboardType='number-pad'
                    value={number}
                    onChangeText={setNumber}
                    autoCorrect={false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}/>
            </View>
            <TouchableOpacity style={styles.commandButton} onPress={save}>
                    <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Save</Text>
            </TouchableOpacity>
        </Animated.View>
    </View>
  );
  };
export default EditScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
      },
      textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
      },
      commandButton: {
        width: 333,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        marginTop: 600,
        position: 'absolute',
        marginLeft: 10,
      },
      header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
      panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
      },
      panelTitle: {
        fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
      panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        marginVertical: 7,
      },
});