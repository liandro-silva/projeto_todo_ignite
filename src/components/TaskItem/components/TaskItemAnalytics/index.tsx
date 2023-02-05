import { View, Text } from 'react-native';
import { styles } from './styles';

type TaskItemAnalyticsProps = {
    title: string,
    quantity: number,
    titleColor?: string,
    alignRight?: boolean,
}

export const TaskItemAnalytics: React.FC<TaskItemAnalyticsProps> = ({ title, quantity, titleColor, alignRight }) => (
    <View style={{
        ...styles.container,
        justifyContent: alignRight ? 'flex-end' : 'flex-start',
    }}>
        <View style={styles.analyticsTitleContainer}>
            <Text
                style={{
                    ...styles.analyticsTitle,
                    color: titleColor
                }}
            >
                {title}
            </Text>
        </View>
        <View style={styles.analyticsQuantityContainer}>
            <Text style={styles.analyticsQuantity}>
                {quantity}
            </Text>
        </View>
    </View>
);