import { StyleSheet, Text } from "react-native";
import { Colors, Fonts, Gaps } from "../shared/tokens";
import CustomLink from "../shared/CustomLink";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UnmatchedCustom() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Страница не найдена</Text>
            <CustomLink href="/" text="На главную" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: Gaps.g16,
    },
    text: {
        color: Colors.white,
        fontFamily: "FiraSans",
        fontSize: Fonts.f18,
    },
});
