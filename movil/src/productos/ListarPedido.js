import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ClienteAxios from '../config/axios'


const ListarPedido = ({ navigation }) => {

    const [pedido, setPedido] = useState([])

    const ListarPedidoUsuario = async () => {
        const response = await ClienteAxios.get('/beer24/pedidos')
        setPedido(response.data.pedidos)
    }

    const Eliminar = (id) => {
        setPedido(pedido.filter(pedido => pedido.id_pedidos !== id))
    }

    useEffect(() => {
        ListarPedidoUsuario()
    })

    return (
        <ImageBackground
            source={require('../imagenes/beer24.jpg')}
            style={styles.images}
        >
            <ScrollView>

                <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap' }}>
                    {pedido.map(item => {
                        return (
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ color: '#fff', fontSize: 15 }}>{item.cantidad}</Text>
                                <Text style={{ color: '#fff', fontSize: 15 }}>{item.nombre}</Text>
                                <Text style={{ color: '#fff', fontSize: 15 }}>{item.precio}</Text>
                                <TouchableOpacity style={{ padding: 5, backgroundColor: '#f00' }} onPress={() => Eliminar(item.id_pedidos)}>
                                    <Text style={{ color: '#fff', fontSize: 20 }}>-</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>

            </ScrollView>
            <TouchableOpacity style={{ width: '100%', height: 50, backgroundColor: '#123456' }} onPress={() => navigation.navigate("Domicilios")}>
                <Text style={{ color: '#fff', fontSize: 20 }}>REALIZAR PEDIDO</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default ListarPedido

const styles = StyleSheet.create({
    images: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    }
})