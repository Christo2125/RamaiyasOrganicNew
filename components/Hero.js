class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
            @keyframes float-hero {
                0%, 100% { transform: translateY(0px) scale(1); }
                50% { transform: translateY(-15px) scale(1.02); }
            }
            @keyframes float-decoration {
                0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
                50% { transform: translate(-50%, -50%) translateY(-40px); }
            }
            .hero-floating {
                animation: float-hero 4s ease-in-out infinite;
            }
            .decoration-floating {
                animation: float-decoration 6s ease-in-out infinite;
            }
            @media (max-height: 800px) {
                .hero-section {
                    min-height: 1000px;
                    transform: translateY(-140px);
                }
            }
        </style>
        <section class="hero-section relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[#f4f4f0]">
            <!-- Background - Leafy Texture with Fade -->
            <div class="absolute inset-0 z-0">
                <img 
                    src="./public/images/heroBackgroundImg.jpg" 
                    alt="Leaves Background" 
                    class="w-full h-full object-cover opacity-80"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#f4f4f0] via-white/40 to-white/10"></div>
                
                <!-- Decorative Floating Bottle Behind Content -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[416px] md:w-[450px] md:h-[516px] z-0 opacity-90 decoration-floating pointer-events-none">

                    <img 
                        src="./public/images/oilBottle1.png" 
                        alt="Decorative Bottle" 
                        class="w-full h-full object-contain"
                    />
                </div>
            </div>

            <div class="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col items-center justify-center">
                <!-- Brand Text Layer -->
                <div class="sticky md:absolute top-[65%] md:top-1/2 inset-x-0 -translate-y-1/2 flex flex-col items-center z-0 w-full pointer-events-none select-none text-center transition-all duration-300">
                    <span class="reveal text-brand-green font-serif italic text-xl md:text-2xl mb-2" style="transition-delay: 200ms;">Ramaiah’s</span>
                    <h1 class="text-[5vw] md:text-[5vw] leading-tight font-serif text-brand-dark font-bold tracking-tighter opacity-90 mix-blend-multiply">
                        Pure & Traditional Oils
                    </h1>
                     <p class="reveal text-brand-green font-serif italic text-lg md:text-2xl mt-2" style="transition-delay: 400ms;">Pure. Cold-Pressed. Naturally Healthy.</p>
                </div>

                <!-- Product & CTA Layer -->
                <div class="relative z-20 flex flex-col items-center mt-12 md:mt-20 parallax-target">
                    <!-- High Quality Product Representation -->
                    <div id="bottle-parallax-wrapper" class="relative group">
                        <!-- ID used for initial positioning -->
                        <div id="hero-product" class="w-[350px] h-[416px] md:w-[450px] md:h-[516px] relative flex items-center justify-center">
                            <!-- Original Image (Will be hidden by script) -->
                             <img 
                                src="./public/images/oilBottle1.png" 
                                alt="Ramaiah's Oil Bottle" 
                                class="w-full h-full object-contain filter drop-shadow-2xl"
                                style="opacity: 0 !important; visibility: hidden !important;"
                            />
                        </div>
                    </div>

                    <a href="contact.html">
                        <button class="reveal mt-6 md:mt-10 bg-brand-yellow text-brand-dark px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#dbe64c] hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3" style="transition-delay: 800ms;">
                            Buy Now
                            <span class="bg-brand-dark text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                                <i data-lucide="arrow-right" class="w-3 h-3"></i>
                            </span>
                        </button>
                    </a>
                </div>

                <!-- Floating Info Cards (Bottom) -->
                <div class="absolute bottom-10 w-full px-6 md:px-12 flex flex-col md:flex-row justify-end items-end pointer-events-none">
                    <div class="reveal pointer-events-auto text-right max-w-sm" style="transition-delay: 700ms;">
                        <h3 class="text-xl font-bold text-brand-dark mb-2">Traditional Oil. Timeless Health.</h3>
                        <p class="text-brand-dark/70 text-sm font-medium leading-relaxed">
                            Rooted in Udangudi tradition, Ramaiah Organic brings you authentic marachekku oils made the traditional way — without chemicals, without shortcuts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        `;

    if (window.lucide) window.lucide.createIcons();

    // Initialize Animation logic after a slight delay to ensure DOM is ready
    setTimeout(() => this.initSharedBottle(), 100);
  }

  initSharedBottle() {
    // Clean up previous instance if exists
    const existingFloater = document.getElementById("global-shared-bottle");
    if (existingFloater) existingFloater.remove();

    this.heroWrapper = this.querySelector("#hero-product");
    this.placeholder = document.getElementById("benefits-bottle-placeholder");

    if (!this.heroWrapper || !this.placeholder) return;

    // Initialize state
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

    // Main Bottle
    this.floater = this.createBottle("global-shared-bottle", "40", 0);
    document.body.appendChild(this.floater);

    // Bind scroll for target calculations
    this.handleScroll = () => {
      this.calculateTargets();
    };

    window.addEventListener("scroll", this.handleScroll, { passive: true });
    window.addEventListener("resize", this.handleScroll);

    // Start Loop
    this.animate();
    this.calculateTargets(); // Initial call
  }

  createBottle(id, zIndex, opacity) {
    const el = document.createElement("img");
    el.id = id;
    el.src = "./public/images/oilBottle1.png";
    el.className = "filter drop-shadow-2xl";
    Object.assign(el.style, {
      position: "fixed",
      top: "0px",
      left: "0px",
      width: "0px",
      height: "0px",
      zIndex: zIndex,
      pointerEvents: "none",
      transformOrigin: "center center",
      willChange: "transform, top, left, width, height, opacity",
      opacity: opacity,
    });
    return el;
  }

  calculateTargets() {
    if (!this.placeholder) return;

    // References
    if (!this.productPlace)
      this.productPlace = document.getElementById("product-bottle-placeholder");

    const benefitsRect = this.placeholder.getBoundingClientRect();
    const productRect = this.productPlace
      ? this.productPlace.getBoundingClientRect()
      : null;

    if (!productRect) return;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    // We want the animation to start when the product bottle is centered in view
    // and end when the benefits placeholder is centered in view.
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

    const t = (v) => (v < 0.5 ? 2 * v * v : -1 + (4 - 2 * v) * v);
    const pt = t(progress);

    // Direct Path from Product to Benefits (centered drop)
    const startX = productRect.left + productRect.width / 2;
    const startY = productRect.top + productRect.height / 3;
    const endX = benefitsRect.left + benefitsRect.width / 2;
    const endY = benefitsRect.top + benefitsRect.height / 2;

    const tx = startX + (endX - startX) * pt;
    const ty = startY + (endY - startY) * pt;

    // Minimal sway for a cleaner "drop" feel
    const swayFreq = 9;
    const swayAmp = 15 * (1 - pt) * (progress > 0 && progress < 1 ? 1 : 0);
    const sway = Math.sin(progress * Math.PI * swayFreq) * swayAmp;

    this.state.targetX = tx + sway;
    this.state.targetY = ty;
    this.state.targetW =
      productRect.width + (benefitsRect.width - productRect.width) * pt;
    this.state.targetH =
      productRect.height + (benefitsRect.height - productRect.height) * pt;
    this.state.targetRot = Math.sin(progress * Math.PI * 2) * 5 * (1 - pt);

    // Visibility Coordination
    const staticBottle = document.getElementById("static-coconut-bottle");
    const heroImage = this.heroWrapper
      ? this.heroWrapper.querySelector("img")
      : null;

    // Restore Hero visibility
    if (heroImage) heroImage.style.opacity = "1";

    if (progress > 0) {
      this.state.targetOp = 1.0;
      if (staticBottle) staticBottle.style.opacity = "0";
    } else {
      this.state.targetOp = 0;
      if (staticBottle) staticBottle.style.opacity = "1";
    }
  }

  animate() {
    if (!this.floater) return;

    // Smoothing (Lerp)
    const lerp = (start, end, factor) => start + (end - start) * factor;
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

    // Apply
    this.floater.style.width = `${this.state.currentW}px`;
    this.floater.style.height = `${this.state.currentH}px`;
    this.floater.style.left = `${this.state.currentX - this.state.currentW / 2}px`;
    this.floater.style.top = `${this.state.currentY - this.state.currentH / 2}px`;
    this.floater.style.opacity = this.state.currentOp;

    // Rotation Logic:
    // - Lean while moving (currentRot)
    // - Snap to -5deg at the very end
    let rotation = this.state.currentRot;
    if (this.state.progress > 0.98) {
      const landingT = (this.state.progress - 0.98) / 0.02;
      rotation = lerp(this.state.currentRot, -5, landingT);
    }

    this.floater.style.transform = `rotate(${rotation}deg)`;

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
