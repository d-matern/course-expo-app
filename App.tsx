import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Input } from './shared/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            style={styles.headerLogo}
            source={require('./assets/favicon.png')}
          />
          <Text style={styles.headerTitle}>Native School</Text>
        </View>

        <View style={styles.form}>
          <Input placeholder='Email' placeholderTextColor='#afb2bf' />
          <Input placeholder='Пароль' placeholderTextColor='#afb2bf' />
          <Button title='Войти' />
        </View>

        <Text style={styles.link}>Восстановить пароль</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 55,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#16171d'
  },
  content: {
    alignItems: 'center',
    gap: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  headerLogo: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 800
  },
  form: {
    alignSelf: 'stretch',
    gap: 16
  },
  link: {
    color: 'pink',
    backgroundColor: 'transparent'
  }
});
