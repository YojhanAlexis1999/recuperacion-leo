import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native'

const Preparar = ({ route }) => {

    const { id_loca } = route.params

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

        </SafeAreaView>
    )
}

export default Preparar
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