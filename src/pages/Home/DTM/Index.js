import React from 'react';

import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, ScrollView, Dimensions, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
function Link() {
    Linking.openURL('https://api.whatsapp.com/send?1=ptBR&phone=5561981617806')
}

export default function Home({ route }) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <StatusBar translucent={true} backgroundColor={'transparent'} />


            <ScrollView style={styles.scroll}>
                <View style={styles.poha}>
                    <View style={styles.viewTexto}>
                        <Text style={styles.texto}>DTM</Text>
                    </View>

                    <View style={styles.divisaoPrincipal}>

                        <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('oqueDTM')}>
                            <Image source={require('./../../../../assets/dtm/atm-2.jpg')} style={styles.fotoButton} />
                            <Text style={styles.text}>   O que é{'\n'}     DTM?</Text>
                        </TouchableOpacity>



                        <TouchableOpacity style={styles.div2} onPress={() => navigation.navigate('tecnicaDTM')}>
                            <Image source={require('./../../../../assets/dtm/vetor2.jpg')} style={styles.fotoButton} />
                            <Text style={styles.text}>   Técnica {'\n'}  cirúrgica</Text>
                        </TouchableOpacity>



                        <TouchableOpacity style={styles.div3} onPress={() => navigation.navigate('preDTM')}>
                            <Image source={require('./../../../../assets/dtm/vetor.jpg')} style={styles.fotoButton} />
                            <Text style={styles.text}>       Pós{'\n'}operatório</Text>
                        </TouchableOpacity>



                        <TouchableOpacity style={styles.div4} onPress={() => navigation.navigate('principalDTM')}>
                            <Image source={require('./../../../../assets/dtm/sintomas11.jpg')} style={styles.fotoButton} />
                            <Text style={styles.text}>Principais{'\n'}Sintomas</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>


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
        height: 1350


    },

    poha: {
        padding: '5%',
        width: '100%',
        height: 920,
        //backgroundColor: 'blue',
        alignItems: 'center',
    },
    divisaoPrincipal: {
        //backgroundColor: 'red',
        width: '90%',
        marginTop: '30%',
        height: 700,
    },
    div1: {
        textAlign: 'center',
        alignItems: 'center',
        width: '50%',
        height: '25%',
        top: '0%',
        //backgroundColor: 'blue',
    },
    div2: {
        textAlign: 'center',
        alignItems: 'center',
        width: '50%',
        height: '25%',
        marginLeft: '50%',
        top: '-25%',
        //backgroundColor: 'blue',
    },
    div3: {
        textAlign: 'center',
        alignItems: 'center',
        width: '50%',
        height: '25%',
        top: '-20%',
        //backgroundColor: 'blue',
    },
    div4: {
        textAlign: 'center',
        alignItems: 'center',
        width: '50%',
        height: '25%',
        marginLeft: '50%',
        top: '-45%',
        //backgroundColor: 'blue',
    },
    texto: {
        color: '#FFF',
        fontSize: 42,
        fontWeight: '600',
        fontFamily: "PoppinsSemiBold",
    },
    fotoButton: {
        width: 120,
        height: 120,
        borderRadius: 20,
        padding: 10,
    },
    text: {
        color: '#FFF',
        fontWeight: '500',
        fontSize: 19,
        fontFamily: "PoppinsMedium",

    },
    viewTexto: {
        alignItems: 'center',
        width: '100%',
        marginTop: '10%',
    },


})