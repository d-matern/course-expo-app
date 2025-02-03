import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { StyleSheet, View } from "react-native";
import { Colors, Gaps } from "../../../shared/tokens";
import CustomLink from "../../../shared/CustomLink";
import Logo from "../../../shared/Logo";
import CloseDrawer from "../../../features/layout/ui/CloseDrower";
import { useAtom, useSetAtom } from "jotai";
import { logoutAtom } from "../../../entities/auth/model/auth.state";
import { loadProfileAtom } from "../../../entities/user/model/user.state";
import { useEffect } from "react";
import UserMenu from "../../../entities/user/ui/UserMenu";
import AccountIcon from "../../../assets/icons/account-icon";
import SchoolIcon from "../../../assets/icons/school-icon";
import MenuItem from "../../../entities/layout/ui/MenuItem";

const MENU = [
    { title: "Курсы", icon: <SchoolIcon />, link: "index" },
    { title: "Профиль", icon: <AccountIcon />, link: "profile" },
];

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

                {MENU.map((m) => (
                    <MenuItem key={m.link} {...m} drawer={props} />
                ))}
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
