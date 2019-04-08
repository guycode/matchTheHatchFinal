import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, ImageBackground
} from "react-native";

class Shop extends Component {
    render() {
        return (
            <ImageBackground  source={require('./assets/shopBackground.png')}  style={{transparency: '40%', width: '100%', height: '100%'}} >
            <View style={styles.container}>
            </View>
            </ImageBackground>
        );
    }
}
export default Shop;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});