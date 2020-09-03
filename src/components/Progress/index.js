import React, { useRef, useEffect } from "react";
import {
    Container,
    Value,
} from './styles';
import { Animated } from "react-native";

export default function Progress() {

    // Coleta o valor corrente
    const widthAnim = useRef(new Animated.Value(100)).current;

    const increase = () => {
        console.log("Executando animação");
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(widthAnim, {
            toValue: 120,
            duration: 5000,
            useNativeDriver: true
        }).start();
    };

    useEffect(() => {
        increase();
    }, []);

    return (
        <Container>
            <Value width={widthAnim._value}></Value>
        </Container>
    )
}