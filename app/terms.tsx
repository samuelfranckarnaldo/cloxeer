import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Link } from 'expo-router';

export default function TermsScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{t('termsTitle')}</Text>
      
      <Text style={styles.paragraph}>
        {t('termsContent1')}
      </Text>
      
      <Text style={styles.paragraph}>
        {t('termsContent2')}
      </Text>
      
      <Text style={styles.paragraph}>
        {t('termsContent3')}
      </Text>
      
      <Link href="/" style={styles.backLink}>
        <Text style={styles.backLinkText}>{t('backToStart')}</Text>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#512DA8',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    color: '#333',
  },
  backLink: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#512DA8',
    borderRadius: 8,
    alignItems: 'center',
  },
  backLinkText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
