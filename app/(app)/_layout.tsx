import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useAtomValue } from "jotai";
import { authAtom } from "../../entities/auth/model/auth.state";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function AppLayout() {
    const { accessToken } = useAtomValue(authAtom);

    if (!accessToken) {
        return <Redirect href="/login" />
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen name="index" />
            </Drawer>
        </GestureHandlerRootView>
    );
};