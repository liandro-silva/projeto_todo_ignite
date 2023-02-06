import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { styles, colors } from './styles';

import { Tasks } from '../../interfaces';

import { TaskItemAnalytics } from './components/TaskItemAnalytics';
import { TaskItemBox } from './components/TaskItemBox';

import Icon from '@expo/vector-icons/Feather';


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
                <View style={styles.noTasksContainer}>
                    <Icon name='clipboard' size={56} color={colors.base.gray[300]}/>
                    <Text style={styles.noTasksTitle}>Você ainda não tem tarefas cadastradas</Text>
                    <Text style={styles.noTasksSubtitle}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
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