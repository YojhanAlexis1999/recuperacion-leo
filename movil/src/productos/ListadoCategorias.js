import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView, } from 'react-native'
import ClienteAxios from '../config/axios'

const ListadoCategorias = ({ route, navigation }) => {

    const { id_loca } = route.params

    const [categorias, setCategorias] = useState([])

    const ListarCategorias = async () => {
        const response = await ClienteAxios.get(`/beer24/categorias_loca/${id_loca}`)
        setCategorias(response.data.categorias)
    }

    useEffect(() => {
        ListarCategorias()
    }, [])

    const listarCategorias = (
        <ImageBackground
            source={require('../imagenes/beer24.jpg')}
            style={styles.images}
        >
            <ScrollView>
                {categorias.map(item => {
                    return (
                        <View key={item.id_categoria} style={styles.cajaCategorias}>

                            {item.id_loca == 1 ?

                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate("ListadoProductos", { id_loca, id_categoria: item.id_categoria })}>
                                        <Image
                                            source={{ uri: item.img }}
                                            style={{ width: '100%', height: 400 }}
                                        //style={styles.cajaCategorias}
                                        />
                                    </TouchableOpacity>
                                </View>

                                : null}

                            {item.id_loca == 2 ?
                                <View style={styles.container}>
                                    <TouchableOpacity onPress={() => navigation.navigate("ListadoProductos", { id_loca, id_categoria: item.id_categoria })}>
                                        <Image
                                            source={{ uri: item.img }}
                                            style={{ width: '100%', height: 400 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                : null}

                            {item.id_loca == 3 ?
                                <View style={styles.container}>
                                    <TouchableOpacity onPress={() => navigation.navigate("ListadoProductos", { id_loca, id_categoria: item.id_categoria })}>
                                        <Image
                                            source={{ uri: item.img }}
                                            style={{ width: '100%', height: 400 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                : null}

                        </View>
                    )
                })}
            </ScrollView>
        </ImageBackground>
    )

    const aa = (
        <ImageBackground
            source={require('../imagenes/beer24.jpg')}
            style={styles.images}
        >
            <ScrollView>

                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                    {categorias.map(item => {
                        return (
                            <View style={{ width: '50%', height: 200 }}>
                                {item.id_loca == 1 ?

                                    <View style={{ width: '100%', height: 200, paddingHorizontal: 20, marginTop: 10, borderWidth: 1, borderColor: '#fff' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate("ListadoProductos", { id_loca, id_categoria: item.id_categoria })}>
                                            <Image
                                                source={{ uri: item.img }}
                                                style={{ width: '100%', height: 300 }}
                                            />
                                            <View style={{ position: 'absolute', top: 100, left: 18, zIndex: 1 }}>
                                                <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>{item.descripcion}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    : null}
                                {item.id_loca == 2 ?
                                    <View style={styles.container}>
                                        <TouchableOpacity onPress={() => navigation.navigate("ListadoProductos", { id_loca, id_categoria: item.id_categoria })}>
                                            <Image
                                                source={{ uri: item.img }}
                                                style={{ width: '100%', height: 300 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    : null}

                                {item.id_loca == 3 ?
                                    <View style={styles.container}>
                                        <TouchableOpacity onPress={() => navigation.navigate("ListadoProductos", { id_loca, id_categoria: item.id_categoria })}>
                                            <Image
                                                source={{ uri: item.img }}
                                                style={{ width: '100%', height: 300 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    : null}
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


export default ListadoCategorias


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    logo: {
        position: 'absolute',
        top: 50,
        right: 30,
        width: 150,
        height: 150,
        zIndex: 1
    },
    imagen: {
        width: '100%',
        height: '100%',
        zIndex: -10
    },
    cajaCategorias: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    box: {
        flex: 1,
        width: 100,
        height: 100,
    },
    container: {
        width: '50%',
        height: 300,
    },
    images: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    }
})