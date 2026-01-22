// --- DATA ---
const slidesData = [
  { img: "https://pos.nvncdn.com/4ef0bf-108661/bn/20260108_I7Eez9Oi.jpg?v=1767862197" },
  { img: "https://pos.nvncdn.com/4ef0bf-108661/bn/20251231_h789P7nH.jpg?v=1767177452" },
  { img: "https://pos.nvncdn.com/4ef0bf-108661/bn/20251216_isBpUPK0.jpg?v=1765852192" },
  { img: "https://pos.nvncdn.com/4ef0bf-108661/bn/20251204_Y07Js77Y.jpg?v=1764839532" },
  { img: "https://pos.nvncdn.com/4ef0bf-108661/bn/20251119_VGo5RHny.jpg?v=1763523521" },
  { img: "https://pos.nvncdn.com/4ef0bf-108661/bn/20251106_NP9S6TV0.jpg?v=1762399896" }
];

const products = [
    { id: 1, name: "Áo dáng ngắn cổ sen phối cúc", currentPrice: "585,000đ", oldPrice: "895,000đ", discount: "-35%", img: "https://pos.nvncdn.com/4ef0bf-108661/ps/Ao-dang-ngan-co-sen-phoi-cuc.jpg?v=1764843673", colors: ["#f5f5dc", "#000"] },
    { id: 2, name: "Đầm cổ tàu nhún 2 tầng", currentPrice: "955,000đ", oldPrice: null, discount: null, img: "https://pos.nvncdn.com/4ef0bf-108661/ps/Dam-co-tau-nhun-2-tang.jpg?v=1764841598", colors: ["#fff", "#000"] },
    { id: 3, name: "Đầm cổ tròn phối áo rời", currentPrice: "1,250,000đ", oldPrice: null, discount: null, img: "https://pos.nvncdn.com/4ef0bf-108661/ps/Dam-co-tron-phoi-ao-roi-chan-do-to.jpg?v=1759385979", colors: ["#8b0000", "#000"] },
    { id: 4, name: "Đầm cổ đức phối kẻ", currentPrice: "850,000đ", oldPrice: "1,100,000đ", discount: "-20%", img: "https://pos.nvncdn.com/4ef0bf-108661/ps/Dam-co-duc-phoi-ke-chan-xep-ly.jpg?v=1758780717", colors: ["#3f51b5", "#fff"] },
    { id: 5, name: "Sản Phẩm Mới của An Thảo Store", currentPrice: "790,000đ", oldPrice: null, discount: null, img: "https://pos.nvncdn.com/4ef0bf-108661/ps/Ao-dang-ngan-co-duc-roi-tay-dai.jpg?v=1759386223", colors: ["#000", "#777"] },
    { id: 6, name: "Đầm chân nhun bèo phối áo", currentPrice: "1,050,000đ", oldPrice: null, discount: null, img: "https://pos.nvncdn.com/4ef0bf-108661/ps/Dam-chan-nhun-beo-phoi-ao-dai-tay.jpg?v=1758781118", colors: ["#ffc0cb", "#fff"] },
    // Repeat for carousel pagination demo
    { id: 7, name: "Áo dáng ngắn cổ sen phối cúc", currentPrice: "585,000đ", oldPrice: "895,000đ", discount: "-35%", img: "https://pos.nvncdn.com/4ef0bf-108661/ps/Ao-dang-ngan-co-sen-phoi-cuc.jpg?v=1764843673", colors: ["#f5f5dc", "#000"] },
    { id: 8, name: "Đầm cổ tàu nhún 2 tầng", currentPrice: "955,000đ", oldPrice: null, discount: null, img: "https://pos.nvncdn.com/4ef0bf-108661/ps/Dam-co-tau-nhun-2-tang.jpg?v=1764841598", colors: ["#fff", "#000"] },
    { id: 9, name: "Đầm cổ tròn phối áo rời", currentPrice: "1,250,000đ", oldPrice: null, discount: null, img: "https://pos.nvncdn.com/4ef0bf-108661/ps/Dam-co-tron-phoi-ao-roi-chan-do-to.jpg?v=1759385979", colors: ["#8b0000", "#000"] },
    { id: 10, name: "Đầm cổ đức phối kẻ", currentPrice: "850,000đ", oldPrice: "1,100,000đ", discount: "-20%", img: "https://pos.nvncdn.com/4ef0bf-108661/ps/Dam-co-duc-phoi-ke-chan-xep-ly.jpg?v=1758780717", colors: ["#3f51b5", "#fff"] },
    { id: 11, name: "Sản Phẩm Mới của An Thảo Store", currentPrice: "790,000đ", oldPrice: null, discount: null, img: "https://pos.nvncdn.com/4ef0bf-108661/ps/Ao-dang-ngan-co-duc-roi-tay-dai.jpg?v=1759386223", colors: ["#000", "#777"] },
    { id: 12, name: "Đầm chân nhun bèo phối áo", currentPrice: "1,050,000đ", oldPrice: null, discount: null, img: "https://pos.nvncdn.com/4ef0bf-108661/ps/Dam-chan-nhun-beo-phoi-ao-dai-tay.jpg?v=1758781118", colors: ["#ffc0cb", "#fff"] }
];

const categoryData = [
    {"name": "ĐẦM", "img": "https://pos.nvncdn.com/4ef0bf-108661/pc/20211012_Vag7apRJM1rEJHHSo5lKbQYk.png?v=1673288348"},
    {"name": "ÁO", "img": "https://pos.nvncdn.com/4ef0bf-108661/pc/20211012_7Z5OnDTzjU2l1gugbxnoN9GS.png?v=1673288346"},
    {"name": "QUẦN", "img": "https://pos.nvncdn.com/4ef0bf-108661/pc/20211012_Ll1EKSnE1tm2gmg21vglg6K9.png?v=1673288346"},
    {"name": "CHÂN VÁY", "img": "https://pos.nvncdn.com/4ef0bf-108661/pc/20211012_Ci4aT211GpqlV3fgJsR6HXzk.png?v=1673288344"},
    {"name": "ÁO KHOÁC", "img": "https://pos.nvncdn.com/4ef0bf-108661/pc/20211012_rWpD2qGv2pDVmSDkscoMRMoV.png?v=1673288344"},
    {"name": "SALE", "img": "https://pos.nvncdn.com/4ef0bf-108661/pc/20211012_Vag7apRJM1rEJHHSo5lKbQYk.png?v=1673288348"},
    {"name": "PHỤ KIỆN", "img": "https://pos.nvncdn.com/4ef0bf-108661/pc/20211012_7Z5OnDTzjU2l1gugbxnoN9GS.png?v=1673288346"},
    {"name": "CCDC", "img": "https://pos.nvncdn.com/4ef0bf-108661/pc/20211012_Ll1EKSnE1tm2gmg21vglg6K9.png?v=1673288346"},
    {"name": "QUÀ TẶNG", "img": "https://pos.nvncdn.com/4ef0bf-108661/pc/20211012_Ci4aT211GpqlV3fgJsR6HXzk.png?v=1673288344"}
];

// --- HERO SLIDER ---
const HeroSlider = {
    container: null,
    track: null,
    currentIndex: 0,
    isDragging: false,
    startPos: 0,
    currentTranslate: 0,
    prevTranslate: 0,
    animationID: 0,
    intervalId: null,

    init() {
        this.container = document.getElementById('heroSlider');
        this.track = document.getElementById('heroTrack');
        if (!this.container) return;
        this.render();
        this.startAutoSlide();
        this.bindEvents();
    },

    render() {
        this.track.innerHTML = slidesData.map(s => 
            `<div class="slide" style="background-image: url('${s.img}');"></div>`
        ).join('');
        this.updateSliderPosition();
    },

    updateSliderPosition() {
        this.track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
        this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        this.prevTranslate = -this.currentIndex * this.container.offsetWidth;
    },

    setSliderPosition() {
        this.track.style.transform = `translateX(${this.currentTranslate}px)`;
    },

    next() {
        this.currentIndex = (this.currentIndex + 1) % slidesData.length;
        this.updateSliderPosition();
    },

    startAutoSlide() {
        this.intervalId = setInterval(() => this.next(), 4500);
    },

    stopAutoSlide() {
        clearInterval(this.intervalId);
    },

    bindEvents() {
        this.container.addEventListener('pointerdown', (e) => {
            if (e.target.closest('.hero-search-bar')) return;
            this.isDragging = true;
            this.startPos = e.pageX;
            this.stopAutoSlide();
            this.track.style.transition = 'none';
            this.animationID = requestAnimationFrame(() => this.animation());
            document.body.classList.add('is-dragging');
            this.container.setPointerCapture(e.pointerId);
        });

        this.container.addEventListener('pointermove', (e) => {
            if (!this.isDragging) return;
            const currentPosition = e.pageX;
            this.currentTranslate = this.prevTranslate + (currentPosition - this.startPos);
        });

        this.container.addEventListener('pointerup', (e) => {
            if (!this.isDragging) return;
            this.isDragging = false;
            cancelAnimationFrame(this.animationID);
            document.body.classList.remove('is-dragging');

            const movedBy = this.currentTranslate - this.prevTranslate;
            if (movedBy < -100 && this.currentIndex < slidesData.length - 1) {
                this.currentIndex += 1;
            } else if (movedBy > 100 && this.currentIndex > 0) {
                this.currentIndex -= 1;
            }
            this.updateSliderPosition();
            this.startAutoSlide();
            this.container.releasePointerCapture(e.pointerId);
        });

        this.container.addEventListener('pointercancel', () => {
            if (!this.isDragging) return;
            this.isDragging = false;
            this.updateSliderPosition();
            this.startAutoSlide();
        });
    },

    animation() {
        if (this.isDragging) {
            this.setSliderPosition();
            requestAnimationFrame(() => this.animation());
        }
    }
};

// --- PRODUCT CAROUSEL ---
const ProductCarousel = {
    container: null,
    track: null,
    dots: null,
    currentIndex: 0,
    isDragging: false,
    startPos: 0,
    currentTranslate: 0,
    prevTranslate: 0,
    animationID: 0,
    threshold: 50,
    pagesCount: 0,
    autoSlideInterval: null,
    draggedDistance: 0,

    init(dataList) {
        this.container = document.getElementById('productCarousel');
        this.track = document.getElementById('productTrack');
        this.dots = document.getElementById('sliderDots');
        if (!this.container) return;
        this.render(dataList);
        this.bindEvents();
        this.startAutoSlide();
    },

    render(dataList) {
        const chunkSize = 6;
        const pages = [];
        for (let i = 0; i < dataList.length; i += chunkSize) {
            pages.push(dataList.slice(i, i + chunkSize));
        }
        this.pagesCount = pages.length;

        this.track.innerHTML = pages.map(page => `
            <div class="product-page">
                ${page.map(p => `
                    <div class="product-card" onclick="event.preventDefault(); return false;">
                        <div class="wishlist-icon" title="Yêu thích">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </div>
                        <div class="p-img-wrap">
                            ${p.discount ? `<span class="discount-badge" style="position: absolute; top: 10px; left: 10px; background: var(--sale-red); color: #fff; font-size: 10px; padding: 2px 6px; font-weight: 700; z-index: 1;">${p.discount}</span>` : ''}
                            <img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async">
                        </div>
                        <div class="product-info">
                            <p class="product-name" title="${p.name}">${p.name}</p>
                            <div class="color-dots">
                                ${p.colors ? p.colors.map(c => `<span class="color-dot" style="background: ${c};"></span>`).join('') : ''}
                            </div>
                            <div class="price-box">
                                <span class="current-price">${p.currentPrice}</span>
                                ${p.oldPrice ? `<span class="old-price">${p.oldPrice}</span>` : ''}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `).join('');

        this.renderDots();
        this.updatePosition();
    },

    renderDots() {
        this.dots.innerHTML = Array.from({ length: this.pagesCount }).map((_, i) => 
            `<div class="dot-item ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
        ).join('');

        this.dots.onclick = (e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('dot-item')) {
                this.currentIndex = parseInt(target.dataset.index || '0');
                this.updatePosition();
                this.restartAutoSlide();
            }
        };
    },

    updatePosition() {
        this.track.style.transition = 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
        this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        this.prevTranslate = -this.currentIndex * this.container.offsetWidth;
        
        Array.from(this.dots.children).forEach((dot, i) => {
            (dot as HTMLElement).classList.toggle('active', i === this.currentIndex);
        });
    },

    setSliderPosition() {
        this.track.style.transform = `translateX(${this.currentTranslate}px)`;
    },

    next() {
        if (this.pagesCount === 0) return;
        this.currentIndex = (this.currentIndex + 1) % this.pagesCount;
        this.updatePosition();
    },

    startAutoSlide() {
        this.stopAutoSlide();
        this.autoSlideInterval = window.setInterval(() => this.next(), 4000);
    },

    stopAutoSlide() {
        if (this.autoSlideInterval) clearInterval(this.autoSlideInterval);
    },

    restartAutoSlide() {
        this.startAutoSlide();
    },

    bindEvents() {
        this.container.addEventListener('pointerdown', (e) => {
            this.isDragging = true;
            this.startPos = e.pageX;
            this.draggedDistance = 0;
            this.stopAutoSlide();
            this.track.style.transition = 'none';
            this.animationID = requestAnimationFrame(() => this.animation());
            document.body.classList.add('is-dragging');
            this.container.setPointerCapture(e.pointerId);
        });

        this.container.addEventListener('pointermove', (e) => {
            if (!this.isDragging) return;
            const currentPos = e.pageX;
            this.draggedDistance = Math.abs(currentPos - this.startPos);
            this.currentTranslate = this.prevTranslate + (currentPos - this.startPos);
        });

        this.container.addEventListener('pointerup', (e) => {
            if (!this.isDragging) return;
            this.isDragging = false;
            cancelAnimationFrame(this.animationID);
            document.body.classList.remove('is-dragging');

            const movedBy = this.currentTranslate - this.prevTranslate;
            
            if (Math.abs(movedBy) > this.threshold) {
                if (movedBy < 0 && this.currentIndex < this.pagesCount - 1) {
                    this.currentIndex += 1;
                } else if (movedBy > 0 && this.currentIndex > 0) {
                    this.currentIndex -= 1;
                }
            }

            this.updatePosition();
            this.startAutoSlide();
            this.container.releasePointerCapture(e.pointerId);
        });

        this.container.addEventListener('pointercancel', () => {
            if (!this.isDragging) return;
            this.isDragging = false;
            this.updatePosition();
            this.startAutoSlide();
        });

        this.container.addEventListener('mouseenter', () => this.stopAutoSlide());
        this.container.addEventListener('mouseleave', () => {
            if (!this.isDragging) this.startAutoSlide();
        });

        // Prevent click if dragged
        this.container.addEventListener('click', (e) => {
            if (this.draggedDistance > 10) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);
    },

    animation() {
        if (this.isDragging) {
            this.setSliderPosition();
            requestAnimationFrame(() => this.animation());
        }
    }
};

// --- INITIALIZATION ---
function initCategories() {
    const top = document.getElementById('categoryContainerTop');
    const bottom = document.getElementById('categoryContainerBottom');
    if (top && bottom) {
        top.innerHTML = categoryData.slice(0, 8).map(c => `
            <a href="#" class="cateItem" data-name="${c.name}">
                <div class="image-icon"><img src="${c.img}" alt="${c.name}"></div>
                <div class="image-title">${c.name}</div>
            </a>
        `).join('');
        bottom.innerHTML = categoryData.slice(8).map(c => `
            <a href="#" class="cateItem" data-name="${c.name}">
                <div class="image-icon"><img src="${c.img}" alt="${c.name}"></div>
                <div class="image-title">${c.name}</div>
            </a>
        `).join('');
    }
}

function initSearch() {
    const form = document.getElementById('searchForm') as HTMLFormElement;
    const input = document.getElementById('searchInput') as HTMLInputElement;

    if (form && input) {
        form.onsubmit = (e) => {
            e.preventDefault();
            const query = input.value.trim().toLowerCase();
            const filtered = products.filter(p => p.name.toLowerCase().includes(query));
            
            const titleEl = document.querySelector('#bestSellerSection .section-title') as HTMLElement;
            if (query) {
                titleEl.textContent = `KẾT QUẢ TÌM KIẾM CHO: "${query}" (${filtered.length})`;
            } else {
                titleEl.textContent = `SẢN PHẨM BÁN CHẠY`;
            }

            ProductCarousel.init(filtered);
            
            const resultsSection = document.getElementById('bestSellerSection');
            if (resultsSection) resultsSection.scrollIntoView({ behavior: 'smooth' });
        };
    }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    HeroSlider.init();
    initCategories();
    initSearch();
    ProductCarousel.init(products);
});
