#!/data/data/com.termux/files/usr/bin/bash

echo "🧼 Limpando cache do bundler..."
rm -rf .expo .expo-shared dist web-build

echo "🚀 Iniciando projeto Expo com modo LAN..."

npx expo start --lan --clear
