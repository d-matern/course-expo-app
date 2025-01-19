import { Pressable, StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Colors, Radius } from "./tokens";
import EyeClosedIcon from "../assets/icons/eye-closed-icon";
import { useState } from "react";
import EyeOpenedIcon from "../assets/icons/eye-opened-icon";

export function Input(props: TextInputProps & { isPassword?: boolean }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const toggleShowPassword = () => {
        setIsPasswordVisible(prev => !prev);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                secureTextEntry={props.isPassword && !isPasswordVisible}
                {...props}
            />
            {
                props.isPassword &&
                    <Pressable style={styles.eyeIcon} onPress={toggleShowPassword}>
                        { isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
                    </Pressable>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 58,
        paddingHorizontal: 24,

        color: Colors.white,
        fontSize: 16,

        borderRadius: Radius.r10,
        backgroundColor: Colors.violetDark,
    },
    eyeIcon: {
        position: 'absolute',
        top: 17,
        right: 24
    }
});