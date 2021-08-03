import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  date: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  gens: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldgen: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  gen: {
    fontWeight: 'bold',
  },
  drinking: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
  longDescription: {
    marginVertical: 20,
    fontSize: 16,
    lineHeight: 24,
  }
});

export default styles;