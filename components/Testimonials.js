class Testimonials extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="py-24 bg-brand-bg relative overflow-hidden">
            <div class="max-w-4xl mx-auto text-center relative z-10 px-4">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full shadow-xl opacity-50 z-0"></div>
                <div class="relative z-10 py-12 reveal">
                    <p class="text-2xl md:text-3xl font-medium text-brand-dark leading-relaxed mb-6">
                        “I've never felt more resilient. This is a must-have for staying healthy year-round, backed by real science.”
                    </p>
                    <div class="flex flex-col items-center">
                        <h4 class="font-bold text-brand-dark">Lewis Herington</h4>
                        <span class="text-sm text-gray-500">Music Producer</span>
                    </div>
                    <div class="flex items-center justify-center gap-4 mt-8">
                        <button class="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors shadow-sm">
                            <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
                        </button>
                        <div class="flex gap-2">
                            <span class="w-2 h-2 rounded-full bg-brand-dark"></span>
                            <span class="w-2 h-2 rounded-full bg-gray-300"></span>
                            <span class="w-2 h-2 rounded-full bg-gray-300"></span>
                            <span class="w-2 h-2 rounded-full bg-gray-300"></span>
                        </div>
                        <button class="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors shadow-sm">
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="reveal absolute top-1/3 left-[10%] w-24 h-24 rounded-2xl overflow-hidden shadow-lg hidden md:block" style="transition-delay: 200ms;">
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200&auto=format&fit=crop" class="w-full h-full object-cover" alt="User 1">
            </div>
            <div class="reveal absolute bottom-1/3 right-[10%] w-24 h-24 rounded-2xl overflow-hidden shadow-lg hidden md:block" style="transition-delay: 300ms;">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" class="w-full h-full object-cover" alt="User 2">
            </div>
        </section>
        `;
        
        if (window.lucide) window.lucide.createIcons();
    }
}
customElements.define('app-testimonials', Testimonials);
