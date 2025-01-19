import { StyleSheet, Text, View } from "react-native";
import { Colors, Fonts, Gaps } from "../shared/tokens";
import { Link } from "expo-router";

export default function UnmatchedCustom() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Страница не найдена
            </Text>
            <Link href="/">
                <Text style={styles.link}>На главную</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: Gaps.g16
    },
    text: {
        color: Colors.white,
        fontFamily: "FiraSans",
        fontSize: Fonts.f18
    },
    link: {
        color: Colors.link,
    },
});