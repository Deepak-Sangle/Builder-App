import * as React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const Loader = () => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size={50} animating={true} color="#008AF4" />
        </View>
    );
}

const styles = StyleSheet.create({
    loader : {
        flex : 1,
        justifyContent : "center",
    }
});
 
export default Loader