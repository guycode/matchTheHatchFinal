import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBug } from './BugActions';
import { Button } from 'react-native-elements';
import { Auth } from 'aws-amplify';
import Bugs from './BugLibrary';
import Results from './Results';

export class Home extends React.Component {
  handleSignOut = () => {
    Auth.signOut()
      .then(() => this.props.navigation.navigate('Authentication'))
      .catch(err => console.log(err));
  }

  constructor() {
    super()
    this.state = this.handlePress.bind(this)
    this.state = {bugs:[]}
  }

   componentDidMount() {
    fetch('http://75.166.71.58:8080/api/libraryLists')
    .then(response => {
      this.setState(response.json().data);
      console.log(response.json())
      JSON.stringify(response)
      } )

    .catch(function(error) {
           console.log('There has been a problem with your HOME fetch operation: ' + error.message);
 // ADD THIS THROW error
  throw error;
});
}


  handlePress() {
    return this.props.navigation.navigate('./Camera')
  }
  render() {
    return (
      <ImageBackground  source={require('./assets/background.png')}  style={{transparency: '40%', width: '100%', height: '100%'}} >
      <View style={styles.container}>
       {/*  <Text>
           { response.JSON(rawData) }
        </Text> */}
        {/* <Button
          title={ "Add some bugs" }
          onPress={() =>
            this.handlePress
          }
          color={"#379683"}
        />
         <Button
        title="Sign Out"
        onPress={this.handleSignOut}
      /> */}
      <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://avatars2.githubusercontent.com/u/5152008?s=460&v=4'}}/>

                <Text style={styles.name}>
                  Rich
                </Text>
                <Text> Welcome Back! </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>

              <View style={styles.menuBox}>
              <Image style={styles.icon} source={require('./assets/fishing.png')} />
                <Text style={styles.info}>Fish</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={require('./assets/mosquito.png')}/>
                <Text style={styles.info}>Fly's</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={require('./assets/flashlight.png')}/>
                <Text style={styles.info}>Explore</Text>
              </View>
            </View>
        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  header:{
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  bodyContent:{
    paddingTop:40,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuBox:{
    backgroundColor: "#DCDCDC",
    width:100,
    height:100,
    alignItems: 'center',
    justifyContent: 'center',
    margin:12,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  icon: {
    width:60,
    height:60,
  },
  info:{
    fontSize:22,
    color: "#696969",
  }
});



export default connect()(Home);