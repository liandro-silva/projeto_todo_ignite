import { StyleSheet } from 'react-native';
import { colors as Pallete, font } from "../../theme"

export const colors = Pallete;

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 24,
        position: 'absolute',
        top: -50,
    },
    textInput: {
        backgroundColor: colors.base.gray[500],
        color: colors.base.gray[100],
        fontSize: font.sizes.large,
        height: 54,
        borderRadius: 6,
        padding: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        backgroundColor: colors.product["blue-dark"],
        width: 54,
        height: 54,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    }
})