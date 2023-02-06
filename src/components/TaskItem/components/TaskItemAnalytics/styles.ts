import { colors, font } from '../../../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 15,
        borderBottomWidth: 1.5,
        borderBottomColor: colors.base.gray[500]
    },
    analyticsTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    analyticsTitle: {
        fontSize: font.sizes.normal,
        fontWeight: '700'
    },
    analyticsQuantityContainer: {
        backgroundColor: colors.base.gray[400],
        borderRadius: 999,
        width: 25,
        height: 25,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    analyticsQuantity: {
        color: colors.base.gray[100],
        fontSize: font.sizes.normal
    }
})