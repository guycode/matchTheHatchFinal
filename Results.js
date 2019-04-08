import React, { Component } from 'react'
import { Text, View, Button, ActivityIndicator, StyleSheet } from 'react-native'
import Clarifai from 'clarifai'

export default class Results extends Component {
  constructor() {
    super()
    this.state = { results: null }
    this.handlePressSAVE = this.handlePressSAVE.bind(this)
    this.handlePressTRYAGAIN = this.handlePressTRYAGAIN.bind(this)

  }
  async componentDidMount() {
    console.log('Starting Comparison')
    const clarifai = new Clarifai.App({
      apiKey: '946dbef923064527bbe52819d9c6e750'
    })

        process.nextTick = setImmediate
//This is correct, Leave IT!!!
            const response = await clarifai.models.predict('Bugs', {
            base64: this.props.navigation.state.params.base64.base64
/*             base64: 'add base64 image code here'*/
      })
      console.log(response)
        const  concepts  = response['outputs'][0]['data']['concepts']
        this.setState({ /* results: concepts[0].value > 0.8, */ concepts })
    }
    // const  concepts  = response['outputs'][0]['data']['concepts']
    //this.setState({ results: concepts })
    
    
    /* handlePressSAVE() {
        let bodyData = JSON.stringify(['outputs'][0]['data']['concepts]']);
        fetch("http://localhost:8080/api/libraryLists", {
            method:"POST",
            body: bodyData,
            headers: { 'Content-type': 'application/json' }
        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });
      return 
      this.props.navigation.navigate('Home')
    } */
    postData() {
        let bodyData = JSON.stringify(this.state.bodyData.concepts[0]);
        fetch("http://75.166.71.58:8080/api/libraryLists", {
            method:"POST",
            body: bodyData,
            headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json'}
        }).catch(function(error) {
            console.log('There has been a problem with your RESULTS fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });
/*       return this.props.navigation.navigate('Home')
 */    }
    handlePressSAVE() {
        this.postData();        
        return this.props.navigation.navigate('Home')
      }

    handlePressTRYAGAIN() {
        console.log('failed after home')

        return this.props.navigation.navigate('Camera')
      }
  

  render() {
    return (
      <View>
        <Text> Caddis added to library!</Text>
        <Text> .99 exact match </Text>
        {this.state.results === null ? (
          <ActivityIndicator size="large" color="#FFF" />
        ) : this.state.results === true ? (
          <View>
            <Button
              onPress={this.handlePressSAVE}
              title="SAVE"
              color="#379683"
            />
          </View>
        ) : (
          <View>
            <Button
              onPress={this.handlePressTRYAGAIN}
              title="TRY AGAIN"
              color="#379683"
            />
          </View>
        )}
      </View>
    )
  }
}

console.log('failed after view')
/* app.post("/upload", upload.single("photo"), (req, res) => {
    const base64String = Buffer.from(req.file.buffer).toString("base64")
  
    clarifai.models.predict("Bugs", base64String).then(
     response => {
        res.send(Results({
          concepts: response.outputs[0].data.concepts,
          image: base64String
        }))
      },
      err => {
        console.log(err)
      }
    )
  }) */



const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
    },
    list: {
      backgroundColor:"#E6E6E6",
    },
    separator: {
      marginTop: 1,
    },
    /******** card **************/
    card:{
      margin: 0,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: "#DCDCDC",
      backgroundColor: "#DCDCDC",
    },
    cardHeader: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
      //overlay efect
      flex: 1,
      height: 200,
      width: null,
      position: 'absolute',
      zIndex: 100,
      left: 0,
      right: 0,
      backgroundColor: 'transparent'
    },
    cardFooter:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 15,
      paddingBottom: 0,
      paddingVertical: 7.5,
      paddingHorizontal: 0
    },
    cardImage:{
      flex: 1,
      height: 150,
      width: null,
    },
    /******** card components **************/
    title:{
      fontSize:22,
      color: "#ffffff",
      marginTop: 10,
      fontWeight:'bold'
    },
    time:{
      fontSize:13,
      color: "#ffffff",
      marginTop: 5
    },
    icon: {
      width:25,
      height:25,
    },
    /******** social bar ******************/
    socialBarContainer: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'row',
      flex: 1
    },
    socialBarSection: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      flex: 1,
    },
    socialBarlabel: {
      marginLeft: 8,
      alignSelf: 'flex-start',
      justifyContent: 'center',
      color: "#ffffff",
    },
    socialBarButton:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });  