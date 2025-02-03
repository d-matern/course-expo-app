import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import {
    launchImageLibraryAsync,
    PermissionStatus,
    useMediaLibraryPermissions,
} from "expo-image-picker";
import { useState } from "react";
import UploadIcon from "../assets/icons/upload-icon";
import { Colors, Fonts, Gaps, Radius } from "./tokens";

interface ImageUploaderProps {
    onUpload: (uri: string) => void;
}

export function ImageUploader({ onUpload }: ImageUploaderProps) {
    const [image, setImage] = useState<string | null>(null);
    const [libraryPermissions, requestLibraryPermissions] = useMediaLibraryPermissions();

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

    const pickImage = async () => {
        const isPermissionGranted = await verifyMediaPermissions();
        if (!isPermissionGranted) {
            return;
        }

        const result = await launchImageLibraryAsync({
            mediaTypes: "images",
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        });

        if (!result.assets) {
            return;
        }
        setImage(result.assets[0].uri);
    };

    return (
        <Pressable onPress={pickImage}>
            <View style={styles.container}>
                <UploadIcon />
                <Text style={styles.text}>Загрузить изображение</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: Gaps.g8,
        backgroundColor: Colors.violetDark,
        borderRadius: Radius.r10,
    },
    text: {
        color: Colors.white,
        fontSize: Fonts.f14,
        fontFamily: Fonts.regular,
    },
});
