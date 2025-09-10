// 网站主要JavaScript功能

// 全局变量
let currentSlide = 0;
let slideInterval;
let isFloatingContactOpen = false;

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    hidePageLoader();
});

// 初始化网站功能
function initializeWebsite() {
    try {
        // 首先设置页面元数据
        setPageMetadata();
        
        // 渲染页面内容
        renderNavigation();
        renderHeroBanner();
        renderAboutSection();
        renderSolutions();
        renderCases();
        renderNews();
        renderContact();
        renderFooter();
        
        // 初始化交互功能
        initializeNavigation();
        initializeHeroSlider();
        initializeScrollEffects();
        initializeLazyLoading();
        
        console.log('网站初始化完成');
    } catch (error) {
        console.error('网站初始化失败:', error);
    }
}

// 设置页面元数据
function setPageMetadata() {
    if (!websiteData.site) return;
    
    // 设置页面标题和基本元数据
    document.getElementById('page-title').textContent = websiteData.site.title;
    document.getElementById('page-description').setAttribute('content', websiteData.site.description);
    document.getElementById('page-keywords').setAttribute('content', websiteData.site.keywords);
    document.getElementById('page-author').setAttribute('content', websiteData.site.author);
    document.getElementById('page-robots').setAttribute('content', websiteData.site.robots);
    document.getElementById('page-canonical').setAttribute('href', websiteData.site.canonical);
    
    // 设置 Open Graph 元数据
    if (websiteData.site.openGraph) {
        document.getElementById('og-type').setAttribute('content', websiteData.site.openGraph.type);
        document.getElementById('og-url').setAttribute('content', websiteData.site.openGraph.url);
        document.getElementById('og-title').setAttribute('content', websiteData.site.openGraph.title);
        document.getElementById('og-description').setAttribute('content', websiteData.site.openGraph.description);
        document.getElementById('og-image').setAttribute('content', websiteData.site.openGraph.image);
    }
    
    // 设置 Twitter 元数据
    if (websiteData.site.twitter) {
        document.getElementById('twitter-card').setAttribute('content', websiteData.site.twitter.card);
        document.getElementById('twitter-url').setAttribute('content', websiteData.site.twitter.url);
        document.getElementById('twitter-title').setAttribute('content', websiteData.site.twitter.title);
        document.getElementById('twitter-description').setAttribute('content', websiteData.site.twitter.description);
        document.getElementById('twitter-image').setAttribute('content', websiteData.site.twitter.image);
    }
    
    // 设置 Favicon
    if (websiteData.site.favicon) {
        document.getElementById('favicon-ico').setAttribute('href', websiteData.site.favicon.ico);
        document.getElementById('apple-touch-icon').setAttribute('href', websiteData.site.favicon.appleTouchIcon);
        document.getElementById('favicon-32').setAttribute('href', websiteData.site.favicon.favicon32);
        document.getElementById('favicon-16').setAttribute('href', websiteData.site.favicon.favicon16);
    }
    
    // 设置页面加载器文本
    if (websiteData.loader) {
        document.getElementById('loader-title').textContent = websiteData.loader.title;
        document.getElementById('loader-subtitle').textContent = websiteData.loader.subtitle;
    }
    
    // 设置跳转链接文本
    if (websiteData.navigation_hints) {
        document.getElementById('skip-link').textContent = websiteData.navigation_hints.skip_link;
        
        // 设置滚动提示
        const scrollHintIcon = document.getElementById('scroll-hint-icon');
        const scrollHintText = document.getElementById('scroll-hint-text');
        if (scrollHintIcon && scrollHintText && websiteData.navigation_hints.scroll_indicator) {
            scrollHintIcon.className = websiteData.navigation_hints.scroll_indicator.icon + ' me-2';
            scrollHintText.textContent = websiteData.navigation_hints.scroll_indicator.text;
        }
    }
    
    // 设置导航栏logo
    if (websiteData.company && websiteData.company.logo) {
        const navLogoIcon = document.getElementById('nav-logo-icon');
        const navLogoText = document.getElementById('nav-logo-text');
        const footerLogoIcon = document.getElementById('footer-logo-icon');
        const footerLogoText = document.getElementById('footer-logo-text');
        
        if (navLogoIcon) navLogoIcon.className = websiteData.company.logo.icon + ' text-primary me-2';
        if (navLogoText) navLogoText.textContent = websiteData.company.logo.text;
        if (footerLogoIcon) footerLogoIcon.className = websiteData.company.logo.icon + ' text-primary me-2';
        if (footerLogoText) footerLogoText.textContent = websiteData.company.logo.text;
    }
    
    // 设置结构化数据 - 使用动态生成的函数
    if (typeof generateJsonLd === 'function') {
        document.getElementById('structured-data').textContent = JSON.stringify(generateJsonLd(), null, 2);
    }
}

// 隐藏页面加载器
function hidePageLoader() {
    setTimeout(() => {
        const loader = document.getElementById('page-loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 1000);
}

// 渲染导航菜单
function renderNavigation() {
    const navMenu = document.getElementById('nav-menu');
    if (!navMenu || !websiteData.navigation) return;
    
    navMenu.innerHTML = websiteData.navigation.map(item => `
        <li>
            <a href="${item.href}" onclick="smoothScrollTo('${item.href.substring(1)}'); return false;">
                ${item.name}
            </a>
        </li>
    `).join('');
}

// 渲染首页轮播
function renderHeroBanner() {
    const heroSlider = document.getElementById('hero-slider');
    const heroIndicators = document.getElementById('hero-indicators');
    
    if (!heroSlider || !heroIndicators || !websiteData.banners) return;
    
    // 渲染轮播内容
    heroSlider.innerHTML = websiteData.banners.map((banner, index) => `
        <div class="hero-slide ${index === 0 ? 'active' : ''}" style="background-image: url('${banner.image}')">
            <div class="hero-content">
                <h1 class="hero-title">${banner.title}</h1>
                <p class="hero-subtitle">${banner.subtitle}</p>
                <a href="#solutions" class="hero-cta" onclick="smoothScrollTo('solutions'); return false;">${banner.cta}</a>
            </div>
        </div>
    `).join('');
    
    // 渲染指示器
    heroIndicators.innerHTML = websiteData.banners.map((_, index) => `
        <div class="hero-indicator ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></div>
    `).join('');
}

// 渲染关于我们
function renderAboutSection() {
    // 更新关于我们描述
    const aboutDescription = document.getElementById('about-description');
    if (aboutDescription && websiteData.company) {
        aboutDescription.innerHTML = `
            <h3>关于 ${websiteData.company.name}</h3>
            <p>${websiteData.company.description}</p>
        `;
    }
    
    // 渲染统计数据
    const aboutStats = document.getElementById('about-stats');
    if (aboutStats && websiteData.stats) {
        aboutStats.innerHTML = websiteData.stats.map(stat => `
            <div class="stat-item" data-aos="fade-up" data-aos-delay="${stat.delay}">
                <div class="stat-icon">
                    <i class="${stat.icon} ${stat.iconColor}"></i>
                </div>
                <div class="stat-number">${stat.number}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');
    }
}



// 渲染解决方案
function renderSolutions() {
    const solutionsGrid = document.getElementById('solutions-grid');
    if (!solutionsGrid || !websiteData.solutions) return;
    
    solutionsGrid.innerHTML = websiteData.solutions.map(solution => `
        <div class="solution-card">
            <img src="${solution.image}" alt="${solution.title}" class="solution-image lazy-load">
            <div class="solution-content">
                <h3 class="solution-title">${solution.title}</h3>
                <p class="solution-description">${solution.description}</p>
                <div class="solution-tags">
                    ${solution.tags.map(tag => `<span class="solution-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}



// 渲染客户案例
function renderCases() {
    const casesGrid = document.getElementById('cases-grid');
    if (!casesGrid || !websiteData.cases) return;
    
    casesGrid.innerHTML = websiteData.cases.map(caseItem => `
        <div class="case-card">
            <div class="case-header">
                <img src="${caseItem.logo}" alt="${caseItem.company}" class="case-logo">
                <h3 class="case-company">${caseItem.company}</h3>
            </div>
            <h4 class="case-project">${caseItem.project}</h4>
            <p class="case-description">${caseItem.description}</p>
            <div class="case-result">
                <strong>项目成果：</strong>${caseItem.result}
            </div>
        </div>
    `).join('');
}

// 渲染新闻动态
function renderNews() {
    const newsGrid = document.getElementById('news-grid');
    if (!newsGrid || !websiteData.news) return;
    
    newsGrid.innerHTML = websiteData.news.map(news => `
        <div class="news-card">
            <div class="news-content">
                <div class="news-meta">
                    <span class="news-date">${formatDate(news.date)}</span>
                    <span class="news-category">${news.category}</span>
                </div>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-summary">${news.summary}</p>
            </div>
        </div>
    `).join('');
}

// 渲染联系方式
function renderContact() {
    if (!websiteData.contact) return;
    
    // 联系信息
    const contactAddress = document.getElementById('contact-address');
    const contactPhone = document.getElementById('contact-phone');
    const contactEmail = document.getElementById('contact-email');
    const contactHours = document.getElementById('contact-hours');
    
    if (contactAddress) contactAddress.textContent = websiteData.contact.address;
    if (contactPhone) contactPhone.textContent = websiteData.contact.phone;
    if (contactEmail) contactEmail.textContent = websiteData.contact.email;
    if (contactHours) contactHours.textContent = websiteData.contact.workingHours;
    
    // 渲染联系方式卡片
    const contactCard = document.querySelector('.contact-card:first-child .contact-card-content');
    if (contactCard && websiteData.contact.contactCard) {
        contactCard.innerHTML = websiteData.contact.contactCard.items.map(item => `
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="${item.icon}"></i>
                </div>
                <div class="contact-details">
                    <h4>${item.title}</h4>
                    <p>${item.content}</p>
                </div>
            </div>
        `).join('');
    }
    
    // 渲染交通指南卡片
    const trafficCard = document.querySelector('.contact-card:last-child .contact-card-content');
    if (trafficCard && websiteData.contact.trafficCard) {
        trafficCard.innerHTML = websiteData.contact.trafficCard.items.map(item => `
            <div class="traffic-item">
                <div class="traffic-icon ${item.iconClass || ''}">
                    <i class="${item.icon}"></i>
                </div>
                <div class="traffic-details">
                    <h4>${item.title}</h4>
                    <p>${item.content}</p>
                    <span>${item.note}</span>
                </div>
            </div>
        `).join('');
    }
}

// 渲染页脚
function renderFooter() {
    if (!websiteData.footer || !websiteData.contact) return;
    
    // 页脚描述
    const footerDescription = document.getElementById('footer-description');
    if (footerDescription && websiteData.company) {
        footerDescription.textContent = websiteData.company.description;
    }
    
    // 快速链接
    const footerLinks = document.getElementById('footer-links');
    if (footerLinks && websiteData.navigation) {
        footerLinks.innerHTML = websiteData.navigation.slice(0, 5).map(link => `
            <li><a href="${link.href}" onclick="smoothScrollTo('${link.href.substring(1)}'); return false;">${link.name}</a></li>
        `).join('');
    }
    
    // 联系方式
    const footerContact = document.getElementById('footer-contact');
    if (footerContact) {
        footerContact.innerHTML = `
            <p><i class="fas fa-map-marker-alt"></i> ${websiteData.contact.address}</p>
            <p><i class="fas fa-phone"></i> ${websiteData.contact.phone}</p>
            <p><i class="fas fa-envelope"></i> ${websiteData.contact.email}</p>
        `;
    }
    
    // 资质认证
    const footerCertifications = document.getElementById('footer-certifications');
    if (footerCertifications && websiteData.footer.certifications) {
        footerCertifications.innerHTML = websiteData.footer.certifications.map(cert => 
            `<li>${cert}</li>`
        ).join('');
    }
    
    // 版权信息
    const footerCopyright = document.getElementById('footer-copyright');
    if (footerCopyright) {
        footerCopyright.textContent = websiteData.footer.copyright;
    }
    
    // 法律链接
    const footerLegalLinks = document.getElementById('footer-legal-links');
    if (footerLegalLinks && websiteData.footer.links) {
        footerLegalLinks.innerHTML = websiteData.footer.links.map(link => 
            `<a href="${link.href}">${link.name}</a>`
        ).join('');
    }
}

// 初始化导航功能
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    
    // 移动端菜单切换
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // 点击菜单项时关闭移动菜单
        navMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // 滚动时导航栏效果
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        // 返回顶部按钮
        const backToTop = document.getElementById('back-to-top');
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });
}

// 初始化轮播功能
function initializeHeroSlider() {
    if (!websiteData.banners || websiteData.banners.length <= 1) return;
    
    // 自动轮播
    startSlideShow();
    
    // 鼠标悬停时暂停轮播
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopSlideShow);
        heroSection.addEventListener('mouseleave', startSlideShow);
    }
}

// 开始轮播
function startSlideShow() {
    if (slideInterval) clearInterval(slideInterval);
    
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % websiteData.banners.length;
        goToSlide(currentSlide);
    }, 5000);
}

// 停止轮播
function stopSlideShow() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

// 跳转到指定幻灯片
function goToSlide(index) {
    if (!websiteData.banners) return;
    
    currentSlide = index;
    
    // 更新幻灯片
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.hero-indicator');
    
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// 上一张幻灯片
function previousSlide() {
    if (!websiteData.banners) return;
    currentSlide = currentSlide > 0 ? currentSlide - 1 : websiteData.banners.length - 1;
    goToSlide(currentSlide);
}

// 下一张幻灯片
function nextSlide() {
    if (!websiteData.banners) return;
    currentSlide = (currentSlide + 1) % websiteData.banners.length;
    goToSlide(currentSlide);
}

// 初始化滚动效果
function initializeScrollEffects() {
    // 平滑滚动到指定元素 - 在正常位置基础上额外滚动200px
    window.smoothScrollTo = function(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            // 获取元素相对于文档顶部的位置
            const elementRect = element.getBoundingClientRect();
            const documentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const elementTop = elementRect.top + documentScrollTop;
            
            // 使用与CSS一致的偏移量，再额外增加200px
            const scrollPaddingTop = 80; // 与CSS中scroll-padding-top保持一致
            const extraOffset = 10; // 用户要求的额外20px
            const targetScrollTop = elementTop - scrollPaddingTop + extraOffset;
            
            // 执行平滑滚动
            window.scrollTo({
                top: targetScrollTop,
                behavior: 'smooth'
            });
        }
    };
    
    // 返回顶部
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}



// 初始化懒加载
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('.lazy-load');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy-load');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // 不支持IntersectionObserver的浏览器回退
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
            }
        });
    }
}

// 悬浮客服功能
function toggleFloatingContact() {
    const floatingContact = document.querySelector('.floating-contact');
    if (floatingContact) {
        floatingContact.classList.toggle('active');
        isFloatingContactOpen = !isFloatingContactOpen;
    }
}

// 播放视频功能
function playVideo() {
    alert('这里可以集成视频播放功能，比如弹出模态框播放公司介绍视频。');
}

// 工具函数

// 验证邮箱格式
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 节流函数
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 检测设备类型
function getDeviceType() {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
}

// 添加页面可见性检测
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        stopSlideShow();
    } else {
        startSlideShow();
    }
});

// 错误处理
window.addEventListener('error', function(e) {
    console.error('JavaScript错误:', e.error);
});

// 性能监控
window.addEventListener('load', function() {
    if (window.performance) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log('页面加载时间:', loadTime + 'ms');
    }
});

// 移动端优化
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // 向上滑动
            console.log('上滑');
        } else {
            // 向下滑动
            console.log('下滑');
        }
    }
}

// 添加键盘导航支持
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (currentSlide > 0) {
                goToSlide(currentSlide - 1);
            }
            break;
        case 'ArrowRight':
            if (currentSlide < websiteData.banners.length - 1) {
                goToSlide(currentSlide + 1);
            }
            break;
        case 'Escape':
            // 关闭悬浮客服
            if (isFloatingContactOpen) {
                toggleFloatingContact();
            }
            break;
    }
});

// 国际化支持（预留）
const i18n = {
    zh: {
        loading: '正在加载...',
        contact: '联系我们',
        submit: '提交',
        success: '提交成功',
        error: '提交失败'
    },
    en: {
        loading: 'Loading...',
        contact: 'Contact Us',
        submit: 'Submit',
        success: 'Success',
        error: 'Error'
    }
};

// 获取文本
function getText(key, lang = 'zh') {
    return i18n[lang] && i18n[lang][key] ? i18n[lang][key] : key;
}

console.log('网站脚本加载完成 ✅');