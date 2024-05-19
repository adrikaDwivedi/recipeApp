import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RecipeCard = ({ id ,title, image }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('RecipeDetailScreen', { recipeId: id })}>
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    width: 170,
    height:200,
  },
  image: {
    width: '130%',
    height: 150,
    alignSelf: 'center',

  },
  title: {
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
