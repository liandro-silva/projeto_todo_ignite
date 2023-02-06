import { StyleSheet } from 'react-native';
import { colors as Pallete, font } from '../../theme' 

export const colors = Pallete;

export const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 24
    },
    taskItemAnalyticsContainer: {
        flexDirection: 'row',
    },
    noTasksContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 66
    },
    noTasksTitle: {
        color: colors.base.gray[300],
        fontSize: font.sizes.normal,
        marginTop: 16,
        fontWeight: '700'
    },
    noTasksSubtitle: {
        color: colors.base.gray[300],
        fontSize: font.sizes.normal,
    }
})