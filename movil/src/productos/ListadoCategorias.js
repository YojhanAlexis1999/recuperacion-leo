import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, ImageBackground,TouchableOpacity, ScrollView, FlatList } from 'react-native'
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
        <ScrollView style={{ zIndex: 1 }}>
            {categorias.map(item => {
                return (
                    <View key={item.id_cate_local} style={styles.cajaCategorias} >

                        {item.id_loca == 1 ?

                            <View style={styles.container, styles.row} >
                                <TouchableOpacity style={styles.cajaCategorias} onPress={() => navigation.navigate("ListadoProductos", { id_loca, id_categoria: item.id_categoria })}>
                                    <Image
                                        source={{ uri: item.img }}
                                        style={[styles.button, styles.box, styles.row]}
                                    //style={styles.cajaCategorias}
                                    />
                                </TouchableOpacity>
                            </View>

                            : null}

                        {item.id_loca == 2 ?
                            <View style={styles.container, styles.row}>
                                <TouchableOpacity onPress={() => navigation.navigate("ListadoProductos", { id_loca, id_categoria: item.id_categoria })}>
                                    <Image
                                        source={{ uri: item.img }}
                                        style={[styles.button, styles.box, styles.row]}
                                    />
                                </TouchableOpacity>
                            </View>
                            : null}

                        {item.id_loca == 3 ?
                            <View style={styles.container, styles.row}>
                                <TouchableOpacity onPress={() => navigation.navigate("ListadoProductos", { id_loca, id_categoria: item.id_categoria })}>
                                    <Image
                                        source={{ uri: item.img }}
                                        style={[styles.button, styles.box, styles.row]}
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

    return (
        <SafeAreaView style={styles.safeArea}>

            {listarCategorias}

        </SafeAreaView>
    )
}


export default ListadoCategorias


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
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
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start'

    },
    row: {
        flex: -1,
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        marginBottom: 10,
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
    },
    box: {
        flex: 1,
        width: 100,
        height: 100,
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        flexWrap: "wrap",
        marginTop: 8,
        backgroundColor: "aliceblue",
        minHeight: 30,


    },
    images: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    }
})