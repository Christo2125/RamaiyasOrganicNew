class Lifestyle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="about" class="py-20 px-4 md:px-6 bg-gradient-to-b from-brand-bg to-white">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16 reveal">
                    <h2 class="text-7xl md:text-9xl font-serif font-bold text-brand-dark mb-4 tracking-tighter">Ramaiya’s</h2>
                    <p class="text-brand-green font-serif text-xl md:text-2xl mb-6 italic">Natural oils made with care</p>
                    <p class="text-gray-600 font-medium max-w-3xl mx-auto mb-4">From sourcing quality seeds to slow, wood-pressed extraction, every step reflects our commitment to health, honesty, and tradition.</p>
                    <p class="text-gray-400 italic font-serif max-w-2xl mx-auto">At Ramaiya Organic, we believe true wellness begins with purity. <br class="hidden md:block"/> Our cold-pressed oils preserve natural nutrients, aroma, and taste — just as generations trusted before us.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[800px]">
                    <div class="reveal bg-[#f0f2eb] rounded-3xl p-8 relative overflow-hidden group flex flex-col-reverse md:flex-row items-center gap-6">
                        <div class="relative z-10 flex-1">
                            <h3 class="text-3xl font-medium text-brand-dark max-w-xs">Towards a healthy and sustainable lifestyle</h3>
                            <p class="mt-3 text-gray-600 text-sm max-w-xs">We stand for conscious living. Natural food choices today create healthier families and a better tomorrow.</p>
                            <a href="contact.html">
                                <button class="mt-6 bg-brand-yellow px-6 py-2 rounded-full text-sm font-bold hover:shadow-lg transition-all">Contact Us</button>
                            </a>
                        </div>
                        <div class="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-brand-green rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <img src="./public/images/coconut.png" class="relative md:static rounded-[20px] mb-6 md:mb-0 w-full md:w-1/2 object-contain transform translate-y-0 md:translate-y-12 group-hover:translate-y-0 transition-transform duration-500" alt="Product lifestyle">
                    </div>
                     <div class="reveal bg-[#faf5eb] rounded-3xl p-8 relative overflow-hidden group flex flex-col-reverse md:flex-row items-center gap-6">
                        <div class="relative z-10 flex-1">
                            <h3 class="text-3xl font-medium text-brand-dark max-w-xs">Pure, Traditional & Cold-Pressed for generations</h3>
                            <p class="mt-3 text-gray-600 text-sm max-w-xs">Our marachekku extraction avoids heat and chemicals, retaining essential nutrients and authentic flavour in every drop.</p>
                        </div>
                        <div class="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-brand-yellow rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <img src="./public/images/sesameoil.jpg" class="relative md:static rounded-[20px] mb-6 md:mb-0 w-full md:w-1/2 object-contain transform translate-y-0 md:translate-y-12 group-hover:translate-y-0 transition-transform duration-500" alt="Sesame Oil">
                    </div>
                    <div class="reveal bg-[#e8ece6] rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between group gap-6" style="transition-delay: 200ms;">
                        <div class="relative z-10 flex-1">
                            <h3 class="text-3xl font-medium text-brand-dark">The future of health starts today</h3>
                            <p class="mt-2 text-gray-600 text-sm">A small change in your kitchen can make a lifelong difference.</p>
                        </div>
                        <img src="./public/images/nature2.jpg" class="relative md:static w-full md:w-1/2 object-contain rounded-2xl mb-6 md:mb-0 transform translate-y-0 md:translate-y-12 group-hover:translate-y-0 transition-transform duration-500" alt="Vegetables">
                    </div>
                    <div class="reveal bg-gradient-to-br from-[#9fab76] to-[#7d8c55] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden gap-6" style="transition-delay: 300ms;">
                        <div class="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20"></div>
                        <div class="relative z-10 flex-1">
                            <h3 class="text-xl md:text-4xl font-medium text-white leading-tight mb-4">
                                Balance your<br/>health, sleep,<br/>and energy
                            </h3>
                            <p class="text-white/80 text-sm max-w-xs">Traditional oils support digestion, immunity, and everyday vitality.</p>
                        </div>
                        <div class="relative z-10 w-full md:w-1/2 flex justify-center transform translate-y-0 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                            <i data-lucide="sparkles" class="w-24 h-24 md:w-32 md:h-32 text-white/30"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;

    if (window.lucide) window.lucide.createIcons();
  }
}
customElements.define("app-lifestyle", Lifestyle);
