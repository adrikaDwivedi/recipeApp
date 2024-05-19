import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList
} from "react-native";
import React, { useEffect, useState } from "react";
import { getRecipes } from "../api";
import Header from "./component/Header";
import SearchFilter from "./component/SearchFilter";
import CategoriesFilter from "./component/CategoriesFilter";
import RecipeCard from "./component/RecipeCard";

const demoRecipes = [
    {
      id: 1,
      title: "Wada Pav",
      image: "https://as1.ftcdn.net/v2/jpg/02/81/90/00/1000_F_281900014_dIJif8LUrNRLlJ3lVeLlsSU704nRXKB1.jpg",
    },
    {
      id: 2,
      title: "Chicken Alfredo",
      image: "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg",
    },
    {
      id: 3,
      title: "Caesar Salad",
      image: "https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg",
    },
    {
      id: 4,
      title: "Tacos",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5gFb2V5Gbmi9-Umy5HPh6ex9Ys-llVGSSLCannEdxMA&s",
    },
    {
      id: 5,
      title: "Margherita Pizza",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmdNK1MhgI5-fKDW56jA_HpSUkCzKlCabzVwAjuTHA0w&s",
    },
    {
      id: 6,
      title: "Lemon Cheesecake",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ofPmbJIkrvh0xVpqUEdBjd8GTPLcSKmo0QSwcka04Q&s",
    },
    {
      id: 7,
      title: "Grilled Salmon",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOmEEO-FcFa2WUDXUq-m-x49pWBO2aVj9-kO3fAAhFw&s",
    },
  ];
  
  const RecipeListScreen = () => {
    const [recipes, setRecipes] = useState(demoRecipes);
    const [loading, setLoading] = useState(false);
  
    const fetchRecipes = async (query) => {
      setLoading(true);
      try {
        const data = await getRecipes(query);
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes: ", error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Header headerText={"Hey there"} headerIcon={"bell-o"} />
        <SearchFilter
          icon="search"
          placeholder="Enter recipe to search"
          onSearch={fetchRecipes}
        />
        <View style={{ marginTop: 22 }}>
          <Text style={styles.txt1}>Categories</Text>
          <CategoriesFilter />
        </View>
        {loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <FlatList
            data={recipes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <RecipeCard title={item.title} image={item.image} />
            )}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            contentContainerStyle={styles.flatListContainer}
          />
        )}
      </SafeAreaView>
    );
  };
  
  export default RecipeListScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
      marginTop: 35,
    },
    loader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    txt1: {
      fontSize: 22,
      fontWeight: "bold",
    },
    flatListContainer: {
      paddingBottom: 16,
    },
  });