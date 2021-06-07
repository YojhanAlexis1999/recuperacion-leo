import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Boton = (props) => {
    return (
        <TouchableOpacity onPress={props.accion} style={styles.boton}>
            <Text style={styles.label}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default Boton

const styles = StyleSheet.create({
    boton: {
        width: '60%',
        height: 60,
        borderWidth: 2,
        borderColor: '#000'
    },
    label: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginTop: 12
    }
})