import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native'
import Boton from './componentes/Boton'
import ImagenMenu from '../imagenes/menu.png'
import ImagenPreparar from '../imagenes/preparar.png'
import ListadoProductos from './ListadoCategorias'
import Preparar from './Preparar'

const Productos = ({ route, navigation }) => {

    const { id_loca } = route.params

    const IrCarta = () => navigation.navigate("Usuario", { id_loca })
    const IrPreparar = () => navigation.navigate("ListadoCategorias", { id_loca })

    return (
        <SafeAreaView style={styles.safeArea}>
            <Image 
                source={require('../imagenes/beer24.jpg')}
                style={styles.imagen}
            />
            <Image 
                source={require('../imagenes/logo.png')}
                style={styles.logo}
            />
            <View style={styles.cajaBotones}>
                <Boton 
                    accion={IrCarta}
                    label="Menu" 
                    icono={ImagenMenu} 
                />
                <Boton 
                    accion={IrPreparar}
                    label="Preparar" 
                    icono={ImagenPreparar} 
                />
            </View>
        </SafeAreaView>
    )
}

export default Productos


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    imagen: {
        width: '100%',
        height: '100%',
        zIndex: -1
    },
    logo: {
        position: 'absolute',
        top: 50,
        right: 30,
        width: 150,
        height: 150,
    },
    cajaBotones: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 40,
        left: 50,
        width: 300,
        height: 200,
    }
})