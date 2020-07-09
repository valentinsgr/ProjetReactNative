import React, { Component } from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BarChart from './BarChart'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

/*------------------------- GRAPHIQUE GENERAL ------------------------------- */
function DetailsScreen({ navigation }) {
    const data = [
      { label: 'Jan', value: 23 },
      { label: 'Feb', value: 29 },
      { label: 'Mar', value: 27 },
      { label: 'Apr', value: 23 },
      { label: 'May', value: 24 },
      { label: 'Jun', value: 25 },
      { label: 'Jul', value: 25 },
      { label: 'Aug', value: 26 },
      { label: 'Sep', value: 22 },
      { label: 'Oct', value: 20 },
      { label: 'Nov', value: 21 },
      { label: 'Dec', value: 26 }
    ]
  return (   
    <SafeAreaView style={styles.container}>
      <Text>Informations sur l'air traité "Général"</Text>

      <BarChart data={data} round={100} unit="%"/>

      <View>
        <View style={styles.fixToText}>
          <Button
            title="Générale"
            onPress={() => navigation.navigate('Details')}
          />
          <Button
            title="Formaldéhyde"
            onPress={() => navigation.navigate('Formaldehyde')}
          />
          <Button
            title="CO2"
            onPress={() => navigation.navigate('Co2')}
          />
          <Button
            title="Pollen"
            onPress={() => navigation.navigate('Pollen')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
} 

/*------------------------- GRAPHIQUE FORMALDEHYDE ------------------------------- */
function FormaldehydeScreen({ navigation }) {
  const data = [
    { label: 'Jan', value: 15 },
    { label: 'Feb', value: 17 },
    { label: 'Mar', value: 19 },
    { label: 'Apr', value: 21 },
    { label: 'May', value: 19 },
    { label: 'Jun', value: 17 },
    { label: 'Jul', value: 15 },
    { label: 'Aug', value: 13 },
    { label: 'Sep', value: 17 },
    { label: 'Oct', value: 18 },
    { label: 'Nov', value: 15 },
    { label: 'Dec', value: 16 }
  ]
return (   
  <SafeAreaView style={styles.container}>
    <Text>Informations sur l'air traité "Formaldéhyde"</Text>

    <BarChart data={data} round={100} unit="%"/>

    <View>
      <View style={styles.fixToText}>
        <Button
          title="Générale"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Formaldéhyde"
          onPress={() => navigation.navigate('Formaldehyde')}
        />
        <Button
          title="CO2"
          onPress={() => navigation.navigate('Co2')}
        />
        <Button
          title="Pollen"
          onPress={() => navigation.navigate('Pollen')}
        />
      </View>
    </View>
  </SafeAreaView>
);
} 

/*------------------------- GRAPHIQUE CO2 ------------------------------- */
function Co2Screen({ navigation }) {
  const data = [
    { label: 'Jan', value: 23 },
    { label: 'Feb', value: 25 },
    { label: 'Mar', value: 23 },
    { label: 'Apr', value: 21 },
    { label: 'May', value: 21 },
    { label: 'Jun', value: 22 },
    { label: 'Jul', value: 28 },
    { label: 'Aug', value: 27 },
    { label: 'Sep', value: 27 },
    { label: 'Oct', value: 25 },
    { label: 'Nov', value: 24 },
    { label: 'Dec', value: 23 }
  ]
return (   
  <SafeAreaView style={styles.container}>
    <Text>Informations sur l'air traité "CO2"</Text>

    <BarChart data={data} round={100} unit="%"/>

    <View>
      <View style={styles.fixToText}>
      <Button
        title="Générale"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Formaldéhyde"
        onPress={() => navigation.navigate('Formaldehyde')}
      />
      <Button
        title="CO2"
        onPress={() => navigation.navigate('Co2')}
      />
      <Button
        title="Pollen"
        onPress={() => navigation.navigate('Pollen')}
      />
      </View>
    </View>
  </SafeAreaView>
);
} 

/*------------------------- GRAPHIQUE POLLEN ------------------------------- */
function PollenScreen({ navigation }) {
  const data = [
    { label: 'Jan', value: 30 },
    { label: 'Feb', value: 29 },
    { label: 'Mar', value: 28 },
    { label: 'Apr', value: 27 },
    { label: 'May', value: 29 },
    { label: 'Jun', value: 30 },
    { label: 'Jul', value: 25 },
    { label: 'Aug', value: 27 },
    { label: 'Sep', value: 28 },
    { label: 'Oct', value: 27 },
    { label: 'Nov', value: 26 },
    { label: 'Dec', value: 29 }
  ]
return (   
  <SafeAreaView style={styles.container}>
    <Text>Informations sur l'air traité "Pollen"</Text>

    <BarChart data={data} round={100} unit="%"/>

    <View>
      <View style={styles.fixToText}>
        <Button
          title="Générale"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Formaldéhyde"
          onPress={() => navigation.navigate('Formaldehyde')}
        />
        <Button
          title="CO2"
          onPress={() => navigation.navigate('Co2')}
        />
        <Button
          title="Pollen"
          onPress={() => navigation.navigate('Pollen')}
        />
      </View>
    </View>
  </SafeAreaView>
);
} 

const Stack = createStackNavigator();

function Separator() {
  return <View style={styles.separator} />;
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Formaldehyde" component={FormaldehydeScreen} />
          <Stack.Screen name="Co2" component={Co2Screen} />
          <Stack.Screen name="Pollen" component={PollenScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})