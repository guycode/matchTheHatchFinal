/* const express = require("express")
const Clarifai = require("clarifai")
const multer = require("multer")
const pug = require("pug")

const app = express()
const port = 3000

const upload = multer()
const resultsTemplate = pug.compileFile('results.pug')

const clarifai = new Clarifai.App({
  apiKey: "946dbef923064527bbe52819d9c6e750"
})

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: __dirname
  })
})

app.post("/upload", upload.single("photo"), (req, res) => {
  const base64String = Buffer.from(req.file.buffer).toString("base64")

  clarifai.models.predict("Bugs", base64String).then(
   response => {
      res.send(resultsTemplate({
        concepts: response.outputs[0].data.concepts,
        image: base64String
      }))
    },
    err => {
      console.log(err)
    }
  )
})

app.use(express.static("public"))
app.listen(port, () => console.log(`Running on http://localhost:${port}/`))


 */




import React, { Component } from 'react'
import {
  Text,
  View,
  ActivityIndicator,
  Button,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import { Camera, Permissions } from 'expo'
import ImagePicker from 'react-native-image-picker'

/* const resultsTemplate = pug.compileFile('results.pug')
 */
export default class MyCamera extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      hasCameraPermission: null,
      type: Camera.Constants.Type.back
    }
    this.snap = this.snap.bind(this)
    this.selectImage = this.selectImage.bind(this)
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  async snap() {
    if (this.camera) {
      console.log('Snap Callled')
      this.setState({ loading: true }, () => console.log('State Set'))
      let pic = await this.camera.takePictureAsync({
        quality: 0.7,
        base64: true
      })
      
      
      this.props.navigation.navigate('Results', {
        base64: pic
      })
    }
  }

  async selectImage() {
    this.setState({ loading: true }, () => console.log('Starting Image Select'))
    let pic = await ImagePicker.launchImageLibraryAsync({
      quality: 0.7,
      base64: true
    })
    this.setState({ loading: false }, () => console.log('Acquired Base64'))
    if (!pic.cancelled) {
      this.props.navigation.navigate('Results', {
        base64: pic
      })
    }
  }

  render() {
    const { hasCameraPermission } = this.state
    if (hasCameraPermission === null) {
      return <View />
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>
    } else {
      return (
        <View style={{ flex:1 }}>
          <Camera
            ref={ref => {
              this.camera = ref
            }}
            style={{height:400, width: 420, justifyContent:"center", alignItems:"center"}}
            type={this.state.type}>
            <View >
              {this.state.loading ? (
                <View style={styles.cameraLoad}>
                  <ActivityIndicator />
                </View>
              ) : (
                <View>
                  <TouchableHighlight onPress={this.selectImage}>
                    <Text></Text>
                  </TouchableHighlight>
                </View>
              )}
            </View>
          </Camera>
          <TouchableHighlight onPress={this.selectImage}>
                    <Text></Text>
                  </TouchableHighlight>
          <Button
                  onPress={this.snap}
                  title="TAKE PICTURE"
                  color="#d6492c"
                />
        </View>
      )
    }
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
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
  });