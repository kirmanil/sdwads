// Данные продуктов
const products = {
    new: [
        {
            id: 1,
            name: "Суши бургер",
            description: "Креветка, оругец, икра тобико, кунжут, соус терияки",
            price: 420,
            rating: 4.9,
            image: "images/products/burger.png",
            category: "rolls",
            isNew: true
        },
        {
            id: 2,
            name: "Красный Дракон",
            description: "Угорь, креветка, соус унаги, красная икра",
            price: 380,
            rating: 4.8,
            image: "images/products/red-dragon.png",
            category: "rolls",
            isNew: true
        },
        {
            id: 3,
            name: "Черный Самурай",
            description: "Тунец, авокадо, черный кунжут, острый соус",
            price: 560,
            rating: 4.7,
            image: "images/products/black-samurai.png",
            category: "sets",
            isNew: true
        }
    ],
    
    rolls: [
        { id: 4, name: "Филадельфия", description: "Сливочный сыр, огурец, лосось", price: 440, rating: 4.9, image: "images/products/filadelfia.png", category: "rolls" },
        { id: 5, name: "Калифорния", description: "Им. снежного краба, авокадо, сливочный сыр, икра тобико", price: 380, rating: 4.8, image: "images/products/california.png", category: "rolls" },
        { id: 6, name: "Лава Эби", description: "Креветка, соус лава, сливочный сыр", price: 420, rating: 4.9, image: "images/products/lava.png", category: "rolls" },
        { id: 7, name: "Маки", description: "Лосось, Огурец,", price: 320, rating: 4.7, image: "images/products/maki.png", category: "rolls" },
        { id: 22, name: "Эби темпура", description: "Огурец,сливочный сыр,креветка,спайси соус", price: 340, rating: 4.9, image: "images/products/ebitem.png", category: "rolls" },
        { id: 23, name: "Унаги темпура", description: "сыр креметте, угорь, огурец, соус унаги, кунжут.", price: 410, rating: 4.9, image: "images/products/ytem.png", category: "rolls" }
    ],
    
    sushi: [
        { id: 8, name: "сяке", description: "Лосось", price: 80, rating: 4.7, image: "images/products/ci.png", category: "sushi" },
        { id: 9, name: "Унаги", description: "Угорь", price: 90, rating: 4.8, image: "images/products/yn.png", category: "sushi" },
        { id: 10, name: "Эби", description: "Креветка", price: 100, rating: 4.9, image: "images/products/eb.png", category: "sushi" }
    ],
    
    onigiri: [
        { id: 11, name: "Онигири Лосось", description: "лосось", price: 150, rating: 4.5, image: "images/products/on.png", category: "onigiri" },
        { id: 12, name: "Онигири Креветка", description: "креветка", price: 180, rating: 4.6, image: "images/products/on.png", category: "onigiri" }
    ],
    
    sets: [
        { id: 13, name: "Набор печь", description: "40 шт: запеченные роллы", price: 2200, rating: 4.8, image: "images/products/temp.png", category: "sets" },
        { id: 14, name: "Набор темпура", description: "24 шт: темпура роллы", price: 1499, rating: 4.9, image: "images/products/temp1.png", category: "sets" },
        { id: 15, name: "Набор Классика", description: "32 шт: классические роллы", price: 1000, rating: 4.6, image: "images/products/class.png", category: "sets" }
    ],
    
    drinks: [
        { 
            id: 16, 
            name: "Coca-Cola Black", 
            description: "Газированный напиток", 
            basePrice: 120, 
            price: 120,
            rating: 4.8, 
            image: "images/products/coca.png", 
            category: "drinks",
            variants: [
                { volume: "0.5 л", price: 120 },
                { volume: "1 л", price: 200 },
                { volume: "1.5 л", price: 250 }
            ],
            currentVariant: 0
        },
        { 
            id: 17, 
            name: "Sprite", 
            description: "Газированный напиток", 
            basePrice: 120, 
            price: 120,
            rating: 4.5, 
            image: "images/products/sprite.png", 
            category: "drinks",
            variants: [
                { volume: "0.5 л", price: 120 },
                { volume: "1 л", price: 200 },
                { volume: "1.5 л", price: 250 }
            ],
            currentVariant: 0
        },
        { 
            id: 18, 
            name: "Милк-шейк", 
            description: "Молочный коктель со вкусом карамели", 
            basePrice: 250, 
            price: 250,
            rating: 4.9, 
            image: "images/products/mikls.png", 
            category: "drinks",
            variants: [
                { volume: "300 мл", price: 250 },
                { volume: "500 мл", price: 350 },
                { volume: "750 мл", price: 450 }
            ],
            currentVariant: 0
        }
    ],
    
    fastfood: [
        { 
            id: 19, 
            name: "Картофель Фри", 
            description: "Хрустящий картофель фри", 
            basePrice: 150, 
            price: 150,
            rating: 4.7, 
            image: "images/products/free.png", 
            category: "fastfood",
            variants: [
                { weight: "150 г", price: 150 },
                { weight: "250 г", price: 200 },
                { weight: "350 г", price: 250 }
            ],
            currentVariant: 0
        },
        { 
            id: 20, 
            name: "Наггетсы Куриные", 
            description: "Куриные наггетсы", 
            basePrice: 180, 
            price: 180,
            rating: 4.7, 
            image: "images/products/nagg.png", 
            category: "fastfood",
            variants: [
                { weight: "150 г", price: 180 },
                { weight: "250 г", price: 250 },
                { weight: "350 г", price: 300 }
            ],
            currentVariant: 0
        },
        { 
            id: 21, 
            name: "Луковые кольца", 
            description: "Хрустящие луковые кольца", 
            basePrice: 120, 
            price: 120,
            rating: 4.5, 
            image: "images/products/luk.png", 
            category: "fastfood",
            variants: [
                { weight: "150 г", price: 120 },
                { weight: "250 г", price: 180 },
                { weight: "350 г", price: 230 }
            ],
            currentVariant: 0
        }
    ]
};

let products = {};
let promoCodes = {};
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let activePromo = localStorage.getItem('activePromo') || null;
let usedBonuses = parseInt(localStorage.getItem('usedBonuses')) || 0;
let deliveryPrice = 0;

// Функция для открытия авторизации
function openAuthModal() {
    if (window.openAuthModal) {
        // Используем функцию из main.js
        window.openAuthModal();
    } else if (window.smsAuth && window.smsAuth.openAuthModal) {
        window.smsAuth.openAuthModal();
    } else {
        // Fallback
        showNotification('Авторизация временно недоступна', 'error');
    }
}

// Корзина
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Инициализация
document.addEventListener('DOMContentLoaded', async function() {
    // Загружаем данные из базы
    await loadDataFromDatabase();
    
    initBannerSlider();
    loadProducts();
    updateCartCount();
    setupCart();
    setupOrderButtons();
    
    // Загрузка сохраненного адреса
    loadSavedAddress();
    
    // Обновляем кнопку входа/профиля
    updateAuthButton();
    
    // Обновляем адрес в корзине из профиля
    updateCartAddressFromProfile();
    
    // Инициализация промокодов и бонусов
    updateAvailableBonuses();
    updateActivePromoDisplay();
    updatePricing();
    
    // Загрузка сохраненных промокодов и бонусов
    loadSavedPromoAndBonuses();
    
    // Установка обработчиков событий
    setupPromoHandlers();
    setupBonusesHandlers();
    
    // Настраиваем обработчики для кнопок входа
    setupAuthButtons();
    
    // Показываем подсказку о промокоде
    setTimeout(showPromoHint, 1000);
});
// Настройка кнопок авторизации
function setupAuthButtons() {
    // Кнопка входа в шапке
    const authBtn = document.getElementById('open-auth');
    if (authBtn) {
        authBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openAuthModal();
        });
    }
    
    // Кнопка входа из корзины (если пользователь не авторизован)
    const openAuthFromCart = document.getElementById('open-auth-from-cart');
    if (openAuthFromCart) {
        openAuthFromCart.addEventListener('click', function(e) {
            e.preventDefault();
            openAuthModal();
        });
    }
    
    // Кнопки входа на других страницах
    document.querySelectorAll('.auth-btn, .login-btn, [data-action="login"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openAuthModal();
        });
    });
}
function initCheckoutButton() {
    const orderBtn = document.querySelector('.btn-order');
    if (orderBtn) {
        orderBtn.addEventListener('click', function() {
            processCheckout();
        });
    }
}

// Баннер слайдер
function initBannerSlider() {
    const banners = document.querySelectorAll('.banner');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    if (!banners.length || !dots.length) return;
    
    let currentSlide = 0;
    
    function showSlide(index) {
        banners.forEach(banner => banner.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        banners[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        let nextIndex = (currentSlide + 1) % banners.length;
        showSlide(nextIndex);
    }
    
    // Автопрокрутка
    let slideInterval = setInterval(nextSlide, 15000);
    
    // Ручное управление
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            let prevIndex = (currentSlide - 1 + banners.length) % banners.length;
            showSlide(prevIndex);
            slideInterval = setInterval(nextSlide, 15000);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            nextSlide();
            slideInterval = setInterval(nextSlide, 15000);
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            slideInterval = setInterval(nextSlide, 15000);
        });
    });
}

// Загрузка продуктов
function loadProducts() {
    // Новинки
    const newProductsGrid = document.getElementById('new-products');
    if (newProductsGrid) {
        products.new.forEach(product => {
            newProductsGrid.appendChild(createProductCard(product));
        });
    }
    
    // Загрузка по категориям
    ['rolls', 'sushi', 'onigiri', 'sets', 'drinks', 'fastfood'].forEach(category => {
        const grid = document.getElementById(category);
        if (grid) {
            products[category].forEach(product => {
                grid.appendChild(createProductCard(product));
            });
        }
    });
}

// Создание карточки продукта
// Создание карточки продукта (обновленная версия)
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    if (product.isNew) card.classList.add('new');
    
    // Проверяем, есть ли варианты у продукта
    const hasVariants = (product.variants && product.variants.length > 0);
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-desc">${product.description}</p>
            
            ${hasVariants ? `
                <div class="product-variants" data-id="${product.id}">
                    <select class="variant-select">
                        ${product.variants.map((variant, index) => `
                            <option value="${index}" ${index === product.currentVariant ? 'selected' : ''}>
                                ${variant.volume ? variant.volume : variant.weight} - ${variant.price}₽
                            </option>
                        `).join('')}
                    </select>
                </div>
            ` : ''}
            
            <div class="product-rating">
                ${getRatingStars(product.rating)}
                <span>${product.rating}</span>
            </div>
            <div class="product-bottom">
                <div class="product-price">${product.price}₽</div>
                <button class="add-to-cart" data-id="${product.id}">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `;
    
    // Добавляем обработчик изменения варианта
    if (hasVariants) {
        const variantSelect = card.querySelector('.variant-select');
        variantSelect.addEventListener('change', function() {
            const selectedIndex = parseInt(this.value);
            const productId = parseInt(this.closest('.product-variants').dataset.id);
            const productData = findProductById(productId);
            
            if (productData) {
                productData.currentVariant = selectedIndex;
                productData.price = productData.variants[selectedIndex].price;
                
                // Обновляем цену в карточке
                card.querySelector('.product-price').textContent = productData.price + '₽';
            }
        });
    }
    
    // Добавление в корзину
    card.querySelector('.add-to-cart').addEventListener('click', () => {
        addToCart(product);
        showAddToCartAnimation(card);
    });
    
    return card;
}

// Вспомогательная функция для поиска продукта по ID
function findProductById(id) {
    for (const category in products) {
        if (Array.isArray(products[category])) {
            const product = products[category].find(p => p.id === id);
            if (product) return product;
        }
    }
    return null;
}

// Анимация добавления в корзину
function showAddToCartAnimation(card) {
    const cartIcon = document.querySelector('.cart');
    if (!cartIcon) return;
    
    const rect = card.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();
    
    // Создаем летающий элемент
    const flyingItem = document.createElement('div');
    flyingItem.innerHTML = '<i class="fas fa-shopping-cart"></i>';
    flyingItem.style.cssText = `
        position: fixed;
        left: ${rect.left + rect.width / 2}px;
        top: ${rect.top + rect.height / 2}px;
        color: #ff0000;
        font-size: 24px;
        z-index: 10000;
        transition: all 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        pointer-events: none;
    `;
    
    document.body.appendChild(flyingItem);
    
    // Анимация полета к корзине
    setTimeout(() => {
        flyingItem.style.left = `${cartRect.left + cartRect.width / 2}px`;
        flyingItem.style.top = `${cartRect.top + cartRect.height / 2}px`;
        flyingItem.style.transform = 'scale(0.5)';
        flyingItem.style.opacity = '0.5';
    }, 10);
    
    // Удаление после анимации
    setTimeout(() => {
        flyingItem.remove();
    }, 800);
    
    // Анимация корзины
    cartIcon.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 300);
}

// Звезды рейтинга
function getRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Корзина
function setupCart() {
    const cartIcon = document.querySelector('.cart');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');
    
    if (!cartIcon || !cartSidebar || !cartOverlay || !closeCart) return;
    
    cartIcon.addEventListener('click', openCart);
    cartOverlay.addEventListener('click', closeCartFunc);
    closeCart.addEventListener('click', closeCartFunc);
    
    function openCart() {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        updateCartDisplay();
    }
    
    function closeCartFunc() {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    }
}

function addToCart(product) {
    // Клонируем продукт, чтобы не изменять исходный объект
    const productToAdd = { ...product };
    
    // Если у продукта есть варианты, сохраняем выбранный вариант
    if (productToAdd.variants && productToAdd.variants.length > 0) {
        const selectedVariant = productToAdd.variants[productToAdd.currentVariant];
        productToAdd.selectedVariant = {
            ...selectedVariant,
            index: productToAdd.currentVariant
        };
        productToAdd.price = selectedVariant.price;
    }
    
    // Удаляем лишние свойства для корзины
    delete productToAdd.variants;
    delete productToAdd.currentVariant;
    
    const existingItem = cart.find(item => {
        // Сравниваем не только по ID, но и по выбранному варианту
        if (item.id !== productToAdd.id) return false;
        
        // Если оба продукта имеют варианты, сравниваем их
        if (item.selectedVariant && productToAdd.selectedVariant) {
            return item.selectedVariant.index === productToAdd.selectedVariant.index;
        }
        
        // Если вариантов нет у одного из продуктов
        return !item.selectedVariant && !productToAdd.selectedVariant;
    });
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...productToAdd,
            quantity: 1
        });
    }
    
    updateCartCount();
    updateLocalStorage();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = count;
    }
}
const order = {
    id: 'ORD' + Date.now(),
    date: new Date().toISOString(),
    items: [...cart],
    total: total,
    address: defaultAddress,
    status: 'new', // Изменено с 'processing' на 'new'
    paymentMethod: 'cash', // Способ оплаты
    userName: user.name,
    userPhone: user.phone
};

function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    const totalPrice = document.querySelector('.total-price');
    
    if (!cartItems || !totalPrice) return;
    
    cartItems.innerHTML = '';
    let total = 0;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart" style="font-size: 48px; color: #666; margin-bottom: 20px;"></i>
                <p style="color: #666; text-align: center;">Корзина пуста</p>
            </div>
        `;
    } else {
        cart.forEach(item => {
            total += item.price * item.quantity;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price}₽ × ${item.quantity}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="decrease-item" data-id="${item.id}">-</button>
                    <span style="color: white; min-width: 30px; text-align: center;">${item.quantity}</span>
                    <button class="increase-item" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            `;
            
            cartItems.appendChild(itemElement);
        });
    }
    
    totalPrice.textContent = `${total}₽`;
    
    // Обработчики для кнопок в корзине
    document.querySelectorAll('.decrease-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            updateCartItemQuantity(id, -1);
        });
    });
    
    document.querySelectorAll('.increase-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.closest('button').dataset.id);
            updateCartItemQuantity(id, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.closest('button').dataset.id);
            removeFromCart(id);
        });
    });
}

function updateCartItemQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCartCount();
            updateCartDisplay();
            updateLocalStorage();
        }
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartCount();
    updateCartDisplay();
    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Оформление заказа
function setupOrderButtons() {
    // Кнопки "Заказать сейчас" в баннерах
    document.querySelectorAll('.btn-order-now').forEach(btn => {
        btn.addEventListener('click', function() {
            const cartSidebar = document.querySelector('.cart-sidebar');
            const cartOverlay = document.querySelector('.cart-overlay');
            if (cartSidebar && cartOverlay) {
                cartSidebar.classList.add('active');
                cartOverlay.classList.add('active');
                updateCartDisplay();
            }
        });
    });
    
    // Кнопка оформления заказа в корзине
    const orderBtn = document.querySelector('.btn-order');
    if (orderBtn) {
        orderBtn.addEventListener('click', function() {
            processCheckout();
        });
    }
}

// Процесс оформления заказа (ИСПРАВЛЕННАЯ ВЕРСИЯ)
function processCheckout() {
    // Проверяем корзину
    if (cart.length === 0) {
        showNotification('Корзина пуста!', 'error');
        return;
    }
    
    // Проверяем авторизацию
    const userData = localStorage.getItem('userData');
    if (!userData) {
        showNotification('Для оформления заказа войдите в систему', 'info');
        
        // Открываем корзину, если она закрыта
        const cartSidebar = document.querySelector('.cart-sidebar');
        const cartOverlay = document.querySelector('.cart-overlay');
        if (cartSidebar && cartOverlay) {
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
        }
        
        // Открываем модалку авторизации
        if (window.smsAuth) {
            window.smsAuth.openAuthModal();
        }
        return;
    }
    
    try {
        const user = JSON.parse(userData);
        
        // Проверяем адрес доставки
        if (!user.addresses || user.addresses.length === 0) {
            showNotification('Добавьте адрес доставки в профиле', 'error');
            return;
        }
        
        const defaultAddress = user.addresses.find(addr => addr.isDefault);
        if (!defaultAddress) {
            showNotification('Выберите основной адрес доставки в профиле', 'error');
            return;
        }
        
        // Рассчитываем сумму
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        
        // Создаем заказ с правильной структурой
        const order = {
            id: 'ORD' + Date.now(),
            date: new Date().toISOString(),
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                image: item.image
            })),
            total: total,
            address: {
                ...defaultAddress,
                title: defaultAddress.title || 'Основной адрес'
            },
            status: 'new',
            paymentMethod: 'cash',
            userName: user.name,
            userPhone: user.phone
        };
        
        // Добавляем заказ в историю
        user.orders = user.orders || [];
        user.orders.push(order);
        
        // Добавляем бонусы (5% от суммы заказа)
        const bonusEarned = Math.floor(total * 0.05);
        user.bonuses = (user.bonuses || 0) + bonusEarned;
        
        // Сохраняем обновленные данные пользователя
        localStorage.setItem('userData', JSON.stringify(user));
        
        // Обновляем список пользователей
        updateGlobalUsers(user);
        
        // Показываем подтверждение
        showOrderConfirmation(order, defaultAddress, bonusEarned);
        
        // Очищаем корзину
        cart = [];
        updateCartCount();
        updateCartDisplay();
        updateLocalStorage();
        
        // Обновляем кнопку профиля на главной странице
        updateAuthButton();
        
        // Закрываем корзину
        const cartSidebar = document.querySelector('.cart-sidebar');
        const cartOverlay = document.querySelector('.cart-overlay');
        if (cartSidebar && cartOverlay) {
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
        }
        
    } catch (error) {
        console.error('Ошибка оформления заказа:', error);
        showNotification('Ошибка оформления заказа', 'error');
    }
}

// Обновление списка пользователей (ИСПРАВЛЕННАЯ ВЕРСИЯ)
function updateGlobalUsers(updatedUser) {
    try {
        let users = JSON.parse(localStorage.getItem('ksushi_users')) || [];
        const userIndex = users.findIndex(u => u.phone === updatedUser.phone);
        
        if (userIndex !== -1) {
            // Сохраняем все данные пользователя
            users[userIndex] = {
                ...users[userIndex],
                orders: updatedUser.orders || users[userIndex].orders,
                bonuses: updatedUser.bonuses !== undefined ? updatedUser.bonuses : users[userIndex].bonuses,
                addresses: updatedUser.addresses || users[userIndex].addresses,
                name: updatedUser.name || users[userIndex].name
            };
        } else {
            users.push(updatedUser);
        }
        
        localStorage.setItem('ksushi_users', JSON.stringify(users));
        console.log('Пользователь обновлен в глобальном списке:', updatedUser.phone);
        
    } catch (error) {
        console.error('Ошибка обновления списка пользователей:', error);
    }
}

// Показать подтверждение заказа
function showOrderConfirmation(order, address, bonusEarned) {
    const modal = document.createElement('div');
    modal.className = 'order-confirmation-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10002;
        padding: 20px;
    `;
    
    modal.innerHTML = `
        <div style="
            background: rgba(0, 0, 0, 0.95);
            border: 3px solid #ff0000;
            border-radius: 20px;
            padding: 40px;
            max-width: 500px;
            width: 100%;
            text-align: center;
            box-shadow: 0 20px 60px rgba(255, 0, 0, 0.3);
            animation: fadeIn 0.3s ease;
        ">
            <div style="margin-bottom: 30px;">
                <div style="
                    width: 80px;
                    height: 80px;
                    background: #ff0000;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                    font-size: 36px;
                    color: white;
                ">
                    <i class="fas fa-check"></i>
                </div>
                <h2 style="color: #ff0000; margin-bottom: 10px; font-size: 28px;">
                    Заказ оформлен!
                </h2>
                <p style="color: #ccc; margin-bottom: 5px;">Номер заказа: ${order.id}</p>
            </div>
            
            <div style="
                background: rgba(51, 51, 51, 0.5);
                padding: 20px;
                border-radius: 12px;
                margin-bottom: 25px;
                text-align: left;
            ">
                <h3 style="color: white; margin-bottom: 15px; font-size: 18px;">
                    <i class="fas fa-map-marker-alt" style="color: #ff0000; margin-right: 10px;"></i>
                    Адрес доставки
                </h3>
                <p style="color: white; margin-bottom: 8px; font-weight: 600;">${address.title}</p>
                <p style="color: #ccc; font-size: 15px; line-height: 1.5;">${address.fullAddress}</p>
                ${address.apartment ? `<p style="color: #999; font-size: 14px;">Квартира: ${address.apartment}</p>` : ''}
            </div>
            
            <div style="
                display: flex;
                justify-content: space-between;
                margin-bottom: 25px;
                padding: 15px;
                background: rgba(255, 0, 0, 0.1);
                border-radius: 12px;
            ">
                <div style="text-align: left;">
                    <p style="color: #ccc; font-size: 14px; margin-bottom: 5px;">Сумма заказа</p>
                    <p style="color: white; font-size: 24px; font-weight: 900;">${order.total}₽</p>
                </div>
                <div style="text-align: right;">
                    <p style="color: #ccc; font-size: 14px; margin-bottom: 5px;">Получено бонусов</p>
                    <p style="color: #00ff00; font-size: 24px; font-weight: 900;">+${bonusEarned}</p>
                </div>
            </div>
            
            <p style="color: #ccc; margin-bottom: 25px; font-size: 16px; line-height: 1.5;">
                <i class="fas fa-clock" style="color: #ff0000; margin-right: 8px;"></i>
                Ожидайте доставку в течение 60 минут!
            </p>
            
            <button id="close-confirmation" class="btn-red" style="
                padding: 15px 40px;
                font-size: 18px;
                font-weight: 700;
                border-radius: 12px;
                width: 100%;
            ">
                Отлично!
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Обработчик закрытия
    document.getElementById('close-confirmation').addEventListener('click', function() {
        modal.remove();
        
        // Закрываем корзину
        const cartSidebar = document.querySelector('.cart-sidebar');
        const cartOverlay = document.querySelector('.cart-overlay');
        if (cartSidebar && cartOverlay) {
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
        }
    });
    
    // Закрытие по клику вне модалки
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
            
            // Закрываем корзину
            const cartSidebar = document.querySelector('.cart-sidebar');
            const cartOverlay = document.querySelector('.cart-overlay');
            if (cartSidebar && cartOverlay) {
                cartSidebar.classList.remove('active');
                cartOverlay.classList.remove('active');
            }
        }
    });
}

// Обновление списка пользователей
function updateGlobalUsers(updatedUser) {
    try {
        let users = JSON.parse(localStorage.getItem('ksushi_users')) || [];
        const userIndex = users.findIndex(u => u.phone === updatedUser.phone);
        
        if (userIndex !== -1) {
            users[userIndex] = updatedUser;
        } else {
            users.push(updatedUser);
        }
        
        localStorage.setItem('ksushi_users', JSON.stringify(users));
    } catch (error) {
        console.error('Ошибка обновления списка пользователей:', error);
    }
}

// Обновление кнопки авторизации
// Обновление кнопки авторизации на красивую кнопку профиля
function updateAuthButton() {
    const userData = localStorage.getItem('userData');
    const authBtn = document.getElementById('open-auth');
    const profileLink = document.getElementById('profile-link');
    
    if (!authBtn || !profileLink) return;
    
    if (userData) {
        try {
            const user = JSON.parse(userData);
            
            // Обновляем имя в кнопке профиля
            const profileName = document.getElementById('profile-name');
            if (profileName && user.name) {
                profileName.textContent = user.name;
            }
            
            // Обновляем бейдж с бонусами
            const profileBadge = document.getElementById('profile-badge');
            if (profileBadge) {
                if (user.bonuses && user.bonuses > 0) {
                    profileBadge.textContent = user.bonuses;
                    profileBadge.style.display = 'flex';
                } else {
                    profileBadge.style.display = 'none';
                }
            }
            
            // Показываем кнопку профиля и скрываем кнопку входа
            profileLink.style.display = 'flex';
            authBtn.style.display = 'none';
            
            // Обновляем title для подсказки
            profileLink.title = `Профиль: ${user.name || 'Пользователь'}`;
            
            // Проверяем, нужно ли сбросить промокод KSUSHI20
            if (activePromo === 'KSUSHI20') {
                const usedPromos = JSON.parse(localStorage.getItem('usedPromos') || '{}');
                if (usedPromos[user.phone]?.includes('KSUSHI20')) {
                    // Пользователь уже использовал этот промокод
                    activePromo = null;
                    updateActivePromoDisplay();
                    updatePricing();
                    updateLocalStorage();
                    showNotification('Вы уже использовали промокод KSUSHI20', 'info');
                }
            }
            
        } catch (e) {
            console.error('Ошибка парсинга userData:', e);
            // Если ошибка, показываем кнопку входа
            profileLink.style.display = 'none';
            authBtn.style.display = 'flex';
        }
    } else {
        // Пользователь не авторизован
        profileLink.style.display = 'none';
        authBtn.style.display = 'flex';
    }
}

// Функция для скрытия кнопки профиля при выходе
function hideProfileButton() {
    const authBtn = document.getElementById('open-auth');
    const profileLink = document.getElementById('profile-link');
    
    if (authBtn && profileLink) {
        profileLink.style.display = 'none';
        authBtn.style.display = 'flex';
    }
}

// Обновляем при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    updateAuthButton();
    
    // Обновляем также при любых изменениях в localStorage
    window.addEventListener('storage', function(e) {
        if (e.key === 'userData') {
            updateAuthButton();
        }
    });
});

// Также добавим функцию для обновления бонусов в реальном времени
function updateProfileBadge(newBonuses) {
    const profileBadge = document.getElementById('profile-badge');
    if (profileBadge && newBonuses > 0) {
        profileBadge.textContent = newBonuses;
        profileBadge.style.display = 'block';
    } else if (profileBadge) {
        profileBadge.style.display = 'none';
    }
}

// Также добавьте функцию для обновления бейджа с бонусами
function updateProfileBadge() {
    const userData = localStorage.getItem('userData');
    const profileBadge = document.querySelector('.profile-badge');
    const profileLink = document.querySelector('.profile-link');
    
    if (!userData || !profileLink) return;
    
    try {
        const user = JSON.parse(userData);
        
        // Обновляем бейдж с бонусами
        const existingBadge = profileLink.querySelector('.profile-badge');
        if (existingBadge) {
            existingBadge.remove();
        }
        
        if (user.bonuses > 0) {
            const badge = document.createElement('span');
            badge.className = 'profile-badge';
            badge.textContent = user.bonuses;
            profileLink.appendChild(badge);
        }
        
        // Обновляем имя пользователя
        const nameSpan = profileLink.querySelector('span:not(.profile-badge)');
        if (nameSpan && user.name) {
            nameSpan.textContent = user.name;
        }
        
    } catch (e) {
        console.error('Ошибка обновления бейджа:', e);
    }
}

// Вызов этой функции при загрузке и при изменениях
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем сразу при загрузке
    updateAuthButton();
    
    // Также обновляем после успешной авторизации
    // В auth.js добавьте вызов этой функции после успешной авторизации
});

// В auth.js добавьте этот вызов после успешной авторизации:
// updateAuthButton();

// Обновление адреса в корзине из профиля
// Обновление адреса в корзине из профиля
function updateCartAddressFromProfile() {
    const userData = localStorage.getItem('userData');
    const addressElement = document.getElementById('cart-delivery-address');
    
    if (!addressElement) return;
    
    if (userData) {
        try {
            const user = JSON.parse(userData);
            
            if (user.addresses && user.addresses.length > 0) {
                const defaultAddress = user.addresses.find(addr => addr.isDefault);
                if (defaultAddress) {
                    addressElement.innerHTML = `
                        <strong>${defaultAddress.title}</strong><br>
                        ${defaultAddress.fullAddress}
                    `;
                    addressElement.classList.remove('address-notice');
                    return;
                }
            }
            
            // Если нет адреса, показываем ссылку на профиль
            addressElement.innerHTML = '<a href="profile.html">Добавить адрес доставки</a>';
            addressElement.classList.add('address-notice');
            
        } catch (e) {
            console.error('Ошибка загрузки адреса:', e);
            addressElement.innerHTML = '<a href="profile.html">Добавить адрес доставки</a>';
            addressElement.classList.add('address-notice');
        }
    } else {
        // Пользователь не авторизован
        addressElement.innerHTML = '<a href="#" id="open-auth-from-cart">Войдите для выбора адреса</a>';
        addressElement.classList.add('address-notice');
    }
}
    } else {
        // Пользователь не авторизован
        addressElement.innerHTML = '<a href="#" id="open-auth-from-cart">Войдите для выбора адреса</a>';
        addressElement.classList.add('address-notice');
        
        // Добавляем обработчик для кнопки входа
        const loginLink = document.getElementById('open-auth-from-cart');
        if (loginLink) {
            loginLink.addEventListener('click', function(e) {
                e.preventDefault();
                if (window.smsAuth) {
                    window.smsAuth.openAuthModal();
                }
            });
        }
    }
}

// Загрузка сохраненного адреса
function loadSavedAddress() {
    const savedAddress = localStorage.getItem('deliveryAddress');
    if (savedAddress) {
        try {
            const address = JSON.parse(savedAddress);
            // Можно использовать для чего-то еще
        } catch (e) {
            console.error('Ошибка при загрузке адреса:', e);
        }
    }
}

// Показать уведомление
function showNotification(message, type = 'info') {
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 
                           type === 'error' ? 'exclamation-circle' : 
                           type === 'info' ? 'info-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Удаляем через 3 секунды
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Добавляем стили для уведомлений
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10001;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    }
    
    .notification-success {
        background: rgba(0, 255, 0, 0.1);
        color: #00ff00;
        border: 1px solid #00ff00;
    }
    
    .notification-error {
        background: rgba(255, 0, 0, 0.1);
        color: #ff0000;
        border: 1px solid #ff0000;
    }
    
    .notification-info {
        background: rgba(0, 150, 255, 0.1);
        color: #0096ff;
        border: 1px solid #0096ff;
    }
`;

document.head.appendChild(style);
// Функция переключения режима отображения
function initViewToggle() {
    const toggleBtn = document.getElementById('view-toggle');
    if (!toggleBtn) return;
    
    // Проверяем сохраненные настройки
    const savedView = localStorage.getItem('productViewMode') || 'grid';
    
    // Применяем сохраненный режим
    applyViewMode(savedView);
    updateToggleButton(savedView);
    
    // Обработчик клика
    toggleBtn.addEventListener('click', function() {
        const currentView = document.body.classList.contains('compact-mode') ? 'compact' : 'grid';
        const newView = currentView === 'grid' ? 'compact' : 'grid';
        
        applyViewMode(newView);
        updateToggleButton(newView);
        
        // Сохраняем в localStorage
        localStorage.setItem('productViewMode', newView);
        
        // Показываем уведомление
        showNotification(`Режим: ${newView === 'compact' ? 'Компактный' : 'Стандартный'}`, 'info');
    });
}

// Применение режима отображения
function applyViewMode(mode) {
    const productsGrids = document.querySelectorAll('.products-grid');
    
    // Удаляем все классы режимов
    document.body.classList.remove('compact-mode', 'ultra-compact');
    productsGrids.forEach(grid => grid.classList.remove('compact-mode'));
    
    if (mode === 'compact') {
        document.body.classList.add('compact-mode');
        productsGrids.forEach(grid => grid.classList.add('compact-mode'));
    } else if (mode === 'ultra-compact') {
        document.body.classList.add('ultra-compact');
        productsGrids.forEach(grid => grid.classList.add('ultra-compact'));
    }
}

// Обновление кнопки переключения
function updateToggleButton(mode) {
    const toggleBtn = document.getElementById('view-toggle');
    if (!toggleBtn) return;
    
    const icon = toggleBtn.querySelector('i');
    const text = toggleBtn.querySelector('span');
    
    if (mode === 'compact') {
        icon.className = 'fas fa-th-large';
        text.textContent = 'Сетка';
        toggleBtn.classList.add('active');
    } else {
        icon.className = 'fas fa-list';
        text.textContent = 'Список';
        toggleBtn.classList.remove('active');
    }
}

// Адаптивное изменение режима по ширине экрана
function adaptiveViewMode() {
    const width = window.innerWidth;
    
    if (width < 480) {
        // Автоматически включаем компактный режим на очень маленьких экранах
        if (!localStorage.getItem('productViewMode')) {
            applyViewMode('compact');
            updateToggleButton('compact');
        }
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Создаем кнопку переключения режима
    const viewToggle = document.createElement('div');
    viewToggle.className = 'view-toggle';
    viewToggle.innerHTML = `
        <button class="view-toggle-btn" id="view-toggle">
            <i class="fas fa-list"></i>
            <span>Список</span>
        </button>
    `;
    
    // Вставляем после каждого section-title
    document.querySelectorAll('.section-title').forEach(title => {
        const toggleClone = viewToggle.cloneNode(true);
        title.parentNode.insertBefore(toggleClone, title.nextSibling);
    });
    
    // Инициализируем переключатель
    initViewToggle();
    
    // Адаптивный режим
    adaptiveViewMode();
    window.addEventListener('resize', adaptiveViewMode);
    
    // Создаем компактные карточки для адресов в профиле
    createCompactAddressCards();
    
    // Создаем компактные карточки для заказов
    createCompactOrderCards();
});

// Создание компактных карточек адресов
function createCompactAddressCards() {
    const addressesList = document.getElementById('addresses-list');
    if (!addressesList) return;
    
    addressesList.classList.add('compact-addresses');
}

// Создание компактных карточек заказов
function createCompactOrderCards() {
    const ordersList = document.getElementById('history-orders-list');
    if (ordersList) {
        ordersList.classList.add('compact-orders');
    }
    
    const activeOrdersList = document.getElementById('active-orders-list');
    if (activeOrdersList) {
        activeOrdersList.classList.add('compact-orders');
    }
}

// Быстрый выбор адреса доставки
function createQuickAddressSelector() {
    const addressContainer = document.querySelector('.delivery-info');
    if (!addressContainer) return;
    
    const quickSelector = document.createElement('div');
    quickSelector.className = 'quick-addresses';
    quickSelector.id = 'quick-address-selector';
    
    // Заглушка - в реальном приложении здесь будут данные из БД
    const addresses = [
        { id: 1, title: 'Дом', address: 'ул. Нагорная, 95', icon: 'fa-home' },
        { id: 2, title: 'Работа', address: 'ул. Ленина, 12', icon: 'fa-briefcase' },
        { id: 3, title: 'Другое', address: 'ул. Центральная, 45', icon: 'fa-map-marker-alt' }
    ];
    
    addresses.forEach(addr => {
        const addressItem = document.createElement('div');
        addressItem.className = 'quick-address';
        addressItem.dataset.id = addr.id;
        addressItem.innerHTML = `
            <div class="quick-address-icon">
                <i class="fas ${addr.icon}"></i>
            </div>
            <div class="quick-address-title">${addr.title}</div>
            <div class="quick-address-text">${addr.address}</div>
        `;
        
        addressItem.addEventListener('click', function() {
            // Убираем активный класс у всех
            document.querySelectorAll('.quick-address').forEach(item => {
                item.classList.remove('active');
            });
            
            // Добавляем активный класс текущему
            this.classList.add('active');
            
            // Обновляем адрес в корзине
            document.getElementById('cart-delivery-address').textContent = addr.address;
            
            showNotification(`Выбран адрес: ${addr.title}`, 'success');
        });
        
        quickSelector.appendChild(addressItem);
    });
    
    addressContainer.parentNode.insertBefore(quickSelector, addressContainer);
}

// Создание быстрых действий в профиле
function createQuickActions() {
    const profileHeader = document.querySelector('.profile-info');
    if (!profileHeader) return;
    
    const quickActions = document.createElement('div');
    quickActions.className = 'quick-actions';
    quickActions.innerHTML = `
        <div class="quick-action" onclick="window.location.href='profile.html#orders-history'">
            <div class="quick-action-icon">
                <i class="fas fa-history"></i>
            </div>
            <div class="quick-action-text">Заказы</div>
        </div>
        <div class="quick-action" onclick="window.location.href='profile.html#bonuses'">
            <div class="quick-action-icon">
                <i class="fas fa-gift"></i>
            </div>
            <div class="quick-action-text">Бонусы</div>
        </div>
        <div class="quick-action" onclick="window.location.href='profile.html#delivery-address'">
            <div class="quick-action-icon">
                <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="quick-action-text">Адрес</div>
        </div>
    `;
    
    profileHeader.appendChild(quickActions);
}

// Горизонтальная прокрутка популярных товаров
function createHorizontalScroll() {
    const newProducts = document.getElementById('new-products');
    if (!newProducts) return;
    
    // Добавляем горизонтальный скролл
    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'horizontal-scroll';
    scrollContainer.id = 'popular-scroll';
    
    // Клонируем первые 5 продуктов
    const products = newProducts.querySelectorAll('.product-card');
    products.forEach((product, index) => {
        if (index < 5) {
            const clone = product.cloneNode(true);
            clone.classList.add('horizontal-scroll-item');
            clone.classList.add('mini-card');
            
            // Упрощаем содержимое для мини-карточки
            const img = clone.querySelector('.product-img');
            const title = clone.querySelector('.product-title');
            const price = clone.querySelector('.product-price');
            
            scrollContainer.appendChild(clone);
        }
    });
    
    // Заменяем оригинальный контейнер
    newProducts.parentNode.insertBefore(scrollContainer, newProducts);
    newProducts.style.display = 'none';
}

// Мини-карточки для быстрого добавления в корзину
function createQuickAddMiniCards() {
    const sectionTitles = document.querySelectorAll('.section-title');
    
    sectionTitles.forEach(title => {
        if (title.textContent.includes('Новинки') || 
            title.textContent.includes('Популярные')) {
            
            const miniGrid = document.createElement('div');
            miniGrid.className = 'mini-grid';
            miniGrid.id = 'mini-grid-' + Date.now();
            
            // Находим следующий products-grid
            let nextSibling = title.nextElementSibling;
            while (nextSibling && !nextSibling.classList.contains('products-grid')) {
                nextSibling = nextSibling.nextElementSibling;
            }
            
            if (nextSibling && nextSibling.classList.contains('products-grid')) {
                // Берем первые 4 товара
                const products = nextSibling.querySelectorAll('.product-card');
                products.forEach((product, index) => {
                    if (index < 4) {
                        const miniCard = createMiniCard(product);
                        miniGrid.appendChild(miniCard);
                    }
                });
                
                // Вставляем перед основным гридом
                nextSibling.parentNode.insertBefore(miniGrid, nextSibling);
                
                // Добавляем переключатель
                const toggleBtn = document.createElement('button');
                toggleBtn.className = 'btn-black';
                toggleBtn.style.marginTop = '10px';
                toggleBtn.style.width = '100%';
                toggleBtn.innerHTML = '<i class="fas fa-eye"></i> Показать все';
                toggleBtn.addEventListener('click', function() {
                    nextSibling.style.display = 
                        nextSibling.style.display === 'none' ? 'grid' : 'none';
                    this.innerHTML = nextSibling.style.display === 'none' ? 
                        '<i class="fas fa-eye"></i> Показать все' : 
                        '<i class="fas fa-eye-slash"></i> Скрыть';
                });
                
                // Скрываем основной грид по умолчанию на мобильных
                if (window.innerWidth < 768) {
                    nextSibling.style.display = 'none';
                }
                
                miniGrid.parentNode.insertBefore(toggleBtn, miniGrid.nextSibling);
            }
        }
    });
}

// Создание мини-карточки
function createMiniCard(productCard) {
    const miniCard = document.createElement('div');
    miniCard.className = 'mini-card';
    
    const img = productCard.querySelector('.product-img');
    const title = productCard.querySelector('.product-title');
    const price = productCard.querySelector('.product-price');
    const addBtn = productCard.querySelector('.add-to-cart');
    
    miniCard.innerHTML = `
        ${img ? `<img src="${img.src}" alt="${title.textContent}" class="mini-card-image">` : ''}
        <div class="mini-card-title">${title ? title.textContent : ''}</div>
        <div class="mini-card-price">${price ? price.textContent : ''}</div>
    `;
    
    // Копируем обработчик добавления в корзину
    if (addBtn) {
        miniCard.addEventListener('click', function(e) {
            if (!e.target.closest('.mini-card-price')) {
                addBtn.click();
            }
        });
    }
    
    return miniCard;
}

// Сжатый режим профиля для мобильных
function initCompactProfile() {
    if (window.innerWidth < 768) {
        document.querySelector('.profile-main')?.classList.add('compact-profile');
    }
}

// Инициализация всех компактных функций
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        createQuickAddressSelector();
        createQuickActions();
        createHorizontalScroll();
        createQuickAddMiniCards();
        initCompactProfile();
    }, 1000);
});
// Управление видами отображения карточек
class ProductViewManager {
    constructor() {
        this.viewMode = localStorage.getItem('productViewMode') || 'grid';
        this.init();
    }
    
    init() {
        this.createViewControls();
        this.applyViewMode(this.viewMode);
        this.setupEventListeners();
    }
    
    createViewControls() {
        // Создаем контейнер для кнопок переключения вида
        const controls = document.createElement('div');
        controls.className = 'view-controls';
        controls.innerHTML = `
            <button class="view-btn" data-view="grid" title="Сетка 2x2">
                <i class="fas fa-th-large"></i>
            </button>
            <button class="view-btn" data-view="list" title="Список">
                <i class="fas fa-list"></i>
            </button>
            <button class="view-btn" data-view="tile" title="Плитка">
                <i class="fas fa-th"></i>
            </button>
        `;
        
        // Вставляем перед первым разделом
        const firstSection = document.querySelector('.section-header');
        if (firstSection) {
            firstSection.parentNode.insertBefore(controls, firstSection.nextSibling);
        }
        
        this.controls = controls;
    }
    
    applyViewMode(mode) {
        this.viewMode = mode;
        
        // Удаляем все классы видов
        document.body.classList.remove('grid-view', 'list-view', 'tile-view');
        
        // Добавляем нужный класс
        document.body.classList.add(`${mode}-view`);
        
        // Обновляем активную кнопку
        this.updateActiveButton(mode);
        
        // Сохраняем настройки
        localStorage.setItem('productViewMode', mode);
    }
    
    updateActiveButton(mode) {
        if (!this.controls) return;
        
        // Убираем активный класс у всех кнопок
        this.controls.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Добавляем активный класс выбранной кнопке
        const activeBtn = this.controls.querySelector(`[data-view="${mode}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }
    
    setupEventListeners() {
        if (!this.controls) return;
        
        // Обработчики кликов по кнопкам
        this.controls.addEventListener('click', (e) => {
            const btn = e.target.closest('.view-btn');
            if (!btn) return;
            
            const view = btn.dataset.view;
            this.applyViewMode(view);
            
            // Показываем уведомление
            this.showViewNotification(view);
        });
        
        // Адаптивное изменение вида при изменении размера окна
        window.addEventListener('resize', () => {
            this.adaptiveViewMode();
        });
        
        // Инициализируем адаптивный режим
        this.adaptiveViewMode();
    }
    
    showViewNotification(view) {
        const messages = {
            'grid': 'Режим: Сетка (2 в ряд)',
            'list': 'Режим: Список',
            'tile': 'Режим: Компактная плитка'
        };
        
        showNotification(messages[view], 'info');
    }
    
    adaptiveViewMode() {
        const width = window.innerWidth;
        
        // Автоматически переключаем на список на очень узких экранах
        if (width < 360 && this.viewMode !== 'list') {
            this.applyViewMode('list');
        }
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    // Инициализируем менеджер видов
    if (document.querySelector('.products-grid')) {
        window.viewManager = new ProductViewManager();
    }
    
    // Оптимизация карточек для мобильных
    optimizeForMobile();
    
    // Скелетоны для загрузки
    showSkeletons();
});

// Оптимизация для мобильных
function optimizeForMobile() {
    if (window.innerWidth > 768) return;
    
    // Упрощаем карточки на мобильных
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        // Добавляем класс для оптимизации
        card.classList.add('mobile-optimized');
        
        // Упрощаем описание (ограничиваем строки)
        const desc = card.querySelector('.product-desc');
        if (desc) {
            desc.style.webkitLineClamp = '2';
        }
        
        // Добавляем быстрый просмотр
        card.addEventListener('click', (e) => {
            // Не срабатывает при клике на кнопки
            if (e.target.closest('.add-to-cart') || 
                e.target.closest('.variant-btn')) {
                return;
            }
            
            // Показываем быстрый просмотр
            showQuickView(card);
        });
    });
}

// Показать быстрый просмотр
function showQuickView(card) {
    const productId = card.dataset.id;
    const title = card.querySelector('.product-title')?.textContent;
    const price = card.querySelector('.product-price')?.textContent;
    const image = card.querySelector('.product-img')?.src;
    
    // Создаем модальное окно быстрого просмотра
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
        <div class="modal quick-view-modal">
            <div class="modal-header">
                <h3><i class="fas fa-eye"></i> Быстрый просмотр</h3>
                <button class="close-modal"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-content">
                <img src="${image}" alt="${title}" class="quick-view-modal-image">
                <h4>${title}</h4>
                <div class="quick-view-price">${price}</div>
                <button class="btn-red quick-view-add-btn" style="width: 100%; margin-top: 15px;">
                    <i class="fas fa-cart-plus"></i> Добавить в корзину
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Закрытие модального окна
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Добавление в корзину
    modal.querySelector('.quick-view-add-btn').addEventListener('click', () => {
        // Здесь логика добавления в корзину
        showNotification('Товар добавлен в корзину', 'success');
        modal.remove();
    });
}

// Показать скелетоны при загрузке
function showSkeletons() {
    const grids = document.querySelectorAll('.products-grid');
    
    grids.forEach(grid => {
        // Проверяем, пустая ли сетка
        if (grid.children.length === 0) {
            grid.innerHTML = `
                <div class="skeleton-card">
                    <div class="skeleton-image"></div>
                    <div class="skeleton-text"></div>
                    <div class="skeleton-text short"></div>
                    <div class="skeleton-price"></div>
                </div>
                <div class="skeleton-card">
                    <div class="skeleton-image"></div>
                    <div class="skeleton-text"></div>
                    <div class="skeleton-text short"></div>
                    <div class="skeleton-price"></div>
                </div>
            `.repeat(4); // 2 ряда по 2 карточки
        }
    });
    
    // Убираем скелетоны через 2 секунды (имитация загрузки)
    setTimeout(() => {
        document.querySelectorAll('.skeleton-card').forEach(skeleton => {
            skeleton.style.opacity = '0';
            setTimeout(() => skeleton.remove(), 300);
        });
    }, 2000);
}

// Оптимизация изображений
function optimizeImages() {
    const images = document.querySelectorAll('.product-img');
    
    images.forEach(img => {
        // Добавляем lazy loading
        img.loading = 'lazy';
        
        // Добавляем класс для анимации загрузки
        if (!img.complete) {
            img.classList.add('lazy-image');
            img.onload = () => img.classList.remove('lazy-image');
        }
        
        // Оптимизируем размеры для мобильных
        if (window.innerWidth < 768) {
            const src = img.src;
            // Здесь можно добавить логику для загрузки оптимизированных изображений
            // Например: img.src = src.replace('.jpg', '-mobile.jpg');
        }
    });
}

// Инициализация оптимизации изображений
document.addEventListener('DOMContentLoaded', optimizeImages);
window.addEventListener('resize', optimizeImages);


