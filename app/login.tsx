import { StyleSheet, View } from "react-native";
import { Input } from "../shared/Input";
import { Colors, Gaps } from "../shared/tokens";
import { Button } from "../shared/Button";
import { ErrorNotification } from "../shared/error-notification";
import { useEffect, useState } from "react";
import CustomLink from "../shared/CustomLink";
import { useAtom } from "jotai";
import { loginAtom } from "../entities/auth/model/auth.state";
import { router } from "expo-router";
import Logo from "../shared/Logo";

export default function Login() {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [{ accessToken, isLoading, error }, login] = useAtom(loginAtom);
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
            router.replace("/(app)");
        }
    }, [accessToken]);

    return (
        <View style={styles.container}>
            <ErrorNotification error={localError} />
            <View style={styles.content}>
                <Logo />

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
                    <Button title="Войти" isLoading={isLoading} onPress={handleSubmit} />
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
    form: {
        alignSelf: "stretch",
        gap: Gaps.g16,
    },
});
