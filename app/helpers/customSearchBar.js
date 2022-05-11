import React from 'react';
import { StyleSheet} from 'react-native'
import { Searchbar } from 'react-native-paper';

const CustomSearchBar = (props) => {
    const txt = props.text;
    const searchQuery = props.searchQuery;
    const setSearchQuery = props.setSearchQuery;

    return (
        <Searchbar 
            placeholder={txt}
            onChangeText={(query)=> setSearchQuery(query)}
            value={searchQuery}
            style={styles.searchBar}
            inputStyle={styles.searchQuery}
        />
    );
}
 
const styles = StyleSheet.create({
    searchBar :{
        marginBottom: 10,
    },
    searchQuery : {
        fontSize: 13,
        color: "#4A4A4A",
        fontFamily: "Nunito-Regular"
    },
})
export default CustomSearchBar;