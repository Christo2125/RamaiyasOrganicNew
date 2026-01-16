class Manifesto extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="manifesto" class="relative w-full py-32 px-4 bg-brand-bg overflow-hidden min-h-[80vh]">
            <div class="max-w-5xl mx-auto text-center relative z-10">
                <h2 id="manifesto-title" class="text-4xl md:text-6xl font-bold font-serif text-brand-dark mb-12 tracking-tight parallax-target">
                    Pure purity, simply traditional.
                </h2>
                
                <div class="text-2xl md:text-4xl text-gray-400 font-medium leading-relaxed max-w-4xl mx-auto">
                    <span class="reveal" style="transition-delay: 100ms;">Your family's health,</span>
                    <span class="reveal" style="transition-delay: 200ms;">traditional taste, <br class="hidden md:block"/></span>
                    <span class="reveal" style="transition-delay: 300ms;">and natural wellbeing</span>
                    <span class="reveal" style="transition-delay: 400ms;">matter most.</span>
                </div>
            </div>

            <!-- Ingredients List -->
            <div id="manifesto-list" class="mt-32 max-w-2xl mx-auto space-y-8 relative px-4 md:px-0 parallax-target">
                <div class="absolute -top-10 left-0 right-0 h-20 bg-gradient-to-b from-brand-bg to-transparent z-20 pointer-events-none"></div>
                <div class="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-brand-bg to-transparent z-20 pointer-events-none"></div>

                <div class="flex justify-between items-center border-b border-gray-300 pb-6 relative z-10 group cursor-pointer hover:border-brand-green transition-colors blur-reveal">
                    <span class="text-2xl text-brand-dark font-serif italic group-hover:text-brand-green transition-colors">Sesame Seeds</span>
                    <span class="text-2xl transform group-hover:scale-125 transition-transform duration-300">🌱</span>
                </div>
                <div class="flex justify-between items-center border-b border-gray-300 pb-6 relative z-10 group cursor-pointer hover:border-brand-green transition-colors blur-reveal">
                    <span class="text-2xl text-brand-dark font-serif italic group-hover:text-brand-green transition-colors">Coconut Kernel</span>
                    <span class="text-2xl transform group-hover:scale-125 transition-transform duration-300">🥥</span>
                </div>
                <div class="flex justify-between items-center border-b border-gray-300 pb-6 relative z-10 group cursor-pointer hover:border-brand-green transition-colors blur-reveal">
                    <span class="text-2xl text-brand-dark font-serif italic group-hover:text-brand-green transition-colors">Sun Dried</span>
                    <span class="text-2xl transform group-hover:scale-125 transition-transform duration-300">☀️</span>
                </div>
                <div class="flex justify-between items-center border-b border-gray-300 pb-6 relative z-10 group cursor-pointer hover:border-brand-green transition-colors blur-reveal">
                    <span class="text-2xl text-brand-dark font-serif italic group-hover:text-brand-green transition-colors">Wood Pressed</span>
                    <span class="text-2xl transform group-hover:scale-125 transition-transform duration-300">🪵</span>
                </div>
            </div>
        </section>
        `;

    if (window.lucide) window.lucide.createIcons();

    // Parallax Logic
    const manifesto = this.querySelector("#manifesto");
    const manifestoTitle = this.querySelector("#manifesto-title");
    const manifestoList = this.querySelector("#manifesto-list");

    window.addEventListener("scroll", () => {
      const manifestoRect = manifesto.getBoundingClientRect();
      const manifestoVisible =
        manifestoRect.top < window.innerHeight && manifestoRect.bottom > 0;

      if (manifestoVisible) {
        const manifestoProgress =
          (window.innerHeight - manifestoRect.top) /
          (window.innerHeight + manifestoRect.height);

        const titleY = Math.max(0, 50 - (manifestoProgress / 0.4) * 50);
        const titleOpacity = Math.min(1, manifestoProgress / 0.3);

        if (manifestoTitle) {
          manifestoTitle.style.transform = `translateY(${titleY}px)`;
          manifestoTitle.style.opacity = titleOpacity;
        }

        const listY = 100 - (manifestoProgress / 0.8) * 150;
        if (manifestoList) {
          manifestoList.style.transform = `translateY(${listY}px)`;
        }
      }
    });
  }
}
customElements.define("app-manifesto", Manifesto);
