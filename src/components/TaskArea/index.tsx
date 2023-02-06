import React from "react"
import { styles } from "./styles"

import { View } from "react-native"

type TaskAreaProps = {
    children: React.ReactNode;
}

export const TaskArea: React.FC<TaskAreaProps> = ({ children }) => <View style={styles.container}>{ children }</View>