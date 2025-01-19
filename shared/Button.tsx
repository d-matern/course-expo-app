import { Pressable, PressableProps, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts, Radius } from "./tokens";

export function Button({ title, ...props}: PressableProps & { title: string }) {

    return (
        <Pressable style={styles.button} {...props}>
            <Text style={styles.buttonText}>{title}</Text>
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