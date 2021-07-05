# Makefile
install: #установка
         npm ci
brain-games: #запуск приветствия
             node bin/brain-games.js
brain-even: #запуск игры
             node bin/brain-even.js
publish: #публикация 
         npm publish --dry-run
make lint: 
           npx eslint .