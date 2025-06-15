#!/bin/bash

# Entrar na pasta do app
cd ~/cloxeer/cloxeer-app || { echo "❌ Pasta cloxeer-app não encontrada"; exit 1; }

# Inicializar Git se ainda não tiver .git
if [ ! -d .git ]; then
  echo "🔧 Inicializando repositório Git..."
    git init
    fi

    # Garantir branch main
    git branch -M main

    # Verificar se origin já existe
    if git remote | grep origin > /dev/null; then
      echo "🔁 Remote 'origin' já existe. Removendo..."
        git remote remove origin
        fi

        # Adicionar remote correto
        echo "🔗 Adicionando remote para GitHub..."
        git remote add origin git@github.com:samuelfranckarnaldo/cloxeer.git

        # Adicionar arquivos
        echo "➕ Adicionando todos os arquivos..."
        git add .

        # Commit
        echo "📝 Criando commit..."
        git commit -m 'Subindo o código completo do app Cloxeer'

        # Push forçado para garantir atualização completa
        echo "🚀 Enviando para GitHub (forçado)..."
        git push -u origin main --force

        echo "✅ Projeto Cloxeer atualizado no GitHub com sucesso!"