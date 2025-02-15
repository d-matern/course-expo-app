import {
    ActivityIndicator,
    Animated,
    GestureResponderEvent,
    Pressable,
    PressableProps,
    StyleSheet,
    Text,
} from "react-native";
import { Colors, Fonts, Radius } from "./tokens";

interface InternalProps {
    title: string;
    isLoading?: boolean;
}

export function Button({ title, isLoading, ...props }: PressableProps & InternalProps) {
    const animatedValue = new Animated.Value(100);
    const color = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.primaryHover, Colors.primary],
    });

    const fadeIn = (event: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true, // Использование нативного драйвера анимации (не js)
        }).start();

        if (props.onPressIn) {
            props.onPressIn(event);
        }
    };

    const fadeOut = (event: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 100,
            duration: 100,
            useNativeDriver: true, // Использование нативного драйвера анимации (не js)
        }).start();

        if (props.onPressOut) {
            props.onPressOut(event);
        }
    };

    return (
        <Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
            <Animated.View
                style={{
                    ...styles.button,
                    backgroundColor: color,
                }}
            >
                {!isLoading && <Text style={styles.buttonText}>{title}</Text>}
                {isLoading && <ActivityIndicator size="small" color={Colors.white} />}
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 58,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Radius.r10,
    },
    buttonText: {
        color: Colors.white,
        fontFamily: Fonts.regular,
        fontSize: Fonts.f18,
    },
});
