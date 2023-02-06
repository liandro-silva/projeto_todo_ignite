import { StyleSheet } from "react-native"
import { colors as Pallete, font as Typography } from "../../../../theme";

export const colors = Pallete;
export const font = Typography;

export const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.base.gray[400],
        marginBottom: 10
    },
    deleteIcon: {
        color: colors.base.gray[300],
        fontSize: 20
    },
    completed: {
        color: colors.product.purple,
        fontSize: 20,
        marginRight: 10
    },
    notCompleted: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: colors.product.blue,
        borderRadius: 999,
        marginRight: 10
    },
    title: {
        maxWidth: "80%",
        fontSize: font.sizes.normal,
        fontWeight: "400",
        flex: 1,
        color: colors.base.gray[100],
        marginRight: 15
    }
})