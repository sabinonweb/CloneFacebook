import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, ScrollView, KeyboardAvoidingView } from "react-native";
import React from "react";

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPasssword] = useState('')
    
    const handleEmailChange = (text) => {
        console.log('Email: ', email)
        console.log('Password: ', password)
    }


    return (
        <SafeAreaView>
            <KeyboardAvoidingView>
                <ScrollView style={styles.scrollviewcontent}>
                    <View style={styles.container}>
                        <Text style={styles.language}>English(US)</Text>
                        <Image
                        source={require('./Facebook-Logosu.png')}
                            style={styles.image}
                            resizeMode="contain"
                        />

                        <TextInput
                            style={styles.textInput1}
                            placeholder="Mobile Numbber or Email"
                            value={email}
                            onChangeText={text => {setEmail(text)}}
                            secureTextEntry={false}
                            />
                        <TextInput
                            style={styles.textInput2}
                            placeholder="Password"
                            value={password}
                            onChangeText={text => {setPasssword(text)}}
                            secureTextEntry={true}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    scrollviewcontent : {
        flexGrow: 1
    },
    language: {
        marginTop: 20,
        marginLeft: 130,
        fontSize: 16,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width: 150,
        height: 80,
        borderRadius: 10,
        marginLeft: 100,
        marginBottom: 150,
        marginTop: 50,
        justifyContent: 'center'
    },
    textInput1: {
        height: 50,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 20,
        width: 350,
        marginTop: 80,
        paddingHorizontal: 20,
        fontSize: 16,
        justifyContent: 'center',
        marginBottom:10
    },

    textInput2: {
        height: 50,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 20,
        width: 350,
        marginTop: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        justifyContent: 'center',
        marginBottom:10
    },
});