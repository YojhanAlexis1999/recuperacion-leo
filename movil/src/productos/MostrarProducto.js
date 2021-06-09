import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import ClienteAxios from '../config/axios'

const MostrarProducto = ({ route }) => {

    const { id_producto_, precio_producto } = route.params

    const [producto, setProducto] = useState([])
    const [adiciones, setAdiciones] = useState('')
    const [cantidad, setCantidad] = useState(1)
    const [precio, setPrecio] = useState(parseInt(precio_producto))

    const ListarProducto = async () => {
        const response = await ClienteAxios.get(`/beer24/productos_loca/${id_producto_}`)
        setProducto(response.data.producto)
    }

    const AumentarCantidad = () => {
        setCantidad(cantidad + 1)
        setPrecio(precio + parseInt(JSON.stringify(producto[0].precio)))
    }

    const DisminuirCantidad = () => {
        setCantidad(cantidad - 1)
        setPrecio(precio - parseInt(JSON.stringify(producto[0].precio)))
    }

    const AgregarPedido = async () => {
        await ClienteAxios.post("/beer24/pedidos", {
            id_usuario: 1,
            id_productos: id_producto_,
            cantidad: cantidad,
            adiciones: adiciones,
            precio: precio
        })
    }

    useEffect(() => {
        ListarProducto()
    }, [])

    return (
        <ImageBackground
            source={require('../imagenes/beer24.jpg')}
            style={styles.images}
        >
            <SafeAreaView style={styles.safeArea}>

                    {producto.map(item => {
                        return (

                            <View>


                                <Text>{item.nombre}</Text>

                                <Image
                                    source={{ uri: item.img }}
                                    style={styles.imagen}
                                />


                                <Text style={styles.descripcion}>{item.descripcion}</Text>
                                <Text style={styles.texto}>{item.precio}</Text>

                            </View>

                        )
                    })}


                    <TouchableOpacity onPress={AumentarCantidad}>
                        <Text style={styles.texto}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={DisminuirCantidad}>
                        <Text style={styles.texto}>-</Text>
                    </TouchableOpacity>

                    <TextInput 
                        onChangeText={(value) => setAdiciones(value)}
                        placeholder="Adiciones"
                        style={{ width: '100%', height: 60, borderColor: '#fff', borderWidth: 2, color: '#fff' }}
                    />

                    <TouchableOpacity style={styles.boton} onPress={AgregarPedido}>
                        <Text >AGREGAR PEDIDO</Text>
                    </TouchableOpacity>

                    <Text style={styles.texto}>cantidad: {cantidad}</Text>
                    <Text style={styles.texto}>precio: {precio}</Text>

            </SafeAreaView>
        </ImageBackground>

    )
}

export default MostrarProducto

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    texto: {
        color: 'white',
        fontSize: 15,
        left: 30
    },
    descripcion: {
        color: 'white',
        fontSize: 20,
        left: 10
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        flexWrap: "wrap",
        marginTop: 8,
        backgroundColor: "aliceblue",
        minHeight: 30,
    },
    boton: {
        width: 150,
        height: 30,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#fff',
        zIndex: 1,
        fontSize: 50,
        color: 'white',
        left: 30,
        textAlign: 'center',
        backgroundColor: "green"
    },
    imagen: {
        width: '100%',
        height: '40%',
        zIndex: 1
    },
    images: {

        flex: 1,
        alignSelf: 'stretch',
        width: null,


    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
})