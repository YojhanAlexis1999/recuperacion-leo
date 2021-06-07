import React from 'react'
import { Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Pedidos from '../screens/Pedidos'

const ModuloPedidos = ({ navigation }) => {

    const ModuloPedidos = createStackNavigator()

    return (
        <ModuloPedidos.Navigator>
            <ModuloPedidos.Screen
                name='Details'
                component={Pedidos}
                options={{
                    headerRight: () => (
                        <Button 
                            title="Cerrar sesion"
                            onPress={() => navigation.navigate("Login")}
                        />
                    )
                }}
            />
        </ModuloPedidos.Navigator>
    )
}

export default ModuloPedidos
