import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
      commandButton: {
        width: 333,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        marginTop: 680,
        marginLeft: 30,
        position: 'absolute',
      },
});

export default styles;