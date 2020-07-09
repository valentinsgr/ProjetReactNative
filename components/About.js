import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image, Button} from 'react-native';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import style from '../Style.js'

class About extends React.Component {



    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/map.svg')} style={{width:20, height:20}}/>
        }
    }

    render (){
        return(
            
            <Map google={this.props.google} initialCenter={{
            lat:46.6917832,
            lng:1.9032553
            }}
                zoom={6.70}>
                
                <Marker onclick={this.onMarkerClick}
                name={'Current location'}/> 

            <InfoWindow onClose={this.InfoWindowClose}>
                
            </InfoWindow>
                
            </Map>
            
            
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDmyCy0iLrbLeljcq8m4opYQ0P2rYawgaw")
})(About)
