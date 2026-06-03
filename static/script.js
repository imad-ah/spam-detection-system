const csvForm = document.querySelector("#csvForm");
const csvFile = document.querySelector("#csvFile");
const csvButton = document.querySelector("#csvButton");
const csvNotice = document.querySelector("#csvNotice");
const singleForm = document.querySelector("#singleForm");
const messageInput = document.querySelector("#messageInput");
const singleButton = document.querySelector("#singleButton");
const singleResult = document.querySelector("#singleResult");
const resultSearch = document.querySelector("#resultSearch");
const resultsBody = document.querySelector("#resultsBody");
const languageSelect = document.querySelector("#languageSelect");
const sampleButton = document.querySelector("#sampleButton");
const exportButton = document.querySelector("#exportButton");
const clearButton = document.querySelector("#clearButton");
const resultFilter = document.querySelector("#resultFilter");
const sortSelect = document.querySelector("#sortSelect");
const thresholdRange = document.querySelector("#thresholdRange");
const thresholdValue = document.querySelector("#thresholdValue");
const copySummaryButton = document.querySelector("#copySummaryButton");
const historyList = document.querySelector("#historyList");
const appShell = document.querySelector(".app");
const sidebarToggle = document.querySelector("#sidebarToggle");
const navLinks = [...document.querySelectorAll(".nav a[href^='#']")];
const navSections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

const totalEmails = document.querySelector("#totalEmails");
const spamEmails = document.querySelector("#spamEmails");
const hamEmails = document.querySelector("#hamEmails");
const avgConfidence = document.querySelector("#avgConfidence");
const highRisk = document.querySelector("#highRisk");
const spamRate = document.querySelector("#spamRate");
const hamRate = document.querySelector("#hamRate");
const detectedColumn = document.querySelector("#detectedColumn");

const resultLabel = document.querySelector("#resultLabel");
const resultDescription = document.querySelector("#resultDescription");
const resultSubtitle = document.querySelector("#resultSubtitle");
const singleSpamScore = document.querySelector("#singleSpamScore");
const singleHamScore = document.querySelector("#singleHamScore");
const singleSpamBar = document.querySelector("#singleSpamBar");
const singleHamBar = document.querySelector("#singleHamBar");

const i18n = {
    en: {
        brandSub: "Spam Detection",
        navigation: "Navigation",
        navDashboard: "Dashboard",
        navSingle: "Detect Message",
        navCsv: "CSV Detection",
        navHistory: "History",
        navStats: "Statistics",
        navTools: "Tools",
        about: "About",
        privacyText: "This app uses your fine-tuned model to detect spam messages with confidence scores.",
        welcome: "Welcome back, Imad",
        subtitle: "AI powered spam detection dashboard",
        sampleCsv: "Sample CSV",
        exportCsv: "Export",
        clear: "Clear",
        totalEmails: "Total Scanned",
        totalHelp: "Messages",
        spam: "Spam",
        ham: "Ham",
        avgConfidence: "Accuracy",
        avgHelp: "Model confidence",
        highRisk: "High Risk",
        highRiskHelp: "Spam score above 80%",
        detectedColumn: "Detected Column",
        columnHelp: "CSV text column",
        singleTitle: "Detect Single Message",
        singleText: "Enter an email or message to analyze.",
        singlePlaceholder: "Type or paste your message here...",
        detectMessage: "Detect Spam",
        singleWaiting: "Waiting for a message.",
        resultPanelTitle: "Detection Result",
        spamScore: "Spam Probability",
        hamScore: "Ham Probability",
        csvTitle: "Detect Multiple Messages (CSV)",
        csvText: "Upload a CSV file containing emails or messages to analyze them in bulk.",
        uploadTitle: "Drag and drop your CSV file here",
        uploadHint: "Supported columns: message, email, text, content, body",
        analyzeCsv: "Browse & Analyze",
        csvEmpty: "No CSV analyzed yet.",
        historyTitle: "Recent History",
        historyText: "Latest analyzed messages.",
        emptyHistory: "No history yet.",
        trendTitle: "Spam Detection Trend",
        trendText: "Spam and ham confidence across latest results.",
        toolsTitle: "Analysis Tools",
        toolsText: "Filter, sort, search, copy summary, and export CSV results.",
        filterLabel: "Result filter",
        all: "All",
        sortLabel: "Sort by",
        sortRow: "Row",
        sortSpam: "Spam score",
        sortHam: "Ham score",
        thresholdLabel: "Min spam score",
        copySummary: "Copy Summary",
        searchPlaceholder: "Search results...",
        resultsTitle: "CSV Results",
        resultsText: "Every row is classified with spam and ham confidence scores.",
        row: "Row",
        preview: "Preview",
        result: "Result",
        emptyResults: "Upload a CSV to see results.",
        analyzing: "Analyzing...",
        detecting: "Detecting...",
        chooseCsv: "Please choose a CSV file first.",
        csvWorking: "Analyzing CSV rows with the local model...",
        analyzed: "Analyzed",
        rowsFrom: "rows from column",
        noMatches: "No matching results.",
        pasteFirst: "Paste a message first.",
        noExport: "No rows to export.",
        copied: "Summary copied.",
        cleared: "Dashboard cleared.",
        ready: "READY",
        readyDescription: "Paste a message to see the model decision.",
        spamDescription: "This message is classified as spam by the AI model.",
        hamDescription: "This message is classified as ham by the AI model.",
        justNow: "just now"
    },
    fr: {
        brandSub: "Detection Spam",
        navigation: "Navigation",
        navDashboard: "Tableau",
        navSingle: "Detecter message",
        navCsv: "Detection CSV",
        navHistory: "Historique",
        navStats: "Statistiques",
        navTools: "Outils",
        about: "A propos",
        privacyText: "Cette application utilise votre modele pour detecter les messages spam avec scores.",
        welcome: "Bon retour, Imad",
        subtitle: "Dashboard de detection spam par IA",
        sampleCsv: "CSV exemple",
        exportCsv: "Exporter",
        clear: "Effacer",
        totalEmails: "Total scanne",
        totalHelp: "Messages",
        spam: "Spam",
        ham: "Ham",
        avgConfidence: "Precision",
        avgHelp: "Confiance modele",
        highRisk: "Risque eleve",
        highRiskHelp: "Score spam au-dessus de 80%",
        detectedColumn: "Colonne detectee",
        columnHelp: "Colonne texte CSV",
        singleTitle: "Detecter un message",
        singleText: "Entrez un email ou message a analyser.",
        singlePlaceholder: "Tapez ou collez votre message ici...",
        detectMessage: "Detecter Spam",
        singleWaiting: "En attente d'un message.",
        resultPanelTitle: "Resultat Detection",
        spamScore: "Probabilite Spam",
        hamScore: "Probabilite Ham",
        csvTitle: "Detecter plusieurs messages (CSV)",
        csvText: "Chargez un CSV contenant emails ou messages.",
        uploadTitle: "Deposez votre CSV ici",
        uploadHint: "Colonnes supportees: message, email, text, content, body",
        analyzeCsv: "Parcourir & Analyser",
        csvEmpty: "Aucun CSV analyse.",
        historyTitle: "Historique recent",
        historyText: "Derniers messages analyses.",
        emptyHistory: "Aucun historique.",
        trendTitle: "Tendance detection spam",
        trendText: "Confiance spam et ham des derniers resultats.",
        toolsTitle: "Outils d'analyse",
        toolsText: "Filtrer, trier, chercher, copier et exporter.",
        filterLabel: "Filtre resultat",
        all: "Tous",
        sortLabel: "Trier par",
        sortRow: "Ligne",
        sortSpam: "Score spam",
        sortHam: "Score ham",
        thresholdLabel: "Score spam min",
        copySummary: "Copier resume",
        searchPlaceholder: "Chercher...",
        resultsTitle: "Resultats CSV",
        resultsText: "Chaque ligne est classee avec les scores spam et ham.",
        row: "Ligne",
        preview: "Apercu",
        result: "Resultat",
        emptyResults: "Chargez un CSV pour voir les resultats.",
        analyzing: "Analyse...",
        detecting: "Detection...",
        chooseCsv: "Choisissez d'abord un CSV.",
        csvWorking: "Analyse du CSV avec le modele local...",
        analyzed: "Analyse de",
        rowsFrom: "lignes depuis la colonne",
        noMatches: "Aucun resultat.",
        pasteFirst: "Collez d'abord un message.",
        noExport: "Aucune ligne a exporter.",
        copied: "Resume copie.",
        cleared: "Dashboard efface.",
        ready: "PRET",
        readyDescription: "Collez un message pour voir la decision du modele.",
        spamDescription: "Ce message est classe comme spam par le modele IA.",
        hamDescription: "Ce message est classe comme ham par le modele IA.",
        justNow: "maintenant"
    },
    ar: {
        brandSub: "كشف الرسائل المزعجة",
        navigation: "القائمة",
        navDashboard: "لوحة التحكم",
        navSingle: "تحليل رسالة",
        navCsv: "تحليل ملف CSV",
        navHistory: "السجل",
        navStats: "الإحصائيات",
        navTools: "الأدوات",
        about: "حول التطبيق",
        privacyText: "يعتمد هذا التطبيق على نموذجك لاكتشاف الرسائل المزعجة مع عرض نسب الثقة.",
        welcome: "مرحبًا بعودتك، Imad",
        subtitle: "نظام كشف الرسائل المزعجة بالذكاء الاصطناعي",
        sampleCsv: "ملف CSV تجريبي",
        exportCsv: "تصدير",
        clear: "مسح",
        totalEmails: "إجمالي الفحوصات",
        totalHelp: "رسائل",
        spam: "رسائل مزعجة",
        ham: "رسائل سليمة",
        avgConfidence: "الدقة",
        avgHelp: "ثقة النموذج",
        highRisk: "خطر مرتفع",
        highRiskHelp: "درجة الرسائل المزعجة أعلى من 80%",
        detectedColumn: "العمود المكتشف",
        columnHelp: "عمود النص داخل ملف CSV",
        singleTitle: "تحليل رسالة واحدة",
        singleText: "أدخل البريد الإلكتروني أو الرسالة للتحليل.",
        singlePlaceholder: "اكتب أو الصق الرسالة هنا...",
        detectMessage: "كشف الرسائل المزعجة",
        singleWaiting: "في انتظار رسالة.",
        resultPanelTitle: "نتيجة التحليل",
        spamScore: "احتمال الرسالة المزعجة",
        hamScore: "احتمال الرسالة السليمة",
        csvTitle: "تحليل رسائل متعددة (CSV)",
        csvText: "قم برفع ملف CSV يحتوي على رسائل أو بريد إلكتروني للتحليل الجماعي.",
        uploadTitle: "اسحب ملف CSV إلى هنا",
        uploadHint: "الأعمدة المدعومة: message, email, text, content, body",
        analyzeCsv: "اختيار وتحليل",
        csvEmpty: "لا يوجد ملف CSV تم تحليله.",
        historyTitle: "آخر التحليلات",
        historyText: "آخر الرسائل التي تم تحليلها.",
        emptyHistory: "لا يوجد سجل.",
        trendTitle: "اتجاه كشف الرسائل المزعجة",
        trendText: "مستوى الثقة للرسائل المزعجة والسليمة في آخر النتائج.",
        toolsTitle: "أدوات التحليل",
        toolsText: "تصفية، ترتيب، بحث، نسخ الملخص، وتصدير.",
        filterLabel: "تصفية النتيجة",
        all: "الكل",
        sortLabel: "الترتيب حسب",
        sortRow: "السطر",
        sortSpam: "نسبة الرسائل المزعجة",
        sortHam: "نسبة الرسائل السليمة",
        thresholdLabel: "أدنى درجة للرسائل المزعجة",
        copySummary: "نسخ الملخص",
        searchPlaceholder: "بحث...",
        resultsTitle: "نتائج ملف CSV",
        resultsText: "يتم تصنيف كل سطر مع نسب الرسائل المزعجة والسليمة.",
        row: "السطر",
        preview: "معاينة النص",
        result: "النتيجة",
        emptyResults: "قم برفع ملف CSV لعرض النتائج.",
        analyzing: "جارٍ التحليل...",
        detecting: "جارٍ التحليل...",
        chooseCsv: "اختر ملف CSV أولًا.",
        csvWorking: "جارٍ تحليل ملف CSV باستخدام النموذج المحلي...",
        analyzed: "تم التحليل",
        rowsFrom: "سطور من العمود",
        noMatches: "لا توجد نتائج.",
        pasteFirst: "الصق الرسالة أولًا.",
        noExport: "لا توجد بيانات للتصدير.",
        copied: "تم نسخ الملخص.",
        cleared: "تم مسح لوحة التحكم.",
        ready: "جاهز",
        readyDescription: "الصق رسالة لمعرفة قرار النموذج.",
        spamDescription: "تم تصنيف هذه الرسالة كرسالة مزعجة بواسطة نموذج الذكاء الاصطناعي.",
        hamDescription: "تم تصنيف هذه الرسالة كرسالة سليمة بواسطة نموذج الذكاء الاصطناعي.",
        justNow: "الآن"
    }
};

let currentLanguage = localStorage.getItem("safemail-language") || "en";
let latestRows = [];
let latestSummary = null;
let singleState = { result: "READY", spam_score: 0, ham_score: 0 };
let activeSectionId = "dashboard";
let navScrollTicking = false;

function t(key) {
    return i18n[currentLanguage][key] || i18n.en[key] || key;
}

function formatPercent(value) {
    return `${Number(value || 0).toFixed(1)}%`;
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    }[char]));
}

function setActiveSection(sectionId, updateHash = false) {
    if (!sectionId || sectionId === activeSectionId) return;
    activeSectionId = sectionId;
    navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
    });
    if (updateHash && history.replaceState) {
        history.replaceState(null, "", `#${sectionId}`);
    }
}

function getSectionFromHash() {
    const id = window.location.hash.slice(1);
    return navSections.some((section) => section.id === id) ? id : "dashboard";
}

function syncActiveSectionFromScroll() {
    const offset = window.innerHeight * 0.28;
    const current = navSections.reduce((closest, section) => {
        const top = section.getBoundingClientRect().top - offset;
        if (top <= 0 && top > closest.top) return { id: section.id, top };
        return closest;
    }, { id: navSections[0]?.id || "dashboard", top: Number.NEGATIVE_INFINITY });
    setActiveSection(current.id);
}

function initNavigation() {
    const isCollapsed = localStorage.getItem("safemail-sidebar-collapsed") === "true";
    appShell.classList.toggle("sidebar-collapsed", isCollapsed);
    sidebarToggle.setAttribute("aria-expanded", String(!isCollapsed));
    setActiveSection(getSectionFromHash());

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            setActiveSection(link.getAttribute("href").slice(1));
        });
    });

    sidebarToggle.addEventListener("click", () => {
        const nextCollapsed = !appShell.classList.contains("sidebar-collapsed");
        appShell.classList.toggle("sidebar-collapsed", nextCollapsed);
        sidebarToggle.setAttribute("aria-expanded", String(!nextCollapsed));
        localStorage.setItem("safemail-sidebar-collapsed", String(nextCollapsed));
    });

    window.addEventListener("hashchange", () => setActiveSection(getSectionFromHash()));
    window.addEventListener("scroll", () => {
        if (navScrollTicking) return;
        navScrollTicking = true;
        requestAnimationFrame(() => {
            syncActiveSectionFromScroll();
            navScrollTicking = false;
        });
    }, { passive: true });
    syncActiveSectionFromScroll();
}

function applyLanguage(language) {
    currentLanguage = language;
    localStorage.setItem("safemail-language", language);
    languageSelect.value = language;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        element.placeholder = t(element.dataset.i18nPlaceholder);
    });
    csvButton.textContent = t("analyzeCsv");
    singleButton.textContent = t("detectMessage");
    if (!latestRows.length) {
        csvNotice.textContent = t("csvEmpty");
    }
    if (singleState.result === "READY") {
        singleResult.textContent = t("singleWaiting");
        resultSubtitle.textContent = t("singleWaiting");
        resultDescription.textContent = t("readyDescription");
        resultLabel.textContent = t("ready");
    }
    renderRows();
    renderHistory();
    drawConfidence();
    drawTrend();
}

function setCsvLoading(isLoading) {
    csvButton.disabled = isLoading;
    csvButton.textContent = isLoading ? t("analyzing") : t("analyzeCsv");
}

function setSingleLoading(isLoading) {
    singleButton.disabled = isLoading;
    singleButton.textContent = isLoading ? t("detecting") : t("detectMessage");
}

function updateDashboard(data) {
    const avg = data.rows.length
        ? data.rows.reduce((sum, row) => sum + (row.result === "SPAM" ? row.spam_score : row.ham_score), 0) / data.rows.length
        : 0;
    const risky = data.rows.filter((row) => row.spam_score >= 80).length;

    latestSummary = { ...data, avg, risky };
    totalEmails.textContent = data.total;
    spamEmails.textContent = data.spam;
    hamEmails.textContent = data.ham;
    avgConfidence.textContent = formatPercent(avg);
    highRisk.textContent = risky;
    spamRate.textContent = `${formatPercent(data.spam_rate)} of total`;
    hamRate.textContent = `${formatPercent(data.ham_rate)} of total`;
    detectedColumn.textContent = data.message_column || "-";
}

function getFilteredRows() {
    const query = resultSearch.value.trim().toLowerCase();
    const filter = resultFilter.value;
    const threshold = Number(thresholdRange.value);
    const rows = [...latestRows].filter((row) => {
        const matchesText = !query || row.preview.toLowerCase().includes(query) || row.result.toLowerCase().includes(query);
        const matchesFilter = filter === "ALL" || row.result === filter;
        const matchesThreshold = row.spam_score >= threshold;
        return matchesText && matchesFilter && matchesThreshold;
    });

    if (sortSelect.value === "spam") rows.sort((a, b) => b.spam_score - a.spam_score);
    else if (sortSelect.value === "ham") rows.sort((a, b) => b.ham_score - a.ham_score);
    else rows.sort((a, b) => a.row - b.row);

    return rows;
}

function renderRows() {
    if (!latestRows.length) {
        resultsBody.innerHTML = `<tr><td colspan="5" class="empty">${t("emptyResults")}</td></tr>`;
        return;
    }
    const rows = getFilteredRows();
    if (!rows.length) {
        resultsBody.innerHTML = `<tr><td colspan="5" class="empty">${t("noMatches")}</td></tr>`;
        return;
    }
    resultsBody.innerHTML = rows.map((row) => {
        const isSpam = row.result === "SPAM";
        return `
            <tr>
                <td>${row.row}</td>
                <td>${escapeHtml(row.preview)}</td>
                <td><span class="pill ${isSpam ? "spam" : "ham"}">${isSpam ? t("spam") : t("ham")}</span></td>
                <td>${formatPercent(row.spam_score)}</td>
                <td>${formatPercent(row.ham_score)}</td>
            </tr>
        `;
    }).join("");
}

function renderHistory() {
    const rows = latestRows.slice(0, 6);
    if (!rows.length) {
        historyList.innerHTML = `<div class="empty-card">${t("emptyHistory")}</div>`;
        return;
    }
    historyList.innerHTML = rows.map((row) => {
        const isSpam = row.result === "SPAM";
        return `
            <div class="history-item">
                <p>${escapeHtml(row.preview)}</p>
                <span class="pill ${isSpam ? "spam" : "ham"}">${isSpam ? t("spam") : t("ham")}</span>
                <small>${t("justNow")}</small>
            </div>
        `;
    }).join("");
}

function drawConfidence() {
    const canvas = document.querySelector("#confidenceChart");
    const ctx = canvas.getContext("2d");
    const ratio = window.devicePixelRatio || 1;
    const width = canvas.clientWidth || 180;
    const height = canvas.clientHeight || 180;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const isSpam = singleState.result === "SPAM";
    const isHam = singleState.result === "HAM";
    const confidence = isSpam ? singleState.spam_score : isHam ? singleState.ham_score : 0;
    const color = isSpam ? "#ef4444" : isHam ? "#22c55e" : "#7c3aed";
    const center = width / 2;
    const radius = Math.min(width, height) / 2 - 18;
    const start = -Math.PI / 2;

    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 16;
    ctx.strokeStyle = "#edf1f7";
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(center, center, radius, start, start + Math.PI * 2 * (confidence / 100));
    ctx.stroke();
    ctx.fillStyle = "#111827";
    ctx.textAlign = "center";
    ctx.font = "800 25px Inter, Arial";
    ctx.fillText(formatPercent(confidence), center, center + 2);
    ctx.fillStyle = "#68758a";
    ctx.font = "700 12px Inter, Arial";
    ctx.fillText("Confidence", center, center + 24);
}

function drawTrend() {
    const canvas = document.querySelector("#trendChart");
    const ctx = canvas.getContext("2d");
    const ratio = window.devicePixelRatio || 1;
    const width = canvas.clientWidth || 400;
    const height = canvas.clientHeight || 230;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const rows = latestRows.slice(0, 8).reverse();
    const spam = rows.length ? rows.map((row) => row.spam_score) : [52, 75, 68, 80, 50, 46, 30, 14];
    const ham = rows.length ? rows.map((row) => row.ham_score) : [10, 25, 15, 27, 36, 45, 66, 84];
    const pad = { top: 18, right: 18, bottom: 28, left: 34 };
    const chartW = width - pad.left - pad.right;
    const chartH = height - pad.top - pad.bottom;

    ctx.clearRect(0, 0, width, height);
    ctx.font = "12px Inter, Arial";
    [0, 25, 50, 75, 100].forEach((value) => {
        const y = pad.top + chartH - (value / 100) * chartH;
        ctx.strokeStyle = "#edf1f7";
        ctx.beginPath();
        ctx.moveTo(pad.left, y);
        ctx.lineTo(width - pad.right, y);
        ctx.stroke();
        ctx.fillStyle = "#68758a";
        ctx.fillText(value, 4, y + 4);
    });
    drawLine(ctx, spam, "#ef4444", pad, chartW, chartH);
    drawLine(ctx, ham, "#22c55e", pad, chartW, chartH);
}

function drawLine(ctx, values, color, pad, chartW, chartH) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    values.forEach((value, index) => {
        const x = pad.left + (index / Math.max(values.length - 1, 1)) * chartW;
        const y = pad.top + chartH - (value / 100) * chartH;
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
}

function downloadFile(filename, content, type = "text/csv") {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
}

function toCsv(rows) {
    const header = ["row", "result", "spam_score", "ham_score", "preview"];
    const body = rows.map((row) => [
        row.row,
        row.result,
        row.spam_score,
        row.ham_score,
        `"${String(row.preview).replaceAll('"', '""')}"`
    ].join(","));
    return [header.join(","), ...body].join("\n");
}

csvForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!csvFile.files.length) {
        csvNotice.className = "notice error";
        csvNotice.textContent = t("chooseCsv");
        return;
    }
    const formData = new FormData();
    formData.append("file", csvFile.files[0]);
    setCsvLoading(true);
    csvNotice.className = "notice";
    csvNotice.textContent = t("csvWorking");
    try {
        const response = await fetch("/predict_csv", { method: "POST", body: formData });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "CSV analysis failed.");
        latestRows = data.rows;
        updateDashboard(data);
        renderRows();
        renderHistory();
        drawTrend();
        csvNotice.className = "notice";
        csvNotice.textContent = `${t("analyzed")} ${data.total} ${t("rowsFrom")} "${data.message_column}".`;
        document.querySelector("#history-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (error) {
        csvNotice.className = "notice error";
        csvNotice.textContent = error.message;
    } finally {
        setCsvLoading(false);
    }
});

singleForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = messageInput.value.trim();
    if (!message) {
        singleResult.className = "single-result spam";
        singleResult.textContent = t("pasteFirst");
        return;
    }
    setSingleLoading(true);
    singleResult.className = "single-result muted";
    singleResult.textContent = t("detecting");
    try {
        const response = await fetch("/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Detection failed.");
        singleState = data;
        const isSpam = data.result === "SPAM";
        resultLabel.className = `result-label ${isSpam ? "spam" : "ham"}`;
        resultLabel.textContent = isSpam ? t("spam").toUpperCase() : t("ham").toUpperCase();
        resultDescription.textContent = isSpam ? t("spamDescription") : t("hamDescription");
        resultSubtitle.textContent = resultDescription.textContent;
        singleSpamScore.textContent = formatPercent(data.spam_score);
        singleHamScore.textContent = formatPercent(data.ham_score);
        singleSpamBar.style.width = `${data.spam_score}%`;
        singleHamBar.style.width = `${data.ham_score}%`;
        singleResult.className = `single-result ${isSpam ? "spam" : "ham"}`;
        singleResult.textContent = `${isSpam ? t("spam") : t("ham")} - ${t("spamScore")} ${formatPercent(data.spam_score)}, ${t("hamScore")} ${formatPercent(data.ham_score)}.`;
        latestRows.unshift({
            row: 1,
            preview: message.slice(0, 140),
            message,
            result: data.result,
            spam_score: data.spam_score,
            ham_score: data.ham_score
        });
        renderHistory();
        drawConfidence();
        drawTrend();
    } catch (error) {
        singleResult.className = "single-result spam";
        singleResult.textContent = error.message;
    } finally {
        setSingleLoading(false);
    }
});

sampleButton.addEventListener("click", () => {
    downloadFile("safemail_sample.csv", "message\nWin a free prize now\nMeeting tomorrow at 10 AM\nVerify your account password urgently\n", "text/csv");
});

exportButton.addEventListener("click", () => {
    const rows = getFilteredRows();
    if (!rows.length) {
        csvNotice.className = "notice error";
        csvNotice.textContent = t("noExport");
        return;
    }
    downloadFile("safemail_results.csv", toCsv(rows), "text/csv");
});

clearButton.addEventListener("click", () => {
    latestRows = [];
    latestSummary = null;
    singleState = { result: "READY", spam_score: 0, ham_score: 0 };
    csvFile.value = "";
    totalEmails.textContent = "0";
    spamEmails.textContent = "0";
    hamEmails.textContent = "0";
    avgConfidence.textContent = "0%";
    highRisk.textContent = "0";
    spamRate.textContent = "0%";
    hamRate.textContent = "0%";
    detectedColumn.textContent = "-";
    csvNotice.className = "notice";
    csvNotice.textContent = t("cleared");
    singleResult.className = "single-result muted";
    singleResult.textContent = t("singleWaiting");
    resultLabel.className = "result-label neutral";
    resultLabel.textContent = t("ready");
    resultDescription.textContent = t("readyDescription");
    resultSubtitle.textContent = t("singleWaiting");
    singleSpamScore.textContent = "0%";
    singleHamScore.textContent = "0%";
    singleSpamBar.style.width = "0";
    singleHamBar.style.width = "0";
    renderRows();
    renderHistory();
    drawConfidence();
    drawTrend();
});

copySummaryButton.addEventListener("click", async () => {
    if (!latestSummary) {
        csvNotice.className = "notice error";
        csvNotice.textContent = t("noExport");
        return;
    }
    const summary = `Total: ${latestSummary.total}\nSpam: ${latestSummary.spam}\nHam: ${latestSummary.ham}\nHigh risk: ${latestSummary.risky}\nAverage confidence: ${formatPercent(latestSummary.avg)}`;
    if (navigator.clipboard) await navigator.clipboard.writeText(summary);
    csvNotice.className = "notice";
    csvNotice.textContent = t("copied");
});

[resultSearch, resultFilter, sortSelect, thresholdRange].forEach((control) => {
    control.addEventListener("input", () => {
        thresholdValue.textContent = thresholdRange.value + "%";
        renderRows();
    });
    control.addEventListener("change", () => {
        thresholdValue.textContent = thresholdRange.value + "%";
        renderRows();
    });
});

languageSelect.addEventListener("change", () => applyLanguage(languageSelect.value));
window.addEventListener("resize", () => {
    drawConfidence();
    drawTrend();
    syncActiveSectionFromScroll();
});

initNavigation();
applyLanguage(currentLanguage);
renderHistory();
drawConfidence();
drawTrend();
