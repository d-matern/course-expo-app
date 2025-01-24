import { Pressable, StyleSheet, View } from "react-native";
import CloseIcon from "../../../assets/icons/close-icon";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/commonjs/src/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CloseDrawer(navigation: DrawerNavigationHelpers) {
    return (
        <Pressable onPress={() => navigation.closeDrawer()}>
            <View style={styles.button}>
                <CloseIcon />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 20,
        right: 20,
    },
});
