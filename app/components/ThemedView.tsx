import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors'; // Se você tiver esse arquivo

type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...rest
}: ThemedViewProps) {
  // Se você tiver o hook useThemeColor
  // const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  
  // Se não tiver, use cor padrão
  const backgroundColor = Colors.light.background; // Altere para Colors.dark.background se necessário

  return <View style={[{ backgroundColor }, style]} {...rest} />;
}

// Se preferir exportação padrão
// export default ThemedView;
