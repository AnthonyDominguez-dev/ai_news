// Application Data - Using the provided JSON data
const appData = {
  articles: [
    {
      id: 1,
      title: "GPT-5 dévoilé par OpenAI : révolution de l'IA conversationnelle",
      summary: "OpenAI lance GPT-5 avec des capacités de raisonnement avancées, une personnalisation inédite et une fiabilité accrue. Le modèle devient le nouveau standard de ChatGPT.",
      content: "Ce jeudi 7 août 2025, OpenAI a présenté son tout dernier modèle d'intelligence artificielle, GPT-5. Il remplace progressivement GPT-4o dans ChatGPT avec des réponses plus intelligentes et fiables, une IA plus personnalisée avec choix du ton, et une interface plus intuitive.",
      source: "OpenAI",
      date: "2025-08-07",
      category: "Nouveaux Modèles",
      tags: ["GPT-5", "OpenAI", "IA conversationnelle"],
      status: "published"
    },
    {
      id: 2,
      title: "Google lance Gemini 2.5 Deep Think : l'IA qui pense en parallèle",
      summary: "Google DeepMind déploie son modèle le plus avancé, capable de raisonnement parallèle et ayant remporté une médaille d'or en mathématiques.",
      content: "Gemini 2.5 Deep Think utilise des techniques de raisonnement parallèle inédites, permettant à l'IA d'explorer simultanément plusieurs pistes de réflexion avant de fournir la meilleure réponse possible.",
      source: "Google DeepMind",
      date: "2025-08-01",
      category: "Nouveaux Modèles", 
      tags: ["Gemini", "Google", "Deep Think"],
      status: "published"
    },
    {
      id: 3,
      title: "DeepSeek bouleverse le marché avec une IA chinoise économique",
      summary: "La startup chinoise DeepSeek prouve qu'on peut créer une IA performante pour 5% du coût de GPT-4, remettant en question les modèles économiques actuels.",
      content: "DeepSeek R1 atteint les performances de GPT-4 avec seulement 5,6 millions de dollars de coût de développement, contre 100 millions à 1 milliard pour ses concurrents américains.",
      source: "DeepSeek",
      date: "2025-01-20",
      category: "Startups & Entreprises",
      tags: ["DeepSeek", "Chine", "IA frugale"],
      status: "published"
    },
    {
      id: 4,
      title: "L'AI Act européen entre en application : nouvelles obligations",
      summary: "Depuis février 2025, les premières règles du règlement européen sur l'IA s'appliquent, avec des obligations renforcées pour les entreprises.",
      content: "L'AI Act impose une classification des systèmes d'IA en quatre niveaux de risque, avec des interdictions pour les pratiques à risque inacceptable et des exigences strictes pour les systèmes à haut risque.",
      source: "Commission Européenne",
      date: "2025-02-02",
      category: "Réglementation",
      tags: ["AI Act", "Réglementation", "Europe"],
      status: "published"
    },
    {
      id: 5,
      title: "Les agents IA autonomes : la tendance 2025 qui transforme les entreprises",
      summary: "L'IA agentique permet aux systèmes d'agir de manière autonome pour atteindre des objectifs, révolutionnant l'automatisation des processus métier.",
      content: "25% des entreprises utilisant l'IA générative lanceront des projets pilotes d'IA agentique en 2025, selon Deloitte. Ces agents peuvent planifier, exécuter et atteindre des objectifs de façon autonome.",
      source: "Deloitte",
      date: "2025-02-11",
      category: "Tendances 2025",
      tags: ["Agents IA", "Automatisation", "Entreprises"],
      status: "published"
    },
    {
      id: 6,
      title: "Mistral AI : la pépite française valorisée 6 milliards d'euros",
      summary: "La startup parisienne spécialisée dans l'IA générative confirme son statut de leader européen avec trois levées de fonds successives.",
      content: "Fondée en 2023, Mistral AI développe des modèles de langage open source performants. Avec plus de 1 milliard d'euros levés, elle s'impose comme le champion français de l'IA générative.",
      source: "Mistral AI",
      date: "2025-06-15",
      category: "Startups & Entreprises",
      tags: ["Mistral AI", "France", "IA générative"],
      status: "published"
    },
    {
      id: 7,
      title: "L'IA multimodale : vers la fusion texte, image, son et vidéo",
      summary: "2025 marque l'avènement de l'IA multimodale totale avec des modèles comme Sora et Veo 3 capables de créer des contenus sophistiqués.",
      content: "Les nouveaux modèles d'IA peuvent désormais traiter et générer simultanément du texte, des images, du son et de la vidéo, ouvrant la voie à des applications révolutionnaires.",
      source: "Analyse Secteur",
      date: "2025-03-15",
      category: "Tendances 2025",
      tags: ["Multimodalité", "Sora", "Créativité"],
      status: "published"
    },
    {
      id: 8,
      title: "PhotoRoom : l'IA française qui révolutionne la retouche photo",
      summary: "Avec 150 millions de téléchargements, cette startup parisienne démocratise la retouche photo professionnelle grâce à l'IA générative.",
      content: "PhotoRoom permet aux professionnels de créer des visuels de qualité en quelques clics. Valorisée 500 millions de dollars, elle illustre la réussite française dans l'IA appliquée.",
      source: "PhotoRoom",
      date: "2025-05-20",
      category: "Startups & Entreprises",
      tags: ["PhotoRoom", "Retouche photo", "B2B"],
      status: "published"
    }
  ],
  sources: [
    {
      id: 1,
      name: "OpenAI",
      url: "openai.com",
      status: "active",
      articles_count: 15
    },
    {
      id: 2,
      name: "Google DeepMind", 
      url: "deepmind.google",
      status: "active",
      articles_count: 12
    },
    {
      id: 3,
      name: "France Digitale",
      url: "francedigitale.org",
      status: "active", 
      articles_count: 8
    },
    {
      id: 4,
      name: "Commission Européenne",
      url: "ec.europa.eu",
      status: "active",
      articles_count: 6
    }
  ],
  categories: [
    "Nouveaux Modèles",
    "Startups & Entreprises", 
    "Réglementation",
    "Tendances 2025",
    "Recherche & Innovation"
  ],
  stats: {
    total_articles: 78,
    active_sources: 25,
    monthly_growth: "+23%",
    last_update: "2025-08-11T15:30:00Z"
  }
};

// Application State
let filteredArticles = [...appData.articles];
let isAdminMode = false;
let currentEditingArticle = null;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
});

function initializeApp() {
    console.log('Initializing app...');
    
    // Hide loading state initially
    const loadingState = document.getElementById('loadingState');
    if (loadingState) {
        loadingState.classList.add('hidden');
    }
    
    renderArticles();
    updateStats();
    setupEventListeners();
    simulateLiveUpdates();
    
    console.log('App initialized successfully');
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Get DOM elements
    const adminBtn = document.getElementById('adminBtn');
    const adminModal = document.getElementById('adminModal');
    const modalClose = document.getElementById('modalClose');
    const loginBtn = document.getElementById('loginBtn');
    const adminPassword = document.getElementById('adminPassword');
    const adminDashboard = document.getElementById('adminDashboard');
    const exitAdminBtn = document.getElementById('exitAdminBtn');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sourceFilter = document.getElementById('sourceFilter');
    const dateFilter = document.getElementById('dateFilter');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('nav');

    // Admin modal
    if (adminBtn) {
        adminBtn.addEventListener('click', showAdminModal);
        console.log('Admin button event listener added');
    }
    if (modalClose) modalClose.addEventListener('click', hideAdminModal);
    if (loginBtn) loginBtn.addEventListener('click', handleAdminLogin);
    if (exitAdminBtn) exitAdminBtn.addEventListener('click', exitAdminMode);

    // Search and filters
    if (searchInput) searchInput.addEventListener('input', handleSearch);
    if (categoryFilter) categoryFilter.addEventListener('change', handleFiltering);
    if (sourceFilter) sourceFilter.addEventListener('change', handleFiltering);
    if (dateFilter) dateFilter.addEventListener('change', handleFiltering);

    // Mobile menu
    if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    // Admin tabs
    const adminTabs = document.querySelectorAll('.admin-tab');
    adminTabs.forEach(tab => {
        tab.addEventListener('click', () => switchAdminTab(tab.dataset.tab));
    });

    // Article management
    const addArticleBtn = document.getElementById('addArticleBtn');
    const articleModal = document.getElementById('articleModal');
    const articleModalClose = document.getElementById('articleModalClose');
    const cancelArticleBtn = document.getElementById('cancelArticleBtn');
    const articleForm = document.getElementById('articleForm');

    if (addArticleBtn) addArticleBtn.addEventListener('click', showAddArticleModal);
    if (articleModalClose) articleModalClose.addEventListener('click', hideArticleModal);
    if (cancelArticleBtn) cancelArticleBtn.addEventListener('click', hideArticleModal);
    if (articleForm) articleForm.addEventListener('submit', handleArticleSubmit);

    // Refresh button
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) refreshBtn.addEventListener('click', handleRefresh);

    // Modal backdrop clicks
    if (adminModal) {
        adminModal.addEventListener('click', (e) => {
            if (e.target === adminModal) hideAdminModal();
        });
    }

    if (articleModal) {
        articleModal.addEventListener('click', (e) => {
            if (e.target === articleModal) hideArticleModal();
        });
    }

    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideAdminModal();
            hideArticleModal();
        }
    });

    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active state
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Apply category-based filtering for navigation
            const href = link.getAttribute('href');
            if (href === '#actualites') {
                if (categoryFilter) categoryFilter.value = '';
                applyFilters();
            } else if (href === '#tendances') {
                if (categoryFilter) categoryFilter.value = 'Tendances 2025';
                applyFilters();
            } else {
                if (categoryFilter) categoryFilter.value = '';
                applyFilters();
            }
            
            // Scroll to articles section
            if (href !== '#accueil') {
                const articlesSection = document.querySelector('.articles-section');
                if (articlesSection) {
                    articlesSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    console.log('Event listeners setup complete');
}

function renderArticles() {
    console.log('Rendering articles...', filteredArticles.length);
    
    const articlesGrid = document.getElementById('articlesGrid');
    if (!articlesGrid) {
        console.error('Articles grid element not found');
        return;
    }
    
    articlesGrid.innerHTML = '';
    
    if (filteredArticles.length === 0) {
        articlesGrid.innerHTML = '<p class="no-articles">Aucun article trouvé.</p>';
        return;
    }
    
    filteredArticles.forEach(article => {
        const articleCard = createArticleCard(article);
        articlesGrid.appendChild(articleCard);
    });
    
    console.log(`Rendered ${filteredArticles.length} articles`);
}

function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card';
    
    const formattedDate = formatDate(article.date);
    
    card.innerHTML = `
        <div class="article-header">
            <div class="category-badge">${article.category}</div>
        </div>
        <h3 class="article-title">${article.title}</h3>
        <div class="article-meta">${article.source} • ${formattedDate}</div>
        <p class="article-summary">${article.summary}</p>
        <div class="article-footer">
            <div class="article-tags">
                ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    // Add click handlers for tags
    const tags = card.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.stopPropagation();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = tag.textContent;
                handleSearch();
            }
        });
    });

    return card;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('fr-FR', options);
}

function updateStats() {
    const totalArticlesEl = document.getElementById('totalArticles');
    const lastUpdateEl = document.getElementById('lastUpdate');
    
    if (totalArticlesEl) totalArticlesEl.textContent = appData.stats.total_articles;
    if (lastUpdateEl) {
        const lastUpdate = new Date(appData.stats.last_update);
        lastUpdateEl.textContent = lastUpdate.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

function handleSearch() {
    console.log('Handling search...');
    applyFilters();
}

function handleFiltering() {
    console.log('Handling filtering...');
    applyFilters();
}

function applyFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilterEl = document.getElementById('categoryFilter');
    const sourceFilterEl = document.getElementById('sourceFilter');
    const dateFilterEl = document.getElementById('dateFilter');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const categoryFilter = categoryFilterEl ? categoryFilterEl.value : '';
    const sourceFilter = sourceFilterEl ? sourceFilterEl.value : '';
    const dateFilter = dateFilterEl ? dateFilterEl.value : '';

    filteredArticles = appData.articles.filter(article => {
        // Search filter
        const matchesSearch = !searchTerm || 
            article.title.toLowerCase().includes(searchTerm) ||
            article.summary.toLowerCase().includes(searchTerm) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm));

        // Category filter
        const matchesCategory = !categoryFilter || article.category === categoryFilter;

        // Source filter
        const matchesSource = !sourceFilter || article.source === sourceFilter;

        // Date filter
        const matchesDate = !dateFilter || filterByDate(article.date, dateFilter);

        return matchesSearch && matchesCategory && matchesSource && matchesDate;
    });

    console.log(`Filtered articles: ${filteredArticles.length}`);
    renderArticles();
}

function filterByDate(articleDate, filter) {
    const today = new Date();
    const articleDateObj = new Date(articleDate);
    const diffTime = today - articleDateObj;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    switch (filter) {
        case 'today':
            return diffDays <= 1;
        case 'week':
            return diffDays <= 7;
        case 'month':
            return diffDays <= 30;
        default:
            return true;
    }
}

function toggleMobileMenu() {
    const nav = document.getElementById('nav');
    if (nav) {
        nav.classList.toggle('mobile-open');
    }
}

// Admin functionality
function showAdminModal() {
    console.log('Showing admin modal...');
    const adminModal = document.getElementById('adminModal');
    const adminPassword = document.getElementById('adminPassword');
    
    if (adminModal) {
        adminModal.classList.remove('hidden');
        console.log('Admin modal shown');
    } else {
        console.error('Admin modal element not found');
    }
    
    if (adminPassword) {
        adminPassword.focus();
    }
}

function hideAdminModal() {
    const adminModal = document.getElementById('adminModal');
    const adminPassword = document.getElementById('adminPassword');
    
    if (adminModal) {
        adminModal.classList.add('hidden');
    }
    if (adminPassword) {
        adminPassword.value = '';
    }
}

function handleAdminLogin() {
    const adminPassword = document.getElementById('adminPassword');
    const password = adminPassword ? adminPassword.value : '';
    
    console.log('Attempting admin login...');
    
    // Simple password check (in real app, this would be secure)
    if (password === 'admin123' || password === 'admin') {
        console.log('Login successful');
        hideAdminModal();
        enterAdminMode();
    } else {
        alert('Mot de passe incorrect. Essayez "admin" ou "admin123".');
    }
}

function enterAdminMode() {
    console.log('Entering admin mode...');
    
    isAdminMode = true;
    
    const main = document.querySelector('.main');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const adminDashboard = document.getElementById('adminDashboard');
    
    if (main) main.style.display = 'none';
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (adminDashboard) adminDashboard.classList.remove('hidden');
    
    renderAdminDashboard();
    console.log('Admin mode entered');
}

function exitAdminMode() {
    console.log('Exiting admin mode...');
    
    isAdminMode = false;
    
    const main = document.querySelector('.main');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const adminDashboard = document.getElementById('adminDashboard');
    
    if (main) main.style.display = 'block';
    if (header) header.style.display = 'block';
    if (footer) footer.style.display = 'block';
    if (adminDashboard) adminDashboard.classList.add('hidden');
}

function switchAdminTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });

    // Update tab content
    document.querySelectorAll('.admin-tab-content').forEach(content => {
        content.classList.toggle('active', content.id === tabName);
    });

    // Render specific content
    if (tabName === 'articles') {
        renderAdminArticles();
    } else if (tabName === 'sources') {
        renderAdminSources();
    }
}

function renderAdminDashboard() {
    renderAdminArticles();
    renderAdminSources();
}

function renderAdminArticles() {
    const articlesTable = document.getElementById('articlesTable');
    if (!articlesTable) return;

    articlesTable.innerHTML = '';
    
    appData.articles.forEach(article => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="article-title-cell">
                    <strong>${article.title}</strong>
                </div>
            </td>
            <td>${article.source}</td>
            <td>${formatDate(article.date)}</td>
            <td>${article.category}</td>
            <td>
                <span class="status status--success">${article.status}</span>
            </td>
            <td>
                <button class="action-btn action-btn--edit" onclick="editArticle(${article.id})">Modifier</button>
                <button class="action-btn action-btn--delete" onclick="deleteArticle(${article.id})">Supprimer</button>
            </td>
        `;
        articlesTable.appendChild(row);
    });
}

function renderAdminSources() {
    const sourcesGrid = document.getElementById('sourcesGrid');
    if (!sourcesGrid) return;

    sourcesGrid.innerHTML = '';
    
    appData.sources.forEach(source => {
        const sourceCard = document.createElement('div');
        sourceCard.className = 'source-card';
        sourceCard.innerHTML = `
            <h4>${source.name}</h4>
            <p>${source.url}</p>
            <p>${source.articles_count} articles</p>
            <span class="source-status source-status--active">${source.status}</span>
        `;
        sourcesGrid.appendChild(sourceCard);
    });
}

// Article management
function showAddArticleModal() {
    currentEditingArticle = null;
    const articleModalTitle = document.getElementById('articleModalTitle');
    const articleModal = document.getElementById('articleModal');
    
    if (articleModalTitle) articleModalTitle.textContent = 'Ajouter un article';
    clearArticleForm();
    if (articleModal) articleModal.classList.remove('hidden');
}

function editArticle(articleId) {
    currentEditingArticle = appData.articles.find(a => a.id === articleId);
    if (!currentEditingArticle) return;

    const articleModalTitle = document.getElementById('articleModalTitle');
    const articleModal = document.getElementById('articleModal');
    
    if (articleModalTitle) articleModalTitle.textContent = 'Modifier l\'article';
    fillArticleForm(currentEditingArticle);
    if (articleModal) articleModal.classList.remove('hidden');
}

function deleteArticle(articleId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
        appData.articles = appData.articles.filter(a => a.id !== articleId);
        renderAdminArticles();
        applyFilters();
        appData.stats.total_articles = appData.articles.length;
        updateStats();
    }
}

function hideArticleModal() {
    const articleModal = document.getElementById('articleModal');
    if (articleModal) articleModal.classList.add('hidden');
    currentEditingArticle = null;
    clearArticleForm();
}

function clearArticleForm() {
    const fields = ['articleTitle', 'articleSummary', 'articleContent', 'articleSource', 'articleCategory', 'articleTags'];
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) field.value = '';
    });
}

function fillArticleForm(article) {
    const articleTitle = document.getElementById('articleTitle');
    const articleSummary = document.getElementById('articleSummary');
    const articleContent = document.getElementById('articleContent');
    const articleSource = document.getElementById('articleSource');
    const articleCategory = document.getElementById('articleCategory');
    const articleTags = document.getElementById('articleTags');
    
    if (articleTitle) articleTitle.value = article.title;
    if (articleSummary) articleSummary.value = article.summary;
    if (articleContent) articleContent.value = article.content;
    if (articleSource) articleSource.value = article.source;
    if (articleCategory) articleCategory.value = article.category;
    if (articleTags) articleTags.value = article.tags.join(', ');
}

function handleArticleSubmit(e) {
    e.preventDefault();
    
    const articleTitle = document.getElementById('articleTitle');
    const articleSummary = document.getElementById('articleSummary');
    const articleContent = document.getElementById('articleContent');
    const articleSource = document.getElementById('articleSource');
    const articleCategory = document.getElementById('articleCategory');
    const articleTags = document.getElementById('articleTags');
    
    const formData = {
        title: articleTitle ? articleTitle.value : '',
        summary: articleSummary ? articleSummary.value : '',
        content: articleContent ? articleContent.value : '',
        source: articleSource ? articleSource.value : '',
        category: articleCategory ? articleCategory.value : '',
        tags: articleTags ? articleTags.value.split(',').map(tag => tag.trim()) : [],
        date: new Date().toISOString().split('T')[0],
        status: 'published'
    };

    if (currentEditingArticle) {
        // Update existing article
        Object.assign(currentEditingArticle, formData);
    } else {
        // Add new article
        const newId = Math.max(...appData.articles.map(a => a.id)) + 1;
        formData.id = newId;
        appData.articles.unshift(formData);
        appData.stats.total_articles = appData.articles.length;
    }

    hideArticleModal();
    renderAdminArticles();
    applyFilters();
    updateStats();
}

function handleRefresh() {
    // Simulate data refresh
    const refreshBtn = document.getElementById('refreshBtn');
    if (!refreshBtn) return;
    
    refreshBtn.textContent = 'Actualisation...';
    refreshBtn.disabled = true;

    setTimeout(() => {
        renderAdminArticles();
        refreshBtn.textContent = 'Actualiser';
        refreshBtn.disabled = false;
        
        // Simulate new article
        if (Math.random() > 0.7) {
            simulateNewArticle();
        }
    }, 1500);
}

function simulateNewArticle() {
    const newArticles = [
        {
            title: "Meta dévoile LLaMA 3.5 : concurrence directe avec GPT-5",
            summary: "Meta présente son nouveau modèle de langage LLaMA 3.5, optimisé pour la performance et l'efficacité énergétique.",
            source: "Meta AI",
            category: "Nouveaux Modèles",
            tags: ["LLaMA", "Meta", "Concurrence"]
        },
        {
            title: "L'IA générative transforme l'industrie du design graphique",
            summary: "Une étude révèle que 60% des designers utilisent désormais l'IA générative dans leur processus créatif quotidien.",
            source: "Design Council",
            category: "Tendances 2025",
            tags: ["Design", "Créativité", "Transformation"]
        }
    ];

    const randomArticle = newArticles[Math.floor(Math.random() * newArticles.length)];
    const newId = Math.max(...appData.articles.map(a => a.id)) + 1;
    
    const article = {
        ...randomArticle,
        id: newId,
        content: randomArticle.summary + " Cette nouvelle actualité témoigne de l'évolution rapide du secteur de l'intelligence artificielle en 2025.",
        date: new Date().toISOString().split('T')[0],
        status: 'published'
    };

    appData.articles.unshift(article);
    appData.stats.total_articles = appData.articles.length;
    
    if (isAdminMode) {
        renderAdminArticles();
    } else {
        applyFilters();
    }
    updateStats();

    // Show notification
    showNotification('Nouvel article ajouté automatiquement !');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-gray-dark);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        z-index: 1001;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function simulateLiveUpdates() {
    // Update last update time every 30 seconds
    setInterval(() => {
        appData.stats.last_update = new Date().toISOString();
        updateStats();
    }, 30000);

    // Occasionally simulate new articles (every 2-5 minutes)
    setInterval(() => {
        if (Math.random() > 0.8) {
            simulateNewArticle();
        }
    }, 120000);
}

// Make functions available globally for onclick handlers
window.editArticle = editArticle;
window.deleteArticle = deleteArticle;

// Add some CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .mobile-open {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--color-white-pure);
        flex-direction: column;
        padding: var(--space-16);
        box-shadow: var(--shadow-lg);
        border-top: 1px solid var(--color-border);
    }
    
    .no-articles {
        grid-column: 1 / -1;
        text-align: center;
        padding: var(--space-32);
        color: var(--color-text-secondary);
        font-style: italic;
    }
    
    @media (min-width: 769px) {
        .mobile-open {
            display: flex !important;
            position: static;
            flex-direction: row;
            background: none;
            padding: 0;
            box-shadow: none;
            border: none;
        }
    }
`;

document.head.appendChild(style);