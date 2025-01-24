import { Image, StyleSheet, Text, View } from "react-native";
import { Fonts, Gaps } from "./tokens";

export default function Logo() {
    return (
        <View style={styles.logo}>
            {/* eslint-disable-next-line @typescript-eslint/no-require-imports */}
            <Image style={styles.logoImg} source={require("../assets/favicon.png")} />
            <Text style={styles.logoTitle}>Native School</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        flexDirection: "row",
        alignItems: "center",
        gap: Gaps.g16,
    },
    logoImg: {
        width: 24,
        height: 24,
    },
    logoTitle: {
        color: "white",
        fontSize: Fonts.f24,
        fontWeight: 800,
    },
});
