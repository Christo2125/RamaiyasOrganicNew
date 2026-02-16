class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        @keyframes float-hero {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .hero-section {
          background:
            linear-gradient(
              90deg,
              rgba(7,43,46,0.95) 0%,
              rgba(7,43,46,0.85) 40%,
              rgba(7,43,46,0.65) 60%,
              rgba(7,43,46,0.3) 75%,
              rgba(7,43,46,0.0) 100%
            ),
            url('./public/images/banner.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .hero-heading {
          font-family: "Playfair Display", serif;
          letter-spacing: -0.5px;
        }

        .hero-highlight {
          color: #e6c26a;
          font-style: italic;
        }

        .hero-subtext {
          color: rgba(255,255,255,0.85);
        }

        .hero-cta {
          background: #d9f05c;
        }


        .hero-floating {
          animation: float-hero 4s ease-in-out infinite;
        }
      </style>

      <section class="hero-section relative w-full min-h-screen flex items-center overflow-hidden">
        <div class="max-w-7xl mx-auto w-full px-6 md:px-12">
          
          <div class="grid md:grid-cols-2 items-center">
            <!-- LEFT COLUMN (TEXT CONTENT) -->
            <div class="text-white  pb-0 pt-50">
              <div class="flex items-center gap-4 mb-6 pt-40">
                <div class="w-12 h-[1px] bg-[#e6c26a]"></div>
                <span class="text-sm  tracking-widest text-[#e6c26a] font-serif italic">Since 1943</span>
              </div>

              <h1 class="hero-heading text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] md:whitespace-nowrap">
                Ramaiah’s Signature <br/> of <span class="hero-highlight">Udangudi</span>
              </h1>

              <p class="hero-subtext text-lg md:text-xl max-w-xl mb-12 leading-relaxed opacity-90">
                Experience the timeless heritage of 80 years. Handcrafted from the finest palm groves, 
                our organic coconut oil and jaggery bring the soul of the coast to your kitchen.
              </p>

              <a href="contact.html">
                <button class="hero-cta btn-animate text-[#072b2e] font-bold px-10 py-4 rounded-full flex items-center gap-3 shadow-xl mb-16 md:mb-20">
                  Shop Now
                  <span class="bg-[#072b2e] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">→</span>
                </button>
              </a>

              <!-- DESKTOP ONLY STATS -->
              <div class="hidden md:flex gap-16 text-white">
                <div>
                  <h3 class="text-4xl font-serif" data-counter="80" data-suffix="+">0</h3>
                  <p class="text-[10px] tracking-[0.2em] opacity-60 mt-1 uppercase">Years Heritage</p>
                </div>
                <div>
                  <h3 class="text-4xl font-serif" data-counter="100" data-suffix="%">0</h3>
                  <p class="text-[10px] tracking-[0.2em] opacity-60 mt-1 uppercase">Organic</p>
                </div>
                <div>
                  <h3 class="text-4xl font-serif" data-counter="4" data-suffix="th">0</h3>
                  <p class="text-[10px] tracking-[0.2em] opacity-60 mt-1 uppercase">Generation</p>
                </div>
              </div>
            </div>

            <!-- RIGHT COLUMN (DESKTOP IMAGE) -->
            <div class="hidden md:flex relative justify-center items-center">
              <div id="hero-product" class="w-full max-w-[420px] relative flex items-center justify-center mt-72 pt-20 ml-20 hero-floating">
                <img 
                  src="./public/images/heroFloatingImge.png"
                  alt="Ramaiah's Signature Products"
                  class="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          <!-- MOBILE ONLY BOTTOM ROW (STATS + IMAGE) -->
          <div class="md:hidden flex justify-between items-end gap-4 pb-20">
            <!-- Stacked stats -->
            <div class="flex flex-col gap-10 text-white">
              <div class="flex flex-col">
                <h3 class="text-4xl font-serif" data-counter="80" data-suffix="+">0</h3>
                <p class="text-[10px] tracking-[0.2em] opacity-60 mt-1 uppercase leading-tight">Years Heritage</p>
              </div>
              <div class="flex flex-col">
                <h3 class="text-4xl font-serif" data-counter="100" data-suffix="%">0</h3>
                <p class="text-[10px] tracking-[0.2em] opacity-60 mt-1 uppercase leading-tight">Organic</p>
              </div>
              <div class="flex flex-col">
                <h3 class="text-4xl font-serif" data-counter="4" data-suffix="th">0</h3>
                <p class="text-[10px] tracking-[0.2em] opacity-60 mt-1 uppercase leading-tight">Generation</p>
              </div>
            </div>
            
            <!-- Mobile Image wrapper -->
            <div id="hero-product-mobile" class="w-[90%] max-w-[340px] aspect-square relative flex items-center justify-center hero-floating">
              <img 
                src="./public/images/heroFloatingImge.png"
                alt="Ramaiah's Signature Products"
                class="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>
    `;

    setTimeout(() => {
      this.initSharedBottle();
      this.initCounters();
    }, 100);
  }

  initCounters() {
    const counters = this.querySelectorAll("[data-counter]");
    const duration = 2000; // 2 seconds

    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute("data-counter"));
          const suffix = counter.getAttribute("data-suffix") || "";
          let startTime = null;

          const animateCounter = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const value = Math.floor(progress * target);

            counter.textContent = value + suffix;

            if (progress < 1) {
              requestAnimationFrame(animateCounter);
            } else {
              counter.textContent = target + suffix;
            }
          };

          requestAnimationFrame(animateCounter);
          observer.unobserve(counter);
        }
      });
    }, observerOptions);

    counters.forEach((counter) => observer.observe(counter));
  }

  /* ============================
     ORIGINAL SHARED BOTTLE LOGIC
     (UNCHANGED - NOTHING REMOVED)
  ============================= */

  initSharedBottle() {
    const existingFloater = document.getElementById("global-shared-bottle");
    if (existingFloater) existingFloater.remove();

    this.heroWrapper =
      this.querySelector("#hero-product") ||
      this.querySelector("#hero-product-mobile");
    this.placeholder = document.getElementById("benefits-bottle-placeholder");

    if (!this.heroWrapper || !this.placeholder) return;

    const isMd = window.innerWidth >= 768;
    const initialW = isMd ? 450 : 350;
    const initialH = isMd ? 516 : 416;

    this.state = {
      currentX: window.innerWidth / 2,
      currentY: window.innerHeight / 2,
      currentW: initialW,
      currentH: initialH,
      currentRot: 0,
      currentOp: 0,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      targetW: initialW,
      targetH: initialH,
      targetRot: 0,
      targetOp: 0,
      progress: 0,
    };

    this.floater = this.createBottle("global-shared-bottle", "40", 0);
    document.body.appendChild(this.floater);

    this.handleScroll = () => {
      this.calculateTargets();
    };

    window.addEventListener("scroll", this.handleScroll, { passive: true });
    window.addEventListener("resize", this.handleScroll);

    this.animate();
    this.calculateTargets();
  }

  createBottle(id, zIndex, opacity) {
    const container = document.createElement("div");
    container.id = id;

    Object.assign(container.style, {
      position: "fixed",
      top: "0px",
      left: "0px",
      width: "0px",
      height: "0px",
      zIndex: zIndex,
      pointerEvents: "none",
      willChange: "transform",
      opacity: opacity,
    });

    const img = document.createElement("img");
    img.src = "./public/images/oilBottle1.png";
    img.className = "w-full h-full object-contain drop-shadow-2xl";

    container.appendChild(img);
    return container;
  }

  calculateTargets() {
    if (!this.placeholder) return;

    if (!this.productPlace)
      this.productPlace = document.getElementById("product-bottle-placeholder");

    const benefitsRect = this.placeholder.getBoundingClientRect();
    const productRect = this.productPlace
      ? this.productPlace.getBoundingClientRect()
      : null;

    if (!productRect) return;

    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    const productOffsetTop = scrollTop + productRect.top;
    const benefitsOffsetTop = scrollTop + benefitsRect.top;

    const startScroll = productOffsetTop - windowHeight * 0.2;
    const endScroll = benefitsOffsetTop - windowHeight * 1;

    const range = Math.max(1, endScroll - startScroll);
    const progress = Math.max(
      0,
      Math.min(1, (scrollTop - startScroll) / range),
    );

    this.state.progress = progress;

    const startX = productRect.left + productRect.width / 2;
    const startY = productRect.top + productRect.height / 2;
    const endX = benefitsRect.left + benefitsRect.width / 2;
    const endY = benefitsRect.top + benefitsRect.height / 2;

    this.state.targetX = startX + (endX - startX) * progress;
    this.state.targetY = startY + (endY - startY) * progress;

    this.state.targetW =
      productRect.width + (benefitsRect.width - productRect.width) * progress;
    this.state.targetH =
      productRect.height +
      (benefitsRect.height - productRect.height) * progress;

    this.state.targetRot = Math.sin(progress * Math.PI * 2) * 5;

    // Unified opacity: visible if product section or benefits section is in view
    const isInView = productRect.top < windowHeight && productRect.bottom > 0;
    const isBenefitsInView =
      benefitsRect.top < windowHeight && benefitsRect.bottom > 0;
    this.state.targetOp = isInView || isBenefitsInView || progress > 0 ? 1 : 0;
  }

  animate() {
    if (!this.floater) return;

    const lerp = (a, b, t) => a + (b - a) * t;
    const speed = 0.12;

    this.state.currentX = lerp(this.state.currentX, this.state.targetX, speed);
    this.state.currentY = lerp(this.state.currentY, this.state.targetY, speed);
    this.state.currentW = lerp(this.state.currentW, this.state.targetW, speed);
    this.state.currentH = lerp(this.state.currentH, this.state.targetH, speed);
    this.state.currentRot = lerp(
      this.state.currentRot,
      this.state.targetRot,
      speed,
    );
    this.state.currentOp = lerp(
      this.state.currentOp,
      this.state.targetOp,
      speed,
    );

    // Add idle float effect when at home position
    const idleFloat =
      Math.sin(Date.now() / 1000) * 15 * (1 - this.state.progress);

    this.floater.style.width = `${this.state.currentW}px`;
    this.floater.style.height = `${this.state.currentH}px`;
    this.floater.style.left = `${this.state.currentX - this.state.currentW / 2}px`;
    this.floater.style.top = `${this.state.currentY - this.state.currentH / 2 + idleFloat}px`;
    this.floater.style.opacity = this.state.currentOp;
    this.floater.style.transform = `rotate(${this.state.currentRot}deg)`;
    this.floater.style.visibility =
      this.state.currentOp < 0.01 ? "hidden" : "visible";

    this.rafId = requestAnimationFrame(() => this.animate());
  }

  disconnectedCallback() {
    if (this.handleScroll) {
      window.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("resize", this.handleScroll);
    }
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.floater) this.floater.remove();
  }
}

customElements.define("app-hero", Hero);
