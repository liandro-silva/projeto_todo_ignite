import { Alert, StatusBar, StyleSheet } from 'react-native';
import { Header, TaskArea, TaskForm, TaskItem } from './src/components';
import { useTaskManager } from './src/hooks/useTaskManager';
import { Tasks } from './src/interfaces';
import { WrapperLayout } from './src/layouts';
import { colors } from './src/theme';

export default function App() {
  const { tasks, createTask, updateTask, deleteTask} = useTaskManager();

  const handleCreateTask = (title: string) => {
    if(title.trim() === "") {
      return Alert.alert("Erro", "É preciso informar o título para adicionar uma nova tarefa")
    }

    const task: Tasks = {
      title,
      uuid: Math.floor(Date.now() * Math.random()).toString(36),
      isCompleted: false
    };

    createTask(task);
  }

  const handleUpdateTask = (id: string, task: Tasks) => updateTask(id, task);

  const handleDeleteTask = (id: string) => {
    return Alert.alert("Atenção", "Você tem certeza que deseja excluir esta atividade?", [
      {
        text: 'Não',
        style: 'destructive',
      },
      {
        text: 'Sim',
        onPress: () => deleteTask(id)
      }
    ])
  };

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <WrapperLayout style={globalStyles.container}>
        <Header />
        <TaskArea>
          <TaskForm onAddNewTask={handleCreateTask}/>
          <TaskItem
            tasks={tasks}
            onUpdateTask={handleUpdateTask}
            onRemoveTask={handleDeleteTask}
          />
        </TaskArea>
      </WrapperLayout>
    </>
  );
}

const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.base.gray[700],
    flex: 1,
    padding: 24
  }
});