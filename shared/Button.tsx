import { Animated, Pressable, PressableProps, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts, Radius } from "./tokens";

export function Button({ title, ...props}: PressableProps & { title: string }) {
    const animatedValue = new Animated.ValueXY({
        x: 0,
        y: 0
    });

    Animated.timing(animatedValue, {
        toValue: {
            x: 100,
            y: 100
        },
        duration: 2000,
        useNativeDriver: false // Использование нативного драйвера анимации (не js)
    }).start();

    return (
        <Pressable {...props}>
            <Animated.View
                style={{
                    ...styles.button,
                    transform: [
                        { translateX: animatedValue.x },
                        { translateY: animatedValue.y }
                    ]
                }}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </Animated.View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 58,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Radius.r10,
        backgroundColor: Colors.primary
    },
    buttonText: {
        color: Colors.white,
        fontSize: Fonts.f18
    }
});