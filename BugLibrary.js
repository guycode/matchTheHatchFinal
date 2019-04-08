import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBug } from './BugActions';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

class Bugs extends React.Component {
  constructor() {
        super()
        this.state = {bugs:[]}
      }


  

      

  render() {
    return (
      <ImageBackground  source={require('./assets/background.png')}  style={{transparency: '40%', width: '100%', height: '100%'}} >
      <View style={styles.container}>
          <Text> Add bugs here! </Text>
         
          {this.props.bugs.possible.map((bug, index) => {
            return (
                      <Button
                      title={`Add ${bug}`}
                      onPress={this.state.bug}
                      />
                      )
      }
        )
          }

        
              
           <Button
          title={ 'Back to home' }
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />  
  

</ View>
</ImageBackground>
    )}}    
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  h1: {
    color: '#000',
    fontSize: 40,
  },
  h2: {
    color: '#500',
    fontSize: 18,
    marginTop: 4,
  },
  list: {
    backgroundColor:"#E6E6E6",
  },
  image: {
    width: 50,
    height:50,
  }
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addBug,
  }, dispatch)
);

const mapStateToProps = (state) => {
  const { bugs } = state
  return { bugs }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);