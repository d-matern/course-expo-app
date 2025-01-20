import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../shared/tokens";

export default function MyCourses() {

    return (
        <View>
            <Text style={styles.title}>
                Страница курсов
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: Colors.white
    }
});