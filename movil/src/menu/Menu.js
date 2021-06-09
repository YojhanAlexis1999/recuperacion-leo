import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'


import ModuloPedidos from './modulos/ModuloPedidos'


const Menu = ({ navigation }) => {
    const menu = createDrawerNavigator()

    return (
        <NavigationContainer independent={true}>
            <menu.Navigator style={styles.color} initialRouteName="Productos">
                
                <menu.Screen name="Pedidos" component={() => <ModuloPedidos navigation={navigation}/>} />
                
            </menu.Navigator>
        </NavigationContainer>
    )
}

export default Menu

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        
    },
    color: {
        backgroundColor: "black"
    },
})