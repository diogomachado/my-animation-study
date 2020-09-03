import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated, Easing } from 'react-native';

import Progress from './src/components/Progress';

export default function App() {

    const largure = useRef(new Animated.Value(100)).current;

    const executeAnimate = () => {
        console.log("Animando...");

        // Já executa
        Animated.timing(
            largure,
            {
                toValue: 280,
                duration: 300,
                useNativeDriver: false,
                easing: Easing.ease
            }
        ).start();
    }

    return (
        <View style={styles.container}>
            
            <Animated.View
                style={{
                    width: largure,
                    height: 32,
                    backgroundColor: "#ccc"
                }}
            >
            </Animated.View>

            <TouchableOpacity onPress={()=> executeAnimate()}>
                <Text>Animar agora</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
