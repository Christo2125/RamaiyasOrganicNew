class ProductSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }
            .animate-float {
                animation: float 6s ease-in-out infinite;
            }
            .animate-float-delayed {
                animation: float 7s ease-in-out infinite;
                animation-delay: 1s;
            }
            .tooltip-container { position: relative; cursor: pointer; }
            .tooltip-text {
                visibility: hidden;
                width: 250px;
                background-color: #2d4a22;
                color: #fff;
                text-align: center;
                border-radius: 12px;
                padding: 12px;
                position: absolute;
                z-index: 50;
                bottom: 110%;
                left: 50%;
                margin-left: -125px;
                opacity: 0;
                transition: opacity 0.3s;
                font-size: 0.75rem;
                line-height: 1.4;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                pointer-events: none;
            }
            .tooltip-text::after {
                content: "";
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: #2d4a22 transparent transparent transparent;
            }
            .tooltip-container:hover .tooltip-text {
                visibility: visible;
                opacity: 1;
            }
        </style>
        <section id="product-section" class="relative w-full py-12 md:py-24 bg-brand-bg overflow-hidden min-h-screen">
            <div class="relative h-[40vh] md:h-[60vh] flex flex-col items-center justify-center pt-10 md:pt-0">
                
                <h2 id="product-title" class="text-[11vw] sm:text-[14vw] font-serif font-bold text-brand-dark leading-none relative z-0 parallax-target">
                    Products
                </h2>
                <!-- Rising Bottle Container -->
                <div id="product-bottle" class="absolute z-20 bottom-44 md:bottom-10 parallax-target flex items-end justify-center gap-12">
                    <!-- Sesame Bottle -->
                    <div class="w-56 md:w-72 hover:scale-105 transition-transform duration-500 animate-float">
                        <img 
                            src="./public/images/sesameBottle1.png" 
                            alt="Ramaiah's Sesame Oil" 
                            class="w-full h-auto object-contain filter drop-shadow-2xl"
                        />
                    </div>
                    <!-- Coconut Bottle (Starting point for animation) -->
                    <div id="product-bottle-placeholder" class="w-56 md:w-72 hover:scale-105 transition-transform duration-500 animate-float-delayed">
                        <img 
                            id="static-coconut-bottle"
                            src="./public/images/oilBottle1.png" 
                            alt="Ramaiah's Coconut Oil" 
                            class="w-full h-auto object-contain filter drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-6 mt-12 relative z-30">
                

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <!-- Sesame Oil Card -->
                    <a href="contact.html" class="reveal group bg-gradient-to-br from-amber-50 to-amber-200/60 rounded-[2.5rem] p-8 flex flex-col items-center overflow-hidden hover:shadow-2xl hover:shadow-amber-200/40 transition-all duration-500 block border border-amber-100/50">
                        <div class="w-40 h-56 relative z-0 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 mb-6">
                            <img 
                                src="./public/images/sesameBottle1.png" 
                                alt="Ramaiah's Sesame Oil" 
                                class="w-full h-full object-contain filter drop-shadow-xl"
                            />
                        </div>
                        <div class="w-full text-center z-10 transition-transform duration-300 group-hover:-translate-y-1">
                            <h3 class="text-2xl font-bold text-brand-dark mb-2">Ramaiah’s Sesame Oil</h3>
                            <p class="text-amber-800/70 text-sm mb-2 font-medium">Traditional cold-pressed gingili oil</p>
                            <p class="text-xs font-bold text-brand-dark mb-4 bg-amber-200/50 py-1 px-3 rounded-full inline-block">Available in 1000ml , 500 ml</p>
                            <div class="tooltip-container mb-6">
                                <p class="text-gray-600 text-xs text-center opacity-80">Authentic wood-pressed for daily health...</p>
                                <div class="tooltip-text">
                                    Traditional cold-pressed gingili oil extracted using the age-old marachekku method. Rich in nutrients, natural aroma, and authentic taste, perfect for daily cooking and healthy living.
                                </div>
                            </div>
                            <button class="bg-white border border-amber-200/50 px-8 py-2.5 rounded-full text-sm font-bold shadow-sm group-hover:bg-brand-yellow group-hover:border-transparent transition-all duration-300">Shop Now</button>
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-tr from-amber-300/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                    <!-- Coconut Oil Card -->
                    <a href="contact.html" class="reveal group bg-gradient-to-br from-emerald-50 to-emerald-200/60 rounded-[2.5rem] p-8 flex flex-col items-center overflow-hidden hover:shadow-2xl hover:shadow-emerald-200/40 transition-all duration-500 block border border-emerald-100/50" style="transition-delay: 100ms;">
                        <div class="w-40 h-56 relative z-0 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 mb-6">
                            <img 
                                src="./public/images/oilBottle1.png" 
                                alt="Ramaiah's Coconut Oil" 
                                class="w-full h-full object-contain filter drop-shadow-xl"
                            />
                        </div>
                        <div class="w-full text-center z-10 transition-transform duration-300 group-hover:-translate-y-1">
                            <h3 class="text-2xl font-bold text-brand-dark mb-2">Ramaiah’s Coconut Oil</h3>
                            <p class="text-emerald-800/70 text-sm mb-2 font-medium">Pure marachekku coconut oil</p>
                            <p class="text-xs font-bold text-brand-dark mb-4 bg-emerald-200/50 py-1 px-3 rounded-full inline-block">Available in 1000 ml , 500ml , 200ml</p>
                            <div class="tooltip-container mb-6">
                                <p class="text-gray-600 text-xs text-center opacity-80">Traditional extraction for pure wellness...</p>
                                <div class="tooltip-text">
                                    Pure marachekku coconut oil made without heat or chemicals. Preserving natural nutrients and authentic taste for your wellbeing.
                                </div>
                            </div>
                            <button class="bg-white border border-emerald-200/50 px-8 py-2.5 rounded-full text-sm font-bold shadow-sm group-hover:bg-brand-yellow group-hover:border-transparent transition-all duration-300">Shop Now</button>
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-tr from-emerald-300/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                </div>

                <div class="mt-12 text-center reveal">
                    <a href="products.html" class="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg">
                        Show More Products
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </a>
                </div>
            </div>
        </section>
        `;

    if (window.lucide) window.lucide.createIcons();

    // Parallax
    const productSec = this.querySelector("#product-section");
    const productTitle = this.querySelector("#product-title");
    const productBottle = this.querySelector("#product-bottle");

    window.addEventListener("scroll", () => {
      const productRect = productSec.getBoundingClientRect();
      const productVisible =
        productRect.top < window.innerHeight && productRect.bottom > 0;

      if (productVisible) {
        const productProgress =
          (window.innerHeight - productRect.top) /
          (window.innerHeight + productRect.height);

        const bottleY = Math.max(0, 400 - (productProgress / 0.4) * 400);
        const bottleScale = 0.8 + (Math.min(0.4, productProgress) / 0.4) * 0.2;
        if (productBottle) {
          productBottle.style.transform = `translateY(${bottleY}px) scale(${bottleScale})`;
        }

        const textY = Math.max(0, 100 - (productProgress / 0.3) * 100);
        if (productTitle) {
          productTitle.style.transform = `translateY(${textY}px)`;
        }
      }
    });
  }
}
customElements.define("app-product", ProductSection);
