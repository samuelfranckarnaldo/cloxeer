import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import i18n from '../locales/i18n';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{t('settings')}</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('languageSettings')}</Text>
        
        <Pressable 
          style={[styles.languageButton, currentLanguage === 'en' && styles.selectedLanguage]}
          onPress={() => changeLanguage('en')}
        >
          <Text style={styles.languageText}>English</Text>
          {currentLanguage === 'en' && <View style={styles.selectedIndicator} />}
        </Pressable>
        
        <Pressable 
          style={[styles.languageButton, currentLanguage === 'pt' && styles.selectedLanguage]}
          onPress={() => changeLanguage('pt')}
        >
          <Text style={styles.languageText}>Português</Text>
          {currentLanguage === 'pt' && <View style={styles.selectedIndicator} />}
        </Pressable>
        
        <Pressable 
          style={[styles.languageButton, currentLanguage === 'es' && styles.selectedLanguage]}
          onPress={() => changeLanguage('es')}
        >
          <Text style={styles.languageText}>Español</Text>
          {currentLanguage === 'es' && <View style={styles.selectedIndicator} />}
        </Pressable>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('accountSettings')}</Text>
        <Pressable style={styles.settingItem}>
          <Text style={styles.settingText}>{t('privacySettings')}</Text>
        </Pressable>
        <Pressable style={styles.settingItem}>
          <Text style={styles.settingText}>{t('securitySettings')}</Text>
        </Pressable>
      </View>
      
      <Pressable style={styles.logoutButton} onPress={() => router.push('/')}>
        <Text style={styles.logoutText}>{t('logout')}</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#512DA8',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#512DA8',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  languageButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
  selectedLanguage: {
    backgroundColor: '#e8e0ff',
    borderWidth: 1,
    borderColor: '#512DA8',
  },
  languageText: {
    fontSize: 16,
    color: '#333',
  },
  selectedIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#512DA8',
  },
  settingItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingText: {
    fontSize: 16,
    color: '#444',
  },
  logoutButton: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#e74c3c',
  },
  logoutText: {
    color: '#e74c3c',
    fontSize: 16,
    fontWeight: '600',
  },
});
