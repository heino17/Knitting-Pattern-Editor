/*
  DMC-Farbtabelle bearbeiten – Sprachdatei
  Copyright (C) 2026 heino17
  https://github.com/heino17/Knitting-Pattern-Editor

  Eigenständige Sprachdatei, getrennt von lang.js (der Hauptanwendung),
  weil edit_dmc_colors.html ein unabhängiges, unverlinktes Zusatz-Tool ist.
  Aus dem gleichen Grund eigener Namensraum (EDIT_DMC_I18N statt I18N),
  damit es keine Kollision gäbe, sollten beide Dateien je zusammen
  geladen werden.

  Neue Sprache hinzufügen:
  1. Neuen Eintrag nach dem Vorbild von "en" anlegen (alle Keys kopieren).
  2. Alle Werte übersetzen.
  3. In edit_dmc_colors.html im <select id="langSelect"> eine <option> ergänzen.
  4. In EDIT_DMC_I18N_AVAILABLE weiter unten den Code ergänzen.
*/

// ==========================================================
// Start-Sprache
// ==========================================================
// Wird verwendet, wenn im Browser noch keine eigene Sprachwahl für dieses
// Tool gespeichert ist. In diesem Fall wird zuerst versucht, die zuletzt in
// strickmuster.html gewählte Sprache zu übernehmen (siehe detectInitialLang()
// in edit_dmc_colors.html); erst wenn auch die fehlt, greift dieser Wert.
const EDIT_DMC_STARTUP_LANGUAGE_CODE = "de";

const EDIT_DMC_I18N = {

  de: {
    meta_title: "DMC-Farbtabelle bearbeiten",
    heading: "🧵 DMC-Farbtabelle bearbeiten",
    intro: "Einzelne Garnfarben aktivieren oder deaktivieren, dann als dmc_colors.js speichern und die bestehende Datei im Editor-Ordner damit ersetzen.",
    search_placeholder: "Suchen nach Nummer oder Name…",
    lang_select_aria: "Sprache wählen",
    activate_all_btn: "Alle aktivieren",
    deactivate_all_btn: "Alle deaktivieren",
    status_active: "aktiv",
    empty_hint: "Keine Farben gefunden.",
    load_error_hint: "dmc_colors.js konnte nicht geladen werden – liegt sie im selben Ordner wie diese Seite?",
    save_btn: "💾 dmc_colors.js speichern",
    save_hint: "Der Browser lädt die Datei herunter (meist in den Downloads-Ordner). Anschließend die alte dmc_colors.js im Editor-Ordner damit überschreiben.",
    toast_activated_filtered: "Gefilterte Farben aktiviert",
    toast_activated_all: "Alle Farben aktiviert",
    toast_deactivated_filtered: "Gefilterte Farben deaktiviert",
    toast_deactivated_all: "Alle Farben deaktiviert",
    toast_saved: "dmc_colors.js wurde heruntergeladen",
    code_prefix: "DMC",
  },

  en: {
    meta_title: "Edit DMC Color Table",
    heading: "🧵 Edit DMC Color Table",
    intro: "Activate or deactivate individual thread colors, then save as dmc_colors.js and replace the existing file in the editor folder with it.",
    search_placeholder: "Search by number or name…",
    lang_select_aria: "Select language",
    activate_all_btn: "Activate all",
    deactivate_all_btn: "Deactivate all",
    status_active: "active",
    empty_hint: "No colors found.",
    load_error_hint: "dmc_colors.js could not be loaded – is it in the same folder as this page?",
    save_btn: "💾 Save dmc_colors.js",
    save_hint: "The browser will download the file (usually to your Downloads folder). Then overwrite the old dmc_colors.js in the editor folder with it.",
    toast_activated_filtered: "Filtered colors activated",
    toast_activated_all: "All colors activated",
    toast_deactivated_filtered: "Filtered colors deactivated",
    toast_deactivated_all: "All colors deactivated",
    toast_saved: "dmc_colors.js has been downloaded",
    code_prefix: "DMC",
  },

  ru: {
    meta_title: "Редактировать таблицу цветов DMC",
    heading: "🧵 Редактировать таблицу цветов DMC",
    intro: "Включайте или отключайте отдельные цвета ниток, затем сохраните как dmc_colors.js и замените этим файлом старый файл в папке редактора.",
    search_placeholder: "Поиск по номеру или названию…",
    lang_select_aria: "Выбрать язык",
    activate_all_btn: "Включить все",
    deactivate_all_btn: "Отключить все",
    status_active: "активно",
    empty_hint: "Цвета не найдены.",
    load_error_hint: "Не удалось загрузить dmc_colors.js – находится ли он в той же папке, что и эта страница?",
    save_btn: "💾 Сохранить dmc_colors.js",
    save_hint: "Браузер загрузит файл (обычно в папку «Загрузки»). Затем замените им старый dmc_colors.js в папке редактора.",
    toast_activated_filtered: "Отфильтрованные цвета включены",
    toast_activated_all: "Все цвета включены",
    toast_deactivated_filtered: "Отфильтрованные цвета отключены",
    toast_deactivated_all: "Все цвета отключены",
    toast_saved: "Файл dmc_colors.js загружен",
    code_prefix: "DMC",
  },

  es: {
    meta_title: "Editar tabla de colores DMC",
    heading: "🧵 Editar tabla de colores DMC",
    intro: "Activa o desactiva colores de hilo individuales y luego guarda como dmc_colors.js para reemplazar el archivo existente en la carpeta del editor.",
    search_placeholder: "Buscar por número o nombre…",
    lang_select_aria: "Seleccionar idioma",
    activate_all_btn: "Activar todos",
    deactivate_all_btn: "Desactivar todos",
    status_active: "activos",
    empty_hint: "No se encontraron colores.",
    load_error_hint: "No se pudo cargar dmc_colors.js – ¿está en la misma carpeta que esta página?",
    save_btn: "💾 Guardar dmc_colors.js",
    save_hint: "El navegador descargará el archivo (normalmente a la carpeta de Descargas). Luego reemplaza con él el antiguo dmc_colors.js en la carpeta del editor.",
    toast_activated_filtered: "Colores filtrados activados",
    toast_activated_all: "Todos los colores activados",
    toast_deactivated_filtered: "Colores filtrados desactivados",
    toast_deactivated_all: "Todos los colores desactivados",
    toast_saved: "Se descargó dmc_colors.js",
    code_prefix: "DMC",
  },

  fr: {
    meta_title: "Modifier la table de couleurs DMC",
    heading: "🧵 Modifier la table de couleurs DMC",
    intro: "Activez ou désactivez des couleurs de fil individuelles, puis enregistrez sous dmc_colors.js et remplacez le fichier existant dans le dossier de l'éditeur.",
    search_placeholder: "Rechercher par numéro ou nom…",
    lang_select_aria: "Choisir la langue",
    activate_all_btn: "Tout activer",
    deactivate_all_btn: "Tout désactiver",
    status_active: "actives",
    empty_hint: "Aucune couleur trouvée.",
    load_error_hint: "Impossible de charger dmc_colors.js – se trouve-t-il dans le même dossier que cette page ?",
    save_btn: "💾 Enregistrer dmc_colors.js",
    save_hint: "Le navigateur téléchargera le fichier (généralement dans le dossier Téléchargements). Remplacez ensuite l'ancien dmc_colors.js du dossier de l'éditeur par celui-ci.",
    toast_activated_filtered: "Couleurs filtrées activées",
    toast_activated_all: "Toutes les couleurs activées",
    toast_deactivated_filtered: "Couleurs filtrées désactivées",
    toast_deactivated_all: "Toutes les couleurs désactivées",
    toast_saved: "dmc_colors.js a été téléchargé",
    code_prefix: "DMC",
  },

  ja: {
    meta_title: "DMCカラーテーブルを編集",
    heading: "🧵 DMCカラーテーブルを編集",
    intro: "各刺繍糸の色を有効・無効に切り替えてから、dmc_colors.js として保存し、エディターフォルダ内の既存ファイルを置き換えてください。",
    search_placeholder: "番号または名前で検索…",
    lang_select_aria: "言語を選択",
    activate_all_btn: "すべて有効にする",
    deactivate_all_btn: "すべて無効にする",
    status_active: "有効",
    empty_hint: "色が見つかりません。",
    load_error_hint: "dmc_colors.js を読み込めませんでした – このページと同じフォルダにありますか？",
    save_btn: "💾 dmc_colors.js を保存",
    save_hint: "ブラウザがファイルをダウンロードします（通常はダウンロードフォルダ）。その後、エディターフォルダ内の古い dmc_colors.js をこれで置き換えてください。",
    toast_activated_filtered: "絞り込んだ色を有効にしました",
    toast_activated_all: "すべての色を有効にしました",
    toast_deactivated_filtered: "絞り込んだ色を無効にしました",
    toast_deactivated_all: "すべての色を無効にしました",
    toast_saved: "dmc_colors.js をダウンロードしました",
    code_prefix: "DMC",
  },

  ko: {
    meta_title: "DMC 색상표 편집",
    heading: "🧵 DMC 색상표 편집",
    intro: "개별 실 색상을 활성화 또는 비활성화한 다음 dmc_colors.js로 저장하여 편집기 폴더의 기존 파일을 교체하세요.",
    search_placeholder: "번호 또는 이름으로 검색…",
    lang_select_aria: "언어 선택",
    activate_all_btn: "모두 활성화",
    deactivate_all_btn: "모두 비활성화",
    status_active: "활성",
    empty_hint: "색상을 찾을 수 없습니다.",
    load_error_hint: "dmc_colors.js를 불러올 수 없습니다 – 이 페이지와 같은 폴더에 있나요?",
    save_btn: "💾 dmc_colors.js 저장",
    save_hint: "브라우저가 파일을 다운로드합니다(보통 다운로드 폴더). 이후 편집기 폴더의 기존 dmc_colors.js를 이것으로 교체하세요.",
    toast_activated_filtered: "필터링된 색상을 활성화했습니다",
    toast_activated_all: "모든 색상을 활성화했습니다",
    toast_deactivated_filtered: "필터링된 색상을 비활성화했습니다",
    toast_deactivated_all: "모든 색상을 비활성화했습니다",
    toast_saved: "dmc_colors.js가 다운로드되었습니다",
    code_prefix: "DMC",
  },

  zh_CN: {
    meta_title: "编辑 DMC 色卡",
    heading: "🧵 编辑 DMC 色卡",
    intro: "启用或禁用单个绣线颜色，然后另存为 dmc_colors.js，并用它替换编辑器文件夹中的旧文件。",
    search_placeholder: "按编号或名称搜索…",
    lang_select_aria: "选择语言",
    activate_all_btn: "全部启用",
    deactivate_all_btn: "全部禁用",
    status_active: "已启用",
    empty_hint: "未找到颜色。",
    load_error_hint: "无法加载 dmc_colors.js – 它是否与此页面位于同一文件夹？",
    save_btn: "💾 保存 dmc_colors.js",
    save_hint: "浏览器将下载该文件（通常在下载文件夹中）。然后用它替换编辑器文件夹中旧的 dmc_colors.js。",
    toast_activated_filtered: "已启用筛选出的颜色",
    toast_activated_all: "已启用所有颜色",
    toast_deactivated_filtered: "已禁用筛选出的颜色",
    toast_deactivated_all: "已禁用所有颜色",
    toast_saved: "dmc_colors.js 已下载",
    code_prefix: "DMC",
  },

};

const EDIT_DMC_I18N_AVAILABLE = ['de', 'en', 'ru', 'es', 'fr', 'ja', 'ko', 'zh_CN'];
