import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/commonjs/src/types";
import { useState } from "react";
import { Pressable, PressableProps, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts, Gaps } from "../../../shared/tokens";

interface MenuItemProps {
    drawer: DrawerContentComponentProps;
    icon: React.ReactNode;
    link: string;
    title: string;
}

export default function MenuItem({
    drawer,
    icon,
    link,
    title,
    ...props
}: MenuItemProps & PressableProps) {
    const [clicked, setClicked] = useState(false);
    const isActive = drawer.state.routes[drawer.state.index].name === link;

    return (
        <Pressable
            {...props}
            onPress={() => drawer.navigation.navigate(link)}
            onPressIn={() => setClicked(true)}
            onPressOut={() => setClicked(false)}
        >
            <View
                style={{
                    ...styles.container,
                    borderColor: isActive ? Colors.primary : Colors.black,
                    backgroundColor: clicked || isActive ? Colors.violetDark : Colors.black,
                }}
            >
                {icon}
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: Gaps.g20,
        borderRightWidth: 5,
    },
    title: {
        color: Colors.white,
        fontSize: Fonts.f16,
        fontFamily: Fonts.regular,
    },
});
