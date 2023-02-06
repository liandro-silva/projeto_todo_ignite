import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles, colors } from './styles'

import Icon from '@expo/vector-icons/AntDesign';

type TaskFormProps = {
    onAddNewTask: (title: string) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddNewTask }) => {
    const [title, setTitle] = React.useState('');
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={colors.base.gray[300]}
                value={title}
                onChangeText={e => setTitle(e)} 
            />
            <TouchableOpacity style={styles.button} onPress={() => onAddNewTask(title)}>
                <Text>
                    <Icon name="pluscircleo" size={16} color={colors.base.gray[100]} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}
