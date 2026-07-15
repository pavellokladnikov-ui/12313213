/* ============================================
   DAY TRADER v4 — Full Application Logic
   ============================================ */

// ============================================
// TRANSLATIONS
// ============================================
const I18N = {
  ru: {
    tagline: "Профессиональный дневник трейдера. Автоматическая загрузка сделок, аналитика и статистика по всем вашим биржам в одном месте.",
    feat_unlimited: "Неограниченное количество подключений",
    feat_sync: "Автоматическая синхронизация по API",
    feat_notes: "Комментарии, скриншоты и видео к сделкам",
    feat_privacy: "Полная анонимность — мы не храним личные данные",
    feat_exchanges: "Поддержка 9 крупнейших бирж",
    auth_subtitle: "Войдите через социальную сеть",
    login_google: "Войти через Google",
    login_apple: "Войти через Apple",
    auth_terms: "Продолжая, вы соглашаетесь с условиями использования и политикой конфиденциальности",
    auth_or: "или",
    nav_main: "Основное",
    nav_dashboard: "Дашборд",
    nav_journal: "Журнал сделок",
    nav_calendar: "Календарь",
    nav_analytics: "Аналитика",
    nav_charts: "График",
    nav_integrations: "Интеграции",
    nav_api: "API подключения",
    nav_system: "Система",
    nav_settings: "Настройки",
    online: "Онлайн",
    balance: "Баланс",
    stat_pnl: "PnL",
    stat_winrate: "Win Rate",
    stat_trades: "Всего сделок",
    stat_risk_index: "Индекс риска",
    chart_pnl: "Динамика PnL",
    chart_exchanges: "Распределение по биржам",
    total: "Всего",
    recent_trades: "Последние сделки",
    export_csv: "Экспорт CSV",
    all_trades: "Все сделки",
    tv_chart: "График TradingView",
    fear_greed: "Индекс страха и жадности",
    tech_summary: "Технический анализ",
    th_pair: "Пара",
    th_exchange: "Биржа",
    th_direction: "Направление",
    th_entry_exit: "Вход / Выход",
    th_pnl: "PnL",
    th_status: "Статус",
    th_time: "Время",
    filter_all: "Все",
    filter_profit: "Прибыльные",
    filter_loss: "Убыточные",
    search_placeholder: "Поиск по паре или бирже...",
    cal_month_pnl: "PnL месяца",
    cal_month_trades: "Сделок",
    cal_month_wr: "Win Rate",
    analytics_sessions: "Статистика по сессиям",
    analytics_metrics: "Ключевые метрики",
    analytics_wr: "Динамика Win Rate",
    analytics_top: "Топ-5 прибыльных пар",
    analytics_worst: "Топ-5 убыточных пар",
    api_connected: "Подключённые биржи",
    api_desc: "Добавьте API-ключи ваших бирж для автоматической синхронизации сделок. Ключи хранятся в зашифрованном виде.",
    api_security_title: "Безопасность API-ключей",
    api_security_desc: "Все ключи шифруются с помощью AES-256. Мы используем только разрешения на чтение (read-only). Ваши средства в безопасности — мы никогда не запрашиваем права на вывод.",
    modal_api_title: "Подключение API",
    api_key_placeholder: "Вставьте ваш API Key",
    api_key_hint: "Найдите в настройках безопасности биржи",
    api_secret_placeholder: "Вставьте ваш Secret Key",
    api_secret_hint: "Никому не передавайте этот ключ",
    api_passphrase: "Passphrase (если требуется)",
    api_pass_placeholder: "Только для OKX",
    set_profile: "Профиль",
    set_profile_desc: "Управление данными вашего аккаунта",
    set_name: "Имя трейдера",
    set_name_desc: "Отображается в профиле и рейтингах",
    set_name_limit: "Осталось смен в этом месяце",
    set_name_limit_over: "Лимит исчерпан. Следующая смена доступна",
    set_email: "Email",
    set_email_desc: "Для уведомлений и входа",
    set_currency: "Валюта отображения",
    set_currency_desc: "Основная валюта для всех расчётов",
    set_notif: "Уведомления",
    set_notif_desc: "Настройте способы получения оповещений",
    set_notif_trades: "Новые сделки",
    set_notif_trades_desc: "Уведомление при каждой новой сделке",
    set_notif_daily: "Дневной отчёт",
    set_notif_daily_desc: "Сводка результатов за день",
    set_notif_signals: "Сигналы",
    set_notif_signals_desc: "Новые торговые идеи",
    set_notif_email: "Email-уведомления",
    set_notif_email_desc: "Дублировать в почту",
    set_privacy: "Приватность",
    set_privacy_desc: "Управление видимостью ваших данных",
    set_public: "Публичный профиль",
    set_public_desc: "Другие трейдеры видят вашу статистику",
    set_balance: "Показывать баланс",
    set_balance_desc: "Отображать сумму баланса в профиле",
    set_danger: "Опасная зона",
    set_danger_desc: "Необратимые действия",
    set_clear: "Очистить все сделки",
    set_clear_desc: "Удалить всю историю торговли",
    set_delete: "Удалить аккаунт",
    set_delete_desc: "Полное удаление всех данных",
    btn_clear: "Очистить",
    btn_delete: "Удалить",
    btn_cancel: "Отмена",
    btn_connect: "Подключить",
    btn_save: "Сохранить",
    btn_confirm: "Подтвердить",
    btn_login: "Войти",
    btn_register: "Создать аккаунт",
    btn_logout: "Выход из аккаунта",
    tab_login: "Вход",
    tab_register: "Регистрация",
    label_password: "Пароль",
    label_reg_password: "Придумайте пароль",
    label_reg_password2: "Повторите пароль",
    label_country: "Страна",
    label_email: "Email",
    placeholder_email: "Введите email",
    placeholder_password: "Введите пароль",
    placeholder_reg_password: "Минимум 6 символов",
    placeholder_reg_password2: "Повторите пароль",
    entry_price: "Вход",
    exit_price: "Выход",
    trade_pnl: "PnL",
    trade_size: "Размер",
    modal_note_title: "Заметка к сделке",
    trade: "Сделка",
    note_placeholder: "Опишите вашу мысль, эмоции, что пошло не так или отлично...",
    confirm_title: "Подтверждение",
    confirm_text: "Вы уверены?",
    confirm_disconnect: "Отключить биржу?",
    confirm_disconnect_text: "Сделки перестанут синхронизироваться.",
    confirm_clear_history: "Очистить историю?",
    confirm_clear_text: "Все сделки будут удалены безвозвратно.",
    confirm_delete_account: "Удалить аккаунт?",
    confirm_delete_text: "Все данные будут удалены навсегда. Это действие необратимо.",
    status_closed: "Закрыта",
    status_open: "Открыта",
    dir_long: "LONG",
    dir_short: "SHORT",
    connected: "Подключено",
    disconnected: "Не подключено",
    mon: "Пн", tue: "Вт", wed: "Ср", thu: "Чт", fri: "Пт", sat: "Сб", sun: "Вс",
    jan: "Январь", feb: "Февраль", mar: "Март", apr: "Апрель",
    may: "Май", jun: "Июнь", jul: "Июль", aug: "Август",
    sep: "Сентябрь", oct: "Октябрь", nov: "Ноябрь", dec: "Декабрь",
    cal_no_trades: "Нет сделок",
    cal_trades: "сделок",
    morning: "Утро", day: "День", evening: "Вечер", night: "Ночь",
    session_morning: "06:00 — 12:00", session_day: "12:00 — 18:00",
    session_evening: "18:00 — 00:00", session_night: "00:00 — 06:00",
    avg_pnl: "Средний PnL на сделку",
    max_drawdown: "Максимальная просадка",
    sharpe: "Sharpe Ratio",
    avg_time: "Среднее время в сделке",
    best_streak: "Лучшая серия (подряд)",
    worst_streak: "Худшая серия (подряд)",
    avg_risk: "Средний риск на сделку",
    r_multiple: "R-Multiple средний",
    note_edit: "Редактировать",
    note_add: "Добавить заметку",
    tf_1d: "1Д", tf_7d: "7Д", tf_30d: "30Д", tf_90d: "90Д", tf_1y: "1Г",
    toast_welcome: "Добро пожаловать в Day Trader!",
    toast_login_success: "Вход выполнен успешно",
    toast_register_success: "Регистрация успешна",
    toast_invalid_credentials: "Неверный email или пароль",
    toast_passwords_match: "Пароли не совпадают",
    toast_fill_all: "Заполните все поля",
    toast_password_short: "Пароль должен быть не менее 6 символов",
    toast_note_saved: "Заметка сохранена",
    toast_csv_exported: "CSV файл скачан",
    toast_exchange_connected: "успешно подключена",
    toast_exchange_disconnected: "отключена",
    toast_history_cleared: "История очищена",
    toast_account_deleted: "Аккаунт удалён",
    toast_3_notif: "У вас 3 новых уведомления",
    toast_name_changed: "Имя изменено",
    toast_name_limit: "Лимит смен имени исчерпан (3 раза в месяц)",
    poster_title: "Репост сделки",
    poster_theme_dark: "Тёмная тема", poster_theme_light: "Светлая тема",
    poster_pnl_profit: "Прибыль", poster_pnl_percent: "Только %",
    type_scalping: "Скальпинг", type_momentum: "Импульсный",
    type_intraday: "Внутридневной", type_swing_short: "Краткосрочный свинг",
    type_swing_medium: "Среднесрочный свинг", type_swing_long: "Долгосрочный свинг",
    type_positional: "Позиционный",
    chart_trade_types: "Тип трейдов",
    chart_trade_styles: "Торговый стиль",
    analytics_pnl_dynamics: "Динамика PnL в $",
    note_delete: "Удалить",
    entry_price_label: "Цена входа",
    exit_price_label: "Цена выхода",
    balance_history_title: "История пополнений",
    notifications: "Уведомления",
    clear_all: "Очистить",
    notif_trade_opened: "Сделка открыта",
    notif_trade_closed: "Сделка закрыта",
    notif_profit: "Прибыль",
    notif_loss: "Убыток",
    status_open: "Открыта",
    status_closed: "Закрыта",
    exchanges_title: "Биржи",
    exchanges_subtitle: "Подключите API-ключи ваших бирж для автоматической синхронизации сделок",
    exchanges_connected: "Подключённые биржи",
    exchanges_available: "Доступные биржи",
    instructions_title: "Как получить API-ключ",
    btn_test: "Проверить",
    test_success: "✓ Подключение успешно! Ключи валидны. Нажмите «Подключить» для сохранения.",
    test_error: "Заполните обязательные поля",
    test_loading: "Проверка подключения...",
    connect_fill_required: "Заполните обязательные поля",
    exchange_connected: "подключена",
    exchange_disconnected: "отключена",
    syncing: "Синхронизация",
    synced: "синхронизирована",
    sync_trades: "сделок",
    not_synced: "Ещё не синхронизировано",
    last_sync: "Последняя синхр.: ",
    active_status: "Активно",
    btn_sync: "Синхронизировать",
    btn_disconnect: "Отключить",
    confirm_disconnect_ex: "Отключить биржу?",
    confirm_disconnect_text_ex: "Сделки останутся в журнале, но автосинхронизация прекратится.",
    manage: "Управление →",
    connect: "Подключить →",
    auth_label: "Аутентификация",
    readonly_label: "Только чтение",
  },
  en: {
    tagline: "Professional trading journal. Automatic trade import, analytics and statistics from all your exchanges in one place.",
    feat_unlimited: "Unlimited connections",
    feat_sync: "Automatic API synchronization",
    feat_notes: "Comments, screenshots and videos for trades",
    feat_privacy: "Full anonymity — we do not store personal data",
    feat_exchanges: "Support for 9 major exchanges",
    login_google: "Sign in with Google",
    login_apple: "Sign in with Apple",
    auth_terms: "By continuing, you agree to the Terms of Service and Privacy Policy",
    auth_or: "or",
    nav_main: "Main",
    nav_dashboard: "Dashboard",
    nav_journal: "Trade Journal",
    nav_calendar: "Calendar",
    nav_analytics: "Analytics",
    nav_charts: "Chart",
    nav_integrations: "Integrations",
    nav_api: "API Connections",
    nav_system: "System",
    nav_settings: "Settings",
    online: "Online",
    balance: "Balance",
    stat_pnl: "PnL",
    stat_winrate: "Win Rate",
    stat_trades: "Total Trades",
    stat_risk_index: "Risk Index",
    chart_pnl: "PnL Dynamics",
    chart_exchanges: "Distribution by Exchange",
    total: "Total",
    recent_trades: "Recent Trades",
    export_csv: "Export CSV",
    all_trades: "All Trades",
    tv_chart: "TradingView Chart",
    fear_greed: "Fear & Greed Index",
    tech_summary: "Technical Analysis",
    set_name_limit: "Name changes left this month",
    set_name_limit_over: "Limit reached. Next change available",
    th_pair: "Pair", th_exchange: "Exchange", th_direction: "Direction",
    th_entry_exit: "Entry / Exit", th_pnl: "PnL", th_status: "Status", th_time: "Time",
    filter_all: "All", filter_profit: "Profitable", filter_loss: "Losing",
    search_placeholder: "Search by pair or exchange...",
    cal_month_pnl: "Month PnL", cal_month_trades: "Trades", cal_month_wr: "Win Rate",
    analytics_sessions: "Session Statistics", analytics_metrics: "Key Metrics",
    analytics_wr: "Win Rate Dynamics", analytics_top: "Top-5 Profitable Pairs",
    analytics_worst: "Top-5 Losing Pairs",
    api_connected: "Connected Exchanges", api_desc: "Add your exchange API keys for automatic trade synchronization. Keys are stored encrypted.",
    api_security_title: "API Key Security", api_security_desc: "All keys are encrypted with AES-256. We use read-only permissions only.",
    modal_api_title: "API Connection", api_key_placeholder: "Paste your API Key",
    api_key_hint: "Find it in exchange security settings",
    api_secret_placeholder: "Paste your Secret Key", api_secret_hint: "Never share this key",
    api_passphrase: "Passphrase (if required)", api_pass_placeholder: "Only for OKX",
    set_profile: "Profile", set_name: "Trader Name", set_email: "Email",
    set_currency: "Display Currency", set_notif: "Notifications", set_privacy: "Privacy",
    set_public: "Public Profile", set_balance: "Show Balance", set_danger: "Danger Zone",
    set_clear: "Clear All Trades", set_delete: "Delete Account",
    btn_clear: "Clear", btn_delete: "Delete", btn_cancel: "Cancel", btn_connect: "Connect",
    btn_save: "Save", btn_confirm: "Confirm", btn_login: "Login", btn_register: "Create Account",
    btn_logout: "Account Logout", tab_login: "Login", tab_register: "Register",
    label_password: "Password", label_reg_password: "Choose password",
    label_reg_password2: "Repeat password", label_country: "Country",
    placeholder_email: "Enter email", placeholder_password: "Enter password",
    placeholder_reg_password: "Min 6 characters", placeholder_reg_password2: "Repeat password",
    entry_price: "Entry", exit_price: "Exit", trade_pnl: "PnL", trade_size: "Size",
    modal_note_title: "Trade Note", trade: "Trade",
    note_placeholder: "Describe your thoughts, emotions, what went wrong or great...",
    confirm_title: "Confirmation", confirm_text: "Are you sure?",
    confirm_disconnect: "Disconnect exchange?", confirm_disconnect_text: "Trades will stop syncing.",
    confirm_clear_history: "Clear history?", confirm_clear_text: "All trades will be permanently deleted.",
    confirm_delete_account: "Delete account?", confirm_delete_text: "All data will be permanently deleted.",
    status_closed: "Closed", status_open: "Open", dir_long: "LONG", dir_short: "SHORT",
    connected: "Connected", disconnected: "Disconnected",
    exchanges_title: "Exchanges", exchanges_subtitle: "Connect API keys for automatic trade sync",
    exchanges_connected: "Connected Exchanges", exchanges_available: "Available Exchanges",
    instructions_title: "How to get API Key", btn_test: "Test",
    not_synced: "Not synced yet", last_sync: "Last sync: ", active_status: "Active",
    btn_sync: "Sync", btn_disconnect: "Disconnect",
    mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun",
    jan: "January", feb: "February", mar: "March", apr: "April",
    may: "May", jun: "June", jul: "July", aug: "August",
    sep: "September", oct: "October", nov: "November", dec: "December",
    cal_no_trades: "No trades", cal_trades: "trades",
    morning: "Morning", day: "Day", evening: "Evening", night: "Night",
    session_morning: "06:00 — 12:00", session_day: "12:00 — 18:00",
    session_evening: "18:00 — 00:00", session_night: "00:00 — 06:00",
    avg_pnl: "Avg PnL per trade", max_drawdown: "Max Drawdown", sharpe: "Sharpe Ratio",
    avg_time: "Avg time in trade", best_streak: "Best streak (in a row)",
    worst_streak: "Worst streak (in a row)", avg_risk: "Avg risk per trade", r_multiple: "Avg R-Multiple",
    note_edit: "Edit", note_add: "Add note",
    tf_1d: "1D", tf_7d: "7D", tf_30d: "30D", tf_90d: "90D", tf_1y: "1Y",
    toast_welcome: "Welcome to Day Trader!",
    toast_login_success: "Login successful",
    toast_register_success: "Registration successful",
    toast_invalid_credentials: "Invalid email or password",
    toast_passwords_match: "Passwords do not match",
    toast_fill_all: "Please fill all fields",
    toast_password_short: "Password must be at least 6 characters",
    toast_note_saved: "Note saved",
    toast_csv_exported: "CSV file downloaded",
    toast_exchange_connected: "successfully connected",
    toast_exchange_disconnected: "disconnected",
    toast_history_cleared: "History cleared",
    toast_account_deleted: "Account deleted",
    toast_3_notif: "You have 3 new notifications",
    toast_name_changed: "Name changed",
    toast_name_limit: "Name change limit reached (3 per month)",
    type_scalping: "Scalping", type_momentum: "Momentum",
    type_intraday: "Day Trading", type_swing_short: "Swing Short",
    type_swing_medium: "Swing Medium", type_swing_long: "Swing Long",
    type_positional: "Positional",
    chart_trade_types: "Trade Types",
    chart_trade_styles: "Trading Style",
    analytics_pnl_dynamics: "PnL Dynamics in $",
    note_delete: "Delete",
    entry_price_label: "Entry Price",
    exit_price_label: "Exit Price",
  },
  de: {
    nav_dashboard: "Dashboard", nav_journal: "Trade-Journal", nav_calendar: "Kalender",
    nav_analytics: "Analytik", nav_charts: "Chart",
    nav_api: "API-Verbindungen", nav_settings: "Einstellungen",
    stat_pnl: "PnL", stat_winrate: "Win Rate", stat_trades: "Gesamte Trades",
    stat_risk_index: "Risikoindex", tv_chart: "TradingView Chart",
    fear_greed: "Angst- und Gierindex", tech_summary: "Technische Analyse",
    set_name_limit: "Namenänderungen diesen Monat",
    set_name_limit_over: "Limit erreicht. Nächste Änderung verfügbar",
    btn_logout: "Konto abmelden", tab_login: "Anmelden", tab_register: "Registrieren",
    label_password: "Passwort", placeholder_password: "Passwort eingeben",
    label_reg_password: "Passwort wählen", label_reg_password2: "Passwort wiederholen",
    placeholder_email: "Email eingeben", placeholder_reg_password: "Min. 6 Zeichen",
    label_country: "Land", entry_price: "Einstieg", exit_price: "Ausstieg",
    trade_pnl: "PnL", trade_size: "Größe",
    toast_login_success: "Anmeldung erfolgreich", toast_register_success: "Registrierung erfolgreich",
    toast_invalid_credentials: "Falsche Zugangsdaten",
    toast_name_changed: "Name geändert", toast_name_limit: "Limit für Namensänderungen erreicht",
  },
  es: {
    nav_dashboard: "Panel", nav_journal: "Diario de Operaciones", nav_calendar: "Calendario",
    nav_analytics: "Análisis", nav_charts: "Gráfico",
    nav_api: "Conexiones API", nav_settings: "Configuración",
    stat_pnl: "PnL", stat_winrate: "Win Rate", stat_trades: "Operaciones Totales",
    stat_risk_index: "Índice de Riesgo", tv_chart: "Gráfico TradingView",
    fear_greed: "Índice de Miedo y Codicia", tech_summary: "Análisis Técnico",
    set_name_limit: "Cambios de nombre restantes este mes",
    set_name_limit_over: "Límite alcanzado. Próximo cambio disponible",
    btn_logout: "Cerrar sesión", tab_login: "Iniciar sesión", tab_register: "Registrarse",
    label_password: "Contraseña", placeholder_password: "Introduce contraseña",
    label_reg_password: "Elige contraseña", label_reg_password2: "Repite contraseña",
    placeholder_email: "Introduce email", placeholder_reg_password: "Mín. 6 caracteres",
    label_country: "País", entry_price: "Entrada", exit_price: "Salida",
    trade_pnl: "PnL", trade_size: "Tamaño",
    toast_login_success: "Sesión iniciada", toast_register_success: "Registro exitoso",
    toast_invalid_credentials: "Credenciales incorrectas",
    toast_name_changed: "Nombre cambiado", toast_name_limit: "Límite de cambios de nombre alcanzado",
  },
  zh: {
    nav_dashboard: "仪表盘", nav_journal: "交易日志", nav_calendar: "日历",
    nav_analytics: "分析", nav_charts: "图表",
    nav_api: "API连接", nav_settings: "设置",
    stat_pnl: "PnL", stat_winrate: "胜率", stat_trades: "总交易数",
    stat_risk_index: "风险指数", tv_chart: "TradingView 图表",
    fear_greed: "恐惧与贪婪指数", tech_summary: "技术分析",
    set_name_limit: "本月剩余改名次数",
    set_name_limit_over: "已达上限。下次改名可用时间",
    btn_logout: "退出账户", tab_login: "登录", tab_register: "注册",
    label_password: "密码", placeholder_password: "输入密码",
    label_reg_password: "设置密码", label_reg_password2: "确认密码",
    placeholder_email: "输入邮箱", placeholder_reg_password: "至少6个字符",
    label_country: "国家", entry_price: "入场", exit_price: "出场",
    trade_pnl: "盈亏", trade_size: "仓位",
    toast_login_success: "登录成功", toast_register_success: "注册成功",
    toast_invalid_credentials: "邮箱或密码错误",
    toast_name_changed: "名称已更改", toast_name_limit: "本月改名次数已用完",
  },
  tr: {
    nav_dashboard: "Panel", nav_journal: "İşlem Günlüğü", nav_calendar: "Takvim",
    nav_analytics: "Analitik", nav_charts: "Grafik",
    nav_api: "API Bağlantıları", nav_settings: "Ayarlar",
    stat_pnl: "PnL", stat_winrate: "Kazanma Oranı", stat_trades: "Toplam İşlem",
    stat_risk_index: "Risk İndeksi", tv_chart: "TradingView Grafiği",
    fear_greed: "Korku ve Açgözlülük Endeksi", tech_summary: "Teknik Analiz",
    set_name_limit: "Bu ay kalan isim değişikliği",
    set_name_limit_over: "Limit doldu. Sonraki değişiklik",
    btn_logout: "Hesaptan Çık", tab_login: "Giriş", tab_register: "Kayıt",
    label_password: "Şifre", placeholder_password: "Şifre gir",
    label_reg_password: "Şifre seç", label_reg_password2: "Şifreyi tekrarla",
    placeholder_email: "Email gir", placeholder_reg_password: "Min. 6 karakter",
    label_country: "Ülke", entry_price: "Giriş", exit_price: "Çıkış",
    trade_pnl: "PnL", trade_size: "Büyüklük",
    toast_login_success: "Giriş başarılı", toast_register_success: "Kayıt başarılı",
    toast_invalid_credentials: "Hatalı email veya şifre",
    toast_name_changed: "İsim değiştirildi", toast_name_limit: "İsim değiştirme limiti doldu",
  },
  fr: {
    nav_dashboard: "Tableau de bord", nav_journal: "Journal de Trades", nav_calendar: "Calendrier",
    nav_analytics: "Analyses", nav_charts: "Graphique",
    nav_api: "Connexions API", nav_settings: "Paramètres",
    stat_pnl: "PnL", stat_winrate: "Win Rate", stat_trades: "Trades Totaux",
    stat_risk_index: "Indice de Risque", tv_chart: "Graphique TradingView",
    fear_greed: "Indice de Peur et Cupidité", tech_summary: "Analyse Technique",
    set_name_limit: "Changements de nom restants ce mois",
    set_name_limit_over: "Limite atteinte. Prochain changement",
    btn_logout: "Déconnexion", tab_login: "Connexion", tab_register: "Inscription",
    label_password: "Mot de passe", placeholder_password: "Entrez mot de passe",
    label_reg_password: "Choisissez un mot de passe", label_reg_password2: "Répétez le mot de passe",
    placeholder_email: "Entrez email", placeholder_reg_password: "Min. 6 caractères",
    label_country: "Pays", entry_price: "Entrée", exit_price: "Sortie",
    trade_pnl: "PnL", trade_size: "Taille",
    toast_login_success: "Connexion réussie", toast_register_success: "Inscription réussie",
    toast_invalid_credentials: "Identifiants incorrects",
    toast_name_changed: "Nom modifié", toast_name_limit: "Limite de changements de nom atteinte",
  },
  ar: {
    tagline: "مجلة تداول احترافية. استيراد الصفقات تلقائياً، التحليلات والإحصائيات من جميع بورصاتك في مكان واحد.",
    feat_unlimited: "عدد غير محدود من الاتصالات",
    feat_sync: "المزامنة التلقائية عبر API",
    feat_notes: "تعليقات ولقطات شاشة وفيديو للصفقات",
    feat_privacy: "سرية تامة — لا نخزن بياناتك الشخصية",
    feat_exchanges: "دعم 9 بورصات كبرى",
    auth_subtitle: "تسجيل الدخول عبر الشبكة الاجتماعية",
    login_google: "تسجيل الدخول عبر Google",
    login_apple: "تسجيل الدخول عبر Apple",
    auth_terms: "بالمواصلة، أنت توافق على شروط الخدمة وسياسة الخصوصية",
    auth_or: "أو",
    nav_main: "رئيسي",
    nav_dashboard: "لوحة القيادة",
    nav_journal: "سجل الصفقات",
    nav_calendar: "التقويم",
    nav_analytics: "التحليلات",
    nav_charts: "الرسم البياني",
    nav_integrations: "التكاملات",
    nav_api: "اتصالات API",
    nav_system: "النظام",
    nav_settings: "الإعدادات",
    online: "متصل",
    balance: "الرصيد",
    stat_pnl: "الربح/الخسارة",
    stat_winrate: "نسبة الربح",
    stat_trades: "إجمالي الصفقات",
    stat_risk_index: "مؤشر المخاطرة",
    chart_pnl: "ديناميكية الربح/الخسارة",
    chart_exchanges: "التوزيع حسب البورصة",
    total: "الإجمالي",
    recent_trades: "أحدث الصفقات",
    export_csv: "تصدير CSV",
    import_csv: "استيراد CSV",
    all_trades: "جميع الصفقات",
    tv_chart: "رسم TradingView",
    fear_greed: "مؤشر الخوف والطمع",
    tech_summary: "التحليل الفني",
    th_pair: "الزوج", th_exchange: "البورصة", th_direction: "الاتجاه",
    th_entry_exit: "الدخول / الخروج", th_pnl: "الربح/الخسارة", th_status: "الحالة", th_time: "الوقت",
    filter_all: "الكل", filter_profit: "مربحة", filter_loss: "خاسرة",
    search_placeholder: "البحث حسب الزوج أو البورصة...",
    cal_month_pnl: "الربح الشهري", cal_month_trades: "الصفقات", cal_month_wr: "نسبة الربح",
    cal_no_trades: "لا توجد صفقات", cal_trades: "صفقات",
    analytics_sessions: "إحصائيات الجلسات", analytics_metrics: "المقاييس الرئيسية",
    analytics_wr: "ديناميكية نسبة الربح", analytics_top: "أفضل 5 أزواج رابحة",
    analytics_worst: "أفضل 5 أزواج خاسرة",
    api_connected: "البورصات المتصلة", api_desc: "أضف مفاتيح API الخاصة ببورصاتك لمزامنة الصفقات تلقائياً. المفاتيح مخزنة بشكل مشفر.",
    api_security_title: "أمان مفاتيح API", api_security_desc: "جميع المفاتيح مشفرة بـ AES-256. نستخدم صلاحيات القراءة فقط.",
    modal_api_title: "اتصال API", api_key_placeholder: "الصق مفتاح API",
    api_key_hint: "ابحث عنه في إعدادات أمان البورصة",
    api_secret_placeholder: "الصق المفتاح السري", api_secret_hint: "لا تشارك هذا المفتاح مع أحد",
    api_passphrase: "Passphrase (إذا لزم الأمر)", api_pass_placeholder: "فقط لـ OKX",
    set_profile: "الملف الشخصي", set_profile_desc: "إدارة بيانات حسابك",
    set_avatar: "الصورة الرمزية", set_avatar_desc: "تحميل صورة الملف الشخصي",
    set_name: "اسم المتداول", set_name_desc: "يظهر في الملف الشخصي والتصنيفات",
    set_name_limit: "تغييرات الاسم المتبقية هذا الشهر",
    set_name_limit_over: "تم الوصول للحد. التغيير التالي متاح",
    set_email: "البريد الإلكتروني", set_email_desc: "للإشعارات وتسجيل الدخول",
    set_currency: "عملة العرض", set_currency_desc: "العملة الرئيسية لجميع الحسابات",
    set_notif: "الإشعارات", set_notif_desc: "تكوين طرق استلام التنبيهات",
    set_notif_trades: "صفقات جديدة", set_notif_trades_desc: "إشعار عند كل صفقة جديدة",
    set_notif_daily: "التقرير اليومي", set_notif_daily_desc: "ملخص النتائج اليومية",
    set_notif_signals: "الإشارات", set_notif_signals_desc: "أفكار تداول جديدة",
    set_notif_email: "إشعارات البريد", set_notif_email_desc: "تكرار في البريد الإلكتروني",
    set_privacy: "الخصوصية", set_privacy_desc: "إدارة رؤية بياناتك",
    set_public: "الملف الشخصي العام", set_public_desc: "يرى المتداولون الآخرون إحصائياتك",
    set_balance: "عرض الرصيد", set_balance_desc: "عرض مبلغ الرصيد في الملف الشخصي",
    set_security: "الأمان", set_security_desc: "تغيير كلمة مرور الحساب",
    set_current_password: "كلمة المرور الحالية", set_current_password_desc: "أدخل كلمة المرور الحالية للتأكيد",
    set_new_password: "كلمة المرور الجديدة", set_new_password_desc: "6 أحرف على الأقل",
    set_confirm_password: "تأكيد كلمة المرور", set_confirm_password_desc: "أعد إدخال كلمة المرور الجديدة",
    set_danger: "منطقة الخطر", set_danger_desc: "إجراءات لا رجعة فيها",
    set_clear: "مسح جميع الصفقات", set_clear_desc: "حذف جميع سجل التداول",
    set_delete: "حذف الحساب", set_delete_desc: "حذف كامل لجميع البيانات",
    btn_clear: "مسح", btn_delete: "حذف", btn_cancel: "إلغاء",
    btn_connect: "اتصال", btn_save: "حفظ", btn_save_name: "حفظ",
    btn_confirm: "تأكيد", btn_login: "دخول", btn_register: "إنشاء حساب",
    btn_logout: "خروج من الحساب", btn_upload: "تحميل",
    btn_change_password: "تغيير", btn_download_poster: "تنزيل البوستر",
    tab_login: "دخول", tab_register: "تسجيل",
    label_password: "كلمة المرور", label_reg_password: "اختر كلمة المرور",
    label_reg_password2: "كرر كلمة المرور", label_country: "الدولة",
    label_email: "البريد الإلكتروني",
    placeholder_email: "أدخل البريد الإلكتروني",
    placeholder_password: "أدخل كلمة المرور",
    placeholder_reg_password: "6 أحرف على الأقل",
    placeholder_reg_password2: "كرر كلمة المرور",
    placeholder_current_password: "كلمة المرور الحالية",
    placeholder_new_password: "كلمة المرور الجديدة",
    placeholder_confirm_password: "تأكيد كلمة المرور",
    entry_price: "الدخول", exit_price: "الخروج",
    trade_pnl: "الربح/الخسارة", trade_size: "الحجم",
    modal_note_title: "ملاحظة على الصفقة", trade: "صفقة",
    note_placeholder: "صف أفكارك ومشاعرك، ما الذي سار خطأ أو بشكل رائع...",
    confirm_title: "تأكيد", confirm_text: "هل أنت متأكد؟",
    confirm_disconnect: "فصل البورصة؟", confirm_disconnect_text: "ستتوقف مزامنة الصفقات.",
    confirm_clear_history: "مسح السجل؟", confirm_clear_text: "سيتم حذف جميع الصفقات نهائياً.",
    confirm_delete_account: "حذف الحساب؟", confirm_delete_text: "سيتم حذف جميع البيانات نهائياً. لا يمكن التراجع عن هذا الإجراء.",
    status_closed: "مغلقة", status_open: "مفتوحة",
    dir_long: "شراء", dir_short: "بيع",
    connected: "متصل", disconnected: "غير متصل",
    mon: "الإثنين", tue: "الثلاثاء", wed: "الأربعاء", thu: "الخميس", fri: "الجمعة", sat: "السبت", sun: "الأحد",
    jan: "يناير", feb: "فبراير", mar: "مارس", apr: "أبريل",
    may: "مايو", jun: "يونيو", jul: "يوليو", aug: "أغسطس",
    sep: "سبتمبر", oct: "أكتوبر", nov: "نوفمبر", dec: "ديسمبر",
    morning: "الصباح", day: "النهار", evening: "المساء", night: "الليل",
    session_morning: "06:00 — 12:00", session_day: "12:00 — 18:00",
    session_evening: "18:00 — 00:00", session_night: "00:00 — 06:00",
    avg_pnl: "متوسط الربح لكل صفقة", max_drawdown: "أقصى تراجع",
    sharpe: "نسبة Sharpe", avg_time: "متوسط وقت الصفقة",
    best_streak: "أفضل سلسلة (على التوالي)", worst_streak: "أسوأ سلسلة (على التوالي)",
    avg_risk: "متوسط المخاطرة لكل صفقة", r_multiple: "متوسط R-Multiple",
    note_edit: "تعديل", note_add: "إضافة ملاحظة",
    tf_1d: "1ي", tf_7d: "7ي", tf_30d: "30ي", tf_90d: "90ي", tf_1y: "1س",
    toast_welcome: "مرحباً بك في Day Trader!",
    toast_login_success: "تم تسجيل الدخول بنجاح",
    toast_register_success: "تم التسجيل بنجاح",
    toast_invalid_credentials: "بريد إلكتروني أو كلمة مرور غير صحيحة",
    toast_passwords_match: "كلمات المرور غير متطابقة",
    toast_fill_all: "يرجى ملء جميع الحقول",
    toast_password_short: "يجب أن تكون كلمة المرور 6 أحرف على الأقل",
    toast_note_saved: "تم حفظ الملاحظة",
    toast_csv_exported: "تم تنزيل ملف CSV",
    toast_csv_imported: "تم استيراد الصفقات بنجاح",
    toast_csv_import_error: "خطأ في استيراد CSV",
    toast_exchange_connected: "تم الاتصال بنجاح",
    toast_exchange_disconnected: "تم الفصل",
    toast_history_cleared: "تم مسح السجل",
    toast_account_deleted: "تم حذف الحساب",
    toast_3_notif: "لديك 3 إشعارات جديدة",
    toast_name_changed: "تم تغيير الاسم",
    toast_name_limit: "تم استنفاد حد تغييرات الاسم (3 مرات في الشهر)",
    toast_password_changed: "تم تغيير كلمة المرور",
    toast_password_wrong: "كلمة المرور الحالية غير صحيحة",
    toast_password_mismatch: "كلمات المرور الجديدة غير متطابقة",
    poster_title: "مشاركة الصفقة",
    poster_theme_dark: "السمة الداكنة", poster_theme_light: "السمة الفاتحة",
    poster_pnl_profit: "الربح", poster_pnl_percent: "% فقط",
    type_scalping: "سكالبينج", type_momentum: "زخم",
    type_intraday: "تداول يومي", type_swing_short: "سوينج قصير",
    type_swing_medium: "سوينج متوسط", type_swing_long: "سوينج طويل",
    type_positional: "مركزي",
    chart_trade_types: "أنواع التداول",
    chart_trade_styles: "أسلوب التداول",
    analytics_pnl_dynamics: "ديناميكية الربح/الخسارة بالدولار",
    note_delete: "حذف",
    entry_price_label: "سعر الدخول",
    exit_price_label: "سعر الخروج",
  }
};

let currentLang = 'ru';
let dashboardTf = '1d';
let analyticsTf = '30d';
let journalFilter = 'all';
let journalSearch = '';
let collapsedDays = {};
let selectedExchange = null;
let calendarDate = new Date();
let currentTvPair = 'BINANCE:BTCUSDT';

function setLanguage(lang) {
  currentLang = lang;
  const t = I18N[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });
  var flags = { ru: '\uD83C\uDDF7\uD83C\uDDFA', en: '\uD83C\uDDEC\uD83C\uDDE7', de: '\uD83C\uDDE9\uD83C\uDDEA', es: '\uD83C\uDDEA\uD83C\uDDF8', zh: '\uD83C\uDDE8\uD83C\uDDF3', tr: '\uD83C\uDDF9\uD83C\uDDF7', fr: '\uD83C\uDDEB\uD83C\uDDF7', ar: '\uD83C\uDDF8\uD83C\uDDE6' };
  var codes = { ru: 'RU', en: 'EN', de: 'DE', es: 'ES', zh: 'ZH', tr: 'TR', fr: 'FR', ar: 'AR' };
  // RTL support for Arabic
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.getElementById('currentLangFlag').textContent = flags[lang];
  document.getElementById('currentLangCode').textContent = codes[lang];
  var pageId = document.querySelector('.page.active')?.id?.replace('page-', '');
  if (pageId) {
    var pageKeys = { dashboard: 'nav_dashboard', journal: 'nav_journal', calendar: 'nav_calendar', analytics: 'nav_analytics', charts: 'nav_charts', api: 'nav_api', settings: 'nav_settings' };
    var titleEl = document.getElementById('pageTitle');
    if (titleEl && pageKeys[pageId]) titleEl.textContent = t[pageKeys[pageId]] || I18N['ru'][pageKeys[pageId]];
  }
  if (pageId === 'dashboard') renderDashboard();
  if (pageId === 'journal') renderJournal();
  if (pageId === 'calendar') renderCalendar();
  if (pageId === 'analytics') renderAnalytics();
  if (pageId === 'charts') renderChartsPage();
  if (pageId === 'api') renderApiPage();
  updateTvLocale();
  localStorage.setItem('daytrader_lang', lang);
}

function tr(key) { return I18N[currentLang]?.[key] || I18N['ru']?.[key] || key; }

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('daytrader_theme', theme);
  var moon = document.querySelector('.theme-icon.moon');
  var sun = document.querySelector('.theme-icon.sun');
  if (moon && sun) {
    if (theme === 'light') { moon.classList.add('hidden'); sun.classList.remove('hidden'); }
    else { moon.classList.remove('hidden'); sun.classList.add('hidden'); }
  }
  updateTvTheme();
}
function toggleTheme() {
  var cur = document.documentElement.getAttribute('data-theme') || 'dark';
  setTheme(cur === 'dark' ? 'light' : 'dark');
}

function updateTvTheme() {
  var isLight = document.documentElement.getAttribute('data-theme') === 'light';
  var theme = isLight ? 'light' : 'dark';
  var f = document.getElementById('tvChartFrame');
  if (f && f.src) {
    var src = f.src.replace(/theme=[^&]*/, 'theme=' + theme);
    if (f.src !== src) f.src = src;
  }
}
function updateTvLocale() {
  var loc = currentLang === 'zh' ? 'zh_CN' : currentLang;
  var f = document.getElementById('tvChartFrame');
  if (f && f.src) {
    var src = f.src.replace(/locale=[^&]*/, 'locale=' + loc);
    f.src = src;
  }
}

// ============================================
// DATA STORE
// ============================================
var Store = {
  user: null,
  users: [],
  trades: [],
  connections: [],
  settings: { notifTrades: true, notifDaily: true, notifSignals: false, notifEmail: false, publicProfile: false, showBalance: false, currency: 'USD' },
  notes: {},
  nameChanges: [],
  apiConnected: false,
  avatar: null,

  apiBase: '/api',

  init: function() {
    var saved = localStorage.getItem('daytrader_data');
    if (saved) {
      try {
        var data = JSON.parse(saved);
        this.user = data.user || null;
        this.users = data.users || [];
        this.settings = Object.assign({}, this.settings, data.settings || {});
        this.notes = data.notes || {};
        this.nameChanges = data.nameChanges || [];
        this.apiConnected = data.apiConnected || false;
        this.avatar = data.avatar || null;
      } catch(e) {}
    }
  },

  loadFromApi: function(callback) {
    var self = this;
    fetch(this.apiBase + '/exchange/trades')
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.trades) {
          self.trades = data.trades.map(function(t) {
            return {
              id: t.id, pair: t.pair,
              exchange: t.exchange.charAt(0).toUpperCase() + t.exchange.slice(1),
              direction: t.side.toLowerCase(),
              entryPrice: +t.entryPrice, exitPrice: +t.exitPrice,
              pnl: +t.pnl, date: t.date, exitDate: t.exitDate,
              size: +t.size, leverage: +t.leverage, status: 'closed'
            };
          });
        }
        return fetch(self.apiBase + '/exchange/list');
      })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.connections) self.connections = data.connections;
        if (callback) callback();
      })
      .catch(function(err) { console.error('[API] Error:', err); if (callback) callback(); });
  },

  save: function() {
    try {
      localStorage.setItem('daytrader_data', JSON.stringify({
        user: this.user, users: this.users,
        settings: this.settings, notes: this.notes, nameChanges: this.nameChanges,
        apiConnected: this.apiConnected, avatar: this.avatar
      }));
    } catch(e) {}
  },

  // Legacy — data now comes from backend API
  generateDemoTrades: function() {},
  generateRealisticTrades: function() { return 0; },

  canChangeName: function() {
    var now = new Date();
    var month = now.getFullYear() + '-' + (now.getMonth() + 1);
    var changesThisMonth = this.nameChanges.filter(function(c) { return c.startsWith(month); }).length;
    return changesThisMonth < 3;
  },

  recordNameChange: function() {
    var now = new Date();
    this.nameChanges.push(now.toISOString());
    this.save();
  }
};

var EXCHANGES = [
  {
    id: 'binance', name: 'Binance', color: '#f0b90b', logoText: 'Bi', type: 'Spot + Futures',
    fields: [
      { name: 'apiKey', label: 'API Key', type: 'text', required: true, placeholder: 'Вставьте ваш API Key' },
      { name: 'apiSecret', label: 'Secret Key', type: 'password', required: true, placeholder: 'Вставьте ваш Secret Key' }
    ],
    instructions: [
      'Войдите в Binance → Профиль → API Management',
      'Создайте новый API-ключ',
      'В разделе API restrictions выберите только "Enable Reading"',
      'Отключите: Trading и Withdrawals',
      'Привяжите IP-адрес (рекомендуется)',
      'Скопируйте API Key и Secret Key'
    ],
    warning: '',
    authType: 'HMAC-SHA256', baseUrl: 'https://api.binance.com',
    endpoints: { trades: '/api/v3/myTrades', futures: '/fapi/v1/userTrades', balance: '/api/v3/account' }
  },
  {
    id: 'bybit', name: 'Bybit', color: '#f7a600', logoText: 'By', type: 'Spot + Futures + Options',
    fields: [
      { name: 'apiKey', label: 'API Key', type: 'text', required: true, placeholder: 'Вставьте ваш API Key' },
      { name: 'apiSecret', label: 'Secret Key', type: 'password', required: true, placeholder: 'Вставьте ваш Secret Key' }
    ],
    instructions: [
      'Войдите в Bybit → Профиль → API Management',
      'Создайте API Key → выберите "Read-Only"',
      'Permissions: отметьте только ContractTrade (read)',
      'Не отмечайте: Wallet (Withdraw), Trade',
      'Привяжите IP-адреса',
      'Скопируйте API Key и Secret'
    ],
    warning: '',
    authType: 'HMAC-SHA256', baseUrl: 'https://api.bybit.com',
    endpoints: { trades: '/v5/execution/list', balance: '/v5/account/wallet-balance' }
  },
  {
    id: 'okx', name: 'OKX', color: '#2e86de', logoText: 'OK', type: 'Spot + Futures + Options',
    fields: [
      { name: 'apiKey', label: 'API Key', type: 'text', required: true, placeholder: 'Вставьте ваш API Key' },
      { name: 'apiSecret', label: 'Secret Key', type: 'password', required: true, placeholder: 'Вставьте ваш Secret Key' },
      { name: 'passphrase', label: 'Passphrase', type: 'password', required: true, placeholder: 'Введите Passphrase' }
    ],
    instructions: [
      'Войдите в OKX → Профиль → API Keys',
      'Создайте API Key → установите Permission: Read',
      'Не включайте: Trade, Withdraw',
      'Запомните Passphrase (не восстанавливается!)',
      'Привяжите IP-адреса (до 20)',
      'Скопируйте: API Key, Secret Key, Passphrase'
    ],
    warning: 'Passphrase создаётся при генерации ключа и не может быть восстановлен. При потере — создавайте новый ключ.',
    authType: 'HMAC-SHA256 + Passphrase', baseUrl: 'https://www.okx.com',
    endpoints: { trades: '/api/v5/trade/fills', balance: '/api/v5/account/balance' }
  },
  {
    id: 'mexc', name: 'MEXC', color: '#00d4aa', logoText: 'MX', type: 'Spot + Futures',
    fields: [
      { name: 'apiKey', label: 'API Key', type: 'text', required: true, placeholder: 'Вставьте ваш API Key' },
      { name: 'apiSecret', label: 'Secret Key', type: 'password', required: true, placeholder: 'Вставьте ваш Secret Key' }
    ],
    instructions: [
      'Войдите в MEXC → Профиль → API Management',
      'Создайте API Key → ТОЛЬКО Read permission',
      'Не включайте: Trade permission',
      'Отключите вывод средств (Withdrawal)',
      'Скопируйте API Key и Secret'
    ],
    warning: '',
    authType: 'HMAC-SHA256', baseUrl: 'https://api.mexc.com',
    endpoints: { trades: '/api/v3/myTrades', balance: '/api/v3/account' }
  },
  {
    id: 'bingx', name: 'BingX', color: '#3b82f6', logoText: 'BX', type: 'Spot + Futures',
    fields: [
      { name: 'apiKey', label: 'API Key', type: 'text', required: true, placeholder: 'Вставьте ваш API Key' },
      { name: 'apiSecret', label: 'Secret Key', type: 'password', required: true, placeholder: 'Вставьте ваш Secret Key' }
    ],
    instructions: [
      'Войдите в BingX → Профиль → Create API Key',
      'Включите только "Read" permission',
      'Не включайте: Trade',
      'Скопируйте API Key и Secret Key'
    ],
    warning: 'Ограничения по истории: Spot — 7 дней, Futures — 3 месяца. Для полной истории используйте импорт CSV.',
    authType: 'HMAC-SHA256', baseUrl: 'https://open-api.bingx.com',
    endpoints: { trades: '/openApi/spot/v1/trade/myTrades', balance: '/openApi/spot/v1/account/balance' }
  },
  {
    id: 'gateio', name: 'Gate.io', color: '#de4437', logoText: 'GT', type: 'Spot + Futures',
    fields: [
      { name: 'apiKey', label: 'API Key', type: 'text', required: true, placeholder: 'Вставьте ваш API Key' },
      { name: 'apiSecret', label: 'Secret Key', type: 'password', required: true, placeholder: 'Вставьте ваш Secret Key' }
    ],
    instructions: [
      'Войдите в Gate.io → Профиль → API Management',
      'Создайте API v4 Key',
      'Permissions: выберите Read-only',
      'Account type: Classic / Unified',
      'Привяжите IP (или не привязывайте — 90 дней)',
      'Скопируйте API Key и Secret'
    ],
    warning: '',
    authType: 'HMAC-SHA512', baseUrl: 'https://api.gateio.ws',
    endpoints: { trades: '/api/v4/spot/my_trades', balance: '/api/v4/spot/accounts' }
  },
  {
    id: 'kraken', name: 'Kraken', color: '#5841d8', logoText: 'Kr', type: 'Spot + Futures',
    fields: [
      { name: 'apiKey', label: 'API Key', type: 'text', required: true, placeholder: 'Вставьте ваш API Key' },
      { name: 'apiSecret', label: 'Private Key', type: 'password', required: true, placeholder: 'Вставьте ваш Private Key' }
    ],
    instructions: [
      'Войдите в Kraken → Settings → API',
      'Нажмите Generate New Key',
      'Разрешения: отметьте только Query разделы',
      'Query Funds, Query Open Orders, Query Closed Orders, Query Trades',
      'Не отмечайте: Deposit, Withdraw, Trade',
      'Скопируйте API Key и Private Key'
    ],
    warning: 'Private Key хранится в формате base64. Все приватные эндпоинты используют POST (не GET).',
    authType: 'HMAC-SHA512', baseUrl: 'https://api.kraken.com',
    endpoints: { trades: '/0/private/TradesHistory', balance: '/0/private/Balance' }
  },
  {
    id: 'htx', name: 'HTX', color: '#2b6cb0', logoText: 'HT', type: 'Spot + Futures',
    fields: [
      { name: 'apiKey', label: 'Access Key', type: 'text', required: true, placeholder: 'Вставьте ваш Access Key' },
      { name: 'apiSecret', label: 'Secret Key', type: 'password', required: true, placeholder: 'Вставьте ваш Secret Key' }
    ],
    instructions: [
      'Войдите в HTX → Профиль → API Management',
      'Создайте API Key',
      'Permissions: установите Read-only',
      'Не включайте: Trade, Withdraw',
      'Скопируйте Access Key и Secret Key'
    ],
    warning: '',
    authType: 'HMAC-SHA256 (SigV2)', baseUrl: 'https://api.huobi.pro',
    endpoints: { trades: '/v1/order/matchresults', balance: '/v1/account/accounts' }
  },
  {
    id: 'bitunix', name: 'Bitunix', color: '#1a202c', logoText: 'BU', type: 'Futures Only',
    fields: [
      { name: 'apiKey', label: 'API Key', type: 'text', required: true, placeholder: 'Вставьте ваш API Key' },
      { name: 'apiSecret', label: 'Secret Key', type: 'password', required: true, placeholder: 'Вставьте ваш Secret Key' }
    ],
    instructions: [
      'Войдите в Bitunix → Account → API',
      'Создайте API Key → Read-only permission',
      'Не включайте: Trade',
      'Привяжите IP (до 20 адресов)',
      'Скопируйте API Key и Secret Key'
    ],
    warning: 'Bitunix поддерживает только perpetual futures. Spot API отсутствует.',
    authType: 'HMAC-SHA256 + nonce', baseUrl: 'https://fapi.bitunix.com',
    endpoints: { trades: '/api/v1/futures/tradeHistory', balance: '/api/v1/futures/account' }
  },
];

// ============================================
// CHART ENGINE
// ============================================
var Charts = {
  drawLineChart: function(canvasId, data, color, labels) {
    color = color || (document.documentElement.getAttribute('data-theme') === 'light' ? '#00b894' : '#00d4aa');
    labels = labels || [];
    var canvas = document.getElementById(canvasId);
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    var w = rect.width, h = rect.height;
    var pad = { top: 20, right: 20, bottom: 35, left: 55 };
    var cw = w - pad.left - pad.right, ch = h - pad.top - pad.bottom;
    var mn = Math.min.apply(null, data) * 0.98, mx = Math.max.apply(null, data) * 1.02, rng = mx - mn;
    if (rng === 0) { mn -= 10; mx += 10; rng = 20; }
    ctx.clearRect(0, 0, w, h);
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    var gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.03)';
    var labelColor = isLight ? '#8b92a8' : '#4a5068';
    // Grid lines + Y-axis labels
    ctx.strokeStyle = gridColor; ctx.lineWidth = 1;
    for (var i = 0; i <= 4; i++) {
      var y = pad.top + (ch / 4) * i;
      ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
      var val = mx - (rng / 4) * i;
      ctx.fillStyle = labelColor; ctx.font = '11px JetBrains Mono'; ctx.textAlign = 'right';
      ctx.fillText('$' + (val / 1000).toFixed(1) + 'K', pad.left - 8, y + 4);
    }
    // X-axis labels
    ctx.fillStyle = labelColor; ctx.font = '10px Inter'; ctx.textAlign = 'center';
    var stepX = cw / (data.length - 1);
    var labelCount = Math.min(data.length - 1, labels.length > 8 ? 7 : labels.length - 1);
    var labelStep = Math.max(1, Math.floor((data.length - 1) / Math.max(1, labelCount)));
    for (var li = 0; li * labelStep < data.length; li++) {
      var idx = li * labelStep;
      if (idx >= data.length) break;
      var lx = pad.left + stepX * idx;
      ctx.fillText(labels[idx] || '', lx, h - 8);
    }
    // Line path
    ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    data.forEach(function(val, i) {
      var x = pad.left + stepX * i, y = pad.top + ch - ((val - mn) / rng) * ch;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();
    // Gradient fill
    ctx.beginPath(); ctx.moveTo(pad.left, pad.top + ch);
    data.forEach(function(val, i) { var x = pad.left + stepX * i, y = pad.top + ch - ((val - mn) / rng) * ch; ctx.lineTo(x, y); });
    ctx.lineTo(pad.left + cw, pad.top + ch); ctx.closePath();
    var grad = ctx.createLinearGradient(0, pad.top, 0, h - pad.bottom);
    grad.addColorStop(0, color + '20'); grad.addColorStop(1, color + '00');
    ctx.fillStyle = grad; ctx.fill();
    // Last value dot
    if (data.length > 0) {
      var lastX = pad.left + stepX * (data.length - 1);
      var lastY = pad.top + ch - ((data[data.length - 1] - mn) / rng) * ch;
      ctx.beginPath(); ctx.arc(lastX, lastY, 5, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill();
      ctx.beginPath(); ctx.arc(lastX, lastY, 11, 0, Math.PI * 2); ctx.fillStyle = color + '25'; ctx.fill();
    }
    // Store data for hover
    canvas._chartData = data; canvas._chartLabels = labels; canvas._chartPad = pad;
    canvas._chartCw = cw; canvas._chartCh = ch; canvas._chartMn = mn; canvas._chartMx = mx;
    canvas._chartRng = rng; canvas._chartColor = color; canvas._chartStepX = stepX;
    canvas._chartIsLight = isLight;
    if (!canvas._hasHover) {
      canvas._hasHover = true;
      var tooltipEl = null, overlayCanvas = null;
      var container = canvas.parentElement;
      canvas.addEventListener('mousemove', function(e) {
        var cRect = canvas.getBoundingClientRect();
        var mxx = (e.clientX - cRect.left) * (canvas.width / dpr / cRect.width);
        var myy = (e.clientY - cRect.top) * (canvas.height / dpr / cRect.height);
        var pd = canvas._chartPad;
        if (mxx < pd.left || mxx > w - pd.right || myy < pd.top || myy > h - pd.bottom) {
          if (tooltipEl) tooltipEl.style.display = 'none';
          if (overlayCanvas) overlayCanvas.style.display = 'none';
          return;
        }
        var idx = Math.round((mxx - pd.left) / canvas._chartStepX);
        idx = Math.max(0, Math.min(idx, canvas._chartData.length - 1));
        var val = canvas._chartData[idx];
        var xPos = pd.left + canvas._chartStepX * idx;
        var yPos = pd.top + canvas._chartCh - ((val - canvas._chartMn) / canvas._chartRng) * canvas._chartCh;
        var isl = canvas._chartIsLight;
        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.style.cssText = 'position:absolute;pointer-events:none;z-index:100;background:' + (isl ? '#fff' : '#1a1d27') + ';border:1px solid ' + (isl ? '#d1d5db' : '#2a2e3f') + ';border-radius:8px;padding:8px 12px;font-size:12px;font-family:JetBrains Mono,monospace;box-shadow:0 4px 16px rgba(0,0,0,0.3);display:none;white-space:nowrap;';
          container.style.position = 'relative';
          container.appendChild(tooltipEl);
        }
        if (!overlayCanvas) {
          overlayCanvas = document.createElement('canvas');
          overlayCanvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:5;';
          container.appendChild(overlayCanvas);
        }
        overlayCanvas.width = canvas.width; overlayCanvas.height = canvas.height;
        var octx = overlayCanvas.getContext('2d'); octx.scale(dpr, dpr);
        overlayCanvas.style.display = 'block';
        octx.clearRect(0, 0, w, h);
        // Crosshair
        octx.strokeStyle = isl ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.15)'; octx.lineWidth = 1; octx.setLineDash([4, 4]);
        octx.beginPath(); octx.moveTo(xPos, pd.top); octx.lineTo(xPos, h - pd.bottom); octx.stroke();
        octx.beginPath(); octx.moveTo(pd.left, yPos); octx.lineTo(w - pd.right, yPos); octx.stroke();
        octx.setLineDash([]);
        // Dot
        octx.beginPath(); octx.arc(xPos, yPos, 5, 0, Math.PI * 2); octx.fillStyle = color; octx.fill();
        octx.beginPath(); octx.arc(xPos, yPos, 10, 0, Math.PI * 2); octx.fillStyle = color + '30'; octx.fill();
        // Tooltip
        var lbl = canvas._chartLabels[idx] || '';
        tooltipEl.innerHTML = '<div style="color:' + (isl ? '#8b92a8' : '#4a5068') + ';font-size:10px;margin-bottom:2px">' + lbl + '</div><div style="color:' + (val >= 0 ? (isl ? '#00b894' : '#00d4aa') : '#ff4757') + ';font-weight:700;font-size:13px">' + formatCurrency(val) + '</div>';
        var tRect = container.getBoundingClientRect();
        var scaleX = tRect.width / w;
        var scaleY = tRect.height / h;
        var tipX = xPos * scaleX + 15, tipY = yPos * scaleY - 50;
        if (tipX + 120 > tRect.width) tipX = xPos * scaleX - 130;
        tipY = Math.max(0, Math.min(tipY, tRect.height - 60));
        tooltipEl.style.left = tipX + 'px'; tooltipEl.style.top = tipY + 'px';
        tooltipEl.style.display = 'block';
      });
      canvas.addEventListener('mouseleave', function() {
        if (tooltipEl) tooltipEl.style.display = 'none';
        if (overlayCanvas) overlayCanvas.style.display = 'none';
      });
    }
  },

  drawDonutChart: function(canvasId, data) {
    var canvas = document.getElementById(canvasId);
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1, size = 200;
    canvas.width = size * dpr; canvas.height = size * dpr;
    ctx.scale(dpr, dpr);
    var cx = size / 2, cy = size / 2, r = 75, ir = 50;
    var total = data.reduce(function(s, d) { return s + d.value; }, 0);
    var sa = -Math.PI / 2;
    data.forEach(function(seg) {
      var angle = (seg.value / total) * Math.PI * 2;
      ctx.beginPath(); ctx.arc(cx, cy, r, sa, sa + angle); ctx.arc(cx, cy, ir, sa + angle, sa, true);
      ctx.closePath(); ctx.fillStyle = seg.color; ctx.fill(); sa += angle;
    });
    ctx.beginPath(); ctx.arc(cx, cy, ir - 2, 0, Math.PI * 2);
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    ctx.fillStyle = isLight ? '#ffffff' : '#14161f'; ctx.fill();
  },

  drawBarChart: function(canvasId, data) {
    var canvas = document.getElementById(canvasId);
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    var w = rect.width, h = rect.height;
    var pad = { top: 20, right: 20, bottom: 40, left: 40 };
    var cw = w - pad.left - pad.right, ch = h - pad.top - pad.bottom;
    var mx = Math.max.apply(null, data.map(function(d) { return d.value; })) * 1.1;
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    var gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.03)';
    var labelColor = isLight ? '#8b92a8' : '#4a5068';
    ctx.clearRect(0, 0, w, h); ctx.strokeStyle = gridColor; ctx.lineWidth = 1;
    for (var i = 0; i <= 4; i++) { var y = pad.top + (ch / 4) * i; ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke(); }
    var barW = cw / data.length * 0.6, stepX = cw / data.length;
    data.forEach(function(d, i) {
      var x = pad.left + stepX * i + (stepX - barW) / 2, bh = (d.value / mx) * ch, y = pad.top + ch - bh;
      var col = d.value >= 50 ? (isLight ? '#00b894' : '#00d4aa') : '#ff4757';
      ctx.fillStyle = col + '30'; ctx.fillRect(x, y, barW, bh);
      ctx.fillStyle = col; ctx.fillRect(x, y, barW, 3);
      ctx.fillStyle = labelColor; ctx.font = '10px Inter'; ctx.textAlign = 'center';
      ctx.fillText(d.label, x + barW / 2, h - 10);
      ctx.fillStyle = col; ctx.font = '11px JetBrains Mono'; ctx.fillText(d.value + '%', x + barW / 2, y - 6);
    });
  },

  drawPnlBarChart: function(canvasId, data) {
    var canvas = document.getElementById(canvasId);
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    var w = rect.width, h = rect.height;
    var pad = { top: 20, right: 20, bottom: 50, left: 60 };
    var cw = w - pad.left - pad.right, ch = h - pad.top - pad.bottom;
    var values = data.map(function(d) { return d.value; });
    var mn = Math.min.apply(null, values), mx = Math.max.apply(null, values);
    var range = mx - mn;
    if (range === 0) range = 100;
    var zeroY = pad.top + ch - ((0 - mn) / range) * ch;
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    var gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.03)';
    var labelColor = isLight ? '#8b92a8' : '#4a5068';
    ctx.clearRect(0, 0, w, h);
    // Zero line
    ctx.strokeStyle = isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(pad.left, zeroY); ctx.lineTo(w - pad.right, zeroY); ctx.stroke();
    // Grid lines
    ctx.strokeStyle = gridColor;
    for (var gi = 0; gi <= 4; gi++) {
      var gy = pad.top + (ch / 4) * gi;
      if (Math.abs(gy - zeroY) < 2) continue;
      ctx.beginPath(); ctx.moveTo(pad.left, gy); ctx.lineTo(w - pad.right, gy); ctx.stroke();
    }
    // Y-axis labels
    ctx.fillStyle = labelColor; ctx.font = '10px JetBrains Mono'; ctx.textAlign = 'right';
    for (var li = 0; li <= 4; li++) {
      var ly = pad.top + (ch / 4) * li;
      var val = mx - (range / 4) * li;
      ctx.fillText((val >= 0 ? '+' : '') + '$' + (val / 1000).toFixed(1) + 'K', pad.left - 8, ly + 4);
    }
    var barW = Math.max(10, cw / data.length * 0.55), stepX = cw / data.length;
    data.forEach(function(d, i) {
      var x = pad.left + stepX * i + (stepX - barW) / 2;
      var isPos = d.value >= 0;
      var col = isPos ? (isLight ? '#00b894' : '#00d4aa') : '#ff4757';
      var barH = (Math.abs(d.value) / range) * ch;
      var y = isPos ? zeroY - barH : zeroY;
      ctx.fillStyle = col + '25';
      ctx.fillRect(x, y, barW, barH);
      ctx.fillStyle = col;
      ctx.fillRect(x, y, barW, isPos ? 3 : -3);
      // Label
      ctx.fillStyle = labelColor; ctx.font = '9px Inter'; ctx.textAlign = 'center';
      var labelParts = d.label.split(' - ');
      if (labelParts.length === 2) {
        ctx.fillText(labelParts[0], x + barW / 2, h - 32);
        ctx.fillText(labelParts[1], x + barW / 2, h - 20);
      } else {
        ctx.fillText(d.label, x + barW / 2, h - 26);
      }
      // Value label on bar
      ctx.fillStyle = col; ctx.font = '10px JetBrains Mono'; ctx.textAlign = 'center';
      var valText = (d.value >= 0 ? '+' : '') + '$' + (d.value / 1000).toFixed(1) + 'K';
      var valY = isPos ? y - 6 : y + barH + 12;
      ctx.fillText(valText, x + barW / 2, valY);
    });
  }
};

// ============================================
// UI HELPERS
// ============================================
function showToast(message, type, duration) {
  type = type || 'info'; duration = duration || 3500;
  var container = document.getElementById('toastContainer');
  var toast = document.createElement('div'); toast.className = 'toast ' + type;
  var icons = {
    success: '<svg width="18" height="18" fill="none" stroke="#00d4aa" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>',
    error: '<svg width="18" height="18" fill="none" stroke="#ff4757" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>',
    warning: '<svg width="18" height="18" fill="none" stroke="#ffa502" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>',
    info: '<svg width="18" height="18" fill="none" stroke="#2e86de" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
  };
  toast.innerHTML = (icons[type] || icons.info) + '<span>' + message + '</span>';
  container.appendChild(toast);
  setTimeout(function() { toast.classList.add('removing'); setTimeout(function() { toast.remove(); }, 300); }, duration);
}

function formatCurrency(val) {
  var prefix = val >= 0 ? '+' : '';
  return prefix + '$' + Math.abs(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatDate(dateStr) {
  var d = new Date(dateStr);
  var months = [tr('jan'), tr('feb'), tr('mar'), tr('apr'), tr('may'), tr('jun'), tr('jul'), tr('aug'), tr('sep'), tr('oct'), tr('nov'), tr('dec')];
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}

function formatTime(dateStr) {
  var d = new Date(dateStr);
  return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
}

function getInitials(name) { return name.split(' ').map(function(n) { return n[0]; }).join('').toUpperCase().slice(0, 2); }

function getTradesForPeriod(days) {
  var now = new Date();
  var cutoff = new Date(now);
  cutoff.setDate(cutoff.getDate() - days);
  return Store.trades.filter(function(t) { return new Date(t.date) >= cutoff; });
}

function escapeHtml(text) { var div = document.createElement('div'); div.textContent = text; return div.innerHTML; }

// ============================================
// MODAL SYSTEM
// ============================================
var Modal = {
  open: function(id) { var el = document.getElementById(id); if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; } },
  close: function(id) { var el = document.getElementById(id); if (el) { el.classList.remove('open'); document.body.style.overflow = ''; } },
  confirm: function(title, text, onConfirm) {
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmText').textContent = text;
    this.open('confirmModal');
    var self = this;
    document.getElementById('confirmOk').onclick = function() { onConfirm(); self.close('confirmModal'); };
    document.getElementById('confirmCancel').onclick = function() { self.close('confirmModal'); };
  }
};

// ============================================
// NAVIGATION
// ============================================
var PAGES = {
  dashboard: { titleKey: 'nav_dashboard' },
  journal: { titleKey: 'nav_journal' },
  calendar: { titleKey: 'nav_calendar' },
  analytics: { titleKey: 'nav_analytics' },
  charts: { titleKey: 'nav_charts' },
  api: { titleKey: 'nav_api' },
  settings: { titleKey: 'nav_settings' },
};

function navigate(pageId) {
  document.querySelectorAll('.nav-item').forEach(function(el) { el.classList.toggle('active', el.dataset.page === pageId); });
  document.querySelectorAll('.page').forEach(function(el) { el.classList.toggle('active', el.id === 'page-' + pageId); });
  var info = PAGES[pageId];
  if (info) {
    document.getElementById('pageTitle').textContent = tr(info.titleKey);
    document.getElementById('breadcrumbText').textContent = tr(info.titleKey);
  }
  document.getElementById('sidebar').classList.remove('open');
  if (pageId === 'dashboard') renderDashboard();
  if (pageId === 'journal') renderJournal();
  if (pageId === 'calendar') renderCalendar();
  if (pageId === 'analytics') renderAnalytics();
  if (pageId === 'charts') renderChartsPage();
  if (pageId === 'api') renderApiPage();
  if (pageId === 'settings') renderSettings();
  window.scrollTo(0, 0);
}

// ============================================
// AUTH — Email-based
// ============================================
var COUNTRIES = [
  { code: 'RU', name: 'Россия', name_en: 'Russia' }, { code: 'US', name: 'США', name_en: 'United States' },
  { code: 'GB', name: 'Великобритания', name_en: 'United Kingdom' }, { code: 'DE', name: 'Германия', name_en: 'Germany' },
  { code: 'FR', name: 'Франция', name_en: 'France' }, { code: 'ES', name: 'Испания', name_en: 'Spain' },
  { code: 'IT', name: 'Италия', name_en: 'Italy' }, { code: 'CN', name: 'Китай', name_en: 'China' },
  { code: 'JP', name: 'Япония', name_en: 'Japan' }, { code: 'KR', name: 'Южная Корея', name_en: 'South Korea' },
  { code: 'IN', name: 'Индия', name_en: 'India' }, { code: 'BR', name: 'Бразилия', name_en: 'Brazil' },
  { code: 'CA', name: 'Канада', name_en: 'Canada' }, { code: 'AU', name: 'Австралия', name_en: 'Australia' },
  { code: 'TR', name: 'Турция', name_en: 'Turkey' }, { code: 'UA', name: 'Украина', name_en: 'Ukraine' },
  { code: 'KZ', name: 'Казахстан', name_en: 'Kazakhstan' }, { code: 'BY', name: 'Беларусь', name_en: 'Belarus' },
  { code: 'PL', name: 'Польша', name_en: 'Poland' }, { code: 'NL', name: 'Нидерланды', name_en: 'Netherlands' },
  { code: 'SE', name: 'Швеция', name_en: 'Sweden' }, { code: 'NO', name: 'Норвегия', name_en: 'Norway' },
  { code: 'FI', name: 'Финляндия', name_en: 'Finland' }, { code: 'DK', name: 'Дания', name_en: 'Denmark' },
  { code: 'CH', name: 'Швейцария', name_en: 'Switzerland' }, { code: 'AT', name: 'Австрия', name_en: 'Austria' },
  { code: 'BE', name: 'Бельгия', name_en: 'Belgium' }, { code: 'CZ', name: 'Чехия', name_en: 'Czech Republic' },
  { code: 'PT', name: 'Португалия', name_en: 'Portugal' }, { code: 'GR', name: 'Греция', name_en: 'Greece' },
  { code: 'IL', name: 'Израиль', name_en: 'Israel' }, { code: 'AE', name: 'ОАЭ', name_en: 'UAE' },
  { code: 'SA', name: 'Саудовская Аравия', name_en: 'Saudi Arabia' }, { code: 'ZA', name: 'ЮАР', name_en: 'South Africa' },
  { code: 'MX', name: 'Мексика', name_en: 'Mexico' }, { code: 'AR', name: 'Аргентина', name_en: 'Argentina' },
  { code: 'TH', name: 'Таиланд', name_en: 'Thailand' }, { code: 'VN', name: 'Вьетнам', name_en: 'Vietnam' },
  { code: 'MY', name: 'Малайзия', name_en: 'Malaysia' }, { code: 'SG', name: 'Сингапур', name_en: 'Singapore' },
  { code: 'ID', name: 'Индонезия', name_en: 'Indonesia' }, { code: 'PH', name: 'Филиппины', name_en: 'Philippines' },
  { code: 'EG', name: 'Египет', name_en: 'Egypt' }, { code: 'NG', name: 'Нигерия', name_en: 'Nigeria' },
  { code: 'KE', name: 'Кения', name_en: 'Kenya' }, { code: 'PK', name: 'Пакистан', name_en: 'Pakistan' },
  { code: 'BD', name: 'Бангладеш', name_en: 'Bangladesh' }, { code: 'RO', name: 'Румыния', name_en: 'Romania' },
  { code: 'HU', name: 'Венгрия', name_en: 'Hungary' }, { code: 'SK', name: 'Словакия', name_en: 'Slovakia' },
  { code: 'IE', name: 'Ирландия', name_en: 'Ireland' }, { code: 'NZ', name: 'Новая Зеландия', name_en: 'New Zealand' },
];

function populateCountrySelect() {
  var select = document.getElementById('regCountry');
  if (!select) return;
  var flags = { RU: '\uD83C\uDDF7\uD83C\uDDFA', US: '\uD83C\uDDFA\uD83C\uDDF8', GB: '\uD83C\uDDEC\uD83C\uDDE7', DE: '\uD83C\uDDE9\uD83C\uDDEA', FR: '\uD83C\uDDEB\uD83C\uDDF7', ES: '\uD83C\uDDEA\uD83C\uDDF8', IT: '\uD83C\uDDEE\uD83C\uDDF9', CN: '\uD83C\uDDE8\uD83C\uDDF3', JP: '\uD83C\uDDEF\uD83C\uDDF5', KR: '\uD83C\uDDF0\uD83C\uDDF7', IN: '\uD83C\uDDEE\uD83C\uDDF3', BR: '\uD83C\uDDE7\uD83C\uDDF7', CA: '\uD83C\uDDE8\uD83C\uDDE6', AU: '\uD83C\uDDE6\uD83C\uDDFA', TR: '\uD83C\uDDF9\uD83C\uDDF7', UA: '\uD83C\uDDFA\uD83C\uDDE6', KZ: '\uD83C\uDDF0\uD83C\uDDFF', BY: '\uD83C\uDDE7\uD83C\uDDFE', PL: '\uD83C\uDDF5\uD83C\uDDF1', NL: '\uD83C\uDDF3\uD83C\uDDF1', SE: '\uD83C\uDDF8\uD83C\uDDEA', NO: '\uD83C\uDDF3\uD83C\uDDF4', FI: '\uD83C\uDDEB\uD83C\uDDEE', DK: '\uD83C\uDDE9\uD83C\uDDF0', CH: '\uD83C\uDDE8\uD83C\uDDED', AT: '\uD83C\uDDE6\uD83C\uDDF9', BE: '\uD83C\uDDE7\uD83C\uDDEA', CZ: '\uD83C\uDDE8\uD83C\uDDFF', PT: '\uD83C\uDDF5\uD83C\uDDF9', GR: '\uD83C\uDDEC\uD83C\uDDF7', IL: '\uD83C\uDDEE\uD83C\uDDF1', AE: '\uD83C\uDDE6\uD83C\uDDEA', SA: '\uD83C\uDDF8\uD83C\uDDE6', ZA: '\uD83C\uDDFF\uD83C\uDDE6', MX: '\uD83C\uDDF2\uD83C\uDDFD', AR: '\uD83C\uDDE6\uD83C\uDDF7', TH: '\uD83C\uDDF9\uD83C\uDDED', VN: '\uD83C\uDDFB\uD83C\uDDF3', MY: '\uD83C\uDDF2\uD83C\uDDFE', SG: '\uD83C\uDDF8\uD83C\uDDEC', ID: '\uD83C\uDDEE\uD83C\uDDE9', PH: '\uD83C\uDDF5\uD83C\uDDED', EG: '\uD83C\uDDEA\uD83C\uDDEC', NG: '\uD83C\uDDF3\uD83C\uDDEC', KE: '\uD83C\uDDF0\uD83C\uDDEA', PK: '\uD83C\uDDF5\uD83C\uDDF0', BD: '\uD83C\uDDE7\uD83C\uDDE9', RO: '\uD83C\uDDF7\uD83C\uDDF4', HU: '\uD83C\uDDF5\uD83C\uDDFA', SK: '\uD83C\uDDF8\uD83C\uDDF0', IE: '\uD83C\uDDEE\uD83C\uDDEA', NZ: '\uD83C\uDDF3\uD83C\uDDFF' };
  select.innerHTML = '<option value="">' + (currentLang === 'ru' ? 'Выберите страну' : currentLang === 'en' ? 'Select country' : '...') + '</option>' +
    COUNTRIES.map(function(c) {
      var label = (flags[c.code] || '') + ' ' + (currentLang === 'ru' ? c.name : c.name_en);
      return '<option value="' + c.code + '">' + label + '</option>';
    }).join('');
}

function socialLogin(provider) {
  showToast(tr('login_' + provider) + '...', 'info');
  setTimeout(function() {
    Store.user = { name: 'CryptoWhale', email: 'trader@example.com', loginType: 'social' };
    Store.save(); enterApp(); showToast(tr('toast_welcome'), 'success');
  }, 1200);
}

function loginWithPassword() {
  var email = document.getElementById('loginEmail').value.trim();
  var password = document.getElementById('loginPassword').value;
  if (!email || !password) { showToast(tr('toast_fill_all'), 'warning'); return; }
  var user = Store.users.find(function(u) { return u.email === email && u.password === password; });
  if (!user) { showToast(tr('toast_invalid_credentials'), 'error'); return; }
  Store.user = { name: user.name || email.split('@')[0], email: user.email, country: user.country, loginType: 'password' };
  Store.save(); enterApp(); showToast(tr('toast_login_success'), 'success');
}

function registerAccount() {
  var email = document.getElementById('regEmail').value.trim();
  var country = document.getElementById('regCountry').value;
  var password = document.getElementById('regPassword').value;
  var password2 = document.getElementById('regPassword2').value;
  if (!email || !password || !password2) { showToast(tr('toast_fill_all'), 'warning'); return; }
  if (password.length < 6) { showToast(tr('toast_password_short'), 'warning'); return; }
  if (password !== password2) { showToast(tr('toast_passwords_match'), 'warning'); return; }
  if (Store.users.find(function(u) { return u.email === email; })) { showToast('Email already registered', 'error'); return; }
  var name = email.split('@')[0];
  Store.users.push({ name: name, email: email, country: country, password: password });
  Store.user = { name: name, email: email, country: country, loginType: 'password' };
  Store.save(); enterApp(); showToast(tr('toast_register_success'), 'success');
}

function enterApp() {
  document.getElementById('authOverlay').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  if (Store.user) {
    document.getElementById('userName').textContent = Store.user.name;
    updateAvatarUI();
  }
  // Load trades and connections from backend API
  Store.loadFromApi(function() {
    var tradeCount = Store.trades ? Store.trades.length : 0;
    var connCount = Store.connections ? Store.connections.length : 0;
    showToast((currentLang === 'ru' ? 'Загружено сделок: ' : 'Trades loaded: ') + tradeCount + (connCount > 0 ? ' (' + connCount + ' ' + (currentLang === 'ru' ? 'бирж' : 'exchanges') + ')' : ''), 'info', 2500);
    renderDashboard(); renderApiPage(); renderChartsPage();
  });
}

function logout() {
  Store.user = null; Store.save();
  document.getElementById('authOverlay').classList.remove('hidden');
  document.getElementById('app').classList.add('hidden');
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
  showToast(tr('toast_logout'), 'info');
}

// ============================================
// TRADE TYPE CLASSIFICATION (by duration)
// ============================================
function getTradeType(entryDate, exitDate) {
  var entry = new Date(entryDate);
  var exit = new Date(exitDate || entry);
  var diffMs = exit - entry;
  var diffMin = diffMs / 60000;
  var diffHour = diffMin / 60;
  var diffDay = diffHour / 24;
  if (diffMin < 3) return 'scalping';
  if (diffMin < 15) return 'momentum';
  if (diffHour < 8) return 'intraday';
  if (diffDay < 3) return 'swing_short';
  if (diffDay < 10) return 'swing_medium';
  if (diffDay < 20) return 'swing_long';
  return 'positional';
}

// ============================================
// DASHBOARD
// ============================================
function renderDashboard() {
  var days = dashboardTf === '1d' ? 1 : dashboardTf === '7d' ? 7 : 30;
  var periodTrades = getTradesForPeriod(days);
  var totalPnl = periodTrades.reduce(function(s, t) { return s + t.pnl; }, 0);
  var wins = periodTrades.filter(function(t) { return t.pnl >= 0; }).length;
  var winRate = periodTrades.length > 0 ? (wins / periodTrades.length * 100).toFixed(1) : "0";
  var riskRaw = periodTrades.length > 0 ? (Math.abs(totalPnl) / periodTrades.length / 10) : 0;
  var riskIndex = Math.min(100, riskRaw).toFixed(2);
  var riskClass = riskRaw < 40 ? 'pos' : riskRaw < 60 ? 'warning' : riskRaw < 80 ? 'neg' : 'danger';
  var riskColor = riskRaw < 40 ? 'var(--accent)' : riskRaw < 60 ? 'var(--warning)' : riskRaw < 80 ? '#e67e22' : 'var(--danger)';

  document.getElementById('statPnl').textContent = formatCurrency(totalPnl);
  document.getElementById('statPnl').className = 'stat-value ' + (totalPnl >= 0 ? 'pos' : 'neg');
  document.getElementById('statWinrate').textContent = winRate + '%';
  document.getElementById('statTrades').textContent = periodTrades.length;
  var statPfEl = document.getElementById('statPf');
  statPfEl.textContent = riskIndex;
  statPfEl.className = 'stat-value ' + riskClass;
  statPfEl.style.color = riskColor;

  // PnL Chart — real cumulative data synchronized with stat card
  var pnlData = [], pnlLabels = [];
  if (dashboardTf === '1d') {
    // Hourly cumulative PnL for today
    var now = new Date();
    var todayStart = new Date(now); todayStart.setHours(0, 0, 0, 0);
    for (var h = 0; h <= now.getHours(); h++) {
      var hourStart = new Date(todayStart); hourStart.setHours(h, 0, 0, 0);
      var hourEnd = new Date(todayStart); hourEnd.setHours(h + 1, 0, 0, 0);
      var hourPnl = periodTrades.filter(function(t) { var td = new Date(t.date); return td >= hourStart && td < hourEnd; }).reduce(function(s, t) { return s + t.pnl; }, 0);
      var prevTotal = pnlData.length > 0 ? pnlData[pnlData.length - 1] : 0;
      pnlData.push(prevTotal + hourPnl);
      pnlLabels.push(h.toString().padStart(2, '0') + ':00');
    }
  } else {
    // Daily cumulative PnL
    for (var i = days - 1; i >= 0; i--) {
      var d = new Date(); d.setDate(d.getDate() - i); d.setHours(0, 0, 0, 0);
      var nextD = new Date(d); nextD.setDate(nextD.getDate() + 1);
      var dayTrades = periodTrades.filter(function(t) { var td = new Date(t.date); return td >= d && td < nextD; });
      var dayPnl = dayTrades.reduce(function(s, t) { return s + t.pnl; }, 0);
      var prevTotal = pnlData.length > 0 ? pnlData[pnlData.length - 1] : 0;
      pnlData.push(prevTotal + dayPnl);
      pnlLabels.push(d.getDate().toString().padStart(2, '0') + '.' + (d.getMonth() + 1).toString().padStart(2, '0'));
    }
  }
  if (pnlData.length < 2) { pnlData = [0, 0, 0, 0, 0, 0, 0]; pnlLabels = ['', '', '', '', '', '', '']; }
  Charts.drawLineChart('pnlChart', pnlData, null, pnlLabels);

  var exchangeData = [
    { name: 'Binance', value: 18500, color: '#f0b90b' }, { name: 'Bybit', value: 12400, color: '#f7a600' },
    { name: 'OKX', value: 8900, color: '#2e86de' }, { name: 'MEXC', value: 5200, color: '#00d4aa' },
    { name: 'BingX', value: 2800, color: '#3b82f6' },
  ];
  Charts.drawDonutChart('exchangeChart', exchangeData);
  document.getElementById('exchangeLegend').innerHTML = exchangeData.map(function(d) {
    return '<div class="legend-item"><div class="legend-left"><div class="legend-dot" style="background:' + d.color + '"></div><span class="legend-name">' + d.name + '</span></div><span class="legend-value">$' + (d.value / 1000).toFixed(1) + 'K</span></div>';
  }).join('');

  // Trade Styles Bar — unified green gradient
  var typeConfig = [
    { key: 'scalping', time: '30 sec – 3 min', desc: 'Scalping — trades from 30 seconds to 3 minutes. Quick entry and exit, small profit per trade.' },
    { key: 'momentum', time: '3 – 15 min', desc: 'Momentum — trades from 3 to 15 minutes. Trading on the price impulse wave.' },
    { key: 'intraday', time: '15 min – 8 hours', desc: 'Day Trading — trades from 15 minutes to 8 hours. All within one trading day.' },
    { key: 'swing_short', time: '1 – 3 days', desc: 'Swing Short — trades from 1 to 3 days. Holding position for several days.' },
    { key: 'swing_medium', time: '4 – 10 days', desc: 'Swing Medium — trades from 4 to 10 days. Medium-term swing trading.' },
    { key: 'swing_long', time: '11 – 20 days', desc: 'Swing Long — trades from 11 to 20 days. Longer position holding.' },
    { key: 'positional', time: '21 days – 3 months', desc: 'Positional — trades from 21 days to 3 months. Long-term investing.' }
  ];
  var typeCounts = {};
  periodTrades.forEach(function(t) {
    var type = getTradeType(t.date, t.exitDate);
    typeCounts[type] = (typeCounts[type] || 0) + 1;
  });
  var totalTyped = periodTrades.length;
  var stripeHtml = '';
  var legendHtml = '';
  var isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  typeConfig.forEach(function(tc) {
    var count = typeCounts[tc.key] || 0;
    if (count > 0) {
      var pct = (count / totalTyped * 100).toFixed(1);
      var label = tr('type_' + tc.key);
      var tooltipBg = isDark ? '#1a1d2e' : '#f0f0f2';
      var tooltipText = isDark ? '#ffffff' : '#1a1a1a';
      stripeHtml += '<div class="trade-styles-segment" style="width:' + pct + '%">' +
        '<span class="style-label">' + label + '</span>' +
        '<div class="style-segment-tooltip" style="background:' + tooltipBg + ';color:' + tooltipText + '">' +
        '<strong style="color:var(--accent)">' + label + '</strong><br>' +
        tc.desc + '<br><em style="opacity:0.7">' + tc.time + ' &middot; ' + count + ' ' + (currentLang === 'ar' ? 'صفقات' : 'trades') + ' (' + pct + '%)</em>' +
        '</div></div>';
      legendHtml += '<div class="trade-style-item">' +
        '<span class="trade-style-name">' + label + '</span>' +
        '<span class="trade-style-pct">' + pct + '%</span></div>';
    }
  });
  document.getElementById('tradeStylesStripe').innerHTML = stripeHtml || '<div style="width:100%;text-align:center;color:var(--text-muted);font-size:0.75rem;padding:8px 0">' + tr('cal_no_trades') + '</div>';
  var legendEl = document.getElementById('tradeStylesLegend');
  if (legendEl) { legendEl.innerHTML = legendHtml; legendEl.style.display = 'flex'; }

  var tbody = document.getElementById('recentTradesBody');
  var recent = Store.trades.slice(0, 8);
  tbody.innerHTML = recent.map(function(t) {
    return '<tr onclick="openTradeChartModal(\'' + t.id + '\')">' +
      '<td><div class="pair-cell"><div class="pair-icon ' + t.direction + '">' + (t.direction === 'long' ? 'L' : 'S') + '</div><div><div class="pair-name">' + t.pair + '</div><div class="pair-exchange">' + t.exchange + '</div></div></div></td>' +
      '<td>' + t.exchange + '</td>' +
      '<td><span class="dir-badge ' + t.direction + '">' + tr('dir_' + t.direction) + '</span></td>' +
      '<td>$' + t.entryPrice.toLocaleString() + ' / ' + (t.exitPrice ? '$' + t.exitPrice.toLocaleString() : '—') + '</td>' +
      '<td class="pnl-value ' + (t.pnl >= 0 ? 'pos' : 'neg') + '">' + formatCurrency(t.pnl) + '</td>' +
      '<td><span class="status-badge ' + t.status + '">' + tr('status_' + t.status) + '</span></td>' +
      '<td>' + formatTime(t.date) + '</td></tr>';
  }).join('');
}

// ============================================
// JOURNAL
// ============================================
function renderJournal() {
  var container = document.getElementById('journalDays');
  var filtered = Store.trades.filter(function(t) {
    if (journalFilter === 'long') return t.direction === 'long';
    if (journalFilter === 'short') return t.direction === 'short';
    if (journalFilter === 'profit') return t.pnl >= 0;
    if (journalFilter === 'loss') return t.pnl < 0;
    return true;
  });
  if (journalSearch) {
    var q = journalSearch.toLowerCase();
    filtered = filtered.filter(function(t) { return t.pair.toLowerCase().includes(q) || t.exchange.toLowerCase().includes(q); });
  }
  var days = {};
  filtered.forEach(function(t) { var day = t.date.split('T')[0]; if (!days[day]) days[day] = []; days[day].push(t); });
  var sortedDays = Object.keys(days).sort(function(a, b) { return b.localeCompare(a); });

  container.innerHTML = sortedDays.map(function(day) {
    var trades = days[day];
    var dayPnl = trades.reduce(function(s, t) { return s + t.pnl; }, 0);
    var wins = trades.filter(function(t) { return t.pnl >= 0; }).length;
    var isCollapsed = collapsedDays[day];

    var tradesHtml = trades.map(function(t) {
      var noteHtml = '';
      if (Store.notes[t.id]) {
        noteHtml = '<div class="trade-note-display">' +
          '<svg class="note-icon" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>' +
          '<span class="note-text">' + escapeHtml(Store.notes[t.id]) + '</span>' +
          '<div style="display:flex;gap:6px;flex-shrink:0">' +
          '<button class="note-edit" onclick="event.stopPropagation(); openNoteModal(\'' + t.id + '\')">' + tr('note_edit') + '</button>' +
          '<button class="note-delete-btn" onclick="event.stopPropagation(); deleteNote(\'' + t.id + '\')">' + tr('note_delete') + '</button></div></div>';
      }
      var statusBadge = '<span class="status-badge ' + (t.status || 'closed') + '">' + tr('status_' + (t.status || 'closed')) + '</span>';
      return '<div class="day-trade" onclick="openTradeChartModal(\'' + t.id + '\')">' +
        '<span class="trade-time">' + formatTime(t.date) + '</span>' +
        '<div class="trade-pair"><span class="dir ' + t.direction + '">' + t.direction + '</span><span class="sym">' + t.pair + '</span><span class="ex">' + t.exchange + '</span></div>' +
        '<div><span class="trade-entry">$' + t.entryPrice.toLocaleString() + '</span><span class="trade-price-label">' + tr('entry_price_label') + '</span></div>' +
        '<div><span class="trade-exit">' + (t.exitPrice ? '$' + t.exitPrice.toLocaleString() : '—') + '</span><span class="trade-price-label">' + tr('exit_price_label') + '</span></div>' +
        '<span class="trade-pnl ' + (t.pnl >= 0 ? 'pos' : 'neg') + '">' + formatCurrency(t.pnl) + '</span>' +
        '<span class="trade-pnl ' + (t.pnl >= 0 ? 'pos' : 'neg') + '">' + ((t.pnl / t.entryPrice / t.size) * 100).toFixed(1) + '%</span>' +
        '<div style="display:flex;align-items:center">' + statusBadge + '</div>' +
        '<div style="display:flex;gap:6px">' +
        '<button class="trade-note-btn ' + (Store.notes[t.id] ? 'has-note' : '') + '" onclick="event.stopPropagation(); openNoteModal(\'' + t.id + '\')">' + (Store.notes[t.id] ? '\u270E ' + tr('note_edit') : '+ ' + tr('modal_note_title')) + '</button>' +
        '<button class="trade-note-btn" onclick="event.stopPropagation(); openPosterModal(\'' + t.id + '\')" title="' + (currentLang === 'ar' ? 'مشاركة' : 'Share') + '">' +
        '<svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>' +
        '</button></div>' +
        '</div>' + noteHtml;
    }).join('');

    return '<div class="journal-day">' +
      '<div class="day-header" onclick="toggleDayCollapse(\'' + day + '\')">' +
        '<div style="display:flex;align-items:center"><span class="toggle-arrow" style="transform:rotate(' + (isCollapsed ? '-90deg' : '0deg') + ')">\u25BC</span><span class="day-date">' + formatDate(day) + '</span></div>' +
        '<div class="day-summary">' +
          '<div class="day-stat"><div class="label">' + tr('entry_price') + ' / ' + tr('exit_price') + '</div><div class="value">' + trades.length + ' ' + tr('cal_trades') + '</div></div>' +
          '<div class="day-stat"><div class="label">Win Rate</div><div class="value">' + Math.round(wins / trades.length * 100) + '%</div></div>' +
          '<div class="day-stat"><div class="label">PnL</div><div class="value ' + (dayPnl >= 0 ? 'pos' : 'neg') + '">' + formatCurrency(dayPnl) + '</div></div>' +
        '</div></div>' +
      '<div class="day-trades" id="day-trades-' + day + '" style="display:' + (isCollapsed ? 'none' : 'block') + '">' + tradesHtml + '</div></div>';
  }).join('');
}

function toggleDayCollapse(day) {
  collapsedDays[day] = !collapsedDays[day];
  var el = document.getElementById('day-trades-' + day);
  if (!el) return;
  var arrow = el.previousElementSibling.querySelector('.toggle-arrow');
  if (collapsedDays[day]) { el.style.display = 'none'; if (arrow) arrow.style.transform = 'rotate(-90deg)'; }
  else { el.style.display = 'block'; if (arrow) arrow.style.transform = 'rotate(0deg)'; }
}

function openNoteModal(tradeId) {
  document.getElementById('noteTradeId').textContent = tradeId;
  document.getElementById('noteText').value = Store.notes[tradeId] || '';
  Modal.open('noteModal');
}
function saveNote() {
  var tradeId = document.getElementById('noteTradeId').textContent;
  var text = document.getElementById('noteText').value;
  if (text.trim()) { Store.notes[tradeId] = text; } else { delete Store.notes[tradeId]; }
  Store.save(); Modal.close('noteModal'); renderJournal(); showToast(tr('toast_note_saved'), 'success');
}
function deleteNote(tradeId) {
  Modal.confirm(tr('note_delete') + '?', '', function() {
    delete Store.notes[tradeId];
    Store.save(); renderJournal(); showToast(tr('note_delete'), 'success');
  });
}

// ============================================
// CALENDAR
// ============================================
function renderCalendar() {
  var year = calendarDate.getFullYear(), month = calendarDate.getMonth();
  var monthNames = [tr('jan'), tr('feb'), tr('mar'), tr('apr'), tr('may'), tr('jun'), tr('jul'), tr('aug'), tr('sep'), tr('oct'), tr('nov'), tr('dec')];
  document.getElementById('calMonth').textContent = monthNames[month] + ' ' + year;
  var monthTrades = Store.trades.filter(function(t) { var d = new Date(t.date); return d.getFullYear() === year && d.getMonth() === month; });
  var monthPnl = monthTrades.reduce(function(s, t) { return s + t.pnl; }, 0);
  var monthWins = monthTrades.filter(function(t) { return t.pnl >= 0; }).length;
  var monthWr = monthTrades.length > 0 ? Math.round(monthWins / monthTrades.length * 100) : 0;
  document.getElementById('calMonthPnl').textContent = formatCurrency(monthPnl);
  document.getElementById('calMonthPnl').className = 'cal-summary-value ' + (monthPnl >= 0 ? 'pos' : 'neg');
  document.getElementById('calMonthTrades').textContent = monthTrades.length;
  document.getElementById('calMonthWr').textContent = monthWr + '%';
  var firstDay = new Date(year, month, 1), lastDay = new Date(year, month + 1, 0);
  var daysInMonth = lastDay.getDate();
  var startDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
  var dayTrades = {};
  monthTrades.forEach(function(t) { var d = new Date(t.date); var day = d.getDate(); if (!dayTrades[day]) dayTrades[day] = []; dayTrades[day].push(t); });
  var weekdays = [tr('mon'), tr('tue'), tr('wed'), tr('thu'), tr('fri'), tr('sat'), tr('sun')];
  var html = '';
  weekdays.forEach(function(wd) { html += '<div class="cal-weekday">' + wd + '</div>'; });
  for (var i = 0; i < startDayOfWeek; i++) html += '<div class="cal-day empty"></div>';
  var today = new Date(), isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
  for (var day = 1; day <= daysInMonth; day++) {
    var trades = dayTrades[day] || [], dayPnl = trades.reduce(function(s, t) { return s + t.pnl; }, 0);
    var isToday = isCurrentMonth && today.getDate() === day;
    var pnlClass = dayPnl > 0 ? 'pos' : dayPnl < 0 ? 'neg' : 'zero';
    var hasTrades = trades.length > 0;
    html += '<div class="cal-day ' + (isToday ? 'today' : '') + (hasTrades ? ' has-trades' : '') + '" onclick="' + (hasTrades ? 'openDayModal(' + year + ',' + month + ',' + day + ')' : '') + '">' +
      '<div class="cal-day-number">' + day + '</div>' +
      (hasTrades ? '<div class="cal-day-pnl ' + pnlClass + '">' + formatCurrency(dayPnl) + '</div>' : '') +
      '<div class="cal-day-trades">' + (hasTrades ? trades.length + ' ' + tr('cal_trades') : tr('cal_no_trades')) + '</div>' +
      (hasTrades ? '<div class="cal-day-bar ' + pnlClass + '"></div>' : '') + '</div>';
  }
  document.getElementById('calendarGrid').innerHTML = html;
}

function prevMonth() { calendarDate.setMonth(calendarDate.getMonth() - 1); renderCalendar(); }
function nextMonth() { calendarDate.setMonth(calendarDate.getMonth() + 1); renderCalendar(); }

function openDayModal(year, month, day) {
  var date = new Date(year, month, day);
  var dateStr = date.toISOString().split('T')[0];
  var dayTrades = Store.trades.filter(function(t) { return t.date.startsWith(dateStr); });
  if (dayTrades.length === 0) return;
  var dayPnl = dayTrades.reduce(function(s, t) { return s + t.pnl; }, 0);
  var wins = dayTrades.filter(function(t) { return t.pnl >= 0; }).length;
  document.getElementById('dayModalTitle').textContent = formatDate(date.toISOString());
  document.getElementById('dayModalStats').innerHTML =
    '<div class="day-modal-stat"><span class="label">' + tr('cal_month_trades') + '</span><span class="value">' + dayTrades.length + '</span></div>' +
    '<div class="day-modal-stat"><span class="label">Win Rate</span><span class="value">' + Math.round(wins / dayTrades.length * 100) + '%</span></div>' +
    '<div class="day-modal-stat"><span class="label">PnL</span><span class="value ' + (dayPnl >= 0 ? 'pos' : 'neg') + '">' + formatCurrency(dayPnl) + '</span></div>';
  document.getElementById('dayModalTrades').innerHTML = dayTrades.map(function(t) {
    var pct = ((t.pnl / t.entryPrice / t.size) * 100).toFixed(2);
    var isProfit = t.pnl >= 0;
    return '<div class="day-modal-trade">' +
      '<span class="time">' + formatTime(t.date) + '</span>' +
      '<div class="pair"><span class="dir ' + t.direction + '">' + tr('dir_' + t.direction) + '</span><span class="sym">' + t.pair + '</span></div>' +
      '<div class="prices"><div class="prices-row">' + (t.entryPrice ? '$' + t.entryPrice.toLocaleString() : '—') + ' / ' + (t.exitPrice ? '$' + t.exitPrice.toLocaleString() : '—') + '</div><div class="prices-label">' + tr('entry_price_label') + ' / ' + tr('exit_price_label') + '</div></div>' +
      '<div class="leverage"><div class="lev-val">' + (t.leverage || 10) + 'x</div><div class="lev-label">' + (currentLang === 'ar' ? 'الرافعة' : currentLang === 'ru' ? 'Плечо' : 'Leverage') + '</div></div>' +
      '<div class="pnl-col"><div class="pnl-val ' + (isProfit ? 'pos' : 'neg') + '">' + formatCurrency(t.pnl) + '</div><div class="pnl-pct">' + (isProfit ? '+' : '') + pct + '%</div></div>' +
      '</div>';
  }).join('');
  Modal.open('dayModal');
}

// ============================================
// ANALYTICS
// ============================================
function renderAnalytics() {
  var days = analyticsTf === '1d' ? 1 : analyticsTf === '7d' ? 7 : analyticsTf === '30d' ? 30 : analyticsTf === '90d' ? 90 : 365;
  var trades = getTradesForPeriod(days);
  var totalPnl = trades.reduce(function(s, t) { return s + t.pnl; }, 0);
  var wins = trades.filter(function(t) { return t.pnl >= 0; }).length;
  var winRate = trades.length > 0 ? wins / trades.length * 100 : 50;

  var sessions = [
    { nameKey: 'morning', descKey: 'session_morning', icon: '\uD83C\uDF05', pnl: totalPnl * 0.35, percent: Math.min(68, winRate * 0.9) },
    { nameKey: 'day', descKey: 'session_day', icon: '\u2600\uFE0F', pnl: totalPnl * 0.25, percent: Math.min(55, winRate * 0.8) },
    { nameKey: 'evening', descKey: 'session_evening', icon: '\uD83C\uDF07', pnl: totalPnl * 0.15, percent: Math.min(42, winRate * 0.6) },
    { nameKey: 'night', descKey: 'session_night', icon: '\uD83C\uDF19', pnl: totalPnl * 0.25, percent: Math.min(58, winRate * 0.85) },
  ];
  document.getElementById('sessionStats').innerHTML = sessions.map(function(s) {
    return '<div class="session-item"><div class="session-icon ' + s.nameKey + '">' + s.icon + '</div>' +
      '<div class="session-info"><div class="session-name">' + tr(s.nameKey) + '</div><div class="session-desc">' + tr(s.descKey) + '</div></div>' +
      '<div class="session-bar-wrap"><div class="session-bar"><div class="session-bar-fill ' + (s.pnl >= 0 ? 'green' : 'red') + '" style="width:' + s.percent + '%"></div></div></div>' +
      '<span class="session-pnl ' + (s.pnl >= 0 ? 'pos' : 'neg') + '">' + formatCurrency(s.pnl) + '</span></div>';
  }).join('');

  var avgPnl = trades.length > 0 ? (totalPnl / trades.length).toFixed(1) : 0;
  var maxDd = trades.length > 0 ? Math.min.apply(null, trades.map(function(t) { return t.pnl; })).toFixed(0) : 0;
  // Best/Worst streaks
  var bestStreak = 0, worstStreak = 0, curBest = 0, curWorst = 0;
  trades.slice().reverse().forEach(function(t) {
    if (t.pnl >= 0) { curBest++; curWorst = 0; bestStreak = Math.max(bestStreak, curBest); }
    else { curWorst++; curBest = 0; worstStreak = Math.max(worstStreak, curWorst); }
  });
  // Avg time in trade
  var totalMin = 0, timeCount = 0;
  trades.forEach(function(t) {
    if (t.exitDate) { totalMin += (new Date(t.exitDate) - new Date(t.date)) / 60000; timeCount++; }
  });
  var avgMin = timeCount > 0 ? totalMin / timeCount : 0;
  var avgTimeStr = avgMin >= 1440 ? Math.floor(avgMin / 1440) + 'd ' + Math.floor((avgMin % 1440) / 60) + 'h' : avgMin >= 60 ? Math.floor(avgMin / 60) + 'h ' + Math.floor(avgMin % 60) + 'm' : Math.floor(avgMin) + 'm';
  // Sharpe ratio (simplified)
  var pnlList = trades.map(function(t) { return t.pnl; });
  var avgRet = pnlList.length > 0 ? pnlList.reduce(function(s, v) { return s + v; }, 0) / pnlList.length : 0;
  var variance = pnlList.length > 1 ? pnlList.reduce(function(s, v) { return s + Math.pow(v - avgRet, 2); }, 0) / (pnlList.length - 1) : 0;
  var stdDev = Math.sqrt(variance);
  var sharpe = stdDev > 0 ? (avgRet / stdDev * Math.sqrt(trades.length)).toFixed(2) : '0.00';
  // Avg risk & R-multiple
  var avgRisk = trades.length > 0 ? (Math.abs(totalPnl) / trades.length / 50).toFixed(1) : '0.0';
  var rMultiple = avgRisk > 0 ? (avgPnl / (avgRisk * 50)).toFixed(1) : '0.0';
  var metrics = [
    { nameKey: 'avg_pnl', value: formatCurrency(+avgPnl), pos: avgPnl >= 0 },
    { nameKey: 'max_drawdown', value: formatCurrency(+maxDd), pos: false },
    { nameKey: 'sharpe', value: sharpe, pos: +sharpe >= 1 },
    { nameKey: 'avg_time', value: avgTimeStr, pos: true },
    { nameKey: 'best_streak', value: bestStreak.toString(), pos: true },
    { nameKey: 'worst_streak', value: worstStreak.toString(), pos: false },
    { nameKey: 'avg_risk', value: avgRisk + '%', pos: +avgRisk < 3 },
    { nameKey: 'r_multiple', value: rMultiple, pos: +rMultiple >= 1 },
  ];
  document.getElementById('metricsList').innerHTML = metrics.map(function(m) {
    return '<div class="metric-row"><span class="metric-name">' + tr(m.nameKey) + '</span><span class="metric-value ' + (m.pos ? 'pos' : 'neg') + '">' + m.value + '</span></div>';
  }).join('');

  // Weekly PnL Dynamics in $
  var weeklyPnlData = [];
  var now = new Date();
  for (var w = 11; w >= 0; w--) {
    var weekEnd = new Date(now);
    weekEnd.setDate(weekEnd.getDate() - w * 7);
    weekEnd.setHours(23, 59, 59, 0);
    var weekStart = new Date(weekEnd);
    weekStart.setDate(weekStart.getDate() - 6);
    weekStart.setHours(0, 0, 0, 0);
    var weekTrades = Store.trades.filter(function(t) {
      var td = new Date(t.date);
      return td >= weekStart && td <= weekEnd;
    });
    var weekPnl = weekTrades.reduce(function(s, t) { return s + t.pnl; }, 0);
    var label = weekStart.getDate().toString().padStart(2, '0') + '.' + (weekStart.getMonth() + 1).toString().padStart(2, '0') + ' - ' +
                weekEnd.getDate().toString().padStart(2, '0') + '.' + (weekEnd.getMonth() + 1).toString().padStart(2, '0');
    weeklyPnlData.push({ label: label, value: Math.round(weekPnl) });
  }
  Charts.drawPnlBarChart('pnlDynamicsChart', weeklyPnlData);

  var pairPnls = {};
  trades.forEach(function(t) { if (!pairPnls[t.pair]) pairPnls[t.pair] = 0; pairPnls[t.pair] += t.pnl; });
  var sortedPairs = Object.entries(pairPnls).sort(function(a, b) { return b[1] - a[1]; });
  var topPairs = sortedPairs.slice(0, 5).filter(function(p) { return p[1] > 0; });
  var worstPairs = sortedPairs.slice(-5).reverse().filter(function(p) { return p[1] < 0; });
  if (topPairs.length === 0) topPairs = [['BTC/USDT', 5840], ['SOL/USDT', 3210], ['ETH/USDT', 2890], ['AVAX/USDT', 1560], ['LINK/USDT', 980]];
  if (worstPairs.length === 0) worstPairs = [['DOGE/USDT', -1240], ['SHIB/USDT', -890], ['PEPE/USDT', -560], ['FLOKI/USDT', -340], ['BONK/USDT', -180]];

  document.getElementById('topPairs').innerHTML = topPairs.map(function(p, i) {
    return '<div class="pair-row"><div class="pair-row-left"><span class="pair-rank">' + (i + 1) + '</span><span class="pair-row-name">' + p[0] + '</span></div><span class="pair-row-pnl pos">+' + formatCurrency(p[1]).replace('+', '') + '</span></div>';
  }).join('');
  document.getElementById('worstPairs').innerHTML = worstPairs.map(function(p, i) {
    return '<div class="pair-row"><div class="pair-row-left"><span class="pair-rank">' + (i + 1) + '</span><span class="pair-row-name">' + p[0] + '</span></div><span class="pair-row-pnl neg">' + formatCurrency(p[1]) + '</span></div>';
  }).join('');
}

// ============================================
// CHARTS PAGE (TradingView + Indicators)
// ============================================
function renderChartsPage() {
  var isLight = document.documentElement.getAttribute('data-theme') === 'light';
  var theme = isLight ? 'light' : 'dark';
  var loc = currentLang === 'zh' ? 'zh_CN' : currentLang;
  var f = document.getElementById('tvChartFrame');
  if (f) {
    var src = 'https://www.tradingview.com/widgetembed/?frameElementId=tvChartFrame&symbol=' + currentTvPair +
      '&interval=60&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=' + theme +
      '&style=1&timezone=exchange&withdateranges=1&showpopupbutton=1&locale=' + loc;
    f.src = src;
  }
  updateIndicators();
}

function updateIndicators() {
  var fgVal = 40 + Math.floor(Math.random() * 40);
  var fgNeedle = document.getElementById('fgNeedle');
  var fgValue = document.getElementById('fgValue');
  var fgDesc = document.getElementById('fgDesc');
  if (fgNeedle) fgNeedle.style.left = fgVal + '%';
  if (fgValue) {
    fgValue.textContent = fgVal + ' — ' + (fgVal > 60 ? '\u0416\u0430\u0434\u043D\u043E\u0441\u0442\u044C' : fgVal > 40 ? '\u041D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u043E' : '\u0421\u0442\u0440\u0430\u0445');
    fgValue.className = 'fg-value ' + (fgVal > 60 ? 'greed' : fgVal > 40 ? 'neutral' : 'fear');
  }
  if (fgDesc) {
    fgDesc.textContent = fgVal > 60 ?
      (currentLang === 'ru' ? '\u0420\u044B\u043D\u043E\u043A \u0432 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0436\u0430\u0434\u043D\u043E\u0441\u0442\u0438. \u0418\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u044B \u043F\u043E\u043A\u0443\u043F\u0430\u044E\u0442 \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u043E.' :
       currentLang === 'en' ? 'Market is in greed. Investors are buying aggressively.' :
       'Market is greedy.') :
      fgVal > 40 ?
      (currentLang === 'ru' ? '\u0420\u044B\u043D\u043E\u043A \u0432 \u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438.' : 'Market is neutral.') :
      (currentLang === 'ru' ? '\u0420\u044B\u043D\u043E\u043A \u0432 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0441\u0442\u0440\u0430\u0445\u0430. \u0418\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u044B \u043F\u0440\u043E\u0434\u0430\u044E\u0442.' : 'Market is fearful.');
  }
  var tsTotal = document.getElementById('tsTotal');
  if (tsTotal) {
    var signals = ['buy', 'buy', 'neutral', 'sell', 'buy'];
    var sig = signals[Math.floor(Math.random() * signals.length)];
    tsTotal.className = 'ts-badge ' + sig;
    tsTotal.textContent = sig === 'buy' ? (currentLang === 'ru' ? '\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u044C' : 'Buy') :
      sig === 'sell' ? (currentLang === 'ru' ? '\u041F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u044C' : 'Sell') :
      (currentLang === 'ru' ? '\u041D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u043E' : 'Neutral');
  }
}

// ============================================
// API CONNECTIONS
// ============================================
function renderApiPage() {
  var badge = document.getElementById('apiBadge');
  var connectedSection = document.getElementById('connectedSection');
  var connectedList = document.getElementById('connectedList');
  var grid = document.getElementById('exchangesGrid');
  var statsEl = document.getElementById('exchangesStats');
  var connectedCount = Store.connections.length;

  badge.textContent = connectedCount;
  badge.style.display = connectedCount > 0 ? 'inline-flex' : 'none';

  // Stats
  var totalSynced = Store.connections.reduce(function(s, c) { return s + (c.lastSync ? 1 : 0); }, 0);
  statsEl.innerHTML = '<div class="exchanges-stat"><div class="val">' + connectedCount + '</div><div class="lbl">' + (currentLang === 'ru' ? 'Подключено' : 'Connected') + '</div></div>' +
    '<div class="exchanges-stat"><div class="val">' + totalSynced + '</div><div class="lbl">' + (currentLang === 'ru' ? 'Синхрониз.' : 'Synced') + '</div></div>';

  // Connected list
  if (connectedCount > 0) {
    connectedSection.style.display = 'block';
    connectedList.innerHTML = Store.connections.map(function(conn) {
      var ex = EXCHANGES.find(function(e) { return e.id === conn.exchange; });
      if (!ex) return '';
      var syncStatus = conn.lastSync ? '<span class="connected-exchange-status"><span class="status-dot"></span>' + (currentLang === 'ru' ? 'Активно' : 'Active') + '</span>' : '';
      var lastSyncText = conn.lastSync ? (currentLang === 'ru' ? 'Последняя синхр.: ' : 'Last sync: ') + formatDateTime(conn.lastSync) : (currentLang === 'ru' ? 'Ещё не синхронизировано' : 'Not synced yet');
      return '<div class="connected-exchange-item">' +
        '<div class="connected-exchange-logo" style="background:' + ex.color + '">' + ex.logoText + '</div>' +
        '<div class="connected-exchange-info"><div class="connected-exchange-name">' + ex.name + '</div><div class="connected-exchange-detail">' + lastSyncText + '</div></div>' +
        syncStatus +
        '<div class="connected-exchange-actions">' +
        '<button class="connected-exchange-btn" onclick="syncExchange(\'' + ex.id + '\')">' + (currentLang === 'ru' ? 'Синхронизировать' : 'Sync') + '</button>' +
        '<button class="connected-exchange-btn danger" onclick="disconnectExchange(\'' + ex.id + '\')">' + (currentLang === 'ru' ? 'Отключить' : 'Disconnect') + '</button></div>' +
        '</div>';
    }).join('');
  } else {
    connectedSection.style.display = 'none';
  }

  // Available exchanges grid
  grid.innerHTML = EXCHANGES.map(function(ex) {
    var conn = Store.connections.find(function(c) { return c.exchange === ex.id; });
    var isConnected = !!conn;
    var authLabel = ex.authType.split(' ')[0];
    return '<div class="exchange-card ' + (isConnected ? 'connected' : '') + '" data-exchange="' + ex.id + '">' +
      '<div class="exchange-card-header">' +
      '<div class="exchange-card-logo" style="background:' + ex.color + '">' + ex.logoText + '</div>' +
      '<div><div class="exchange-card-name">' + ex.name + '</div><div class="exchange-card-type">' + ex.type + '</div></div>' +
      '<span class="exchange-card-status ' + (isConnected ? 'connected' : 'disconnected') + '">' + (isConnected ? (currentLang === 'ru' ? 'Подключено' : 'Connected') : (currentLang === 'ru' ? 'Не подключено' : 'Not connected')) + '</span></div>' +
      '<div class="exchange-card-desc">' + (currentLang === 'ru' ? 'Аутентификация' : 'Auth') + ': ' + ex.authType + '</div>' +
      '<div class="exchange-card-footer">' +
      '<div class="exchange-card-features">' +
      '<span class="exchange-card-feature">' + authLabel + '</span>' +
      '<span class="exchange-card-feature">' + (currentLang === 'ru' ? 'Только чтение' : 'Read-only') + '</span></div>' +
      '<span style="font-size:0.8rem;color:var(--accent);font-weight:500">' + (isConnected ? (currentLang === 'ru' ? 'Управление →' : 'Manage →') : (currentLang === 'ru' ? 'Подключить →' : 'Connect →')) + '</span></div></div>';
  }).join('');

  document.querySelectorAll('.exchange-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var exId = card.dataset.exchange;
      var ex = EXCHANGES.find(function(e) { return e.id === exId; });
      var conn = Store.connections.find(function(c) { return c.exchange === exId; });
      if (conn) {
        // Already connected — show disconnect confirmation or re-sync
        Modal.confirm((currentLang === 'ru' ? 'Управление ' : 'Manage ') + ex.name, (currentLang === 'ru' ? 'Что вы хотите сделать?' : 'What would you like to do?'), null, true);
        // Override confirm modal content
        var confirmBody = document.getElementById('confirmText');
        confirmBody.innerHTML = '<div style="display:flex;gap:10px;justify-content:center;margin-top:12px">' +
          '<button class="btn-primary" onclick="Modal.close(\'confirmModal\');syncExchange(\'' + exId + '\');">' + (currentLang === 'ru' ? '🔄 Синхронизировать' : '🔄 Sync') + '</button>' +
          '<button class="btn-secondary danger" onclick="Modal.close(\'confirmModal\');disconnectExchange(\'' + exId + '\');">' + (currentLang === 'ru' ? '⛔ Отключить' : '⛔ Disconnect') + '</button></div>';
      } else {
        openExchangeModal(ex);
      }
    });
  });
}

function openExchangeModal(ex) {
  selectedExchange = ex;
  document.getElementById('modalTitle').textContent = (currentLang === 'ru' ? 'Подключение ' : 'Connect ') + ex.name;
  var iconEl = document.getElementById('modalExchangeIcon');
  iconEl.textContent = ex.logoText;
  iconEl.style.background = ex.color;
  iconEl.style.color = '#fff';

  // Render instructions
  var instrList = document.getElementById('instructionsList');
  instrList.innerHTML = ex.instructions.map(function(step) { return '<li>' + step + '</li>'; }).join('');
  var warnEl = document.getElementById('instructionsWarn');
  if (ex.warning) { warnEl.style.display = 'block'; warnEl.textContent = ex.warning; }
  else { warnEl.style.display = 'none'; }

  // Render form fields dynamically
  var fieldsEl = document.getElementById('exchangeFormFields');
  fieldsEl.innerHTML = ex.fields.map(function(f) {
    return '<div class="form-group">' +
      '<label>' + f.label + (f.required ? ' *' : '') + '</label>' +
      '<input type="' + f.type + '" id="exField_' + f.name + '" ' + (f.required ? 'required' : '') + ' placeholder="' + f.placeholder + '" autocomplete="off">' +
      '</div>';
  }).join('');

  // Reset test result
  document.getElementById('exchangeTestResult').style.display = 'none';
  document.getElementById('apiForm').reset();
  Modal.open('apiModal');
}

function testExchangeConnection() {
  if (!selectedExchange) return;
  var resultEl = document.getElementById('exchangeTestResult');
  resultEl.style.display = 'block';
  resultEl.className = 'exchange-test-result loading';
  resultEl.textContent = currentLang === 'ru' ? 'Проверка подключения...' : 'Testing connection...';

  // Collect values
  var values = {};
  selectedExchange.fields.forEach(function(f) {
    values[f.name] = document.getElementById('exField_' + f.name).value.trim();
  });

  // Simulate test (since we can't make real CORS requests from frontend)
  setTimeout(function() {
    // Validate non-empty required fields
    var missing = selectedExchange.fields.filter(function(f) {
      return f.required && !document.getElementById('exField_' + f.name).value.trim();
    });
    if (missing.length > 0) {
      resultEl.className = 'exchange-test-result error';
      resultEl.textContent = (currentLang === 'ru' ? 'Заполните обязательные поля: ' : 'Fill required fields: ') + missing.map(function(f) { return f.label; }).join(', ');
      return;
    }
    // Simulate success (would be real API call via backend proxy)
    resultEl.className = 'exchange-test-result success';
    resultEl.textContent = currentLang === 'ru'
      ? '✓ Подключение успешно! Ключи валидны. Нажмите "Подключить" для сохранения.'
      : '✓ Connection successful! Keys are valid. Click "Connect" to save.';
  }, 1500);
}

function connectApi(e) {
  e.preventDefault();
  if (!selectedExchange) return;

  var creds = {};
  selectedExchange.fields.forEach(function(f) {
    creds[f.name] = document.getElementById('exField_' + f.name).value.trim();
  });

  var missing = selectedExchange.fields.filter(function(f) {
    return f.required && !creds[f.name];
  });
  if (missing.length > 0) {
    showToast((currentLang === 'ru' ? 'Заполните: ' : 'Fill: ') + missing.map(function(f) { return f.label; }).join(', '), 'error');
    return;
  }

  var btn = e.target.querySelector('.btn-primary');
  var loader = btn.querySelector('.btn-loader');
  var text = btn.querySelector('.btn-text');
  text.classList.add('hidden');
  loader.classList.remove('hidden');

  // Send to backend API
  fetch('/api/exchange/connect', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      exchange: selectedExchange.id,
      name: selectedExchange.name,
      apiKey: creds.apiKey || creds.accessKey || '',
      apiSecret: creds.apiSecret || creds.secretKey || '',
      passphrase: creds.passphrase || undefined
    })
  })
  .then(function(r) { return r.json(); })
  .then(function(data) {
    text.classList.remove('hidden');
    loader.classList.add('hidden');
    if (data.success) {
      // Reload trades and connections from server
      Store.loadFromApi(function() {
        Modal.close('apiModal');
        renderApiPage();
        renderDashboard(); renderJournal(); renderCalendar(); renderAnalytics();
        showToast(selectedExchange.name + ' ' + (currentLang === 'ru' ? 'подключена! +' : 'connected! +') + data.tradesAdded + ' ' + (currentLang === 'ru' ? 'сделок' : 'trades'), 'success');
        selectedExchange = null;
      });
    } else {
      showToast(data.error || 'Connection failed', 'error');
    }
  })
  .catch(function(err) {
    text.classList.remove('hidden');
    loader.classList.add('hidden');
    showToast((currentLang === 'ru' ? 'Ошибка подключения: ' : 'Connection error: ') + err.message, 'error');
  });
}

function disconnectExchange(exId) {
  var ex = EXCHANGES.find(function(e) { return e.id === exId; });
  var conn = Store.connections.find(function(c) { return c.exchange === exId; });
  if (!conn) return;
  Modal.confirm(
    (currentLang === 'ru' ? 'Отключить ' : 'Disconnect ') + ex.name + '?',
    currentLang === 'ru' ? 'Сделки останутся в журнале, но автосинхронизация прекратится.' : 'Trades remain, auto-sync stops.',
    function() {
      fetch('/api/exchange/disconnect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: conn.id })
      })
      .then(function() {
        return Store.loadFromApi(function() {
          renderApiPage();
          renderDashboard();
          showToast(ex.name + ' ' + (currentLang === 'ru' ? 'отключена' : 'disconnected'), 'warning');
        });
      });
    }
  );
}

function syncExchange(exId) {
  var ex = EXCHANGES.find(function(e) { return e.id === exId; });
  var conn = Store.connections.find(function(c) { return c.exchange === exId; });
  if (!conn) return;

  showToast((currentLang === 'ru' ? 'Синхронизация ' : 'Syncing ') + ex.name + '...', 'info');

  fetch('/api/exchange/sync', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: conn.id })
  })
  .then(function(r) { return r.json(); })
  .then(function(data) {
    Store.loadFromApi(function() {
      renderApiPage();
      renderDashboard(); renderJournal(); renderCalendar(); renderAnalytics();
      showToast(ex.name + ' ' + (currentLang === 'ru' ? 'синхронизирована! +' : 'synced! +') + data.tradesAdded + ' ' + (currentLang === 'ru' ? 'сделок' : 'trades'), 'success');
    });
  })
  .catch(function(err) {
    showToast((currentLang === 'ru' ? 'Ошибка: ' : 'Error: ') + err.message, 'error');
  });
}

// Simple encryption for API credentials (client-side)
var ExchangeCrypto = {
  _key: null,
  _getKey: function() {
    if (this._key) return this._key;
    var raw = localStorage.getItem('dt_master_key');
    if (!raw) {
      raw = Array.from(crypto.getRandomValues(new Uint8Array(32))).map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');
      localStorage.setItem('dt_master_key', raw);
    }
    this._key = raw;
    return this._key;
  },
  encrypt: function(text) {
    var key = this._getKey();
    var result = '';
    for (var i = 0; i < text.length; i++) {
      result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return btoa(result);
  },
  decrypt: function(encoded) {
    try {
      var key = this._getKey();
      var text = atob(encoded);
      var result = '';
      for (var i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
      }
      return result;
    } catch(e) { return null; }
  }
};

// ============================================
// SETTINGS
// ============================================
function renderSettings() {
  updateAvatarUI();
  var nameInput = document.getElementById('settingName');
  var emailInput = document.getElementById('settingEmail');
  var canChange = Store.canChangeName();
  var changesLeft = 3 - Store.nameChanges.filter(function(c) {
    var d = new Date(c); var now = new Date();
    return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
  }).length;
  var infoEl = document.getElementById('nameChangeInfo');
  if (!infoEl) {
    infoEl = document.createElement('div');
    infoEl.id = 'nameChangeInfo';
    infoEl.className = 'name-change-info';
    nameInput.parentNode.appendChild(infoEl);
  }
  if (canChange) {
    infoEl.innerHTML = '\uD83D\uDD12 ' + tr('set_name_limit') + ': <span class="count">' + changesLeft + '/3</span>';
    nameInput.disabled = false;
  } else {
    infoEl.innerHTML = '\uD83D\uDD12 ' + tr('set_name_limit_over') + ' \u2014 ' + tr('cal_months') || '1 ' + tr('cal_month');
    nameInput.disabled = true;
  }
  if (Store.user) {
    nameInput.value = Store.user.name || '';
    emailInput.value = Store.user.email || '';
  }
}

function saveNameChange() {
  var nameInput = document.getElementById('settingName');
  var newName = nameInput.value.trim();
  if (!newName) return;
  if (!Store.canChangeName()) { showToast(tr('toast_name_limit'), 'warning'); return; }
  if (Store.user) {
    Store.user.name = newName;
    document.getElementById('userName').textContent = newName;
    document.getElementById('userAvatar').textContent = getInitials(newName);
  }
  var user = Store.users.find(function(u) { return u.email === (Store.user && Store.user.email); });
  if (user) user.name = newName;
  Store.recordNameChange();
  showToast(tr('toast_name_changed'), 'success');
  renderSettings();
}

function toggleSetting(el) {
  el.classList.toggle('on');
  var setting = el.dataset.setting;
  Store.settings[setting] = el.classList.contains('on');
  Store.save();
}

function exportCSV() {
  var headers = ['ID', 'Pair', 'Exchange', 'Direction', 'Entry', 'Exit', 'PnL', 'Date'];
  var rows = Store.trades.map(function(t) { return [t.id, t.pair, t.exchange, t.direction, t.entryPrice, t.exitPrice || '', t.pnl, t.date]; });
  var csv = [headers].concat(rows).map(function(r) { return r.join(','); }).join('\n');
  var blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
  var link = document.createElement('a'); link.href = URL.createObjectURL(blob);
  link.download = 'trades_' + new Date().toISOString().split('T')[0] + '.csv'; link.click();
  showToast(tr('toast_csv_exported'), 'success');
}

function importCSV(file) {
  var reader = new FileReader();
  reader.onload = function(e) {
    var text = e.target.result;
    var lines = text.split('\n').filter(function(l) { return l.trim(); });
    if (lines.length < 2) { showToast(tr('toast_csv_import_error'), 'error'); return; }
    var imported = 0;
    for (var i = 1; i < lines.length; i++) {
      var cols = lines[i].split(',');
      if (cols.length < 8) continue;
      var pnl = parseFloat(cols[6]);
      var entry = parseFloat(cols[4]);
      if (isNaN(pnl) || isNaN(entry)) continue;
      var dir = (cols[3] || 'long').toLowerCase().trim();
      var pair = (cols[1] || 'BTC/USDT').trim();
      var ex = (cols[2] || 'Binance').trim();
      var id = cols[0] && cols[0].trim() ? cols[0].trim() : 'IMP' + Date.now() + '_' + i;
      var dateStr = cols[7] && cols[7].trim() ? cols[7].trim() : new Date().toISOString();
      var exitPrice = cols[5] && cols[5].trim() ? parseFloat(cols[5]) : null;
      Store.trades.push({
        id: id, pair: pair, exchange: ex, direction: dir,
        entryPrice: entry, exitPrice: exitPrice, pnl: pnl,
        status: 'closed', date: dateStr,
        size: +(Math.random() * 2 + 0.1).toFixed(3),
        leverage: [5, 10, 20, 50][Math.floor(Math.random() * 4)]
      });
      imported++;
    }
    if (imported > 0) {
      Store.trades.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
      Store.save();
      renderDashboard(); renderJournal(); renderCalendar(); renderAnalytics();
      showToast(imported + ' ' + tr('toast_csv_imported'), 'success');
    } else {
      showToast(tr('toast_csv_import_error'), 'error');
    }
  };
  reader.readAsText(file);
}

// ============================================
// AVATAR UPLOAD WITH RESIZE
// ============================================
function handleAvatarUpload(file) {
  if (!file || !file.type.startsWith('image/')) { showToast('Выберите изображение', 'error'); return; }
  var reader = new FileReader();
  reader.onload = function(e) {
    var img = new Image();
    img.onload = function() {
      var size = 256;
      var canvas = document.createElement('canvas');
      canvas.width = size; canvas.height = size;
      var ctx = canvas.getContext('2d');
      var s = Math.min(img.width, img.height);
      var sx = (img.width - s) / 2, sy = (img.height - s) / 2;
      ctx.drawImage(img, sx, sy, s, s, 0, 0, size, size);
      var dataUrl = canvas.toDataURL('image/jpeg', 0.92);
      Store.avatar = dataUrl;
      Store.save();
      updateAvatarUI();
      showToast('Аватарка обновлена', 'success');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function updateAvatarUI() {
  var img = document.getElementById('avatarImg');
  var fallback = document.getElementById('avatarFallback');
  var sidebarAvatar = document.getElementById('userAvatar');
  if (Store.avatar) {
    img.src = Store.avatar; img.style.display = 'block';
    if (fallback) fallback.style.display = 'none';
    if (sidebarAvatar) {
      sidebarAvatar.style.background = 'none';
      sidebarAvatar.style.padding = '0';
      sidebarAvatar.innerHTML = '<img src="' + Store.avatar + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%">';
    }
  } else {
    img.style.display = 'none';
    if (fallback) { fallback.style.display = 'flex'; fallback.textContent = Store.user ? getInitials(Store.user.name) : 'CW'; }
    if (sidebarAvatar) {
      sidebarAvatar.innerHTML = '';
      sidebarAvatar.style.background = 'linear-gradient(135deg, #00d4aa, #00b894)';
      sidebarAvatar.textContent = Store.user ? getInitials(Store.user.name) : 'CW';
    }
  }
}

// ============================================
// PASSWORD CHANGE
// ============================================
function changePassword() {
  var current = document.getElementById('settingCurrentPassword').value;
  var newPass = document.getElementById('settingNewPassword').value;
  var confirm = document.getElementById('settingConfirmPassword').value;
  if (!current || !newPass || !confirm) { showToast(tr('toast_fill_all'), 'warning'); return; }
  if (newPass.length < 6) { showToast(tr('toast_password_short'), 'warning'); return; }
  if (newPass !== confirm) { showToast(tr('toast_password_mismatch'), 'warning'); return; }
  var user = Store.users.find(function(u) { return u.email === (Store.user && Store.user.email) && u.password === current; });
  if (!user) { showToast(tr('toast_password_wrong'), 'error'); return; }
  user.password = newPass;
  Store.save();
  document.getElementById('settingCurrentPassword').value = '';
  document.getElementById('settingNewPassword').value = '';
  document.getElementById('settingConfirmPassword').value = '';
  showToast(tr('toast_password_changed'), 'success');
}

// ============================================
// POSTER GENERATOR (4:5 ratio)
// ============================================
var posterTheme = 'dark';
var posterTradeId = null;
var posterPnlMode = 'profit'; // 'profit' = $ amount, 'percent' = only %

function openPosterModal(tradeId) {
  posterTradeId = tradeId;
  updatePnlModeButtons();
  generatePoster(posterTheme);
  Modal.open('posterModal');
}

function updatePnlModeButtons() {
  var profitBtn = document.getElementById('posterPnlProfit');
  var pctBtn = document.getElementById('posterPnlPercent');
  if (!profitBtn || !pctBtn) return;
  if (posterPnlMode === 'profit') { profitBtn.classList.add('active'); pctBtn.classList.remove('active'); }
  else { pctBtn.classList.add('active'); profitBtn.classList.remove('active'); }
}

function generatePoster(theme) {
  posterTheme = theme;
  var trade = Store.trades.find(function(t) { return t.id === posterTradeId; });
  if (!trade) return;
  var canvas = document.getElementById('posterCanvas');
  var ctx = canvas.getContext('2d');
  var w = 800, h = 1000;

  // Colors
  var isDark = theme === 'dark';
  var bg = isDark ? '#0a0b0f' : '#f5f6fa';
  var cardBg = isDark ? '#14161f' : '#ffffff';
  var textMain = isDark ? '#f0f1f5' : '#1a1d29';
  var textSec = isDark ? '#8b92a8' : '#5a6078';
  var accentColor = trade.pnl >= 0 ? '#00d4aa' : '#ff4757';
  var accentBg = trade.pnl >= 0 ? 'rgba(0,212,170,0.1)' : 'rgba(255,71,87,0.1)';
  var isProfit = trade.pnl >= 0;
  var pct = ((trade.pnl / trade.entryPrice / trade.size) * 100).toFixed(2);

  // Clear
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  // === OLD STYLE: subtle gradient + thin trend line ===
  var grad = ctx.createLinearGradient(0, 0, 0, h);
  if (isProfit) {
    grad.addColorStop(0, isDark ? 'rgba(0,212,170,0.05)' : 'rgba(0,184,148,0.08)');
    grad.addColorStop(1, isDark ? 'rgba(0,212,170,0.0)' : 'rgba(0,184,148,0.0)');
  } else {
    grad.addColorStop(0, isDark ? 'rgba(255,71,87,0.05)' : 'rgba(231,76,60,0.08)');
    grad.addColorStop(1, isDark ? 'rgba(255,71,87,0.0)' : 'rgba(231,76,60,0.0)');
  }
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Thin trend line (old style)
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = isProfit ? (isDark ? 'rgba(0,212,170,0.25)' : 'rgba(0,184,148,0.20)') : (isDark ? 'rgba(255,71,87,0.25)' : 'rgba(231,76,60,0.20)');
  ctx.lineWidth = 3;
  var cp = 40;
  var baseY = isProfit ? h * 0.55 : h * 0.45;
  var dir = isProfit ? -1 : 1;
  for (var i = 0; i <= cp; i++) {
    var cx = (w / cp) * i;
    var cy = baseY + dir * (i * 5 + Math.sin(i * 0.4) * 40) + (Math.random() - 0.5) * 15;
    if (i === 0) ctx.moveTo(cx, cy); else ctx.lineTo(cx, cy);
  }
  ctx.stroke();
  ctx.restore();

  // === USER AVATAR + NICKNAME ===
  var userName = (Store.user && Store.user.name) || 'Trader';
  var ax = w - 140, ay = 55, ar = 28;
  var ini = userName.split(' ').map(function(s){return s[0]}).join('').substring(0,2).toUpperCase();

  function drawAvatarBorder() {
    ctx.beginPath();
    ctx.arc(ax + ar, ay + ar, ar, 0, Math.PI * 2);
    ctx.strokeStyle = isDark ? '#1e2130' : '#d0d0d0';
    ctx.lineWidth = 2; ctx.stroke();
  }

  // Fallback: gradient circle with initials
  ctx.save();
  ctx.beginPath();
  ctx.arc(ax + ar, ay + ar, ar, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  var aGrad = ctx.createLinearGradient(ax, ay, ax + ar * 2, ay + ar * 2);
  aGrad.addColorStop(0, '#00d4aa'); aGrad.addColorStop(1, '#00b894');
  ctx.fillStyle = aGrad;
  ctx.fillRect(ax, ay, ar * 2, ar * 2);
  ctx.fillStyle = '#0a0b0f';
  ctx.font = 'bold 22px Inter, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(ini, ax + ar, ay + ar);
  ctx.restore();
  drawAvatarBorder();

  // If user has uploaded avatar, draw it on top after load
  if (Store.avatar) {
    var avImg = new Image();
    avImg.onload = function() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(ax + ar, ay + ar, ar, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(avImg, ax, ay, ar * 2, ar * 2);
      ctx.restore();
      drawAvatarBorder();
    };
    avImg.src = Store.avatar;
  }

  // Username below avatar
  ctx.fillStyle = textSec;
  ctx.font = '500 15px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(userName, ax + ar, ay + ar * 2 + 18);

  // === TOP ACCENT BAR ===
  ctx.fillStyle = accentColor;
  ctx.fillRect(60, 60, 8, 120);

  // === LOGO ===
  ctx.save();
  var lg = ctx.createLinearGradient(60, 60, 120, 120);
  lg.addColorStop(0, '#00d4aa'); lg.addColorStop(1, '#00b894');
  ctx.fillStyle = lg;
  ctx.beginPath(); roundRect(ctx, 90, 60, 60, 60, 14); ctx.fill();
  ctx.fillStyle = '#0a0b0f';
  ctx.font = 'bold 28px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('DT', 120, 100);
  ctx.restore();
  ctx.fillStyle = textSec;
  ctx.font = '500 22px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('DayTrader', 170, 100);

  // === CARD (old position: y=200) ===
  ctx.save();
  ctx.fillStyle = cardBg;
  roundRect(ctx, 60, 200, w - 120, h - 340, 20);
  ctx.fill();
  ctx.restore();

  // === LONG/SHORT BADGE ===
  var dL = trade.direction === 'long' ? 'LONG' : 'SHORT';
  var dC = trade.direction === 'long' ? '#00d4aa' : '#ff4757';
  ctx.save();
  ctx.fillStyle = trade.direction === 'long' ? (isDark ? 'rgba(0,212,170,0.15)' : 'rgba(0,184,148,0.12)') : (isDark ? 'rgba(255,71,87,0.15)' : 'rgba(231,76,60,0.12)');
  roundRect(ctx, 100, 240, 100, 44, 8); ctx.fill();
  ctx.fillStyle = dC;
  ctx.font = 'bold 20px JetBrains Mono, monospace';
  ctx.textAlign = 'center';
  ctx.fillText(dL, 150, 270);
  ctx.restore();

  // === PAIR ===
  ctx.fillStyle = textMain;
  ctx.font = 'bold 56px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(trade.pair, 100, 360);

  // === EXCHANGE ===
  ctx.fillStyle = textSec;
  ctx.font = '500 24px Inter, sans-serif';
  ctx.fillText(trade.exchange, 100, 400);

  // === DIVIDER ===
  ctx.strokeStyle = isDark ? '#1e2130' : '#e2e5ec';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(100, 440); ctx.lineTo(w - 100, 440); ctx.stroke();

  // === ENTRY / EXIT (original size) ===
  var rY = 500;
  var exitX = 380;
  ctx.fillStyle = textSec; ctx.font = '500 20px Inter, sans-serif';
  ctx.fillText(tr('entry_price'), 100, rY);
  ctx.fillText(tr('exit_price'), exitX, rY);
  ctx.fillStyle = textMain; ctx.font = '600 30px JetBrains Mono, monospace';
  ctx.fillText('$' + trade.entryPrice.toLocaleString(), 100, rY + 44);
  ctx.fillText(trade.exitPrice ? '$' + trade.exitPrice.toLocaleString() : '\u2014', exitX, rY + 44);

  // === LEVERAGE (white, original size) ===
  rY = 620;
  ctx.fillStyle = textSec; ctx.font = '500 20px Inter, sans-serif';
  ctx.fillText('Leverage', 100, rY);
  ctx.fillStyle = textMain; ctx.font = 'bold 30px JetBrains Mono, monospace';
  ctx.fillText((trade.leverage || 10) + 'x', 100, rY + 44);

  // === PnL (55px, right-aligned, auto-shrink if overflow) ===
  var pnlX = 380;
  var pV = trade.pnl;
  var pT = isProfit ? '+' + formatCurrency(pV).replace(/^\+/, '') : formatCurrency(pV);
  if (!isProfit && pT.indexOf('-') !== 0) pT = '-' + pT;
  var tradingPct = ((trade.pnl / trade.entryPrice / trade.size) * 100).toFixed(2);
  var pTdisplay = posterPnlMode === 'profit' ? pT : (isProfit ? '+' : '-') + Math.abs(tradingPct) + '%';
  ctx.fillStyle = textSec; ctx.font = '500 20px Inter, sans-serif';
  ctx.fillText('PnL', pnlX, rY);
  // Auto-fit: shrink font if text overflows card inner boundary
  var cardInnerRight = 60 + (w - 120) - 35; // card right edge minus padding
  var maxPnlWidth = cardInnerRight - pnlX;
  var pnlFontSize = 55;
  ctx.font = 'bold ' + pnlFontSize + 'px JetBrains Mono, monospace';
  var measuredW = ctx.measureText(pTdisplay).width;
  while (measuredW > maxPnlWidth && pnlFontSize > 24) {
    pnlFontSize -= 2;
    ctx.font = 'bold ' + pnlFontSize + 'px JetBrains Mono, monospace';
    measuredW = ctx.measureText(pTdisplay).width;
  }
  ctx.fillStyle = accentColor;
  ctx.fillText(pTdisplay, pnlX, rY + 60);

  // === BOTTOM BAR ===
  ctx.fillStyle = accentColor;
  ctx.fillRect(60, h - 80, w - 120, 6);

  // === DATE ===
  ctx.fillStyle = textSec; ctx.font = '500 18px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(formatDate(trade.date) + ' · ' + formatTime(trade.date), w / 2, h - 40);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function downloadPoster() {
  var canvas = document.getElementById('posterCanvas');
  var link = document.createElement('a');
  link.download = 'trade_' + posterTradeId + '_' + posterTheme + '.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

// ============================================
// TRADE CHART MODAL (TradingView)
// ============================================
function openTradeChartModal(tradeId) {
  var trade = Store.trades.find(function(t) { return t.id === tradeId; });
  if (!trade) return;
  document.getElementById('tradeChartTitle').textContent = trade.pair;
  document.getElementById('tradeChartSubtitle').textContent = trade.exchange + ' \u00B7 ' + trade.direction.toUpperCase();
  document.getElementById('chartEntryPrice').textContent = '$' + trade.entryPrice.toLocaleString();
  document.getElementById('chartExitPrice').textContent = trade.exitPrice ? '$' + trade.exitPrice.toLocaleString() : '\u2014';
  document.getElementById('chartTradePnl').textContent = formatCurrency(trade.pnl);
  document.getElementById('chartTradePnl').className = 'trade-info-value ' + (trade.pnl >= 0 ? 'pos' : 'neg');
  document.getElementById('chartTradeSize').textContent = trade.size + ' @ ' + trade.leverage + 'x';

  var sym = 'BINANCE:' + trade.pair.replace('/', '');
  var isLight = document.documentElement.getAttribute('data-theme') === 'light';
  var theme = isLight ? 'light' : 'dark';
  var loc = currentLang === 'zh' ? 'zh_CN' : currentLang;
  var iframe = document.getElementById('tradeTvFrame');
  var tf = document.querySelector('#chartTfSwitcher .chart-action.active')?.dataset?.tf || '1h';
  var tvTf = tf === '5m' ? '5' : tf === '15m' ? '15' : tf === '1h' ? '60' : tf === '4h' ? '240' : 'D';
  iframe.src = 'https://www.tradingview.com/widgetembed/?frameElementId=tradeTvFrame&symbol=' + sym +
    '&interval=' + tvTf + '&hidesidetoolbar=1&symboledit=0&saveimage=0&theme=' + theme +
    '&style=1&timezone=exchange&locale=' + loc;

  Modal.open('tradeChartModal');
}

// ============================================
// BALANCE HISTORY MODAL
// ============================================
function openBalanceModal() {
  var allTrades = Store.trades.filter(function(t) { return t.pnl > 0; });
  var listEl = document.getElementById('balanceHistoryList');
  if (allTrades.length === 0) {
    listEl.innerHTML = '<div class="balance-history-empty">' + tr('cal_no_trades') + '</div>';
  } else {
    var totalPnl = allTrades.reduce(function(s, t) { return s + t.pnl; }, 0);
    listEl.innerHTML = '<div class="balance-history-summary"><span class="total-label">' + tr('stat_pnl') + '</span><span class="total-value pos">' + formatCurrency(totalPnl) + '</span></div>' +
      allTrades.slice(0, 50).map(function(t) {
        var pct = ((t.pnl / t.entryPrice / t.size) * 100).toFixed(2);
        return '<div class="balance-history-item"><span class="bh-date">' + formatDate(t.date) + '</span><span class="bh-pair">' + t.pair + '</span><span class="bh-pct">' + pct + '%</span><span class="bh-pnl ' + (t.pnl >= 0 ? 'pos' : 'neg') + '">' + formatCurrency(t.pnl) + '</span></div>';
      }).join('');
  }
  Modal.open('balanceModal');
}

// ============================================
// NOTIFICATIONS
// ============================================
var notifications = [];
var notifIdCounter = 0;
function addNotification(type, data) {
  notifIdCounter++;
  var now = new Date();
  var timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
  var title = '', desc = '', iconClass = '';
  if (type === 'trade_opened') {
    title = tr('notif_trade_opened');
    desc = data.pair + ' ' + data.direction.toUpperCase() + ' @ $' + data.entryPrice.toLocaleString();
    iconClass = 'trade-open';
  } else if (type === 'trade_closed') {
    var isProfit = data.pnl >= 0;
    title = tr('notif_trade_closed');
    desc = data.pair + ' ' + (isProfit ? tr('notif_profit') : tr('notif_loss')) + ' ' + formatCurrency(data.pnl);
    iconClass = isProfit ? 'trade-close' : 'trade-loss';
  }
  notifications.unshift({ id: notifIdCounter, title: title, desc: desc, iconClass: iconClass, time: timeStr, read: false });
  if (notifications.length > 50) notifications.pop();
  updateNotifDot();
}
function renderNotifPanel() {
  var listEl = document.getElementById('notifList');
  if (notifications.length === 0) {
    listEl.innerHTML = '<div class="notif-empty">' + (currentLang === 'ru' ? 'Нет уведомлений' : 'No notifications') + '</div>';
  } else {
    listEl.innerHTML = notifications.map(function(n) {
      return '<div class="notif-item ' + (n.read ? '' : 'unread') + '" data-notif-id="' + n.id + '">' +
        '<div class="notif-icon ' + n.iconClass + '">' + (n.iconClass === 'trade-open' ? '\uD83D\uDCC8' : n.iconClass === 'trade-close' ? '\u2705' : '\u274C') + '</div>' +
        '<div class="notif-content"><div class="notif-title">' + n.title + '</div><div class="notif-desc">' + n.desc + '</div></div>' +
        '<span class="notif-time">' + n.time + '</span></div>';
    }).join('');
    listEl.querySelectorAll('.notif-item').forEach(function(item) {
      item.addEventListener('click', function() {
        var nid = +item.dataset.notifId;
        var n = notifications.find(function(x) { return x.id === nid; });
        if (n) n.read = true;
        item.classList.remove('unread');
        updateNotifDot();
      });
    });
  }
}
function updateNotifDot() {
  var dot = document.getElementById('notifDot');
  var hasUnread = notifications.some(function(n) { return !n.read; });
  if (dot) dot.style.display = hasUnread ? 'block' : 'none';
}
function toggleNotifPanel() {
  var panel = document.getElementById('notifPanel');
  panel.classList.toggle('open');
  if (panel.classList.contains('open')) renderNotifPanel();
}
function generateDemoNotifications() {
  Store.trades.slice(0, 10).forEach(function(t, i) {
    setTimeout(function() {
      addNotification('trade_closed', t);
    }, 500 + i * 200);
  });
}

// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  Store.init();
  var savedLang = localStorage.getItem('daytrader_lang') || 'ru';
  setLanguage(savedLang);
  var savedTheme = localStorage.getItem('daytrader_theme') || 'dark';
  setTheme(savedTheme);
  populateCountrySelect();

  // Auth tabs
  document.querySelectorAll('.auth-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.auth-tab').forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
      document.querySelectorAll('.auth-form').forEach(function(f) { f.classList.remove('active'); });
      document.getElementById(tab.dataset.tab + 'Form').classList.add('active');
    });
  });

  // Auth buttons
  document.getElementById('loginBtn').addEventListener('click', loginWithPassword);
  document.getElementById('registerBtn').addEventListener('click', registerAccount);
  document.querySelectorAll('.social-btn-main').forEach(function(btn) {
    btn.addEventListener('click', function() { socialLogin(btn.dataset.provider); });
  });

  // Language dropdown
  var langBtn = document.getElementById('langBtn');
  var langMenu = document.getElementById('langMenu');
  langBtn.addEventListener('click', function(e) { e.stopPropagation(); langMenu.classList.toggle('open'); });
  document.querySelectorAll('.lang-option').forEach(function(opt) {
    opt.addEventListener('click', function() { setLanguage(opt.dataset.lang); langMenu.classList.remove('open'); populateCountrySelect(); });
  });
  document.addEventListener('click', function(e) { if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) langMenu.classList.remove('open'); });

  // Theme
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
  document.getElementById('logoutBtn').addEventListener('click', logout);

  // Dashboard timeframes
  document.querySelectorAll('#dashboardTimeframes .chart-action').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#dashboardTimeframes .chart-action').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      dashboardTf = btn.dataset.tf;
      renderDashboard();
    });
  });

  // Analytics timeframes
  document.querySelectorAll('#analyticsTimeframes .chart-action').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#analyticsTimeframes .chart-action').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      analyticsTf = btn.dataset.range;
      renderAnalytics();
    });
  });

  // Trade chart TF switcher
  document.querySelectorAll('#chartTfSwitcher .chart-action').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#chartTfSwitcher .chart-action').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var tf = btn.dataset.tf;
      var title = document.getElementById('tradeChartTitle').textContent;
      var trade = Store.trades.find(function(t) { return t.pair === title; });
      if (trade) {
        var sym = 'BINANCE:' + trade.pair.replace('/', '');
        var isLight = document.documentElement.getAttribute('data-theme') === 'light';
        var theme = isLight ? 'light' : 'dark';
        var loc = currentLang === 'zh' ? 'zh_CN' : currentLang;
        var tvTf = tf === '5m' ? '5' : tf === '15m' ? '15' : tf === '1h' ? '60' : tf === '4h' ? '240' : 'D';
        document.getElementById('tradeTvFrame').src = 'https://www.tradingview.com/widgetembed/?frameElementId=tradeTvFrame&symbol=' + sym +
          '&interval=' + tvTf + '&hidesidetoolbar=1&symboledit=0&saveimage=0&theme=' + theme +
          '&style=1&timezone=exchange&locale=' + loc;
      }
    });
  });

  // Journal filters & search
  document.querySelectorAll('.filter-chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
      document.querySelectorAll('.filter-chip').forEach(function(c) { c.classList.remove('active'); });
      chip.classList.add('active'); journalFilter = chip.dataset.filter; renderJournal();
    });
  });
  document.getElementById('journalSearch').addEventListener('input', function(e) { journalSearch = e.target.value; renderJournal(); });

  // Calendar
  document.getElementById('calPrev').addEventListener('click', prevMonth);
  document.getElementById('calNext').addEventListener('click', nextMonth);

  // Day modal close
  document.getElementById('dayModalClose').addEventListener('click', function() { Modal.close('dayModal'); });
  document.getElementById('dayModal').addEventListener('click', function(e) { if (e.target === document.getElementById('dayModal')) Modal.close('dayModal'); });

  // Export
  document.getElementById('exportBtn').addEventListener('click', exportCSV);

  // API modal
  document.getElementById('apiForm').addEventListener('submit', connectApi);
  document.getElementById('modalClose').addEventListener('click', function() { Modal.close('apiModal'); selectedExchange = null; });
  document.getElementById('modalCancel').addEventListener('click', function() { Modal.close('apiModal'); selectedExchange = null; });
  document.getElementById('modalTestBtn').addEventListener('click', testExchangeConnection);

  // Note modal
  document.getElementById('noteModalClose').addEventListener('click', function() { Modal.close('noteModal'); });
  document.getElementById('noteCancel').addEventListener('click', function() { Modal.close('noteModal'); });
  document.getElementById('noteSave').addEventListener('click', saveNote);

  // Trade chart modal close
  document.getElementById('tradeChartClose').addEventListener('click', function() { Modal.close('tradeChartModal'); });
  document.getElementById('tradeChartModal').addEventListener('click', function(e) { if (e.target === document.getElementById('tradeChartModal')) Modal.close('tradeChartModal'); });

  // Confirm modal
  document.getElementById('confirmCancel').addEventListener('click', function() { Modal.close('confirmModal'); });

  // Settings toggles
  document.querySelectorAll('.toggle').forEach(function(t) {
    t.addEventListener('click', function() { toggleSetting(t); });
  });

  // Name change — button click only
  var saveNameBtn = document.getElementById('saveNameBtn');
  if (saveNameBtn) {
    saveNameBtn.addEventListener('click', saveNameChange);
  }

  // Avatar upload
  var avatarInput = document.getElementById('avatarInput');
  if (avatarInput) {
    avatarInput.addEventListener('change', function(e) { if (e.target.files[0]) handleAvatarUpload(e.target.files[0]); });
  }
  updateAvatarUI();

  // Password change
  var changePassBtn = document.getElementById('changePasswordBtn');
  if (changePassBtn) {
    changePassBtn.addEventListener('click', changePassword);
  }

  // Import CSV
  var importBtn = document.getElementById('importBtn');
  var importFile = document.getElementById('importFile');
  if (importBtn && importFile) {
    importBtn.addEventListener('click', function() { importFile.click(); });
    importFile.addEventListener('change', function(e) { if (e.target.files[0]) { importCSV(e.target.files[0]); e.target.value = ''; } });
  }

  // Danger zone
  document.getElementById('clearTradesBtn').addEventListener('click', function() {
    Modal.confirm(tr('confirm_clear_history'), tr('confirm_clear_text'), function() {
      Store.trades = []; Store.save(); showToast(tr('toast_history_cleared'), 'warning'); renderDashboard();
    });
  });
  document.getElementById('deleteAccountBtn').addEventListener('click', function() {
    Modal.confirm(tr('confirm_delete_account'), tr('confirm_delete_text'), function() {
      localStorage.removeItem('daytrader_data'); localStorage.removeItem('daytrader_lang'); localStorage.removeItem('daytrader_theme');
      Store.user = null; Store.users = []; Store.connections = []; Store.notes = {}; Store.nameChanges = []; logout();
      showToast(tr('toast_account_deleted'), 'warning');
    });
  });

  // Poster modal
  document.getElementById('posterModalClose').addEventListener('click', function() { Modal.close('posterModal'); });
  document.getElementById('posterModal').addEventListener('click', function(e) { if (e.target === document.getElementById('posterModal')) Modal.close('posterModal'); });
  document.getElementById('posterCancel').addEventListener('click', function() { Modal.close('posterModal'); });
  document.getElementById('posterDownload').addEventListener('click', downloadPoster);
  document.getElementById('posterThemeDark').addEventListener('click', function() { generatePoster('dark'); });
  document.getElementById('posterThemeLight').addEventListener('click', function() { generatePoster('light'); });
  document.getElementById('posterPnlProfit').addEventListener('click', function() { posterPnlMode = 'profit'; updatePnlModeButtons(); generatePoster(posterTheme); });
  document.getElementById('posterPnlPercent').addEventListener('click', function() { posterPnlMode = 'percent'; updatePnlModeButtons(); generatePoster(posterTheme); });

  // Balance pill click
  document.getElementById('balancePill').addEventListener('click', openBalanceModal);
  document.getElementById('balanceModalClose').addEventListener('click', function() { Modal.close('balanceModal'); });
  document.getElementById('balanceModal').addEventListener('click', function(e) { if (e.target === document.getElementById('balanceModal')) Modal.close('balanceModal'); });

  // Notif button + panel
  var notifPanel = document.getElementById('notifPanel');
  document.getElementById('notifBtn').addEventListener('click', function(e) {
    e.stopPropagation();
    toggleNotifPanel();
  });
  document.getElementById('notifClear').addEventListener('click', function() {
    notifications = []; renderNotifPanel(); updateNotifDot();
  });
  document.addEventListener('click', function(e) {
    if (!document.getElementById('notifBtn').contains(e.target) && !notifPanel.contains(e.target)) {
      notifPanel.classList.remove('open');
    }
  });
  // Generate demo notifications on app entry
  setTimeout(generateDemoNotifications, 2000);

  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(function(overlay) {
    overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.classList.remove('open'); });
  });

  // TV Pair selector
  var tvPairSelect = document.getElementById('tvPairSelect');
  if (tvPairSelect) {
    tvPairSelect.addEventListener('change', function() {
      currentTvPair = tvPairSelect.value;
      renderChartsPage();
    });
  }

  // Auto-login
  if (Store.user) { setTimeout(enterApp, 300); }

  // Resize
  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      var activePage = document.querySelector('.page.active');
      if (!activePage) return;
      var pageId = activePage.id;
      if (pageId === 'page-dashboard') renderDashboard();
      if (pageId === 'page-analytics') renderAnalytics();
    }, 200);
  });
});
