import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { styles, colors } from './styles';

import { Tasks } from '../../interfaces';

import { TaskItemAnalytics } from './components/TaskItemAnalytics';
import { TaskItemBox } from './components/TaskItemBox';

export type TaskItemProps = {
    tasks: Tasks[],
    onRemoveTask: (id: string) => void,
    onUpdateTask: (id: string, task: Tasks) => void
}

export const TaskItem: React.FC<TaskItemProps> = ({ tasks, onRemoveTask, onUpdateTask }) => (
    <View style={styles.container}>
        <View style={styles.taskItemAnalyticsContainer}>
            <TaskItemAnalytics
                title='Criadas'
                quantity={tasks.length}
                titleColor={colors.product.blue}
            />
            <TaskItemAnalytics
                title='Concluídas'
                quantity={tasks.filter(task => task.isCompleted === true).length}
                titleColor={colors.product.purple}
                alignRight
            />
        </View>
        <FlatList 
            data={tasks}
            keyExtractor={item => item.uuid}
            showsVerticalScrollIndicator={false}
            style={{
                height: '90%',
            }}
            ListEmptyComponent={() => (
                <Text style={{ color: 'red'}}>Vazio</Text>
            )}
            renderItem={({ item }) => (
                <TaskItemBox 
                    title={item.title}
                    id={item.uuid}
                    isCompleted={item.isCompleted}
                    onUpdateTask={onUpdateTask}
                    onRemoveTask={onRemoveTask}
                />
            )}
        />
    </View>
);