const app = document.getElementById("app");

const themeLink = document.getElementById("theme-stylesheet");
themeLink.href = `css/themes/theme-${siteConfig.theme}.css`;

const safeImage = (src, alt, fallback = "🐶") => `
  <img src="${src}" alt="${alt}" onerror="this.remove(); this.parentElement.classList.add('hero-fallback'); this.parentElement.textContent='${fallback}'" />
`;

function renderHero() {
  if (!siteConfig.features.hero) return "";
  const { shop, hero } = websiteData;
  return `
    <section id="home" class="hero">
      <div class="container hero-grid">
        <div>
          <span class="badge">${hero.badge}</span>
          <h1>${hero.title}</h1>
          <p>${hero.description}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${shop.lineUrl}" target="_blank" rel="noopener">Book via LINE</a>
            <a class="btn btn-secondary" href="#services">View Services</a>
          </div>
          <div class="trust-row"><span>${hero.rating}</span><span>${hero.happyPets}</span></div>
        </div>
        <div class="hero-card">${safeImage(shop.heroImage, shop.name, "🐕")}</div>
      </div>
    </section>`;
}

function renderServices() {
  if (!siteConfig.features.services) return "";
  return `
    <section id="services" class="section">
      <div class="container">
        <h2 class="section-title">Our Grooming Services</h2>
        <p class="section-subtitle">เลือกบริการที่เหมาะกับน้องของคุณ และสามารถเพิ่มหรือลดรายการได้จากไฟล์ data.js</p>
        <div class="card-grid">
          ${websiteData.services.map(item => `
            <article class="card">
              <div class="card-icon">${item.icon}</div>
              <h3>${item.title}</h3>
              <p class="muted">${item.description}</p>
              <div class="price">${item.price}</div>
            </article>`).join("")}
        </div>
      </div>
    </section>`;
}

function renderWhyUs() {
  if (!siteConfig.features.whyUs) return "";
  return `
    <section class="section section-soft">
      <div class="container">
        <h2 class="section-title">Why Choose Us</h2>
        <p class="section-subtitle">บริการที่ใส่ใจทั้งความสะอาด ความปลอดภัย และความสบายของสัตว์เลี้ยง</p>
        <div class="feature-grid">
          ${websiteData.whyUs.map(item => `
            <div class="feature"><div class="card-icon">${item.icon}</div><h3>${item.title}</h3><p class="muted">${item.description}</p></div>`).join("")}
        </div>
      </div>
    </section>`;
}

function renderGallery() {
  if (!siteConfig.features.gallery) return "";
  return `
    <section id="gallery" class="section">
      <div class="container">
        <h2 class="section-title">Our Happy Pets</h2>
        <p class="section-subtitle">เพิ่มรูปใหม่ได้ง่าย ๆ โดยวางไฟล์ไว้ใน images/gallery แล้วเพิ่ม path ใน data.js</p>
        <div class="gallery-grid">
          ${websiteData.gallery.map((src, index) => `<div class="gallery-item">${safeImage(src, `Gallery ${index + 1}`, "🐾")}</div>`).join("")}
        </div>
      </div>
    </section>`;
}

function renderPromotion() {
  if (!siteConfig.features.promotion) return "";
  const p = websiteData.promotion;
  return `
    <section class="section"><div class="container"><div class="promo">
      <div><div>${p.eyebrow}</div><h2>${p.title}</h2><p>${p.description}</p></div>
      <a class="btn btn-secondary" href="${websiteData.shop.lineUrl}" target="_blank" rel="noopener">Book Now</a>
    </div></div></section>`;
}

function renderAbout() {
  if (!siteConfig.features.about) return "";
  const { shop, about } = websiteData;
  return `
    <section id="about" class="section section-soft">
      <div class="container two-col">
        <div class="about-image">${safeImage(shop.aboutImage, "About shop", "🐩")}</div>
        <div><h2 class="section-title">${about.title}</h2><p class="muted">${about.description}</p></div>
      </div>
    </section>`;
}

function renderReviews() {
  if (!siteConfig.features.reviews) return "";

  const socialReviews = websiteData.socialReviews || [];

  return `
    <section id="reviews" class="section">
      <div class="container">

        <h2 class="section-title">What Pet Parents Say</h2>

        <p class="section-subtitle">
          ดูรีวิวและผลงานจริงจากช่องทาง Social Media ของร้าน
        </p>

        <div class="social-review-grid">
          ${socialReviews.map(item => `
            <article class="social-review-card">

              <div class="social-review-icon">
                ${item.icon}
              </div>

              <div class="social-review-platform">
                ${item.platform}
              </div>

              <h3>${item.title}</h3>

              <p class="muted">
                ${item.description}
              </p>

              <a
                href="${item.url}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary"
              >
                ${item.buttonText}
              </a>

            </article>
          `).join("")}
        </div>

      </div>
    </section>
  `;
}

function renderLocation() {
  if (!siteConfig.features.location) return "";

  const s = websiteData.shop;
  const location = websiteData.location;

  return `
    <section id="contact" class="section section-soft">
      <div class="container two-col">

        <div class="map-container">
          <iframe
            src="${location.mapUrl}"
            class="map-frame"
            loading="lazy"
            allowfullscreen=""
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <div>
          <h2 class="section-title">Visit Our Shop</h2>

          <div class="contact-list">

            <div class="contact-row">
              <strong>Address</strong>
              <div class="muted">${location.address}</div>
            </div>

            <div class="contact-row">
              <strong>Phone</strong>
              <div class="muted">${location.phone}</div>
            </div>

            <div class="contact-row">
              <strong>Opening Hours</strong>
              <div class="muted">${s.openingHours}</div>
            </div>

          </div>

          <div class="hero-actions">

            <a
              class="btn btn-primary"
              href="${location.directionUrl}"
              target="_blank"
              rel="noopener">
              Get Directions
            </a>

            <a
              class="btn btn-secondary"
              href="${s.lineUrl}"
              target="_blank"
              rel="noopener">
              Book via LINE
            </a>

          </div>

        </div>
      </div>
    </section>
  `;
}

function renderFinalCta() {
  if (!siteConfig.features.finalCta) return "";
  const s = websiteData.shop;
  return `<section class="section"><div class="container"><div class="final-cta"><h2 class="section-title">Ready for a Fresh New Look?</h2><p class="muted">จองคิว Grooming ให้น้องได้เลยวันนี้</p><div class="hero-actions"><a class="btn btn-primary" href="${s.lineUrl}" target="_blank" rel="noopener">Book via LINE</a><a class="btn btn-secondary" href="tel:${s.phone.replace(/[^0-9+]/g, "")}">Call Us</a></div></div></div></section>`;
}

app.innerHTML = [renderHero(), renderServices(), renderWhyUs(), renderGallery(), renderPromotion(), renderAbout(), renderReviews(), renderLocation(), renderFinalCta()].join("");

const s = websiteData.shop;
document.getElementById("brand-name").textContent = s.name;
document.getElementById("footer-name").textContent = s.name;
document.getElementById("footer-tagline").textContent = s.tagline;
document.getElementById("footer-contact").innerHTML = `${s.phone}<br>${s.address}`;
document.getElementById("copyright-name").textContent = s.name;
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("header-booking").href = s.lineUrl;

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
menuToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));
