import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../shared/Input";
import { Colors, Fonts, Gaps } from "../shared/tokens";
import { Button } from "../shared/Button";
import { ErrorNotification } from "../shared/error-notification";
import { useEffect, useState } from "react";
import CustomLink from "../shared/CustomLink";
import { useAtom } from "jotai";
import { loginAtom } from "../entities/auth/model/auth.state";
import { router } from "expo-router";

export default function Login() {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [{ accessToken, error }, login] = useAtom(loginAtom);
    const [localError, setlocalError] = useState<string>();

    const handleSubmit = () => {
        if (!email?.trim() || !password?.trim()) {
            return;
        }

        login({ email, password });
    };

    useEffect(() => {
        if (error) {
            setlocalError(error);
        }
    }, [error]);

    useEffect(() => {
        if (accessToken) {
            router.replace('/(app)');
        }
    }, [accessToken]);

    return (
        <View style={styles.container}>
            <ErrorNotification error={localError} />
            <View style={styles.content}>
                <View style={styles.header}>
                    {/* eslint-disable-next-line @typescript-eslint/no-require-imports */}
                    <Image style={styles.headerLogo} source={require("../assets/favicon.png")} />
                    <Text style={styles.headerTitle}>Native School</Text>
                </View>

                <View style={styles.form}>
                    <Input
                        placeholder="Email"
                        placeholderTextColor={Colors.gray}
                        onChangeText={setEmail}
                    />
                    <Input
                        placeholder="Пароль"
                        placeholderTextColor={Colors.gray}
                        isPassword
                        onChangeText={setPassword}
                    />
                    <Button title="Войти" onPress={handleSubmit} />
                </View>

                <CustomLink href="/repassword" text="Восстановить пароль" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 55,
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.black,
    },
    content: {
        alignItems: "center",
        gap: Gaps.g50,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: Gaps.g16,
    },
    headerLogo: {
        width: 24,
        height: 24,
    },
    headerTitle: {
        color: "white",
        fontSize: Fonts.f24,
        fontWeight: 800,
    },
    form: {
        alignSelf: "stretch",
        gap: Gaps.g16,
    },
});
