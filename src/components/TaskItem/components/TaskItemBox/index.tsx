import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { styles, colors } from "./styles";
import { TaskItemProps } from "../..";

import Icon from '@expo/vector-icons/AntDesign';

type TaskItemBoxProps = Pick<TaskItemProps, 'onRemoveTask' | 'onUpdateTask'> & {
    isCompleted: boolean,
    title: string,
    id: string,
}

export const TaskItemBox: React.FC<TaskItemBoxProps> = ({ title, isCompleted, onRemoveTask, onUpdateTask, id }) => {
    return (
        <View style={{
            ...styles.container,
            backgroundColor: isCompleted ? colors.base.gray[400] : colors.base.gray[500]
        }}>
            {isCompleted && (
                <TouchableOpacity onPress={() => onUpdateTask(id, {
                    title,
                    uuid: id,
                    isCompleted: false
                })}>
                    <Icon style={styles.completed} name="checkcircle" />
                </TouchableOpacity>
            )}
            {!isCompleted && (
                <TouchableOpacity style={styles.notCompleted} onPress={() => onUpdateTask(id, {
                    title,
                    uuid: id,
                    isCompleted: true
                })}/>
            )}
            <Text style={{
                ...styles.title,
                textDecorationLine: isCompleted ? 'line-through' : 'none'
            }}>{title}</Text>
            <TouchableOpacity onPress={() => onRemoveTask(id)}>
                <Icon style={styles.deleteIcon} name="delete" />
            </TouchableOpacity>
        </View>
    )
}

