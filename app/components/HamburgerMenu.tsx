import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HamburgerMenu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Ionicons name="menu" size={32} color="#512DA8" />
      </TouchableOpacity>

      {menuVisible && (
        <View style={styles.menuDropdown}>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => {
              router.push('/settings');
              setMenuVisible(false);
            }}
          >
            <Ionicons name="settings" size={20} color="#512DA8" />
            <Text style={styles.menuText}>Configurações</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => {
              // Adicione outras ações aqui
              setMenuVisible(false);
            }}
          >
            <Ionicons name="person" size={20} color="#512DA8" />
            <Text style={styles.menuText}>Perfil</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => {
              // Adicione outras ações aqui
              setMenuVisible(false);
            }}
          >
            <Ionicons name="help-circle" size={20} color="#512DA8" />
            <Text style={styles.menuText}>Ajuda</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 100,
  },
  menuButton: {
    padding: 10,
  },
  menuDropdown: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    width: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});
