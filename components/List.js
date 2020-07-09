import React from 'react'
import {Text}  from 'react-native'
import axios from 'axios'
import WeatherRow from './weather/Row'
import { ActivityIndicator, ListView } from 'react-native'
import style from '../Style.js'

export default class List extends React.Component{

    static navigationOptions = ({navigation}) => {
        return {
            title: `Polution / ${navigation.state.params.city}`
        }
        
        
    }

    constructor (props){
        super(props)
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null
        }
        this.fetchWeather()
    }

    fetchWeather (){
        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=10&APPID=94c6cf0868fa5cb930a5e2d71baf0dbf`)
        .then((response) => {
            this.setState({report: response.data})
        })
    }
    
    render() {
        if (this.state.report === null){
            return ( 
                <ActivityIndicator color={style.color} size="large"/>
            )
        }else {
            const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
            
        return(
            
            <ListView
            dataSource={ds.cloneWithRows(this.state.report.list)}
            renderRow={(row, j ,k) => <WeatherRow day={row} index={parseInt(k, 10)}/>}
          />
            
        )
    }
}
}