import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../shared/tokens";
import { useAtom, useAtomValue } from "jotai";
import { profileAtom } from "../../entities/user/model/user.state";
import { authAtom } from "../../entities/auth/model/auth.state";
import { useEffect } from "react";
import { router, useRootNavigationState } from "expo-router";

export default function MyCourses() {
    const rootNavigationState = useRootNavigationState();
    const { access_token } = useAtomValue(authAtom);
    const [profile] = useAtom(profileAtom);

    useEffect(() => {
        if (!rootNavigationState.key) {
            return;
        }

        if (!access_token) {
            router.replace('/login')
        }
    }, [rootNavigationState, access_token]);

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