import React, {useState} from 'react';
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
import SelectDropdown from 'react-native-select-dropdown'
import {Party} from '../../models/';
import { Auth, DataStore } from 'aws-amplify';

const GuestsScreen = () => {


const [image, setImage] = useState('https://reactjs.org/logo-og.png');
const {colors} = useTheme();
const drinkinking = ["No alcohol", "Alcohol"]
const type = ["Public", "Private"]
const latitude = '43.222015'
const longitude = '76.851248'
const [title, setTitle] = useState('');
const [age, setAge] = useState('');
const [description, setDescription] = useState('');


const isValid = () => {
  return type && drinkinking && title && age && description;
};

const create = async () => {
  if (!isValid()) {
    console.warn('Not Valid');
    return;
  }else{
    Alert.alert('Party saved successfully')
  }

  if(party) {

  const newParty = new Party({
    type,
    title,
    drinkinking,
    age,
    latitude,
    longitude,
  });
  await DataStore.save(newParty);
  }
  Alert.alert('Party saved successfully')
};

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
        <Animated.View style={{margin: 30,
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
            </View>

            <View style={styles.action}>
            <FontAwesome name="cube" color={colors.text} size={20}/>
                <FontAwesome color={colors.text} size={20}/>
                <SelectDropdown
                      value={type}
                    	data={type}
	                    onSelect={(selectedItem, index) => {
		                  console.log(selectedItem, index)
	                      }}
                        	buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                          return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                          // text represented for each item in dropdown
                          // if data array is an array of objects then return item.property to represent item in dropdown
                          return item
                        }}
                      />
            </View>
            <View style={styles.action}>
            <FontAwesome name="cube" color={colors.text} size={20}/>
            <SelectDropdown
              value={drinkinking}
              data={drinkinking}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />
            </View>
            <View style={styles.action}>
                <FontAwesome name="cube" color={colors.text} size={20}/>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Party name"
                    placeholderTextColor="black"
                    autoCorrect={false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}/>
            </View>
            <View style={styles.action}>
                <FontAwesome name="cube" color={colors.text} size={20}/>
                <TextInput
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Description"
                    placeholderTextColor="black"
                    autoCorrect={false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}/>
            </View>
            <View style={styles.action}>
                <FontAwesome name="cube" color={colors.text} size={20}/>
                <TextInput
                    value={age}
                    onChangeText={setAge}
                    placeholder="Dates"
                    placeholderTextColor="black"
                    keyboardType='email-address'
                    autoCorrect={false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}/>
            </View>
            <View style={styles.action}>
            <FontAwesome name="cube" color={colors.text} size={20}/>
            <TextInput
                    placeholder="Location"
                    placeholderTextColor="black"
                    autoCorrect={false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}/>
            </View>
            
            <TouchableOpacity style={styles.commandButton} onPress={create}>
                    <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold',}}>Create</Text>
            </TouchableOpacity>
        </Animated.View>
    </View>
  );
  };
export default GuestsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    action: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
      },
      textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft:20,
        color: '#05375a',
        fontSize: 17,
      },
      commandButton: {
        width: 333,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        marginTop: 650,
        position: 'absolute',
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