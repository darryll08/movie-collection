import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {userData} from '../../data/TryCodeData';


const TryCodeScreen = () => {
  return (
    <View style={styles.appContainer}>
      <Text>
        An array of objects lets you store multiple values in a single variable.
        It stores a fixed-size sequential collection of elements of the same
        type. An array is used to store a collection of data, but it is often
        more useful to think of an array as a collection of variables of the
        same type.
      </Text>
      
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={userData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View
              style={[styles.itemContainer, {backgroundColor: item.gender.toLowerCase() === 'male' ? 'moccasin' : 'lavender'
              }]}>
              <Image
                source={{uri: item.imageLink}}
                style={styles.imageContainer}
              />
              <Text>{item.name}</Text>
              <Text>{item.gender}</Text>
              <Text>{item.age}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    appContainer: {
        flex:1
    },
    contentContainer:{
        padding:8
    },
    imageContainer:{
        width: 100,
        height: 100,
    },
    itemContainer:{
        margin: 8,
        borderWidth: 1,
        alignItems:'center'
    }

})
export default TryCodeScreen;
