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
        </style>
        <section id="product-section" class="relative w-full py-12 md:py-24 bg-brand-bg overflow-hidden min-h-screen">
            <div class="relative h-[60vh] flex flex-col items-center justify-center">
                
                <h2 id="product-title" class="text-[15vw] font-serif font-bold text-brand-dark leading-none relative z-0 parallax-target">
                    Products.
                </h2>
                <!-- Rising Bottle -->
                <div id="product-bottle" class="absolute z-20 bottom-10 parallax-target flex items-end justify-center gap-8">
                    <div class="w-56 md:w-72 hover:scale-105 transition-transform duration-500 animate-float">
                        <img 
                            src="./public/images/sesameBottle1.png" 
                            alt="Ramaiah's Sesame Oil" 
                            class="w-full h-auto object-contain filter drop-shadow-2xl"
                        />
                    </div>
                    <div class="w-56 md:w-72 hover:scale-105 transition-transform duration-500 animate-float-delayed">
                        <img 
                            src="./public/images/oilBottle1.png" 
                            alt="Ramaiah's Coconut Oil" 
                            class="w-full h-auto object-contain filter drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-6 mt-12 relative z-30">
                <div class="flex justify-between items-center mb-8 px-2 bg-gray-200/50 p-4 rounded-full backdrop-blur-sm">
                    <span class="font-medium text-brand-dark ml-4">Products</span>
                  
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <!-- Sesame Oil Card -->
                    <a href="contact.html" class="reveal relative group bg-gradient-to-b from-amber-50 to-amber-100 rounded-[2.5rem] p-8 min-h-[450px] flex flex-col items-center justify-end overflow-hidden hover:shadow-xl transition-shadow block">
                        <div class="absolute top-8 left-0 w-full text-center z-10">
                            <h3 class="text-2xl font-bold text-brand-dark mb-1">Ramaiah's Sesame Oil</h3>
                            <p class="text-gray-600 text-sm mb-2">Cold-Pressed & Pure</p>
                            <p class="text-gray-500 text-xs mb-4">Traditional wood-pressed for authentic taste</p>
                            <button class="bg-white px-6 py-2 rounded-full text-sm font-bold shadow-sm group-hover:bg-brand-yellow transition-colors">Shop Now</button>
                        </div>
                        <div class="w-40 h-56 relative z-0 transform group-hover:scale-105 transition-transform duration-300">
                            <img 
                                src="./public/images/sesameBottle1.png" 
                                alt="Ramaiah's Sesame Oil" 
                                class="w-full h-full object-contain filter drop-shadow-xl"
                            />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-amber-200/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                    <!-- Coconut Oil Card -->
                    <a href="contact.html" class="reveal relative group bg-gradient-to-b from-green-50 to-green-100 rounded-[2.5rem] p-8 min-h-[450px] flex flex-col items-center justify-end overflow-hidden hover:shadow-xl transition-shadow block" style="transition-delay: 100ms;">
                        <div class="absolute top-8 left-0 w-full text-center z-10">
                            <h3 class="text-2xl font-bold text-brand-dark mb-1">Ramaiah's Coconut Oil</h3>
                            <p class="text-gray-600 text-sm mb-2">Virgin & Unrefined</p>
                            <p class="text-gray-500 text-xs mb-4">100% natural with rich aroma</p>
                            <button class="bg-white px-6 py-2 rounded-full text-sm font-bold shadow-sm group-hover:bg-brand-yellow transition-colors">Shop Now</button>
                        </div>
                        <div class="w-40 h-56 relative z-0 transform group-hover:scale-105 transition-transform duration-300">
                            <img 
                                src="./public/images/oilBottle1.png" 
                                alt="Ramaiah's Coconut Oil" 
                                class="w-full h-full object-contain filter drop-shadow-xl"
                            />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-green-200/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
