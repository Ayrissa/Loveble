// Loveble — языки любви и проявление привязанности: генератор записей лорбука для SillyTavern.

/* ═══ i18n ═══ */
const D = {
    ru: {
        title: 'Loveble', subtitle: 'Языки любви и проявление привязанности',
        tabCreate: 'Создание', tabSettings: 'Настройки', close: 'Закрыть',
        forWhom: 'Для кого', tChar: 'Персонаж', tUser: 'Юзер',
        name: 'Имя', nameChPh: 'Имя персонажа (прозвища через запятую)', nameUserPh: 'Имя персоны (прозвища через запятую)',
        nameHint: 'Имя и прозвища станут ключами записей лорбука.',
        context: 'Описание и заметки',
        contextPh: 'Что известно о человеке: характер, прошлое, манера общения, что важно учесть. Можно коротко: ИИ додумает остальное.',
        pull: 'Подтянуть из карточки', pullUser: 'Подтянуть из персоны',
        pullNone: 'Описание не найдено', pulled: 'Описание добавлено',
        adult: 'Совершеннолетний (18+)',
        adultNote: 'Раздел «Сексуальность» доступен только для совершеннолетних: отметь галочку выше.',
        sections: 'Разделы',
        'sec.lovelang': 'Язык любви', 'sec.openness': 'Открытость чувств', 'sec.physical': 'Физическое проявление',
        'sec.sexuality': 'Сексуальность', 'sec.relstyle': 'Построение отношений', 'sec.breakup': 'Расставания',
        generate: 'Сгенерировать', cancel: 'Отмена',
        generating: 'Генерирую…', completing: 'Дописываю раздел: {list}…', regenerating: 'Перегенерирую раздел…', done: 'Готово',
        empty: 'Здесь появятся записи лорбука. Выбери разделы и нажми «Сгенерировать».',
        secKeys: 'Ключи', secKeysPh: 'через запятую', secWish: 'Пожелание (необязательно)', secRegen: 'Перегенерировать', secGen: 'Сгенерировать',
        tok: '{n} ток.', total: 'Итого: {n} токенов, записей: {m}',
        bookName: 'Лорбук', bookAuto: 'Авто: {name}',
        copy: 'Копировать', copied: 'Скопировано', exportJson: 'Экспорт JSON', createBook: 'Создать лорбук',
        created: 'Лорбук «{book}» сохранён, записей: {n}',
        errNoProfile: 'Не выбран профиль подключения. Выбери его на вкладке «Настройки» или в Connection Manager.',
        errNoService: 'Connection Manager недоступен. Включи его в Extensions → Manage extensions.',
        errName: 'Укажи имя.', errNoSections: 'Выбери хотя бы один раздел.', errNothing: 'Сначала сгенерируй записи.',
        errParse: 'Не удалось разобрать ответ модели. Попробуй ещё раз.',
        errMissing: 'Разделы пропущены или обрезаны: {list}. Нажми «Сгенерировать» у нужного раздела.',
        errFailed: 'Ошибка запроса: {msg}', errBook: 'Не удалось сохранить лорбук: {msg}', cancelled: 'Отменено',
        gGeneral: 'Основное', gGen: 'Генерация', gBook: 'Лорбук', gTheme: 'Тема',
        sLang: 'Язык интерфейса',
        sProfile: 'Профиль подключения', sProfileCur: '— Текущий профиль Таверны —',
        sProfileNote: 'Используются только профили Connection Manager. Ключи API расширение не видит.',
        sWords: 'Размер записи (слов)', sMax: 'Лимит ответа модели (токены)',
        sCreativity: 'Свобода додумывания', cStrict: 'Строго', cBalanced: 'Баланс', cFree: 'Смело',
        cStrictH: 'Только то, что следует из описания.', cBalancedH: 'Заполняет пробелы правдоподобными деталями.', cFreeH: 'Смелые детали, противоречия, яркие привычки.',
        sKeysLang: 'Язык ключей', kEn: 'Английский', kRu: 'Русский', kBoth: 'Оба языка',
        sTrigger: 'Когда срабатывает запись',
        trSel: 'Имя + тема (избирательно)', trTopic: 'Только тема', trName: 'Только имя', trAlways: 'Всегда включена',
        trSelH: 'Запись подключается, когда в тексте есть и имя, и слово по теме раздела.',
        trTopicH: 'Только слова по теме раздела, имя не нужно.',
        trNameH: 'Все записи подключаются, когда упомянуто имя.',
        trAlwaysH: 'Записи постоянно в контексте (тратят токены всегда).',
        sPosition: 'Позиция в промпте', posBefore: '↑ Перед описанием персонажа', posAfter: '↓ После описания персонажа',
        sAttach: 'Привязывать лорбук к карточке персонажа',
        sAttachH: 'Лорбук подключается к карточке как дополнительный (Additional Lorebooks). Работает для «Персонажа», найденного в Таверне. Основной лорбук карточки не затрагивается.',
        attached: 'Привязан к карточке «{name}» как дополнительный.',
        attachAlready: 'Уже привязан к карточке «{name}».',
        attachPrimary: 'Это основной лорбук карточки «{name}», привязка не нужна.',
        attachNone: 'Персонаж «{name}» не найден в Таверне: лорбук создан без привязки.',
        attachFail: 'Лорбук создан, но привязать не удалось. Подключи его вручную: карточка → Additional Lorebooks.',
        sPattern: 'Шаблон названия лорбука', sPatternH: '{name} заменяется на имя. Одинаковое название у разных людей кладёт их в один лорбук.',
        thBlush: 'Румянец', thSage: 'Шалфей', thSky: 'Небо', thLagoon: 'Лагуна', thAuto: 'Авто',
        thAutoH: 'Авто подстраивается под цвета текущей темы Таверны.',
        sOpen: 'Открыть Loveble', extDesc: 'Языки любви и проявление привязанности: записи лорбука для персонажей и юзера.',
    },
    en: {
        title: 'Loveble', subtitle: 'Love languages & affection',
        tabCreate: 'Create', tabSettings: 'Settings', close: 'Close',
        forWhom: 'For whom', tChar: 'Character', tUser: 'User',
        name: 'Name', nameChPh: 'Character name (nicknames separated by commas)', nameUserPh: 'Persona name (nicknames separated by commas)',
        nameHint: 'The name and nicknames become the lorebook keys.',
        context: 'Description and notes',
        contextPh: 'What is known about the person: personality, past, communication style, anything to keep. Short is fine, the AI fills in the rest.',
        pull: 'Pull from card', pullUser: 'Pull from persona',
        pullNone: 'No description found', pulled: 'Description added',
        adult: 'Adult (18+)',
        adultNote: 'The Sexuality section is only available for adults: tick the box above.',
        sections: 'Sections',
        'sec.lovelang': 'Love language', 'sec.openness': 'Emotional openness', 'sec.physical': 'Physical affection',
        'sec.sexuality': 'Sexuality', 'sec.relstyle': 'Relationship style', 'sec.breakup': 'Breakups',
        generate: 'Generate', cancel: 'Cancel',
        generating: 'Generating…', completing: 'Completing section: {list}…', regenerating: 'Regenerating section…', done: 'Done',
        empty: 'Lorebook entries will appear here. Pick sections and press "Generate".',
        secKeys: 'Keys', secKeysPh: 'comma-separated', secWish: 'Instruction (optional)', secRegen: 'Regenerate', secGen: 'Generate',
        tok: '{n} tok.', total: 'Total: {n} tokens, entries: {m}',
        bookName: 'Lorebook', bookAuto: 'Auto: {name}',
        copy: 'Copy', copied: 'Copied', exportJson: 'Export JSON', createBook: 'Create lorebook',
        created: 'Lorebook "{book}" saved, entries: {n}',
        errNoProfile: 'No connection profile selected. Pick one in the Settings tab or in Connection Manager.',
        errNoService: 'Connection Manager is unavailable. Enable it in Extensions → Manage extensions.',
        errName: 'Enter a name.', errNoSections: 'Pick at least one section.', errNothing: 'Generate the entries first.',
        errParse: 'Could not parse the model response. Try again.',
        errMissing: 'Sections skipped or cut off: {list}. Press "Generate" on the section you need.',
        errFailed: 'Request failed: {msg}', errBook: 'Could not save the lorebook: {msg}', cancelled: 'Cancelled',
        gGeneral: 'General', gGen: 'Generation', gBook: 'Lorebook', gTheme: 'Theme',
        sLang: 'Interface language',
        sProfile: 'Connection profile', sProfileCur: '— Current SillyTavern profile —',
        sProfileNote: 'Only Connection Manager profiles are used. The extension never sees API keys.',
        sWords: 'Entry size (words)', sMax: 'Model response limit (tokens)',
        sCreativity: 'Creative freedom', cStrict: 'Strict', cBalanced: 'Balanced', cFree: 'Bold',
        cStrictH: 'Only what follows from the description.', cBalancedH: 'Fills gaps with plausible details.', cFreeH: 'Bold details, contradictions, vivid habits.',
        sKeysLang: 'Keys language', kEn: 'English', kRu: 'Russian', kBoth: 'Both',
        sTrigger: 'When an entry fires',
        trSel: 'Name + topic (selective)', trTopic: 'Topic only', trName: 'Name only', trAlways: 'Always on',
        trSelH: 'The entry fires when the text has both the name and a topic word of the section.',
        trTopicH: 'Only topic words of the section, no name needed.',
        trNameH: 'All entries fire when the name is mentioned.',
        trAlwaysH: 'Entries are always in context (always spend tokens).',
        sPosition: 'Prompt position', posBefore: '↑ Before character definitions', posAfter: '↓ After character definitions',
        sAttach: 'Attach the lorebook to the character card',
        sAttachH: 'The lorebook is linked to the card as an additional one (Additional Lorebooks). Works for a "Character" found in SillyTavern. The card\'s primary lorebook is not touched.',
        attached: 'Attached to the card "{name}" as an additional lorebook.',
        attachAlready: 'Already attached to the card "{name}".',
        attachPrimary: 'This is already the primary lorebook of "{name}", no attaching needed.',
        attachNone: 'Character "{name}" was not found in SillyTavern: the lorebook was created without attaching.',
        attachFail: 'The lorebook was created, but attaching failed. Link it manually: card → Additional Lorebooks.',
        sPattern: 'Lorebook name pattern', sPatternH: '{name} is replaced with the name. The same name for different people puts them into one lorebook.',
        thBlush: 'Blush', thSage: 'Sage', thSky: 'Sky', thLagoon: 'Lagoon', thAuto: 'Auto',
        thAutoH: 'Auto follows the colors of the current SillyTavern theme.',
        sOpen: 'Open Loveble', extDesc: 'Love languages and affection: lorebook entries for characters and the user.',
    },
};

let LANG = 'ru';
const setLang = (l) => { LANG = D[l] ? l : 'ru'; };
function t(key, vars = {}) {
    let s = D[LANG][key] ?? D.ru[key] ?? key;
    for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
    return s;
}

/* ═══ styles (встроены в файл) ═══ */
const LV_CSS = "/* Loveble */\nbody.lv-lock { overflow: hidden; }\n\n/* ── Темы (палитра: Vanilla Cream, Blush Petal, Rosewood, Sage Leaf, Misty Sky, Midnight Lagoon) ── */\n.lv-overlay {\n    --lv-bg: #FFF7E6; --lv-panel: #FCEBEC; --lv-field: #FFFDF8; --lv-text: #5A3A3F; --lv-muted: #9A6B72;\n    --lv-accent: #B46A72; --lv-on-accent: #FFF7E6; --lv-line: rgba(180, 106, 114, .28); --lv-err: #B3261E;\n    --lv-blob: #F7C8D3;\n    --lv-font: \"DM Sans\", \"Poppins\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif;\n    --lv-serif: \"Fraunces\", \"Playfair Display\", \"Recoleta\", Georgia, \"Times New Roman\", serif;\n}\n.lv-overlay[data-theme=\"sage\"]   { --lv-bg: #F3F5E8; --lv-panel: #E5EAD3; --lv-field: #FBFCF5; --lv-text: #3F4A2C; --lv-muted: #6F7B58; --lv-accent: #6F8050; --lv-on-accent: #FFFFFF; --lv-line: rgba(111, 128, 80, .3); --lv-blob: #A8B58A; }\n.lv-overlay[data-theme=\"sky\"]    { --lv-bg: #F1F4F8; --lv-panel: #DFE6EE; --lv-field: #FAFBFD; --lv-text: #2D3A47; --lv-muted: #5F7488; --lv-accent: #55718E; --lv-on-accent: #FFFFFF; --lv-line: rgba(85, 113, 142, .3); --lv-blob: #A9B7C6; }\n.lv-overlay[data-theme=\"lagoon\"] { --lv-bg: #2D3A47; --lv-panel: #384858; --lv-field: #31404F; --lv-text: #F6EEE3; --lv-muted: #B9C4D0; --lv-accent: #F7C8D3; --lv-on-accent: #2D3A47; --lv-line: rgba(247, 200, 211, .28); --lv-err: #FFB4B4; --lv-blob: #B46A72; }\n.lv-overlay[data-theme=\"auto\"] {\n    --lv-bg: var(--SmartThemeBlurTintColor, #17171d);\n    --lv-text: var(--SmartThemeBodyColor, #ecebf2);\n    --lv-accent: var(--SmartThemeQuoteColor, #a07cf0);\n    --lv-panel: color-mix(in srgb, var(--lv-text) 9%, var(--lv-bg));\n    --lv-field: color-mix(in srgb, var(--lv-text) 6%, var(--lv-bg));\n    --lv-muted: color-mix(in srgb, var(--lv-text) 65%, var(--lv-bg));\n    --lv-on-accent: #fff; --lv-err: #ff8a8a; --lv-blob: var(--lv-accent);\n    --lv-line: color-mix(in srgb, var(--lv-accent) 35%, transparent);\n}\n\n.lv-overlay {\n    position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 9000;\n    display: none; align-items: center; justify-content: center;\n    background: rgba(60, 30, 36, .5);\n    font-family: var(--lv-font);\n}\n.lv-overlay.lv-open { display: flex; }\n.lv-overlay *, .lv-overlay *::before, .lv-overlay *::after { box-sizing: border-box; }\n\n.lv-window {\n    position: relative;\n    width: min(1060px, 96vw); height: min(92vh, 940px);\n    display: flex; flex-direction: column; max-width: 100%;\n    background:\n        radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--lv-blob) 38%, transparent) 0 16%, transparent 17%),\n        radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--lv-blob) 26%, transparent) 0 11%, transparent 12%),\n        linear-gradient(var(--lv-bg), var(--lv-bg)), #FFF7E6;\n    color: var(--lv-text);\n    border-radius: 22px; overflow: hidden;\n    box-shadow: 0 14px 50px rgba(90, 40, 50, .35);\n    font-size: 15px;\n}\n\n.lv-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 14px 18px 8px; }\n.lv-title { display: flex; align-items: center; gap: 12px; min-width: 0; }\n.lv-title > i { font-size: 26px; color: var(--lv-accent); filter: drop-shadow(0 2px 6px color-mix(in srgb, var(--lv-accent) 45%, transparent)); }\n.lv-brand { font-family: var(--lv-serif); font-weight: 700; font-size: 1.7em; line-height: 1.1; color: var(--lv-accent); text-shadow: 0 2px 10px color-mix(in srgb, var(--lv-accent) 30%, transparent); }\n.lv-sub { font-size: .82em; color: var(--lv-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n\n.lv-tabs { display: flex; gap: 6px; padding: 4px 16px 10px; }\n.lv-tab {\n    display: inline-flex; align-items: center; gap: 8px; min-width: 0;\n    background: transparent; color: var(--lv-muted); border: 1px solid transparent;\n    padding: 8px 16px; border-radius: 999px; cursor: pointer; font: inherit; font-weight: 600; font-size: .93em;\n}\n.lv-tab:hover { background: color-mix(in srgb, var(--lv-accent) 10%, transparent); }\n.lv-tab.lv-active { background: var(--lv-accent); color: var(--lv-on-accent); }\n.lv-tab span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n\n.lv-view { display: none; flex: 1; min-height: 0; min-width: 0; flex-direction: column; }\n.lv-view.lv-active { display: flex; }\n\n.lv-body {\n    flex: 1; min-height: 0; overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain;\n    display: grid; grid-template-columns: minmax(290px, 38%) minmax(0, 1fr);\n    gap: 16px; padding: 6px 18px 16px; align-items: start;\n}\n.lv-col { display: flex; flex-direction: column; gap: 9px; min-width: 0; }\n.lv-card, .lv-field, .lv-group { min-width: 0; }\n\n.lv-label { font-weight: 700; font-size: .9em; color: var(--lv-muted); margin-top: 4px; }\n.lv-note { font-size: .8em; color: var(--lv-muted); }\n\n.lv-ta, .lv-input-line, .lv-select {\n    width: 100%; background: var(--lv-field); color: var(--lv-text);\n    border: 1px solid var(--lv-line); border-radius: 14px; padding: 9px 13px;\n    font: inherit; font-size: 16px; line-height: 1.45;\n}\n.lv-ta { resize: vertical; }\n.lv-select { max-width: 100%; text-overflow: ellipsis; }\n.lv-ta:focus, .lv-input-line:focus, .lv-select:focus { outline: none; border-color: var(--lv-accent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--lv-accent) 18%, transparent); }\n.lv-ta-sec { resize: none; overflow: hidden; font-size: 14px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }\n.lv-input-line::placeholder, .lv-ta::placeholder { color: color-mix(in srgb, var(--lv-muted) 70%, transparent); }\n\n.lv-row { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }\n.lv-btn, .lv-icon-btn {\n    display: inline-flex; align-items: center; justify-content: center; gap: 7px;\n    background: var(--lv-field); color: var(--lv-accent); font: inherit; font-weight: 600; font-size: .94em;\n    border: 1.5px solid var(--lv-accent); border-radius: 999px; padding: 9px 18px; min-height: 42px; cursor: pointer;\n    transition: background .15s, transform .05s;\n}\n.lv-btn:hover:not(:disabled) { background: color-mix(in srgb, var(--lv-accent) 14%, var(--lv-field)); }\n.lv-btn:active:not(:disabled) { transform: scale(.97); }\n.lv-btn:disabled, .lv-icon-btn:disabled { opacity: .45; cursor: not-allowed; }\n.lv-btn[hidden] { display: none; }\n.lv-primary { background: var(--lv-accent); color: var(--lv-on-accent); }\n.lv-primary:hover:not(:disabled) { background: color-mix(in srgb, var(--lv-accent) 88%, #fff); }\n.lv-danger { color: var(--lv-err); border-color: var(--lv-err); }\n.lv-small { padding: 5px 14px; min-height: 36px; }\n.lv-icon-btn { border: none; background: transparent; padding: 6px 12px; min-height: 38px; }\n.lv-status { min-height: 1.3em; font-size: .9em; color: var(--lv-accent); }\n.lv-status.lv-err { color: var(--lv-err); }\n.lv-check { display: flex; align-items: flex-start; gap: 9px; font-size: .92em; cursor: pointer; }\n.lv-check input { margin-top: 3px; accent-color: var(--lv-accent); }\n\n/* Выбор «для кого» */\n.lv-seg { display: grid; grid-template-columns: 1fr 1fr; padding: 4px; gap: 4px; background: var(--lv-panel); border-radius: 999px; }\n.lv-seg button {\n    display: flex; align-items: center; justify-content: center; gap: 8px; min-width: 0;\n    border: none; background: transparent; color: var(--lv-muted); font: inherit; font-weight: 700;\n    padding: 9px 10px; border-radius: 999px; cursor: pointer;\n}\n.lv-seg button.lv-active { background: var(--lv-accent); color: var(--lv-on-accent); box-shadow: 0 3px 10px color-mix(in srgb, var(--lv-accent) 35%, transparent); }\n\n/* Плитки разделов */\n.lv-tiles { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(112px, 100%), 1fr)); gap: 8px; }\n.lv-tile {\n    position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;\n    min-height: 92px; padding: 12px 8px; border-radius: 18px; cursor: pointer; font: inherit; text-align: center;\n    background: var(--tile); color: #3A2A2D; border: 2px solid transparent;\n    opacity: .5; filter: saturate(.7); transition: opacity .15s, filter .15s, transform .05s;\n}\n.lv-tile i.fa-solid { font-size: 24px; }\n.lv-tile span { font-weight: 700; font-size: .82em; line-height: 1.2; overflow-wrap: anywhere; }\n.lv-tile .lv-tick { display: none; position: absolute; top: 6px; right: 8px; font-size: 12px; }\n.lv-tile.lv-on { opacity: 1; filter: none; border-color: var(--lv-accent); box-shadow: 0 4px 12px color-mix(in srgb, var(--lv-accent) 25%, transparent); }\n.lv-tile.lv-on .lv-tick { display: block; }\n.lv-tile.lv-locked { opacity: .35; cursor: not-allowed; }\n.lv-tile:active:not(.lv-locked) { transform: scale(.97); }\n\n/* Записи */\n.lv-book-row { display: flex; flex-direction: column; gap: 6px; }\n#lv-sections { display: flex; flex-direction: column; gap: 12px; }\n.lv-card {\n    display: flex; flex-direction: column; gap: 8px; padding: 12px; border-radius: 18px;\n    background: var(--lv-panel); border: 1px solid var(--lv-line);\n    box-shadow: 0 3px 12px color-mix(in srgb, var(--lv-accent) 10%, transparent);\n}\n.lv-card-head { display: flex; align-items: center; gap: 10px; }\n.lv-chip { flex: none; width: 34px; height: 34px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; background: var(--tile); color: #3A2A2D; }\n.lv-card-title { flex: 1; min-width: 0; font-family: var(--lv-serif); font-weight: 700; font-size: 1.12em; color: var(--lv-accent); }\n.lv-keys-row { display: flex; align-items: center; gap: 8px; }\n.lv-keys-row .lv-input-line { flex: 1; min-width: 0; padding: 6px 12px; font-size: 14px; }\n.lv-sec-row .lv-input-line { flex: 1; min-width: 120px; padding: 6px 12px; font-size: 14px; }\n.lv-empty { text-align: center; padding: 34px 12px; color: var(--lv-muted); }\n.lv-empty[hidden] { display: none; }\n\n.lv-foot { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px; padding: 10px 18px max(12px, env(safe-area-inset-bottom, 0px)); background: var(--lv-panel); border-top: 1px solid var(--lv-line); }\n\n/* Настройки */\n.lv-settings-body { flex: 1; min-height: 0; overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; padding: 6px 18px 18px; display: flex; flex-direction: column; gap: 14px; }\n.lv-group { display: flex; flex-direction: column; gap: 10px; padding: 14px; background: var(--lv-panel); border: 1px solid var(--lv-line); border-radius: 18px; }\n.lv-group-title { font-family: var(--lv-serif); font-weight: 700; font-size: 1.1em; color: var(--lv-accent); }\n.lv-field { display: flex; flex-direction: column; gap: 5px; }\n.lv-field-label { font-size: .9em; font-weight: 700; color: var(--lv-muted); }\n.lv-s-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(190px, 100%), 1fr)); gap: 10px; }\n.lv-swatches { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(96px, 100%), 1fr)); gap: 8px; }\n.lv-swatch {\n    display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 10px 6px; border-radius: 16px;\n    background: var(--sw-bg); color: #3A2A2D; border: 2px solid transparent; outline: 1px solid var(--lv-line);\n    cursor: pointer; font: inherit; font-size: .85em; font-weight: 700;\n}\n.lv-swatch.lv-sw-auto { background: linear-gradient(135deg, #17171d 50%, #FFF7E6 50%); }\n.lv-swatch.lv-active { border-color: var(--lv-accent); outline-color: var(--lv-accent); }\n.lv-sw-dot { width: 24px; height: 24px; border-radius: 50%; background: var(--sw-ac); border: 2px solid rgba(255, 255, 255, .7); }\n.lv-sw-name { background: rgba(255, 255, 255, .85); color: #3A2A2D; padding: 1px 10px; border-radius: 999px; }\n\n/* Панель на странице расширений */\n#lv_settings .inline-drawer-content { display: flex; flex-direction: column; gap: 8px; }\n#lv_settings .menu_button { width: 100%; }\n\n/* Телефон и низкие экраны */\n@media (max-width: 720px), (max-height: 520px) {\n    .lv-overlay { align-items: stretch; justify-content: stretch; }\n    .lv-window {\n        width: 100%; height: 100%; max-width: 100%; max-height: 100%; border-radius: 0; box-shadow: none;\n        padding-left: env(safe-area-inset-left, 0px); padding-right: env(safe-area-inset-right, 0px);\n    }\n    .lv-head { padding-top: max(10px, env(safe-area-inset-top, 0px)); }\n}\n@media (max-width: 720px) {\n    .lv-window { font-size: 14px; }\n    .lv-overlay input, .lv-overlay textarea, .lv-overlay select, .lv-ta-sec, .lv-keys-row .lv-input-line, .lv-sec-row .lv-input-line { font-size: 16px; }\n    .lv-head { padding: max(10px, env(safe-area-inset-top, 0px)) 12px 6px; }\n    .lv-tabs { padding: 2px 10px 8px; }\n    .lv-tab { flex: 1 1 0; justify-content: center; padding: 8px 6px; }\n    .lv-body { grid-template-columns: minmax(0, 1fr); padding: 4px 12px 12px; gap: 14px; }\n    .lv-settings-body { padding: 4px 12px 14px; }\n    .lv-foot { flex-wrap: nowrap; gap: 6px; padding: 8px 10px max(8px, env(safe-area-inset-bottom, 0px)); }\n    .lv-foot .lv-btn { flex: 1 1 0; min-width: 44px; padding: 9px 8px; }\n    .lv-foot .lv-btn .lv-bl { display: none; }\n    .lv-foot .lv-primary { flex: 3 1 0; }\n    .lv-foot .lv-primary .lv-bl { display: inline; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n    .lv-keys-row { flex-wrap: wrap; }\n}\n@media (max-height: 520px) {\n    .lv-head { padding-bottom: 2px; }\n    .lv-btn { min-height: 36px; }\n}\n";

/* ═══ schema ═══ */
const KEY = 'loveble';

/** weight — множитель размера записи; tile — цвет плитки; keys — ключи по теме раздела. */
const SECTIONS = [
    {
        id: 'lovelang', title: 'Love language', icon: 'fa-heart', tile: '#E8C3DC', weight: 1.0,
        keys: {
            en: ['love language', 'love', 'loves', 'affection', 'adore', 'cherish', 'show love', 'appreciate'],
            ru: ['язык любви', 'любовь', 'любит', 'нежность', 'привязанность', 'обожает', 'ценит', 'забота'],
        },
        fields: [
            { key: 'Primary', hint: 'main love language: Words of Affirmation / Quality Time / Physical Touch / Acts of Service / Receiving Gifts, plus a few words why' },
            { key: 'Secondary', hint: 'second love language or "none"' },
            { key: 'Shows love by', hint: 'concrete everyday behaviors' },
            { key: 'Wants to receive', hint: 'what makes them feel loved' },
            { key: 'Feels unloved when', hint: 'what hurts or gets ignored' },
            { key: 'Examples', hint: '3 short concrete gestures or lines, each on its own line starting with "- "' },
        ],
    },
    {
        id: 'openness', title: 'Emotional openness', icon: 'fa-door-open', tile: '#F5BE8E', weight: 1.1,
        keys: {
            en: ['feelings', 'emotions', 'confess', 'vulnerable', 'open up', 'opens up', 'shy', 'cold', 'distant'],
            ru: ['чувства', 'эмоции', 'признание', 'признаться', 'открыться', 'уязвим', 'замкнут', 'холодный'],
        },
        fields: [
            { key: 'Style', hint: 'where on the scale: suppresses / avoids / guarded / reserved / balanced / open / tactile and expressive / carefree and flippant; a few words of detail' },
            { key: 'Shows feelings', hint: 'how feelings come out: words, actions, jokes, silence' },
            { key: 'Hides feelings', hint: 'masks, deflection, defensive habits' },
            { key: 'Confession', hint: 'how they say or avoid saying "I love you"' },
            { key: 'Vulnerability', hint: 'what makes them open up or shut down' },
            { key: 'Partner\'s feelings', hint: 'how they react to a partner\'s emotions' },
            { key: 'Tells', hint: 'involuntary signs of real emotion' },
        ],
    },
    {
        id: 'physical', title: 'Physical affection', icon: 'fa-hand-holding-heart', tile: '#F3B28C', weight: 1.2,
        keys: {
            en: ['kiss', 'kisses', 'kissing', 'hug', 'hugs', 'touch', 'touches', 'cuddle', 'embrace', 'hold hands', 'caress'],
            ru: ['поцелуй', 'целует', 'обнимает', 'объятия', 'прикосновение', 'касается', 'обнимашки', 'держит за руку', 'ласка'],
        },
        fields: [
            { key: 'Kissing', hint: 'how they kiss: style, tempo, who initiates, where, first-kiss behavior' },
            { key: 'Hugs', hint: 'how and when they hug' },
            { key: 'Touch given', hint: 'typical touches: hair, hands, waist, etc.' },
            { key: 'Touch received', hint: 'how they react to being touched: melting, flinching, stiffening' },
            { key: 'Attitude', hint: 'overall attitude to physical contact; boundaries or aversions' },
            { key: 'Public vs private', hint: 'difference in public and in private' },
            { key: 'Closeness habits', hint: 'hand-holding, cuddling, sleeping together, personal space' },
        ],
    },
    {
        id: 'sexuality', title: 'Sexuality', icon: 'fa-fire', tile: '#C9B8E6', weight: 1.5, adult: true,
        keys: {
            en: ['sex', 'intimate', 'intimacy', 'bed', 'desire', 'arousal', 'kink', 'make love', 'undress', 'naked'],
            ru: ['секс', 'интим', 'близость', 'постель', 'желание', 'возбуждение', 'кинк', 'раздеть', 'обнажённый'],
        },
        fields: [
            { key: 'Orientation', hint: 'sexual / romantic orientation' },
            { key: 'Experience', hint: 'experience level and history in a few words' },
            { key: 'Approach', hint: 'attitude to sex: needs emotional bond or casual, shy or confident' },
            { key: 'Initiates', hint: 'who initiates and how; signals they give' },
            { key: 'Turn-ons', hint: 'what arouses them' },
            { key: 'Kinks', hint: 'kinks and fantasies' },
            { key: 'Limits', hint: 'hard limits and boundaries' },
            { key: 'Style', hint: 'in bed: dominant / submissive / switch, pace, vocal or quiet, behavior' },
            { key: 'Aftercare', hint: 'behavior afterward' },
            { key: 'Sex vs feelings', hint: 'how sex relates to emotional attachment for them' },
        ],
    },
    {
        id: 'relstyle', title: 'Relationship style', icon: 'fa-handshake', tile: '#E5B5D0', weight: 1.2,
        keys: {
            en: ['relationship', 'partner', 'dating', 'boyfriend', 'girlfriend', 'lover', 'jealous', 'commitment', 'together'],
            ru: ['отношения', 'партнёр', 'свидание', 'парень', 'девушка', 'любовник', 'ревнует', 'вместе', 'встречаться'],
        },
        fields: [
            { key: 'Approach', hint: 'overall style: tender / rough / toxic / healthy / mixed, with concrete traits' },
            { key: 'Pace', hint: 'how fast they commit; courting style' },
            { key: 'Care', hint: 'how they take care of a partner' },
            { key: 'Attention', hint: 'need for attention and space; clingy or independent' },
            { key: 'Jealousy', hint: 'jealousy, possessiveness, trust' },
            { key: 'Conflict', hint: 'how they fight and make up' },
            { key: 'Power', hint: 'who leads, control, compromise' },
            { key: 'Flags', hint: 'green flags and red flags in short' },
            { key: 'Dealbreakers', hint: 'what they never tolerate' },
        ],
    },
    {
        id: 'breakup', title: 'Breakups', icon: 'fa-heart-crack', tile: '#B9C4D6', weight: 1.1,
        keys: {
            en: ['breakup', 'break up', 'leave', 'leaving', 'divorce', 'ex', 'goodbye', 'dump', 'end it'],
            ru: ['расставание', 'расстаться', 'бросить', 'уйти', 'развод', 'бывший', 'прощай', 'разрыв'],
        },
        fields: [
            { key: 'Ending', hint: 'how relationships end: loud, quiet, ugly, clean, ghosting' },
            { key: 'Initiates', hint: 'do they leave, get left, or avoid ending things' },
            { key: 'When left', hint: 'reaction when dumped' },
            { key: 'Afterwards', hint: 'behavior after: cut off, stay friends, stalk, return' },
            { key: 'Closure', hint: 'grudges, forgiveness, need for closure' },
            { key: 'Returns', hint: 'do they come back; second chances; "never again" triggers' },
            { key: 'Coping', hint: 'how they cope; rebound behavior' },
        ],
    },
];

const THEMES = [
    { id: 'blush', bg: '#FFF7E6', ac: '#B46A72' },
    { id: 'sage', bg: '#F3F5E8', ac: '#6F8050' },
    { id: 'sky', bg: '#F1F4F8', ac: '#55718E' },
    { id: 'lagoon', bg: '#2D3A47', ac: '#F7C8D3' },
    { id: 'auto', bg: '#17171d', ac: '#f6f1e7' },
];

const DEFAULT_DRAFT = {
    target: 'char', name: '', context: '', adult: false,
    sections: { lovelang: true, openness: true, physical: true, sexuality: false, relstyle: true, breakup: true },
    dossier: {}, keys: {}, bookName: '',
};

const DEFAULTS = {
    lang: 'ru', theme: 'blush', profileId: '',
    entryWords: 120, maxResponse: 4200, creativity: 'balanced',
    keysLang: 'en', trigger: 'selective', position: 'before',
    bookPattern: 'Loveble - {name}',
    attachToCard: false,
    draft: DEFAULT_DRAFT,
};

function getSettings() {
    const store = SillyTavern.getContext().extensionSettings;
    if (!store[KEY] || typeof store[KEY] !== 'object') store[KEY] = {};
    const s = store[KEY];
    for (const [k, v] of Object.entries(DEFAULTS)) if (s[k] === undefined) s[k] = structuredClone(v);
    if (!s.draft || typeof s.draft !== 'object') s.draft = {};
    for (const [k, v] of Object.entries(DEFAULT_DRAFT)) if (s.draft[k] === undefined) s.draft[k] = structuredClone(v);
    for (const [k, v] of Object.entries(DEFAULT_DRAFT.sections)) if (s.draft.sections[k] === undefined) s.draft.sections[k] = v;
    return s;
}
const saveSettings = () => SillyTavern.getContext().saveSettingsDebounced();

const aliases = (str) => String(str || '').split(',').map(x => x.trim()).filter(Boolean);
const mainName = (d) => aliases(d.name)[0] || '';
/** Разделы, которые реально будут созданы (учитывает выбор и 18+). */
const activeSections = (d) => SECTIONS.filter(x => d.sections[x.id] && (!x.adult || d.adult));
const defaultKeys = (sec, lang) => lang === 'both' ? [...sec.keys.en, ...sec.keys.ru] : sec.keys[lang] || sec.keys.en;
const parseKeys = (str) => String(str || '').split(/[,;\n]/).map(x => x.trim()).filter(Boolean);

/* ═══ prompts ═══ */
const secWords = (s, sec) => Math.round(s.entryWords * sec.weight);

const CREATIVITY_RULES = {
    strict: 'Stay close to the input: add only details strongly implied by the description. Keep unmentioned aspects short and generic; do NOT invent major past events. Input facts always stay true.',
    balanced: 'Fill the gaps: infer plausible, fitting behavior from the personality and history so the person feels complete and coherent. Prefer concrete habits over generic statements. Input facts always stay true.',
    free: 'Be bold and inventive: add distinctive habits, inner contradictions and memorable details that fit the person. Avoid cliches. Input facts always stay true.',
};

function skeleton(s, secs) {
    return secs.map(sec => {
        const lines = sec.fields.map(f => `${f.key}: <${f.hint}>`);
        return `[${sec.title}] (~${secWords(s, sec)} words)\n${lines.join('\n')}`;
    }).join('\n\n');
}

function rules(s, d, secs, limitWords = 0) {
    const name = mainName(d);
    const r = [
        'Output ONLY the sections: no preface, no commentary, no markdown, no code fences.',
        'Use exactly the section headers in square brackets and exactly the field keys from the skeleton, in the same order, one field per line. Do NOT copy the word targets or the <hints>.',
        'Never omit a section or a field. Every field must contain content.',
        'Write terse behavioral fragments separated by commas or semicolons: describe how the person ACTS and reacts, with concrete observable details. No full sentences, no filler, no flowery prose, no repetition between fields.',
        limitWords
            ? `HARD LIMIT: this section is at most ${limitWords} words. Every field must still be present.`
            : 'HARD LIMIT: respect the word target of each section. Plan the length so the LAST section is complete: if you run long, shorten earlier fields instead of cutting off the end.',
        CREATIVITY_RULES[s.creativity] || CREATIVITY_RULES.balanced,
        d.target === 'user'
            ? `The subject is the user's persona${name ? ` (named ${name})` : ''}. Refer to them as {{user}}. Never write {{user}}'s dialogue.`
            : `The subject is the character "${name}". Refer to them by that name, never as {{char}}. The user's character is {{user}}.`,
        'Stay consistent with the provided description and notes (treat them as canon).',
        'Write in English.',
    ];
    if (secs.some(x => x.adult)) {
        r.push('The Sexuality section applies to adults only: if anything indicates the subject is under 18, or their age is unclear, write N/A in each of its fields. Use terse descriptors, not narrative.');
    }
    return 'You write compact lorebook entries describing how a roleplay subject loves, shows affection and builds relationships.\nRules:\n' + r.map((x, i) => `${i + 1}. ${x}`).join('\n');
}

function userMessage(d) {
    const name = mainName(d);
    const kind = d.target === 'user' ? "user's persona" : 'character';
    return `SUBJECT: ${name} (${kind})\n\nDESCRIPTION AND NOTES:\n${d.context.trim() || '(none: infer a plausible, coherent profile from the name)'}`;
}

function buildGenerateMessages(s, d, secs) {
    return [
        { role: 'system', content: `${rules(s, d, secs)}\n\nSKELETON:\n${skeleton(s, secs)}` },
        { role: 'user', content: userMessage(d) },
    ];
}

function buildSectionMessages(s, d, sec, current, instruction) {
    const sys = `${rules(s, d, [sec], Math.round(secWords(s, sec) * 1.15))}\n\nTask: write ONLY the section [${sec.title}]. Keep it consistent with the other sections below. Output only that one section (header + fields).\n\nSKELETON:\n${skeleton(s, [sec])}`;
    let user = `${userMessage(d)}\n\nOTHER SECTIONS ALREADY WRITTEN:\n${current || '(none)'}`;
    user += instruction.trim() ? `\n\nINSTRUCTION FOR THE [${sec.title}] SECTION: ${instruction.trim()}` : `\n\nWrite the [${sec.title}] section.`;
    return [{ role: 'system', content: sys }, { role: 'user', content: user }];
}

const stripJunk = (text) => String(text).replace(/<think>[\s\S]*?<\/think>/gi, '').replace(/```[a-z]*/gi, '');

function parseDossier(text) {
    const byTitle = new Map(SECTIONS.map(x => [x.title.toLowerCase(), x.id]));
    const out = {};
    let cur = null;
    for (const raw of stripJunk(text).split(/\r?\n/)) {
        const line = raw.replace(/\s+$/, '');
        const m = line.match(/^\s*\[([^\]]+)\]\s*(?:\(.*\))?\s*$/) || line.match(/^\s*#{1,3}\s*([^()]+?)\s*(?:\(.*\))?\s*$/);
        if (m) {
            const id = byTitle.get(m[1].trim().toLowerCase());
            if (id) { cur = id; out[id] = out[id] || []; continue; }
        }
        if (cur && line.trim()) out[cur].push(line);
    }
    return Object.fromEntries(Object.entries(out).map(([k, v]) => [k, v.join('\n')]));
}

function extractSection(text, sec) {
    const p = parseDossier(text);
    if (p[sec.id]) return p[sec.id];
    return stripJunk(text).split(/\r?\n/).filter(l => l.trim() && !/^\s*\[.*\]\s*$/.test(l)).join('\n');
}

const normKey = (x) => x.toLowerCase().replace(/[^a-z]/g, '');

/** Поля, которых нет, которые пусты или обрезаны. */
function sectionIssues(sec, text) {
    const lines = (text || '').split(/\r?\n/);
    const keyOf = (l) => { const i = l.indexOf(':'); return i > 0 ? normKey(l.slice(0, i)) : ''; };
    const issues = [];
    for (const f of sec.fields) {
        const idx = lines.findIndex(l => keyOf(l) === normKey(f.key));
        if (idx < 0) { issues.push(f.key); continue; }
        const val = lines[idx].slice(lines[idx].indexOf(':') + 1).trim();
        if (f.key === 'Examples') {
            const n = lines.slice(idx + 1).filter(l => /^\s*[-*•]/.test(l)).length + (val ? 1 : 0);
            if (n < 2) issues.push(f.key);
        } else if (!val) issues.push(f.key);
    }
    return issues;
}

/** Текст одной записи лорбука. */
function entryContent(d, sec, text) {
    const who = d.target === 'user' ? '{{user}}' : mainName(d);
    return `[${who}: ${sec.title}]\n${text.trim()}`;
}

/* ═══ api ═══ */
const stctx = () => SillyTavern.getContext();
const listProfiles = () => stctx().extensionSettings?.connectionManager?.profiles ?? [];

/** Запрос идёт через профиль Connection Manager: ключи остаются внутри Таверны. */
async function requestModel(profileId, messages, maxTokens, signal) {
    const { ConnectionManagerRequestService: Service, extensionSettings } = stctx();
    if (!Service) throw new Error('NO_SERVICE');
    const id = profileId || extensionSettings?.connectionManager?.selectedProfile;
    if (!id) throw new Error('NO_PROFILE');
    const res = await Service.sendRequest(id, messages, maxTokens, {
        stream: false, signal, includePreset: true, includeInstruct: true,
    });
    const text = typeof res === 'string' ? res : (res?.content ?? '');
    return String(text).replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
}

async function countTokens(text) {
    try {
        const fn = stctx().getTokenCountAsync;
        if (fn) return await fn(text);
    } catch { /* fallthrough */ }
    return Math.ceil(text.length / 3.5);
}

/* ── данные Таверны: персонажи и персона ── */
function defaultName(target) {
    const c = stctx();
    if (target === 'user') return c.name1 || '';
    const ch = c.characters?.[c.characterId];
    return ch?.name || '';
}
const characterNames = () => [...new Set((stctx().characters || []).map(c => c.name).filter(Boolean))];

function cardText(d) {
    const c = stctx();
    if (d.target === 'user') return String(c.powerUserSettings?.persona_description || '').trim();
    const nm = mainName(d);
    const ch = (c.characters || []).find(x => x.name === nm);
    if (!ch) return '';
    return [ch.description, ch.personality && `Personality: ${ch.personality}`, ch.scenario && `Scenario: ${ch.scenario}`]
        .filter(Boolean).join('\n').slice(0, 4000);
}

/* ── лорбук ── */
const bookFileName = (str) => String(str).replace(/[\\/:*?"<>|]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 80);

function wiEntry(uid, o) {
    return {
        uid, key: o.key, keysecondary: o.keysecondary, comment: o.comment, content: o.content,
        constant: o.constant, vectorized: false, selective: o.selective, selectiveLogic: 0, addMemo: true,
        order: o.order, position: o.position, disable: false, ignoreBudget: false,
        excludeRecursion: false, preventRecursion: false,
        matchPersonaDescription: false, matchCharacterDescription: false, matchCharacterPersonality: false,
        matchCharacterDepthPrompt: false, matchScenario: false, matchCreatorNotes: false,
        delayUntilRecursion: 0, probability: 100, useProbability: true, depth: 4, outletName: '',
        group: '', groupOverride: false, groupWeight: 100,
        scanDepth: null, caseSensitive: null, matchWholeWords: null, useGroupScoring: null,
        automationId: '', role: 0, sticky: null, cooldown: null, delay: null, triggers: [],
        displayIndex: uid, characterFilter: { isExclude: false, names: [], tags: [] },
    };
}

/** Описание записей лорбука по текущему черновику. */
function buildEntrySpecs(s, d) {
    const names = aliases(d.name);
    const who = mainName(d);
    return activeSections(d).filter(sec => (d.dossier[sec.id] || '').trim()).map((sec, i) => {
        const topic = parseKeys(d.keys[sec.id] ?? defaultKeys(sec, s.keysLang).join(', '));
        const o = {
            key: topic, keysecondary: [], selective: false, constant: false,
            comment: `Loveble: ${who} — ${sec.title}`,
            content: entryContent(d, sec, d.dossier[sec.id]),
            order: 100 + i, position: s.position === 'after' ? 1 : 0,
        };
        if (s.trigger === 'selective') { o.keysecondary = names; o.selective = true; }
        else if (s.trigger === 'name') o.key = names;
        else if (s.trigger === 'always') o.constant = true;
        return o;
    });
}

async function loadBook(name) {
    const c = stctx();
    try {
        const d = await c.loadWorldInfo?.(name);
        if (d && d.entries) return d;
    } catch { /* fallback */ }
    try {
        const r = await fetch('/api/worldinfo/get', { method: 'POST', headers: c.getRequestHeaders(), body: JSON.stringify({ name }) });
        if (r.ok) { const j = await r.json(); if (j && j.entries) return j; }
    } catch { /* новый лорбук */ }
    return { entries: {} };
}

async function writeBook(name, data) {
    const c = stctx();
    if (c.saveWorldInfo) { await c.saveWorldInfo(name, data, true); return; }
    const r = await fetch('/api/worldinfo/edit', { method: 'POST', headers: c.getRequestHeaders(), body: JSON.stringify({ name, data }) });
    if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
}

/** Сохраняет записи в лорбук: записи с тем же заголовком заменяются, остальные не трогаются. */
async function saveBook(name, specs) {
    const c = stctx();
    const data = await loadBook(name);
    data.entries = data.entries || {};
    let maxUid = Object.values(data.entries).reduce((m, e) => Math.max(m, Number(e.uid) || 0), -1);
    for (const spec of specs) {
        const old = Object.values(data.entries).find(e => e.comment === spec.comment);
        const uid = old ? old.uid : ++maxUid;
        data.entries[uid] = wiEntry(uid, spec);
    }
    await writeBook(name, data);
    try { await c.updateWorldInfoList?.(); } catch { /* список обновится сам */ }
    return Object.keys(data.entries).length;
}

/** Модуль world-info.js Таверны: единственный способ дотянуться до world_info.charLore. */
async function importWorldInfoModule() {
    const urls = [];
    try { urls.push(new URL('../../../world-info.js', import.meta.url).href); } catch { /* нет import.meta.url */ }
    urls.push('/scripts/world-info.js');
    let lastErr;
    for (const u of urls) {
        try { return await import(u); } catch (e) { lastErr = e; }
    }
    throw lastErr || new Error('world-info.js unavailable');
}

/**
 * Привязывает лорбук к карточке как ДОПОЛНИТЕЛЬНЫЙ (world_info.charLore), основной лорбук карточки не трогает.
 * Возвращает: 'attached' | 'already' | 'primary' | 'nochar'. При сбое бросает ошибку.
 */
async function attachToCharacter(d, book) {
    const c = stctx();
    const nm = mainName(d);
    const list = c.characters || [];
    let idx = list.findIndex((x, i) => x.name === nm && String(i) === String(c.characterId));
    if (idx < 0) idx = list.findIndex(x => x.name === nm);
    if (idx < 0 || !list[idx].avatar) return 'nochar';
    const ch = list[idx];
    if (ch.data?.extensions?.world === book) return 'primary';
    const fileName = ch.avatar.replace(/\.[^/.]+$/, '');
    const mod = await importWorldInfoModule();
    const wi = mod.world_info;
    if (!wi || typeof wi !== 'object') throw new Error('world_info unavailable');
    if (!Array.isArray(wi.charLore)) wi.charLore = [];
    let entry = wi.charLore.find(e => e.name === fileName);
    if (!entry) { entry = { name: fileName, extraBooks: [] }; wi.charLore.push(entry); }
    if (!Array.isArray(entry.extraBooks)) entry.extraBooks = [];
    if (entry.extraBooks.includes(book)) return 'already';
    entry.extraBooks.push(book);
    c.saveSettingsDebounced();
    return 'attached';
}

async function copyText(text) {
    try {
        if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return; }
    } catch { /* fallback */ }
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
}

function downloadJson(filename, obj) {
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/* ═══ ui ═══ */
let overlay = null;
const state = { tab: 'create', busy: false, abort: null, tokenTimer: null };

const qs = (sel) => overlay.querySelector(sel);
const draft = () => getSettings().draft;
function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
}
const toast = (type, msg) => window.toastr?.[type]?.(msg);

/** Размер оверлея задаётся в пикселях по реальной видимой области. */
function fitOverlay() {
    if (!overlay) return;
    const w = document.documentElement.clientWidth || window.innerWidth;
    const h = window.innerHeight;
    if (w > 100 && h > 100) { overlay.style.width = `${w}px`; overlay.style.height = `${h}px`; }
    else { overlay.style.width = '100vw'; overlay.style.height = '100vh'; }
}
function injectStyles() {
    document.getElementById('lv-style')?.remove();
    const st = document.createElement('style');
    st.id = 'lv-style';
    st.textContent = LV_CSS;
    document.head.appendChild(st);
}
function initGlobalHandlers() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay?.classList.contains('lv-open')) closeWindow();
    });
    window.addEventListener('resize', fitOverlay);
    window.addEventListener('orientationchange', () => setTimeout(fitOverlay, 250));
}

function openWindow(tab) {
    try {
        if (!overlay) buildWindow();
        switchTab(typeof tab === 'string' ? tab : state.tab);
        fitOverlay();
        overlay.classList.add('lv-open');
        document.body.classList.add('lv-lock');
        const r = qs('.lv-window').getBoundingClientRect();
        console.info('[Loveble] opened', { w: Math.round(r.width), h: Math.round(r.height), vw: innerWidth, vh: innerHeight });
        if (getComputedStyle(overlay).position !== 'fixed') toast('error', 'Loveble: стили не применились');
        else if (r.width < 50 || r.height < 50) toast('error', `Loveble: окно имеет размер ${Math.round(r.width)}×${Math.round(r.height)}`);
    } catch (e) {
        console.error('[Loveble] open failed', e);
        toast('error', `Loveble: ${e?.message || e}`);
        destroyWindow();
        document.body.classList.remove('lv-lock');
    }
}
function destroyWindow() { overlay?.remove(); overlay = null; }
function closeWindow() {
    overlay?.classList.remove('lv-open');
    document.body.classList.remove('lv-lock');
}
function applyTheme() { if (overlay) overlay.dataset.theme = getSettings().theme; }

function switchTab(name) {
    state.tab = name;
    overlay.querySelectorAll('.lv-tab').forEach(b => b.classList.toggle('lv-active', b.dataset.tab === name));
    overlay.querySelectorAll('.lv-view').forEach(v => v.classList.toggle('lv-active', v.id === `lv-v-${name}`));
    if (name === 'settings') buildSettingsView();
    if (name === 'create') requestAnimationFrame(autosizeAll);
}

function buildWindow() {
    overlay = el('div', 'lv-overlay');
    overlay.innerHTML = `
    <div class="lv-window" role="dialog" aria-modal="true">
      <div class="lv-head">
        <div class="lv-title"><i class="fa-solid fa-heart"></i>
          <div><div class="lv-brand">${t('title')}</div><div class="lv-sub">${t('subtitle')}</div></div>
        </div>
        <button class="lv-icon-btn" id="lv-close" title="${t('close')}"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="lv-tabs">
        <button class="lv-tab" data-tab="create"><i class="fa-solid fa-wand-magic-sparkles"></i><span>${t('tabCreate')}</span></button>
        <button class="lv-tab" data-tab="settings"><i class="fa-solid fa-gear"></i><span>${t('tabSettings')}</span></button>
      </div>

      <div class="lv-view" id="lv-v-create">
        <div class="lv-body">
          <div class="lv-col lv-input">
            <div class="lv-label">${t('forWhom')}</div>
            <div class="lv-seg" id="lv-target">
              <button data-t="char"><i class="fa-solid fa-masks-theater"></i><span>${t('tChar')}</span></button>
              <button data-t="user"><i class="fa-solid fa-user"></i><span>${t('tUser')}</span></button>
            </div>
            <label class="lv-label" for="lv-name">${t('name')}</label>
            <input id="lv-name" class="lv-input-line" type="text" list="lv-chars" autocomplete="off">
            <datalist id="lv-chars"></datalist>
            <div class="lv-note">${t('nameHint')}</div>
            <label class="lv-label" for="lv-context">${t('context')}</label>
            <textarea id="lv-context" class="lv-ta" rows="6"></textarea>
            <div class="lv-row"><button class="lv-btn lv-small" id="lv-pull" data-act><i class="fa-solid fa-file-import"></i> <span id="lv-pull-t"></span></button></div>
            <label class="lv-check"><input type="checkbox" id="lv-adult"><span>${t('adult')}</span></label>
            <div class="lv-label">${t('sections')}</div>
            <div class="lv-tiles" id="lv-tiles"></div>
            <div class="lv-note" id="lv-adult-note"></div>
            <div class="lv-row">
              <button class="lv-btn lv-primary" id="lv-gen" data-act><i class="fa-solid fa-wand-magic-sparkles"></i> ${t('generate')}</button>
              <button class="lv-btn lv-danger" id="lv-cancel" hidden>${t('cancel')}</button>
            </div>
            <div class="lv-status" id="lv-status"></div>
          </div>

          <div class="lv-col lv-output">
            <div class="lv-book-row">
              <label class="lv-label" for="lv-book">${t('bookName')}</label>
              <input id="lv-book" class="lv-input-line" type="text" autocomplete="off">
              <div class="lv-note" id="lv-total"></div>
            </div>
            <div id="lv-sections"></div>
            <div class="lv-empty" id="lv-empty">${t('empty')}</div>
          </div>
        </div>
        <div class="lv-foot">
          <button class="lv-btn" id="lv-copy" data-act title="${t('copy')}"><i class="fa-solid fa-copy"></i><span class="lv-bl">${t('copy')}</span></button>
          <button class="lv-btn" id="lv-export" data-act title="${t('exportJson')}"><i class="fa-solid fa-file-export"></i><span class="lv-bl">${t('exportJson')}</span></button>
          <button class="lv-btn lv-primary" id="lv-create" data-act title="${t('createBook')}"><i class="fa-solid fa-book-open"></i><span class="lv-bl">${t('createBook')}</span></button>
        </div>
      </div>

      <div class="lv-view" id="lv-v-settings"><div class="lv-settings-body" id="lv-settings-body"></div></div>
    </div>`;
    document.body.appendChild(overlay);
    applyTheme();

    qs('#lv-context').placeholder = t('contextPh');
    overlay.querySelectorAll('.lv-tab').forEach(b => { b.onclick = () => switchTab(b.dataset.tab); });
    qs('#lv-close').onclick = closeWindow;
    overlay.addEventListener('mousedown', (e) => { if (e.target === overlay) closeWindow(); });

    overlay.querySelectorAll('#lv-target button').forEach(b => { b.onclick = () => setTarget(b.dataset.t); });
    qs('#lv-name').oninput = (e) => { draft().name = e.target.value; saveSettings(); updateBookPlaceholder(); };
    qs('#lv-context').oninput = (e) => { draft().context = e.target.value; saveSettings(); };
    qs('#lv-adult').onchange = (e) => {
        draft().adult = e.target.checked;
        saveSettings();
        renderTiles();
        renderSections();
    };
    qs('#lv-book').oninput = (e) => { draft().bookName = e.target.value; saveSettings(); };
    qs('#lv-pull').onclick = doPull;
    qs('#lv-gen').onclick = doGenerate;
    qs('#lv-cancel').onclick = () => state.abort?.abort();
    qs('#lv-copy').onclick = doCopy;
    qs('#lv-export').onclick = doExport;
    qs('#lv-create').onclick = doCreate;

    const d = draft();
    if (!d.name.trim()) { d.name = defaultName(d.target); saveSettings(); }
    fillInputs();
}

function fillInputs() {
    const d = draft();
    overlay.querySelectorAll('#lv-target button').forEach(b => b.classList.toggle('lv-active', b.dataset.t === d.target));
    qs('#lv-name').value = d.name;
    qs('#lv-name').placeholder = d.target === 'user' ? t('nameUserPh') : t('nameChPh');
    qs('#lv-chars').innerHTML = '';
    if (d.target === 'char') for (const n of characterNames()) qs('#lv-chars').appendChild(Object.assign(document.createElement('option'), { value: n }));
    qs('#lv-context').value = d.context;
    qs('#lv-adult').checked = !!d.adult;
    qs('#lv-book').value = d.bookName;
    qs('#lv-pull-t').textContent = d.target === 'user' ? t('pullUser') : t('pull');
    updateBookPlaceholder();
    renderTiles();
    renderSections();
    setStatus('');
}

function setTarget(target) {
    const d = draft();
    if (d.target === target) return;
    const prevDefault = defaultName(d.target);
    if (!d.name.trim() || d.name.trim() === prevDefault) d.name = defaultName(target);
    d.target = target;
    saveSettings();
    fillInputs();
}

function updateBookPlaceholder() {
    const d = draft();
    qs('#lv-book').placeholder = t('bookAuto', { name: bookTitle({ ...d, bookName: '' }) || '…' });
}
function bookTitle(d) {
    const s = getSettings();
    const raw = d.bookName.trim() || s.bookPattern.replaceAll('{name}', mainName(d) || 'Unnamed');
    return bookFileName(raw);
}

/* ───────────── Плитки разделов ───────────── */

function renderTiles() {
    const d = draft();
    const box = qs('#lv-tiles');
    box.innerHTML = '';
    for (const sec of SECTIONS) {
        const locked = !!(sec.adult && !d.adult);
        const b = el('button', 'lv-tile');
        b.type = 'button';
        b.style.setProperty('--tile', sec.tile);
        b.classList.toggle('lv-on', !!d.sections[sec.id] && !locked);
        b.classList.toggle('lv-locked', locked);
        b.innerHTML = `<i class="fa-solid ${locked ? 'fa-lock' : sec.icon}"></i><span>${t(`sec.${sec.id}`)}</span><em class="fa-solid fa-check lv-tick"></em>`;
        b.onclick = () => {
            if (locked) { setStatus(t('adultNote'), true); return; }
            d.sections[sec.id] = !d.sections[sec.id];
            saveSettings();
            renderTiles();
            renderSections();
        };
        box.appendChild(b);
    }
    qs('#lv-adult-note').textContent = d.adult ? '' : t('adultNote');
}

/* ───────────── Состояние ───────────── */

function setBusy(on) {
    state.busy = on;
    overlay.querySelectorAll('[data-act]').forEach(b => { b.disabled = on; });
    qs('#lv-cancel').hidden = !on;
}
function setStatus(msg, isErr = false) {
    const st = qs('#lv-status');
    st.textContent = msg;
    st.classList.toggle('lv-err', isErr);
}
function errText(e) {
    if (e?.name === 'AbortError') return t('cancelled');
    const m = String(e?.message || e);
    if (m === 'NO_PROFILE') return t('errNoProfile');
    if (m === 'NO_SERVICE') return t('errNoService');
    return t('errFailed', { msg: m });
}
/** fn может вернуть строку-предупреждение: она покажется вместо «Готово». */
async function run(label, fn) {
    if (state.busy) return;
    state.abort = new AbortController();
    setBusy(true);
    setStatus(label);
    let msg = t('done'), isErr = false;
    try {
        const warn = await fn(state.abort.signal);
        if (warn) { msg = warn; isErr = true; }
    } catch (e) {
        console.error('[Loveble]', e);
        msg = errText(e);
        isErr = true;
    } finally {
        setBusy(false);
        setStatus(msg, isErr);
        if (isErr) toast('error', msg);
        state.abort = null;
    }
}

/* ───────────── Генерация ───────────── */

function doPull() {
    const d = draft();
    const text = cardText(d);
    if (!text) { setStatus(t('pullNone'), true); toast('warning', t('pullNone')); return; }
    d.context = d.context.trim() ? `${d.context.trim()}\n\n${text}` : text;
    qs('#lv-context').value = d.context;
    saveSettings();
    setStatus(t('pulled'));
}

const completeNote = (issues) => `Your previous version of this section was incomplete or cut off (missing or empty: ${issues.join(', ')}). Write the FULL section with every field, keeping the good existing content.`;

async function regenSection(s, d, sec, instruction, signal) {
    const others = assembleText(d, activeSections(d).filter(x => x.id !== sec.id));
    const msgs = buildSectionMessages(s, d, sec, others, instruction);
    const text = await requestModel(s.profileId, msgs, s.maxResponse, signal);
    const body = extractSection(text, sec);
    if (!body.trim()) throw new Error(t('errParse'));
    d.dossier[sec.id] = body;
    saveSettings();
}

function assembleText(d, secs = activeSections(d)) {
    return secs.filter(x => (d.dossier[x.id] || '').trim()).map(x => entryContent(d, x, d.dossier[x.id])).join('\n\n');
}

function doGenerate() {
    const s = getSettings(), d = s.draft;
    if (!mainName(d)) { setStatus(t('errName'), true); return; }
    const secs = activeSections(d);
    if (!secs.length) { setStatus(t('errNoSections'), true); return; }
    if (!d.context.trim()) {                       // пустое описание: берём карточку автоматически
        const card = cardText(d);
        if (card) { d.context = card; qs('#lv-context').value = card; saveSettings(); }
    }
    return run(t('generating'), async (signal) => {
        const text = await requestModel(s.profileId, buildGenerateMessages(s, d, secs), s.maxResponse, signal);
        const parsed = parseDossier(text);
        if (!Object.keys(parsed).length) throw new Error(t('errParse'));
        d.dossier = { ...d.dossier, ...parsed };
        saveSettings();
        renderSections();

        // Модель могла пропустить или оборвать разделы (обычно последние): дописываем их по одному.
        for (const sec of secs) {
            const issues = sectionIssues(sec, d.dossier[sec.id]);
            if (!issues.length) continue;
            setStatus(t('completing', { list: t(`sec.${sec.id}`) }));
            try {
                await regenSection(s, d, sec, completeNote(issues), signal);
                renderSections();
            } catch (e) {
                if (e?.name === 'AbortError') throw e;
                console.warn('[Loveble] completion failed for', sec.id, e);
            }
        }
        const bad = secs.filter(x => sectionIssues(x, d.dossier[x.id]).length).map(x => t(`sec.${x.id}`));
        return bad.length ? t('errMissing', { list: bad.join(', ') }) : '';
    });
}

function doSection(sec, instruction) {
    const s = getSettings(), d = s.draft;
    return run(t('regenerating'), async (signal) => {
        await regenSection(s, d, sec, instruction, signal);
        renderSections();
    });
}

/* ───────────── Вывод записей ───────────── */

function autosize(ta) {
    if (!ta || !ta.scrollHeight) return;
    ta.style.height = 'auto';
    ta.style.height = `${ta.scrollHeight + 2}px`;
}
function autosizeAll() { overlay?.querySelectorAll('.lv-ta-sec').forEach(autosize); }

function renderSections() {
    if (!overlay) return;
    const s = getSettings(), d = s.draft;
    const box = qs('#lv-sections');
    box.innerHTML = '';
    const has = Object.keys(d.dossier).length > 0;
    qs('#lv-empty').hidden = has;
    if (has) {
        for (const sec of activeSections(d)) {
            const card = el('div', 'lv-card');
            card.style.setProperty('--tile', sec.tile);
            const head = el('div', 'lv-card-head');
            head.innerHTML = `<span class="lv-chip"><i class="fa-solid ${sec.icon}"></i></span><span class="lv-card-title">${t(`sec.${sec.id}`)}</span>`;
            const tk = el('span', 'lv-note lv-tk');
            tk.dataset.sec = sec.id;
            head.appendChild(tk);
            card.appendChild(head);

            const ta = el('textarea', 'lv-ta lv-ta-sec');
            ta.value = d.dossier[sec.id] || '';
            ta.oninput = () => { draft().dossier[sec.id] = ta.value; autosize(ta); saveSettings(); scheduleTokens(); };
            card.appendChild(ta);

            const kr = el('div', 'lv-keys-row');
            kr.appendChild(el('span', 'lv-note', t('secKeys')));
            const ki = el('input', 'lv-input-line lv-keys');
            ki.type = 'text';
            ki.placeholder = t('secKeysPh');
            ki.value = d.keys[sec.id] ?? defaultKeys(sec, s.keysLang).join(', ');
            ki.oninput = () => {
                if (ki.value.trim()) draft().keys[sec.id] = ki.value; else delete draft().keys[sec.id];
                saveSettings();
            };
            kr.appendChild(ki);
            card.appendChild(kr);

            const row = el('div', 'lv-row lv-sec-row');
            const inp = el('input', 'lv-input-line');
            inp.type = 'text';
            inp.placeholder = t('secWish');
            const btn = el('button', 'lv-btn lv-small');
            btn.dataset.act = '';
            const filled = !!(d.dossier[sec.id] || '').trim();
            btn.innerHTML = `<i class="fa-solid ${filled ? 'fa-rotate' : 'fa-wand-magic-sparkles'}"></i> ${filled ? t('secRegen') : t('secGen')}`;
            btn.onclick = () => doSection(sec, inp.value);
            row.append(inp, btn);
            card.appendChild(row);
            box.appendChild(card);
            requestAnimationFrame(() => autosize(ta));
        }
    }
    updateTokens();
}

function scheduleTokens() {
    clearTimeout(state.tokenTimer);
    state.tokenTimer = setTimeout(updateTokens, 300);
}
async function updateTokens() {
    if (!overlay) return;
    const d = draft();
    let total = 0, count = 0;
    for (const sec of activeSections(d)) {
        const text = (d.dossier[sec.id] || '').trim();
        const n = text ? await countTokens(entryContent(d, sec, text)) : 0;
        if (!overlay) return;
        if (n) { total += n; count++; }
        const tk = overlay.querySelector(`.lv-tk[data-sec="${sec.id}"]`);
        if (tk) tk.textContent = n ? t('tok', { n }) : '';
    }
    qs('#lv-total').textContent = count ? t('total', { n: total, m: count }) : '';
}

/* ───────────── Действия ───────────── */

async function doCopy() {
    const d = draft();
    const text = assembleText(d);
    if (!text) { setStatus(t('errNothing'), true); return; }
    await copyText(text);
    setStatus(t('copied'));
}

function lorebookJson(s, d) {
    const entries = {};
    buildEntrySpecs(s, d).forEach((spec, i) => { entries[i] = wiEntry(i, spec); });
    return { entries };
}

function doExport() {
    const s = getSettings(), d = s.draft;
    const specs = buildEntrySpecs(s, d);
    if (!specs.length) { setStatus(t('errNothing'), true); return; }
    downloadJson(`${bookTitle(d).replace(/[^\w\-]+/g, '_') || 'loveble'}.json`, lorebookJson(s, d));
}

async function doCreate() {
    const s = getSettings(), d = s.draft;
    if (!mainName(d)) { setStatus(t('errName'), true); return; }
    const specs = buildEntrySpecs(s, d);
    if (!specs.length) { setStatus(t('errNothing'), true); return; }
    const book = bookTitle(d);
    try {
        await saveBook(book, specs);
    } catch (e) {
        console.error('[Loveble]', e);
        const msg = t('errBook', { msg: e.message });
        setStatus(msg, true);
        toast('error', msg);
        return;
    }
    let msg = t('created', { book, n: specs.length }), warn = false;
    if (s.attachToCard && d.target === 'char') {
        const name = mainName(d);
        try {
            const r = await attachToCharacter(d, book);
            if (r === 'attached') msg += ` ${t('attached', { name })}`;
            else if (r === 'already') msg += ` ${t('attachAlready', { name })}`;
            else if (r === 'primary') msg += ` ${t('attachPrimary', { name })}`;
            else { msg += ` ${t('attachNone', { name })}`; warn = true; }
        } catch (e) {
            console.error('[Loveble] attach failed', e);
            msg += ` ${t('attachFail')}`;
            warn = true;
        }
    }
    setStatus(msg, warn);
    toast(warn ? 'warning' : 'success', msg);
}

/* ───────────── Вкладка «Настройки» ───────────── */

const thKey = (id) => `th${id[0].toUpperCase()}${id.slice(1)}`;

function buildSettingsView() {
    const s = getSettings();
    const box = qs('#lv-settings-body');
    box.innerHTML = '';
    const group = (title) => {
        const g = el('div', 'lv-group');
        g.appendChild(el('div', 'lv-group-title', title));
        box.appendChild(g);
        return g;
    };
    const field = (g, label, ctrl, hint) => {
        const w = el('div', 'lv-field');
        w.appendChild(el('span', 'lv-field-label', label));
        w.appendChild(ctrl);
        if (hint) w.appendChild(el('small', 'lv-note', hint));
        g.appendChild(w);
        return w;
    };
    const select = (key, opts, after) => {
        const sel = el('select', 'lv-select');
        for (const [v, l] of opts) { const o = el('option', '', l); o.value = v; sel.appendChild(o); }
        sel.value = s[key];
        sel.onchange = () => { s[key] = sel.value; saveSettings(); after?.(sel.value); };
        return sel;
    };
    const number = (key, min, max, step) => {
        const i = el('input', 'lv-input-line');
        i.type = 'number'; i.min = min; i.max = max; i.step = step;
        i.value = s[key];
        i.onchange = () => {
            const v = Math.min(max, Math.max(min, parseInt(i.value, 10) || DEFAULTS[key]));
            i.value = v; s[key] = v; saveSettings();
        };
        return i;
    };
    const hintOf = (map, v) => map[v] || '';

    let g = group(t('gGeneral'));
    field(g, t('sLang'), select('lang', [['ru', 'Русский'], ['en', 'English']], (v) => {
        setLang(v);
        destroyWindow();
        openWindow('settings');
        document.dispatchEvent(new CustomEvent('lv-lang'));
    }));
    const profOpts = [['', t('sProfileCur')], ...listProfiles().map(p => [p.id, p.name])];
    if (s.profileId && !profOpts.some(o => o[0] === s.profileId)) s.profileId = '';
    field(g, t('sProfile'), select('profileId', profOpts), t('sProfileNote'));

    g = group(t('gTheme'));
    const sw = el('div', 'lv-swatches');
    for (const th of THEMES) {
        const b = el('button', 'lv-swatch');
        b.type = 'button';
        b.style.setProperty('--sw-bg', th.bg);
        b.style.setProperty('--sw-ac', th.ac);
        if (th.id === 'auto') b.classList.add('lv-sw-auto');
        b.classList.toggle('lv-active', s.theme === th.id);
        b.append(el('span', 'lv-sw-dot'), el('span', 'lv-sw-name', t(thKey(th.id))));
        b.onclick = () => {
            s.theme = th.id;
            saveSettings();
            applyTheme();
            sw.querySelectorAll('.lv-swatch').forEach(x => x.classList.toggle('lv-active', x === b));
        };
        sw.appendChild(b);
    }
    g.appendChild(sw);
    g.appendChild(el('small', 'lv-note', t('thAutoH')));

    g = group(t('gGen'));
    const cMap = { strict: t('cStrictH'), balanced: t('cBalancedH'), free: t('cFreeH') };
    const cHint = el('small', 'lv-note', hintOf(cMap, s.creativity));
    field(g, t('sCreativity'), select('creativity', [['strict', t('cStrict')], ['balanced', t('cBalanced')], ['free', t('cFree')]],
        (v) => { cHint.textContent = hintOf(cMap, v); })).appendChild(cHint);
    const grid = el('div', 'lv-s-grid');
    field(grid, t('sWords'), number('entryWords', 40, 300, 10));
    field(grid, t('sMax'), number('maxResponse', 500, 16000, 100));
    g.appendChild(grid);

    g = group(t('gBook'));
    field(g, t('sKeysLang'), select('keysLang', [['en', t('kEn')], ['ru', t('kRu')], ['both', t('kBoth')]], () => renderSections()));
    const trMap = { selective: t('trSelH'), topic: t('trTopicH'), name: t('trNameH'), always: t('trAlwaysH') };
    const trHint = el('small', 'lv-note', hintOf(trMap, s.trigger));
    field(g, t('sTrigger'), select('trigger', [['selective', t('trSel')], ['topic', t('trTopic')], ['name', t('trName')], ['always', t('trAlways')]],
        (v) => { trHint.textContent = hintOf(trMap, v); })).appendChild(trHint);
    const att = el('label', 'lv-check');
    const attCb = document.createElement('input');
    attCb.type = 'checkbox';
    attCb.checked = !!s.attachToCard;
    attCb.onchange = () => { s.attachToCard = attCb.checked; saveSettings(); };
    att.append(attCb, el('span', '', t('sAttach')));
    g.appendChild(att);
    g.appendChild(el('small', 'lv-note', t('sAttachH')));
    field(g, t('sPosition'), select('position', [['before', t('posBefore')], ['after', t('posAfter')]]));
    const pat = el('input', 'lv-input-line');
    pat.type = 'text';
    pat.value = s.bookPattern;
    pat.oninput = () => { s.bookPattern = pat.value || DEFAULTS.bookPattern; saveSettings(); };
    field(g, t('sPattern'), pat, t('sPatternH'));
}

/* Панель на странице расширений: описание и кнопка открытия */
function mountSettings() {
    document.getElementById('lv_settings')?.remove();
    const root = el('div');
    root.id = 'lv_settings';
    root.innerHTML = `
    <div class="inline-drawer">
      <div class="inline-drawer-toggle inline-drawer-header">
        <b>Loveble — ${t('subtitle')}</b>
        <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
      </div>
      <div class="inline-drawer-content">
        <small>${t('extDesc')}</small>
        <button class="menu_button" id="lv_s_open"><i class="fa-solid fa-heart"></i> ${t('sOpen')}</button>
      </div>
    </div>`;
    (document.getElementById('extensions_settings2') || document.getElementById('extensions_settings')).appendChild(root);
    root.querySelector('#lv_s_open').onclick = () => openWindow();
}

/* ═══ entry ═══ */
function registerSlash() {
    try {
        const { SlashCommandParser, SlashCommand } = SillyTavern.getContext();
        SlashCommandParser.addCommandObject(SlashCommand.fromProps({
            name: 'loveble',
            callback: () => { openWindow(); return ''; },
            helpString: 'Open Loveble (love languages and affection lorebook builder).',
        }));
    } catch (e) {
        console.warn('[Loveble] slash command not registered', e);
    }
}

jQuery(() => {
    injectStyles();
    const s = getSettings();
    setLang(s.lang);
    mountSettings();
    registerSlash();
    initGlobalHandlers();
    document.addEventListener('lv-lang', mountSettings);
});
