import React from 'react';
import { StyleSheet, Text, TextInput,  TouchableOpacity, View, ActivityIndicator, } from 'react-native';
import { StackNavigator } from 'react-navigation';

class TambahScreen extends React.Component {
	
	constructor()
    {
        super();
 
        this.state = { 
          nama: '',
          bahan: '',
          cara: '', 
          author: '', 
          ActivityIndicator_Loading: false, 

        }
    }
    //fungsi mengirim data ke database
    tambahResep = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('https://nunukwebsite1.000webhostapp.com/api/kirimData.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nama : this.state.nama,
                  bahan : this.state.bahan,
                  cara : this.state.cara,
                  author : this.state.author,
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });
            }).catch((error) =>
            {
                console.error(error);
                
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

	render() {
		return(
			<View style={styles.box1}>
				<Text style={styles.text}>NAMA RESEP</Text>
				<TextInput
				  style={styles.Input}
				  underlineColorAndroid='#9E9E9E'
				  onChangeText = {(nama) => this.setState({ nama })}
				/>
				<Text style={styles.text}>BAHAN</Text>
				<TextInput
				  style={styles.Input}
				  underlineColorAndroid='#9E9E9E'
				  onChangeText = {(bahan) => this.setState({ bahan })}
				/>
				<Text style={styles.text}>CARA</Text>
				<TextInput
				  style={styles.Input}
				  underlineColorAndroid='#9E9E9E'
				  onChangeText = {(cara) => this.setState({ cara })}
				/>
				<Text style={styles.text}>AUTHOR</Text>
				<TextInput
				  style={styles.Input}
				  underlineColorAndroid='#9E9E9E'
				  onChangeText = {(author) => this.setState({ author })}
				/>

				<TouchableOpacity 
                  activeOpacity = { 0.5 }
                  style = { styles.button } 
                  onPress = { this.tambahResep}>

                    <Text>Tambah Resep</Text>

                </TouchableOpacity>
				
          		{
        
              	  this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null
                
                }

			</View>


		);
	}
}

const styles = StyleSheet.create({
	box1: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	Input: {
    	//margin: 10,
    	fontSize: 18,
    	height: 50,
    	width: 200,
    	paddingLeft: 10,
  	},
  	text: {
    	textAlign: 'center',
    	fontSize: 18,
    	//margin: 10,
    	color: '#00BCD4',
    	fontWeight: 'bold',
  },
  button: {
		height: 35,
		width: 150,
		backgroundColor: 'blue',
		alignItems: 'center',
		borderRadius: 20,
		margin: 10,	
		justifyContent: 'center',
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

});

export default TambahScreen;
