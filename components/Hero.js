class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
            @keyframes float {
                0%, 100% { transform: translateY(0px) scale(1); }
                50% { transform: translateY(-20px) scale(1); }
            }
            .floating {
                animation: float 3s ease-in-out infinite;
            }
            .floating:hover {
                animation-play-state: paused;
            }
        </style>
        <section class="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[#f4f4f0]">
            <!-- Background - Leafy Texture with Fade -->
            <div class="absolute inset-0 z-0">
                <img 
                    src="./public/images/heroBackgroundImg.jpg" 
                    alt="Leaves Background" 
                    class="w-full h-full object-fit opacity-80"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#f4f4f0] via-white/40 to-white/10"></div>
            </div>

            <div class="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col items-center justify-center">
                <!-- Brand Text Layer -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-left z-0 w-full pointer-events-none select-none">
                    <span class="reveal text-brand-green font-serif italic text-xl md:text-2xl mb-2" style="transition-delay: 200ms;">Ramaiah's</span>
                    <h1 class="text-[16vw] leading-none font-serif text-brand-dark font-bold tracking-tighter opacity-90 mix-blend-multiply">
                        Pure Oils
                    </h1>
                </div>

                <!-- Product & CTA Layer -->
                <div class="relative z-20 flex flex-col items-center mt-12 md:mt-20 parallax-target">
                    <!-- High Quality Product Representation -->
                    <div class="relative group">
                        <div id="hero-product" class="w-64 h-80 md:w-80 md:h-[26rem] relative flex items-center justify-center transform transition-transform duration-500 hover:scale-[1.2] floating">
                            <img 
                                src="./public/images/oilBottle1.png" 
                                alt="Ramaiah's Oil Bottle" 
                                class="w-full h-full object-contain filter drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    <a href="contact.html">
                        <button class="reveal mt-10 bg-brand-yellow text-brand-dark px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#dbe64c] hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3" style="transition-delay: 800ms;">
                            Buy Now
                            <span class="bg-brand-dark text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                                <i data-lucide="arrow-right" class="w-3 h-3"></i>
                            </span>
                        </button>
                    </a>
                </div>

                <!-- Floating Info Cards (Bottom) -->
                <div class="absolute bottom-10 w-full px-6 md:px-12 flex flex-col md:flex-row justify-end items-end pointer-events-none">
                    <div class="reveal pointer-events-auto text-right max-w-xs" style="transition-delay: 700ms;">
                        <h3 class="text-xl font-bold text-brand-dark mb-2">Traditional Oil</h3>
                        <p class="text-brand-dark/70 text-sm font-medium leading-relaxed">
                            Authentic cold-pressed Sesame and Coconut oils, crafted for purity and health.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        `;

    if (window.lucide) window.lucide.createIcons();
  }
}
customElements.define("app-hero", Hero);
