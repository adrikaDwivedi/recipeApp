import { StyleSheet, Text, View } from "react-native";
import React , {useState} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";


const SearchFilter = ({ icon, placeholder, onSearch }) => {
    const[query , setQuery] = useState(' ');

    const handleSearch = () => {
        if (onSearch){
            onSearch(query);
        }
    }
  return (                                                                                  
    <View style={styles.view}>
      {/* <Text>SearchFilter</Text> */}
      <FontAwesome name={icon} size={22} color="#fff" />
      <TextInput
       style={styles.txt} 
       value={query}
      onChangeText={setQuery}
      onSubmitEditing={handleSearch}
      placeholder={placeholder}
    placeholderTextColor="black"
     /> 
      
      
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#f96163",
    flexDirection: "row",
    paddingVertical: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 16,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  txt:{
    flex:1,
    paddingLeft: 8,
    fontSize:16,
  },
});
