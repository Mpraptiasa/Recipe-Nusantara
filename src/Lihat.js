import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Button, TextInput, FlatList, List, ListItem } from 'react-native';


export default class ListData extends React.Component {
  static navigationOptions = {
    header: null
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
        const url = 'https://nunukwebsite1.000webhostapp.com/api/getData.php';
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
  _keyExtractor = (item, index) => item.nomor;
  render() {
    return (
      <View style={{marginTop: 30, justifyContent:'center'}}>
      <View style={styles.Header}>
          <Text style={styles.TextHeader}>Recipe Nusantara</Text>
      </View>
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) =>
            <View style={styles.ListItem}>
              <Text>Nomor : {item.nomor}</Text>
              <Text>Nama : {item.nama}</Text>
              <Text>Bahan : {item.bahan}</Text>
              <Text>Cara : {item.cara}</Text>
              <Text>Author : {item.author}</Text>
            </View>
        }
        />


      </View>
    );
  }
}


const styles = StyleSheet.create({
    Header: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#F44336',
    },
    TextHeader: {
        fontSize: 30
    },
    ListItem: {
        backgroundColor:'#CDDC39',
        marginTop: 5,
        flex: 1
    },
    ListFirst: {
      fontSize: 20
    }

  });

//export default LihatScreen;
