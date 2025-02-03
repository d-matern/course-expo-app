import { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import {
    launchCameraAsync,
    launchImageLibraryAsync,
    PermissionStatus,
    useCameraPermissions,
    useMediaLibraryPermissions
} from "expo-image-picker";
import { Button } from "../../shared/Button";

export default function Profile() {
    const [avatar, setAvatar] = useState<string | null>(null);
    const [cameraPermissions, requestCameraPermissions] = useCameraPermissions();
    const [libraryPermissions, requestLibraryPermissions] = useMediaLibraryPermissions();

    const verifyCameraPermissions = async () => {
        if (cameraPermissions?.status === PermissionStatus.UNDETERMINED) {
            const response = await requestCameraPermissions();
            return response.granted;
        }
        if (cameraPermissions?.status === PermissionStatus.DENIED) {
            Alert.alert("Недостаточно прав для доступа к камере");
            return false;
        }
        return true;
    };

    const verifyMediaPermissions = async () => {
        if (libraryPermissions?.status === PermissionStatus.UNDETERMINED) {
            const response = await requestLibraryPermissions();
            return response.granted;
        }
        if (libraryPermissions?.status === PermissionStatus.DENIED) {
            Alert.alert("Недостаточно прав для доступа к галерее");
            return false;
        }
        return true;
    };

    const captureAvatar = async () => {
        const isPermissionGranted = await verifyCameraPermissions()
        if (!isPermissionGranted) {
            return;
        }

        const result = await launchCameraAsync({
            mediaTypes: 'images',
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5
        });

        if (!result.assets) {
            return;
        }
        setAvatar(result.assets[0].uri);
    };

    const pickAvatar = async () => {
        const isPermissionGranted = await verifyMediaPermissions()
        if (!isPermissionGranted) {
            return;
        }

        const result = await launchImageLibraryAsync({
            mediaTypes: 'images',
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5
        });

        if (!result.assets) {
            return;
        }
        setAvatar(result.assets[0].uri);
    };

    return (
        <View>
            <Text>Profile</Text>
            <Button title="Сделать фото" onPress={captureAvatar} />
            <Button title="Выбрать из галереи" onPress={pickAvatar} />

            {avatar && <Image source={{ uri: avatar }} width={100} height={100} />}
        </View>
    );
}
