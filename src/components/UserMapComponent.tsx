//Disclaimer: i was unable to integrate react-native-maps
// to the project, so this feature is unavailable at the moment
//but this should be a re-usable component across the app.

// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import MapView from 'react-native-maps';
// import { Marker } from 'react-native-maps';



// const UserMapComponent = (props: any) => {
//     let userLocationMarker = null;
//     if (props.userLocation) {
//         userLocationMarker = <Marker coordinate={props.userLocation} />;
//     }
//     let usersMarkers = null;
//     if (props.usersPlaces) {
//         usersMarkers = props.usersPlaces.map((userPlace: any) => (
//             <Marker coordinate={userPlace} key={userPlace.id} />
//         ));
//     }
//     return (
//             <MapView style={styles.map}
//                 initialRegion={{
//                     latitude: 37.78825,
//                     longitude: -122.4324,
//                     latitudeDelta: 0.0622,
//                     longitudeDelta: 0.0421,
//                 }}
//                 region={props.userLocation}
//             >
//                 {userLocationMarker}
//                 {usersMarkers}
//             </MapView>
//     );
// }

// const styles = StyleSheet.create({
//     map: {
//         flex: 1,
//         // width: '90%',
//         // height: '90%',

//         // maxHeight:100,
//         // maxWidth: 100,

//         marginTop: 10,
//         marginBottom: 10,
//         marginLeft:10,
//         marginRight:10
//         // paddingTop:30,
//         // paddingStart:30
//     }
// }
// );

// export default UserMapComponent;

