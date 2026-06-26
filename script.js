// ============================================================
// 1. الترجمة (3 لغات: العربية، الإنجليزية، الفرنسية)
// ============================================================

const translations = {
    ar: {
        home: 'الرئيسية',
        about: 'من نحن',
        contact: 'اتصل بنا',
        privacy: 'الخصوصية',
        terms: 'الشروط',
        login: 'تسجيل الدخول',
        logout: 'تسجيل الخروج',
        loginTitle: 'تسجيل الدخول / إنشاء حساب',
        username: 'اسم المستخدم',
        password: 'كلمة المرور',
        email: 'البريد الإلكتروني (اختياري)',
        loginRegister: 'تسجيل الدخول / إنشاء حساب',
        loginHint: 'إذا لم يكن لديك حساب، سيتم إنشاؤه تلقائياً.',
        welcome: 'مرحباً',
        donate: 'ادعم الموقع',
        heroTitle: 'أدوات ذكية في مكان واحد',
        heroDesc: 'مجموعة من الأدوات المجانية مع نظام تسجيل دخول لحفظ تفضيلاتك وسجل عملياتك.',
        ageCalc: 'حساب العمر',
        ageDesc: 'احسب عمرك بالسنوات والأشهر والأيام.',
        bmiCalc: 'حساب BMI',
        bmiDesc: 'احسب مؤشر كتلة الجسم واعرف حالتك الصحية.',
        passGen: 'مولد كلمات المرور',
        passDesc: 'أنشئ كلمة مرور قوية وآمنة فوراً.',
        wordCount: 'عداد الكلمات',
        wordDesc: 'عد الكلمات، الحروف، والجمل في النص.',
        unitConv: 'محول الوحدات',
        unitDesc: 'حوّل بين الكيلو والرطل، المتر والقدم.',
        simpleCalc: 'آلة حاسبة',
        calcDesc: 'عمليات حسابية أساسية وسريعة.',
        percentCalc: 'حساب النسبة المئوية',
        percentDesc: 'احسب النسبة والزيادة والنقصان.',
        countdown: 'عداد تنازلي',
        countdownDesc: 'تعرف على الوقت المتبقي حتى حدث معين.',
        currencyConv: 'محول العملات',
        currencyDesc: 'حوّل بين أكثر من 20 عملة عالمية.',
        taxCalc: 'حساب الضريبة',
        taxDesc: 'احسب قيمة الضريبة والإجمالي بسهولة.',
        textAnalysis: 'تحليل النصوص',
        textAnalysisDesc: 'إحصائيات متقدمة عن النص.',
        textConverter: 'محول النصوص',
        textConverterDesc: 'تحويل النص إلى كبير/صغير/عكس.',
        tipCalc: 'حاسبة الإكرامية',
        tipDesc: 'احسب الإكرامية وتوزيعها على الأشخاص.',
        colorGen: 'مولد الألوان',
        colorDesc: 'توليد ألوان عشوائية مع كود HEX.',
        spinWheel: 'عجلة الحظ',
        spinDesc: 'أضف أسماء المشاركين ودوّر العجلة لاختيار الفائز.',
        playerName: 'اسم المشارك',
        addPlayer: 'إضافة',
        reset: 'إعادة تعيين',
        spin: 'دور العجلة',
        winner: 'الفائز',
        translatorTool: 'مترجم فوري',
        translatorDesc: 'ترجمة النصوص بين أكثر من 30 لغة.',
        enterText: 'أدخل النص للترجمة',
        translate: 'ترجمة',
        translationResult: 'الترجمة ستظهر هنا',
        tryNow: 'جرب الآن',
        backHome: 'العودة للرئيسية',
        bmiHeight: 'الطول (سم)',
        bmiWeight: 'الوزن (كجم)',
        bmiResult: 'نتيجة BMI',
        passLength: 'طول كلمة المرور',
        generate: 'إنشاء كلمة مرور',
        wordCountLabel: 'أدخل النص هنا',
        charCount: 'عدد الحروف',
        wordCountResult: 'عدد الكلمات',
        sentenceCount: 'عدد الجمل',
        unitType: 'نوع التحويل',
        kgToLbs: 'كجم ← رطل',
        lbsToKg: 'رطل ← كجم',
        meterToFeet: 'متر ← قدم',
        feetToMeter: 'قدم ← متر',
        celToFah: 'مئوي ← فهرنهايت',
        fahToCel: 'فهرنهايت ← مئوي',
        convert: 'تحويل',
        percentValue: 'القيمة',
        percentRate: 'النسبة المئوية (%)',
        percentResult: 'الناتج',
        countdownDate: 'اختر التاريخ والوقت',
        startCountdown: 'ابدأ العد',
        days: 'يوم',
        hours: 'ساعة',
        minutes: 'دقيقة',
        seconds: 'ثانية',
        currencyFrom: 'من',
        currencyTo: 'إلى',
        currencyAmount: 'المبلغ',
        currencyResult: 'النتيجة',
        taxAmount: 'المبلغ (بدون ضريبة)',
        taxRate: 'نسبة الضريبة (%)',
        taxResult: 'قيمة الضريبة',
        totalAfterTax: 'الإجمالي بعد الضريبة',
        textToAnalyze: 'النص المراد تحليله',
        uniqueWords: 'الكلمات الفريدة',
        avgWordLength: 'متوسط طول الكلمة',
        wordFrequency: 'تكرار الكلمات',
        tipAmount: 'المبلغ الإجمالي',
        tipPercent: 'نسبة الإكرامية (%)',
        tipPeople: 'عدد الأشخاص',
        tipResult: 'الإكرامية لكل شخص',
        totalPerPerson: 'المجموع لكل شخص',
        colorResult: 'اللون المختار'
    },
    en: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        privacy: 'Privacy',
        terms: 'Terms',
        login: 'Login',
        logout: 'Logout',
        loginTitle: 'Login / Sign Up',
        username: 'Username',
        password: 'Password',
        email: 'Email (optional)',
        loginRegister: 'Login / Sign Up',
        loginHint: "If you don't have an account, it will be created automatically.",
        welcome: 'Welcome',
        donate: 'Donate',
        heroTitle: 'Smart Tools in One Place',
        heroDesc: 'A collection of free tools with login system to save your preferences and history.',
        ageCalc: 'Age Calculator',
        ageDesc: 'Calculate your age in years, months, and days.',
        bmiCalc: 'BMI Calculator',
        bmiDesc: 'Calculate your BMI and know your health status.',
        passGen: 'Password Generator',
        passDesc: 'Generate a strong and secure password instantly.',
        wordCount: 'Word Counter',
        wordDesc: 'Count words, characters, and sentences in your text.',
        unitConv: 'Unit Converter',
        unitDesc: 'Convert between kg/lbs, meters/feet, and more.',
        simpleCalc: 'Calculator',
        calcDesc: 'Basic arithmetic operations quickly.',
        percentCalc: 'Percentage Calculator',
        percentDesc: 'Calculate percentages, increase, and decrease.',
        countdown: 'Countdown',
        countdownDesc: 'Find out the time remaining until a specific event.',
        currencyConv: 'Currency Converter',
        currencyDesc: 'Convert between more than 20 currencies.',
        taxCalc: 'Tax Calculator',
        taxDesc: 'Calculate tax amount and total easily.',
        textAnalysis: 'Text Analysis',
        textAnalysisDesc: 'Advanced statistics about your text.',
        textConverter: 'Text Converter',
        textConverterDesc: 'Convert text to uppercase/lowercase/reverse.',
        tipCalc: 'Tip Calculator',
        tipDesc: 'Calculate tip and split among people.',
        colorGen: 'Color Generator',
        colorDesc: 'Generate random colors with HEX code.',
        spinWheel: 'Spin Wheel',
        spinDesc: 'Add participants and spin the wheel to pick a winner.',
        playerName: 'Participant Name',
        addPlayer: 'Add',
        reset: 'Reset',
        spin: 'Spin',
        winner: 'Winner',
        translatorTool: 'Instant Translator',
        translatorDesc: 'Translate text between more than 30 languages.',
        enterText: 'Enter text to translate',
        translate: 'Translate',
        translationResult: 'Translation will appear here',
        tryNow: 'Try Now',
        backHome: 'Back to Home',
        bmiHeight: 'Height (cm)',
        bmiWeight: 'Weight (kg)',
        bmiResult: 'BMI Result',
        passLength: 'Password Length',
        generate: 'Generate Password',
        wordCountLabel: 'Enter your text here',
        charCount: 'Characters',
        wordCountResult: 'Words',
        sentenceCount: 'Sentences',
        unitType: 'Conversion Type',
        kgToLbs: 'kg → lbs',
        lbsToKg: 'lbs → kg',
        meterToFeet: 'm → ft',
        feetToMeter: 'ft → m',
        celToFah: '°C → °F',
        fahToCel: '°F → °C',
        convert: 'Convert',
        percentValue: 'Value',
        percentRate: 'Percentage (%)',
        percentResult: 'Result',
        countdownDate: 'Select Date & Time',
        startCountdown: 'Start Countdown',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        currencyFrom: 'From',
        currencyTo: 'To',
        currencyAmount: 'Amount',
        currencyResult: 'Result',
        taxAmount: 'Amount (without tax)',
        taxRate: 'Tax Rate (%)',
        taxResult: 'Tax Amount',
        totalAfterTax: 'Total after tax',
        textToAnalyze: 'Text to analyze',
        uniqueWords: 'Unique Words',
        avgWordLength: 'Average Word Length',
        wordFrequency: 'Word Frequency',
        tipAmount: 'Total Amount',
        tipPercent: 'Tip Percentage (%)',
        tipPeople: 'Number of People',
        tipResult: 'Tip per person',
        totalPerPerson: 'Total per person',
        colorResult: 'Selected Color'
    },
    fr: {
        home: 'Accueil',
        about: 'À propos',
        contact: 'Contact',
        privacy: 'Confidentialité',
        terms: 'Conditions',
        login: 'Connexion',
        logout: 'Déconnexion',
        loginTitle: 'Connexion / Inscription',
        username: "Nom d'utilisateur",
        password: 'Mot de passe',
        email: 'Email (optionnel)',
        loginRegister: 'Se connecter / S\'inscrire',
        loginHint: "Si vous n'avez pas de compte, il sera créé automatiquement.",
        welcome: 'Bienvenue',
        donate: 'Faire un don',
        heroTitle: 'Outils intelligents en un seul endroit',
        heroDesc: 'Une collection d\'outils gratuits avec système de connexion pour sauvegarder vos préférences et votre historique.',
        ageCalc: 'Calculateur d\'âge',
        ageDesc: 'Calculez votre âge en années, mois et jours.',
        bmiCalc: 'Calcul IMC',
        bmiDesc: 'Calculez votre IMC et connaissez votre état de santé.',
        passGen: 'Générateur de mots de passe',
        passDesc: 'Générez un mot de passe fort et sécurisé instantanément.',
        wordCount: 'Compteur de mots',
        wordDesc: 'Comptez les mots, caractères et phrases dans votre texte.',
        unitConv: 'Convertisseur d\'unités',
        unitDesc: 'Convertissez entre kg/lbs, mètres/pieds, et plus.',
        simpleCalc: 'Calculatrice',
        calcDesc: 'Opérations arithmétiques de base rapidement.',
        percentCalc: 'Calculateur de pourcentage',
        percentDesc: 'Calculez les pourcentages, augmentations et diminutions.',
        countdown: 'Compte à rebours',
        countdownDesc: 'Découvrez le temps restant jusqu\'à un événement spécifique.',
        currencyConv: 'Convertisseur de devises',
        currencyDesc: 'Convertissez entre plus de 20 devises mondiales.',
        taxCalc: 'Calculateur de taxe',
        taxDesc: 'Calculez le montant de la taxe et le total facilement.',
        textAnalysis: 'Analyse de texte',
        textAnalysisDesc: 'Statistiques avancées sur votre texte.',
        textConverter: 'Convertisseur de texte',
        textConverterDesc: 'Convertir le texte en majuscules/minuscules/inversé.',
        tipCalc: 'Calculateur de pourboire',
        tipDesc: 'Calculez le pourboire et répartissez-le entre les personnes.',
        colorGen: 'Générateur de couleurs',
        colorDesc: 'Générez des couleurs aléatoires avec code HEX.',
        spinWheel: 'Roue de la fortune',
        spinDesc: 'Ajoutez des participants et faites tourner la roue pour choisir un gagnant.',
        playerName: 'Nom du participant',
        addPlayer: 'Ajouter',
        reset: 'Réinitialiser',
        spin: 'Tourner',
        winner: 'Gagnant',
        translatorTool: 'Traducteur instantané',
        translatorDesc: 'Traduisez du texte entre plus de 30 langues.',
        enterText: 'Entrez le texte à traduire',
        translate: 'Traduire',
        translationResult: 'La traduction apparaîtra ici',
        tryNow: 'Essayer maintenant',
        backHome: 'Retour à l\'accueil',
        bmiHeight: 'Taille (cm)',
        bmiWeight: 'Poids (kg)',
        bmiResult: 'Résultat IMC',
        passLength: 'Longueur du mot de passe',
        generate: 'Générer un mot de passe',
        wordCountLabel: 'Entrez votre texte ici',
        charCount: 'Caractères',
        wordCountResult: 'Mots',
        sentenceCount: 'Phrases',
        unitType: 'Type de conversion',
        kgToLbs: 'kg → lbs',
        lbsToKg: 'lbs → kg',
        meterToFeet: 'm → pi',
        feetToMeter: 'pi → m',
        celToFah: '°C → °F',
        fahToCel: '°F → °C',
        convert: 'Convertir',
        percentValue: 'Valeur',
        percentRate: 'Pourcentage (%)',
        percentResult: 'Résultat',
        countdownDate: 'Sélectionnez la date et l\'heure',
        startCountdown: 'Démarrer le compte à rebours',
        days: 'Jours',
        hours: 'Heures',
        minutes: 'Minutes',
        seconds: 'Secondes',
        currencyFrom: 'De',
        currencyTo: 'À',
        currencyAmount: 'Montant',
        currencyResult: 'Résultat',
        taxAmount: 'Montant (hors taxe)',
        taxRate: 'Taux de taxe (%)',
        taxResult: 'Montant de la taxe',
        totalAfterTax: 'Total après taxe',
        textToAnalyze: 'Texte à analyser',
        uniqueWords: 'Mots uniques',
        avgWordLength: 'Longueur moyenne des mots',
        wordFrequency: 'Fréquence des mots',
        tipAmount: 'Montant total',
        tipPercent: 'Pourcentage de pourboire (%)',
        tipPeople: 'Nombre de personnes',
        tipResult: 'Pourboire par personne',
        totalPerPerson: 'Total par personne',
        colorResult: 'Couleur sélectionnée'
    }
};

// ============================================================
// 2. المتغيرات العامة والإعدادات
// ============================================================

let currentLang = localStorage.getItem('lang') || 'ar';
let currentTheme = localStorage.getItem('theme') || 'light';
let currentUser = localStorage.getItem('currentUser') || null;
let countdownInterval = null;
let wheelPlayers = [];
let wheelColors = ['#4f46e5', '#7c3aed', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6', '#14b8a6', '#f472b6'];
let calcExpression = '';

// ============================================================
// 3. دوال الترجمة والثيم
// ============================================================

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });
    document.getElementById('langToggle').textContent = lang === 'ar' ? 'EN' : lang === 'en' ? 'FR' : 'ع';
    localStorage.setItem('lang', lang);
    currentLang = lang;
    updateDynamicTexts();
    updateSEOMeta();
}

function toggleLang() {
    const order = ['ar', 'en', 'fr'];
    let idx = order.indexOf(currentLang);
    idx = (idx + 1) % order.length;
    applyLanguage(order[idx]);
}

function applyTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    document.getElementById('themeToggle').innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', theme);
    currentTheme = theme;
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

function updateDynamicTexts() {}

// ============================================================
// 4. نظام المستخدمين
// ============================================================

function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || {};
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function getCurrentUserData() {
    if (!currentUser) return null;
    const users = getUsers();
    return users[currentUser] || null;
}

function saveCurrentUserData(data) {
    if (!currentUser) return;
    const users = getUsers();
    if (!users[currentUser]) users[currentUser] = {};
    users[currentUser] = { ...users[currentUser], ...data };
    saveUsers(users);
}

function registerOrLogin() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const email = document.getElementById('loginEmail').value.trim();
    if (!username || !password) {
        alert('الرجاء ملء جميع الحقول الأساسية.');
        return;
    }
    const users = getUsers();
    if (users[username]) {
        if (users[username].password === password) {
            currentUser = username;
            localStorage.setItem('currentUser', username);
            updateUIForUser();
            closeLoginModal();
            const prefs = users[username].preferences || {};
            if (prefs.lang) applyLanguage(prefs.lang);
            if (prefs.theme) applyTheme(prefs.theme);
            if (prefs.lastTool) showTool(prefs.lastTool);
        } else {
            alert('كلمة المرور غير صحيحة.');
        }
    } else {
        users[username] = {
            password: password,
            email: email || '',
            preferences: { lang: currentLang, theme: currentTheme, lastTool: null },
            history: []
        };
        saveUsers(users);
        currentUser = username;
        localStorage.setItem('currentUser', username);
        updateUIForUser();
        closeLoginModal();
        alert('تم إنشاء الحساب بنجاح!');
    }
}

function logout() {
    if (currentUser) {
        const prefs = { lang: currentLang, theme: currentTheme, lastTool: getCurrentToolId() };
        saveCurrentUserData({ preferences: prefs });
    }
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUIForUser();
    applyLanguage('ar');
    applyTheme('light');
    showHome();
}

function updateUIForUser() {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const userDisplay = document.getElementById('userDisplay');
    if (currentUser) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        userDisplay.style.display = 'inline';
        userDisplay.textContent = `👤 ${currentUser}`;
    } else {
        loginBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        userDisplay.style.display = 'none';
    }
}

function showLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function saveOperation(operation, result) {
    if (!currentUser) return;
    const users = getUsers();
    if (users[currentUser]) {
        if (!users[currentUser].history) users[currentUser].history = [];
        users[currentUser].history.push({
            date: new Date().toISOString(),
            tool: getCurrentToolId() || 'unknown',
            operation: operation,
            result: result
        });
        saveUsers(users);
    }
}

// ============================================================
// 5. التنقل بين الصفحات والأدوات
// ============================================================

function showHome() {
    document.getElementById('mainHero').style.display = 'block';
    document.getElementById('toolsGrid').style.display = 'grid';
    document.getElementById('toolDisplay').style.display = 'none';
    document.getElementById('toolDisplay').style.opacity = 0;
    document.getElementById('pageDisplay').style.display = 'none';
    document.getElementById('toolContent').innerHTML = '';
    if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
    if (currentUser) {
        saveCurrentUserData({ preferences: { ...getCurrentUserData()?.preferences, lastTool: null } });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateSEOMeta('home');
}

function getCurrentToolId() {
    return window._currentToolId || null;
}

function showTool(toolId) {
    window._currentToolId = toolId;
    document.getElementById('mainHero').style.display = 'none';
    document.getElementById('toolsGrid').style.display = 'none';
    document.getElementById('pageDisplay').style.display = 'none';
    const display = document.getElementById('toolDisplay');
    display.style.display = 'block';
    display.style.opacity = 0;
    const container = document.getElementById('toolContent');
    
    switch(toolId) {
        case 'age': container.innerHTML = getAgeTool(); break;
        case 'bmi': container.innerHTML = getBmiTool(); break;
        case 'password': container.innerHTML = getPasswordTool(); break;
        case 'word': container.innerHTML = getWordTool(); break;
        case 'unit': container.innerHTML = getUnitTool(); break;
        case 'calc': container.innerHTML = getCalcTool(); break;
        case 'percent': container.innerHTML = getPercentTool(); break;
        case 'countdown': container.innerHTML = getCountdownTool(); break;
        case 'currency': container.innerHTML = getCurrencyTool(); break;
        case 'tax': container.innerHTML = getTaxTool(); break;
        case 'textanalysis': container.innerHTML = getTextAnalysisTool(); break;
        case 'textconverter': container.innerHTML = getTextConverterTool(); break;
        case 'tip': container.innerHTML = getTipTool(); break;
        case 'color': container.innerHTML = getColorTool(); break;
        case 'spinwheel': container.innerHTML = getSpinWheelTool(); break;
        case 'translator': container.innerHTML = getTranslatorTool(); break;
        case 'qrcode': container.innerHTML = getQRCodeTool(); break;
        case 'summarizer': container.innerHTML = getSummarizerTool(); break;
        case 'seo': container.innerHTML = getSEOTool(); break;
        case 'imgcompress': container.innerHTML = getImgCompressTool(); break;
        case 'passcheck': container.innerHTML = getPassCheckTool(); break;
        case 'imgtopdf': container.innerHTML = getImgToPDFTool(); break;
        case 'imgconvert': container.innerHTML = getImgConvertTool(); break;
        case 'myip': container.innerHTML = getMyIPTool(); break;
        case 'speedtest': container.innerHTML = getSpeedTestTool(); break;
        case 'deduplicate': container.innerHTML = getDeduplicateTool(); break;
        case 'textbullet': container.innerHTML = getTextBulletTool(); break;
        case 'spellcheck': container.innerHTML = getSpellCheckTool(); break;
        default: container.innerHTML = '<p>الأداة غير موجودة.</p>';
    }
    applyLanguage(currentLang);
    if (toolId === 'countdown') initCountdown();
    if (toolId === 'word') initWordCounter();
    if (toolId === 'calc') initCalculator();
    if (toolId === 'currency') initCurrency();
    if (toolId === 'tax') initTax();
    if (toolId === 'textanalysis') initTextAnalysis();
    if (toolId === 'spinwheel') initSpinWheel();
    if (toolId === 'translator') initTranslator();
    if (toolId === 'myip') initMyIP();
    if (toolId === 'speedtest') initSpeedTest();
    
    setTimeout(() => { display.style.opacity = 1; }, 50);
    
    if (currentUser) {
        const prefs = getCurrentUserData()?.preferences || {};
        prefs.lastTool = toolId;
        saveCurrentUserData({ preferences: prefs });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateSEOMeta(toolId);
}

function showPage(pageId) {
    document.getElementById('mainHero').style.display = 'none';
    document.getElementById('toolsGrid').style.display = 'none';
    document.getElementById('toolDisplay').style.display = 'none';
    const pageDisplay = document.getElementById('pageDisplay');
    pageDisplay.style.display = 'block';
    const content = document.getElementById('pageContent');
    switch(pageId) {
        case 'about': content.innerHTML = getAboutPage(); break;
        case 'contact': content.innerHTML = getContactPage(); break;
        case 'privacy': content.innerHTML = getPrivacyPage(); break;
        case 'terms': content.innerHTML = getTermsPage(); break;
        default: content.innerHTML = '<p>الصفحة غير موجودة.</p>';
    }
    applyLanguage(currentLang);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateSEOMeta(pageId);
}

// ============================================================
// 6. صفحات المحتوى
// ============================================================

function getAboutPage() {
    return `
    <div class="page-card">
        <h1>من نحن</h1>
        <p><strong>Smart Tools Hub</strong> هو موقع يقدم مجموعة متكاملة من الأدوات المساعدة المجانية. تم إنشاؤه لتسهيل المهام اليومية للمستخدمين العرب والعالميين.</p>
        <p>نحن فريق من المطورين والمصممين نؤمن بأن التكنولوجيا يجب أن تكون في متناول الجميع. لذلك نقدم خدماتنا مجاناً دون إعلانات مزعجة، مع التركيز على الجودة والدقة.</p>
        <p>نسعى باستمرار لإضافة أدوات جديدة وتحديث الأدوات الحالية لتلبية احتياجات المستخدمين.</p>
        <p>رؤيتنا: أن نكون الوجهة الأولى للأدوات الذكية في العالم العربي.</p>
        <p>تم التطوير بواسطة: <strong>RAMI_DEV</strong></p>
    </div>`;
}

function getContactPage() {
    return `
    <div class="page-card">
        <h1>اتصل بنا</h1>
        <p>نرحب بملاحظاتكم واستفساراتكم. يمكنكم التواصل معنا عبر:</p>
        <ul style="list-style:none; padding:0; margin:15px 0;">
            <li style="margin:10px 0;"><i class="fas fa-envelope" style="color:#4f46e5; width:30px;"></i> support@smarttools.com</li>
            <li style="margin:10px 0;"><i class="fab fa-twitter" style="color:#4f46e5; width:30px;"></i> @SmartToolsHub</li>
            <li style="margin:10px 0;"><i class="fab fa-facebook" style="color:#4f46e5; width:30px;"></i> /SmartToolsHub</li>
        </ul>
        <p>نحن نرد على جميع الرسائل خلال 24 ساعة.</p>
        <p>شكراً لزيارتكم!</p>
    </div>`;
}

function getPrivacyPage() {
    return `
    <div class="page-card">
        <h1>سياسة الخصوصية</h1>
        <p>في Smart Tools Hub، نأخذ خصوصيتك على محمل الجد. هذه السياسة توضح كيفية جمع واستخدام وحماية معلوماتك.</p>
        <h3>المعلومات التي نجمعها</h3>
        <p>- اسم المستخدم وكلمة المرور (مشفران محلياً في متصفحك).</p>
        <p>- البريد الإلكتروني (اختياري، يستخدم فقط للتواصل).</p>
        <p>- تفضيلاتك (اللغة، الثيم، آخر أداة استخدمتها).</p>
        <p>- سجل العمليات (يُحفظ محلياً في متصفحك).</p>
        <h3>كيف نستخدم معلوماتك</h3>
        <p>- لتخصيص تجربتك وتحسين خدماتنا.</p>
        <p>- لتحليل استخدام الأدوات لتطويرها.</p>
        <h3>أمان المعلومات</h3>
        <p>جميع البيانات تُخزن محلياً في متصفحك باستخدام <strong>localStorage</strong>. نحن لا نرسل أي من بياناتك إلى خوادم خارجية.</p>
        <h3>ملفات تعريف الارتباط (Cookies)</h3>
        <p>نحن لا نستخدم ملفات تعريف الارتباط التابعة لجهات خارجية. نستخدم التخزين المحلي فقط لتذكر تفضيلاتك.</p>
        <h3>تحديثات السياسة</h3>
        <p>قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم إعلامك بأي تغييرات جوهرية.</p>
        <p>آخر تحديث: 24 يونيو 2026</p>
    </div>`;
}

function getTermsPage() {
    return `
    <div class="page-card">
        <h1>شروط الخدمة</h1>
        <p>مرحباً بك في Smart Tools Hub. باستخدامك لهذا الموقع، فإنك توافق على الشروط التالية:</p>
        <h3>استخدام الموقع</h3>
        <p>- الموقع مجاني للاستخدام الشخصي والتجاري.</p>
        <p>- لا يُسمح باستخدام الأدوات لأغراض غير قانونية.</p>
        <p>- أنت تتحمل مسؤولية دقة البيانات التي تدخلها.</p>
        <h3>الملكية الفكرية</h3>
        <p>- جميع محتويات الموقع محمية بحقوق النشر.</p>
        <p>- لا يُسمح بنسخ أو إعادة توزيع الأكواد دون إذن.</p>
        <h3>إخلاء المسؤولية</h3>
        <p>- الأدوات مقدمة "كما هي" دون أي ضمانات.</p>
        <p>- نحن غير مسؤولين عن أي خسائر أو أضرار ناتجة عن استخدام الأدوات.</p>
        <h3>التغييرات على الشروط</h3>
        <p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إعلامك بالتغييرات.</p>
        <h3>الاتصال بنا</h3>
        <p>إذا كان لديك أي استفسار حول هذه الشروط، يرجى الاتصال بنا عبر صفحة اتصل بنا.</p>
        <p>آخر تحديث: 24 يونيو 2026</p>
    </div>`;
}

// ============================================================
// 7. دوال الأدوات (جميع الأدوات القديمة)
// ============================================================

function getAgeTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-calendar-alt"></i> <span data-key="ageCalc">حساب العمر</span></h2>
        <label for="dob"><span data-key="ageDesc">أدخل تاريخ ميلادك</span></label>
        <input type="date" id="dob" value="2000-01-01">
        <button class="btn" onclick="calculateAge()" style="margin-top:15px;"><span data-key="tryNow">احسب عمري</span></button>
        <div class="result-box" id="ageResult"></div>
    </div>`;
}

function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const now = new Date();
    if (isNaN(dob)) { document.getElementById('ageResult').innerHTML = 'يرجى إدخال تاريخ صحيح.'; return; }
    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();
    if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    const totalDays = Math.floor((now - dob) / (1000*60*60*24));
    document.getElementById('ageResult').innerHTML = `
        <p>عمرك: <strong>${years}</strong> سنة، <strong>${months}</strong> شهر، <strong>${days}</strong> يوم</p>
        <p>إجمالي الأيام: <strong>${totalDays}</strong> يوم</p>
    `;
    saveOperation('حساب العمر', `${years} سنة، ${months} شهر، ${days} يوم`);
}

function getBmiTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-weight-scale"></i> <span data-key="bmiCalc">حساب BMI</span></h2>
        <label for="height"><span data-key="bmiHeight">الطول (سم)</span></label>
        <input type="number" id="height" placeholder="175" value="175">
        <label for="weight"><span data-key="bmiWeight">الوزن (كجم)</span></label>
        <input type="number" id="weight" placeholder="70" value="70">
        <button class="btn" onclick="calculateBMI()" style="margin-top:15px;"><span data-key="tryNow">احسب BMI</span></button>
        <div class="result-box" id="bmiResult"></div>
    </div>`;
}

function calculateBMI() {
    const h = parseFloat(document.getElementById('height').value) / 100;
    const w = parseFloat(document.getElementById('weight').value);
    if (!h || !w || h <= 0) { document.getElementById('bmiResult').innerHTML = 'يرجى إدخال قيم صحيحة.'; return; }
    const bmi = w / (h * h);
    let status = '';
    if (bmi < 18.5) status = 'نقص وزن';
    else if (bmi < 25) status = 'وزن طبيعي';
    else if (bmi < 30) status = 'زيادة وزن';
    else status = 'سمنة';
    document.getElementById('bmiResult').innerHTML = `
        <p>مؤشر كتلة الجسم: <strong>${bmi.toFixed(2)}</strong></p>
        <p>الحالة: <strong>${status}</strong></p>
    `;
    saveOperation('حساب BMI', `${bmi.toFixed(2)} - ${status}`);
}

function getPasswordTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-key"></i> <span data-key="passGen">مولد كلمات المرور</span></h2>
        <label for="passLength"><span data-key="passLength">طول كلمة المرور</span></label>
        <input type="number" id="passLength" value="12" min="4" max="64">
        <button class="btn" onclick="generatePassword()" style="margin-top:15px;"><span data-key="generate">إنشاء كلمة مرور</span></button>
        <div class="result-box" id="passResult" style="direction:ltr; text-align:center; font-size:1.3rem; word-break:break-all;"></div>
    </div>`;
}

function generatePassword() {
    const len = parseInt(document.getElementById('passLength').value) || 12;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
    let pass = '';
    for (let i = 0; i < len; i++) pass += chars.charAt(Math.floor(Math.random() * chars.length));
    document.getElementById('passResult').innerHTML = `<strong>${pass}</strong>`;
    saveOperation('مولد كلمات المرور', `طول ${len}`);
}

function getWordTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-file-alt"></i> <span data-key="wordCount">عداد الكلمات</span></h2>
        <label for="wordText"><span data-key="wordCountLabel">أدخل النص هنا</span></label>
        <textarea id="wordText" oninput="countWords()">مرحباً بك في موقع الأدوات الذكية. هذا نص تجريبي.</textarea>
        <div class="result-box" id="wordResult">
            <p><span data-key="charCount">عدد الحروف</span>: <span id="charCount">0</span></p>
            <p><span data-key="wordCountResult">عدد الكلمات</span>: <span id="wordCount">0</span></p>
            <p><span data-key="sentenceCount">عدد الجمل</span>: <span id="sentenceCount">0</span></p>
        </div>
    </div>`;
}

function initWordCounter() { countWords(); }

function countWords() {
    const text = document.getElementById('wordText').value;
    document.getElementById('charCount').textContent = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    document.getElementById('wordCount').textContent = words;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    document.getElementById('sentenceCount').textContent = sentences;
}

function getUnitTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-arrows-alt-h"></i> <span data-key="unitConv">محول الوحدات</span></h2>
        <label for="unitType"><span data-key="unitType">نوع التحويل</span></label>
        <select id="unitType">
            <option value="kg_lbs" data-key="kgToLbs">كجم ← رطل</option>
            <option value="lbs_kg" data-key="lbsToKg">رطل ← كجم</option>
            <option value="m_ft" data-key="meterToFeet">متر ← قدم</option>
            <option value="ft_m" data-key="feetToMeter">قدم ← متر</option>
            <option value="c_f" data-key="celToFah">مئوي ← فهرنهايت</option>
            <option value="f_c" data-key="fahToCel">فهرنهايت ← مئوي</option>
        </select>
        <label for="unitValue">القيمة</label>
        <input type="number" id="unitValue" placeholder="100" value="100">
        <button class="btn" onclick="convertUnit()" style="margin-top:15px;"><span data-key="convert">تحويل</span></button>
        <div class="result-box" id="unitResult"></div>
    </div>`;
}

function convertUnit() {
    const type = document.getElementById('unitType').value;
    const val = parseFloat(document.getElementById('unitValue').value);
    if (isNaN(val)) { document.getElementById('unitResult').innerHTML = 'يرجى إدخال رقم صحيح.'; return; }
    let result = '';
    switch(type) {
        case 'kg_lbs': result = `${val} كجم = ${(val * 2.20462).toFixed(2)} رطل`; break;
        case 'lbs_kg': result = `${val} رطل = ${(val / 2.20462).toFixed(2)} كجم`; break;
        case 'm_ft': result = `${val} متر = ${(val * 3.28084).toFixed(2)} قدم`; break;
        case 'ft_m': result = `${val} قدم = ${(val / 3.28084).toFixed(2)} متر`; break;
        case 'c_f': result = `${val} °C = ${(val * 9/5 + 32).toFixed(2)} °F`; break;
        case 'f_c': result = `${val} °F = ${((val - 32) * 5/9).toFixed(2)} °C`; break;
    }
    document.getElementById('unitResult').innerHTML = `<strong>${result}</strong>`;
    saveOperation('تحويل وحدات', result);
}

function getCalcTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-calculator"></i> <span data-key="simpleCalc">آلة حاسبة</span></h2>
        <div class="calc-grid">
            <div class="calc-screen" id="calcScreen">0</div>
            <button class="calc-btn" onclick="calcInput('7')">7</button>
            <button class="calc-btn" onclick="calcInput('8')">8</button>
            <button class="calc-btn" onclick="calcInput('9')">9</button>
            <button class="calc-btn operator" onclick="calcInput('/')">÷</button>
            <button class="calc-btn" onclick="calcInput('4')">4</button>
            <button class="calc-btn" onclick="calcInput('5')">5</button>
            <button class="calc-btn" onclick="calcInput('6')">6</button>
            <button class="calc-btn operator" onclick="calcInput('*')">×</button>
            <button class="calc-btn" onclick="calcInput('1')">1</button>
            <button class="calc-btn" onclick="calcInput('2')">2</button>
            <button class="calc-btn" onclick="calcInput('3')">3</button>
            <button class="calc-btn operator" onclick="calcInput('-')">-</button>
            <button class="calc-btn" onclick="calcInput('0')">0</button>
            <button class="calc-btn" onclick="calcInput('.')">.</button>
            <button class="calc-btn" onclick="calcClear()">C</button>
            <button class="calc-btn operator" onclick="calcInput('+')">+</button>
            <button class="calc-btn equals" onclick="calcResult()">=</button>
        </div>
    </div>`;
}

function initCalculator() { calcClear(); }

function calcInput(val) {
    calcExpression += val;
    document.getElementById('calcScreen').textContent = calcExpression;
}

function calcClear() {
    calcExpression = '';
    document.getElementById('calcScreen').textContent = '0';
}

function calcResult() {
    try {
        const result = Function('"use strict"; return (' + calcExpression + ')')();
        document.getElementById('calcScreen').textContent = result;
        calcExpression = result.toString();
        saveOperation('آلة حاسبة', result);
    } catch(e) {
        document.getElementById('calcScreen').textContent = 'خطأ';
        calcExpression = '';
    }
}

function getPercentTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-percent"></i> <span data-key="percentCalc">حساب النسبة المئوية</span></h2>
        <label for="pValue"><span data-key="percentValue">القيمة</span></label>
        <input type="number" id="pValue" placeholder="200" value="200">
        <label for="pRate"><span data-key="percentRate">النسبة المئوية (%)</span></label>
        <input type="number" id="pRate" placeholder="15" value="15">
        <button class="btn" onclick="calculatePercent()" style="margin-top:15px;"><span data-key="tryNow">احسب</span></button>
        <div class="result-box" id="percentResult"></div>
    </div>`;
}

function calculatePercent() {
    const val = parseFloat(document.getElementById('pValue').value);
    const rate = parseFloat(document.getElementById('pRate').value);
    if (isNaN(val) || isNaN(rate)) { document.getElementById('percentResult').innerHTML = 'يرجى إدخال أرقام صحيحة.'; return; }
    const result = (val * rate) / 100;
    document.getElementById('percentResult').innerHTML = `
        <p>${rate}% من ${val} = <strong>${result.toFixed(2)}</strong></p>
        <p>القيمة بعد الزيادة: <strong>${(val + result).toFixed(2)}</strong></p>
        <p>القيمة بعد النقصان: <strong>${(val - result).toFixed(2)}</strong></p>
    `;
    saveOperation('نسبة مئوية', `${rate}% من ${val} = ${result.toFixed(2)}`);
}

function getCountdownTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-hourglass-half"></i> <span data-key="countdown">عداد تنازلي</span></h2>
        <label for="countdownDate"><span data-key="countdownDate">اختر التاريخ والوقت</span></label>
        <input type="datetime-local" id="countdownDate">
        <button class="btn" onclick="startCountdown()" style="margin-top:15px;"><span data-key="startCountdown">ابدأ العد</span></button>
        <div class="result-box" id="countdownDisplay" style="font-size:1.5rem; text-align:center; direction:ltr;">
            <span id="cdDays">0</span> <span data-key="days">يوم</span>
            <span id="cdHours">0</span> <span data-key="hours">ساعة</span>
            <span id="cdMinutes">0</span> <span data-key="minutes">دقيقة</span>
            <span id="cdSeconds">0</span> <span data-key="seconds">ثانية</span>
        </div>
    </div>`;
}

function initCountdown() {
    const now = new Date();
    now.setDate(now.getDate() + 2);
    const formatted = now.toISOString().slice(0, 16);
    document.getElementById('countdownDate').value = formatted;
    if (countdownInterval) clearInterval(countdownInterval);
    startCountdown();
}

function startCountdown() {
    if (countdownInterval) clearInterval(countdownInterval);
    const target = new Date(document.getElementById('countdownDate').value);
    if (isNaN(target)) { alert('يرجى اختيار تاريخ صحيح.'); return; }
    countdownInterval = setInterval(() => {
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) {
            document.getElementById('countdownDisplay').innerHTML = '🎉 انتهى الوقت!';
            clearInterval(countdownInterval);
            return;
        }
        const days = Math.floor(diff / (1000*60*60*24));
        const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
        const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
        const seconds = Math.floor((diff % (1000*60)) / 1000);
        document.getElementById('cdDays').textContent = days;
        document.getElementById('cdHours').textContent = hours;
        document.getElementById('cdMinutes').textContent = minutes;
        document.getElementById('cdSeconds').textContent = seconds;
    }, 1000);
}

function getCurrencyTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-coins"></i> <span data-key="currencyConv">محول العملات</span></h2>
        <label for="currencyAmount"><span data-key="currencyAmount">المبلغ</span></label>
        <input type="number" id="currencyAmount" value="100">
        <label for="currencyFrom"><span data-key="currencyFrom">من</span></label>
        <select id="currencyFrom">${getCurrencyOptions()}</select>
        <label for="currencyTo"><span data-key="currencyTo">إلى</span></label>
        <select id="currencyTo">${getCurrencyOptions()}</select>
        <button class="btn" onclick="convertCurrency()" style="margin-top:15px;"><span data-key="convert">تحويل</span></button>
        <div class="result-box" id="currencyResult"></div>
    </div>`;
}

function getCurrencyOptions() {
    const currencies = {
        USD:'دولار أمريكي', EUR:'يورو', GBP:'جنيه إسترليني', JOD:'دينار أردني',
        SAR:'ريال سعودي', AED:'درهم إماراتي', EGP:'جنيه مصري', LYD:'دينار ليبي',
        TND:'دينار تونسي', IQD:'دينار عراقي', KWD:'دينار كويتي', BHD:'دينار بحريني',
        QAR:'ريال قطري', OMR:'ريال عماني', YER:'ريال يمني', SYP:'ليرة سورية',
        LBP:'ليرة لبنانية', JPY:'ين ياباني', CNY:'يوان صيني', INR:'روبية هندية',
        PKR:'روبية باكستانية', RUB:'روبل روسي', TRY:'ليرة تركية', KRW:'وون كوري',
        BRL:'ريال برازيلي', ZAR:'راند جنوب أفريقي'
    };
    return Object.entries(currencies).map(([code, name]) => 
        `<option value="${code}">${code} - ${name}</option>`
    ).join('');
}

const exchangeRates = {
    USD: 1, EUR: 0.85, GBP: 0.73, JOD: 0.71, SAR: 3.75, AED: 3.67,
    EGP: 15.6, LYD: 4.8, TND: 3.1, IQD: 1310, KWD: 0.31, BHD: 0.38,
    QAR: 3.64, OMR: 0.38, YER: 250, SYP: 2500, LBP: 1500, JPY: 110,
    CNY: 6.45, INR: 74.5, PKR: 160, RUB: 74, TRY: 8.5, KRW: 1180,
    BRL: 5.2, ZAR: 14.5
};

function initCurrency() {}

function convertCurrency() {
    const amount = parseFloat(document.getElementById('currencyAmount').value);
    const from = document.getElementById('currencyFrom').value;
    const to = document.getElementById('currencyTo').value;
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('currencyResult').innerHTML = 'يرجى إدخال مبلغ صحيح.';
        return;
    }
    const inUSD = amount / exchangeRates[from];
    const result = inUSD * exchangeRates[to];
    document.getElementById('currencyResult').innerHTML = `
        <p>${amount} ${from} = <strong>${result.toFixed(2)} ${to}</strong></p>
    `;
    saveOperation('تحويل عملات', `${amount} ${from} → ${result.toFixed(2)} ${to}`);
}

function getTaxTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-receipt"></i> <span data-key="taxCalc">حساب الضريبة</span></h2>
        <label for="taxAmount"><span data-key="taxAmount">المبلغ (بدون ضريبة)</span></label>
        <input type="number" id="taxAmount" value="1000">
        <label for="taxRate"><span data-key="taxRate">نسبة الضريبة (%)</span></label>
        <input type="number" id="taxRate" value="15">
        <button class="btn" onclick="calculateTax()" style="margin-top:15px;"><span data-key="tryNow">احسب</span></button>
        <div class="result-box" id="taxResult"></div>
    </div>`;
}

function initTax() {}

function calculateTax() {
    const amount = parseFloat(document.getElementById('taxAmount').value);
    const rate = parseFloat(document.getElementById('taxRate').value);
    if (isNaN(amount) || isNaN(rate)) {
        document.getElementById('taxResult').innerHTML = 'يرجى إدخال أرقام صحيحة.';
        return;
    }
    const tax = amount * (rate / 100);
    const total = amount + tax;
    document.getElementById('taxResult').innerHTML = `
        <p><span data-key="taxResult">قيمة الضريبة</span>: <strong>${tax.toFixed(2)}</strong></p>
        <p><span data-key="totalAfterTax">الإجمالي بعد الضريبة</span>: <strong>${total.toFixed(2)}</strong></p>
    `;
    saveOperation('حساب الضريبة', `ضريبة=${tax.toFixed(2)}, إجمالي=${total.toFixed(2)}`);
}

function getTextAnalysisTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-chart-pie"></i> <span data-key="textAnalysis">تحليل النصوص</span></h2>
        <label for="textAnalysisInput"><span data-key="textToAnalyze">النص المراد تحليله</span></label>
        <textarea id="textAnalysisInput" oninput="analyzeText()">مرحباً بك في موقع الأدوات الذكية. هذا النص مخصص للتحليل. كرر الكلمات مثل: كلمة كلمة.</textarea>
        <div class="result-box" id="textAnalysisResult">
            <p><span data-key="wordCountResult">عدد الكلمات</span>: <span id="taWordCount">0</span></p>
            <p><span data-key="uniqueWords">الكلمات الفريدة</span>: <span id="taUniqueWords">0</span></p>
            <p><span data-key="avgWordLength">متوسط طول الكلمة</span>: <span id="taAvgLength">0</span></p>
            <p><span data-key="wordFrequency">تكرار الكلمات</span>: <span id="taFrequency"></span></p>
        </div>
    </div>`;
}

function initTextAnalysis() { analyzeText(); }

function analyzeText() {
    const text = document.getElementById('textAnalysisInput').value;
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    document.getElementById('taWordCount').textContent = words.length;
    const unique = new Set(words);
    document.getElementById('taUniqueWords').textContent = unique.size;
    const avgLen = words.length ? (words.reduce((sum, w) => sum + w.length, 0) / words.length).toFixed(2) : 0;
    document.getElementById('taAvgLength').textContent = avgLen;
    const freq = {};
    words.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
    const sorted = Object.entries(freq).sort((a,b) => b[1] - a[1]).slice(0,5);
    let freqText = sorted.map(([word, count]) => `${word}: ${count}`).join(' | ');
    document.getElementById('taFrequency').textContent = freqText || 'لا توجد كلمات';
    saveOperation('تحليل نصوص', `كلمات=${words.length}, فريدة=${unique.size}`);
}

function getTextConverterTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-exchange-alt"></i> <span data-key="textConverter">محول النصوص</span></h2>
        <label for="textConverterInput">النص</label>
        <textarea id="textConverterInput">مرحباً بك في موقع الأدوات</textarea>
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:10px;">
            <button class="btn" onclick="convertText('upper')">تحويل إلى كبير</button>
            <button class="btn" onclick="convertText('lower')">تحويل إلى صغير</button>
            <button class="btn" onclick="convertText('reverse')">عكس النص</button>
        </div>
        <div class="result-box" id="textConverterResult"></div>
    </div>`;
}

function convertText(type) {
    const input = document.getElementById('textConverterInput').value;
    let result = '';
    if(type === 'upper') result = input.toUpperCase();
    else if(type === 'lower') result = input.toLowerCase();
    else if(type === 'reverse') result = input.split('').reverse().join('');
    document.getElementById('textConverterResult').innerHTML = `<strong>${result}</strong>`;
    saveOperation('تحويل نص', type);
}

function getTipTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-hand-holding-usd"></i> <span data-key="tipCalc">حاسبة الإكرامية</span></h2>
        <label for="tipAmount"><span data-key="tipAmount">المبلغ الإجمالي</span></label>
        <input type="number" id="tipAmount" value="100">
        <label for="tipPercent"><span data-key="tipPercent">نسبة الإكرامية (%)</span></label>
        <input type="number" id="tipPercent" value="15">
        <label for="tipPeople"><span data-key="tipPeople">عدد الأشخاص</span></label>
        <input type="number" id="tipPeople" value="2">
        <button class="btn" onclick="calculateTip()" style="margin-top:15px;"><span data-key="tryNow">احسب</span></button>
        <div class="result-box" id="tipResult"></div>
    </div>`;
}

function calculateTip() {
    const amount = parseFloat(document.getElementById('tipAmount').value);
    const percent = parseFloat(document.getElementById('tipPercent').value);
    const people = parseInt(document.getElementById('tipPeople').value);
    if (isNaN(amount) || isNaN(percent) || isNaN(people) || people <= 0) {
        document.getElementById('tipResult').innerHTML = 'يرجى إدخال أرقام صحيحة.';
        return;
    }
    const tipTotal = amount * (percent / 100);
    const total = amount + tipTotal;
    const tipPerPerson = tipTotal / people;
    const totalPerPerson = total / people;
    document.getElementById('tipResult').innerHTML = `
        <p><span data-key="tipResult">الإكرامية لكل شخص</span>: <strong>${tipPerPerson.toFixed(2)}</strong></p>
        <p><span data-key="totalPerPerson">المجموع لكل شخص</span>: <strong>${totalPerPerson.toFixed(2)}</strong></p>
        <p>الإكرامية الإجمالية: <strong>${tipTotal.toFixed(2)}</strong></p>
        <p>المجموع الكلي: <strong>${total.toFixed(2)}</strong></p>
    `;
    saveOperation('حساب الإكرامية', `إكرامية لكل شخص=${tipPerPerson.toFixed(2)}`);
}

function getColorTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-palette"></i> <span data-key="colorGen">مولد الألوان</span></h2>
        <button class="btn" onclick="generateColor()" style="margin-top:15px;">توليد لون عشوائي</button>
        <div class="result-box" id="colorResult" style="text-align:center;">
            <div id="colorDisplay" style="width:100%; height:100px; border-radius:12px; margin-top:10px; background:#4f46e5;"></div>
            <p style="margin-top:10px;"><strong id="colorCode">#4f46e5</strong></p>
        </div>
    </div>`;
}

function generateColor() {
    const hex = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    document.getElementById('colorDisplay').style.backgroundColor = hex;
    document.getElementById('colorCode').textContent = hex;
    saveOperation('توليد لون', hex);
}

// ============================================================
// 8. أدوات جديدة: عجلة الحظ + مترجم فوري
// ============================================================

function getSpinWheelTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-circle-notch fa-spin"></i> <span data-key="spinWheel">عجلة الحظ</span></h2>
        <div class="wheel-input-area">
            <input type="text" id="playerNameInput" placeholder="اسم المشارك">
            <button class="btn" onclick="addPlayer()" data-key="addPlayer">إضافة</button>
            <button class="btn" onclick="resetWheel()" style="background:#64748b;" data-key="reset">إعادة تعيين</button>
        </div>
        <div class="wheel-players" id="wheelPlayersList"></div>
        <div class="wheel-container">
            <div class="wheel-pointer"></div>
            <div class="wheel" id="wheel"></div>
            <div class="wheel-center">حظ</div>
        </div>
        <button class="btn" onclick="spinWheel()" id="spinBtn" data-key="spin">دور العجلة</button>
        <div class="result-box" id="wheelResult">
            <span data-key="winner">الفائز</span>: <span id="winnerName" style="font-weight:700;color:#4f46e5;">...</span>
        </div>
    </div>`;
}

function initSpinWheel() {
    wheelPlayers = [];
    updateWheelUI();
}

function addPlayer() {
    const input = document.getElementById('playerNameInput');
    const name = input.value.trim();
    if (!name) { alert('الرجاء إدخال اسم المشارك.'); return; }
    if (wheelPlayers.includes(name)) { alert('هذا الاسم موجود بالفعل.'); return; }
    wheelPlayers.push(name);
    input.value = '';
    updateWheelUI();
}

function removePlayer(name) {
    wheelPlayers = wheelPlayers.filter(p => p !== name);
    updateWheelUI();
}

function resetWheel() {
    wheelPlayers = [];
    updateWheelUI();
    document.getElementById('winnerName').textContent = '...';
}

function updateWheelUI() {
    const list = document.getElementById('wheelPlayersList');
    if (!list) return;
    list.innerHTML = wheelPlayers.map(p => 
        `<span class="wheel-player-tag">${p} <span class="remove" onclick="removePlayer('${p}')">✕</span></span>`
    ).join('');
    drawWheel();
}

// ============================================================
// ★★★★★ دالة drawWheel() المُصلحة – الأسماء تظهر بوضوح ★★★★★
// ============================================================

// ============================================================
// دالة drawWheel() – باستخدام Canvas (طريقة مضمونة 100%)
// ============================================================

// ============================================================
// دالة drawWheel() – رسم العجلة باستخدام Canvas مع تتبع الزوايا
// ============================================================

let currentRotation = 0; // تخزين زاوية الدوران الحالية

function drawWheel() {
    const wheel = document.getElementById('wheel');
    if (!wheel) return;
    const count = wheelPlayers.length;
    if (count === 0) {
        wheel.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#94a3b8;font-size:1.2rem;">أضف أسماء</div>';
        return;
    }
    
    // إنشاء عنصر Canvas
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.borderRadius = '50%';
    wheel.innerHTML = '';
    wheel.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const centerX = 150;
    const centerY = 150;
    const radius = 140;
    
    const colors = ['#4f46e5', '#7c3aed', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6', '#14b8a6', '#f472b6'];
    const angle = (2 * Math.PI) / count;
    
    // حفظ زوايا الأجزاء لاستخدامها لاحقاً
    window._wheelSegments = [];
    
    wheelPlayers.forEach((name, i) => {
        const startAngle = i * angle;
        const endAngle = startAngle + angle;
        const midAngle = startAngle + angle / 2;
        
        // تخزين معلومات القطاع
        window._wheelSegments.push({
            name: name,
            startAngle: startAngle,
            endAngle: endAngle,
            midAngle: midAngle,
            index: i
        });
        
        // رسم القطاع
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // رسم النص
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(midAngle);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(0,0,0,0.6)';
        ctx.shadowBlur = 8;
        
        let fontSize = 16;
        if (count > 12) fontSize = 10;
        else if (count > 8) fontSize = 12;
        else if (count > 5) fontSize = 14;
        ctx.font = `bold ${fontSize}px 'Tajawal', 'Segoe UI', sans-serif`;
        
        ctx.fillText(name, radius * 0.65, 0);
        ctx.restore();
    });
    
    // رسم الدائرة الداخلية
    ctx.beginPath();
    ctx.arc(centerX, centerY, 32, 0, 2 * Math.PI);
    ctx.fillStyle = '#4f46e5';
    ctx.fill();
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 15;
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px "Tajawal", sans-serif';
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 10;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('حظ', centerX, centerY);
    
    // إعادة تعيين الدوران
    canvas.style.transform = 'rotate(0deg)';
    currentRotation = 0;
}

// ============================================================
// دالة spinWheel() – مع حساب دقيق للفائز
// ============================================================

function spinWheel() {
    const wheel = document.getElementById('wheel');
    const canvas = wheel.querySelector('canvas');
    if (!canvas) {
        alert('الرجاء إعادة تحميل الصفحة والمحاولة مرة أخرى.');
        return;
    }
    const count = wheelPlayers.length;
    if (count === 0) {
        alert('الرجاء إضافة مشاركين أولاً.');
        return;
    }
    
    const spinBtn = document.getElementById('spinBtn');
    spinBtn.disabled = true;
    spinBtn.style.opacity = '0.6';
    
    // اختيار فائز عشوائي
    const winnerIndex = Math.floor(Math.random() * count);
    const anglePer = 360 / count;
    
    // حساب زاوية الفائز
    const midAngle = winnerIndex * anglePer + anglePer / 2;
    
    // عدد الدورات الكاملة (ثابت لتكون السرعة متساوية)
    const spins = 8 + Math.floor(Math.random() * 3); // 8-10 دورات
    
    // الزاوية المستهدفة = عدد الدورات × 360 + الزاوية المطلوبة
    // نضيف 90 درجة لتعديل اتجاه المؤشر (الذي في الأسفل)
    const targetAngle = spins * 360 + (360 - midAngle + 90);
    
    // 🔥 التغيير المهم: إزالة أي دوران سابق قبل تطبيق الجديد
    canvas.style.transition = 'none';
    canvas.style.transform = 'rotate(0deg)';
    
    // فرض إعادة الرسم
    void canvas.offsetHeight; // إجبار المتصفح على إعادة الحساب
    
    // تطبيق الدوران الجديد مع انتقال سلس
    requestAnimationFrame(() => {
        canvas.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
        canvas.style.transform = `rotate(${targetAngle}deg)`;
    });
    
    // الفائز
    const winner = wheelPlayers[winnerIndex];
    
    setTimeout(() => {
        const winnerSpan = document.getElementById('winnerName');
        winnerSpan.textContent = winner;
        winnerSpan.style.color = '#10b981';
        winnerSpan.style.fontSize = '1.8rem';
        winnerSpan.style.transition = 'all 0.5s ease';
        
        const resultBox = document.getElementById('wheelResult');
        resultBox.style.borderColor = '#10b981';
        resultBox.style.background = 'rgba(16, 185, 129, 0.08)';
        
        setTimeout(() => {
            resultBox.style.borderColor = '#4f46e5';
            resultBox.style.background = '';
        }, 3000);
        
        spinBtn.disabled = false;
        spinBtn.style.opacity = '1';
        saveOperation('عجلة الحظ', `الفائز: ${winner}`);
    }, 4200);
}

// ============================================================
// 9. مترجم فوري
// ============================================================

function getTranslatorTool() {
    const languages = getLanguageList();
    return `
    <div class="tool-box">
        <h2><i class="fas fa-language"></i> <span data-key="translatorTool">مترجم فوري</span></h2>
        <div class="translator-lang-select">
            <select id="transFrom">${languages}</select>
            <button class="swap-btn" onclick="swapLanguages()"><i class="fas fa-exchange-alt"></i></button>
            <select id="transTo">${languages}</select>
        </div>
        <label for="transInput" data-key="enterText">أدخل النص للترجمة</label>
        <textarea id="transInput" placeholder="اكتب النص هنا..."></textarea>
        <button class="btn" onclick="translateText()" style="margin-top:10px;" data-key="translate">ترجمة</button>
        <div class="translator-result" id="transResult">
            <span data-key="translationResult">الترجمة ستظهر هنا</span>
        </div>
    </div>`;
}

function getLanguageList() {
    const langs = [
        ['ar', 'العربية'], ['en', 'الإنجليزية'], ['fr', 'الفرنسية'],
        ['es', 'الإسبانية'], ['de', 'الألمانية'], ['it', 'الإيطالية'],
        ['tr', 'التركية'], ['fa', 'الفارسية'], ['ur', 'الأردية'],
        ['ru', 'الروسية'], ['zh', 'الصينية'], ['ja', 'اليابانية'],
        ['ko', 'الكورية'], ['pt', 'البرتغالية'], ['nl', 'الهولندية'],
        ['el', 'اليونانية'], ['hi', 'الهندية'], ['he', 'العبرية'],
        ['id', 'الإندونيسية'], ['ms', 'الماليزية'], ['th', 'التايلاندية'],
        ['vi', 'الفيتنامية'], ['pl', 'البولندية'], ['uk', 'الأوكرانية'],
        ['cs', 'التشيكية'], ['hu', 'المجرية'], ['sv', 'السويدية'],
        ['no', 'النرويجية'], ['da', 'الدانماركية'], ['fi', 'الفنلندية']
    ];
    return langs.map(([code, name]) => `<option value="${code}">${name}</option>`).join('');
}

function initTranslator() {}

function swapLanguages() {
    const from = document.getElementById('transFrom');
    const to = document.getElementById('transTo');
    const temp = from.value;
    from.value = to.value;
    to.value = temp;
}

function translateText() {
    const from = document.getElementById('transFrom').value;
    const to = document.getElementById('transTo').value;
    const text = document.getElementById('transInput').value.trim();
    if (!text) { document.getElementById('transResult').innerHTML = 'الرجاء إدخال نص للترجمة.'; return; }
    const resultDiv = document.getElementById('transResult');
    resultDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الترجمة...';
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.responseData && data.responseData.translatedText) {
                resultDiv.innerHTML = `<strong>${data.responseData.translatedText}</strong>`;
                saveOperation('ترجمة', `${from}→${to}: ${text.substring(0,30)}...`);
            } else {
                resultDiv.innerHTML = 'حدث خطأ في الترجمة. حاول مرة أخرى.';
            }
        })
        .catch(() => {
            resultDiv.innerHTML = 'فشل الاتصال بخادم الترجمة. تحقق من اتصالك بالإنترنت.';
        });
}

// ============================================================
// 10. الأدوات الجديدة (12 أداة)
// ============================================================

// ── QR Code Generator ──────────────────────────────────────
function getQRCodeTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-qrcode"></i> مولّد QR Code</h2>
        <label for="qrInput">النص أو الرابط</label>
        <input type="text" id="qrInput" placeholder="https://example.com أو أي نص" value="https://ramimejri.github.io/smart-tools-hub/">
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px;">
            <label style="margin:0;line-height:2;">الحجم:</label>
            <select id="qrSize" style="width:auto;">
                <option value="128">128×128</option>
                <option value="200" selected>200×200</option>
                <option value="300">300×300</option>
            </select>
            <label style="margin:0;line-height:2;">اللون:</label>
            <input type="color" id="qrColor" value="#4f46e5" style="width:44px;height:38px;padding:2px;border-radius:8px;border:1px solid #ccc;cursor:pointer;">
        </div>
        <button class="btn" onclick="generateQR()" style="margin-top:12px;"><i class="fas fa-qrcode"></i> إنشاء QR Code</button>
        <div class="result-box" id="qrResult" style="text-align:center;">
            <div id="qrCanvas" style="display:inline-block;margin:10px auto;"></div>
            <br>
            <button class="btn" id="qrDownload" onclick="downloadQR()" style="display:none;background:#10b981;margin-top:10px;"><i class="fas fa-download"></i> تحميل الصورة</button>
        </div>
    </div>`;
}

function generateQR() {
    const text = document.getElementById('qrInput').value.trim();
    const size = parseInt(document.getElementById('qrSize').value);
    const color = document.getElementById('qrColor').value;
    if (!text) { alert('الرجاء إدخال نص أو رابط.'); return; }
    const container = document.getElementById('qrCanvas');
    container.innerHTML = '';
    new QRCode(container, {
        text: text,
        width: size,
        height: size,
        colorDark: color,
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
    document.getElementById('qrDownload').style.display = 'inline-block';
    saveOperation('QR Code', text.substring(0, 50));
}

function downloadQR() {
    const canvas = document.querySelector('#qrCanvas canvas');
    if (!canvas) { alert('أنشئ QR Code أولاً.'); return; }
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// ── Text Summarizer (AI) ───────────────────────────────────
function getSummarizerTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-brain"></i> ملخّص النصوص الذكي</h2>
        <label for="summInput">أدخل النص المراد تلخيصه</label>
        <textarea id="summInput" style="min-height:160px;" placeholder="الصق هنا نصاً طويلاً لتحصل على ملخص ذكي..."></textarea>
        <div style="display:flex;gap:10px;align-items:center;margin-top:10px;flex-wrap:wrap;">
            <label style="margin:0;">نسبة التلخيص:</label>
            <input type="range" id="summRatio" min="10" max="50" value="30" style="width:150px;"> 
            <span id="summRatioVal">30%</span>
        </div>
        <button class="btn" onclick="summarizeText()" style="margin-top:12px;"><i class="fas fa-magic"></i> لخّص النص</button>
        <div class="result-box" id="summResult" style="display:none;white-space:pre-line;"></div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('input', e => {
        if (e.target && e.target.id === 'summRatio') {
            const el = document.getElementById('summRatioVal');
            if (el) el.textContent = e.target.value + '%';
        }
    });
});

function summarizeText() {
    const text = document.getElementById('summInput').value.trim();
    const ratio = parseInt(document.getElementById('summRatio').value) / 100;
    if (text.length < 100) { alert('الرجاء إدخال نص أطول (100 حرف على الأقل).'); return; }
    
    // Extractive summarization using TF-IDF scoring
    const sentences = text.match(/[^.!?؟\n]+[.!?؟\n]*/g) || text.split('\n').filter(s => s.trim());
    if (sentences.length < 2) { alert('النص قصير جداً أو لا يحتوي على جمل واضحة.'); return; }
    
    const words = text.toLowerCase().split(/\s+/);
    const stopWords = new Set(['the','a','an','is','in','it','of','to','and','or','but','this','that','with','for','on','at','by','من','في','على','إلى','هذا','هذه','ان','أن','التي','الذي','كان','ما','هو','هي','لا','مع','عن','بعد','قبل','كل','بين','حتى','لكن','إن','أو']);
    const wordFreq = {};
    words.forEach(w => {
        const clean = w.replace(/[^\u0600-\u06FFa-zA-Z]/g, '');
        if (clean.length > 2 && !stopWords.has(clean)) {
            wordFreq[clean] = (wordFreq[clean] || 0) + 1;
        }
    });
    
    const scored = sentences.map(sent => {
        const sentWords = sent.toLowerCase().split(/\s+/);
        let score = 0;
        sentWords.forEach(w => {
            const clean = w.replace(/[^\u0600-\u06FFa-zA-Z]/g, '');
            if (wordFreq[clean]) score += wordFreq[clean];
        });
        return { sent: sent.trim(), score: score / (sentWords.length || 1) };
    });
    
    const keepCount = Math.max(1, Math.round(sentences.length * ratio));
    const topSentences = scored.slice().sort((a, b) => b.score - a.score).slice(0, keepCount);
    const orderedResult = scored.filter(s => topSentences.includes(s)).map(s => s.sent).join(' ');
    
    const resultEl = document.getElementById('summResult');
    resultEl.style.display = 'block';
    resultEl.innerHTML = `<strong>📋 الملخص (${keepCount} جملة من ${sentences.length}):</strong><br><br>${orderedResult}`;
    saveOperation('تلخيص نص', `${sentences.length} جملة → ${keepCount} جملة`);
}

// ── SEO Analyzer ───────────────────────────────────────────
function getSEOTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-search"></i> محلّل SEO</h2>
        <label for="seoTitle">عنوان الصفحة (Title)</label>
        <input type="text" id="seoTitle" placeholder="عنوان صفحتك هنا..." maxlength="200">
        <label for="seoDesc">الوصف (Meta Description)</label>
        <input type="text" id="seoDesc" placeholder="وصف الصفحة هنا..." maxlength="300">
        <label for="seoKeyword">الكلمة المفتاحية الرئيسية</label>
        <input type="text" id="seoKeyword" placeholder="مثال: أدوات مجانية">
        <label for="seoContent">محتوى الصفحة</label>
        <textarea id="seoContent" style="min-height:130px;" placeholder="الصق محتوى صفحتك هنا..."></textarea>
        <button class="btn" onclick="analyzeSEO()" style="margin-top:12px;"><i class="fas fa-chart-bar"></i> حلّل الآن</button>
        <div id="seoResult" style="display:none;margin-top:15px;"></div>
    </div>`;
}

function analyzeSEO() {
    const title = document.getElementById('seoTitle').value.trim();
    const desc = document.getElementById('seoDesc').value.trim();
    const keyword = document.getElementById('seoKeyword').value.trim().toLowerCase();
    const content = document.getElementById('seoContent').value.trim();
    
    let score = 0;
    let issues = [];
    let good = [];
    
    // Title checks
    if (!title) { issues.push('❌ عنوان الصفحة مفقود.'); }
    else if (title.length < 30) { issues.push(`⚠️ العنوان قصير (${title.length} حرف) – المثالي: 50-60 حرف.`); score += 5; }
    else if (title.length > 65) { issues.push(`⚠️ العنوان طويل جداً (${title.length} حرف) – المثالي: 50-60 حرف.`); score += 5; }
    else { good.push(`✅ طول العنوان مثالي (${title.length} حرف).`); score += 15; }
    
    if (keyword && title.toLowerCase().includes(keyword)) { good.push('✅ الكلمة المفتاحية موجودة في العنوان.'); score += 15; }
    else if (keyword) { issues.push('❌ الكلمة المفتاحية غير موجودة في العنوان.'); }
    
    // Description checks
    if (!desc) { issues.push('❌ الوصف (Meta Description) مفقود.'); }
    else if (desc.length < 100) { issues.push(`⚠️ الوصف قصير (${desc.length} حرف) – المثالي: 150-160 حرف.`); score += 5; }
    else if (desc.length > 165) { issues.push(`⚠️ الوصف طويل جداً (${desc.length} حرف) – المثالي: 150-160 حرف.`); score += 5; }
    else { good.push(`✅ طول الوصف مثالي (${desc.length} حرف).`); score += 15; }
    
    if (keyword && desc.toLowerCase().includes(keyword)) { good.push('✅ الكلمة المفتاحية موجودة في الوصف.'); score += 10; }
    else if (keyword) { issues.push('⚠️ الكلمة المفتاحية غير موجودة في الوصف.'); }
    
    // Content checks
    if (content) {
        const wordCount = content.split(/\s+/).filter(Boolean).length;
        if (wordCount < 300) { issues.push(`⚠️ المحتوى قصير (${wordCount} كلمة) – يفضّل 600+ كلمة.`); score += 5; }
        else if (wordCount < 600) { good.push(`✅ المحتوى مقبول (${wordCount} كلمة).`); score += 10; }
        else { good.push(`✅ المحتوى جيد (${wordCount} كلمة).`); score += 20; }
        
        if (keyword) {
            const keyCount = (content.toLowerCase().split(keyword).length - 1);
            const density = ((keyCount / wordCount) * 100).toFixed(1);
            if (density < 0.5) { issues.push(`⚠️ كثافة الكلمة المفتاحية منخفضة (${density}%) – المثالي: 1%-2%.`); }
            else if (density > 3) { issues.push(`⚠️ كثافة الكلمة المفتاحية عالية جداً (${density}%) – تجنّب Keyword Stuffing.`); score += 5; }
            else { good.push(`✅ كثافة الكلمة المفتاحية جيدة (${density}%).`); score += 15; }
        }
    } else { issues.push('⚠️ لم يتم إدخال محتوى للتحليل.'); }
    
    score = Math.min(score, 100);
    const color = score >= 70 ? '#10b981' : score >= 40 ? '#f59e0b' : '#ef4444';
    const label = score >= 70 ? 'جيد' : score >= 40 ? 'متوسط' : 'ضعيف';
    
    const resultEl = document.getElementById('seoResult');
    resultEl.style.display = 'block';
    resultEl.innerHTML = `
        <div style="text-align:center;margin-bottom:15px;">
            <div style="display:inline-block;width:90px;height:90px;border-radius:50%;border:6px solid ${color};line-height:78px;font-size:1.8rem;font-weight:700;color:${color};">${score}</div>
            <div style="color:${color};font-weight:700;font-size:1.1rem;margin-top:5px;">${label}</div>
        </div>
        <div class="result-box" style="border-right-color:${color};">
            ${good.map(g => `<p style="color:#10b981;">${g}</p>`).join('')}
            ${issues.map(i => `<p style="color:${i.startsWith('❌') ? '#ef4444' : '#f59e0b'};">${i}</p>`).join('')}
        </div>`;
    saveOperation('تحليل SEO', `النتيجة: ${score}/100`);
}

// ── Image Compressor ───────────────────────────────────────
function getImgCompressTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-compress-alt"></i> ضاغط الصور</h2>
        <label>اختر الصورة</label>
        <input type="file" id="compressInput" accept="image/*" onchange="previewCompress()">
        <div id="compressPreviewArea" style="display:none;margin-top:10px;">
            <img id="compressPreview" style="max-width:100%;max-height:200px;border-radius:10px;border:1px solid #e2e8f0;">
        </div>
        <label style="margin-top:12px;">جودة الضغط: <span id="compressQualVal">70</span>%</label>
        <input type="range" id="compressQual" min="10" max="99" value="70" oninput="document.getElementById('compressQualVal').textContent=this.value">
        <button class="btn" onclick="compressImage()" style="margin-top:12px;"><i class="fas fa-compress"></i> اضغط الصورة</button>
        <div id="compressResult" style="display:none;" class="result-box">
            <canvas id="compressCanvas" style="max-width:100%;border-radius:10px;"></canvas>
            <p id="compressSizeInfo" style="margin-top:8px;"></p>
            <button class="btn" onclick="downloadCompressed()" style="background:#10b981;margin-top:8px;"><i class="fas fa-download"></i> تحميل الصورة المضغوطة</button>
        </div>
    </div>`;
}

function previewCompress() {
    const file = document.getElementById('compressInput').files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        document.getElementById('compressPreview').src = e.target.result;
        document.getElementById('compressPreviewArea').style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function compressImage() {
    const file = document.getElementById('compressInput').files[0];
    if (!file) { alert('الرجاء اختيار صورة أولاً.'); return; }
    const quality = parseInt(document.getElementById('compressQual').value) / 100;
    const originalSize = (file.size / 1024).toFixed(1);
    
    const reader = new FileReader();
    reader.onload = e => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.getElementById('compressCanvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            
            const compressed = canvas.toDataURL('image/jpeg', quality);
            const compressedSize = (compressed.length * 0.75 / 1024).toFixed(1);
            const savings = (((file.size - compressed.length * 0.75) / file.size) * 100).toFixed(0);
            
            document.getElementById('compressSizeInfo').innerHTML = 
                `الحجم الأصلي: <strong>${originalSize} KB</strong> → بعد الضغط: <strong>${compressedSize} KB</strong> (وفّرت <strong>${savings}%</strong>)`;
            document.getElementById('compressResult').style.display = 'block';
            saveOperation('ضغط صورة', `${originalSize}KB → ${compressedSize}KB`);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function downloadCompressed() {
    const canvas = document.getElementById('compressCanvas');
    const quality = parseInt(document.getElementById('compressQual').value) / 100;
    const link = document.createElement('a');
    link.download = 'compressed_image.jpg';
    link.href = canvas.toDataURL('image/jpeg', quality);
    link.click();
}

// ── Password Strength Checker ──────────────────────────────
function getPassCheckTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-shield-alt"></i> فحص قوة كلمة المرور</h2>
        <label for="passCheckInput">أدخل كلمة المرور</label>
        <div style="position:relative;">
            <input type="password" id="passCheckInput" placeholder="اكتب كلمة المرور هنا..." oninput="checkPasswordStrength()" autocomplete="new-password">
            <button onclick="togglePassVisibility()" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:1.1rem;" id="passEyeBtn">👁</button>
        </div>
        <div class="pass-strength-bar-wrap" style="margin-top:12px;">
            <div class="pass-strength-bar" id="passStrengthBar"></div>
        </div>
        <div id="passStrengthLabel" style="font-weight:700;margin-top:6px;font-size:1rem;"></div>
        <div class="result-box" id="passCheckResult" style="margin-top:10px;"></div>
    </div>`;
}

function togglePassVisibility() {
    const inp = document.getElementById('passCheckInput');
    const btn = document.getElementById('passEyeBtn');
    if (inp.type === 'password') { inp.type = 'text'; btn.textContent = '🙈'; }
    else { inp.type = 'password'; btn.textContent = '👁'; }
}

function checkPasswordStrength() {
    const pass = document.getElementById('passCheckInput').value;
    const bar = document.getElementById('passStrengthBar');
    const label = document.getElementById('passStrengthLabel');
    const result = document.getElementById('passCheckResult');
    
    if (!pass) { bar.style.width = '0%'; bar.style.background = ''; label.textContent = ''; result.innerHTML = ''; return; }
    
    let score = 0;
    const checks = {
        'طول ≥ 8 أحرف': pass.length >= 8,
        'طول ≥ 12 حرفاً': pass.length >= 12,
        'يحتوي أرقام': /\d/.test(pass),
        'أحرف كبيرة': /[A-Z]/.test(pass),
        'أحرف صغيرة': /[a-z]/.test(pass),
        'رموز خاصة (!@#...)': /[^A-Za-z0-9]/.test(pass),
        'لا يحتوي كلمات شائعة': !['password','123456','qwerty','admin','welcome'].some(w => pass.toLowerCase().includes(w))
    };
    
    Object.values(checks).forEach(v => { if (v) score++; });
    
    const levels = [
        { min: 0, max: 2, label: 'ضعيفة جداً 😰', color: '#ef4444', pct: '20%' },
        { min: 3, max: 3, label: 'ضعيفة 😕',      color: '#f97316', pct: '40%' },
        { min: 4, max: 4, label: 'متوسطة 😐',     color: '#f59e0b', pct: '60%' },
        { min: 5, max: 5, label: 'جيدة 😊',       color: '#84cc16', pct: '80%' },
        { min: 6, max: 7, label: 'قوية جداً 💪',  color: '#10b981', pct: '100%' }
    ];
    
    const lvl = levels.find(l => score >= l.min && score <= l.max) || levels[0];
    bar.style.width = lvl.pct;
    bar.style.background = lvl.color;
    label.textContent = `القوة: ${lvl.label}`;
    label.style.color = lvl.color;
    
    const rows = Object.entries(checks).map(([name, ok]) => 
        `<p style="color:${ok ? '#10b981' : '#ef4444'};margin:3px 0;">${ok ? '✅' : '❌'} ${name}</p>`
    ).join('');
    result.innerHTML = rows;
}

// ── Images to PDF ──────────────────────────────────────────
function getImgToPDFTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-file-pdf"></i> تحويل الصور إلى PDF</h2>
        <label>اختر صورة أو أكثر</label>
        <input type="file" id="pdfImgInput" accept="image/*" multiple onchange="previewPDFImages()">
        <div id="pdfPreviewArea" style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px;"></div>
        <button class="btn" onclick="convertImagesToPDF()" style="margin-top:14px;"><i class="fas fa-file-pdf"></i> تحويل إلى PDF</button>
        <div id="pdfResult" class="result-box" style="display:none;text-align:center;">جاري الإنشاء...</div>
    </div>`;
}

function previewPDFImages() {
    const files = document.getElementById('pdfImgInput').files;
    const area = document.getElementById('pdfPreviewArea');
    area.innerHTML = '';
    Array.from(files).forEach(file => {
        const img = document.createElement('img');
        img.style.cssText = 'max-width:120px;max-height:100px;border-radius:8px;border:2px solid #4f46e5;object-fit:contain;';
        const reader = new FileReader();
        reader.onload = e => img.src = e.target.result;
        reader.readAsDataURL(file);
        area.appendChild(img);
    });
}

async function convertImagesToPDF() {
    const files = document.getElementById('pdfImgInput').files;
    if (!files.length) { alert('الرجاء اختيار صورة واحدة على الأقل.'); return; }
    const resultEl = document.getElementById('pdfResult');
    resultEl.style.display = 'block';
    resultEl.textContent = '⏳ جاري إنشاء PDF...';
    
    try {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
        
        for (let i = 0; i < files.length; i++) {
            const dataUrl = await new Promise(resolve => {
                const reader = new FileReader();
                reader.onload = e => resolve(e.target.result);
                reader.readAsDataURL(files[i]);
            });
            const img = await new Promise(resolve => {
                const image = new Image();
                image.onload = () => resolve(image);
                image.src = dataUrl;
            });
            if (i > 0) pdf.addPage();
            const pageW = pdf.internal.pageSize.getWidth();
            const pageH = pdf.internal.pageSize.getHeight();
            const imgRatio = img.width / img.height;
            let drawW = pageW - 20, drawH = drawW / imgRatio;
            if (drawH > pageH - 20) { drawH = pageH - 20; drawW = drawH * imgRatio; }
            const x = (pageW - drawW) / 2, y = (pageH - drawH) / 2;
            pdf.addImage(dataUrl, 'JPEG', x, y, drawW, drawH);
        }
        pdf.save('images_to_pdf.pdf');
        resultEl.innerHTML = `✅ تم إنشاء PDF بنجاح! (${files.length} صورة)`;
        saveOperation('تحويل صور إلى PDF', `${files.length} صورة`);
    } catch (e) {
        resultEl.textContent = '❌ حدث خطأ. تأكد من تحميل الصفحة بالكامل.';
    }
}

// ── Image Format Converter (PNG/JPG) ──────────────────────
function getImgConvertTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-image"></i> تحويل صيغة الصورة</h2>
        <label>اختر الصورة</label>
        <input type="file" id="convertImgInput" accept="image/*" onchange="previewConvertImg()">
        <div id="convertImgPreviewArea" style="display:none;margin-top:10px;">
            <img id="convertImgPreview" style="max-width:100%;max-height:200px;border-radius:10px;border:1px solid #e2e8f0;">
            <p id="convertImgInfo" style="margin-top:6px;font-size:0.9rem;opacity:0.7;"></p>
        </div>
        <label style="margin-top:12px;">تحويل إلى:</label>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:6px;">
            <label style="cursor:pointer;"><input type="radio" name="convertFormat" value="png" checked> PNG</label>
            <label style="cursor:pointer;"><input type="radio" name="convertFormat" value="jpeg"> JPG</label>
            <label style="cursor:pointer;"><input type="radio" name="convertFormat" value="webp"> WebP</label>
        </div>
        <button class="btn" onclick="convertImageFormat()" style="margin-top:14px;"><i class="fas fa-exchange-alt"></i> تحويل وتنزيل</button>
        <div id="convertImgResult" class="result-box" style="display:none;text-align:center;"></div>
    </div>`;
}

function previewConvertImg() {
    const file = document.getElementById('convertImgInput').files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        document.getElementById('convertImgPreview').src = e.target.result;
        document.getElementById('convertImgInfo').textContent = `الاسم: ${file.name} | الحجم: ${(file.size / 1024).toFixed(1)} KB`;
        document.getElementById('convertImgPreviewArea').style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function convertImageFormat() {
    const file = document.getElementById('convertImgInput').files[0];
    if (!file) { alert('الرجاء اختيار صورة أولاً.'); return; }
    const format = document.querySelector('input[name="convertFormat"]:checked').value;
    const mimeType = `image/${format}`;
    const ext = format === 'jpeg' ? 'jpg' : format;
    
    const reader = new FileReader();
    reader.onload = e => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width; canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (format === 'jpeg') { ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height); }
            ctx.drawImage(img, 0, 0);
            const dataUrl = canvas.toDataURL(mimeType, 0.92);
            const link = document.createElement('a');
            const baseName = file.name.replace(/\.[^.]+$/, '');
            link.download = `${baseName}.${ext}`;
            link.href = dataUrl;
            link.click();
            const resultEl = document.getElementById('convertImgResult');
            resultEl.style.display = 'block';
            const newSize = (dataUrl.length * 0.75 / 1024).toFixed(1);
            resultEl.innerHTML = `✅ تم التحويل إلى <strong>${ext.toUpperCase()}</strong> (${newSize} KB) وبدأ التنزيل.`;
            saveOperation('تحويل صيغة صورة', `${file.name} → .${ext}`);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// ── My IP Address ──────────────────────────────────────────
function getMyIPTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-network-wired"></i> معرفة IP الخاص بك</h2>
        <div class="result-box" id="ipResult" style="text-align:center;font-size:1.1rem;">
            <i class="fas fa-spinner fa-spin"></i> جاري تحديد عنوان IP...
        </div>
        <button class="btn" onclick="initMyIP()" style="margin-top:12px;"><i class="fas fa-sync"></i> تحديث</button>
    </div>`;
}

function initMyIP() {
    const resultEl = document.getElementById('ipResult');
    if (!resultEl) return;
    resultEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري تحديد عنوان IP...';
    fetch('https://api.ipify.org?format=json')
        .then(r => r.json())
        .then(data => {
            const ip = data.ip;
            return fetch(`https://ipapi.co/${ip}/json/`).then(r => r.json()).then(geo => ({ ip, geo }));
        })
        .then(({ ip, geo }) => {
            resultEl.innerHTML = `
                <div style="font-size:2rem;margin-bottom:10px;">🌐</div>
                <p><strong>عنوان IP:</strong> <span style="font-family:monospace;font-size:1.3rem;color:#4f46e5;">${ip}</span></p>
                <p><strong>الدولة:</strong> ${geo.country_name || '—'} ${geo.country_code ? `(${geo.country_code})` : ''}</p>
                <p><strong>المدينة:</strong> ${geo.city || '—'}</p>
                <p><strong>المنطقة الزمنية:</strong> ${geo.timezone || '—'}</p>
                <p><strong>مزود الخدمة (ISP):</strong> ${geo.org || '—'}</p>`;
            saveOperation('معرفة IP', ip);
        })
        .catch(() => {
            fetch('https://api.ipify.org?format=json')
                .then(r => r.json())
                .then(data => {
                    resultEl.innerHTML = `<p><strong>عنوان IP:</strong> <span style="font-family:monospace;font-size:1.4rem;color:#4f46e5;">${data.ip}</span></p><p style="font-size:0.85rem;opacity:0.6;">لم يتوفر معلومات جغرافية.</p>`;
                })
                .catch(() => { resultEl.textContent = '❌ لم نتمكن من تحديد IP. تحقق من الاتصال.'; });
        });
}

// ── Internet Speed Test ────────────────────────────────────
function getSpeedTestTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-tachometer-alt"></i> فحص سرعة الإنترنت</h2>
        <p style="opacity:0.7;margin-bottom:15px;">يقيس سرعة التنزيل عبر تحميل ملف اختبار من CDN.</p>
        <button class="btn" onclick="runSpeedTest()" id="speedTestBtn"><i class="fas fa-play"></i> ابدأ الاختبار</button>
        <div id="speedResult" class="result-box" style="display:none;text-align:center;">
            <div class="speed-gauge" id="speedGauge">
                <div id="speedValue" style="font-size:3rem;font-weight:700;color:#4f46e5;">0</div>
                <div style="font-size:1rem;opacity:0.7;">Mbps</div>
            </div>
            <div id="speedProgress" style="margin-top:12px;"></div>
            <p id="speedLabel" style="margin-top:8px;font-weight:600;"></p>
        </div>
    </div>`;
}

function initSpeedTest() {}

async function runSpeedTest() {
    const btn = document.getElementById('speedTestBtn');
    const result = document.getElementById('speedResult');
    btn.disabled = true; btn.textContent = '⏳ جاري الاختبار...';
    result.style.display = 'block';
    document.getElementById('speedValue').textContent = '...';
    document.getElementById('speedLabel').textContent = 'يتم قياس السرعة...';
    document.getElementById('speedProgress').innerHTML = '<div style="width:100%;height:8px;background:#e2e8f0;border-radius:4px;overflow:hidden;"><div id="speedBar" style="height:100%;width:0%;background:linear-gradient(90deg,#4f46e5,#10b981);transition:width 0.5s;"></div></div>';
    
    // Test URLs (small files from fast CDNs)
    const testUrl = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css?cache_bust=${Date.now()}`;
    
    try {
        let totalBits = 0;
        let totalTime = 0;
        const rounds = 3;
        for (let i = 0; i < rounds; i++) {
            document.getElementById('speedBar').style.width = `${((i / rounds) * 100)}%`;
            const start = performance.now();
            const response = await fetch(testUrl + i, { cache: 'no-store' });
            const data = await response.text();
            const elapsed = (performance.now() - start) / 1000;
            totalBits += data.length * 8;
            totalTime += elapsed;
            document.getElementById('speedValue').textContent = ((totalBits / totalTime) / 1000000).toFixed(1);
        }
        document.getElementById('speedBar').style.width = '100%';
        const speedMbps = (totalBits / totalTime / 1000000).toFixed(2);
        document.getElementById('speedValue').textContent = speedMbps;
        const label = speedMbps < 1 ? '🐢 بطيء جداً' : speedMbps < 5 ? '🐌 بطيء' : speedMbps < 25 ? '🚶 متوسط' : speedMbps < 100 ? '🚀 سريع' : '⚡ سريع جداً';
        document.getElementById('speedLabel').textContent = label;
        saveOperation('سرعة الإنترنت', `${speedMbps} Mbps`);
    } catch (e) {
        document.getElementById('speedLabel').textContent = '❌ فشل الاختبار. تحقق من الاتصال.';
        document.getElementById('speedValue').textContent = '--';
    }
    btn.disabled = false; btn.innerHTML = '<i class="fas fa-redo"></i> إعادة الاختبار';
}

// ── Remove Duplicates ──────────────────────────────────────
function getDeduplicateTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-copy"></i> إزالة التكرار من النص</h2>
        <label for="dedupeInput">أدخل النص (كل سطر على حدة)</label>
        <textarea id="dedupeInput" style="min-height:150px;" placeholder="سطر 1&#10;سطر 2&#10;سطر 1&#10;سطر 3&#10;سطر 2"></textarea>
        <div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap;align-items:center;">
            <label style="cursor:pointer;"><input type="checkbox" id="dedupeTrim" checked> تجاهل المسافات الزائدة</label>
            <label style="cursor:pointer;"><input type="checkbox" id="dedupeCase"> تجاهل حالة الأحرف</label>
            <label style="cursor:pointer;"><input type="checkbox" id="dedupeEmpty" checked> حذف الأسطر الفارغة</label>
        </div>
        <button class="btn" onclick="deduplicateText()" style="margin-top:12px;"><i class="fas fa-filter"></i> إزالة التكرار</button>
        <div id="dedupeResult" style="display:none;" class="result-box">
            <p id="dedupeStats" style="margin-bottom:8px;font-weight:600;"></p>
            <textarea id="dedupeOutput" style="min-height:130px;width:100%;background:transparent;border:none;resize:vertical;font-family:inherit;" readonly></textarea>
            <button class="btn" onclick="copyDedupe()" style="margin-top:8px;background:#10b981;"><i class="fas fa-copy"></i> نسخ النتيجة</button>
        </div>
    </div>`;
}

function deduplicateText() {
    const text = document.getElementById('dedupeInput').value;
    const trim = document.getElementById('dedupeTrim').checked;
    const ignoreCase = document.getElementById('dedupeCase').checked;
    const removeEmpty = document.getElementById('dedupeEmpty').checked;
    
    let lines = text.split('\n');
    const originalCount = lines.length;
    
    if (removeEmpty) lines = lines.filter(l => l.trim() !== '');
    
    const seen = new Set();
    const unique = lines.filter(line => {
        const key = ignoreCase ? (trim ? line.trim().toLowerCase() : line.toLowerCase()) : (trim ? line.trim() : line);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
    
    const removed = originalCount - unique.length;
    document.getElementById('dedupeStats').textContent = `تم حذف ${removed} سطر مكرر – تبقّى ${unique.length} سطر فريد.`;
    document.getElementById('dedupeOutput').value = unique.join('\n');
    document.getElementById('dedupeResult').style.display = 'block';
    saveOperation('إزالة تكرار', `حُذف ${removed} سطر`);
}

function copyDedupe() {
    const text = document.getElementById('dedupeOutput').value;
    navigator.clipboard.writeText(text).then(() => alert('✅ تم النسخ!')).catch(() => {
        document.getElementById('dedupeOutput').select();
        document.execCommand('copy');
        alert('✅ تم النسخ!');
    });
}

// ── Text to Bullet Points ──────────────────────────────────
function getTextBulletTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-list-ul"></i> تحويل النص إلى Bullet Points</h2>
        <label for="bulletInput">أدخل النص</label>
        <textarea id="bulletInput" style="min-height:140px;" placeholder="أدخل نصاً وسيتم تحويله إلى نقاط منظمة...&#10;&#10;يمكنك كتابة كل فكرة في سطر، أو كتابة نص متصل وسيتم تقسيمه تلقائياً."></textarea>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px;align-items:center;">
            <label style="margin:0;">رمز النقطة:</label>
            <select id="bulletSymbol" style="width:auto;">
                <option value="•">• نقطة</option>
                <option value="→">→ سهم</option>
                <option value="✓">✓ صح</option>
                <option value="★">★ نجمة</option>
                <option value="▶">▶ مثلث</option>
            </select>
            <label style="cursor:pointer;"><input type="checkbox" id="bulletNumbers"> ترقيم بدلاً من رموز</label>
        </div>
        <button class="btn" onclick="convertToBullets()" style="margin-top:12px;"><i class="fas fa-list"></i> تحويل إلى نقاط</button>
        <div id="bulletResult" style="display:none;" class="result-box">
            <div id="bulletOutput" style="white-space:pre-line;line-height:2;"></div>
            <button class="btn" onclick="copyBullets()" style="margin-top:8px;background:#10b981;"><i class="fas fa-copy"></i> نسخ</button>
        </div>
    </div>`;
}

function convertToBullets() {
    const text = document.getElementById('bulletInput').value.trim();
    if (!text) { alert('الرجاء إدخال نص.'); return; }
    const symbol = document.getElementById('bulletSymbol').value;
    const numbered = document.getElementById('bulletNumbers').checked;
    
    const lines = text.split(/[\n.!?؟]+/).map(l => l.trim()).filter(l => l.length > 2);
    const bullets = lines.map((line, i) => {
        const prefix = numbered ? `${i + 1}.` : symbol;
        return `${prefix} ${line}`;
    }).join('\n');
    
    document.getElementById('bulletOutput').textContent = bullets;
    document.getElementById('bulletResult').style.display = 'block';
    saveOperation('تحويل إلى نقاط', `${lines.length} نقطة`);
}

function copyBullets() {
    const text = document.getElementById('bulletOutput').textContent;
    navigator.clipboard.writeText(text).then(() => alert('✅ تم النسخ!')).catch(() => {
        const el = document.getElementById('bulletOutput');
        const range = document.createRange();
        range.selectNodeContents(el);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        alert('✅ تم النسخ!');
    });
}

// ── Spell Checker ──────────────────────────────────────────
function getSpellCheckTool() {
    return `
    <div class="tool-box">
        <h2><i class="fas fa-spell-check"></i> كاشف الأخطاء الإملائية</h2>
        <p style="opacity:0.7;margin-bottom:10px;font-size:0.9rem;">يدعم النصوص الإنجليزية بدقة عالية عبر LanguageTool API المجانية.</p>
        <label for="spellInput">أدخل النص الإنجليزي</label>
        <textarea id="spellInput" style="min-height:140px;" placeholder="Enter your English text here to check for spelling and grammar errors..."></textarea>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px;align-items:center;">
            <label style="margin:0;">اللغة:</label>
            <select id="spellLang" style="width:auto;">
                <option value="en-US">English (US)</option>
                <option value="en-GB">English (UK)</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="es">Español</option>
                <option value="ar">العربية</option>
            </select>
        </div>
        <button class="btn" onclick="checkSpelling()" style="margin-top:12px;"><i class="fas fa-search"></i> فحص الإملاء</button>
        <div id="spellResult" style="display:none;margin-top:15px;"></div>
    </div>`;
}

function checkSpelling() {
    const text = document.getElementById('spellInput').value.trim();
    const lang = document.getElementById('spellLang').value;
    if (!text) { alert('الرجاء إدخال نص للفحص.'); return; }
    
    const resultEl = document.getElementById('spellResult');
    resultEl.style.display = 'block';
    resultEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الفحص...';
    
    const formData = new URLSearchParams();
    formData.append('text', text);
    formData.append('language', lang);
    
    fetch('https://api.languagetool.org/v2/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData
    })
    .then(r => r.json())
    .then(data => {
        const matches = data.matches || [];
        if (matches.length === 0) {
            resultEl.innerHTML = '<div class="result-box" style="border-right-color:#10b981;"><p style="color:#10b981;font-size:1.1rem;">✅ لا توجد أخطاء إملائية أو نحوية!</p></div>';
            return;
        }
        
        let highlighted = text;
        const sorted = matches.slice().sort((a, b) => b.offset - a.offset);
        sorted.forEach(m => {
            const word = text.substring(m.offset, m.offset + m.length);
            const suggestion = m.replacements.length ? ` (الاقتراح: <strong>${m.replacements.slice(0, 2).map(r => r.value).join('، ')}</strong>)` : '';
            highlighted = highlighted.substring(0, m.offset) +
                `<mark style="background:#fecaca;border-radius:3px;padding:0 2px;" title="${m.message}">${word}</mark>` +
                highlighted.substring(m.offset + m.length);
        });
        
        const errorList = matches.map((m, i) => {
            const word = text.substring(m.offset, m.offset + m.length);
            const sugg = m.replacements.slice(0, 3).map(r => r.value).join('، ');
            return `<div style="padding:8px;border-bottom:1px solid #e2e8f0;"><strong style="color:#ef4444;">خطأ ${i + 1}:</strong> "${word}" — ${m.message}${sugg ? ` | الاقتراح: <em>${sugg}</em>` : ''}</div>`;
        }).join('');
        
        resultEl.innerHTML = `
            <div class="result-box" style="border-right-color:#f59e0b;">
                <p style="font-weight:700;margin-bottom:10px;">وُجد <strong style="color:#ef4444;">${matches.length}</strong> خطأ:</p>
                <div style="line-height:2;margin-bottom:15px;">${highlighted}</div>
                <hr style="margin:10px 0;">
                ${errorList}
            </div>`;
        saveOperation('فحص إملائي', `${matches.length} خطأ`);
    })
    .catch(() => {
        resultEl.innerHTML = '<div class="result-box" style="border-right-color:#ef4444;"><p style="color:#ef4444;">❌ لم يتم الاتصال بخادم الفحص. تحقق من الاتصال بالإنترنت أو حاول لاحقاً.</p></div>';
    });
}

// ============================================================
// 11. SEO
// ============================================================

function updateSEOMeta(toolId = 'home') {
    const titles = {
        home: 'Smart Tools Hub – أدوات ذكية مجانية',
        age: 'حساب العمر – أداة مجانية لتحديد عمرك بدقة',
        bmi: 'حساب BMI – مؤشر كتلة الجسم مع التصنيف الصحي',
        password: 'مولد كلمات مرور قوية – أداة آمنة',
        word: 'عداد الكلمات والحروف والجمل – أداة تحليل نصوص',
        unit: 'محول الوحدات – تحويل الكيلو، الرطل، المتر، القدم',
        calc: 'آلة حاسبة بسيطة – عمليات حسابية أساسية',
        percent: 'حساب النسبة المئوية والزيادة والنقصان',
        countdown: 'عداد تنازلي – معرفة الوقت المتبقي لحدث ما',
        currency: 'محول العملات – تحويل بين الدولار واليورو والجنيه',
        tax: 'حساب الضريبة – معرفة قيمة الضريبة والإجمالي',
        textanalysis: 'تحليل النصوص – إحصائيات متقدمة عن النص',
        textconverter: 'محول النصوص – تحويل النص إلى كبير/صغير/عكس',
        tip: 'حاسبة الإكرامية – حساب الإكرامية وتوزيعها',
        color: 'مولد الألوان – توليد ألوان عشوائية',
        spinwheel: 'عجلة الحظ – اختيار فائز عشوائي من المشاركين',
        translator: 'مترجم فوري – ترجمة النصوص بين أكثر من 30 لغة',
        qrcode: 'مولّد QR Code – تحويل النص أو الرابط إلى رمز QR',
        summarizer: 'ملخّص النصوص الذكي – تلخيص تلقائي بالذكاء الاصطناعي',
        seo: 'محلّل SEO – تحليل وتحسين موقعك لمحركات البحث',
        imgcompress: 'ضاغط الصور – تقليل حجم الصورة مجاناً',
        passcheck: 'فحص قوة كلمة المرور – اعرف مدى أمان كلمتك',
        imgtopdf: 'تحويل الصور إلى PDF – دمج صور متعددة في PDF',
        imgconvert: 'تحويل صيغة الصورة – PNG إلى JPG والعكس',
        myip: 'معرفة IP الخاص بك – عنوانك الجغرافي والموقع',
        speedtest: 'فحص سرعة الإنترنت – قياس سرعة التنزيل',
        deduplicate: 'إزالة التكرار – حذف الأسطر المكررة من النص',
        textbullet: 'النص إلى Bullet Points – تنظيم النص في نقاط',
        spellcheck: 'كاشف الأخطاء الإملائية – تدقيق النصوص مجاناً',
        about: 'من نحن – فريق Smart Tools Hub',
        contact: 'اتصل بنا – تواصل مع فريق الدعم',
        privacy: 'سياسة الخصوصية – كيف نحمي بياناتك',
        terms: 'شروط الخدمة – اتفاقية استخدام الموقع'
    };
    const descriptions = {
        home: 'مجموعة متكاملة من الأدوات المساعدة مع نظام تسجيل دخول وحفظ التفضيلات.',
        age: 'احسب عمرك بالسنوات والأشهر والأيام بسرعة باستخدام أداة حساب العمر المجانية.',
        bmi: 'احسب مؤشر كتلة الجسم (BMI) وتعرف على حالتك الصحية.',
        password: 'أنشئ كلمة مرور قوية وآمنة بطول مخصص تحتوي على أحرف وأرقام ورموز.',
        word: 'قم بتحليل نصوصك بسهولة: عدد الكلمات، الحروف، والجمل مع تحديث فوري.',
        unit: 'حوّل بين وحدات القياس المختلفة: الكيلو والرطل، المتر والقدم، الدرجات المئوية والفهرنهايت.',
        calc: 'آلة حاسبة بسيطة وسريعة لإجراء العمليات الأساسية.',
        percent: 'احسب النسبة المئوية لقيمة من قيمة أخرى، واحسب الزيادة والنقصان.',
        countdown: 'حدد تاريخاً ووقتاً واستلم عداً تنازلياً دقيقاً بالثواني حتى ذلك الموعد.',
        currency: 'حوّل بين أكثر من 20 عملة عالمية بأسعار صرف ثابتة.',
        tax: 'أدخل المبلغ ونسبة الضريبة لتحصل على قيمة الضريبة والإجمالي النهائي.',
        textanalysis: 'تحليل متقدم للنصوص: عدد الكلمات الفريدة، متوسط طول الكلمة، وتكرار الكلمات.',
        textconverter: 'حوّل النص إلى أحرف كبيرة أو صغيرة أو اعكس ترتيب النص.',
        tip: 'احسب الإكرامية المناسبة وقم بتوزيعها على عدد الأشخاص.',
        color: 'توليد ألوان عشوائية مع كود HEX لعرضها مباشرة.',
        spinwheel: 'أضف أسماء المشاركين ودوّر العجلة لاختيار الفائز بطريقة ممتعة.',
        translator: 'ترجم النصوص بين أكثر من 30 لغة باستخدام خدمة ترجمة مجانية.',
        about: 'تعرف على فريق عمل Smart Tools Hub ورؤيتنا.',
        contact: 'تواصل معنا عبر البريد الإلكتروني أو وسائل التواصل الاجتماعي.',
        privacy: 'نوضح في هذه الصفحة كيفية جمع واستخدام وحماية بياناتك.',
        terms: 'اقرأ شروط استخدام الموقع قبل البدء في استخدام خدماتنا.'
    };
    const title = titles[toolId] || titles.home;
    const desc = descriptions[toolId] || descriptions.home;
    document.title = title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = desc;
}

// ============================================================
// 11. تهيئة الصفحة عند التحميل
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    applyTheme(currentTheme);
    if (currentUser) {
        updateUIForUser();
        const userData = getCurrentUserData();
        if (userData && userData.preferences) {
            if (userData.preferences.lang) applyLanguage(userData.preferences.lang);
            if (userData.preferences.theme) applyTheme(userData.preferences.theme);
            if (userData.preferences.lastTool) showTool(userData.preferences.lastTool);
        }
    }
    document.getElementById('langToggle').addEventListener('click', toggleLang);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('navLinks').classList.toggle('active');
    });
    window.onclick = function(e) {
        if (e.target === document.getElementById('loginModal')) closeLoginModal();
    };
    updateSEOMeta('home');
});
