import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor'; // Se você tiver esse hook
import { Colors } from '@/constants/Colors'; // Se você tiver esse arquivo

type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'title' | 'default' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  // Se você tiver o hook useThemeColor
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  
  // Se não tiver, use cores padrão
  const color = Colors.light.text; // Altere para Colors.dark.text se necessário

  // Estilos baseados no tipo
  const textStyles = {
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color,
    },
    default: {
      fontSize: 16,
      color,
    },
    link: {
      fontSize: 16,
      color: Colors.light.tint,
      textDecorationLine: 'underline',
    },
  };

  return <Text style={[textStyles[type], style]} {...rest} />;
}

// Se preferir exportação padrão
// export default ThemedText;
