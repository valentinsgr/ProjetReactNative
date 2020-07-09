import React from 'react'
import { TextInput, Button, View } from 'react-native'
import style from '../Style.js'
import { createStackNavigator } from 'react-navigation-stack'
import List from './List.js'


export class Search extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            city: 'Paris'
        }
    }
    
    setCity (city){
        this.setState({
            city:city
        })
    }
    submit () {
        this.props.navigation.navigate('Result', {city: this.state.city})
    }

    render () {
        return (
            <View style={style.container}>
            <TextInput
                onChangeText={(text) => this.setCity(text)}
                style={style.input}
                value={this.state.city}
            />
            <Button color={style.color} onPress={() => this.submit()} title="Rechercher une ville"/>
            </View>
        )
    }
};

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}

export default createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions
    },
    Result: {
        screen: List,
        navigationOptions
    }
})