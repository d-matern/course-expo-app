import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../shared/tokens";
import { Button } from "../../shared/Button";
import { useSetAtom } from "jotai";
import { logoutAtom } from "../../entities/auth/model/auth.state";

export default function MyCourses() {
    const logout = useSetAtom(logoutAtom);

    return (
        <View>
            <Text style={styles.title}>Курсы</Text>
            <Button title="Выйти" onPress={logout} />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: Colors.white,
    },
});
