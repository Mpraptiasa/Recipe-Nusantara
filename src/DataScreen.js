import React, { Component } from 'react';
import { RefreshControl, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity, FlatList, List, ListItem } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

//Data Screen
class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ alignItems:'center', justifyContent: 'center' }}>
        
      </View>
    );
  }
}
export default class DataScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      ActivityIndicator_Loading: false, 
    };
}

  componentDidMount()  {
    this.setState({ ActivityIndicator_Loading : true }, () =>
    {
        this.setState({refreshing: true});
        const url = 'https://nukeninkonoha.000webhostapp.com/getData.php';
       //this.setState({ loading: true });
        fetch (url)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("comp");
          console.log(responseJson);
          this.setState({
            data: responseJson,
            error: responseJson.error || null,
            loading: false,
            refreshing: false,
            ActivityIndicator_Loading: false, 

          });
        }
      );
    });
  }
  _keyExtractor = (item, index) => item.nim;

  render() {
    return (
<View style={ styles.MainContainer }>
      
      <TouchableOpacity 
                  activeOpacity = { 0.5 }
                  style = { styles.TKJStyle } 
                  onPress = {() => this.props.navigation.navigate('Detail') }>

                    <Text style = { styles.TextStyle }>TKJ</Text>

      </TouchableOpacity>

      <TouchableOpacity 
                  activeOpacity = { 0.5 }
                  style = { styles.MultimediaStyle } 
                  onPress = {() => this.props.navigation.navigate('Detail') }>

                    <Text style = { styles.TextStyle }>Multimedia</Text>

      </TouchableOpacity>
        <TouchableOpacity 
                  activeOpacity = { 0.5 }
                  style = { styles.ProgrammingStyle } 
                  onPress = {() => this.props.navigation.navigate('Detail') }>

                    <Text style = { styles.TextStyle }>Programming</Text>

      </TouchableOpacity>

   </View>   
      
    );
  }
}
const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20

    },
 
    TextInputStyleClass:
    {
      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },

    BoxClass:
    {
      alignItems: 'flex-start',
      height: 100,
      width: 320,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 7 ,
      marginBottom: 10,
      paddingTop: 5,
      paddingBottom: 5
    },
 
    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#2196F3',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7 
 
    },
 
    TKJStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#2196F3',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7 
 
    },
    MultimediaStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'purple',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7 
 
    },
    ProgrammingStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'red',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7 
 
    },
    TextStyle:
    {
       color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },

    ActivityIndicatorStyle:{
      
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    
  },
  Header: {
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextHeader: {
        fontSize: 20,
        color: '#2196F3'
    },
});