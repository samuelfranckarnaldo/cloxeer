import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import '../locales/i18n';
import HamburgerMenu from '@/app/components/HamburgerMenu';
export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{
        headerRight: () => <HamburgerMenu />,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#512DA8',
        },
        headerTintColor: '#512DA8',
      }} />
      <StatusBar style="auto" />
    </>
  );
}
