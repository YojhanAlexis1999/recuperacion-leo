import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
import ClienteAxios from '../config/axios'

const ListarProductos = ({ route, navigation }) => {

    const [productos, setProductos] = useState([])

    const { id_loca, id_categoria } = route.params

    const ListarProductos = async () => {
        const response = await ClienteAxios.get(`/beer24/productos_loca/${id_categoria}/${id_loca}`)
        setProductos(response.data.productos)
    }

    useEffect(() => {
        ListarProductos()
    }, [])

    const aa = (
        <ImageBackground
            source={require('../imagenes/beer24.jpg')}
            style={styles.images}
        >
            <ScrollView>

                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                    {productos.map(item => {
                        return (
                            <View style={{ width: '40%', height: 200, marginLeft: 20,paddingHorizontal:20, marginTop: 10, borderWidth: 1, borderColor: '#fff' }}>
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate("MostrarProducto", { id_producto_: item.id_productos, precio_producto: item.precio })}>
                                        <Image
                                            source={{ uri: item.img }}
                                            style={{ width: '100%', height: 200 }}
                                        />
                                        <View style={{ position: 'absolute', bottom: 0 }}>
                                            <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>{item.nombre}</Text>
                                            <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>{item.precio}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}
                </View>

            </ScrollView>
        </ImageBackground>
    )

    return (
        <SafeAreaView style={styles.safeArea}>
            {aa}
            <TouchableOpacity style={{ width: '100%', height: 50, backgroundColor: '#123456' }} onPress={() => navigation.navigate("ListarPedido")}>
                <Text style={{ color: '#fff', fontSize: 20 }}>MOSTRAR PEDIDO</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}

export default ListarProductos

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    cajaCategorias: {

        width: '50%',
        height: '25%',
        left: 100,
        borderBottomStartRadius: 20

    },
    texto: {
        color: 'white',
        fontSize: 15,
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        flexWrap: "wrap",
        marginTop: 8,
        minHeight: 30,
    },
    images: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    }
})