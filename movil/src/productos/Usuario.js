import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ListadoCategorias from './ListadoCategorias'
import Preparar from './Preparar'

const Usuario = ({ route }) => {

    const { id_loca } = route.params

    const Menusito = createDrawerNavigator()

    return (

        <Menusito.Navigator initialRouteName="carta" drawerPosition="right">
            <Menusito.Screen
                name="carta"
                initialParams={{ id_loca: id_loca }}
                component={ListadoCategorias}
                options={{ headerShown: false }}
            />
            <Menusito.Screen 
                name="preparacion"
                component={Preparar}
            />
        </Menusito.Navigator>
    )
}

export default Usuario;