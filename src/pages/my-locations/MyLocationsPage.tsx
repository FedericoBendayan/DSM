// import React, { Component } from 'react';
// import { StyleSheet, Text, View, PermissionsAndroid, TouchableOpacity, Alert } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import UserMap from '../../components/UserMap';
// import { Actions } from 'react-native-router-flux'
// import { Icon, Tooltip, Button } from 'react-native-elements';
// import axios from 'axios';


// const goToHome = () => {
//     Actions.HomePage()
// };

// export default class MyLocationsPage extends Component {

//     state = {
//         userCurrentLocation: {
//             latitude: 0,
//             longitude: 0,
//             latitudeDelta: 0.0622,
//             longitudeDelta: 0.0421
//         },
//         userPreviousLocations: []
//     };

//     toolTips = {
//         GetCurrentLocation: 'This will put a marker on the map, showing your current location, don\'t forget to turn on your GPS and allow the app to use it.',
//         GetPreviousLocations: 'This will put markers on the map (if any), showing your previous saved locations, don\'t forget to turn on your GPS and allow the app to use it.',
//         SaveCurrentLocation: 'This will save your current location so you can find it later, don\'t forget to turn on your GPS and allow the app to use it.',

//     };

//     getUserPreviousLocations = () => {
//         fetch("https://test-445f3.firebaseio.com/places.json")
//             .then(res => res.json())
//             .then(parsedRes => {
//                 const placesArray = [];
//                 for (const key in parsedRes) {
//                     placesArray.push({
//                         latitude: parsedRes[key].latitude,
//                         longitude: parsedRes[key].longitude,
//                         id: key
//                     });
//                 }
//                 this.setState({
//                     usersPlaces: placesArray
//                 });
//                 console.log(placesArray);
//             })
//             .catch(err => Alert.alert(err) );
//     };
//     requestLocationPermission = async () => {
//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//                 {
//                     title: "Test App Location Permission",
//                     message:
//                         "Test  App needs access to your Location " +
//                         "so it can work properly.",
//                     buttonNeutral: "Ask Me Later",
//                     buttonNegative: "Cancel",
//                     buttonPositive: "OK"
//                 }
//             );
//             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 console.log("You can use the location");
//                 this.getUserLocationHandler();
//             } else {
//                 console.log("Camera location denied");
//             }
//         } catch (err) {
//             Alert.alert(err);
//         }
//     };
//     getUserLocationHandler = () => {
//         Geolocation.getCurrentPosition(() => {
//             (position: { coords: { latitude: any; longitude: any; }; }) => {
//                 console.log(position);
//                 this.setState({
//                     userCurrentLocation: {
//                         latitude: position.coords.latitude,
//                         longitude: position.coords.longitude,
//                         latitudeDelta: 0.0622,
//                         longitudeDelta: 0.0421
//                     }
//                 })
//             };

//         },
//             (error) => {
//                 // See error code charts below.
//                 console.log(error.code, error.message);
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//         );
//     };

//     saveCurrentLocation = () => {
//         //TO DO: ask for a better way to re use this code.
//         Geolocation.getCurrentPosition(() => {
//             (position: { coords: { latitude: any; longitude: any; }; }) => {
//                 console.log(position);
//                 this.setState({
//                     userCurrentLocation: {
//                         latitude: position.coords.latitude,
//                         longitude: position.coords.longitude,
//                         latitudeDelta: 0.0622,
//                         longitudeDelta: 0.0421
//                     }
//                 })
//             };

//             axios.post("https://test-445f3.firebaseio.com/places.json", {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     latitude: this.state.userCurrentLocation.latitude,
//                     longitude: this.state.userCurrentLocation.longitude,
//                 })
//             })
//                 .then(res => console.log(res))
//                 .catch(err => Alert.alert(err));

//         },
//             (error) => {
//                 // See error code charts below.
//                 Alert.alert(error.message)
//                 console.log(error.code, error.message);
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//         );

//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.menu}>
//                     <View style={styles.menuTitle}>
//                         <Text style={styles.menuTitlebuttonText}>Options:</Text>
//                     </View>
//                     <View style={styles.menuItem}>
//                         <Button
//                             buttonStyle={styles.buttonText}
//                             containerStyle={styles.buttonContainer}
//                             title="Show current location  "
//                             icon={
//                                 <Icon
//                                     type='font-awesome'
//                                     name="map-marker"
//                                     size={15}
//                                     color="#F1FAEE"
//                                 />
//                             }
//                             iconRight
//                             onPress={this.requestLocationPermission}
//                         />
//                         <View style={styles.menuTooltip}>
//                             <Tooltip height={150}
//                                 //TO DO: it would be nice to apply the app style to the tooltip.
//                                 containerStyle={styles.buttonText}
//                                 popover={<Text> {this.toolTips.GetCurrentLocation} </Text>}>

//                                 <Icon size={40}
//                                     name='info-circle'
//                                     type='font-awesome'
//                                     color='#457B9D' />

//                             </Tooltip>
//                         </View>
//                     </View>
//                     <View style={styles.menuItem}>
//                         <Button
//                             buttonStyle={styles.buttonText}
//                             containerStyle={styles.buttonContainer}
//                             title="Show previous locations  "
//                             icon={
//                                 <Icon
//                                     type='font-awesome'
//                                     name="globe"
//                                     size={15}
//                                     color="#F1FAEE"
//                                 />
//                             }
//                             iconRight
//                             onPress={this.getUserPreviousLocations}
//                         />
//                         <View style={styles.menuTooltip}>
//                             <Tooltip height={150}
//                                 //TO DO: it would be nice to apply the app style to the tooltip.
//                                 containerStyle={styles.buttonText}
//                                 popover={<Text> {this.toolTips.GetPreviousLocations} </Text>}>

//                                 <Icon size={40}
//                                     name='info-circle'
//                                     type='font-awesome'
//                                     color='#457B9D' />

//                             </Tooltip>
//                         </View>
//                     </View>
//                     <View style={styles.menuItem}>
//                         <Button
//                             buttonStyle={styles.buttonText}
//                             containerStyle={styles.buttonContainer}
//                             title="Save current location  "
//                             icon={
//                                 <Icon
//                                     type='font-awesome'
//                                     name="floppy-o"
//                                     size={15}
//                                     color="#F1FAEE"
//                                 />
//                             }
//                             iconRight
//                             onPress={this.getUserPreviousLocations}
//                         />
//                         <View style={styles.menuTooltip}>
//                             <Tooltip height={150}
//                                 //TO DO: it would be nice to apply the app style to the tooltip.
//                                 containerStyle={styles.buttonText}
//                                 popover={<Text> {this.toolTips.SaveCurrentLocation} </Text>}>

//                                 <Icon size={40}
//                                     name='info-circle'
//                                     type='font-awesome'
//                                     color='#457B9D' />

//                             </Tooltip>
//                         </View>
//                     </View>

//                 </View>

//                 <View style={styles.mapContainer}>
//                     <UserMap userLocation={this.state.userCurrentLocation}
//                         usersPlaces={this.state.userPreviousLocations}
//                     />
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F1FAEE',
//         // alignItems: 'center',
//         // justifyContent: 'center',
//     },
//     buttonText: {
//         fontFamily: 'notosans-regular',
//         color: "#F1FAEE",
//         fontSize: 20,
//         marginLeft: 20,
//         backgroundColor: "#457B9D"
//     },
//     menuTitlebuttonText: {
//         fontFamily: 'notosans-bold',
//         color: "#1D3557",
//         fontSize: 20,
//         marginLeft: 20
//     },
//     menu: {
//         flexDirection: "column",
//         flex: 3,
//         justifyContent: 'center',
//         alignItems: 'stretch',
//         alignContent: 'space-between',
//         backgroundColor: 'transparent',
//         borderWidth: 1,
//         borderColor: '#457B9D',
//     },
//     menuItem: {
//         flexDirection: "row",
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'stretch',
//         alignContent: 'center',
//         backgroundColor: 'transparent',
//         // borderWidth: 1,
//         // borderColor: '#A8DADC',
//     },
//     menuTitle: {
//         fontFamily: 'notosans-bold',
//         color: "#1D3557",
//         fontSize: 20,
//         marginTop: 0

//     },
//     menuTooltip: {
//         flex: 1,
//         alignContent: 'center',
//         justifyContent: 'center',
//         fontFamily: 'notosans-bold',
//         color: "#E63946",
//         fontSize: 20,
//     },

//     buttonContainer: {
//         flex: 3,
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#F1FAEE",
//         // padding: 10,
//         // marginBottom: 6,
//     },
//     mapContainer: {
//         flex: 4,
//         borderWidth: 10,
//         borderColor: '#457B9D',
//     }
// });
