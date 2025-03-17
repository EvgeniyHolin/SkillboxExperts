const experts = [
  {
    imagePath: '/src/images/experts/Shinkevich-desktop.jpg',
    imagePath2x: '/src/images/experts/Shinkevich-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Shinkevich-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Shinkevich-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Shinkevich-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Shinkevich-mobile@2x.jpg',
    imageCompany: 'icon-skillbox',
    name: 'Александра Шинкевич',
    tags: ['Фронтенд', 'Веб-вёрстка'],
    info: [
      'Эксперт по&nbsp;веб-разработке. Опыт 10+&nbsp;лет.',
      'Организатор сообществ по&nbsp;фронтенду в&nbsp;MinskCSS и&nbsp;MinskJS. Спикер конференции FrontendConf и&nbsp;митапов. Амбассадор WomenTechmakers.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Tsyganov-desktop.jpg',
    imagePath2x: '/src/images/experts/Tsyganov-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Tsyganov-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Tsyganov-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Tsyganov-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Tsyganov-mobile@2x.jpg',
    imageCompany: 'icon-skillbox',
    name: 'Олег Цыганов',
    tags: ['Фронтенд', 'Веб-вёрстка'],
    info: [
      'Фронтенд-разработчик. Автор курса &laquo;Веб-верстка 3.0&raquo;.',
      'Team Lead команды экспертов в&nbsp;Skillbox. Наставник и&nbsp;ментор для начинающих веб-разработчиков.',
      'Стек: HTML (PUG, Astro), CSS, JS, TS, Vue, Nuxt, GSAP'
    ],
    socials: [
      {
        icon: 'icon-tg',
        link: 'https://t.me/tsyganovoleg'
      }
    ]
  },
  {
    imagePath: '/src/images/experts/Zharkova-desktop.jpg',
    imagePath2x: '/src/images/experts/Zharkova-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Zharkova-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Zharkova-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Zharkova-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Zharkova-mobile@2x.jpg',
    imageCompany: 'icon-usetech',
    name: 'Анна Жаркова',
    tags: ['Мобильная разработка'],
    info: [
      'Lead Mobile Developer. Опыт 10+&nbsp;лет. Амбассадор-консультант в&nbsp;Skillbox.',
      'Создаёт нативные приложения для iOS и&nbsp;Android, кросс-платформенные приложения на&nbsp;Xamarin и&nbsp;Kotlin Multiplatform. \
      Эксперт в&nbsp;разработке, автор на&nbsp;&laquo;<a class="expert-card__paragraph-link" href="https://habr.com/ru/users/anioutka/publications/articles/">Хабр</a>&raquo; \
      и&nbsp;Medium. Член программного комитета <a class="expert-card__paragraph-link" href="https://mobiusconf.com/archive/2022%20Autumn/persons/ca3dfe3cbd8d44fbb38a72fa5d0fde85/">Mobius</a>, CodeFest, &laquo;Стачка&raquo;.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Emelyanov-desktop.jpg',
    imagePath2x: '/src/images/experts/Emelyanov-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Emelyanov-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Emelyanov-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Emelyanov-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Emelyanov-mobile@2x.jpg',
    imageCompany: 'icon-bloomtech',
    name: 'Пётр Емельянов',
    tags: ['Машинное обучение'],
    info: [
      'CEO Bloom Tech, R&amp;D Director Ubic.<br>Эксперт Skillbox по&nbsp;ML и&nbsp;нейросетям.',
      'Опыт 15+&nbsp;лет. Реализовал B2B-проекты, работает над deep-tech стартапом в&nbsp;области финансов, криптографии и&nbsp;анализа данных. Эксперт в&nbsp;алгоритмах, Python и&nbsp;ML-моделях.',
      'Специализация: разработка, AI/ML, кибербезопасность, IT-менеджмент.'
    ],
    socials: [
      {
        icon: 'icon-linkedin',
        link: 'https://www.linkedin.com/in/emelianovpeter/'
      }
    ]
  },
  {
    imagePath: '/src/images/experts/Smirnov-desktop.jpg',
    imagePath2x: '/src/images/experts/Smirnov-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Smirnov-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Smirnov-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Smirnov-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Smirnov-mobile@2x.jpg',
    imageCompany: 'icon-kongru',
    name: 'Антон Смирнов',
    tags: ['Data Science'],
    info: [
      'Руководитель в&nbsp;<a class="expert-card__paragraph-link" href="https://kongru.consulting/">Kongru.consulting</a>. Эксперт курсов по&nbsp;Data Science в&nbsp;Skillbox. Опыт 10+&nbsp;лет.',
      'Внедрил BI-проекты для компаний Webinar, EGIS и&nbsp;&laquo;Донстрой&raquo;. Тренер Microsoft, провёл тренинги для KPMG, Accenture. Занимался аналитикой в&nbsp;Softline и&nbsp;&laquo;Татнефть&raquo;.'
    ],
    socials: [
      {
        icon: 'icon-tg',
        link: 'https://t.me/analyticstoday'
      }
    ]
  },
  {
    imagePath: '/src/images/experts/Muradov-desktop.jpg',
    imagePath2x: '/src/images/experts/Muradov-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Muradov-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Muradov-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Muradov-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Muradov-mobile@2x.jpg',
    imageCompany: 'icon-sberdevices',
    name: 'Руслан Мурадов',
    tags: ['QA'],
    info: [
      'QA&nbsp;Lead.<br>Эксперт Skillbox на&nbsp;курсе <a class="expert-card__paragraph-link" href="https://skillbox.ru/course/profession-test/?utm_source=media&utm_medium=link&utm_campaign=all_all_media_links_links_articles_all_all_skillbox">&laquo;Инженер&nbspпо&nbsp;тестированию&raquo;</a>.',
      'Опыт 10+&nbsp;лет в&nbsp;IT. Занимал руководящие позиции в&nbsp;BORK, Yandex, VK, UnaBank.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Troickiy-desktop.jpg',
    imagePath2x: '/src/images/experts/Troickiy-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Troickiy-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Troickiy-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Troickiy-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Troickiy-mobile@2x.jpg',
    imageCompany: 'icon-sber',
    name: 'Роман Троицкий',
    tags: ['Веб-разработка'],
    info: [
      'Фронтенд/React-разработчик, Senior JavaScript Developer. Курс &laquo;Веб-вёрстка 3.0&raquo; в&nbsp;Skillbox.',
      'Соорганизатор MoscowCSS митапа. Спикер: Dump 2024, SberJS, MSK VueJS, Frontend Night. Приглашённый эксперт: HolyJS, HeisenBug, BreakPoint Форум, Fit-m.'
    ],
    socials: [
      {
        icon: 'icon-tg',
        link: 'https://t.me/vzhyx_exp'
      }
    ]
  },
  {
    imagePath: '/src/images/experts/Pan-desktop.jpg',
    imagePath2x: '/src/images/experts/Pan-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Pan-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Pan-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Pan-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Pan-mobile@2x.jpg',
    imageCompany: 'icon-kuper',
    name: 'Екатерина Пан',
    tags: ['Продуктовая аналитика'],
    info: [
      'Руководитель отдела продуктовой аналитики. Эксперт курса Data Analyst.',
      'Работала в&nbsp;Kraft Heinz, Schneider Electric и&nbsp;Uchi.ru. \
      Специалист по&nbsp;анализу данных в&nbsp;Python, Tableau, Excel с&nbsp;использованием макросов, SQL и&nbsp;Adobe Illustrator. '
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Mashkovcev-desktop.jpg',
    imagePath2x: '/src/images/experts/Mashkovcev-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Mashkovcev-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Mashkovcev-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Mashkovcev-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Mashkovcev-mobile@2x.jpg',
    imageCompany: 'icon-tbank',
    name: 'Андрей Машковцев',
    tags: ['Data-аналитика'],
    info: [
      'Старший аналитик DWH. Амбассадор-консультант.',
      'Опыт 5+&nbsp;лет в&nbsp;разработке дашбордов и&nbsp;BI-аналитике. Использует SQL и&nbsp;Python.'
    ],
    socials: [
      {
        icon: 'icon-tg',
        link: 'https://t.me/analytics_lifehacks'
      }
    ]
  },
  {
    imagePath: '/src/images/experts/Fattahova-desktop.jpg',
    imagePath2x: '/src/images/experts/Fattahova-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Fattahova-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Fattahova-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Fattahova-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Fattahova-mobile@2x.jpg',
    imageCompany: 'icon-sber',
    name: 'Юлдуз Фаттахова',
    tags: ['Data Science'],
    info: [
      'AI&nbsp;Product Manager, Sber Data. Программный директор курса по&nbsp;Machine Learning.',
      'Опыт 5+&nbsp;лет. Технический лидер продукта в&nbsp;&laquo;Сбербанк&raquo;.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Horenyan-desktop.jpg',
    imagePath2x: '/src/images/experts/Horenyan-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Horenyan-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Horenyan-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Horenyan-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Horenyan-mobile@2x.jpg',
    imageCompany: 'icon-mts',
    name: 'Сурен Хоренян',
    tags: ['Бэкенд', 'Python'],
    info: [
      'Руководитель группы разработки в&nbsp;компании MTS AI. Эксперт курса Skillbox &laquo;Python-фреймворк Django&raquo;.',
      'Backend-разработчик на&nbsp;Python, Open Source Contributor, лектор и&nbsp;тьютор.',
      'Стек: Python&nbsp;3, asyncio, SQLAlchemy, FastAPI, Django.'
    ],
    socials: [
      {
        icon: 'icon-tg',
        link: 'https://t.me/Khorenyan'
      }
    ]
  },
  {
    imagePath: '/src/images/experts/Fedoseev-desktop.jpg',
    imagePath2x: '/src/images/experts/Fedoseev-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Fedoseev-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Fedoseev-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Fedoseev-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Fedoseev-mobile@2x.jpg',
    imageCompany: 'icon-alfa',
    name: 'Вадим Федосеев',
    tags: ['Бэкенд', 'Архитектура'],
    info: [
      'Principal Software Developer, Team Lead. Эксперт курса Skillbox &laquo;Архитектор ПО&raquo;. Проверяющий куратор.',
      'Эксперт в&nbsp;Java, Solution Architecture, System Performance. Проводит консультации по&nbsp;Java, Spring и&nbsp;Software Architecture.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Balihin-desktop.jpg',
    imagePath2x: '/src/images/experts/Balihin-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Balihin-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Balihin-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Balihin-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Balihin-mobile@2x.jpg',
    imageCompany: 'icon-gazprombank',
    name: 'Никита Балихин',
    tags: ['Фронтенд'],
    info: [
      'Tech Lead. Курс Skillbox &laquo;Веб-разработка&raquo;.',
      'Опыт 5+&nbsp;лет.',
      'Стек: React и&nbsp;всё, что с&nbsp;ним связано.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Kuzmicheva-desktop.jpg',
    imagePath2x: '/src/images/experts/Kuzmicheva-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Kuzmicheva-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Kuzmicheva-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Kuzmicheva-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Kuzmicheva-mobile@2x.jpg',
    imageCompany: 'icon-skillbox',
    name: 'Мария Кузьмичева',
    tags: ['Фронтенд'],
    info: [
      'Курс &laquo;Фронтенд-разработчик&raquo; в&nbsp;Skillbox.',
      'Опыт в&nbsp;коммерческой разработке. Внедряла систему компонентов для ускорения работы компаний. Работала Team Lead в&nbsp;аутсорсинговом агентстве &laquo;Лига&nbsp;А&raquo;.',
      'Стек: HTML (PUG, Astro), CSS (SCSS), JS&nbsp;(нативный), Gulp, Webpack, GSAP, Figma.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Kulaev-desktop.jpg',
    imagePath2x: '/src/images/experts/Kulaev-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Kulaev-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Kulaev-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Kulaev-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Kulaev-mobile@2x.jpg',
    imageCompany: 'icon-vk-company',
    name: 'Максим Кулаев',
    tags: ['Data-аналитика'],
    info: [
      'Team Lead. Программный директор курса &laquo;Data Analyst. Junior&raquo; в&nbsp;Skillbox.',
      'Проводит исследования в&nbsp;сфере NLP. Работал в&nbsp;&laquo;Ренессанс Страховании&raquo; и&nbsp;НИУ ВШЭ. Разбирается в&nbsp;требованиях к&nbsp;Data Scientist.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Nekrasov-desktop.jpg',
    imagePath2x: '/src/images/experts/Nekrasov-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Nekrasov-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Nekrasov-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Nekrasov-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Nekrasov-mobile@2x.jpg',
    imageCompany: 'icon-mts',
    name: 'Алексей Некрасов',
    tags: ['Python'],
    info: [
      'Руководитель группы архитекторов.',
      'Программный директор направления Python в&nbsp;Skillbox.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Nemalcev-desktop.jpg',
    imagePath2x: '/src/images/experts/Nemalcev-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Nemalcev-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Nemalcev-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Nemalcev-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Nemalcev-mobile@2x.jpg',
    imageCompany: 'icon-vk-company',
    name: 'Александр Немальцев',
    tags: ['Data-Science'],
    info: [
      'Руководитель группы машинного обучения.',
      'Эксперт курса &laquo;SQL для анализа данных&raquo; в&nbsp;Skillbox.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Kamardin-desktop.jpg',
    imagePath2x: '/src/images/experts/Kamardin-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Kamardin-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Kamardin-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Kamardin-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Kamardin-mobile@2x.jpg',
    imageCompany: 'icon-rostelecom',
    name: 'Андрей Камардин',
    tags: ['Эксплуатация'],
    info: [
      'Ведущий системный инженер. Курс &laquo;Администрирование Windows и&nbsp;работа с&nbsp;PowerShell&raquo; в&nbsp;Skillbox.',
      'Участвовал в&nbsp;премии разработок в&nbsp;области&nbsp;ИИ и&nbsp;машинного обучения &laquo;Гравитация&raquo;. \
      Преподает в&nbsp;МАИ, амбассадор и&nbsp;эксперт в&nbsp;&laquo;Цифровых прорывах&raquo;.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Shibkov-desktop.jpg',
    imagePath2x: '/src/images/experts/Shibkov-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Shibkov-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Shibkov-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Shibkov-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Shibkov-mobile@2x.jpg',
    imageCompany: 'icon-sdek',
    name: 'Константин Шибков',
    tags: ['Java-разработка'],
    info: [ 
      'Senior Java-разработчик. Эксперт курса Java в&nbsp;Skillbox.',
      'Эксперт в&nbsp;области Java, Spring Boot, архитектуры внутреннего устройства приложений. \
      Консультирует по&nbsp;Java, Spring Boot. Организатор <a class="expert-card__paragraph-link" href="https://habr.com/ru/companies/skillbox/articles/591623/">Java Challenge</a> \
      и <a class="expert-card__paragraph-link" href="https://agileufa.ru/">#AgileUfa митапов</a>.'
    ],
    socials: [
      {
        icon: 'icon-tg',
        link: 'https://t.me/three_monitors'
      }
    ]
  },
  {
    imagePath: '/src/images/experts/Artuhov-desktop.jpg',
    imagePath2x: '/src/images/experts/Artuhov-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Artuhov-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Artuhov-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Artuhov-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Artuhov-mobile@2x.jpg',
    imageCompany: 'icon-gazprombank',
    name: 'Владимир Артюхов',
    tags: ['Фронтенд'],
    info: [
      'Эксперт направления &laquo;Фронтенд&raquo; в&nbsp;Skillbox.',
      'Работал в&nbsp;EPAM.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Groshev-desktop.jpg',
    imagePath2x: '/src/images/experts/Groshev-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Groshev-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Groshev-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Groshev-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Groshev-mobile@2x.jpg',
    imageCompany: 'icon-skillbox',
    name: 'Леонид Грошев',
    tags: ['Финтех'],
    info: [
      'Senior бэкенд-разработчик. Эксперт по&nbsp;бэкенд-разработке в&nbsp;Skillbox. Опыт 10+&nbsp;лет.',
      'Пишет Unit, Functional, End-to-End тесты. Применяет: SOLID, CI/CD, DDD, TDD, OWASP TOP-10, SAGA.'
    ],
    socials: [
      {
        icon: 'icon-tg',
        link: 'https://t.me/otezvikentiy_tech'
      }
    ]
  },
  {
    imagePath: '/src/images/experts/Bulgakov-desktop.jpg',
    imagePath2x: '/src/images/experts/Bulgakov-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Bulgakov-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Bulgakov-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Bulgakov-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Bulgakov-mobile@2x.jpg',
    imageCompany: 'icon-skillbox',
    name: 'Илья Булгаков',
    tags: ['Data-аналитика'],
    info: [
      'Курс &laquo;Data Analyst&raquo; в&nbsp;Skillbox.',
      'Анализирует фактические цены, работает с&nbsp;прибыльностью портфеля и&nbsp;рассчитывает маржинальность продуктов.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Aliphanova-desktop.jpg',
    imagePath2x: '/src/images/experts/Aliphanova-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Aliphanova-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Aliphanova-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Aliphanova-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Aliphanova-mobile@2x.jpg',
    imageCompany: 'icon-x5',
    name: 'Ольга Алифанова',
    tags: ['QA'],
    info: [
      'Старший специалист по&nbsp;тестированию. Эксперт курса по&nbsp;тестированию в&nbsp;Skillbox.',
      'Автор и&nbsp;переводчик материалов для портала тестировщиков <a class="expert-card__paragraph-link" href="https://software-testing.ru/">software-testing.ru.</a>'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Tiunov-desktop.jpg',
    imagePath2x: '/src/images/experts/Tiunov-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Tiunov-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Tiunov-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Tiunov-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Tiunov-mobile@2x.jpg',
    imageCompany: 'icon-skillbox',
    name: 'Тимофей Тиунов',
    tags: ['Архитектор'],
    info: [
      'Системный архитектор. Опыт 10+&nbsp;лет. Эксперт курса &laquo;Фронтенд-разработчик&raquo;.',
      'Путь в&nbsp;веб-разработке: от&nbsp;фронтенда до&nbsp;CI, от&nbsp;E-Commerce до&nbsp;EdTech.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Anikin-desktop.jpg',
    imagePath2x: '/src/images/experts/Anikin-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Anikin-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Anikin-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Anikin-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Anikin-mobile@2x.jpg',
    imageCompany: 'icon-skillbox',
    name: 'Александр Аникин',
    tags: ['Мобильная разработка'],
    info: [
      'Team Lead команды по&nbsp;Андроид-разработке в&nbsp;&laquo;Айти&raquo; (бывший Ecwid).',
      'Амбассадор-консультант в&nbsp;Skillbox.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Borodina-desktop.jpg',
    imagePath2x: '/src/images/experts/Borodina-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Borodina-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Borodina-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Borodina-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Borodina-mobile@2x.jpg',
    imageCompany: 'icon-skillbox',
    name: 'Юлия Бородина',
    tags: ['Геймдев'],
    info: [
      'Руководитель направления &laquo;Игры&raquo; и&nbsp;студии по&nbsp;разработке игр GameBox в&nbsp;Skillbox.',
      'Менеджер, эксперт по&nbsp;геймдеву, бывший менеджер игры Lineage&nbsp;2. Работала с&nbsp;VK&nbsp;Fest, &laquo;Самокат&raquo;, создавала AR-выставку для музея в&nbsp;Царицыно.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Kolesnikov-desktop.jpg',
    imagePath2x: '/src/images/experts/Kolesnikov-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Kolesnikov-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Kolesnikov-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Kolesnikov-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Kolesnikov-mobile@2x.jpg',
    imageCompany: 'icon-gazprombank',
    name: 'Владислав Колесников',
    tags: ['Фронтенд'],
    info: [
      'Главный инженер разработки.',
      'Эксперт Skillbox по&nbsp;модулю &laquo;Асинхронность и&nbsp;промисы&raquo;, курс &laquo;JavaScript&raquo;.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Zverev-desktop.jpg',
    imagePath2x: '/src/images/experts/Zverev-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Zverev-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Zverev-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Zverev-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Zverev-mobile@2x.jpg',
    imageCompany: 'icon-skillbox',
    name: 'Дмитрий Зверев',
    tags: ['Phd'],
    info: [
      'Phd, бизнес-психолог в&nbsp;сфере образования',
      'Амбассадор-консультант в&nbsp;Skillbox.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Mardeev-desktop.jpg',
    imagePath2x: '/src/images/experts/Mardeev-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Mardeev-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Mardeev-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Mardeev-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Mardeev-mobile@2x.jpg',
    imageCompany: 'icon-skillbox',
    name: 'Владимир Мардеев',
    tags: ['DevOps', 'Эксплуатация'],
    info: [
      'DevOps инженер в&nbsp;&laquo;ИнтернетУрок&raquo;.',
      'Автор модулей Skillbox в&nbsp;профессии DevOps-инженер: Docker Builder, Dockerfile, &laquo;Оркестрация контейнеров&raquo;.',
      'Стек: Bash, Python, GitLab, Ansible, Docker, Kubernetes, Helm, ArgoCD.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Gordeev-desktop.jpg',
    imagePath2x: '/src/images/experts/Gordeev-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Gordeev-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Gordeev-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Gordeev-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Gordeev-mobile@2x.jpg',
    imageCompany: 'icon-tabby',
    name: 'Роман Гордеев',
    tags: ['Python', 'Тестирование'],
    info: [
      'Tech Lead в&nbsp;Tabby. Автор курсов по тестированию на&nbsp;Python в&nbsp;Skillbox.',
      'В&nbsp;2000-м году впервые увидел чёрный экран FreeBSD 4.0 и&nbsp;полюбил Unix-консоль с&nbsp;первого взгляда.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Kokurov-desktop.jpg',
    imagePath2x: '/src/images/experts/Kokurov-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Kokurov-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Kokurov-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Kokurov-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Kokurov-mobile@2x.jpg',
    imageCompany: 'icon-it-expert',
    name: 'Глеб Кокуров',
    tags: ['1С'],
    info: [
      'Ведущий программист 1С. Эксперт Skillbox по&nbsp;1С.',
      'Стек: 1С, 1С:EDT; есть опыт настройки CI/CD и&nbsp;Jenkins.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Zolotuhin-desktop.jpg',
    imagePath2x: '/src/images/experts/Zolotuhin-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Zolotuhin-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Zolotuhin-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Zolotuhin-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Zolotuhin-mobile@2x.jpg',
    imageCompany: 'icon-alfa-capital',
    name: 'Игорь Золотухин',
    tags: ['QA'],
    info: [
      'QA&nbsp;Lead Automation. Эксперт по&nbsp;профессии &laquo;Тестирование&raquo; в&nbsp;Skillbox.',
      'Стек: JavaScript, Cucumber, Fiddler, Postman, SoapUI.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Kolmakov-desktop.jpg',
    imagePath2x: '/src/images/experts/Kolmakov-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Kolmakov-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Kolmakov-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Kolmakov-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Kolmakov-mobile@2x.jpg',
    imageCompany: 'icon-sber',
    name: 'Ефим Колмаков',
    tags: ['Фронтенд'],
    info: [
      'Фронтенд-разработчик. Эксперт по&nbsp;Vue.js в&nbsp;Skillbox.',
      'Разработчик проекта по&nbsp;управлению рисками и&nbsp;UI&nbsp;Kit банков. Автор универсальных плагинов, библиотек и&nbsp;сайтов с&nbsp;большим количеством интеграций: Aeroflot, S7, РЖД.',
      'Стек: Vue2/Vue3, Nuxt2, Native JavaScript, TypeScript, Pinia, VueRouter, Vite, AntDesign.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Ponomarev-desktop.jpg',
    imagePath2x: '/src/images/experts/Ponomarev-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Ponomarev-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Ponomarev-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Ponomarev-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Ponomarev-mobile@2x.jpg',
    imageCompany: 'icon-purrweb',
    name: 'Сергей Пономарёв',
    tags: ['Веб-разработка'],
    info: [
      'СТО компании Purrweb. Программа &laquo;Веб-разработчик&raquo;. Амбассадор-консультант в&nbsp;Skillbox, участвовал в&nbsp;CustDev.',
      'Опыт 10+&nbsp;лет. Fullstack-разработчик, постоянный спикер конференций.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Alkaev-desktop.jpg',
    imagePath2x: '/src/images/experts/Alkaev-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Alkaev-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Alkaev-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Alkaev-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Alkaev-mobile@2x.jpg',
    imageCompany: 'icon-rosbank',
    name: 'Роман Алькаев',
    tags: ['Data Engineer'],
    info: [
      'Ведущий специалист Data Engineer (middle+) в&nbsp;центре компетенций аналитических систем и&nbsp;рисков.',
      'Стек: Python, SQL, DWH, IBM DataStage, WinSCP, DBeaver, Jupyter, Bash, Gitlab, Jira.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Panov-desktop.jpg',
    imagePath2x: '/src/images/experts/Panov-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Panov-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Panov-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Panov-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Panov-mobile@2x.jpg',
    imageCompany: 'icon-skillbox',
    name: 'Владислав Панов',
    tags: ['Фронтенд'],
    info: [
      'Фронтенд-разработчик уровня Senior, Team Lead. Курс по&nbsp;фронтенд-разработке в&nbsp;Skillbox.',
      'Занимался коммерческой разработкой веб-приложений на&nbsp;React и&nbsp;мобильных&nbsp;&mdash; на&nbsp;React Native. Прошёл путь от&nbsp;стартапов и&nbsp;финтехов до&nbsp;WB&nbsp;Tech. Ментор, начинающий спикер.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Iskanova-desktop.jpg',
    imagePath2x: '/src/images/experts/Iskanova-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Iskanova-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Iskanova-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Iskanova-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Iskanova-mobile@2x.jpg',
    imageCompany: 'icon-sbi',
    name: 'Лилия Исканова',
    tags: ['QA'],
    info: [
      'Head of&nbsp;QA. Эксперт по&nbsp;QA в&nbsp;Skillbox. Опыт 10+&nbsp;лет.',
      'Работала в&nbsp;ФГ&nbsp;&laquo;БКС&raquo;, &laquo;Лиге цифровой экономики&raquo;, &laquo;Билайн&raquo;. Подбирает, оценивает и&nbsp;обучает тестировщиков. Организует процесс тестирования.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Kozlov-desktop.jpg',
    imagePath2x: '/src/images/experts/Kozlov-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Kozlov-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Kozlov-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Kozlov-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Kozlov-mobile@2x.jpg',
    imageCompany: 'icon-inotech',
    name: 'Александр Козлов',
    tags: ['Автоматизация тестирования'],
    info: [
      'Главный инженер по&nbsp;тестированию в&nbsp;&laquo;Иннотех&raquo;, Team Lead. Эксперт по&nbsp;автоматизации тестирования Skillbox.',
      'Стек автоматизации: Java, RestAssured, Gradle, Maven, Selenide, Kafka, Allure, Spring, Spring Data jpa.'
    ],
    socials: []
  },
  {
    imagePath: '/src/images/experts/Legkov-desktop.jpg',
    imagePath2x: '/src/images/experts/Legkov-desktop@2x.jpg',
    imagePathTablet: '/src/images/experts/Legkov-tablet.jpg',
    imagePathTablet2x: '/src/images/experts/Legkov-tablet@2x.jpg',
    imagePathMobile: '/src/images/experts/Legkov-mobile.jpg',
    imagePathMobile2x: '/src/images/experts/Legkov-mobile@2x.jpg',
    imageCompany: 'icon-kotelov',
    name: 'Влад Легков',
    tags: ['Веб-разработка'],
    info: [
      'Team Lead фронтенд-разработки.',
      'Амбассадор-консультант в&nbsp;Skillbox, участвовал в&nbsp;CustDev. Курс &laquo;Веб-разработка&raquo;.'
    ],
    socials: []
  },
];

export default experts;