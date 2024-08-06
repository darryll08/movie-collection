import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { ShowMovie } from '../components/MovieComponent';

const RecommendedScreen = (props) => {
        const {route, navigation} = props;
        const sortedRecommended = route.params.allRecommended
    
  return (
    <View>
      
      <FlatList
        contentContainerStyle={styles.mainDataContainer}
        numColumns={2}
        key={2}
        data={sortedRecommended}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
            return (
                <ShowMovie
                    image={item.imageLink}
                    title={item.title}
                    viewers={item.viewers}
                    isRecommended={true}
                    rating={item.rating}
                    onPress={() => navigation.navigate('DetailMovie', {item})}
                  />
            )
        }}
        />
    </View>
    
  )
}


const styles = StyleSheet.create({
    mainDataContainer:{
        padding:8
    }
  })

export default RecommendedScreen