import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useAtomValue } from "jotai";
import { authAtom } from "../../entities/auth/model/auth.state";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors, Fonts } from "../../shared/tokens";
import MenuButton from "../../features/layout/ui/MenuButton";

export default function AppLayout() {
    const { accessToken } = useAtomValue(authAtom);

    if (!accessToken) {
        return <Redirect href="/login" />
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: Colors.blackLight,
                        shadowColor: Colors.blackLight
                    },
                    headerLeft: () => <MenuButton navigation={navigation} />,
                    headerTitleStyle: {
                        color: Colors.white,
                        fontFamily: Fonts.regular,
                        fontSize: Fonts.f20
                    },
                    headerTitleAlign: 'center',
                    sceneStyle: {
                        backgroundColor: Colors.black
                    }
                })}
            >
                <Drawer.Screen name="index" options={{ title: 'Мои курсы' }} />
            </Drawer>
        </GestureHandlerRootView>
    );
};