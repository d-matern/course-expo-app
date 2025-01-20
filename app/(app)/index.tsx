import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../shared/tokens";
import { useAtom } from "jotai";
import { profileAtom } from "../../entities/user/model/user.state";

export default function MyCourses() {
    const [profile] = useAtom(profileAtom);

    return (
        <View>
            <Text style={styles.title}>
                {profile.profile?.name}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: Colors.white
    }
});