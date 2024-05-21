import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Modal, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    const [isModalVisible, setModalVisible] = useState(false); // Novo estado para controlar o modal
    const navigation = useNavigation();

    const handleAcessarPress = () => {
        // Quando o botão "Acessar" é pressionado, o modal é exibido
        setModalVisible(true);
    };

    const closeModal = () => {
        // Função para fechar o modal
        setModalVisible(false);
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="#034EA1" />
                    </TouchableOpacity>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <Text style={styles.message}>Faça parte da comunidade Shibata!</Text>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <Text style={styles.title}>Cadastre-se!</Text>
                        <TextInput placeholder='Nome/Sobrenome' style={styles.input} />
                        <TextInput placeholder='Email' style={styles.input} secureTextEntry />
                        <TextInput placeholder='Telefone ' style={styles.input} />
                        <TextInput placeholder='Senha' style={styles.input} />
                        <TextInput placeholder='Confirmar senha ' style={styles.input} />
                        <TouchableOpacity style={styles.button} onPress={handleAcessarPress}>
                            <Text style={styles.buttonText}>Acessar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRegister}>
                            <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                    {/* Modal para exibir a mensagem de login bem-sucedido */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isModalVisible}
                        onRequestClose={closeModal} // Necessário para Android
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalText}>Login bem-sucedido!</Text>
                                <Pressable style={styles.modalButton} onPress={closeModal}>
                                    <Text style={styles.modalButtonText}>Fechar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#034EA1"
    },
    containerForm: {
        backgroundColor: "#034EA1",
        flex: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title: {
        fontSize: 20,
        marginTop: 28,
        color: "#fff"
    
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        color: '#fff',
        
    },
    button: {
        backgroundColor: '#fff',
        width: '15',
        borderRadius: 14,
        paddingVertical: 11,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "##034EA1",
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1'
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 9999,
        padding: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000080',
    },
    modalContent: {
        backgroundColor: '#FFF',
        padding: 25,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 20,
        color: '#333',
        marginBottom: 10,
    },
    modalButton: {
        backgroundColor: '#034EA1',
        borderRadius: 4,
        padding: 10,
        marginTop: 10,
    },
    modalButtonText: {
        color: '#FFF',
        fontSize: 10,
    },
});