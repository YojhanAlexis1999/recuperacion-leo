import React, { useState } from 'react'
import { View, Text, TextInput, ImageBackground, TouchableOpacity,StyleSheet } from 'react-native'
import ClienteAxios from '../config/axios'

const Domicilios = () => {

    const [direccion, setDireccion] = useState('')
    const [barrio, setBarrio] = useState('')
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')

    const AgregarDomicilio = async () => {
        await ClienteAxios.post('/beer24/domicilios', {
            id_usuario: 1,
			direccion: direccion,
			barrio: barrio,
			nombre: nombre,
			telefono: telefono
        })
    }

    return (
        <ImageBackground
            source={require('../imagenes/beer24.jpg')}
            style={styles.images}
        >
            <View>
                <TextInput
                    onChangeText={(value) => setDireccion(value)}
                    placeholder="Direccion"
                    style={{ width: '100%', height: 60, borderColor: '#fff', borderWidth: 2, color: '#fff' }}
                />
                <TextInput
                    onChangeText={(value) => setBarrio(value)}
                    placeholder="Barrio"
                    style={{ width: '100%', height: 60, borderColor: '#fff', borderWidth: 2, color: '#fff' }}
                />
                <TextInput
                    onChangeText={(value) => setNombre(value)}
                    placeholder="Nombre"
                    style={{ width: '100%', height: 60, borderColor: '#fff', borderWidth: 2, color: '#fff' }}
                />
                <TextInput
                    onChangeText={(value) => setTelefono(value)}
                    placeholder="Telefono"
                    style={{ width: '100%', height: 60, borderColor: '#fff', borderWidth: 2, color: '#fff' }}
                />
                <TouchableOpacity style={{ width: '100%', height: 50, backgroundColor: '#123456' }} onPress={AgregarDomicilio}>
                    <Text style={{ color: '#fff', fontSize: 20 }}>AGREGAR DOMICILIO</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Domicilios


const styles = StyleSheet.create({
    images: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    }
})