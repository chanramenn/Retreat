# Развертывание на GitHub Pages - Пошаговое руководство

## Что мы исправили

1. ✅ Обновили `vite.config.ts` с правильным базовым путем `/Retreat/`
2. ✅ Исправили `package.json` с правильным homepage URL
3. ✅ Обновили все SEO URL на GitHub Pages URL
4. ✅ Удалили CNAME файл (так как используем GitHub Pages URL)
5. ✅ Настроили GitHub Actions для автоматического развертывания

## Пошаговая инструкция для развертывания

### Шаг 1: Убедитесь, что репозиторий публичный
- Зайдите в Settings вашего репозитория
- Если репозиторий приватный, сделайте его публичным

### Шаг 2: Настройте GitHub Pages
1. Зайдите в **Settings** → **Pages**
2. В разделе **Source** выберите **"GitHub Actions"**

### Шаг 3: Добавьте секреты для API ключей
1. Зайдите в **Settings** → **Secrets and variables** → **Actions**
2. Нажмите **"New repository secret"**
3. Добавьте следующие секреты:
   - Имя: `VITE_WEB3FORMS_ACCESS_KEY`
   - Значение: `8bac3045-241d-4d05-9fa1-d5d0078de2c3`
   
   - Имя: `VITE_YANDEX_MAPS_API_KEY`
   - Значение: `0bccd4da-a4b4-4855-b246-316c5f545fca`

### Шаг 4: Запушьте изменения
```bash
git add .
git commit -m "Fix GitHub Pages deployment configuration"
git push origin main
```

### Шаг 5: Проверьте развертывание
1. Зайдите во вкладку **Actions** в вашем репозитории
2. Вы должны увидеть запущенный workflow "Deploy to GitHub Pages"
3. Дождитесь завершения (зеленая галочка)
4. Ваш сайт будет доступен по адресу: **https://chanramenn.github.io/Retreat/**

## Что делать, если все еще не работает

### Проверьте Actions
- Зайдите в **Actions** и посмотрите на ошибки в логах
- Убедитесь, что все секреты добавлены правильно

### Проверьте Settings → Pages
- Убедитесь, что Source установлен на "GitHub Actions"
- Проверьте, что нет ошибок в настройках

### Альтернативный способ (ручное развертывание)
Если GitHub Actions не работает, можете развернуть вручную:
```bash
npm run build
npm run deploy
```

## Ваш сайт будет доступен по адресу:
**https://chanramenn.github.io/Retreat/**

## Важные моменты
- Все пути теперь настроены для GitHub Pages
- Используется HashRouter для совместимости с GitHub Pages
- API ключи загружаются из переменных окружения
- Автоматическое развертывание при каждом push в main ветку