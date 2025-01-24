import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../shared/tokens";
import { useLocalSearchParams } from "expo-router";

export default function CoursePage() {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text style={styles.title}>Страница курса №: {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: Colors.white,
    },
});
