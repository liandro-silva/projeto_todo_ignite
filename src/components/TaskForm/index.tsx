import { Text, TextInput, TouchableOpacity, View } from "react-native"

import { styles, colors } from './styles'
import Icon from '@expo/vector-icons/AntDesign';

export const TaskForm = () => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={colors.base.gray[300]} 
            />
            <TouchableOpacity style={styles.button}>
                <Text>
                    <Icon name="pluscircleo" size={16} color={colors.base.gray[100]} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}
