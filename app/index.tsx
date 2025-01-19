import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../shared/Input";
import { Colors, Fonts, Gaps } from "../shared/tokens";
import { Button } from "../shared/Button";
import { ErrorNotification } from "../shared/error-notification";
import { useState } from "react";
import { Link } from "expo-router";

export default function App() {
    const [error, setError] = useState<string>();

    const alert = () => {
        setError("Неверный логин или пароль");
        setTimeout(() => setError(undefined), 4000);
    };

    return (
        <View style={styles.container}>
            <ErrorNotification error={error} />
            <View style={styles.content}>
                <View style={styles.header}>
                    {/* eslint-disable-next-line @typescript-eslint/no-require-imports */}
                    <Image style={styles.headerLogo} source={require("../assets/favicon.png")} />
                    <Text style={styles.headerTitle}>Native School</Text>
                </View>

                <View style={styles.form}>
                    <Input placeholder="Email" placeholderTextColor={Colors.gray} />
                    <Input placeholder="Пароль" placeholderTextColor={Colors.gray} isPassword />
                    <Button title="Войти" onPress={alert} />
                </View>

                <Link href="/repassword">
                    <Text style={styles.link}>Восстановить пароль</Text>
                </Link>
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
    link: {
        color: Colors.link,
    },
});
