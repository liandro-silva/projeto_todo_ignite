import { StatusBar, Text, StyleSheet } from 'react-native';
import { WrapperLayout } from './src/layouts';
import { colors } from './src/theme';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <WrapperLayout style={globalStyles.container}>
        <Text>asdasd</Text>
      </WrapperLayout>
    </>
  );
}

const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.base.gray[600],
    flex: 1,
    padding: 24
  }
})