/* ============================================
   DAY TRADER v2 — Application Logic
   7 languages, light/dark theme, calendar,
   9 exchanges, Google/Apple login only
   ============================================ */

// ============================================
// TRANSLATIONS
// ============================================
const I18N = {
  ru: {
    tagline: 'Профессиональный дневник трейдера. Автоматическая загрузка сделок, аналитика и статистика по всем вашим биржам в одном месте.',
    feat_unlimited: 'Неограниченное количество подключений',
    feat_sync: 'Автоматическая синхронизация по API',
    feat_notes: 'Комментарии, скриншоты и видео к сделкам',
    feat_privacy: 'Полная анонимность — мы не храним личные данные',
    feat_exchanges: 'Поддержка 9 крупнейших бирж',
    auth_subtitle: 'Войдите через социальную сеть',
    login_google: 'Войти через Google',
    login_apple: 'Войти через Apple',
    auth_terms: 'Продолжая, вы соглашаетесь с условиями использования и политикой конфиденциальности',
    nav_main: 'Основное',
    nav_dashboard: 'Дашборд',
    nav_journal: 'Журнал сделок',
    nav_calendar: 'Календарь',
    nav_analytics: 'Аналитика',
    nav_integrations: 'Интеграции',
    nav_api: 'API подключения',
    nav_system: 'Система',
    nav_settings: 'Настройки',
    online: 'Онлайн',
    balance: 'Баланс',
    stat_pnl: 'PnL (30 дней)',
    stat_winrate: 'Win Rate',
    stat_trades: 'Всего сделок',
    stat_pf: 'Profit Factor',
    chart_pnl: 'Динамика PnL',
    chart_exchanges: 'Распределение по биржам',
    total: 'Всего',
    recent_trades: 'Последние сделки',
    export_csv: 'Экспорт CSV',
    all_trades: 'Все сделки',
    th_pair: 'Пара',
    th_exchange: 'Биржа',
    th_direction: 'Направление',
    th_entry_exit: 'Вход / Выход',
    th_pnl: 'PnL',
    th_status: 'Статус',
    th_time: 'Время',
    filter_all: 'Все',
    filter_profit: 'Прибыльные',
    filter_loss: 'Убыточные',
    search_placeholder: 'Поиск по паре или бирже...',
    cal_month_pnl: 'PnL месяца',
    cal_month_trades: 'Сделок',
    cal_month_wr: 'Win Rate',
    analytics_sessions: 'Статистика по сессиям',
    analytics_metrics: 'Ключевые метрики',
    analytics_wr: 'Динамика Win Rate',
    analytics_top: 'Топ-5 прибыльных пар',
    analytics_worst: 'Топ-5 убыточных пар',
    api_connected: 'Подключённые биржи',
    api_desc: 'Добавьте API-ключи ваших бирж для автоматической синхронизации сделок. Ключи хранятся в зашифрованном виде.',
    api_add: 'Добавить биржу',
    api_security_title: 'Безопасность API-ключей',
    api_security_desc: 'Все ключи шифруются с помощью AES-256. Мы используем только разрешения на чтение (read-only). Ваши средства в безопасности — мы никогда не запрашиваем права на вывод.',
    set_profile: 'Профиль',
    set_profile_desc: 'Управление данными вашего аккаунта',
    set_name: 'Имя трейдера',
    set_name_desc: 'Отображается в профиле и рейтингах',
    set_email: 'Email',
    set_email_desc: 'Для уведомлений и входа',
    set_currency: 'Валюта отображения',
    set_currency_desc: 'Основная валюта для всех расчётов',
    set_notif: 'Уведомления',
    set_notif_desc: 'Настройте способы получения оповещений',
    set_notif_trades: 'Новые сделки',
    set_notif_trades_desc: 'Уведомление при каждой новой сделке',
    set_notif_daily: 'Дневной отчёт',
    set_notif_daily_desc: 'Сводка результатов за день',
    set_notif_signals: 'Сигналы',
    set_notif_signals_desc: 'Новые торговые идеи',
    set_notif_email: 'Email-уведомления',
    set_notif_email_desc: 'Дублировать в почту',
    set_privacy: 'Приватность',
    set_privacy_desc: 'Управление видимостью ваших данных',
    set_public: 'Публичный профиль',
    set_public_desc: 'Другие трейдеры видят вашу статистику',
    set_balance: 'Показывать баланс',
    set_balance_desc: 'Отображать сумму баланса в профиле',
    set_danger: 'Опасная зона',
    set_danger_desc: 'Необратимые действия',
    set_clear: 'Очистить все сделки',
    set_clear_desc: 'Удалить всю историю торговли',
    set_delete: 'Удалить аккаунт',
    set_delete_desc: 'Полное удаление всех данных',
    btn_clear: 'Очистить',
    btn_delete: 'Удалить',
    modal_api_title: 'Подключение API',
    api_label_name: 'Название подключения',
    api_label_placeholder: 'Например: Основной счёт',
    api_key_placeholder: 'Вставьте ваш API Key',
    api_key_hint: 'Найдите в настройках безопасности биржи',
    api_secret_placeholder: 'Вставьте ваш Secret Key',
    api_secret_hint: 'Никому не передавайте этот ключ',
    api_passphrase: 'Passphrase (если требуется)',
    api_pass_placeholder: 'Только для OKX',
    btn_cancel: 'Отмена',
    btn_connect: 'Подключить',
    modal_note_title: 'Заметка к сделке',
    trade: 'Сделка',
    note_placeholder: 'Опишите вашу мысль, эмоции, что пошло не так или отлично...',
    btn_save: 'Сохранить',
    confirm_title: 'Подтверждение',
    confirm_text: 'Вы уверены?',
    btn_confirm: 'Подтвердить',
    status_closed: 'Закрыта',
    status_open: 'Открыта',
    dir_long: 'LONG',
    dir_short: 'SHORT',
    mon: 'Пн', tue: 'Вт', wed: 'Ср', thu: 'Чт', fri: 'Пт', sat: 'Сб', sun: 'Вс',
    jan: 'Январь', feb: 'Февраль', mar: 'Март', apr: 'Апрель',
    may: 'Май', jun: 'Июнь', jul: 'Июль', aug: 'Август',
    sep: 'Сентябрь', oct: 'Октябрь', nov: 'Ноябрь', dec: 'Декабрь',
    cal_no_trades: 'Нет сделок',
    cal_trades: 'сделок',
    toast_welcome: 'Добро пожаловать в Day Trader!',
    toast_account_created: 'Аккаунт создан! Добро пожаловать!',
    toast_logout: 'Вы вышли из аккаунта',
    toast_note_saved: 'Заметка сохранена',
    toast_csv_exported: 'CSV файл скачан',
    toast_exchange_connected: 'успешно подключена',
    toast_exchange_disconnected: 'отключена',
    toast_history_cleared: 'История очищена',
    toast_account_deleted: 'Аккаунт удалён',
    toast_3_notif: 'У вас 3 новых уведомления',
    toast_search_dev: 'Глобальный поиск в разработке',
    toast_select_exchange: 'Выберите биржу из списка ниже',
    confirm_disconnect: 'Отключить биржу?',
    confirm_disconnect_text: 'Сделки перестанут синхронизироваться.',
    confirm_clear_history: 'Очистить историю?',
    confirm_clear_text: 'Все сделки будут удалены безвозвратно.',
    confirm_delete_account: 'Удалить аккаунт?',
    confirm_delete_text: 'Все данные будут удалены навсегда. Это действие необратимо.',
    connected: 'Подключено',
    disconnected: 'Не подключено',
    morning: 'Утро',
    day: 'День',
    evening: 'Вечер',
    night: 'Ночь',
    session_morning: '06:00 — 12:00',
    session_day: '12:00 — 18:00',
    session_evening: '18:00 — 00:00',
    session_night: '00:00 — 06:00',
    avg_pnl: 'Средний PnL на сделку',
    max_drawdown: 'Максимальная просадка',
    sharpe: 'Sharpe Ratio',
    avg_time: 'Среднее время в сделке',
    best_streak: 'Лучшая серия (подряд)',
    worst_streak: 'Худшая серия (подряд)',
    avg_risk: 'Средний риск на сделку',
    r_multiple: 'R-Multiple средний',
  },
  en: {
    tagline: 'Professional trading journal. Automatic trade import, analytics and statistics from all your exchanges in one place.',
    feat_unlimited: 'Unlimited connections',
    feat_sync: 'Automatic API synchronization',
    feat_notes: 'Comments, screenshots and videos for trades',
    feat_privacy: 'Full anonymity — we do not store personal data',
    feat_exchanges: 'Support for 9 major exchanges',
    auth_subtitle: 'Sign in with social account',
    login_google: 'Sign in with Google',
    login_apple: 'Sign in with Apple',
    auth_terms: 'By continuing, you agree to the Terms of Service and Privacy Policy',
    nav_main: 'Main',
    nav_dashboard: 'Dashboard',
    nav_journal: 'Trade Journal',
    nav_calendar: 'Calendar',
    nav_analytics: 'Analytics',
    nav_integrations: 'Integrations',
    nav_api: 'API Connections',
    nav_system: 'System',
    nav_settings: 'Settings',
    online: 'Online',
    balance: 'Balance',
    stat_pnl: 'PnL (30 days)',
    stat_winrate: 'Win Rate',
    stat_trades: 'Total Trades',
    stat_pf: 'Profit Factor',
    chart_pnl: 'PnL Dynamics',
    chart_exchanges: 'Distribution by Exchange',
    total: 'Total',
    recent_trades: 'Recent Trades',
    export_csv: 'Export CSV',
    all_trades: 'All Trades',
    th_pair: 'Pair',
    th_exchange: 'Exchange',
    th_direction: 'Direction',
    th_entry_exit: 'Entry / Exit',
    th_pnl: 'PnL',
    th_status: 'Status',
    th_time: 'Time',
    filter_all: 'All',
    filter_profit: 'Profitable',
    filter_loss: 'Losing',
    search_placeholder: 'Search by pair or exchange...',
    cal_month_pnl: 'Month PnL',
    cal_month_trades: 'Trades',
    cal_month_wr: 'Win Rate',
    analytics_sessions: 'Session Statistics',
    analytics_metrics: 'Key Metrics',
    analytics_wr: 'Win Rate Dynamics',
    analytics_top: 'Top-5 Profitable Pairs',
    analytics_worst: 'Top-5 Losing Pairs',
    api_connected: 'Connected Exchanges',
    api_desc: 'Add your exchange API keys for automatic trade synchronization. Keys are stored encrypted.',
    api_add: 'Add Exchange',
    api_security_title: 'API Key Security',
    api_security_desc: 'All keys are encrypted with AES-256. We use read-only permissions only. Your funds are safe — we never request withdrawal rights.',
    set_profile: 'Profile',
    set_profile_desc: 'Manage your account data',
    set_name: 'Trader Name',
    set_name_desc: 'Displayed in profile and rankings',
    set_email: 'Email',
    set_email_desc: 'For notifications and login',
    set_currency: 'Display Currency',
    set_currency_desc: 'Primary currency for all calculations',
    set_notif: 'Notifications',
    set_notif_desc: 'Configure how you receive alerts',
    set_notif_trades: 'New Trades',
    set_notif_trades_desc: 'Notification for each new trade',
    set_notif_daily: 'Daily Report',
    set_notif_daily_desc: 'Summary of daily results',
    set_notif_signals: 'Signals',
    set_notif_signals_desc: 'New trading ideas',
    set_notif_email: 'Email Notifications',
    set_notif_email_desc: 'Duplicate to email',
    set_privacy: 'Privacy',
    set_privacy_desc: 'Manage visibility of your data',
    set_public: 'Public Profile',
    set_public_desc: 'Other traders see your statistics',
    set_balance: 'Show Balance',
    set_balance_desc: 'Display balance amount in profile',
    set_danger: 'Danger Zone',
    set_danger_desc: 'Irreversible actions',
    set_clear: 'Clear All Trades',
    set_clear_desc: 'Delete all trading history',
    set_delete: 'Delete Account',
    set_delete_desc: 'Complete deletion of all data',
    btn_clear: 'Clear',
    btn_delete: 'Delete',
    modal_api_title: 'API Connection',
    api_label_name: 'Connection Name',
    api_label_placeholder: 'e.g. Main Account',
    api_key_placeholder: 'Paste your API Key',
    api_key_hint: 'Find it in exchange security settings',
    api_secret_placeholder: 'Paste your Secret Key',
    api_secret_hint: 'Never share this key with anyone',
    api_passphrase: 'Passphrase (if required)',
    api_pass_placeholder: 'Only for OKX',
    btn_cancel: 'Cancel',
    btn_connect: 'Connect',
    modal_note_title: 'Trade Note',
    trade: 'Trade',
    note_placeholder: 'Describe your thoughts, emotions, what went wrong or great...',
    btn_save: 'Save',
    confirm_title: 'Confirmation',
    confirm_text: 'Are you sure?',
    btn_confirm: 'Confirm',
    status_closed: 'Closed',
    status_open: 'Open',
    dir_long: 'LONG',
    dir_short: 'SHORT',
    mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat', sun: 'Sun',
    jan: 'January', feb: 'February', mar: 'March', apr: 'April',
    may: 'May', jun: 'June', jul: 'July', aug: 'August',
    sep: 'September', oct: 'October', nov: 'November', dec: 'December',
    cal_no_trades: 'No trades',
    cal_trades: 'trades',
    toast_welcome: 'Welcome to Day Trader!',
    toast_account_created: 'Account created! Welcome!',
    toast_logout: 'You have logged out',
    toast_note_saved: 'Note saved',
    toast_csv_exported: 'CSV file downloaded',
    toast_exchange_connected: 'successfully connected',
    toast_exchange_disconnected: 'disconnected',
    toast_history_cleared: 'History cleared',
    toast_account_deleted: 'Account deleted',
    toast_3_notif: 'You have 3 new notifications',
    toast_search_dev: 'Global search in development',
    toast_select_exchange: 'Select an exchange from the list below',
    confirm_disconnect: 'Disconnect exchange?',
    confirm_disconnect_text: 'Trades will stop syncing.',
    confirm_clear_history: 'Clear history?',
    confirm_clear_text: 'All trades will be permanently deleted.',
    confirm_delete_account: 'Delete account?',
    confirm_delete_text: 'All data will be permanently deleted. This action is irreversible.',
    connected: 'Connected',
    disconnected: 'Disconnected',
    morning: 'Morning',
    day: 'Day',
    evening: 'Evening',
    night: 'Night',
    session_morning: '06:00 — 12:00',
    session_day: '12:00 — 18:00',
    session_evening: '18:00 — 00:00',
    session_night: '00:00 — 06:00',
    avg_pnl: 'Avg PnL per trade',
    max_drawdown: 'Max Drawdown',
    sharpe: 'Sharpe Ratio',
    avg_time: 'Avg time in trade',
    best_streak: 'Best streak (in a row)',
    worst_streak: 'Worst streak (in a row)',
    avg_risk: 'Avg risk per trade',
    r_multiple: 'Avg R-Multiple',
  },
  de: {
    tagline: 'Professionelles Trading-Tagebuch. Automatischer Handelsimport, Analytik und Statistiken von allen Ihren Börsen an einem Ort.',
    feat_unlimited: 'Unbegrenzte Verbindungen',
    feat_sync: 'Automatische API-Synchronisierung',
    feat_notes: 'Kommentare, Screenshots und Videos für Trades',
    feat_privacy: 'Vollständige Anonymität — wir speichern keine persönlichen Daten',
    feat_exchanges: 'Unterstützung für 9 große Börsen',
    auth_subtitle: 'Mit sozialem Konto anmelden',
    login_google: 'Mit Google anmelden',
    login_apple: 'Mit Apple anmelden',
    auth_terms: 'Durch Fortfahren stimmen Sie den Nutzungsbedingungen und der Datenschutzrichtlinie zu',
    nav_main: 'Hauptmenü',
    nav_dashboard: 'Dashboard',
    nav_journal: 'Trade-Journal',
    nav_calendar: 'Kalender',
    nav_analytics: 'Analytik',
    nav_integrations: 'Integrationen',
    nav_api: 'API-Verbindungen',
    nav_system: 'System',
    nav_settings: 'Einstellungen',
    online: 'Online',
    balance: 'Guthaben',
    stat_pnl: 'PnL (30 Tage)',
    stat_winrate: 'Win Rate',
    stat_trades: 'Gesamte Trades',
    stat_pf: 'Profit Factor',
    chart_pnl: 'PnL-Dynamik',
    chart_exchanges: 'Verteilung nach Börse',
    total: 'Gesamt',
    recent_trades: 'Neueste Trades',
    export_csv: 'CSV exportieren',
    all_trades: 'Alle Trades',
    th_pair: 'Paar',
    th_exchange: 'Börse',
    th_direction: 'Richtung',
    th_entry_exit: 'Einstieg / Ausstieg',
    th_pnl: 'PnL',
    th_status: 'Status',
    th_time: 'Zeit',
    filter_all: 'Alle',
    filter_profit: 'Profitabel',
    filter_loss: 'Verlustreich',
    search_placeholder: 'Nach Paar oder Börse suchen...',
    cal_month_pnl: 'Monats-PnL',
    cal_month_trades: 'Trades',
    cal_month_wr: 'Win Rate',
    analytics_sessions: 'Sitzungsstatistik',
    analytics_metrics: 'Schlüsselkennzahlen',
    analytics_wr: 'Win Rate-Dynamik',
    analytics_top: 'Top-5 profitabelste Paare',
    analytics_worst: 'Top-5 verlustreichste Paare',
    api_connected: 'Verbundene Börsen',
    api_desc: 'Fügen Sie Ihre API-Schlüssel hinzu für automatische Trade-Synchronisierung. Schlüssel werden verschlüsselt gespeichert.',
    api_add: 'Börse hinzufügen',
    api_security_title: 'API-Schlüsselsicherheit',
    api_security_desc: 'Alle Schlüssel werden mit AES-256 verschlüsselt. Wir verwenden nur Leseberechtigungen. Ihre Gelder sind sicher.',
    set_profile: 'Profil',
    set_profile_desc: 'Verwalten Sie Ihre Kontodaten',
    set_name: 'Trader-Name',
    set_name_desc: 'Angezeigt im Profil und in Rankings',
    set_email: 'Email',
    set_email_desc: 'Für Benachrichtigungen und Login',
    set_currency: 'Anzeigewährung',
    set_currency_desc: 'Hauptwährung für alle Berechnungen',
    set_notif: 'Benachrichtigungen',
    set_notif_desc: 'Konfigurieren Sie Ihre Benachrichtigungen',
    set_notif_trades: 'Neue Trades',
    set_notif_trades_desc: 'Benachrichtigung bei jedem neuen Trade',
    set_notif_daily: 'Täglicher Bericht',
    set_notif_daily_desc: 'Zusammenfassung der Tagesergebnisse',
    set_notif_signals: 'Signale',
    set_notif_signals_desc: 'Neue Trading-Ideen',
    set_notif_email: 'Email-Benachrichtigungen',
    set_notif_email_desc: 'In Email duplizieren',
    set_privacy: 'Datenschutz',
    set_privacy_desc: 'Verwalten Sie die Sichtbarkeit Ihrer Daten',
    set_public: 'Öffentliches Profil',
    set_public_desc: 'Andere Trader sehen Ihre Statistiken',
    set_balance: 'Guthaben anzeigen',
    set_balance_desc: 'Guthaben im Profil anzeigen',
    set_danger: 'Gefahrenzone',
    set_danger_desc: 'Unumkehrbare Aktionen',
    set_clear: 'Alle Trades löschen',
    set_clear_desc: 'Gesamte Handelshistorie löschen',
    set_delete: 'Konto löschen',
    set_delete_desc: 'Vollständige Löschung aller Daten',
    btn_clear: 'Löschen',
    btn_delete: 'Löschen',
    modal_api_title: 'API-Verbindung',
    api_label_name: 'Verbindungsname',
    api_label_placeholder: 'z.B. Hauptkonto',
    api_key_placeholder: 'API Key einfügen',
    api_key_hint: 'In den Sicherheitseinstellungen der Börse finden',
    api_secret_placeholder: 'Secret Key einfügen',
    api_secret_hint: 'Diesen Schlüssel niemals teilen',
    api_passphrase: 'Passphrase (falls erforderlich)',
    api_pass_placeholder: 'Nur für OKX',
    btn_cancel: 'Abbrechen',
    btn_connect: 'Verbinden',
    modal_note_title: 'Trade-Notiz',
    trade: 'Trade',
    note_placeholder: 'Beschreiben Sie Ihre Gedanken, Emotionen, was schiefging oder großartig war...',
    btn_save: 'Speichern',
    confirm_title: 'Bestätigung',
    confirm_text: 'Sind Sie sicher?',
    btn_confirm: 'Bestätigen',
    status_closed: 'Geschlossen',
    status_open: 'Offen',
    dir_long: 'LONG',
    dir_short: 'SHORT',
    mon: 'Mo', tue: 'Di', wed: 'Mi', thu: 'Do', fri: 'Fr', sat: 'Sa', sun: 'So',
    jan: 'Januar', feb: 'Februar', mar: 'März', apr: 'April',
    may: 'Mai', jun: 'Juni', jul: 'Juli', aug: 'August',
    sep: 'September', oct: 'Oktober', nov: 'November', dec: 'Dezember',
    cal_no_trades: 'Keine Trades',
    cal_trades: 'Trades',
    toast_welcome: 'Willkommen bei Day Trader!',
    toast_account_created: 'Konto erstellt! Willkommen!',
    toast_logout: 'Sie haben sich abgemeldet',
    toast_note_saved: 'Notiz gespeichert',
    toast_csv_exported: 'CSV-Datei heruntergeladen',
    toast_exchange_connected: 'erfolgreich verbunden',
    toast_exchange_disconnected: 'getrennt',
    toast_history_cleared: 'Historie gelöscht',
    toast_account_deleted: 'Konto gelöscht',
    toast_3_notif: 'Sie haben 3 neue Benachrichtigungen',
    toast_search_dev: 'Globale Suche in Entwicklung',
    toast_select_exchange: 'Wählen Sie eine Börse aus der Liste',
    confirm_disconnect: 'Börse trennen?',
    confirm_disconnect_text: 'Trades werden nicht mehr synchronisiert.',
    confirm_clear_history: 'Historie löschen?',
    confirm_clear_text: 'Alle Trades werden dauerhaft gelöscht.',
    confirm_delete_account: 'Konto löschen?',
    confirm_delete_text: 'Alle Daten werden dauerhaft gelöscht. Diese Aktion ist unwiderruflich.',
    connected: 'Verbunden',
    disconnected: 'Nicht verbunden',
    morning: 'Morgen',
    day: 'Tag',
    evening: 'Abend',
    night: 'Nacht',
    session_morning: '06:00 — 12:00',
    session_day: '12:00 — 18:00',
    session_evening: '18:00 — 00:00',
    session_night: '00:00 — 06:00',
    avg_pnl: 'Durchschn. PnL pro Trade',
    max_drawdown: 'Max. Drawdown',
    sharpe: 'Sharpe Ratio',
    avg_time: 'Durchschn. Zeit im Trade',
    best_streak: 'Beste Serie (hintereinander)',
    worst_streak: 'Schlechteste Serie (hintereinander)',
    avg_risk: 'Durchschn. Risiko pro Trade',
    r_multiple: 'Durchschn. R-Multiple',
  },
  es: {
    tagline: 'Diario de trading profesional. Importación automática de operaciones, análisis y estadísticas de todos sus exchanges en un solo lugar.',
    feat_unlimited: 'Conexiones ilimitadas',
    feat_sync: 'Sincronización automática por API',
    feat_notes: 'Comentarios, capturas y videos para operaciones',
    feat_privacy: 'Anonimato total — no almacenamos datos personales',
    feat_exchanges: 'Soporte para 9 exchanges principales',
    auth_subtitle: 'Inicia sesión con cuenta social',
    login_google: 'Iniciar sesión con Google',
    login_apple: 'Iniciar sesión con Apple',
    auth_terms: 'Al continuar, aceptas los Términos de Servicio y la Política de Privacidad',
    nav_main: 'Principal',
    nav_dashboard: 'Panel',
    nav_journal: 'Diario de Operaciones',
    nav_calendar: 'Calendario',
    nav_analytics: 'Análisis',
    nav_integrations: 'Integraciones',
    nav_api: 'Conexiones API',
    nav_system: 'Sistema',
    nav_settings: 'Configuración',
    online: 'En línea',
    balance: 'Balance',
    stat_pnl: 'PnL (30 días)',
    stat_winrate: 'Win Rate',
    stat_trades: 'Operaciones Totales',
    stat_pf: 'Profit Factor',
    chart_pnl: 'Dinámica PnL',
    chart_exchanges: 'Distribución por Exchange',
    total: 'Total',
    recent_trades: 'Operaciones Recientes',
    export_csv: 'Exportar CSV',
    all_trades: 'Todas las Operaciones',
    th_pair: 'Par',
    th_exchange: 'Exchange',
    th_direction: 'Dirección',
    th_entry_exit: 'Entrada / Salida',
    th_pnl: 'PnL',
    th_status: 'Estado',
    th_time: 'Hora',
    filter_all: 'Todas',
    filter_profit: 'Rentables',
    filter_loss: 'Perdedoras',
    search_placeholder: 'Buscar por par o exchange...',
    cal_month_pnl: 'PnL del Mes',
    cal_month_trades: 'Operaciones',
    cal_month_wr: 'Win Rate',
    analytics_sessions: 'Estadísticas por Sesión',
    analytics_metrics: 'Métricas Clave',
    analytics_wr: 'Dinámica Win Rate',
    analytics_top: 'Top-5 Pares Rentables',
    analytics_worst: 'Top-5 Pares Perdedores',
    api_connected: 'Exchanges Conectados',
    api_desc: 'Añade tus claves API para sincronización automática de operaciones. Las claves se almacenan encriptadas.',
    api_add: 'Añadir Exchange',
    api_security_title: 'Seguridad de Claves API',
    api_security_desc: 'Todas las claves se encriptan con AES-256. Usamos solo permisos de lectura. Tus fondos están seguros.',
    set_profile: 'Perfil',
    set_profile_desc: 'Gestiona los datos de tu cuenta',
    set_name: 'Nombre del Trader',
    set_name_desc: 'Mostrado en el perfil y rankings',
    set_email: 'Email',
    set_email_desc: 'Para notificaciones e inicio de sesión',
    set_currency: 'Moneda de Visualización',
    set_currency_desc: 'Moneda principal para todos los cálculos',
    set_notif: 'Notificaciones',
    set_notif_desc: 'Configura cómo recibir alertas',
    set_notif_trades: 'Nuevas Operaciones',
    set_notif_trades_desc: 'Notificación por cada nueva operación',
    set_notif_daily: 'Informe Diario',
    set_notif_daily_desc: 'Resumen de resultados diarios',
    set_notif_signals: 'Señales',
    set_notif_signals_desc: 'Nuevas ideas de trading',
    set_notif_email: 'Notificaciones por Email',
    set_notif_email_desc: 'Duplicar al email',
    set_privacy: 'Privacidad',
    set_privacy_desc: 'Gestiona la visibilidad de tus datos',
    set_public: 'Perfil Público',
    set_public_desc: 'Otros traders ven tus estadísticas',
    set_balance: 'Mostrar Balance',
    set_balance_desc: 'Mostrar cantidad de balance en el perfil',
    set_danger: 'Zona de Peligro',
    set_danger_desc: 'Acciones irreversibles',
    set_clear: 'Borrar Todas las Operaciones',
    set_clear_desc: 'Eliminar todo el historial de trading',
    set_delete: 'Eliminar Cuenta',
    set_delete_desc: 'Eliminación completa de todos los datos',
    btn_clear: 'Borrar',
    btn_delete: 'Eliminar',
    modal_api_title: 'Conexión API',
    api_label_name: 'Nombre de Conexión',
    api_label_placeholder: 'ej. Cuenta Principal',
    api_key_placeholder: 'Pega tu API Key',
    api_key_hint: 'Encuéntralo en la configuración de seguridad del exchange',
    api_secret_placeholder: 'Pega tu Secret Key',
    api_secret_hint: 'Nunca compartas esta clave',
    api_passphrase: 'Passphrase (si es requerido)',
    api_pass_placeholder: 'Solo para OKX',
    btn_cancel: 'Cancelar',
    btn_connect: 'Conectar',
    modal_note_title: 'Nota de Operación',
    trade: 'Operación',
    note_placeholder: 'Describe tus pensamientos, emociones, qué salió mal o genial...',
    btn_save: 'Guardar',
    confirm_title: 'Confirmación',
    confirm_text: '¿Estás seguro?',
    btn_confirm: 'Confirmar',
    status_closed: 'Cerrada',
    status_open: 'Abierta',
    dir_long: 'LONG',
    dir_short: 'SHORT',
    mon: 'Lun', tue: 'Mar', wed: 'Mié', thu: 'Jue', fri: 'Vie', sat: 'Sáb', sun: 'Dom',
    jan: 'Enero', feb: 'Febrero', mar: 'Marzo', apr: 'Abril',
    may: 'Mayo', jun: 'Junio', jul: 'Julio', aug: 'Agosto',
    sep: 'Septiembre', oct: 'Octubre', nov: 'Noviembre', dec: 'Diciembre',
    cal_no_trades: 'Sin operaciones',
    cal_trades: 'operaciones',
    toast_welcome: '¡Bienvenido a Day Trader!',
    toast_account_created: '¡Cuenta creada! ¡Bienvenido!',
    toast_logout: 'Has cerrado sesión',
    toast_note_saved: 'Nota guardada',
    toast_csv_exported: 'Archivo CSV descargado',
    toast_exchange_connected: 'conectado exitosamente',
    toast_exchange_disconnected: 'desconectado',
    toast_history_cleared: 'Historial borrado',
    toast_account_deleted: 'Cuenta eliminada',
    toast_3_notif: 'Tienes 3 notificaciones nuevas',
    toast_search_dev: 'Búsqueda global en desarrollo',
    toast_select_exchange: 'Selecciona un exchange de la lista',
    confirm_disconnect: '¿Desconectar exchange?',
    confirm_disconnect_text: 'Las operaciones dejarán de sincronizarse.',
    confirm_clear_history: '¿Borrar historial?',
    confirm_clear_text: 'Todas las operaciones se eliminarán permanentemente.',
    confirm_delete_account: '¿Eliminar cuenta?',
    confirm_delete_text: 'Todos los datos se eliminarán permanentemente. Esta acción es irreversible.',
    connected: 'Conectado',
    disconnected: 'Desconectado',
    morning: 'Mañana',
    day: 'Día',
    evening: 'Tarde',
    night: 'Noche',
    session_morning: '06:00 — 12:00',
    session_day: '12:00 — 18:00',
    session_evening: '18:00 — 00:00',
    session_night: '00:00 — 06:00',
    avg_pnl: 'PnL promedio por operación',
    max_drawdown: 'Drawdown máximo',
    sharpe: 'Sharpe Ratio',
    avg_time: 'Tiempo promedio en operación',
    best_streak: 'Mejor racha (seguidas)',
    worst_streak: 'Peor racha (seguidas)',
    avg_risk: 'Riesgo promedio por operación',
    r_multiple: 'R-Multiple promedio',
  },
  zh: {
    tagline: '专业交易日志。自动导入交易记录，所有交易所的分析和统计尽在一处。',
    feat_unlimited: '无限连接',
    feat_sync: '自动API同步',
    feat_notes: '交易评论、截图和视频',
    feat_privacy: '完全匿名 — 我们不存储个人数据',
    feat_exchanges: '支持9大交易所',
    auth_subtitle: '使用社交账号登录',
    login_google: '使用 Google 登录',
    login_apple: '使用 Apple 登录',
    auth_terms: '继续即表示您同意服务条款和隐私政策',
    nav_main: '主菜单',
    nav_dashboard: '仪表盘',
    nav_journal: '交易日志',
    nav_calendar: '日历',
    nav_analytics: '分析',
    nav_integrations: '集成',
    nav_api: 'API连接',
    nav_system: '系统',
    nav_settings: '设置',
    online: '在线',
    balance: '余额',
    stat_pnl: 'PnL (30天)',
    stat_winrate: '胜率',
    stat_trades: '总交易数',
    stat_pf: '盈亏比',
    chart_pnl: 'PnL 动态',
    chart_exchanges: '交易所分布',
    total: '总计',
    recent_trades: '最近交易',
    export_csv: '导出 CSV',
    all_trades: '所有交易',
    th_pair: '交易对',
    th_exchange: '交易所',
    th_direction: '方向',
    th_entry_exit: '入场 / 出场',
    th_pnl: '盈亏',
    th_status: '状态',
    th_time: '时间',
    filter_all: '全部',
    filter_profit: '盈利',
    filter_loss: '亏损',
    search_placeholder: '按交易对或交易所搜索...',
    cal_month_pnl: '月度盈亏',
    cal_month_trades: '交易数',
    cal_month_wr: '胜率',
    analytics_sessions: '时段统计',
    analytics_metrics: '关键指标',
    analytics_wr: '胜率动态',
    analytics_top: 'Top-5 盈利交易对',
    analytics_worst: 'Top-5 亏损交易对',
    api_connected: '已连接交易所',
    api_desc: '添加您的交易所API密钥以自动同步交易。密钥已加密存储。',
    api_add: '添加交易所',
    api_security_title: 'API密钥安全',
    api_security_desc: '所有密钥均使用AES-256加密。我们仅使用只读权限。您的资金安全。',
    set_profile: '个人资料',
    set_profile_desc: '管理您的账户数据',
    set_name: '交易员名称',
    set_name_desc: '显示在资料和排名中',
    set_email: '邮箱',
    set_email_desc: '用于通知和登录',
    set_currency: '显示货币',
    set_currency_desc: '所有计算的主要货币',
    set_notif: '通知',
    set_notif_desc: '配置接收提醒的方式',
    set_notif_trades: '新交易',
    set_notif_trades_desc: '每笔新交易的通知',
    set_notif_daily: '日报',
    set_notif_daily_desc: '每日结果汇总',
    set_notif_signals: '信号',
    set_notif_signals_desc: '新的交易思路',
    set_notif_email: '邮件通知',
    set_notif_email_desc: '复制到邮箱',
    set_privacy: '隐私',
    set_privacy_desc: '管理您的数据可见性',
    set_public: '公开资料',
    set_public_desc: '其他交易员可以看到您的统计',
    set_balance: '显示余额',
    set_balance_desc: '在资料中显示余额金额',
    set_danger: '危险区域',
    set_danger_desc: '不可逆操作',
    set_clear: '清除所有交易',
    set_clear_desc: '删除所有交易历史',
    set_delete: '删除账户',
    set_delete_desc: '完全删除所有数据',
    btn_clear: '清除',
    btn_delete: '删除',
    modal_api_title: 'API连接',
    api_label_name: '连接名称',
    api_label_placeholder: '例如：主账户',
    api_key_placeholder: '粘贴您的 API Key',
    api_key_hint: '在交易所安全设置中查找',
    api_secret_placeholder: '粘贴您的 Secret Key',
    api_secret_hint: '切勿与他人分享此密钥',
    api_passphrase: 'Passphrase（如需要）',
    api_pass_placeholder: '仅用于 OKX',
    btn_cancel: '取消',
    btn_connect: '连接',
    modal_note_title: '交易备注',
    trade: '交易',
    note_placeholder: '描述您的想法、情绪、哪里出了问题或很棒...',
    btn_save: '保存',
    confirm_title: '确认',
    confirm_text: '您确定吗？',
    btn_confirm: '确认',
    status_closed: '已关闭',
    status_open: '持仓中',
    dir_long: '做多',
    dir_short: '做空',
    mon: '一', tue: '二', wed: '三', thu: '四', fri: '五', sat: '六', sun: '日',
    jan: '一月', feb: '二月', mar: '三月', apr: '四月',
    may: '五月', jun: '六月', jul: '七月', aug: '八月',
    sep: '九月', oct: '十月', nov: '十一月', dec: '十二月',
    cal_no_trades: '无交易',
    cal_trades: '笔交易',
    toast_welcome: '欢迎来到 Day Trader！',
    toast_account_created: '账户已创建！欢迎！',
    toast_logout: '您已退出登录',
    toast_note_saved: '备注已保存',
    toast_csv_exported: 'CSV 文件已下载',
    toast_exchange_connected: '连接成功',
    toast_exchange_disconnected: '已断开连接',
    toast_history_cleared: '历史已清除',
    toast_account_deleted: '账户已删除',
    toast_3_notif: '您有 3 条新通知',
    toast_search_dev: '全局搜索开发中',
    toast_select_exchange: '从列表中选择交易所',
    confirm_disconnect: '断开交易所？',
    confirm_disconnect_text: '交易将停止同步。',
    confirm_clear_history: '清除历史？',
    confirm_clear_text: '所有交易将被永久删除。',
    confirm_delete_account: '删除账户？',
    confirm_delete_text: '所有数据将被永久删除。此操作不可逆。',
    connected: '已连接',
    disconnected: '未连接',
    morning: '上午',
    day: '下午',
    evening: '傍晚',
    night: '夜间',
    session_morning: '06:00 — 12:00',
    session_day: '12:00 — 18:00',
    session_evening: '18:00 — 00:00',
    session_night: '00:00 — 06:00',
    avg_pnl: '平均每笔盈亏',
    max_drawdown: '最大回撤',
    sharpe: '夏普比率',
    avg_time: '平均持仓时间',
    best_streak: '最佳连胜',
    worst_streak: '最差连败',
    avg_risk: '平均每笔风险',
    r_multiple: '平均 R-Multiple',
  },
  tr: {
    tagline: 'Profesyonel trading günlüğü. Tüm borsalarınızdan otomatik işlem içe aktarma, analiz ve istatistik tek bir yerde.',
    feat_unlimited: 'Sınırsız bağlantı',
    feat_sync: 'Otomatik API senkronizasyonu',
    feat_notes: 'İşlemler için yorumlar, ekran görüntüleri ve videolar',
    feat_privacy: 'Tam anonimlik — kişisel verileri saklamıyoruz',
    feat_exchanges: '9 büyük borsa desteği',
    auth_subtitle: 'Sosyal hesapla giriş yap',
    login_google: 'Google ile giriş yap',
    login_apple: 'Apple ile giriş yap',
    auth_terms: 'Devam ederek Hizmet Şartları ve Gizlilik Politikasını kabul etmiş olursunuz',
    nav_main: 'Ana Menü',
    nav_dashboard: 'Panel',
    nav_journal: 'İşlem Günlüğü',
    nav_calendar: 'Takvim',
    nav_analytics: 'Analitik',
    nav_integrations: 'Entegrasyonlar',
    nav_api: 'API Bağlantıları',
    nav_system: 'Sistem',
    nav_settings: 'Ayarlar',
    online: 'Çevrimiçi',
    balance: 'Bakiye',
    stat_pnl: 'PnL (30 gün)',
    stat_winrate: 'Kazanma Oranı',
    stat_trades: 'Toplam İşlem',
    stat_pf: 'Kar Faktörü',
    chart_pnl: 'PnL Dinamiği',
    chart_exchanges: 'Borsa Dağılımı',
    total: 'Toplam',
    recent_trades: 'Son İşlemler',
    export_csv: 'CSV Dışa Aktar',
    all_trades: 'Tüm İşlemler',
    th_pair: 'Çift',
    th_exchange: 'Borsa',
    th_direction: 'Yön',
    th_entry_exit: 'Giriş / Çıkış',
    th_pnl: 'PnL',
    th_status: 'Durum',
    th_time: 'Saat',
    filter_all: 'Tümü',
    filter_profit: 'Kârlı',
    filter_loss: 'Zararlı',
    search_placeholder: 'Çift veya borsaya göre ara...',
    cal_month_pnl: 'Aylık PnL',
    cal_month_trades: 'İşlem',
    cal_month_wr: 'Kazanma Oranı',
    analytics_sessions: 'Seans İstatistikleri',
    analytics_metrics: 'Anahtar Metrikler',
    analytics_wr: 'Kazanma Oranı Dinamiği',
    analytics_top: 'En Kârlı 5 Çift',
    analytics_worst: 'En Zararlı 5 Çift',
    api_connected: 'Bağlı Borsalar',
    api_desc: 'Otomatik işlem senkronizasyonu için API anahtarlarınızı ekleyin. Anahtarlar şifreli saklanır.',
    api_add: 'Borsa Ekle',
    api_security_title: 'API Anahtar Güvenliği',
    api_security_desc: 'Tüm anahtarlar AES-256 ile şifrelenir. Sadece salt okunur izinler kullanıyoruz. Fonlarınız güvende.',
    set_profile: 'Profil',
    set_profile_desc: 'Hesap verilerinizi yönetin',
    set_name: 'Trader Adı',
    set_name_desc: 'Profil ve sıralamalarda görünür',
    set_email: 'Email',
    set_email_desc: 'Bildirimler ve giriş için',
    set_currency: 'Görüntüleme Para Birimi',
    set_currency_desc: 'Tüm hesaplamalar için ana para birimi',
    set_notif: 'Bildirimler',
    set_notif_desc: 'Uyarı alma şeklinizi yapılandırın',
    set_notif_trades: 'Yeni İşlemler',
    set_notif_trades_desc: 'Her yeni işlem için bildirim',
    set_notif_daily: 'Günlük Rapor',
    set_notif_daily_desc: 'Günlük sonuçların özeti',
    set_notif_signals: 'Sinyaller',
    set_notif_signals_desc: 'Yeni trading fikirleri',
    set_notif_email: 'Email Bildirimleri',
    set_notif_email_desc: 'E-postaya kopyala',
    set_privacy: 'Gizlilik',
    set_privacy_desc: 'Verilerinizin görünürlüğünü yönetin',
    set_public: 'Herkese Açık Profil',
    set_public_desc: 'Diğer traderlar istatistiklerinizi görür',
    set_balance: 'Bakiyeyi Göster',
    set_balance_desc: 'Profilde bakiye tutarını göster',
    set_danger: 'Tehlikeli Bölge',
    set_danger_desc: 'Geri alınamaz işlemler',
    set_clear: 'Tüm İşlemleri Temizle',
    set_clear_desc: 'Tüm trading geçmişini sil',
    set_delete: 'Hesabı Sil',
    set_delete_desc: 'Tüm verilerin tam silinmesi',
    btn_clear: 'Temizle',
    btn_delete: 'Sil',
    modal_api_title: 'API Bağlantısı',
    api_label_name: 'Bağlantı Adı',
    api_label_placeholder: 'örn. Ana Hesap',
    api_key_placeholder: 'API Key yapıştır',
    api_key_hint: 'Borsa güvenlik ayarlarında bulun',
    api_secret_placeholder: 'Secret Key yapıştır',
    api_secret_hint: 'Bu anahtarı asla paylaşmayın',
    api_passphrase: 'Passphrase (gerekirse)',
    api_pass_placeholder: 'Sadece OKX için',
    btn_cancel: 'İptal',
    btn_connect: 'Bağlan',
    modal_note_title: 'İşlem Notu',
    trade: 'İşlem',
    note_placeholder: 'Düşüncelerinizi, duygularınızı, neyin yanlış gittiğini veya harika olduğunu açıklayın...',
    btn_save: 'Kaydet',
    confirm_title: 'Onay',
    confirm_text: 'Emin misiniz?',
    btn_confirm: 'Onayla',
    status_closed: 'Kapalı',
    status_open: 'Açık',
    dir_long: 'LONG',
    dir_short: 'SHORT',
    mon: 'Pzt', tue: 'Sal', wed: 'Çar', thu: 'Per', fri: 'Cum', sat: 'Cmt', sun: 'Paz',
    jan: 'Ocak', feb: 'Şubat', mar: 'Mart', apr: 'Nisan',
    may: 'Mayıs', jun: 'Haziran', jul: 'Temmuz', aug: 'Ağustos',
    sep: 'Eylül', oct: 'Ekim', nov: 'Kasım', dec: 'Aralık',
    cal_no_trades: 'İşlem yok',
    cal_trades: 'işlem',
    toast_welcome: "Day Trader'a hoş geldiniz!",
    toast_account_created: 'Hesap oluşturuldu! Hoş geldiniz!',
    toast_logout: 'Çıkış yaptınız',
    toast_note_saved: 'Not kaydedildi',
    toast_csv_exported: 'CSV dosyası indirildi',
    toast_exchange_connected: 'başarıyla bağlandı',
    toast_exchange_disconnected: 'bağlantı kesildi',
    toast_history_cleared: 'Geçmiş temizlendi',
    toast_account_deleted: 'Hesap silindi',
    toast_3_notif: '3 yeni bildiriminiz var',
    toast_search_dev: 'Global arama geliştirme aşamasında',
    toast_select_exchange: 'Listeden bir borsa seçin',
    confirm_disconnect: 'Borsayı bağlantıdan kes?',
    confirm_disconnect_text: 'İşlemler senkronize etmeyi durduracak.',
    confirm_clear_history: 'Geçmişi temizle?',
    confirm_clear_text: 'Tüm işlemler kalıcı olarak silinecek.',
    confirm_delete_account: 'Hesabı sil?',
    confirm_delete_text: 'Tüm veriler kalıcı olarak silinecek. Bu işlem geri alınamaz.',
    connected: 'Bağlı',
    disconnected: 'Bağlı değil',
    morning: 'Sabah',
    day: 'Öğle',
    evening: 'Akşam',
    night: 'Gece',
    session_morning: '06:00 — 12:00',
    session_day: '12:00 — 18:00',
    session_evening: '18:00 — 00:00',
    session_night: '00:00 — 06:00',
    avg_pnl: 'İşlem başına ort. PnL',
    max_drawdown: 'Maks. Drawdown',
    sharpe: 'Sharpe Oranı',
    avg_time: 'İşlemde ort. süre',
    best_streak: 'En iyi seri (ardışık)',
    worst_streak: 'En kötü seri (ardışık)',
    avg_risk: 'İşlem başına ort. risk',
    r_multiple: 'Ort. R-Multiple',
  },
  fr: {
    tagline: "Journal de trading professionnel. Importation automatique des trades, analyses et statistiques de tous vos exchanges en un seul endroit.",
    feat_unlimited: 'Connexions illimitées',
    feat_sync: 'Synchronisation automatique par API',
    feat_notes: "Commentaires, captures d'ecran et videos pour les trades",
    feat_privacy: "Anonymat total — nous ne stockons pas de donnees personnelles",
    feat_exchanges: 'Support pour 9 grands exchanges',
    auth_subtitle: 'Connectez-vous avec un compte social',
    login_google: 'Se connecter avec Google',
    login_apple: 'Se connecter avec Apple',
    auth_terms: "En continuant, vous acceptez les Conditions d'Utilisation et la Politique de Confidentialite",
    nav_main: 'Principal',
    nav_dashboard: 'Tableau de bord',
    nav_journal: 'Journal de Trades',
    nav_calendar: 'Calendrier',
    nav_analytics: 'Analyses',
    nav_integrations: 'Integrations',
    nav_api: 'Connexions API',
    nav_system: 'Systeme',
    nav_settings: 'Parametres',
    online: 'En ligne',
    balance: 'Solde',
    stat_pnl: 'PnL (30 jours)',
    stat_winrate: 'Win Rate',
    stat_trades: 'Trades Totaux',
    stat_pf: 'Profit Factor',
    chart_pnl: 'Dynamique PnL',
    chart_exchanges: 'Repartition par Exchange',
    total: 'Total',
    recent_trades: 'Trades Recents',
    export_csv: 'Exporter CSV',
    all_trades: 'Tous les Trades',
    th_pair: 'Paire',
    th_exchange: 'Exchange',
    th_direction: 'Direction',
    th_entry_exit: 'Entree / Sortie',
    th_pnl: 'PnL',
    th_status: 'Statut',
    th_time: 'Heure',
    filter_all: 'Tous',
    filter_profit: 'Rentables',
    filter_loss: 'Perdants',
    search_placeholder: 'Rechercher par paire ou exchange...',
    cal_month_pnl: 'PnL du Mois',
    cal_month_trades: 'Trades',
    cal_month_wr: 'Win Rate',
    analytics_sessions: 'Statistiques par Session',
    analytics_metrics: 'Metriques Cles',
    analytics_wr: 'Dynamique Win Rate',
    analytics_top: 'Top-5 Paires Rentables',
    analytics_worst: 'Top-5 Paires Perdantes',
    api_connected: 'Exchanges Connectes',
    api_desc: "Ajoutez vos cles API pour la synchronisation automatique des trades. Les cles sont stockees chiffrees.",
    api_add: "Ajouter un Exchange",
    api_security_title: "Securite des Cles API",
    api_security_desc: "Toutes les cles sont chiffrees avec AES-256. Nous utilisons uniquement des permissions en lecture seule. Vos fonds sont en securite.",
    set_profile: 'Profil',
    set_profile_desc: "Gerez les donnees de votre compte",
    set_name: 'Nom du Trader',
    set_name_desc: "Affiche dans le profil et les classements",
    set_email: 'Email',
    set_email_desc: 'Pour les notifications et la connexion',
    set_currency: "Devise d'Affichage",
    set_currency_desc: 'Devise principale pour tous les calculs',
    set_notif: 'Notifications',
    set_notif_desc: 'Configurez comment vous recevez les alertes',
    set_notif_trades: 'Nouveaux Trades',
    set_notif_trades_desc: 'Notification pour chaque nouveau trade',
    set_notif_daily: 'Rapport Quotidien',
    set_notif_daily_desc: 'Resume des resultats journaliers',
    set_notif_signals: 'Signaux',
    set_notif_signals_desc: 'Nouvelles idees de trading',
    set_notif_email: 'Notifications par Email',
    set_notif_email_desc: "Dupliquer vers l'email",
    set_privacy: 'Confidentialite',
    set_privacy_desc: "Gerez la visibilite de vos donnees",
    set_public: 'Profil Public',
    set_public_desc: 'Les autres traders voient vos statistiques',
    set_balance: 'Afficher le Solde',
    set_balance_desc: "Afficher le montant du solde dans le profil",
    set_danger: 'Zone de Danger',
    set_danger_desc: 'Actions irreversibles',
    set_clear: 'Effacer Tous les Trades',
    set_clear_desc: "Supprimer tout l'historique de trading",
    set_delete: 'Supprimer le Compte',
    set_delete_desc: 'Suppression complete de toutes les donnees',
    btn_clear: 'Effacer',
    btn_delete: 'Supprimer',
    modal_api_title: 'Connexion API',
    api_label_name: 'Nom de Connexion',
    api_label_placeholder: 'ex. Compte Principal',
    api_key_placeholder: 'Collez votre API Key',
    api_key_hint: "Trouvez-le dans les parametres de securite de l'exchange",
    api_secret_placeholder: 'Collez votre Secret Key',
    api_secret_hint: 'Ne partagez jamais cette cle',
    api_passphrase: 'Passphrase (si requis)',
    api_pass_placeholder: 'Uniquement pour OKX',
    btn_cancel: 'Annuler',
    btn_connect: 'Connecter',
    modal_note_title: 'Note de Trade',
    trade: 'Trade',
    note_placeholder: "Decrivez vos pensees, emotions, ce qui a mal tourne ou etait genial...",
    btn_save: 'Enregistrer',
    confirm_title: 'Confirmation',
    confirm_text: 'Etes-vous sur ?',
    btn_confirm: 'Confirmer',
    status_closed: 'Ferme',
    status_open: 'Ouvert',
    dir_long: 'LONG',
    dir_short: 'SHORT',
    mon: 'Lun', tue: 'Mar', wed: 'Mer', thu: 'Jeu', fri: 'Ven', sat: 'Sam', sun: 'Dim',
    jan: 'Janvier', feb: 'Fevrier', mar: 'Mars', apr: 'Avril',
    may: 'Mai', jun: 'Juin', jul: 'Juillet', aug: 'Aout',
    sep: 'Septembre', oct: 'Octobre', nov: 'Novembre', dec: 'Decembre',
    cal_no_trades: 'Aucun trade',
    cal_trades: 'trades',
    toast_welcome: 'Bienvenue sur Day Trader !',
    toast_account_created: 'Compte cree ! Bienvenue !',
    toast_logout: 'Vous vous etes deconnecte',
    toast_note_saved: 'Note enregistree',
    toast_csv_exported: 'Fichier CSV telecharge',
    toast_exchange_connected: 'connecte avec succes',
    toast_exchange_disconnected: 'deconnecte',
    toast_history_cleared: 'Historique efface',
    toast_account_deleted: 'Compte supprime',
    toast_3_notif: 'Vous avez 3 nouvelles notifications',
    toast_search_dev: 'Recherche globale en developpement',
    toast_select_exchange: "Selectionnez un exchange dans la liste",
    confirm_disconnect: "Deconnecter l'exchange ?",
    confirm_disconnect_text: 'Les trades cesseront de se synchroniser.',
    confirm_clear_history: "Effacer l'historique ?",
    confirm_clear_text: 'Tous les trades seront definitivement supprimes.',
    confirm_delete_account: 'Supprimer le compte ?',
    confirm_delete_text: 'Toutes les donnees seront definitivement supprimees. Cette action est irreversible.',
    connected: 'Connecte',
    disconnected: 'Deconnecte',
    morning: 'Matin',
    day: 'Journee',
    evening: 'Soir',
    night: 'Nuit',
    session_morning: '06:00 — 12:00',
    session_day: '12:00 — 18:00',
    session_evening: '18:00 — 00:00',
    session_night: '00:00 — 06:00',
    avg_pnl: 'PnL moyen par trade',
    max_drawdown: 'Drawdown max',
    sharpe: 'Sharpe Ratio',
    avg_time: 'Temps moyen en trade',
    best_streak: 'Meilleure serie (consecutifs)',
    worst_streak: 'Pire serie (consecutifs)',
    avg_risk: 'Risque moyen par trade',
    r_multiple: 'R-Multiple moyen',
  }
};

let currentLang = 'ru';

function setLanguage(lang) {
  currentLang = lang;
  const tr = I18N[lang];
  if (!tr) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (tr[key]) el.textContent = tr[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (tr[key]) el.placeholder = tr[key];
  });

  const flags = { ru: '\uD83C\uDDF7\uD83C\uDDFA', en: '\uD83C\uDDEC\uD83C\uDDE7', de: '\uD83C\uDDE9\uD83C\uDDEA', es: '\uD83C\uDDEA\uD83C\uDDF8', zh: '\uD83C\uDDE8\uD83C\uDDF3', tr: '\uD83C\uDDF9\uD83C\uDDF7', fr: '\uD83C\uDDEB\uD83C\uDDF7' };
  const codes = { ru: 'RU', en: 'EN', de: 'DE', es: 'ES', zh: 'ZH', tr: 'TR', fr: 'FR' };
  document.getElementById('currentLangFlag').textContent = flags[lang];
  document.getElementById('currentLangCode').textContent = codes[lang];

  const pageId = document.querySelector('.page.active')?.id?.replace('page-', '');
  if (pageId) {
    const pageKeys = {
      dashboard: 'nav_dashboard', journal: 'nav_journal', calendar: 'nav_calendar',
      analytics: 'nav_analytics', api: 'nav_api', settings: 'nav_settings'
    };
    const titleEl = document.getElementById('pageTitle');
    if (titleEl && pageKeys[pageId]) titleEl.textContent = tr[pageKeys[pageId]];
  }

  if (pageId === 'dashboard') renderDashboard();
  if (pageId === 'journal') renderJournal();
  if (pageId === 'calendar') renderCalendar();
  if (pageId === 'analytics') renderAnalytics();
  if (pageId === 'api') renderApiPage();

  localStorage.setItem('daytrader_lang', lang);
}

function tr(key) {
  return I18N[currentLang]?.[key] || I18N['ru']?.[key] || key;
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('daytrader_theme', theme);
  const moon = document.querySelector('.theme-icon.moon');
  const sun = document.querySelector('.theme-icon.sun');
  if (moon && sun) {
    if (theme === 'light') { moon.classList.add('hidden'); sun.classList.remove('hidden'); }
    else { moon.classList.remove('hidden'); sun.classList.add('hidden'); }
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  setTheme(current === 'dark' ? 'light' : 'dark');
}

// ============================================
// DATA STORE
// ============================================
const Store = {
  user: null,
  trades: [],
  connections: [],
  settings: {
    notifTrades: true,
    notifDaily: true,
    notifSignals: false,
    notifEmail: false,
    publicProfile: false,
    showBalance: false,
    currency: 'USD'
  },
  notes: {},

  init() {
    const saved = localStorage.getItem('daytrader_data');
    if (saved) {
      const data = JSON.parse(saved);
      this.user = data.user || null;
      this.connections = data.connections || [];
      this.settings = { ...this.settings, ...(data.settings || {}) };
      this.notes = data.notes || {};
    }
    this.generateDemoTrades();
  },

  save() {
    localStorage.setItem('daytrader_data', JSON.stringify({
      user: this.user,
      connections: this.connections,
      settings: this.settings,
      notes: this.notes
    }));
  },

  generateDemoTrades() {
    const pairs = [
      { sym: 'BTC/USDT', ex: 'Binance' },
      { sym: 'ETH/USDT', ex: 'Bybit' },
      { sym: 'SOL/USDT', ex: 'OKX' },
      { sym: 'XRP/USDT', ex: 'MEXC' },
      { sym: 'DOGE/USDT', ex: 'BingX' },
      { sym: 'ADA/USDT', ex: 'Binance' },
      { sym: 'AVAX/USDT', ex: 'Bybit' },
      { sym: 'LINK/USDT', ex: 'OKX' },
      { sym: 'DOT/USDT', ex: 'Kraken' },
      { sym: 'MATIC/USDT', ex: 'Gate.io' },
      { sym: 'LTC/USDT', ex: 'HTX' },
      { sym: 'TRX/USDT', ex: 'Bitunix' },
    ];

    const directions = ['long', 'short'];
    this.trades = [];
    const now = new Date();

    for (let i = 0; i < 60; i++) {
      const pair = pairs[Math.floor(Math.random() * pairs.length)];
      const dir = directions[Math.floor(Math.random() * directions.length)];
      const status = i < 5 ? 'open' : 'closed';
      const isProfit = Math.random() > 0.35;
      const pnl = isProfit
        ? +(Math.random() * 800 + 50).toFixed(2)
        : -(Math.random() * 400 + 20).toFixed(2);

      const date = new Date(now);
      date.setDate(date.getDate() - Math.floor(i / 2.5));
      date.setHours(9 + Math.floor(Math.random() * 14), Math.floor(Math.random() * 60));

      const entryPrice = +(Math.random() * 50000 + 100).toFixed(2);
      const exitPrice = status === 'closed'
        ? +(entryPrice * (1 + (pnl / 10000) * (dir === 'long' ? 1 : -1))).toFixed(2)
        : null;

      this.trades.push({
        id: 'T' + (1000 + i),
        pair: pair.sym,
        exchange: pair.ex,
        direction: dir,
        entryPrice,
        exitPrice,
        pnl,
        status,
        date: date.toISOString(),
        size: +(Math.random() * 2 + 0.1).toFixed(3),
        leverage: [5, 10, 20, 50][Math.floor(Math.random() * 4)]
      });
    }

    this.trades.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
};

// ============================================
// EXCHANGES CONFIG
// ============================================
const EXCHANGES = [
  { id: 'binance', name: 'Binance', desc: 'Largest exchange worldwide', desc_de: 'Groeßte Boerse weltweit', desc_es: 'Mayor exchange del mundo', desc_zh: '全球最大交易所', desc_tr: 'Dunyanin en buyuk borsasi', desc_fr: 'Plus grande bourse mondiale', color: '#f0b90b', connected: false },
  { id: 'bybit', name: 'Bybit', desc: 'Popular futures exchange', desc_de: 'Populaere Futures-Boerse', desc_es: 'Exchange de futuros popular', desc_zh: '热门合约交易所', desc_tr: 'Populer futures borsasi', desc_fr: 'Exchange de futures populaire', color: '#f7a600', connected: false },
  { id: 'okx', name: 'OKX', desc: 'Full suite of instruments', desc_de: 'Vollstaendiges Instrumenten-Set', desc_es: 'Conjunto completo de instrumentos', desc_zh: '全套交易工具', desc_tr: 'Tam arac seti', desc_fr: 'Suite complete d\'instruments', color: '#000', connected: false },
  { id: 'mexc', name: 'MEXC', desc: 'Fast listings', desc_de: 'Schnelle Listings', desc_es: 'Listados rapidos', desc_zh: '快速上币', desc_tr: 'Hizli listelemeler', desc_fr: 'Listings rapides', color: '#00d4aa', connected: false },
  { id: 'bingx', name: 'BingX', desc: 'Copy-trading', desc_de: 'Copy-Trading', desc_es: 'Copy-trading', desc_zh: '跟单交易', desc_tr: 'Kopya trading', desc_fr: 'Copy-trading', color: '#3b82f6', connected: false },
  { id: 'gateio', name: 'Gate.io', desc: 'Altcoins and startups', desc_de: 'Altcoins und Startups', desc_es: 'Altcoins y startups', desc_zh: '山寨币和初创项目', desc_tr: 'Altcoinler ve startup\'lar', desc_fr: 'Altcoins et startups', color: '#de4437', connected: false },
  { id: 'kraken', name: 'Kraken', desc: 'Security and reliability', desc_de: 'Sicherheit und Zuverlaessigkeit', desc_es: 'Seguridad y confiabilidad', desc_zh: '安全可靠', desc_tr: 'Guvenlik ve guvenilirlik', desc_fr: 'Securite et fiabilite', color: '#5841d8', connected: false },
  { id: 'htx', name: 'HTX', desc: 'Global liquidity hub', desc_de: 'Globaler Liquiditaetshub', desc_es: 'Hub de liquidez global', desc_zh: '全球流动性中心', desc_tr: 'Global likidite merkezi', desc_fr: 'Hub de liquidite mondial', color: '#2b6cb0', connected: false },
  { id: 'bitunix', name: 'Bitunix', desc: 'Zero-fee trading', desc_de: 'Gebuehrenfreies Trading', desc_es: 'Trading sin comisiones', desc_zh: '零手续费交易', desc_tr: 'Sifir ucretli trading', desc_fr: 'Trading sans frais', color: '#1a202c', connected: false },
];

function getExchangeDesc(ex) {
  if (currentLang === 'de') return ex.desc_de;
  if (currentLang === 'es') return ex.desc_es;
  if (currentLang === 'zh') return ex.desc_zh;
  if (currentLang === 'tr') return ex.desc_tr;
  if (currentLang === 'fr') return ex.desc_fr;
  return ex.desc;
}

// ============================================
// CHART ENGINE
// ============================================
const Charts = {
  drawLineChart(canvasId, data, color) {
    color = color || (document.documentElement.getAttribute('data-theme') === 'light' ? '#00b894' : '#00d4aa');
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width, h = rect.height;
    const padding = { top: 20, right: 20, bottom: 30, left: 50 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    const min = Math.min(...data) * 0.98;
    const max = Math.max(...data) * 1.02;
    const range = max - min;

    ctx.clearRect(0, 0, w, h);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.03)';
    const labelColor = isLight ? '#8b92a8' : '#4a5068';

    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(w - padding.right, y);
      ctx.stroke();

      const val = max - (range / 4) * i;
      ctx.fillStyle = labelColor;
      ctx.font = '11px JetBrains Mono';
      ctx.textAlign = 'right';
      ctx.fillText('$' + (val / 1000).toFixed(1) + 'K', padding.left - 8, y + 4);
    }

    const stepX = chartW / (data.length - 1);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    data.forEach((val, i) => {
      const x = padding.left + stepX * i;
      const y = padding.top + chartH - ((val - min) / range) * chartH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top + chartH);
    data.forEach((val, i) => {
      const x = padding.left + stepX * i;
      const y = padding.top + chartH - ((val - min) / range) * chartH;
      ctx.lineTo(x, y);
    });
    ctx.lineTo(padding.left + chartW, padding.top + chartH);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, padding.top, 0, h - padding.bottom);
    grad.addColorStop(0, color + '20');
    grad.addColorStop(1, color + '00');
    ctx.fillStyle = grad;
    ctx.fill();

    data.forEach((val, i) => {
      if (i % 3 !== 0) return;
      const x = padding.left + stepX * i;
      const y = padding.top + chartH - ((val - min) / range) * chartH;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fillStyle = color + '20';
      ctx.fill();
    });
  },

  drawDonutChart(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const size = 200;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const centerX = size / 2, centerY = size / 2;
    const radius = 75, innerRadius = 50;
    const total = data.reduce((s, d) => s + d.value, 0);
    let startAngle = -Math.PI / 2;

    data.forEach(seg => {
      const angle = (seg.value / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + angle);
      ctx.arc(centerX, centerY, innerRadius, startAngle + angle, startAngle, true);
      ctx.closePath();
      ctx.fillStyle = seg.color;
      ctx.fill();
      startAngle += angle;
    });

    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius - 2, 0, Math.PI * 2);
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    ctx.fillStyle = isLight ? '#ffffff' : '#14161f';
    ctx.fill();
  },

  drawBarChart(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width, h = rect.height;
    const padding = { top: 20, right: 20, bottom: 40, left: 40 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    const max = Math.max(...data.map(d => d.value)) * 1.1;
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.03)';
    const labelColor = isLight ? '#8b92a8' : '#4a5068';

    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(w - padding.right, y);
      ctx.stroke();
    }

    const barW = chartW / data.length * 0.6;
    const stepX = chartW / data.length;

    data.forEach((d, i) => {
      const x = padding.left + stepX * i + (stepX - barW) / 2;
      const barH = (d.value / max) * chartH;
      const y = padding.top + chartH - barH;
      const color = d.value >= 50 ? (isLight ? '#00b894' : '#00d4aa') : '#ff4757';

      ctx.fillStyle = color + '30';
      ctx.fillRect(x, y, barW, barH);
      ctx.fillStyle = color;
      ctx.fillRect(x, y, barW, 3);
      ctx.fillStyle = labelColor;
      ctx.font = '10px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(d.label, x + barW / 2, h - 10);
      ctx.fillStyle = color;
      ctx.font = '11px JetBrains Mono';
      ctx.fillText(d.value + '%', x + barW / 2, y - 6);
    });
  }
};

// ============================================
// UI HELPERS
// ============================================
function showToast(message, type, duration) {
  type = type || 'info';
  duration = duration || 3500;
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;

  const icons = {
    success: '<svg width="18" height="18" fill="none" stroke="#00d4aa" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>',
    error: '<svg width="18" height="18" fill="none" stroke="#ff4757" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>',
    warning: '<svg width="18" height="18" fill="none" stroke="#ffa502" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>',
    info: '<svg width="18" height="18" fill="none" stroke="#2e86de" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
  };

  toast.innerHTML = (icons[type] || icons.info) + '<span>' + message + '</span>';
  container.appendChild(toast);

  setTimeout(function() {
    toast.classList.add('removing');
    setTimeout(function() { toast.remove(); }, 300);
  }, duration);
}

function formatCurrency(val, currency) {
  currency = currency || 'USD';
  const sym = currency === 'USD' ? '$' : currency === 'EUR' ? '\u20AC' : '';
  const prefix = val >= 0 ? '+' : '';
  return prefix + sym + Math.abs(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const months = [tr('jan'), tr('feb'), tr('mar'), tr('apr'), tr('may'), tr('jun'), tr('jul'), tr('aug'), tr('sep'), tr('oct'), tr('nov'), tr('dec')];
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}

function formatTime(dateStr) {
  const d = new Date(dateStr);
  return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
}

function getInitials(name) {
  return name.split(' ').map(function(n) { return n[0]; }).join('').toUpperCase().slice(0, 2);
}

// ============================================
// MODAL SYSTEM
// ============================================
const Modal = {
  open(id) {
    document.getElementById(id).classList.add('open');
    document.body.style.overflow = 'hidden';
  },
  close(id) {
    document.getElementById(id).classList.remove('open');
    document.body.style.overflow = '';
  },
  confirm(title, text, onConfirm) {
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmText').textContent = text;
    this.open('confirmModal');

    const okBtn = document.getElementById('confirmOk');
    const cancelBtn = document.getElementById('confirmCancel');

    okBtn.onclick = function() {
      onConfirm();
      Modal.close('confirmModal');
    };
    cancelBtn.onclick = function() { Modal.close('confirmModal'); };
  }
};

// ============================================
// NAVIGATION
// ============================================
const PAGES = {
  dashboard: { titleKey: 'nav_dashboard', breadcrumbKey: 'nav_dashboard' },
  journal: { titleKey: 'nav_journal', breadcrumbKey: 'nav_journal' },
  calendar: { titleKey: 'nav_calendar', breadcrumbKey: 'nav_calendar' },
  analytics: { titleKey: 'nav_analytics', breadcrumbKey: 'nav_analytics' },
  api: { titleKey: 'nav_api', breadcrumbKey: 'nav_api' },
  settings: { titleKey: 'nav_settings', breadcrumbKey: 'nav_settings' },
};

function navigate(pageId) {
  document.querySelectorAll('.nav-item').forEach(function(el) {
    el.classList.toggle('active', el.dataset.page === pageId);
  });

  document.querySelectorAll('.page').forEach(function(el) {
    el.classList.toggle('active', el.id === 'page-' + pageId);
  });

  const info = PAGES[pageId];
  document.getElementById('pageTitle').textContent = tr(info.titleKey);
  document.getElementById('breadcrumbText').textContent = tr(info.breadcrumbKey);

  document.getElementById('sidebar').classList.remove('open');

  if (pageId === 'dashboard') renderDashboard();
  if (pageId === 'journal') renderJournal();
  if (pageId === 'calendar') renderCalendar();
  if (pageId === 'analytics') renderAnalytics();
  if (pageId === 'api') renderApiPage();
  if (pageId === 'settings') renderSettings();

  window.scrollTo(0, 0);
}

// ============================================
// AUTH
// ============================================
function socialLogin(provider) {
  showToast(tr('login_' + provider) + '...', 'info');
  setTimeout(function() {
    Store.user = { name: 'CryptoWhale', email: 'trader@example.com' };
    Store.save();
    enterApp();
    showToast(tr('toast_welcome'), 'success');
  }, 1200);
}

function enterApp() {
  document.getElementById('authOverlay').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');

  if (Store.user) {
    document.getElementById('userName').textContent = Store.user.name;
    document.getElementById('userAvatar').textContent = getInitials(Store.user.name);
  }

  renderDashboard();
  renderApiPage();
}

function logout() {
  Store.user = null;
  Store.save();
  document.getElementById('authOverlay').classList.remove('hidden');
  document.getElementById('app').classList.add('hidden');
  showToast(tr('toast_logout'), 'info');
}

// ============================================
// DASHBOARD
// ============================================
function renderDashboard() {
  const tbody = document.getElementById('recentTradesBody');
  const recent = Store.trades.slice(0, 8);

  tbody.innerHTML = recent.map(function(t) {
    return '<tr>' +
      '<td><div class="pair-cell"><div class="pair-icon ' + t.direction + '">' + (t.direction === 'long' ? 'L' : 'S') + '</div><div><div class="pair-name">' + t.pair + '</div><div class="pair-exchange">' + t.exchange + '</div></div></div></td>' +
      '<td>' + t.exchange + '</td>' +
      '<td><span class="dir-badge ' + t.direction + '">' + tr('dir_' + t.direction) + '</span></td>' +
      '<td>$' + t.entryPrice.toLocaleString() + ' / ' + (t.exitPrice ? '$' + t.exitPrice.toLocaleString() : '\u2014') + '</td>' +
      '<td class="pnl-value ' + (t.pnl >= 0 ? 'pos' : 'neg') + '">' + formatCurrency(t.pnl) + '</td>' +
      '<td><span class="status-badge ' + t.status + '">' + tr('status_' + t.status) + '</span></td>' +
      '<td>' + formatTime(t.date) + '</td>' +
    '</tr>';
  }).join('');

  const pnlData = Array.from({ length: 30 }, function(_, i) {
    return 35000 + Math.sin(i * 0.3) * 5000 + i * 400 + Math.random() * 2000;
  });
  Charts.drawLineChart('pnlChart', pnlData);

  const exchangeData = [
    { name: 'Binance', value: 18500, color: '#f0b90b' },
    { name: 'Bybit', value: 12400, color: '#f7a600' },
    { name: 'OKX', value: 8900, color: '#2e86de' },
    { name: 'MEXC', value: 5200, color: '#00d4aa' },
    { name: 'BingX', value: 2800, color: '#3b82f6' },
  ];
  Charts.drawDonutChart('exchangeChart', exchangeData);

  const legend = document.getElementById('exchangeLegend');
  legend.innerHTML = exchangeData.map(function(d) {
    return '<div class="legend-item"><div class="legend-left"><div class="legend-dot" style="background:' + d.color + '"></div><span class="legend-name">' + d.name + '</span></div><span class="legend-value">$' + (d.value / 1000).toFixed(1) + 'K</span></div>';
  }).join('');
}

// ============================================
// JOURNAL
// ============================================
let journalFilter = 'all';
let journalSearch = '';

function renderJournal() {
  const container = document.getElementById('journalDays');

  let filtered = Store.trades.filter(function(t) {
    if (journalFilter === 'long') return t.direction === 'long';
    if (journalFilter === 'short') return t.direction === 'short';
    if (journalFilter === 'profit') return t.pnl >= 0;
    if (journalFilter === 'loss') return t.pnl < 0;
    return true;
  });

  if (journalSearch) {
    const q = journalSearch.toLowerCase();
    filtered = filtered.filter(function(t) {
      return t.pair.toLowerCase().includes(q) || t.exchange.toLowerCase().includes(q);
    });
  }

  const days = {};
  filtered.forEach(function(t) {
    const day = t.date.split('T')[0];
    if (!days[day]) days[day] = [];
    days[day].push(t);
  });

  const sortedDays = Object.keys(days).sort(function(a, b) { return b.localeCompare(a); });

  container.innerHTML = sortedDays.map(function(day) {
    const trades = days[day];
    const dayPnl = trades.reduce(function(s, t) { return s + t.pnl; }, 0);
    const wins = trades.filter(function(t) { return t.pnl >= 0; }).length;

    return '<div class="journal-day">' +
      '<div class="day-header">' +
        '<span class="day-date">' + formatDate(day) + '</span>' +
        '<div class="day-summary">' +
          '<div class="day-stat"><div class="label">' + tr('cal_month_trades') + '</div><div class="value">' + trades.length + '</div></div>' +
          '<div class="day-stat"><div class="label">Win Rate</div><div class="value">' + Math.round((wins / trades.length) * 100) + '%</div></div>' +
          '<div class="day-stat"><div class="label">PnL</div><div class="value ' + (dayPnl >= 0 ? 'pos' : 'neg') + '">' + formatCurrency(dayPnl) + '</div></div>' +
        '</div>' +
      '</div>' +
      '<div class="day-trades">' +
        trades.map(function(t) {
          return '<div class="day-trade">' +
            '<span class="trade-time">' + formatTime(t.date) + '</span>' +
            '<div class="trade-pair"><span class="dir ' + t.direction + '">' + t.direction + '</span><span class="sym">' + t.pair + '</span><span class="ex">' + t.exchange + '</span></div>' +
            '<span class="trade-entry">$' + t.entryPrice.toLocaleString() + '</span>' +
            '<span class="trade-exit">' + (t.exitPrice ? '$' + t.exitPrice.toLocaleString() : '\u2014') + '</span>' +
            '<span class="trade-pnl ' + (t.pnl >= 0 ? 'pos' : 'neg') + '">' + formatCurrency(t.pnl) + '</span>' +
            '<span class="trade-pnl ' + (t.pnl >= 0 ? 'pos' : 'neg') + '">' + ((t.pnl / t.entryPrice / t.size) * 100).toFixed(1) + '%</span>' +
            '<button class="trade-note-btn ' + (Store.notes[t.id] ? 'has-note' : '') + '" data-trade="' + t.id + '">' + (Store.notes[t.id] ? '\u270E ' + tr('btn_save') : '+ ' + tr('modal_note_title')) + '</button>' +
          '</div>';
        }).join('') +
      '</div>' +
    '</div>';
  }).join('');

  document.querySelectorAll('.trade-note-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      openNoteModal(btn.dataset.trade);
    });
  });
}

function openNoteModal(tradeId) {
  document.getElementById('noteTradeId').textContent = tradeId;
  document.getElementById('noteText').value = Store.notes[tradeId] || '';
  Modal.open('noteModal');
}

function saveNote() {
  const tradeId = document.getElementById('noteTradeId').textContent;
  const text = document.getElementById('noteText').value;
  if (text.trim()) {
    Store.notes[tradeId] = text;
  } else {
    delete Store.notes[tradeId];
  }
  Store.save();
  Modal.close('noteModal');
  renderJournal();
  showToast(tr('toast_note_saved'), 'success');
}

// ============================================
// CALENDAR
// ============================================
let calendarDate = new Date();

function renderCalendar() {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  const monthNames = [tr('jan'), tr('feb'), tr('mar'), tr('apr'), tr('may'), tr('jun'), tr('jul'), tr('aug'), tr('sep'), tr('oct'), tr('nov'), tr('dec')];
  document.getElementById('calMonth').textContent = monthNames[month] + ' ' + year;

  // Calculate trades for this month
  const monthTrades = Store.trades.filter(function(t) {
    const d = new Date(t.date);
    return d.getFullYear() === year && d.getMonth() === month;
  });

  const monthPnl = monthTrades.reduce(function(s, t) { return s + t.pnl; }, 0);
  const monthWins = monthTrades.filter(function(t) { return t.pnl >= 0; }).length;
  const monthWr = monthTrades.length > 0 ? Math.round((monthWins / monthTrades.length) * 100) : 0;

  document.getElementById('calMonthPnl').textContent = formatCurrency(monthPnl);
  document.getElementById('calMonthPnl').className = 'cal-summary-value ' + (monthPnl >= 0 ? 'pos' : 'neg');
  document.getElementById('calMonthTrades').textContent = monthTrades.length;
  document.getElementById('calMonthWr').textContent = monthWr + '%';

  // Build calendar grid
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Monday start

  // Group trades by day
  const dayTrades = {};
  monthTrades.forEach(function(t) {
    const d = new Date(t.date);
    const day = d.getDate();
    if (!dayTrades[day]) dayTrades[day] = [];
    dayTrades[day].push(t);
  });

  const weekdays = [tr('mon'), tr('tue'), tr('wed'), tr('thu'), tr('fri'), tr('sat'), tr('sun')];

  let html = '';
  weekdays.forEach(function(wd) {
    html += '<div class="cal-weekday">' + wd + '</div>';
  });

  // Empty cells before first day
  for (let i = 0; i < startDayOfWeek; i++) {
    html += '<div class="cal-day empty"></div>';
  }

  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

  for (let day = 1; day <= daysInMonth; day++) {
    const trades = dayTrades[day] || [];
    const dayPnl = trades.reduce(function(s, t) { return s + t.pnl; }, 0);
    const isToday = isCurrentMonth && today.getDate() === day;
    const pnlClass = dayPnl > 0 ? 'pos' : dayPnl < 0 ? 'neg' : 'zero';

    html += '<div class="cal-day ' + (isToday ? 'today' : '') + '">' +
      '<div class="cal-day-number">' + day + '</div>' +
      (trades.length > 0 ? '<div class="cal-day-pnl ' + pnlClass + '">' + formatCurrency(dayPnl) + '</div>' : '') +
      (trades.length > 0 ? '<div class="cal-day-trades">' + trades.length + ' ' + tr('cal_trades') + '</div>' : '<div class="cal-day-trades">' + tr('cal_no_trades') + '</div>') +
      '<div class="cal-day-bar ' + pnlClass + '"></div>' +
    '</div>';
  }

  document.getElementById('calendarGrid').innerHTML = html;
}

function prevMonth() {
  calendarDate.setMonth(calendarDate.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  calendarDate.setMonth(calendarDate.getMonth() + 1);
  renderCalendar();
}

// ============================================
// ANALYTICS
// ============================================
function renderAnalytics() {
  const sessions = [
    { nameKey: 'morning', descKey: 'session_morning', icon: '\uD83C\uDF05', pnl: 3240, percent: 68 },
    { nameKey: 'day', descKey: 'session_day', icon: '\u2600\uFE0F', pnl: 1890, percent: 45 },
    { nameKey: 'evening', descKey: 'session_evening', icon: '\uD83C\uDF07', pnl: -560, percent: 32 },
    { nameKey: 'night', descKey: 'session_night', icon: '\uD83C\uDF19', pnl: 1280, percent: 55 },
  ];

  document.getElementById('sessionStats').innerHTML = sessions.map(function(s) {
    return '<div class="session-item">' +
      '<div class="session-icon ' + s.nameKey + '">' + s.icon + '</div>' +
      '<div class="session-info"><div class="session-name">' + tr(s.nameKey) + '</div><div class="session-desc">' + tr(s.descKey) + '</div></div>' +
      '<div class="session-bar-wrap"><div class="session-bar"><div class="session-bar-fill ' + (s.pnl >= 0 ? 'green' : 'red') + '" style="width:' + s.percent + '%"></div></div></div>' +
      '<span class="session-pnl ' + (s.pnl >= 0 ? 'pos' : 'neg') + '">' + formatCurrency(s.pnl) + '</span>' +
    '</div>';
  }).join('');

  const metrics = [
    { nameKey: 'avg_pnl', value: '142.5', pos: true },
    { nameKey: 'max_drawdown', value: '-$1,240', pos: false },
    { nameKey: 'sharpe', value: '1.84', pos: true },
    { nameKey: 'avg_time', value: '4h 32m', pos: true },
    { nameKey: 'best_streak', value: '9 wins', pos: true },
    { nameKey: 'worst_streak', value: '4 losses', pos: false },
    { nameKey: 'avg_risk', value: '1.2%', pos: true },
    { nameKey: 'r_multiple', value: '2.4', pos: true },
  ];

  document.getElementById('metricsList').innerHTML = metrics.map(function(m) {
    return '<div class="metric-row"><span class="metric-name">' + tr(m.nameKey) + '</span><span class="metric-value ' + (m.pos ? 'pos' : 'neg') + '">' + m.value + '</span></div>';
  }).join('');

  const wrData = Array.from({ length: 12 }, function(_, i) {
    return { label: (i + 1) + 'w', value: Math.round(45 + Math.random() * 30) };
  });
  Charts.drawBarChart('winrateChart', wrData);

  const topPairs = [
    { name: 'BTC/USDT', pnl: 5840 },
    { name: 'SOL/USDT', pnl: 3210 },
    { name: 'ETH/USDT', pnl: 2890 },
    { name: 'AVAX/USDT', pnl: 1560 },
    { name: 'LINK/USDT', pnl: 980 },
  ];

  document.getElementById('topPairs').innerHTML = topPairs.map(function(p, i) {
    return '<div class="pair-row"><div class="pair-row-left"><span class="pair-rank">' + (i + 1) + '</span><span class="pair-row-name">' + p.name + '</span></div><span class="pair-row-pnl pos">+' + formatCurrency(p.pnl).replace('+', '') + '</span></div>';
  }).join('');

  const worstPairs = [
    { name: 'DOGE/USDT', pnl: -1240 },
    { name: 'SHIB/USDT', pnl: -890 },
    { name: 'PEPE/USDT', pnl: -560 },
    { name: 'FLOKI/USDT', pnl: -340 },
    { name: 'BONK/USDT', pnl: -180 },
  ];

  document.getElementById('worstPairs').innerHTML = worstPairs.map(function(p, i) {
    return '<div class="pair-row"><div class="pair-row-left"><span class="pair-rank">' + (i + 1) + '</span><span class="pair-row-name">' + p.name + '</span></div><span class="pair-row-pnl neg">' + formatCurrency(p.pnl) + '</span></div>';
  }).join('');
}

// ============================================
// API CONNECTIONS
// ============================================
let selectedExchange = null;

function renderApiPage() {
  const grid = document.getElementById('apiGrid');
  const badge = document.getElementById('apiBadge');

  const connectedCount = Store.connections.length;
  badge.textContent = connectedCount;
  badge.style.display = connectedCount > 0 ? 'inline-flex' : 'none';

  grid.innerHTML = EXCHANGES.map(function(ex) {
    const conn = Store.connections.find(function(c) { return c.exchange === ex.id; });
    const isConnected = !!conn;

    return '<div class="api-card ' + ex.id + ' ' + (isConnected ? 'connected' : '') + '" data-exchange="' + ex.id + '">' +
      '<div class="api-logo">' + ex.name.slice(0, 2) + '</div>' +
      '<div class="api-name">' + ex.name + '</div>' +
      '<div class="api-desc">' + getExchangeDesc(ex) + '</div>' +
      '<span class="api-status ' + (isConnected ? 'connected' : 'disconnected') + '">' + (isConnected ? '\u25CF ' + tr('connected') : '\u25CB ' + tr('disconnected')) + '</span>' +
      (isConnected ? '<div style="margin-top:10px;font-size:0.75rem;color:var(--text-muted)">' + conn.label + '</div>' : '') +
    '</div>';
  }).join('');

  document.querySelectorAll('.api-card').forEach(function(card) {
    card.addEventListener('click', function() {
      const exId = card.dataset.exchange;
      const ex = EXCHANGES.find(function(e) { return e.id === exId; });
      const conn = Store.connections.find(function(c) { return c.exchange === exId; });

      if (conn) {
        Modal.confirm(tr('confirm_disconnect'), tr('confirm_disconnect_text'), function() {
          Store.connections = Store.connections.filter(function(c) { return c.exchange !== exId; });
          Store.save();
          renderApiPage();
          showToast(ex.name + ' ' + tr('toast_exchange_disconnected'), 'warning');
        });
      } else {
        selectedExchange = ex;
        document.getElementById('modalTitle').textContent = tr('modal_api_title') + ' ' + ex.name;
        const iconEl = document.getElementById('modalExchangeIcon');
        iconEl.textContent = ex.name.slice(0, 2);
        iconEl.style.background = ex.color;
        iconEl.style.color = (ex.id === 'binance' || ex.id === 'bybit') ? '#1a1a1a' : '#fff';
        document.getElementById('apiForm').reset();
        Modal.open('apiModal');
      }
    });
  });
}

function connectApi(e) {
  e.preventDefault();
  if (!selectedExchange) return;

  const label = document.getElementById('apiLabel').value;
  const key = document.getElementById('apiKey').value;

  const btn = e.target.querySelector('.btn-primary');
  const loader = btn.querySelector('.btn-loader');
  const text = btn.querySelector('.btn-text');

  text.classList.add('hidden');
  loader.classList.remove('hidden');

  setTimeout(function() {
    Store.connections.push({
      exchange: selectedExchange.id,
      label: label,
      key: key.slice(0, 8) + '...',
      createdAt: new Date().toISOString()
    });
    Store.save();

    text.classList.remove('hidden');
    loader.classList.add('hidden');

    Modal.close('apiModal');
    renderApiPage();
    showToast(selectedExchange.name + ' ' + tr('toast_exchange_connected') + '!', 'success');
    selectedExchange = null;
  }, 2000);
}

// ============================================
// SETTINGS
// ============================================
function renderSettings() {
  // Toggles already rendered in HTML
}

function toggleSetting(el) {
  el.classList.toggle('on');
  const setting = el.dataset.setting;
  Store.settings[setting] = el.classList.contains('on');
  Store.save();
}

// ============================================
// EXPORT
// ============================================
function exportCSV() {
  const headers = ['ID', tr('th_pair'), tr('th_exchange'), tr('th_direction'), tr('th_entry_exit'), 'PnL', 'Date'];
  const rows = Store.trades.map(function(t) {
    return [t.id, t.pair, t.exchange, t.direction, t.entryPrice, t.exitPrice || '', t.pnl, t.date];
  });

  const csv = [headers].concat(rows).map(function(r) { return r.join(','); }).join('\n');
  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'trades_' + new Date().toISOString().split('T')[0] + '.csv';
  link.click();

  showToast(tr('toast_csv_exported'), 'success');
}

// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  Store.init();

  // Language
  const savedLang = localStorage.getItem('daytrader_lang') || 'ru';
  setLanguage(savedLang);

  // Theme
  const savedTheme = localStorage.getItem('daytrader_theme') || 'dark';
  setTheme(savedTheme);

  // Auth - only Google and Apple
  document.querySelectorAll('.social-btn-main').forEach(function(btn) {
    btn.addEventListener('click', function() { socialLogin(btn.dataset.provider); });
  });

  // Language dropdown
  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');

  langBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    langMenu.classList.toggle('open');
  });

  document.querySelectorAll('.lang-option').forEach(function(opt) {
    opt.addEventListener('click', function() {
      setLanguage(opt.dataset.lang);
      langMenu.classList.remove('open');
    });
  });

  document.addEventListener('click', function(e) {
    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.classList.remove('open');
    }
  });

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Navigation
  document.querySelectorAll('.nav-item').forEach(function(item) {
    item.addEventListener('click', function() { navigate(item.dataset.page); });
  });

  document.querySelectorAll('[data-nav]').forEach(function(el) {
    el.addEventListener('click', function() { navigate(el.dataset.nav); });
  });

  // Mobile menu
  document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open');
  });

  // Logout
  document.getElementById('userCard').addEventListener('click', logout);

  // Chart range buttons
  document.querySelectorAll('.chart-action').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.chart-action').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const len = btn.dataset.range === '7d' ? 7 : btn.dataset.range === '30d' ? 30 : btn.dataset.range === '90d' ? 90 : 365;
      const pnlData = Array.from({ length: len }, function(_, i) {
        return 35000 + Math.sin(i * 0.3) * 5000 + i * 400 + Math.random() * 2000;
      });
      Charts.drawLineChart('pnlChart', pnlData);
    });
  });

  // Journal filters
  document.querySelectorAll('.filter-chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
      document.querySelectorAll('.filter-chip').forEach(function(c) { c.classList.remove('active'); });
      chip.classList.add('active');
      journalFilter = chip.dataset.filter;
      renderJournal();
    });
  });

  // Journal search
  document.getElementById('journalSearch').addEventListener('input', function(e) {
    journalSearch = e.target.value;
    renderJournal();
  });

  // Calendar nav
  document.getElementById('calPrev').addEventListener('click', prevMonth);
  document.getElementById('calNext').addEventListener('click', nextMonth);

  // Export
  document.getElementById('exportBtn').addEventListener('click', exportCSV);

  // API modal
  document.getElementById('addApiBtn').addEventListener('click', function() {
    showToast(tr('toast_select_exchange'), 'info');
  });

  document.getElementById('apiForm').addEventListener('submit', connectApi);
  document.getElementById('modalClose').addEventListener('click', function() { Modal.close('apiModal'); });
  document.getElementById('modalCancel').addEventListener('click', function() { Modal.close('apiModal'); });

  // Note modal
  document.getElementById('noteModalClose').addEventListener('click', function() { Modal.close('noteModal'); });
  document.getElementById('noteCancel').addEventListener('click', function() { Modal.close('noteModal'); });
  document.getElementById('noteSave').addEventListener('click', saveNote);

  // Confirm modal
  document.getElementById('confirmCancel').addEventListener('click', function() { Modal.close('confirmModal'); });

  // Settings toggles
  document.querySelectorAll('.toggle').forEach(function(t) {
    t.addEventListener('click', function() { toggleSetting(t); });
  });

  // Danger zone buttons
  document.getElementById('clearTradesBtn').addEventListener('click', function() {
    Modal.confirm(tr('confirm_clear_history'), tr('confirm_clear_text'), function() {
      Store.trades = [];
      Store.save();
      showToast(tr('toast_history_cleared'), 'warning');
      renderDashboard();
    });
  });

  document.getElementById('deleteAccountBtn').addEventListener('click', function() {
    Modal.confirm(tr('confirm_delete_account'), tr('confirm_delete_text'), function() {
      localStorage.removeItem('daytrader_data');
      localStorage.removeItem('daytrader_lang');
      localStorage.removeItem('daytrader_theme');
      Store.user = null;
      Store.connections = [];
      Store.notes = {};
      logout();
      showToast(tr('toast_account_deleted'), 'warning');
    });
  });

  // Topbar buttons
  document.getElementById('notifBtn').addEventListener('click', function() {
    showToast(tr('toast_3_notif'), 'info');
  });

  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(function(overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });

  // Auto-login if saved
  if (Store.user) {
    setTimeout(enterApp, 300);
  }

  // Resize charts
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      const activePage = document.querySelector('.page.active');
      if (!activePage) return;
      const pageId = activePage.id;
      if (pageId === 'page-dashboard') renderDashboard();
      if (pageId === 'page-analytics') renderAnalytics();
    }, 200);
  });
});
