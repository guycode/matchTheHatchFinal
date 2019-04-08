import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";






class Saved extends Component {
    constructor() {
        super()
        this.state = object={bugs:[]}
      }
      componentDidMount() {
        return  fetch('http://75.166.71.58:8080/api/libraryLists')
        .then(response => this.setState({bugs:response.json()
    }))
        .catch(function(error) {
               console.log('There has been a problem with your second fetch operation: ' + error.message);
     // ADD THIS THROW error
      throw error;
    });
    }

    render() {
        return (
            <View style={styles.container}>
       <Text> We have { this.state.bugs.length } bugs!</Text>
            </View>
        );
    }
}
export default Saved;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});