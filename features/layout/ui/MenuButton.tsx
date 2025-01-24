import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import MenuIcon from "../../../assets/icons/menu-icon";
import { useState } from "react";
import { Colors } from "../../../shared/tokens";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MenuButton({ navigation, ...props }: PressableProps & { navigation: any }) {
    const [clicked, setClicked] = useState(false);

    return (
        <Pressable
            {...props}
            onPressIn={() => setClicked(true)}
            onPressOut={() => setClicked(false)}
            onPress={() => navigation.toggleDrawer()}
        >
            <View
                style={{
                    ...styles.button,
                    backgroundColor: clicked ? Colors.violetDark : Colors.blackLight,
                }}
            >
                <MenuIcon />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
