import { SplashScreen, Stack } from "expo-router";
import { Colors } from "../shared/tokens";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const insets = useSafeAreaInsets();
    const [loaded, error] = useFonts({
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        FiraSans: require("../assets/fonts/FiraSans-Regular.ttf"),
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        "FiraSans-SemiBold": require("../assets/fonts/FiraSans-SemiBold.ttf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        paddingTop: insets.top,
                        paddingBottom: insets.bottom,
                        backgroundColor: Colors.black,
                    },
                }}
            >
                <Stack.Screen name="login" />
                <Stack.Screen
                    name="repassword/index"
                    options={{
                        presentation: "modal",
                    }}
                />
            </Stack>
        </SafeAreaProvider>
    );
}
