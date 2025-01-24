import { Image, StyleSheet, Text, View } from "react-native";
import { UserModel } from "../model/user.model";
import AvatarIcon from "../../../assets/icons/avatar-icon";
import { Colors, Fonts, Gaps, Radius } from "../../../shared/tokens";

export default function UserMenu({ user }: { user: UserModel | null }) {
    if (!user) {
        return null;
    }

    return (
        <View style={styles.container}>
            {user.photo ? (
                <Image style={styles.image} source={{ uri: user.photo }} />
            ) : (
                <AvatarIcon size={60} />
            )}
            <Text style={styles.name}>
                {user.surname ? `${user.name} ${user.surname}` : user.name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems: "center",
        gap: Gaps.g8,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: Radius.r30,
    },
    name: {
        color: Colors.white,
        fontFamily: Fonts.regular,
        fontSize: Fonts.f16,
    },
});
