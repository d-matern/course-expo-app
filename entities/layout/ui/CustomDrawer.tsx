import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Gaps } from "../../../shared/tokens";
import CustomLink from "../../../shared/CustomLink";
import Logo from "../../../shared/Logo";
import CloseDrawer from "../../../features/layout/ui/CloseDrower";
import { useSetAtom } from "jotai";
import { logoutAtom } from "../../auth/model/auth.state";

export default function CustomDrawer(props: DrawerContentComponentProps) {
    const logout = useSetAtom(logoutAtom);
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
            <View style={styles.content}>
                <CloseDrawer {...props.navigation} />
                <Text>Text</Text>
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
        paddingBottom: 40,
        flex: 1,
        backgroundColor: Colors.black,
    },
    content: {
        flex: 1,
    },
    footer: {
        alignItems: "center",
        gap: Gaps.g50,
    },
});
