/* import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import bugReducer from './BugReducer';
import AppNavigator from './AppNavigator';

const store = createStore(bugReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store } >
        <AppNavigator />
      </Provider>
    );
  }
} */

import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import createAppContainer from './AppNavigator';
import { Provider } from 'react-redux';
import { createStore, connect } from 'redux';
import bugReducer from './BugReducer';
import AppNavigator from './AppNavigator';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
/* import console = require('console');
 */


Amplify.configure(aws_exports);

process.nextTick = setImmediate

const store = createStore(bugReducer);


class App extends React.Component {

  
  constructor(props) {
    super(props)
    this.state = {
      currentBugs: [],
    }
  }

  addBug = (bugIndex) => {
    const {
      currentBugs,
      possibleBugs,
    } = this.state

    // Pull insect out of possibleBugs
    const addedBug = possibleBugs.splice(bugIndex, 1)

    // And put Bug in currentBugs
    currentBugs.push(addedBug)

    // Finally, update our app state
    this.setState({
      currentBugs,
      possibleBugs,
    })
  }

  render() {
    return (
      
    
    
      <Provider store={ store }>
      <AppNavigator 
      screenProps={ {
        currentBugs: this.state.currentBugs,
        possibleBugs: this.state.possibleBugs,
        addBug: this.addBug,
      } }/>
      </Provider>
      
    );
  }
}

export default withAuthenticator(App, {
  // Render a sign out button once logged in
  includeGreetings: true,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }})
