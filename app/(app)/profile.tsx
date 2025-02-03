import { useState } from "react";
import { Alert, Text, View } from "react-native";
import { launchCameraAsync, PermissionStatus, useCameraPermissions } from "expo-image-picker";
import { Button } from "../../shared/Button";

export default function Profile() {
    const [avatar, setAvatar] = useState<string | null>(null);
    const [cameraPermissions, requestCameraPermissions] = useCameraPermissions();

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

    const pickAvatar = async () => {
        const isVerifyCameraPermissions = await verifyCameraPermissions()
        if (!isVerifyCameraPermissions) {
            return;
        }

        const result = await launchCameraAsync({
            mediaTypes: 'images',
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5
        });
        console.log(result);
    };

    return (
        <View>
            <Text>Profile</Text>
            <Button title="Изображение" onPress={pickAvatar} />
        </View>
    );
}
