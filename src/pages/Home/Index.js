import React from 'react';

import { View, Text, SafeAreaView, StyleSheet, Image, StatusBar, TouchableOpacity, ScrollView, Dimensions, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import login from '../Login2/Index';
import 'localstorage-polyfill';
import { useState } from 'react';
import { useEffect } from 'react';
function Link() {
    Linking.openURL('https://api.whatsapp.com/send?1=ptBR&phone=556133285806&text=Ol%C3%A1%2C%20Gostaria%20de%20marcar%20uma%20consulta!')
}

export default function Home({ route }) {
    const [nome, setNome] = useState("");
    const navigation = useNavigation();
    async function getData() {
        const response = await AsyncStorage.getItem("@App1")
        if (response) {
            setNome(response)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.header}>

                <StatusBar translucent={true} backgroundColor={'transparent'} />


                <View style={styles.view1}>
                    <Text style={styles.texto}>Olá, {nome}</Text>
                    <Text style={styles.subTexto}>O que deseja?</Text>
                </View>

            </View>
            <View style={styles.poha}>
                <ScrollView style={styles.scroll}>


                    <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('Dr')}>
                        <Image source={require('./../../../assets/Home/Dr.png')} style={styles.fotoButton} />
                        <Text style={styles.text}>Dr</Text>
                        <Text style={styles.text}>Campolina</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.div5} onPress={() => navigation.navigate('Ortog')}>
                        <Image source={require('./../../../assets/Home/Ortognatica.png')} style={styles.fotoButton} />
                        <Text style={styles.text}>    Cirurgia{'\n'}Ortognática</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.div3} onPress={() => navigation.navigate('DTM')}>
                        <Image source={require('./../../../assets/Home/DTM.png')} style={styles.fotoButton} />
                        <Text style={styles.text}>DTM</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.div4} onPress={() => navigation.navigate('Pos')}>
                        <Image source={require('./../../../assets/Home/PosOperatorio.png')} style={styles.fotoButton} />
                        <Text style={styles.text}>       Pós{'\n'}Operatório</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.div8} onPress={() => navigation.navigate('Clinica')}>
                        <Image source={require('./../../../assets/Home/Clinica.png')} style={styles.fotoButton} resizeMode='contain' />
                        <Text style={styles.text}>Sobre a Clínica</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.div6} onPress={() => navigation.navigate('Implante')}>
                        <Image source={require('./../../../assets/Home/Implante.png')} style={styles.fotoButton} />
                        <Text style={styles.text}>Implante</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.div7} onPress={() => navigation.navigate('Siso')}>
                        <Image source={require('./../../../assets/Home/Siso.png')} style={styles.fotoButton} />
                        <Text style={styles.text}>   Siso{'\n'}Incluso</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.div8} onPress={() => navigation.navigate('Prof')}>
                        <Image source={require('./../../../assets/Home/Profissionais.png')} style={styles.fotoButton} />
                        <Text style={styles.text}>Profissionais</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.div9} onPress={Link}>
                        <Image source={require('./../../../assets/Home/wpp.png')} style={styles.fotoButton} />
                        <Text style={styles.text}>  Marcar consulta!</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>

        </SafeAreaView>
    )
}
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242834',
        flex: 1,
    },
    scroll: {
        width: '100%',
        height: '135%',
        padding: '7.5%',
        left: '5%',
    },
    header: {
        backgroundColor: '#9fa75a',
        height: '11.90%',
    },
    texto: {
        paddingLeft: '31%',
        color: '#FFF',
        fontSize: 26,
        fontWeight: '600',
    },
    subTexto: {
        paddingLeft: '35%',
        color: '#FFF',
        fontSize: 18,
        fontWeight: '400',
    },
    fotoButton: {
        width: 120,
        height: 120,
    },
    div1: {
        width: '40%',
        height: '13%',
        alignItems: 'center',
    },
    div2: {
        width: '40%',
        height: '13%',
        bottom: '13%',
        left: '50%',
        alignItems: 'center',
    },
    div3: {
        width: '40%',
        height: '13%',
        bottom: '13%',
        alignItems: 'center',

    },
    div4: {
        width: '40%',
        height: '13%',
        bottom: '26%',
        left: '50%',
        alignItems: 'center',
    },
    div5: {
        width: '43%',
        height: '13%',
        top: '13%',
        alignItems: 'center',
        right: '1%'
    },
    div6: {
        bottom: '39%',
        width: '40%',
        height: '13%',
        left: '50%',
        alignItems: 'center',
    },
    div7: {
        bottom: '39%',
        width: '40%',
        height: '13%',
        alignItems: 'center',
        left: '1%'
    },
    div8: {
        bottom: '52%',
        width: '40%',
        height: '13%',
        left: '50%',
        alignItems: 'center',
    },
    div9: {
        bottom: '52%',
        width: '40%',
        height: '13%',
        alignItems: 'center',
        left: '1%'
    },
    text: {
        color: '#FFF',
        fontWeight: '500',
        fontSize: 16,
        fontFamily: "PoppinsMedium",
        top: '2%'
    },
    view1: {
        alignItems: 'center',
        right: 70,
        top: 25
    }
})