
function checkAuthAndLoadProfile() {
    const userData = localStorage.getItem('userData');
    
    if (userData) {
        // Пользователь авторизован - показываем профиль
        showProfileContent();
        loadProfileData(userData);
    } else {
        // Пользователь не авторизован - показываем приглашение
        showAuthRequired();
    }
}

// Показать контент профиля
function showProfileContent() {
    const authRequired = document.getElementById('auth-required');
    const profileContent = document.getElementById('profile-content');
    
    if (authRequired) authRequired.style.display = 'none';
    if (profileContent) profileContent.style.display = 'block';
}

// Показать приглашение авторизации
function showAuthRequired() {
    const authRequired = document.getElementById('auth-required');
    const profileContent = document.getElementById('profile-content');
    
    if (authRequired) authRequired.style.display = 'block';
    if (profileContent) profileContent.style.display = 'none';
}

// Загрузка данных профиля
function loadProfileData(userDataString) {
    try {
        const user = JSON.parse(userDataString);
        
        // Основная информация
        setElementText('profile-name', user.name || 'Гость');
        setElementText('profile-phone', user.phone ? formatPhone(user.phone) : 'Не указан');
        
        // Статистика
        const ordersCount = user.orders ? user.orders.length : 0;
        const totalSpent = user.orders ? user.orders.reduce((sum, order) => sum + (order.total || 0), 0) : 0;
        const bonusPoints = user.bonuses || 0;
        
        setElementText('orders-count', ordersCount);
        setElementText('total-spent', totalSpent + '₽');
        setElementText('bonus-points', bonusPoints);
        
        // Личные данные
        setElementText('view-name', user.name || 'Не указано');
        setElementText('view-email', user.email || 'Не указан');
        setElementText('view-birthday', user.birthday || 'Не указана');
        
        // Бонусы
        setElementText('bonus-balance', bonusPoints);
        updateBonusProgress(bonusPoints);
        
        // Адреса
        loadAddresses(user.addresses || []);
        
        // Заказы (Разделение на Активные и Историю)
        loadOrders(user.orders || []);
        
        // Настройки уведомлений
        loadNotificationSettings(user.notificationSettings || {});
        
    } catch (error) {
        console.error('Ошибка загрузки профиля:', error);
        showAuthRequired();
    }
}

// Обновление прогресса бонусов
function updateBonusProgress(bonusPoints) {
    const progressBar = document.getElementById('bonus-progress');
    if (!progressBar) return;
    
    // Максимум 1000 бонусов для 100%
    const progressPercent = Math.min((bonusPoints / 1000) * 100, 100);
    progressBar.style.width = progressPercent + '%';
    
    // Обновляем текст
    const nextLevelElement = progressBar.closest('.bonus-card').querySelector('.bonus-next-level span');
    if (nextLevelElement) {
        const remaining = Math.max(0, 1000 - bonusPoints);
        nextLevelElement.textContent = remaining + '₽';
    }
}

// Вспомогательная функция для установки текста
function setElementText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

// Форматирование телефона
function formatPhone(phone) {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length !== 10) return phone;
    
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (!match) return phone;
    
    return `+7 (${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
}

// Загрузка адресов
// Загрузка адресов (ИСПРАВЛЕННАЯ ВЕРСИЯ)
function loadAddresses(addresses) {
    const addressesList = document.getElementById('addresses-list');
    
    if (!addressesList) {
        console.error('Элемент addresses-list не найден');
        return;
    }
    
    console.log('Загружаемые адреса:', addresses); // Дебаг
    
    if (!addresses || addresses.length === 0) {
        addressesList.innerHTML = '<p class="no-addresses">У вас нет сохраненных адресов</p>';
        return;
    }
    
    addressesList.innerHTML = addresses.map(address => {
        // Формируем отображаемый адрес
        let displayAddress = '';
        if (address.city) displayAddress += address.city;
        if (address.street) displayAddress += displayAddress ? `, ${address.street}` : address.street;
        if (address.house) displayAddress += displayAddress ? `, д. ${address.house}` : `д. ${address.house}`;
        if (address.apartment) displayAddress += `, кв. ${address.apartment}`;
        
        return `
            <div class="address-item ${address.isDefault ? 'active' : ''}" data-id="${address.id}">
                <div class="address-title">
                    <span>${address.title || 'Без названия'}</span>
                    <div class="address-actions">
                        ${address.isDefault ? 
                            '<span class="default-badge">Основной</span>' : 
                            `<button class="set-default-btn" title="Сделать основным" data-id="${address.id}">
                                <i class="fas fa-star"></i>
                            </button>`
                        }
                        <button class="delete-address-btn" title="Удалить" data-id="${address.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="address-details">${displayAddress || address.fullAddress || 'Адрес не указан'}</div>
                ${address.comment ? `<div class="address-comment">${address.comment}</div>` : ''}
            </div>
        `;
    }).join('');
    
    // Добавляем обработчики для кнопок
    setupAddressButtons();
}
// Валидация формы адреса
function validateAddressForm() {
    const errors = [];
    
    const title = document.getElementById('address-title').value.trim();
    const street = document.getElementById('address-street').value.trim();
    const house = document.getElementById('address-house').value.trim();
    
    if (!title) errors.push('Введите название адреса');
    if (!street) errors.push('Введите улицу');
    if (!house) errors.push('Введите номер дома');
    
    // Валидация номера дома (только цифры и буквы)
    if (house && !/^[0-9а-яА-Я]+[а-яА-Я0-9/]*$/.test(house)) {
        errors.push('Номер дома может содержать только цифры, буквы и символ /');
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// Обновленная функция сохранения с валидацией
function saveNewAddress() {
    debugAddressForm();
    
    // Валидация
    const validation = validateAddressForm();
    if (!validation.isValid) {
        validation.errors.forEach(error => {
            showNotification(error, 'error');
        });
        return;
    }
    
    // ... остальной код без изменений
}
// Настройка кнопок адресов
function setupAddressButtons() {
    // Установка основного адреса
    document.querySelectorAll('.set-default-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const addressId = parseInt(this.dataset.id);
            setDefaultAddress(addressId);
        });
    });
    
    // Удаление адреса
    document.querySelectorAll('.delete-address-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const addressId = parseInt(this.dataset.id);
            deleteAddress(addressId);
        });
    });
}

// Установка основного адреса
function setDefaultAddress(addressId) {
    const userData = localStorage.getItem('userData');
    if (!userData) return;
    
    try {
        const user = JSON.parse(userData);
        
        // Обновляем все адреса
        user.addresses = (user.addresses || []).map(addr => ({
            ...addr,
            isDefault: addr.id === addressId
        }));
        
        // Сохраняем обновленные данные
        localStorage.setItem('userData', JSON.stringify(user));
        
        // Обновляем глобальный список
        updateGlobalUsers(user);
        
        // Обновляем список адресов
        loadAddresses(user.addresses);
        
        // Обновляем адрес в корзине на главной странице
        if (window.smsAuth) {
            window.smsAuth.updateCartAddress(localStorage.getItem('userData'));
        }
        
        showNotification('Основной адрес изменен', 'success');
        
    } catch (error) {
        console.error('Ошибка установки основного адреса:', error);
        showNotification('Ошибка изменения адреса', 'error');
    }
}

// Удаление адреса
function deleteAddress(addressId) {
    if (!confirm('Вы уверены, что хотите удалить этот адрес?')) {
        return;
    }
    
    const userData = localStorage.getItem('userData');
    if (!userData) return;
    
    try {
        const user = JSON.parse(userData);
        
        // Находим адрес для удаления
        const addressToDelete = user.addresses.find(addr => addr.id === addressId);
        if (!addressToDelete) return;
        
        // Проверяем, не пытаемся ли удалить основной адрес
        if (addressToDelete.isDefault && user.addresses.length > 1) {
            alert('Нельзя удалить основной адрес. Сначала сделайте основной другой адрес.');
            return;
        }
        
        // Удаляем адрес
        user.addresses = user.addresses.filter(addr => addr.id !== addressId);
        
        // Если удалили единственный адрес, ничего не делаем
        // Если удалили основной и остались другие адреса, делаем первый основной
        if (user.addresses.length > 0 && !user.addresses.some(addr => addr.isDefault)) {
            user.addresses[0].isDefault = true;
        }
        
        // Сохраняем обновленные данные
        localStorage.setItem('userData', JSON.stringify(user));
        
        // Обновляем глобальный список
        updateGlobalUsers(user);
        
        // Обновляем список адресов
        loadAddresses(user.addresses);
        
        // Обновляем адрес в корзине
        if (window.smsAuth) {
            window.smsAuth.updateCartAddress(localStorage.getItem('userData'));
        }
        
        showNotification('Адрес удален', 'success');
        
    } catch (error) {
        console.error('Ошибка удаления адреса:', error);
        showNotification('Ошибка удаления адреса', 'error');
    }
}

// Обновление глобального списка пользователей
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

// ЗАГРУЗКА ЗАКАЗОВ (РАЗДЕЛЕНИЕ НА АКТИВНЫЕ И ИСТОРИЮ) - ИСПРАВЛЕННАЯ ВЕРСИЯ
function loadOrders(orders) {
    const activeOrdersSection = document.getElementById('active-orders-section');
    const activeOrdersList = document.getElementById('active-orders-list');
    const activeOrdersCount = document.getElementById('active-orders-count');
    const lastOrderSection = document.getElementById('last-order-section');
    const lastOrderCard = document.getElementById('last-order-card');
    const historyOrdersList = document.getElementById('history-orders-list');
    
    if (!orders || orders.length === 0) {
        if (activeOrdersSection) {
            activeOrdersSection.style.display = 'none';
        }
        if (lastOrderSection) {
            lastOrderSection.style.display = 'none';
        }
        if (historyOrdersList) {
            historyOrdersList.innerHTML = `
                <div class="no-orders">
                    <i class="fas fa-shopping-bag"></i>
                    <p>У вас пока нет заказов</p>
                    <a href="index.html" class="btn-red">Сделать первый заказ</a>
                </div>
            `;
        }
        return;
    }
    
    // Сортируем по дате (новые сначала)
    const sortedOrders = [...orders].sort((a, b) => 
        new Date(b.date || b.createdAt) - new Date(a.date || a.createdAt)
    );

    // Разделяем активные и завершенные заказы
    const activeStatuses = ['new', 'processing', 'cooking', 'delivering'];
    const completedStatuses = ['delivered', 'completed', 'cancelled'];
    
    const activeOrders = sortedOrders.filter(o => activeStatuses.includes(o.status));
    const completedOrders = sortedOrders.filter(o => completedStatuses.includes(o.status));
    const historyOrders = completedOrders; // Для модального окна истории

    // 1. Рендеринг активных заказов
    if (activeOrdersList && activeOrdersSection) {
        if (activeOrders.length > 0) {
            activeOrdersSection.style.display = 'block';
            
            if (activeOrdersCount) {
                activeOrdersCount.textContent = activeOrders.length;
            }
            
            // Ограничиваем показ до 3 активных заказов
            const ordersToShow = activeOrders.slice(0, 3);
            
            activeOrdersList.innerHTML = ordersToShow.map(order => `
                <div class="active-order-card" data-order-id="${order.id}">
                    <div class="active-order-header">
                        <span class="active-order-title">Заказ #${order.id?.substring(0, 8) || '...'}</span>
                        <span class="active-order-status ${getStatusClass(order.status)}">
                            <i class="fas fa-circle-notch"></i>
                            ${getStatusText(order.status)}
                        </span>
                    </div>
                    <div class="active-order-items">
                        ${order.items ? order.items.slice(0, 2).map(item => 
                            `<div>${item.name} × ${item.quantity}</div>`
                        ).join('') : 'Детали загружаются...'}
                        ${order.items && order.items.length > 2 ? 
                            `<div style="color: #666; font-size: 12px;">+ ещё ${order.items.length - 2} позиций</div>` : ''}
                    </div>
                    <div class="active-order-footer">
                        <span>Сумма: ${order.total || 0}₽</span>
                        <span>${formatDate(order.date || order.createdAt)}</span>
                    </div>
                </div>
            `).join('');
            
            // Если есть больше 3 активных заказов, показываем сообщение
            if (activeOrders.length > 3) {
                activeOrdersList.innerHTML += `
                    <div style="
                        text-align: center;
                        padding: 15px;
                        color: #666;
                        font-size: 14px;
                        border-top: 1px solid #333;
                        margin-top: 15px;
                    ">
                        <i class="fas fa-ellipsis-h"></i>
                        И ещё ${activeOrders.length - 3} активных заказа
                    </div>
                `;
            }
            
            // Добавляем обработчики для активных заказов
            addActiveOrdersListeners();
            
        } else {
            activeOrdersSection.style.display = 'none';
        }
    }

    // 2. Показываем последний завершенный заказ, если нет активных
    if (lastOrderSection && lastOrderCard && completedOrders.length > 0 && activeOrders.length === 0) {
        const lastOrder = completedOrders[0];
        lastOrderSection.style.display = 'block';
        
        lastOrderCard.innerHTML = `
            <div class="order-item" data-order-id="${lastOrder.id}">
                <div class="order-header">
                    <span class="order-number">Заказ #${lastOrder.id?.substring(0, 8) || 'N/A'}</span>
                    <span class="order-date">${formatDate(lastOrder.date || lastOrder.createdAt)}</span>
                    <span class="order-status ${getStatusClass(lastOrder.status)}">
                        ${getStatusText(lastOrder.status)}
                    </span>
                </div>
                <div class="order-details">
                    ${lastOrder.items ? lastOrder.items.slice(0, 2).map(item => 
                        `${item.name} × ${item.quantity}`
                    ).join(', ') : 'Детали заказа недоступны'}
                    ${lastOrder.items && lastOrder.items.length > 2 ? 
                        `, + ещё ${lastOrder.items.length - 2}` : ''}
                </div>
                <div class="order-total">${lastOrder.total || 0}₽</div>
            </div>
        `;
    } else if (lastOrderSection) {
        lastOrderSection.style.display = 'none';
    }

    // 3. Рендеринг истории заказов (в модальное окно)
    if (historyOrdersList) {
        if (historyOrders.length === 0) {
            historyOrdersList.innerHTML = `
                <div class="no-orders">
                    <i class="fas fa-history"></i>
                    <p>История заказов пуста</p>
                </div>
            `;
        } else {
            historyOrdersList.innerHTML = historyOrders.map(order => `
                <div class="order-item" data-order-id="${order.id}">
                    <div class="order-header">
                        <span class="order-number">Заказ #${order.id?.substring(0, 8) || 'N/A'}</span>
                        <span class="order-date">${formatDate(order.date || order.createdAt)}</span>
                        <span class="order-status ${getStatusClass(order.status)}">
                            ${getStatusText(order.status)}
                        </span>
                    </div>
                    <div class="order-details">
                        ${order.items ? order.items.slice(0, 2).map(item => 
                            `${item.name} × ${item.quantity}`
                        ).join(', ') : 'Детали заказа недоступны'}
                        ${order.items && order.items.length > 2 ? 
                            `, + ещё ${order.items.length - 2}` : ''}
                    </div>
                    <div class="order-total">${order.total || 0}₽</div>
                </div>
            `).join('');
        }
    }
}

// КЛАССЫ ДЛЯ СТАТУСОВ (добавить в profile.js)
function getStatusClass(status) {
    const statusMap = {
        'new': 'status-new',
        'processing': 'status-processing',
        'cooking': 'status-processing',
        'delivering': 'status-processing',
        'delivered': 'status-delivered',
        'completed': 'status-delivered',
        'cancelled': 'status-cancelled'
    };
    return statusMap[status] || 'status-processing';
}

// ТЕКСТ СТАТУСОВ (добавить в profile.js)
function getStatusText(status) {
    const statusMap = {
        'new': 'Новый',
        'processing': 'В обработке',
        'cooking': 'Готовится',
        'delivering': 'В пути',
        'delivered': 'Доставлен',
        'completed': 'Завершен',
        'cancelled': 'Отменен'
    };
    return statusMap[status] || status;
}

// ДОБАВИТЬ ОБРАБОТЧИКИ ДЛЯ АКТИВНЫХ ЗАКАЗОВ
function addActiveOrdersListeners() {
    document.querySelectorAll('.active-order-card').forEach(card => {
        card.addEventListener('click', function() {
            const orderId = this.dataset.orderId;
            showOrderDetails(orderId);
        });
    });
    
    document.querySelectorAll('.order-item[data-order-id]').forEach(item => {
        item.addEventListener('click', function() {
            const orderId = this.dataset.orderId;
            showOrderDetails(orderId);
        });
    });
}

// ДЕБАГ ФУНКЦИЯ - ПРОВЕРКА ДАННЫХ (добавить в начало функции loadProfileData)
function debugOrders(orders) {
    console.log('=== ДЕБАГ ЗАКАЗОВ ===');
    console.log('Всего заказов:', orders?.length || 0);
    
    if (orders && orders.length > 0) {
        orders.forEach((order, index) => {
            console.log(`Заказ ${index + 1}:`, {
                id: order.id,
                status: order.status,
                date: order.date,
                total: order.total,
                itemsCount: order.items?.length || 0
            });
        });
        
        // Активные статусы
        const activeStatuses = ['new', 'processing', 'cooking', 'delivering'];
        const activeOrders = orders.filter(o => activeStatuses.includes(o.status));
        console.log('Активных заказов:', activeOrders.length);
        activeOrders.forEach(order => {
            console.log('Активный заказ:', order.id, order.status);
        });
    }
}

// ОБНОВИТЬ ФУНКЦИЮ loadProfileData (добавить вызов дебага)
function loadProfileData(userDataString) {
    try {
        const user = JSON.parse(userDataString);
        
        // Основная информация
        setElementText('profile-name', user.name || 'Гость');
        setElementText('profile-phone', user.phone ? formatPhone(user.phone) : 'Не указан');
        
        // Статистика
        const ordersCount = user.orders ? user.orders.length : 0;
        const totalSpent = user.orders ? user.orders.reduce((sum, order) => sum + (order.total || 0), 0) : 0;
        const bonusPoints = user.bonuses || 0;
        
        setElementText('orders-count', ordersCount);
        setElementText('total-spent', totalSpent + '₽');
        setElementText('bonus-points', bonusPoints);
        
        // Дебаг заказов
        debugOrders(user.orders);
        
        // Личные данные
        setElementText('view-name', user.name || 'Не указано');
        setElementText('view-email', user.email || 'Не указан');
        setElementText('view-birthday', user.birthday || 'Не указана');
        
        // Бонусы
        setElementText('bonus-balance', bonusPoints);
        updateBonusProgress(bonusPoints);
        
        // Адреса
        loadAddresses(user.addresses || []);
        
        // Заказы
        loadOrders(user.orders || []);
        
        // Настройки уведомлений
        loadNotificationSettings(user.notificationSettings || {});
        
    } catch (error) {
        console.error('Ошибка загрузки профиля:', error);
        showAuthRequired();
    }
}

// Форматирование даты
function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (e) {
        return 'Дата не указана';
    }
}

// Получение класса статуса
function getStatusClass(status) {
    const statusMap = {
        'processing': 'status-processing',
        'cooking': 'status-processing',
        'delivering': 'status-processing',
        'delivered': 'status-delivered',
        'cancelled': 'status-cancelled'
    };
    return statusMap[status] || 'status-processing';
}

// Получение текста статуса
function getStatusText(status) {
    const statusMap = {
        'processing': 'В обработке',
        'cooking': 'Готовится',
        'delivering': 'Курьер в пути',
        'delivered': 'Доставлен',
        'cancelled': 'Отменен'
    };
    return statusMap[status] || status;
}

// Загрузка настроек уведомлений
function loadNotificationSettings(settings) {
    const defaultSettings = {
        notifySMS: true,
        notifyEmail: false,
        notifyPromo: true,
        notifyOrderUpdates: true
    };
    
    const finalSettings = { ...defaultSettings, ...settings };
    
    const smsCheckbox = document.getElementById('notify-sms');
    const emailCheckbox = document.getElementById('notify-email');
    const promoCheckbox = document.getElementById('notify-promo');
    const updatesCheckbox = document.getElementById('notify-order-updates');
    
    if (smsCheckbox) smsCheckbox.checked = finalSettings.notifySMS;
    if (emailCheckbox) emailCheckbox.checked = finalSettings.notifyEmail;
    if (promoCheckbox) promoCheckbox.checked = finalSettings.notifyPromo;
    if (updatesCheckbox) updatesCheckbox.checked = finalSettings.notifyOrderUpdates;
}

// Настройка обработчиков событий
function setupProfileEvents() {
    // Кнопки авторизации
    document.getElementById('login-with-phone')?.addEventListener('click', openAuthModal);
    document.getElementById('register-new')?.addEventListener('click', openAuthModal);
    
    // Выход из системы
    document.getElementById('logout-btn')?.addEventListener('click', logout);
    
    // Редактирование личных данных
    setupPersonalDataEditing();
    
    // Адреса доставки
    setupAddressManagement();
    
    // Настройки уведомлений
    document.getElementById('save-notifications')?.addEventListener('click', saveNotificationSettings);
    document.getElementById('open-history-btn')?.addEventListener('click', openHistoryModal);
    document.getElementById('open-history-btn-inline')?.addEventListener('click', openHistoryModal);
    
    // Детали заказа
    document.getElementById('close-order-details')?.addEventListener('click', closeOrderDetailsModal);
    
    // ... существующий код ...
}

// ФУНКЦИЯ ОТКРЫТИЯ ИСТОРИИ
function openHistoryModal() {
    const modal = document.getElementById('history-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    

    // УПРАВЛЕНИЕ МОДАЛЬНЫМ ОКНОМ ИСТОРИИ
    const historyModal = document.getElementById('history-modal');
    const openHistoryBtn = document.getElementById('open-history-btn');
    const closeHistoryBtn = document.getElementById('close-history-modal');

    if (openHistoryBtn && historyModal) {
        openHistoryBtn.addEventListener('click', function() {
            historyModal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Запрет прокрутки фона
        });
    }

    if (closeHistoryBtn && historyModal) {
        closeHistoryBtn.addEventListener('click', function() {
            historyModal.style.display = 'none';
            document.body.style.overflow = ''; // Возврат прокрутки
        });
    }

    // Закрытие по клику вне окна
    if (historyModal) {
        historyModal.addEventListener('click', function(e) {
            if (e.target === historyModal) {
                historyModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
}

// Открытие модального окна авторизации
function openAuthModal() {
    if (window.smsAuth) {
        window.smsAuth.openAuthModal();
    }
}

// Выход из системы
function logout() {
    if (confirm('Вы уверены, что хотите выйти?')) {
        if (window.smsAuth) {
            window.smsAuth.logout();
        } else {
            localStorage.removeItem('userData');
            window.location.reload();
        }
    }
}

// Настройка редактирования личных данных
function setupPersonalDataEditing() {
    // Кнопка редактирования
    const editToggle = document.querySelector('.edit-toggle[data-section="personal"]');
    if (editToggle) {
        editToggle.addEventListener('click', function() {
            toggleEditMode('personal', true);
        });
    }

    
    // Отмена редактирования
    const cancelEdit = document.querySelector('.cancel-edit[data-section="personal"]');
    if (cancelEdit) {
        cancelEdit.addEventListener('click', function() {
            toggleEditMode('personal', false);
        });
    }
    
    // Сохранение изменений
    const saveEdit = document.querySelector('.save-edit[data-section="personal"]');
    if (saveEdit) {
        saveEdit.addEventListener('click', savePersonalData);
    }
}

// Переключение режима редактирования
function toggleEditMode(section, showEdit = true) {
    const viewMode = document.querySelector(`#${section}-data .view-mode`);
    const editMode = document.querySelector(`#${section}-data .edit-mode`);
    
    if (viewMode && editMode) {
        if (showEdit) {
            viewMode.style.display = 'none';
            editMode.style.display = 'block';
            
            // Заполняем поля текущими значениями
            const userData = localStorage.getItem('userData');
            if (userData) {
                try {
                    const user = JSON.parse(userData);
                    document.getElementById('edit-name').value = user.name || '';
                    document.getElementById('edit-email').value = user.email || '';
                    document.getElementById('edit-birthday').value = user.birthday || '';
                } catch (error) {
                    console.error('Ошибка загрузки данных:', error);
                }
            }
        } else {
            viewMode.style.display = 'block';
            editMode.style.display = 'none';
        }
    }
}

// Сохранение личных данных
function savePersonalData() {
    const name = document.getElementById('edit-name').value.trim();
    const email = document.getElementById('edit-email').value.trim();
    const birthday = document.getElementById('edit-birthday').value;
    
    if (!name) {
        showNotification('Введите ваше имя', 'error');
        return;
    }
    
    // Обновляем данные пользователя
    const userData = localStorage.getItem('userData');
    if (userData) {
        try {
            const user = JSON.parse(userData);
            user.name = name;
            user.email = email || null;
            user.birthday = birthday || null;
            
            // Сохраняем обновленные данные
            localStorage.setItem('userData', JSON.stringify(user));
            
            // Обновляем глобальный список
            updateGlobalUsers(user);
            
            // Обновляем отображение
            document.getElementById('view-name').textContent = name;
            document.getElementById('view-email').textContent = email || 'Не указан';
            document.getElementById('view-birthday').textContent = birthday || 'Не указана';
            document.getElementById('profile-name').textContent = name;
            
            // Закрываем режим редактирования
            toggleEditMode('personal', false);
            
            // Обновляем кнопку на главной странице
            if (window.smsAuth) {
                window.smsAuth.updateAuthButtonOnMainPage(localStorage.getItem('userData'));
            }
            
            showNotification('Данные успешно сохранены!', 'success');
            
        } catch (error) {
            console.error('Ошибка сохранения данных:', error);
            showNotification('Ошибка сохранения данных', 'error');
        }
    }
}

// Настройка управления адресами
function setupAddressManagement() {
    // Добавление нового адреса
    const addAddressBtn = document.getElementById('add-new-address');
    if (addAddressBtn) {
        addAddressBtn.addEventListener('click', function() {
            const form = document.getElementById('new-address-form');
            if (form) {
                form.style.display = 'block';
                this.style.display = 'none';
                
                // ГАРАНТИЯ: Устанавливаем город Гурьевск при открытии формы
                const cityInput = document.getElementById('address-city');
                if (cityInput) {
                    cityInput.value = 'Гурьевск';
                }
            }
        });
    }
    
    // Отмена добавления адреса
    const cancelAddressBtn = document.getElementById('cancel-new-address');
    if (cancelAddressBtn) {
        cancelAddressBtn.addEventListener('click', function() {
            const form = document.getElementById('new-address-form');
            const addButton = document.getElementById('add-new-address');
            
            if (form && addButton) {
                form.style.display = 'none';
                addButton.style.display = 'block';
                resetAddressForm();
            }
        });
    }
    
    // Сохранение нового адреса
    const saveAddressBtn = document.getElementById('save-new-address');
    if (saveAddressBtn) {
        saveAddressBtn.addEventListener('click', saveNewAddress);
    }
}

// Сброс формы адреса
function resetAddressForm() {
    const fields = [
        'address-title',
        'address-search-input',
        // 'address-city', // Город не сбрасываем, он всегда Гурьевск
        'address-street',
        'address-house',
        'address-apartment',
        'address-entrance',
        'address-floor',
        'address-intercom',
        'address-comment'
    ];
    
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.value = '';
        }
    });
    
    // Принудительно ставим Гурьевск
    const cityInput = document.getElementById('address-city');
    if (cityInput) cityInput.value = 'Гурьевск';
}

// Сохранение нового адреса
// Сохранение нового адреса (ИСПРАВЛЕННАЯ ВЕРСИЯ)
function saveNewAddress() {
    const title = document.getElementById('address-title').value.trim();
    const city = 'Гурьевск'; // Город всегда Гурьевск
    const street = document.getElementById('address-street').value.trim();
    const house = document.getElementById('address-house').value.trim();
    
    console.log('Данные формы адреса:', { title, city, street, house }); // Дебаг
    
    if (!title) {
        showNotification('Введите название адреса', 'error');
        document.getElementById('address-title').focus();
        return;
    }
    
    if (!street) {
        showNotification('Введите улицу', 'error');
        document.getElementById('address-street').focus();
        return;
    }
    
    if (!house) {
        showNotification('Введите номер дома', 'error');
        document.getElementById('address-house').focus();
        return;
    }
    
    const userData = localStorage.getItem('userData');
    if (!userData) {
        showNotification('Ошибка: пользователь не авторизован', 'error');
        return;
    }
    
    try {
        const user = JSON.parse(userData);
        
        // Формируем полный адрес
        const apartment = document.getElementById('address-apartment').value.trim();
        let fullAddress = `${city}, ${street}, д. ${house}`;
        if (apartment) {
            fullAddress += `, кв. ${apartment}`;
        }
        
        console.log('Создаваемый адрес:', { fullAddress, city, street, house, apartment }); // Дебаг
        
        const newAddress = {
            id: Date.now(),
            title: title,
            fullAddress: fullAddress,
            city: city,
            street: street,
            house: house,
            apartment: apartment || null,
            entrance: document.getElementById('address-entrance').value.trim() || null,
            floor: document.getElementById('address-floor').value.trim() || null,
            intercom: document.getElementById('address-intercom').value.trim() || null,
            comment: document.getElementById('address-comment').value.trim() || null,
            isDefault: !user.addresses || user.addresses.length === 0,
            createdAt: new Date().toISOString()
        };
        
        console.log('Новый адрес для сохранения:', newAddress); // Дебаг
        
        user.addresses = user.addresses || [];
        user.addresses.push(newAddress);
        
        // Сохраняем обновленные данные
        localStorage.setItem('userData', JSON.stringify(user));
        
        // Обновляем глобальный список
        updateGlobalUsers(user);
        
        // Обновляем отображение
        loadAddresses(user.addresses);
        
        // Обновляем адрес в корзине
        if (window.smsAuth) {
            window.smsAuth.updateCartAddress(localStorage.getItem('userData'));
        }
        
        // Скрываем форму и показываем кнопку
        const form = document.getElementById('new-address-form');
        const addButton = document.getElementById('add-new-address');
        
        if (form && addButton) {
            form.style.display = 'none';
            addButton.style.display = 'block';
        }
        
        resetAddressForm();
        
        showNotification('Адрес успешно сохранен!', 'success');
        
    } catch (error) {
        console.error('Ошибка сохранения адреса:', error);
        showNotification('Ошибка сохранения адреса', 'error');
    }
}

// Сохранение настроек уведомлений
function saveNotificationSettings() {
    const settings = {
        notifySMS: document.getElementById('notify-sms').checked,
        notifyEmail: document.getElementById('notify-email').checked,
        notifyPromo: document.getElementById('notify-promo').checked,
        notifyOrderUpdates: document.getElementById('notify-order-updates').checked
    };
    
    const userData = localStorage.getItem('userData');
    if (userData) {
        try {
            const user = JSON.parse(userData);
            user.notificationSettings = settings;
            localStorage.setItem('userData', JSON.stringify(user));
            
            // Обновляем глобальный список
            updateGlobalUsers(user);
            
            showNotification('Настройки уведомлений сохранены!', 'success');
            
        } catch (error) {
            console.error('Ошибка сохранения настроек:', error);
            showNotification('Ошибка сохранения настроек', 'error');
        }
    }
}

// Загрузка количества товаров в корзине
function loadCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = count;
    }
}

// Показать уведомление
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 
                           type === 'error' ? 'exclamation-circle' : 
                           'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
// yandex-maps.js
document.addEventListener('DOMContentLoaded', function() {
    // Ждем загрузки API Яндекс Карт
    if (typeof ymaps !== 'undefined') {
        ymaps.ready(init);
    } else {
        console.warn('Yandex Maps API не загружен');
    }
});

function init() {
    console.log('Yandex Maps API готов к использованию');
    
    // Инициализация карт будет происходить в profile.js
    window.yamapsReady = true;
}
// ЗАМЕНИТЬ СУЩЕСТВУЮЩУЮ ФУНКЦИЮ startOrdersAutoRefresh
function startOrdersAutoRefresh() {
    setInterval(() => {
        try {
            // Получаем текущие данные пользователя
            const currentUserDataStr = localStorage.getItem('userData');
            if (!currentUserDataStr) return;
            
            const currentUser = JSON.parse(currentUserDataStr);
            const userPhone = currentUser.phone;
            
            // Получаем актуальные данные из глобального хранилища
            const globalUsersStr = localStorage.getItem('ksushi_users');
            if (!globalUsersStr) return;
            
            const globalUsers = JSON.parse(globalUsersStr);
            const updatedUser = globalUsers.find(user => user.phone === userPhone);
            
            if (updatedUser && updatedUser.orders) {
                // Обновляем локальные данные пользователя
                currentUser.orders = updatedUser.orders;
                if (updatedUser.bonuses !== undefined) {
                    currentUser.bonuses = updatedUser.bonuses;
                }
                localStorage.setItem('userData', JSON.stringify(currentUser));
                
                // Обновляем статистику
                const ordersCount = updatedUser.orders.length;
                const totalSpent = updatedUser.orders.reduce((sum, order) => sum + (order.total || 0), 0);
                const bonusPoints = updatedUser.bonuses || 0;
                
                setElementText('orders-count', ordersCount);
                setElementText('total-spent', `${totalSpent}₽`);
                setElementText('bonus-points', bonusPoints);
                setElementText('bonus-balance', bonusPoints);
                updateBonusProgress(bonusPoints);
                
                // Обновляем разделы заказов
                loadOrders(updatedUser.orders);
            }
        } catch (error) {
            console.error('Ошибка автообновления заказов:', error);
        }
    }, 10000); // Обновлять каждые 30 секунд
}

// УДАЛИТЬ ДУБЛИРУЮЩИЙСЯ ОБРАБОТЧИК В НАЧАЛЕ ФАЙЛА
// Найти и удалить этот блок в самом начале profile.js:
/*
document.addEventListener('DOMContentLoaded', function() {
    checkAuthAndLoadProfile();
    setupProfileEvents();
    loadCartCount();
});
*/

// УБЕДИТЬСЯ, ЧТО В КОНЦЕ ФАЙЛА ЕСТЬ КОРРЕКТНЫЙ ОБРАБОТЧИК
// В конце файла должен остаться ТОЛЬКО этот блок:
document.addEventListener('DOMContentLoaded', function() {
    checkAuthAndLoadProfile();
    setupProfileEvents();
    loadCartCount();
    startOrdersAutoRefresh(); // Ключевая строка для запуска автообновления
});

// ВЫЗВАТЬ В init ИЛИ DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    checkAuthAndLoadProfile();
    setupProfileEvents();
    loadCartCount();
    startOrdersAutoRefresh(); // Добавить эту строку
});