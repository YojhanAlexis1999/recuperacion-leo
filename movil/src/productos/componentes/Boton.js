import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

const Boton = (props) => {
    return (
        <TouchableOpacity onPress={props.accion}>
            <View style={styles.cajaBoton}>
                <Image 
                    source={props.icono}
                    style={styles.imagen}
                />
                <View style={styles.boton}>
                    <Text style={styles.texto}>{props.label}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Boton

const styles = StyleSheet.create({
    cajaBoton: {
        flexDirection: 'row',
    },
    boton: {
        width: 120,
        height: 30,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#fff',
        zIndex: -1
    },
    texto: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    imagen: {
        position: 'relative',
        left: 3,
        width: 40,
        height: 40,
        zIndex: 1
    }
})