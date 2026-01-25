class Benefits extends HTMLElement {
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
        </style>
        <section class="relative py-24 bg-brand-bg overflow-hidden">
            <div class="max-w-7xl mx-auto px-6 text-center">
                <h2 class="text-[12vw] md:text-[8vw] font-serif font-bold text-brand-dark leading-none mb-12">Benefits</h2>
                
                <div class="relative max-w-4xl mx-auto h-[600px] flex items-center justify-center">
                    <div class="absolute w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-3xl"></div>
                    <div class="absolute w-[400px] h-[400px] border border-brand-green/20 rounded-full animate-spin-slow"></div>

                    <div class="relative z-10 w-full h-full flex items-center justify-center">
                         <div id="benefits-bottle-placeholder" class="w-[200px] md:w-[250px] aspect-[0.6] opacity-0"></div>

                    </div>

                    <!-- Benefit Pills -->
                    <div class="reveal absolute top-[5%] md:top-[20%] left-0 md:left-10 bg-gray-200/80 backdrop-blur-sm pr-6 pl-2 py-2 rounded-full flex items-center gap-3 shadow-sm border border-white" style="transition-delay: 200ms;">
                        <span class="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark">
                            <i data-lucide="heart" class="w-4.5 h-4.5"></i>
                        </span>
                        <div class="text-left">
                            <p class="text-[10px] text-gray-500">Rich in healthy fats</p>
                            <p class="text-xs md:text-sm font-bold text-brand-dark">Supports Heart Health</p>
                        </div>
                    </div>
                    <div class="reveal absolute top-[10%] md:top-[25%] right-0 md:right-10 bg-gray-200/80 backdrop-blur-sm pr-6 pl-2 py-2 rounded-full flex items-center gap-3 shadow-sm border border-white" style="transition-delay: 300ms;">
                        <span class="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark">
                            <i data-lucide="sparkles" class="w-4.5 h-4.5"></i>
                        </span>
                        <div class="text-left">
                            <p class="text-[10px] text-gray-500">Vitamin E & Sesamol</p>
                            <p class="text-xs md:text-sm font-bold text-brand-dark">Natural Antioxidants</p>
                        </div>
                    </div>
                    <div class="reveal absolute bottom-[5%] md:bottom-[20%] left-0 md:left-20 bg-gray-200/80 backdrop-blur-sm pr-6 pl-2 py-2 rounded-full flex items-center gap-3 shadow-sm border border-white" style="transition-delay: 400ms;">
                        <span class="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark">
                            <i data-lucide="leaf" class="w-4.5 h-4.5"></i>
                        </span>
                        <div class="text-left">
                            <p class="text-[10px] text-gray-500">100% cold-pressed & pure</p>
                            <p class="text-xs md:text-sm font-bold text-brand-dark">Straight From Nature</p>
                        </div>
                    </div>
                    <div class="reveal absolute bottom-[10%] md:bottom-[15%] right-0 md:right-20 bg-gray-200/80 backdrop-blur-sm pr-6 pl-2 py-2 rounded-full flex items-center gap-3 shadow-sm border border-white" style="transition-delay: 500ms;">
                        <span class="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark">
                            <i data-lucide="zap" class="w-4.5 h-4.5"></i>
                        </span>
                        <div class="text-left">
                            <p class="text-[10px] text-gray-500">Medium-chain fatty acids</p>
                            <p class="text-xs md:text-sm font-bold text-brand-dark">Quick Energy Boost</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;

    if (window.lucide) window.lucide.createIcons();
  }
}
customElements.define("app-benefits", Benefits);
