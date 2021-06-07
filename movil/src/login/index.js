import React from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native'
import Boton from './componentes/Boton'

const Login = ({ navigation }) => {

    const CiudadNeiva = () => navigation.navigate("Productos", { id_loca: 1 })
    const CiudadFlorencia = () => navigation.navigate("Productos", { id_loca: 2 })
    const CiudadGarzon = () => navigation.navigate("Productos", { id_loca: 3 })

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
                <Text style={styles.titulo}>SELECCIONA TU CIUDAD: </Text>
                <Boton accion={CiudadNeiva} label="Neiva" />
                <Boton accion={CiudadFlorencia} label="Florencia" />
                <Boton accion={CiudadGarzon} label="Garzon" />
            </View>
        </SafeAreaView>
    )
}

export default Login

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
    titulo: {
        fontSize: 20,
        color: '#fff',
        marginTop: 10
    },
    cajaBotones: {
        position: 'absolute',
        top: 250,
        left: 70,
        width: '100%',
        height: 200
    }
})