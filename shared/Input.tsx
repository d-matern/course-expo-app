import { StyleSheet, TextInput, TextInputProps } from "react-native";

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

        borderRadius: 10,
        backgroundColor: '#2e2d3d',
    }
});