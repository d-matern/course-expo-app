import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, Text } from "react-native";
import { ErrorNotificationProps } from "./ErrorNotification.props";
import { Colors, Fonts } from "../tokens";

export function ErrorNotification({ error }: ErrorNotificationProps) {
    const [isShow, setIsShow] = useState(false);
    const animatedValue = new Animated.Value(-100);

    const onEnter = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        if (!error) {
            return;
        }

        setIsShow(true);

        const timerId = setTimeout(() => setIsShow(false), 3000);
        return () => clearTimeout(timerId);
    }, [error]);

    if (!isShow) {
        return <></>;
    }

    return (
        <Animated.View
            style={{
                ...styles.error,
                transform: [{ translateY: animatedValue }],
            }}
            onLayout={onEnter}
        >
            <Text style={styles.errorText}>{error}</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    error: {
        padding: 15,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.red,
    },
    errorText: {
        color: Colors.white,
        textAlign: "center",
        fontFamily: 'FiraSans',
        fontSize: Fonts.f16,
    },
});
