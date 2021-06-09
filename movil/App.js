import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/login'
import Productos from './src/productos'
import ListadoCategorias from './src/productos/ListadoCategorias'
import ListarProductos from './src/productos/ListarProductos'
import MostrarProducto from './src/productos/MostrarProducto'
import ListarPedido from './src/productos/ListarPedido'
import Preparar from './src/productos/Preparar'
import Usuario from './src/productos/Usuario'
import Domicilios from './src/productos/Domicilios'

export default function App() {

  const AppStack = createStackNavigator()

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <AppStack.Screen name="Productos" component={Productos} options={{ headerShown: false }}/>
        <AppStack.Screen name="ListadoCategorias" component={ListadoCategorias} options={{ headerShown: false }}/>
        <AppStack.Screen name="Preparar" component={Preparar} options={{ headerShown: false }}/>
        <AppStack.Screen name="ListadoProductos" component={ListarProductos} options={{ headerShown: false }}/>
        <AppStack.Screen name="MostrarProducto" component={MostrarProducto} options={{ headerShown: false }}/>
        <AppStack.Screen name="ListarPedido" component={ListarPedido} options={{ headerShown: false }}/>
        <AppStack.Screen name="Usuario" component={Usuario} options={{ headerShown: true }}/>
        <AppStack.Screen name="Domicilios" component={Domicilios} options={{ headerShown: true }}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
