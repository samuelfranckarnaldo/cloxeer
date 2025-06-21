import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Switch } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function StartScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [accepted, setAccepted] = useState(false);

  return (
    <ImageBackground
      source={require('@/assets/images/tela_start.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{t('welcome')}</Text>
          <Text style={styles.tagline}>{t('tagline')}</Text>
        </View>
        
        <View style={styles.footer}>
          <View style={styles.checkboxContainer}>
            <Switch
              value={accepted}
              onValueChange={setAccepted}
              thumbColor={accepted ? '#512DA8' : '#f4f3f4'}
              trackColor={{ false: '#aaa', true: '#512DA8' }}
            />
            <Text style={styles.termsText}>
              {t('termsPart1')}{' '}
              <Link href="/terms" style={styles.linkText}>
                {t('termsPart2')}
              </Link>
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.button, { opacity: accepted ? 1 : 0.5 }]}
            onPress={() => router.push('/login')}
            disabled={!accepted}
          >
            <Text style={styles.buttonText}>{t('start')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  tagline: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  footer: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  termsText: {
    marginLeft: 10,
    color: '#fff',
    flex: 1,
    fontSize: 13,
  },
  linkText: {
    color: '#e0d0ff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#512DA8',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
