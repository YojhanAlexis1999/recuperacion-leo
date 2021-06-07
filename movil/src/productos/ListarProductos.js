import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image,ImageBackground} from 'react-native'
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

    return (
        <ImageBackground
            source={require('../imagenes/beer24.jpg')}
            style={styles.images}
        >
            <SafeAreaView style={styles.safeArea}>
                {productos.map(item => {
                    return (
                        <View style={styles.cajaCategorias, styles.container}>
                            <TouchableOpacity onPress={() => navigation.navigate("MostrarProducto", { id_producto_: item.id_productos, precio_producto: item.precio })}>
                                <Text style={styles.texto} >{item.nombre}</Text>
                                <Image
                                    source={{ uri: item.img }}
                                    style={{ width: 100, height: 200 }}
                                />
                                <Text style={styles.texto}>{item.precio}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </SafeAreaView>
        </ImageBackground>

    )
}

export default ListarProductos

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    cajaCategorias: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        zIndex: 1,
        width: '100%',
        height: '100%',
        flexDirection: "row-reverse",
        alignContent: "space-between",

    },
    texto: {
        color: 'white',
        fontSize: 12,
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