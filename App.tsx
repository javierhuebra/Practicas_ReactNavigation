

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';


const Stack = createNativeStackNavigator();


const App = () => {
 

  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='orange'
      />
      <NavigationContainer>
        
        <Stack.Navigator          //Se le puede modificar los headers a todas las rutas desde aca o por cada view
          initialRouteName='Inicio'
         screenOptions={{
            title:"Componente Principal",
            headerStyle: {
              backgroundColor: '#F4511E' 
            },
            headerTintColor: '#FFF',
            
          }}
        >
            <Stack.Screen
              name="Inicio"
              component={Inicio}
              /* options={{
                title:"Componente Principal",
                headerTitleAlign:'center',
                headerStyle: {
                  backgroundColor: '#F4511E' 
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                  fontWeight: '900'
                }
              }} */
            />
            <Stack.Screen
              name="Nosotros"
              component={Nosotros}
              options={{
                title:"Sobre Nosotros"
              }}
            />
        </Stack.Navigator>
        
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'orange',
    flex: 1
  }
});

export default App;


//DEPENDENCIAS USADAS PARA REACT NAVIGATION + IMPORTS
/* 

- npm install @react-navigation/native

- npm install react-native-screens

- npm install react-native-safe-area-context

- npm install @react-navigation/native-stack
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
 
const Stack = createNativeStackNavigator(); */