import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { StyleSheet, View } from "react-native";
import { Colors, Gaps } from "../../../shared/tokens";
import CustomLink from "../../../shared/CustomLink";
import Logo from "../../../shared/Logo";
import CloseDrawer from "../../../features/layout/ui/CloseDrower";
import { useAtom, useSetAtom } from "jotai";
import { logoutAtom } from "../../auth/model/auth.state";
import { loadProfileAtom } from "../../user/model/user.state";
import { useEffect } from "react";
import UserMenu from "../../user/ui/UserMenu";

export default function CustomDrawer(props: DrawerContentComponentProps) {
    const [profile, loadProfile] = useAtom(loadProfileAtom);
    const logout = useSetAtom(logoutAtom);

    useEffect(() => {
        loadProfile();
    }, []);

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
            <View style={styles.content}>
                <CloseDrawer {...props.navigation} />
                <UserMenu user={profile.profile} />
            </View>
            <View style={styles.footer}>
                <CustomLink href="/login" text="Выход" onPress={() => logout()} />
                <Logo />
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    content: {
        flex: 1,
    },
    footer: {
        marginBottom: 40,
        alignItems: "center",
        gap: Gaps.g50,
    },
});
