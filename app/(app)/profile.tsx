import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ImageUploader } from "../../shared/ImageUploader";
import { Gaps, Radius } from "../../shared/tokens";
import AvatarIcon from "../../assets/icons/avatar-icon";

export default function Profile() {
    const [image, setImage] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            {image ? (
                <Image style={styles.image} source={{ uri: image }} />
            ) : (
                <AvatarIcon size={70} />
            )}
            <ImageUploader onUpload={setImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: Gaps.g20,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: Radius.r35,
    },
});
