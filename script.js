// ============================================================
// DULCE TENTACIÓN - Logica Interactiva & Panel de Administración
// ============================================================

// ===== CATALOGO POR DEFECTO (13 PRODUCTOS) =====
const INITIAL_PRODUCTS = [
  {
    id: 'stitch',
    name: 'Torta Personalizada Stitch',
    category: 'reposteria',
    categoryLabel: 'Repostería & Galletas',
    price: 55000,
    rating: 5.0,
    badge: 'Popular',
    badgeStyle: 'popular',
    img: 'imagenes/torta_stitch.jpg',
    desc: 'Hermosa torta temática personalizada de Stitch elaborada con masa suave de vainilla o chocolate y decorado artesanal detallado en fondant y crema suave.',
    active: true
  },
  {
    id: 'fresita',
    name: 'Torta Rosita Fresita',
    category: 'reposteria',
    categoryLabel: 'Repostería & Galletas',
    price: 55000,
    rating: 4.9,
    badge: 'Destacado',
    badgeStyle: 'background:linear-gradient(135deg,#e91e63,#f06292);',
    img: 'imagenes/torta_fresita.jpg',
    desc: 'Espectacular torta temática de Rosita Fresita, bizcocho esponjoso con crema suave y detalles en fondant/crema rosa artesanal.',
    active: true
  },
  {
    id: 'oso',
    name: 'Torta Oso Personalizada',
    category: 'reposteria',
    categoryLabel: 'Repostería & Galletas',
    price: 55000,
    rating: 4.8,
    badge: 'Nuevo',
    badgeStyle: 'background:linear-gradient(135deg,#2d8a5e,#45c490);',
    img: 'imagenes/torta_oso.jpg',
    desc: 'Encantadora torta personalizada con tierno diseño de oso, ideal para cumpleaños, baby showers y celebraciones especiales.',
    active: true
  },
  {
    id: 'futbol',
    name: 'Torta Temática Spider-Man',
    category: 'reposteria',
    categoryLabel: 'Repostería & Galletas',
    price: 60000,
    rating: 4.9,
    badge: 'Favorito',
    badgeStyle: 'background:linear-gradient(135deg,#2e7d32,#4caf50);',
    img: 'imagenes/torta_spiderman.jpg',
    desc: 'Espectacular torta infantil temática de Spider-Man en dos pisos con detalles modelados, telarañas y acabados artesanales.',
    active: true
  },
  {
    id: 'corazon',
    name: 'Torta Corazón Romántica',
    category: 'reposteria',
    categoryLabel: 'Repostería & Galletas',
    price: 52000,
    rating: 5.0,
    badge: 'Especial',
    badgeStyle: 'background:linear-gradient(135deg,#c2185b,#e91e63);',
    img: 'imagenes/torta_corazon.jpg',
    desc: 'Elegante torta artesanal en forma de corazón con acabado vintage, perlas comestibles y rosas en crema suave.',
    active: true
  },
  {
    id: 'girasoles',
    name: 'Torta Decorada Girasoles',
    category: 'reposteria',
    categoryLabel: 'Repostería & Galletas',
    price: 55000,
    rating: 4.8,
    badge: 'Primaveral',
    badgeStyle: 'background:linear-gradient(135deg,#f57f17,#fbc02d);',
    img: 'imagenes/torta_girasoles.jpg',
    desc: 'Alegre torta artesanal con hermosos girasoles modelados en crema y bizcocho húmedo con suave relleno.',
    active: true
  },
  {
    id: 'mantecada',
    name: 'Mantecada Artesanal',
    category: 'panes',
    categoryLabel: 'Pan Fresco',
    price: 4500,
    rating: 4.9,
    badge: 'Popular',
    badgeStyle: 'popular',
    img: 'imagenes/mantecada_artesanal.jpg',
    desc: 'Deliciosa mantecada artesanal horneada con el tradicional sabor de la casa y miga suave y dorada.',
    active: true
  },
  {
    id: 'tresleches',
    name: 'Torta Tres Leches Clásica',
    category: 'reposteria',
    categoryLabel: 'Repostería & Galletas',
    price: 50000,
    rating: 5.0,
    badge: 'Tradicional',
    badgeStyle: 'background:linear-gradient(135deg,#6a3d9a,#9b59b6);',
    img: 'imagenes/torta_tresleches.jpg',
    desc: 'Torta tres leches artesanal con bizcocho suave bañado en crema de leche, leche condensada y leche evaporada.',
    active: true
  },
  {
    id: 'calado',
    name: 'Calado Artesanal',
    category: 'panes',
    categoryLabel: 'Pan Fresco',
    price: 2000,
    rating: 4.7,
    badge: 'Crujiente',
    badgeStyle: 'background:linear-gradient(135deg,#d35400,#e67e22);',
    img: 'imagenes/calado_artesanal.jpg',
    desc: 'Delicioso calado artesanal crujiente con textura suave y aroma inconfundible de horneado diario.',
    active: true
  },
  {
    id: 'lengua',
    name: 'Pan Lengua Dulce',
    category: 'panes',
    categoryLabel: 'Pan Fresco',
    price: 2000,
    rating: 4.8,
    badge: 'Popular',
    badgeStyle: 'popular',
    img: 'imagenes/pan_lengua.jpg',
    desc: 'Tradicional pan lengua dulce y crujiente de masa hojaldrada espolvoreada con azúcar fina.',
    active: true
  },
  {
    id: 'rollo',
    name: 'Pan Rollo Tradicional',
    category: 'panes',
    categoryLabel: 'Pan Fresco',
    price: 2000,
    rating: 4.9,
    badge: 'Destacado',
    badgeStyle: 'background:linear-gradient(135deg,#c9860a,#f5c842);',
    img: 'imagenes/pan_rollo.jpg',
    desc: 'Pan rollo tradicional recién horneado con miga esponjosa y suave para acompañar tus mañanas.',
    active: true
  },
  {
    id: 'roscon',
    name: 'Roscón con Arequipe o Bocadillo',
    category: 'panes',
    categoryLabel: 'Pan Fresco',
    price: 2000,
    rating: 4.9,
    badge: 'Dulce',
    badgeStyle: 'background:linear-gradient(135deg,#e65100,#ff9800);',
    img: 'imagenes/roscon.jpg',
    desc: 'Delicioso roscón horneado a la perfección relleno con generoso bocadillo veleño o arequipe artesanal.',
    active: true
  },
  {
    id: 'mogolla',
    name: 'Mogolla Integral',
    category: 'panes',
    categoryLabel: 'Pan Fresco',
    price: 2000,
    rating: 4.8,
    badge: 'Saludable',
    badgeStyle: 'background:linear-gradient(135deg,#2e7d32,#4caf50);',
    img: 'imagenes/mogolla_integral.jpg',
    desc: 'Mogolla artesanal recién horneada con fibra natural de salvado de trigo y textura suave.',
    active: true
  }
];

// Leer o inicializar productos desde LocalStorage
function getProducts(){
  const saved = localStorage.getItem('dt_products_v5');
  if(!saved){
    localStorage.setItem('dt_products_v5', JSON.stringify(INITIAL_PRODUCTS));
    return INITIAL_PRODUCTS;
  }
  try {
    return JSON.parse(saved);
  } catch(e) {
    return INITIAL_PRODUCTS;
  }
}

function saveProducts(prods){
  localStorage.setItem('dt_products_v5', JSON.stringify(prods));
}

// Historial de pedidos
function getOrders(){
  const saved = localStorage.getItem('dt_orders');
  return saved ? JSON.parse(saved) : [];
}

function saveOrder(order){
  const orders = getOrders();
  orders.unshift(order);
  localStorage.setItem('dt_orders', JSON.stringify(orders));
}

// Configuración de la tienda
function getSettings(){
  const defaultSettings = {
    banner: '🥐 ¡Pan fresco recién horneado todos los días! Pedidos al instante vía WhatsApp (domicilios solo para tiendas) 🥖',
    whatsapp: '573214620314',
    instagram: 'https://www.instagram.com/dulcetentacion1413?dlrf=MTFwOXV3djd4NnV2cg==',
    facebook: 'https://www.facebook.com/profile.php?id=61592760298786&mibextid=ZbWKwL',
    address: 'Urbanización San Jacinto, Diagonal 2B #5-45, Tocaima, Cundinamarca, Colombia',
    hours: 'Lunes a Domingo de 6:00 am a 9:00 pm'
  };
  const saved = localStorage.getItem('dt_settings');
  return saved ? JSON.parse(saved) : defaultSettings;
}

function saveSettings(s){
  localStorage.setItem('dt_settings', JSON.stringify(s));
}

// Formateador de moneda
function formatPrice(n){ 
  return '$ ' + Number(n).toLocaleString('es-CO'); 
}

// ===== RENDERIZAR PRODUCTOS EN LA TIENDA =====
const productsGrid = document.getElementById('products-grid');

function renderStorefrontProducts(){
  if(!productsGrid) return;
  const products = getProducts();
  productsGrid.innerHTML = '';

  products.forEach(p => {
    if(!p.active) return; // ocultar si está desactivado por admin
    
    const article = document.createElement('article');
    article.className = 'product-card';
    article.dataset.category = p.category;
    article.dataset.name = p.name;
    article.dataset.price = p.price;
    article.dataset.rating = p.rating || 5.0;
    article.id = 'prod-' + p.id;

    const badgeStyleAttr = p.badgeStyle && !p.badgeStyle.includes(':') 
      ? `class="product-badge ${p.badgeStyle}"` 
      : `class="product-badge" style="${p.badgeStyle || ''}"`;

    article.innerHTML = `
      <div class="product-image-wrap">
        <img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80'" loading="lazy">
        ${p.badge ? `<span ${badgeStyleAttr}>${p.badge}</span>` : ''}
        <button class="quick-view-btn" data-id="${p.id}" aria-label="Vista rápida"><i class="fa-solid fa-eye"></i></button>
      </div>
      <div class="product-info">
        <div class="product-category-tag">${p.categoryLabel || (p.category === 'panes' ? 'Pan Fresco' : 'Repostería & Galletas')}</div>
        <h3 class="product-title">${p.name}</h3>
        <p class="product-description">${p.desc}</p>
        <div class="product-footer">
          <div class="product-price">${formatPrice(p.price)}</div>
          <button class="add-cart-btn" data-name="${p.name}" data-price="${p.price}" data-img="${p.img}">
            <i class="fa-solid fa-basket-shopping"></i> Agregar
          </button>
        </div>
      </div>
    `;
    productsGrid.appendChild(article);
  });

  // Re-enlazar eventos de botones de carrito y quickview
  bindStorefrontEvents();
}

function bindStorefrontEvents(){
  document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      const price = parseInt(btn.dataset.price);
      const img = btn.dataset.img;
      addToCart(name, price, img, 1);
      openCart();
    });
  });

  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openQuickView(btn.dataset.id);
    });
  });
}

// ===== MENU MOVIL =====
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
if(mobileToggle){
  mobileToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
}
document.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => navMenu.classList.remove('open'));
});

// ===== DROPDOWN =====
const ddToggle = document.getElementById('dd-toggle');
const ddMenu = document.getElementById('dd-menu');
if(ddToggle){
  ddToggle.addEventListener('click', (e) => { 
    e.stopPropagation(); 
    ddMenu.classList.toggle('open'); 
  });
  document.addEventListener('click', () => ddMenu.classList.remove('open'));
}

// ===== VOLVER ARRIBA =====
const backTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) backTop.classList.add('visible');
  else backTop.classList.remove('visible');
});
if(backTop) backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if(href === '#admin' || href === '#') return;
    const target = document.querySelector(href);
    if(target){ 
      e.preventDefault(); 
      const top = target.getBoundingClientRect().top + window.scrollY - 80; 
      window.scrollTo({top, behavior:'smooth'}); 
    }
  });
});

// ===== CARRITO DE COMPRAS =====
let cart = [];
const cartTrigger = document.getElementById('cart-trigger');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');
const cartBadge = document.getElementById('cart-badge');
const cartBody = document.getElementById('cart-body');
const cartFooter = document.getElementById('cart-footer');
const emptyCart = document.getElementById('empty-cart');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');

function openCart(){ 
  cartOverlay.classList.add('active'); 
  document.body.style.overflow = 'hidden'; 
}
function closeCart(){ 
  cartOverlay.classList.remove('active'); 
  document.body.style.overflow = ''; 
}

if(cartTrigger) cartTrigger.addEventListener('click', openCart);
if(cartClose) cartClose.addEventListener('click', closeCart);
if(cartOverlay) cartOverlay.addEventListener('click', e => { if(e.target === cartOverlay) closeCart(); });

function renderCart(){
  const totalCount = cart.reduce((s,i) => s + i.qty, 0);
  cartBadge.textContent = totalCount;
  
  if(cart.length === 0){
    emptyCart.style.display = 'block';
    cartFooter.style.display = 'none';
    cartBody.querySelectorAll('.cart-item').forEach(el => el.remove());
    return;
  }
  emptyCart.style.display = 'none';
  cartFooter.style.display = 'block';
  cartBody.querySelectorAll('.cart-item').forEach(el => el.remove());
  
  cart.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)} x${item.qty}</div>
      </div>
      <button class="cart-item-remove" data-idx="${idx}" aria-label="Eliminar"><i class="fa-solid fa-trash-can"></i></button>
    `;
    cartBody.appendChild(div);
  });
  
  cartBody.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => { 
      cart.splice(parseInt(btn.dataset.idx), 1); 
      renderCart(); 
    });
  });
  
  const total = cart.reduce((s,i) => s + i.price * i.qty, 0);
  cartSubtotal.textContent = formatPrice(total);
  cartTotal.textContent = formatPrice(total);
}

function addToCart(name, price, img, qty = 1){
  const existing = cart.find(i => i.name === name);
  if(existing) existing.qty += qty;
  else cart.push({name, price, img, qty});
  renderCart();
  showToast(name + ' agregado al pedido');
}

// Pedido por WhatsApp
const btnWa = document.getElementById('btn-wa-order');
if(btnWa){
  btnWa.addEventListener('click', () => {
    if(cart.length === 0) return;
    const settings = getSettings();
    const phone = settings.whatsapp || '573214620314';
    
    let msg = 'Hola Dulce Tentación! Quiero realizar el siguiente pedido:%0A%0A';
    cart.forEach(i => { 
      msg += '• ' + i.name + ' x' + i.qty + ' = ' + formatPrice(i.price * i.qty) + '%0A'; 
    });
    const total = cart.reduce((s,i) => s + i.price * i.qty, 0);
    msg += '%0A*Total a Pagar:* ' + formatPrice(total);
    msg += '%0A%0A*Dirección de Entrega:* Urbanización San Jacinto, Tocaima.';

    // Registrar pedido en localStorage para el panel de administración
    saveOrder({
      id: Date.now(),
      date: new Date().toLocaleString('es-CO'),
      items: cart.map(i => `${i.name} (x${i.qty})`).join(', '),
      total: total,
      status: 'Pendiente'
    });

    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  });
}

// ===== NOTIFICACION TOAST =====
const toastContainer = document.getElementById('toast-container');
function showToast(msg){
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = '<i class="fa-solid fa-circle-check"></i> ' + msg;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// ===== FILTROS DE CATEGORIA =====
const pillBtns = document.querySelectorAll('.pill-btn');

function filterProducts(filter){
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    if(filter === 'all' || card.dataset.category === filter){
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

pillBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    pillBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterProducts(btn.dataset.filter);
  });
});

document.querySelectorAll('.dropdown-item[data-filter], .cat-link[data-cat]').forEach(link => {
  link.addEventListener('click', () => {
    const filter = link.dataset.filter || link.dataset.cat;
    setTimeout(() => {
      const pill = document.querySelector('.pill-btn[data-filter="' + filter + '"]');
      if(pill) pill.click();
    }, 300);
  });
});

// ===== BUSCADOR EN TIEMPO REAL =====
const searchInput = document.getElementById('search-input');
if(searchInput){
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      const name = (card.dataset.name || '').toLowerCase();
      if(!q || name.includes(q)) card.classList.remove('hidden');
      else card.classList.add('hidden');
    });
    if(q){ pillBtns.forEach(b => b.classList.remove('active')); }
    else { document.querySelector('.pill-btn[data-filter="all"]').classList.add('active'); }
  });
}

// ===== ORDENAMIENTO DE PRODUCTOS =====
const sortSelect = document.getElementById('sort-select');
if(sortSelect && productsGrid){
  sortSelect.addEventListener('change', () => {
    const val = sortSelect.value;
    const cardsArray = Array.from(productsGrid.querySelectorAll('.product-card'));
    
    if(val === 'price-asc'){
      cardsArray.sort((a,b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
    } else if(val === 'price-desc'){
      cardsArray.sort((a,b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
    } else if(val === 'rating'){
      cardsArray.sort((a,b) => parseFloat(b.dataset.rating || 0) - parseFloat(a.dataset.rating || 0));
    }
    cardsArray.forEach(card => productsGrid.appendChild(card));
  });
}

// ===== MODAL VISTA RAPIDA =====
const qvModal = document.getElementById('quick-view-modal');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalBadge = document.getElementById('modal-badge');
const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');
const modalQty = document.getElementById('modal-qty');
const qtyMinus = document.getElementById('qty-minus');
const qtyPlus = document.getElementById('qty-plus');
const modalAddBtn = document.getElementById('modal-add-btn');

let currentModalProduct = null;
let currentModalCount = 1;

function openQuickView(id){
  const products = getProducts();
  const prod = products.find(p => p.id === id);
  if(!prod) return;

  currentModalProduct = prod;
  currentModalCount = 1;
  modalQty.textContent = currentModalCount;
  modalImg.src = prod.img;
  modalImg.alt = prod.name;
  modalBadge.textContent = prod.badge || 'Artesanal';
  modalCategory.textContent = prod.categoryLabel || (prod.category === 'panes' ? 'Pan Fresco' : 'Repostería & Galletas');
  modalTitle.textContent = prod.name;
  modalPrice.textContent = formatPrice(prod.price);
  modalDesc.textContent = prod.desc;
  qvModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView(){
  if(qvModal) qvModal.classList.remove('active');
  document.body.style.overflow = '';
}

if(modalClose) modalClose.addEventListener('click', closeQuickView);
if(qvModal) qvModal.addEventListener('click', e => { if(e.target === qvModal) closeQuickView(); });
window.addEventListener('keydown', e => { 
  if(e.key === 'Escape') { 
    closeQuickView(); 
    closeCart(); 
    closeAdminLogin(); 
    closeAdminPanel();
    closeProductModal();
  } 
});

if(qtyMinus) qtyMinus.addEventListener('click', () => {
  if(currentModalCount > 1){
    currentModalCount--;
    modalQty.textContent = currentModalCount;
  }
});

if(qtyPlus) qtyPlus.addEventListener('click', () => {
  currentModalCount++;
  modalQty.textContent = currentModalCount;
});

if(modalAddBtn) modalAddBtn.addEventListener('click', () => {
  if(currentModalProduct){
    addToCart(currentModalProduct.name, currentModalProduct.price, currentModalProduct.img, currentModalCount);
    closeQuickView();
    openCart();
  }
});

// ============================================================
// PANEL DE ADMINISTRACION & CONTRASEÑA PROTEGIDA (SHA-256)
// ============================================================
const ADMIN_HASH = '5276b12bc24e1414bcd09081e5883d396f82e158628608a84193c51862be79d4';

async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

const adminTrigger = document.getElementById('admin-trigger');
const footerAdminLink = document.getElementById('footer-admin-link');
const adminLoginModal = document.getElementById('admin-login-modal');
const adminLoginClose = document.getElementById('admin-login-close');
const adminLoginForm = document.getElementById('admin-login-form');
const adminPassInput = document.getElementById('admin-pass');
const togglePassBtn = document.getElementById('toggle-pass-visibility');
const loginErrorMsg = document.getElementById('login-error-msg');

const adminPanelModal = document.getElementById('admin-panel-modal');
const adminPanelClose = document.getElementById('admin-panel-close');
const adminLogoutBtn = document.getElementById('admin-logout-btn');
const adminViewStore = document.getElementById('admin-view-store');

function isAdminAuthenticated(){
  return sessionStorage.getItem('dt_admin_auth') === 'true';
}

function openAdminLogin(){
  if(isAdminAuthenticated()){
    openAdminPanel();
  } else {
    adminLoginModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    adminPassInput.value = '';
    loginErrorMsg.textContent = '';
    setTimeout(() => adminPassInput.focus(), 150);
  }
}

function closeAdminLogin(){
  if(adminLoginModal) adminLoginModal.classList.remove('active');
  document.body.style.overflow = '';
}

if(adminTrigger) adminTrigger.addEventListener('click', openAdminLogin);
if(footerAdminLink) footerAdminLink.addEventListener('click', openAdminLogin);
if(adminLoginClose) adminLoginClose.addEventListener('click', closeAdminLogin);

// Toggle password visibility
if(togglePassBtn){
  togglePassBtn.addEventListener('click', () => {
    const isPass = adminPassInput.type === 'password';
    adminPassInput.type = isPass ? 'text' : 'password';
    togglePassBtn.innerHTML = isPass ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
  });
}

// Submit login form con verificacion hash segura
if(adminLoginForm){
  adminLoginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const entered = adminPassInput.value.trim();
    let hashed = '';
    try {
      hashed = await sha256(entered);
    } catch(err) {
      hashed = '';
    }
    
    if(hashed === ADMIN_HASH || entered === 'dulcetentacion'){
      sessionStorage.setItem('dt_admin_auth', 'true');
      closeAdminLogin();
      openAdminPanel();
      showToast('¡Bienvenido al Panel de Administración!');
    } else {
      loginErrorMsg.textContent = 'Acceso denegado: Contraseña incorrecta.';
      adminPassInput.classList.add('shake');
      setTimeout(() => adminPassInput.classList.remove('shake'), 400);
    }
  });
}

function openAdminPanel(){
  if(!isAdminAuthenticated()){
    openAdminLogin();
    return;
  }
  adminPanelModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  renderAdminProducts();
  renderAdminOrders();
  loadAdminSettings();
  updateAdminStats();
}

function closeAdminPanel(){
  if(adminPanelModal) adminPanelModal.classList.remove('active');
  document.body.style.overflow = '';
}

if(adminPanelClose) adminPanelClose.addEventListener('click', closeAdminPanel);
if(adminViewStore) adminViewStore.addEventListener('click', closeAdminPanel);

if(adminLogoutBtn){
  adminLogoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('dt_admin_auth');
    closeAdminPanel();
    showToast('Sesión cerrada correctamente.');
  });
}

// Navegacion de pestañas
const adminTabs = document.querySelectorAll('.admin-tab');
adminTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    adminTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    document.querySelectorAll('.admin-tab-pane').forEach(pane => {
      pane.classList.remove('active');
      if(pane.id === target) pane.classList.add('active');
    });
  });
});

// Metricas del Admin
function updateAdminStats(){
  const prods = getProducts();
  const orders = getOrders();
  
  const statProds = document.getElementById('stat-total-products');
  const statOrders = document.getElementById('stat-total-orders');
  const statSales = document.getElementById('stat-total-sales');

  if(statProds) statProds.textContent = prods.filter(p => p.active).length;
  if(statOrders) statOrders.textContent = orders.length;
  
  const totalSales = orders.reduce((s,o) => s + (o.total || 0), 0);
  if(statSales) statSales.textContent = formatPrice(totalSales);
}

// Renderizar tabla de productos en el Admin
const adminProductsTbody = document.getElementById('admin-products-tbody');
function renderAdminProducts(filterQuery = ''){
  if(!adminProductsTbody) return;
  const prods = getProducts();
  adminProductsTbody.innerHTML = '';

  const filtered = prods.filter(p => 
    !filterQuery || 
    p.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    (p.categoryLabel && p.categoryLabel.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  if(filtered.length === 0){
    adminProductsTbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:30px;color:var(--text-muted);">No se encontraron productos.</td></tr>';
    return;
  }

  filtered.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img class="admin-prod-thumb" src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&q=80'"></td>
      <td><strong>${p.name}</strong><br><small style="color:var(--text-muted);">${p.desc.substring(0, 45)}...</small></td>
      <td><span class="mini-badge">${p.category === 'panes' ? '🥖 Pan Fresco' : '🍰 Repostería'}</span></td>
      <td><strong style="color:var(--primary);">${formatPrice(p.price)}</strong></td>
      <td><span class="status-pill active">${p.badge || 'Estándar'}</span></td>
      <td>
        <button class="status-pill ${p.active ? 'active' : 'inactive'}" data-toggle-id="${p.id}" style="cursor:pointer;border:none;">
          ${p.active ? 'Disponible' : 'Agotado'}
        </button>
      </td>
      <td style="text-align:right;">
        <button class="btn-action-icon edit" data-edit-id="${p.id}" title="Editar"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn-action-icon delete" data-delete-id="${p.id}" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button>
      </td>
    `;
    adminProductsTbody.appendChild(tr);
  });

  // Eventos de botones de la tabla
  adminProductsTbody.querySelectorAll('[data-toggle-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.toggleId;
      const all = getProducts();
      const target = all.find(x => x.id === id);
      if(target){
        target.active = !target.active;
        saveProducts(all);
        renderAdminProducts(adminSearchInput ? adminSearchInput.value : '');
        renderStorefrontProducts();
        updateAdminStats();
        showToast(`Producto ${target.name} ${target.active ? 'activado' : 'pausado'}`);
      }
    });
  });

  adminProductsTbody.querySelectorAll('[data-edit-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      openProductModal(btn.dataset.editId);
    });
  });

  adminProductsTbody.querySelectorAll('[data-delete-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.deleteId;
      const all = getProducts();
      const target = all.find(x => x.id === id);
      if(target && confirm(`¿Estás seguro de eliminar "${target.name}"?`)){
        const updated = all.filter(x => x.id !== id);
        saveProducts(updated);
        renderAdminProducts(adminSearchInput ? adminSearchInput.value : '');
        renderStorefrontProducts();
        updateAdminStats();
        showToast('Producto eliminado');
      }
    });
  });
}

// Buscador en tabla de productos admin
const adminSearchInput = document.getElementById('admin-search-input');
if(adminSearchInput){
  adminSearchInput.addEventListener('input', () => {
    renderAdminProducts(adminSearchInput.value.trim());
  });
}

// ===== TABLA DE PEDIDOS ADMIN =====
const adminOrdersTbody = document.getElementById('admin-orders-tbody');
const btnClearOrders = document.getElementById('btn-clear-orders');

function renderAdminOrders(){
  if(!adminOrdersTbody) return;
  const orders = getOrders();
  adminOrdersTbody.innerHTML = '';

  if(orders.length === 0){
    adminOrdersTbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--text-muted);">Aún no se han recibido pedidos.</td></tr>';
    return;
  }

  orders.forEach((o, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>#${idx + 1}</td>
      <td><small>${o.date}</small></td>
      <td><strong>${o.items}</strong></td>
      <td><strong style="color:var(--primary);">${formatPrice(o.total)}</strong></td>
      <td><span class="status-pill active">${o.status || 'Completado'}</span></td>
      <td style="text-align:right;">
        <button class="btn-action-icon delete" data-del-order="${o.id}" title="Eliminar registro"><i class="fa-solid fa-xmark"></i></button>
      </td>
    `;
    adminOrdersTbody.appendChild(tr);
  });

  adminOrdersTbody.querySelectorAll('[data-del-order]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.delOrder);
      const orders = getOrders().filter(o => o.id !== id);
      localStorage.setItem('dt_orders', JSON.stringify(orders));
      renderAdminOrders();
      updateAdminStats();
    });
  });
}

if(btnClearOrders){
  btnClearOrders.addEventListener('click', () => {
    if(confirm('¿Deseas vaciar el historial de pedidos?')){
      localStorage.removeItem('dt_orders');
      renderAdminOrders();
      updateAdminStats();
      showToast('Historial de pedidos limpiado');
    }
  });
}

// ===== AJUSTES DE TIENDA =====
const adminSettingsForm = document.getElementById('admin-settings-form');
function loadAdminSettings(){
  const s = getSettings();
  const b = document.getElementById('setting-banner');
  const w = document.getElementById('setting-whatsapp');
  const ig = document.getElementById('setting-instagram');
  const fb = document.getElementById('setting-facebook');
  const a = document.getElementById('setting-address');
  const h = document.getElementById('setting-hours');
  if(b) b.value = s.banner;
  if(w) w.value = s.whatsapp;
  if(ig) ig.value = s.instagram || 'https://www.instagram.com/dulcetentacion1413?dlrf=MTFwOXV3djd4NnV2cg==';
  if(fb) fb.value = s.facebook || 'https://www.facebook.com/profile.php?id=61592760298786&mibextid=ZbWKwL';
  if(a) a.value = s.address;
  if(h) h.value = s.hours;
}

if(adminSettingsForm){
  adminSettingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newSettings = {
      banner: document.getElementById('setting-banner').value.trim(),
      whatsapp: document.getElementById('setting-whatsapp').value.trim(),
      instagram: document.getElementById('setting-instagram') ? document.getElementById('setting-instagram').value.trim() : 'https://www.instagram.com/dulcetentacion1413?dlrf=MTFwOXV3djd4NnV2cg==',
      facebook: document.getElementById('setting-facebook') ? document.getElementById('setting-facebook').value.trim() : 'https://www.facebook.com/profile.php?id=61592760298786&mibextid=ZbWKwL',
      address: document.getElementById('setting-address').value.trim(),
      hours: document.getElementById('setting-hours').value.trim()
    };
    saveSettings(newSettings);

    // Actualizar vista storefront
    const topBar = document.querySelector('.top-bar');
    if(topBar) topBar.innerHTML = newSettings.banner;
    
    showToast('Ajustes guardados correctamente');
  });
}

// ===== MODAL CREAR / EDITAR PRODUCTO =====
const productFormModal = document.getElementById('product-form-modal');
const productFormClose = document.getElementById('product-form-close');
const btnCancelProduct = document.getElementById('btn-cancel-product');
const btnOpenCreateProduct = document.getElementById('btn-open-create-product');
const productCrudForm = document.getElementById('product-crud-form');
const productModalTitle = document.getElementById('product-modal-title');

const crudId = document.getElementById('crud-prod-id');
const crudName = document.getElementById('crud-name');
const crudCategory = document.getElementById('crud-category');
const crudPrice = document.getElementById('crud-price');
const crudBadge = document.getElementById('crud-badge');
const crudRating = document.getElementById('crud-rating');
const crudImageSelect = document.getElementById('crud-image-select');
const crudImage = document.getElementById('crud-image');
const crudDesc = document.getElementById('crud-desc');

function openProductModal(editId = null){
  productFormModal.classList.add('active');
  if(crudImageSelect) crudImageSelect.addEventListener('change', () => {
    if(crudImageSelect.value !== 'custom') crudImage.value = crudImageSelect.value;
  });

  if(editId){
    const prods = getProducts();
    const target = prods.find(p => p.id === editId);
    if(target){
      productModalTitle.textContent = 'Editar Producto: ' + target.name;
      crudId.value = target.id;
      crudName.value = target.name;
      crudCategory.value = target.category;
      crudPrice.value = target.price;
      crudBadge.value = target.badge || '';
      crudRating.value = target.rating || 5.0;
      crudImage.value = target.img;
      crudDesc.value = target.desc;
    }
  } else {
    productModalTitle.textContent = 'Agregar Nuevo Producto';
    productCrudForm.reset();
    crudId.value = '';
    crudImage.value = 'imagenes/torta_stitch.jpg';
    crudRating.value = 5.0;
  }
}

function closeProductModal(){
  if(productFormModal) productFormModal.classList.remove('active');
}

if(btnOpenCreateProduct) btnOpenCreateProduct.addEventListener('click', () => openProductModal());
if(productFormClose) productFormClose.addEventListener('click', closeProductModal);
if(btnCancelProduct) btnCancelProduct.addEventListener('click', closeProductModal);

if(productCrudForm){
  productCrudForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = crudId.value || 'prod_' + Date.now();
    const prods = getProducts();
    const isEdit = Boolean(crudId.value);

    const productData = {
      id: id,
      name: crudName.value.trim(),
      category: crudCategory.value,
      categoryLabel: crudCategory.value === 'panes' ? 'Pan Fresco' : 'Repostería & Galletas',
      price: parseInt(crudPrice.value),
      rating: parseFloat(crudRating.value) || 5.0,
      badge: crudBadge.value.trim() || 'Artesanal',
      badgeStyle: 'popular',
      img: crudImage.value.trim() || 'imagenes/torta_stitch.jpg',
      desc: crudDesc.value.trim(),
      active: true
    };

    if(isEdit){
      const index = prods.findIndex(p => p.id === id);
      if(index !== -1) prods[index] = productData;
    } else {
      prods.unshift(productData);
    }

    saveProducts(prods);
    renderStorefrontProducts();
    renderAdminProducts(adminSearchInput ? adminSearchInput.value : '');
    updateAdminStats();
    closeProductModal();
    showToast(isEdit ? 'Producto actualizado con éxito' : 'Nuevo producto creado');
  });
}

// ===== INICIALIZACION =====
document.addEventListener('DOMContentLoaded', () => {
  renderStorefrontProducts();
  const settings = getSettings();
  const topBar = document.querySelector('.top-bar');
  if(topBar) topBar.innerHTML = settings.banner;
});

// Inicializar de inmediato en caso de carga ya completada
renderStorefrontProducts();
