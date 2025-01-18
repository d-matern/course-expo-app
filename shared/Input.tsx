import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { Colors, Radius } from "./tokens";

export function Input(props: TextInputProps) {
    return (
        <TextInput style={styles.input} {...props} />
    )
};

const styles = StyleSheet.create({
    input: {
        height: 58,
        paddingHorizontal: 24,

        fontSize: 16,

        borderRadius: Radius.r10,
        backgroundColor: Colors.violetDark,
    }
});