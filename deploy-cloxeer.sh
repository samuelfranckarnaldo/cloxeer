#!/bin/bash

# 🚀 Script para subir projeto Cloxeer via Gitpod

# Caminho da pasta do projeto
PROJETO="/workspace/cloxeer/cloxeer-app"

echo "📂 Entrando na pasta do projeto: $PROJETO"
cd "$PROJETO" || { echo "❌ Pasta não encontrada!"; exit 1; }

echo "🔍 Verificando repositório Git..."
if [ ! -d ".git" ]; then
  echo "📦 Repositório Git não inicializado. Inicializando..."
    git init
    fi

    echo "🔁 Verificando se remote 'origin' já existe..."
    if git remote | grep origin > /dev/null; then
      echo "❗ Remote 'origin' já existe. Removendo para garantir push limpo..."
        git remote remove origin
        fi

        echo "🔗 Adicionando novo remote..."
        git remote add origin git@github.com:samuelfranckarnaldo/cloxeer.git

        echo "🌱 Configurando branch como main..."
        git branch -M main

        echo "📥 Adicionando arquivos ao commit..."
        git add .

        echo "📝 Criando commit..."
        git commit -m '🚀 Upload completo do app Cloxeer via Gitpod' || echo "⚠️ Nada para commitar, possivelmente já comitado."

        echo "🚀 Forçando push para o GitHub..."
        git push --force origin main

        echo "✅ Projeto Cloxeer enviado com sucesso para o GitHub!"