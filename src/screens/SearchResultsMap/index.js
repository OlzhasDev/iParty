import React, {useState, useEffect, useRef} from "react";
import { View, FlatList, useWindowDimensions, Pressable, Text } from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from "../../components/CustomMarker";
import PostCarouselItem from "../../components/PostCarouselItem";
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import { request, PERMISSIONS } from "react-native-permissions";
import Geolocation from 'react-native-geolocation-service';

import { DataStore } from "aws-amplify";
import { Party } from "../../models";

const SearchResultsMaps = (props) => {






  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [parties, setParties] = useState([]);

  const button = async () => {
      console.warn('Almaty, Kazakhstan');
    }

  const flatlist = useRef();
  const map = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70})
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id)
    }
  })

  const width = useWindowDimensions().width;

  useEffect(() => {
    //fetch parties
    DataStore.query(Party).then(setParties);
  }, [])

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = parties.findIndex(place => place.id === selectedPlaceId)
    flatlist.current.scrollToIndex({index})

    const selectedPlace = parties[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    }
    map.current.animateToRegion(region);
  }, [selectedPlaceId])


  return (
    <View style={{width: '100%', height: '100%'}}>
      <Pressable
        style={styles.searchButton}
        onPress={button}>
        <Fontisto name="navigate" size={25} color={'black'} />
      </Pressable>
      <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 43.222015,
          longitude: 76.851248,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {parties.map(place => (
          <CustomMarker
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}
            title={place.title}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />)
        )}
      </MapView>

      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlist}
          data={parties}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
}

export default SearchResultsMaps;