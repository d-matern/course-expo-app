import { Animated, Pressable, PressableProps, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts, Radius } from "./tokens";

export function Button({ title, ...props}: PressableProps & { title: string }) {
    const animatedValue = new Animated.Value(100);
    const color = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.primaryHover, Colors.primary]
    })

    Animated.timing(animatedValue, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true // Использование нативного драйвера анимации (не js)
    }).start();

    return (
        <Pressable {...props}>
            <Animated.View
                style={{
                    ...styles.button,
                    backgroundColor: color
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
        borderRadius: Radius.r10
    },
    buttonText: {
        color: Colors.white,
        fontSize: Fonts.f18
    }
});