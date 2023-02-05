import { View } from 'react-native';
import { styles, colors } from './styles';

import { TaskItemAnalytics } from './components/TaskItemAnalytics';




export const TaskItem = () => (
    <View style={styles.container}>
        <View style={styles.taskItemAnalyticsContainer}>
            <TaskItemAnalytics
                title='Criadas'
                quantity={5}
                titleColor={colors.product.blue}
            />
            <TaskItemAnalytics
                title='Concluídas'
                quantity={2}
                titleColor={colors.product.purple}
                alignRight
            />
        </View>
    </View>
);