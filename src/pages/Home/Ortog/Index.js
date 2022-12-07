import React from 'react';

import { View, Text, SafeAreaView, StyleSheet, Image, StatusBar, TouchableOpacity, ScrollView, Dimensions, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

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
                        <Text style={styles.texto}>Cirurgia Ortognática</Text>
                    </View>
                    <View style={styles.divisaoPrincipal}>
                        <TouchableOpacity style={styles.div1} onPress={() => navigation.navigate('oque')}>
                            <Image source={require('./../../../../assets/Ortog/ortog.jpg')} style={styles.fotoButton} />
                            <Text style={styles.text}>O que é a{'\n'}Cirurgia{'\n'}Ortognática</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.div2} onPress={() => navigation.navigate('pre')}>
                            <Image source={require('./../../../../assets/dtm/vetor.jpg')} style={styles.fotoButton} />
                            <Text style={styles.text}>Pré{'\n'}operatório</Text>
                        </TouchableOpacity>



                        <TouchableOpacity style={styles.div3} onPress={() => navigation.navigate('tecnica')}>
                            <Image source={require('./../../../../assets/dtm/vetor2.jpg')} style={styles.fotoButton} />
                            <Text style={styles.text}>Técnica cirúrgica</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.div4} onPress={() => navigation.navigate('pos')}>
                            <Image source={require('./../../../../assets/dtm/vetor3.jpg')} style={styles.fotoButton} />
                            <Text style={styles.text}>Pós{'\n'}operatório</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.div5} onPress={() => navigation.navigate('duracao')}>
                            <Image source={require('./../../../../assets/Ortog/anestesia2.jpg')} style={styles.fotoButton} />
                            <Text style={styles.text}>Duração{'\n'}Local e{'\n'}Anestesia</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.div6} onPress={() => navigation.navigate('principal')}>
                            <Image source={require('./../../../../assets/dtm/sintomas11.jpg')} style={styles.fotoButton} />
                            <Text style={styles.text}> Principais{'\n'}Sintomas</Text>
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
        marginTop: '10%',
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
        bottom: '17%',
        //backgroundColor: 'blue',
    },
    div4: {
        textAlign: 'center',
        alignItems: 'center',
        width: '50%',
        height: '25%',
        marginLeft: '50%',
        bottom: '42%',
        //backgroundColor: 'blue',
    },
    div5: {
        textAlign: 'center',
        alignItems: 'center',
        width: '50%',
        height: '25%',
        bottom: '37%',
        //backgroundColor: 'blue',
    },
    div6: {
        textAlign: 'center',
        alignItems: 'center',
        width: '50%',
        height: '25%',
        marginLeft: '50%',
        bottom: '62%',
    },
    texto: {
        color: '#FFF',
        fontSize: 28,
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
        textAlign: 'center'
    },
    viewTexto: {
        alignItems: 'center',
        width: '100%',
        marginTop: '10%',
    },
})