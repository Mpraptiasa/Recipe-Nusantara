import React from 'react';
import { StyleSheet, ImageBackground, Text, Button,  TouchableOpacity, View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';


class HomeScreen extends React.Component {
	static navigationOptions = {
    header: null
 };
	render() {
		return (
			<View style={styles.containerMain}>
              <StatusBar
                backgroundColor="#F44336"
                barStyle="light-content"
              />
              <Text style={styles.title}>Recipe Nusantara</Text>
              <Text style={styles.subTitle}>Resepnya orang Indonesia</Text>
              <View style={styles.box1}>
				<TouchableOpacity style={styles.button}
				onPress={() => this.props.navigation.navigate('LihatScreen')}>
            		<Text>Lihat Resep</Text>
          		</TouchableOpacity>
				<TouchableOpacity style={styles.button}
				onPress={() => this.props.navigation.navigate('TambahScreen')}>
            		<Text>Tambah Resep</Text>
          		</TouchableOpacity>
			</View>
			</View>

		);
	}
}
const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flex: 1,
	},
	box1: {
		flex: 1,
		backgroundColor: '#FFFF',
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerMain: {
    flex: 1,
    
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
	title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    paddingBottom: 5,
    textAlign: 'center',
    backgroundColor: 'rgba(76,175,80, .6)'
  },
  subTitle: {
    backgroundColor: 'rgba(76,175,80, .6)',
    color: '#fff',
    fontSize: 14,
    paddingBottom: 12,
    textAlign: 'center',
  },
});

export default HomeScreen;