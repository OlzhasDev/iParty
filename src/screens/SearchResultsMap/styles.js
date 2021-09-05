import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  searchButton: {
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 100,
    zIndex: 100,
  },
});

export default styles;