import React from 'react'
import {View, Text, StyleSheet,Image}  from 'react-native'
import PropTypes from 'prop-types';
import moment from 'moment'
import globalStyle from '../../Style.js'
import 'moment/locale/fr'

moment.locale('fr')

export default class Row extends React.Component{
    static propTypes = {
        day: PropTypes.object,
        index: PropTypes.number
    }

    day(){
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return (
            <Text style ={[style.white,style.bold]}>{day.toUpperCase()}</Text>
        )
    }

    date(){
        let day = moment(this.props.day.dt * 1000).format('DD/MM')
        return (
            <Text>{day}</Text>
        )
    }

    icon(size = 50){
        const type = this.props.day.weather[0].main.toLowerCase()
        
        let image
        switch (type){
            case 'clouds':
                image = require("./icons/pollen.jpg")
                console.log(image)
                break;
            case 'rain':
                image = require("./icons/co2.jpg")
                console.log(image)
                break;
            default:
                image = require("./icons/pollution.png")
                console.log(image)
               
        }
        return <Image source={image} style={{width: size, height: size}}/>
        //return <Text>{type}</Text>
    }

    render () {
        if (this.props.index === 0 ){
            return (
                <View style={[style.flex,style.view, style.firstView]}>
                    <View>
                    <Text style ={{color: '#FFF'}}>{this.day()} {this.date()}</Text>
                    {this.icon(90)}
                
                </View>
                <Text style={[style.temp,{fontSize:30}]}>Polution : {Math.round(this.props.day.temp.day)+"%"}</Text>
    
                </View>
            )
        }else {

                return (
                    <View style={[style.flex,style.view]}>
                        <View style ={style.flex}>
                        {this.icon()}
                    <Text style ={{marginLeft: 10}}>{this.day()} {this.date()}</Text>
                    </View>
                    <Text style={style.temp}>Polution : {Math.round(this.props.day.temp.day)+"%"}</Text>
        
                    </View>
                )

            }
        }
        
    }


const style = StyleSheet.create({
    white: {
        color: '#FFF'
    },
    bold:{
        fontWeight:'bold',
    },
    flex:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    firstView: {
        backgroundColor:'#e54b65',
        paddingBottom:35,
        paddingTop:35
    },
    view: {
        backgroundColor: '#394163',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#202340',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between',
        
    },
    temp: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 22
    }
})