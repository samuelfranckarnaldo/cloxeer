import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function LoginScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/login-illustration.png')}
        style={styles.image}
      />

      <Text style={styles.title}>{t('welcomeBack')}</Text>

      <TextInput 
        placeholder={t('emailPlaceholder')} 
        style={styles.input} 
        placeholderTextColor="#ccc" 
      />
      
      <TextInput 
        placeholder={t('passwordPlaceholder')} 
        secureTextEntry 
        style={styles.input} 
        placeholderTextColor="#ccc" 
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{t('loginButton')}</Text>
      </TouchableOpacity>

      <Text style={styles.link}>{t('forgotPassword')}</Text>
      <Text style={styles.link}>{t('createAccount')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  image: {
    width: 220,
    height: 220,
    alignSelf: 'center',
    marginBottom: 16,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: '#512DA8',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F3F3F3',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#512DA8',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  link: {
    color: '#4CAF50',
    textAlign: 'center',
    marginTop: 6,
  },
});
