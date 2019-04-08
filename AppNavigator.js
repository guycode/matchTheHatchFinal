/* import { createStackNavigator } from 'react-navigation';
import Home from './Home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
});

export default AppNavigator; */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './Home';
import Bugs from './BugLibrary';
import Saved from './Saved';
/* import Region from './Region';   */
import Shop from './Shop';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBug } from './BugActions';
import Results from './Results';
import Camera from './Camera';
import masterList from './testList';

  
/*   class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Details!</Text>
        </View>
      );
    }
  }
  

  class HomeScreen extends React.Component {
    render() {
      return (
        <Home />
      );
    }
  }
  


  const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
  }); */
  
  export default createAppContainer(createBottomTabNavigator(
    {
      Home: {screen: Home,
        navigationOptions: {
        tabBarLabel: 'HOME',
        tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" color={tintColor} size={24} />
    )
    } },
      /* Region: {screen: Region,
        navigationOptions: {
        tabBarLabel: 'REGION',
        tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-map" color={tintColor} size={24} />
    )
  } }, */
    /*   Bugs: { screen: Bugs,
        navigationOptions: {
          tabBarLabel: 'BUGS',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-bug" color={tintColor} size={24} />
          )
        }}, */
        Results: { screen: Results,
          navigationOptions: {
            tabBarLabel: 'RESULTS',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="ios-list" color={tintColor} size={24} />
            )
          } 
        },
      Camera: { screen: Camera,
        navigationOptions: {
          tabBarLabel: 'CAMERA',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-camera" color={tintColor} size={24} />
          )
        }  },
        
      masterList: {
        screen: masterList,
        navigationOptions: {
          tabBarLabel: 'BUGS',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-bug" color={tintColor} size={24} />
          )
        }
      },
       Shop: {
        screen: Shop,
        navigationOptions: {
          tabBarLabel: 'SHOP',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-pricetag" color={tintColor} size={24} />
          )
        }
      }, 
     
    },
    {
      /* Other configuration remains unchanged */
    }
  ));