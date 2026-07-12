# Day Trader v2 — Deployment Guide for Cloudflare Pages

## Структура файлов

```
daytrader/
├── index.html          # Главная страница
├── css/
│   └── main.css        # Стили (темная + светлая тема)
├── js/
│   └── app.js          # Логика приложения
└── assets/             # Для изображений (пустая)
```

## Как загрузить на Cloudflare Pages

### Способ 1: Drag & Drop

1. Откройте https://dash.cloudflare.com
2. Перейдите в **Pages** → **Create a project**
3. Выберите **Upload assets**
4. Перетащите папку `daytrader/` (или заархивируйте в ZIP и загрузите)
5. Нажмите **Deploy site**

### Способ 2: Git Integration

1. Создайте репозиторий на GitHub/GitLab
2. Загрузите файлы в репозиторий
3. В Cloudflare Pages выберите **Connect to Git**
4. Выберите репозиторий и ветку (обычно `main`)
5. Нажмите **Begin setup** → **Save and Deploy**

### Важно для Cloudflare Pages

- **Build command**: оставьте пустым (это статический сайт)
- **Build output directory**: `/` (корень)
- **Root directory**: `/`

## Что нового в v2

- ✅ Вход только через Google / Apple ID
- ✅ 7 языков: Русский, English, Deutsch, Español, 中文, Türkçe, Français
- ✅ Переключатель светлой/темной темы
- ✅ Календарь прибыли
- ✅ 9 бирж: Binance, Bybit, BingX, Gate.io, Kraken, MEXC, HTX, OKX, Bitunix
- ✅ Убрана вкладка Сигналы
- ✅ Полная адаптация под мобильные устройства
- ✅ Touch-оптимизация

## Подключение реальных API

В `js/app.js` замените функцию `connectApi()` на реальный запрос:

```javascript
fetch('/api/connect', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    exchange: selectedExchange.id,
    apiKey: document.getElementById('apiKey').value,
    apiSecret: document.getElementById('apiSecret').value,
    passphrase: document.getElementById('apiPassphrase').value
  })
})
```

## Лицензия
MIT
