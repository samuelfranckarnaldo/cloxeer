#!/bin/bash

# Subir projeto Cloxeer para o GitHub

echo "📦 Iniciando upload do projeto Cloxeer..."

# Garantir que é um repositório Git
if [ ! -d .git ]; then
  echo "🔧 Inicializando Git..."
    git init
    fi

    # Configurar o branch principal
    git branch -M main

    # Verificar se o remote 'origin' já existe
    if git remote | grep origin > /dev/null; then
      echo "🔁 Remote 'origin' já existe. Removendo..."
        git remote remove origin
        fi

        echo "🔗 Adicionando novo remote..."
        git remote add origin git@github.com:samuelfranckarnaldo/cloxeer.git

        echo "📂 Adicionando arquivos..."
        git add .

        echo "📝 Commitando alterações..."
        git commit -m "Commit automático do projeto Cloxeer via script"

        echo "🚀 Subindo para o GitHub..."
        git push -u origin main

        echo "✅ Projeto Cloxeer enviado com sucesso!"