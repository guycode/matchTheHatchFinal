/* import React from 'react';
import {  View,Text, Thumbnail, List, Separator, ImageBackground } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from "accordion-collapse-react-native";
import { ListItem } from 'react-native-elements'


const list = [
  {
    name: 'Caddis',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Dry Fly'
  },
  {
    name: 'Whooly Bugger',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'streamer'
  },
  {
    name: 'Caddis',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Dry Fly'
  },
  {
    name: 'Whooly Bugger',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'streamer'
  },
   // more items
]
export default class masterList extends React.Component {
  
  
    render() {
        return (
          <ImageBackground  source={require('./assets/background.png')}  style={{transparency: '40%', width: '100%', height: '100%'}} >
          <View style={{transparency: 100, width: '100%', height: '100%'}}>
            {
              list.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{ source: { uri: l.avatar_url } }}
                  title={l.name}
                  subtitle={l.subtitle}
                />
              ))
            }
          </View>
          </ImageBackground>
        )}} */

        import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  ImageBackground
} from 'react-native';

export default class Galleries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, name: 'Salmon Fly', image:"https://bit.ly/2uMpYgd"},
        {id:2, name: 'Caddis Fly', image:"https://bit.ly/2HZJbDR"} ,
        {id:3, name: 'Stonefly', image:"https://bit.ly/2Uiaq2T"}, 
        {id:4, name: 'Midge', image:"https://bit.ly/2uNU8Q9"}, 
        {id:5, name: 'Salmon Fly', image:"https://bit.ly/2uMpYgd"},
        {id:6, name: 'Caddis Fly', image:"https://bit.ly/2HZJbDR"} ,
        {id:7, name: 'Stonefly', image:"https://bit.ly/2Uiaq2T"}, 
        {id:8, name: 'Midge', image:"https://bit.ly/2uNU8Q9"}, 
        {id:9, name: 'Salmon Fly', image:"https://bit.ly/2uMpYgd"},
        {id:10, name: 'Caddis Fly', image:"https://bit.ly/2HZJbDR"} ,
        {id:11, name: 'Stonefly', image:"https://bit.ly/2Uiaq2T"}, 
        {id:12, name: 'Midge', image:"https://bit.ly/2uNU8Q9"}, 
      ]
    };
  }

  addBugToList = () => {
    Alert.alert('Success', 'The bug has been added')
    
  }

  render() {
    return (
      <ImageBackground  source={require('./assets/background.png')}  style={{transparency: '40%', width: '100%', height: '100%'}} >
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addBugToList()}>
                        <Text style={[styles.socialBarLabel, styles.share]}>Save { (this.name) }</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    marginVertical: 8,
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  }
      
})
        