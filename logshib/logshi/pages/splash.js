import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        // Navegar para a próxima tela após 2 segundos (ou o tempo desejado)
        setTimeout(() => {
            navigation.replace('index'); // Navegar para a tela inicial do aplicativo
        }, 2000); // Tempo em milissegundos
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Animatable.Image
                    animation="fadeOut"
                    duration={1500}
                    source={require('../assets/images/shibataBR.png')}
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#034EA1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        opacity: 0.7, // Opacidade inicial da logo
    },
    logo: {
        width: '80%',
        opacity: 1, // Opacidade final da logo
    },
});