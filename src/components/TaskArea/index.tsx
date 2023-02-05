import React from "react"
import { View } from "react-native"
import { styles } from "./styles"

type TaskAreaProps = {
    children: React.ReactNode;
}

export const TaskArea: React.FC<TaskAreaProps> = ({ children }) => <View style={styles.container}>{ children }</View>