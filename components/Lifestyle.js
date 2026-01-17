class Lifestyle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="about" class="py-20 px-4 md:px-6 bg-gradient-to-b from-brand-bg to-white">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16 reveal">
                    <h2 class="text-6xl md:text-8xl font-serif font-bold text-brand-dark mb-4">Ramaiah's</h2>
                    <p class="text-gray-500 italic font-serif">Support your health with expert <br/> crafted pure oils</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[800px]">
                    <div class="reveal bg-[#f0f2eb] rounded-3xl p-8 relative overflow-hidden group flex flex-col-reverse md:block">
                        <div class="relative z-10">
                            <h3 class="text-2xl font-medium text-brand-dark max-w-xs">Towards a healthy and sustainable lifestyle</h3>
                            <button class="mt-6 bg-brand-yellow px-6 py-2 rounded-full text-sm font-bold hover:shadow-lg transition-all">Contact Us</button>
                        </div>
                        <div class="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-brand-green rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <img src="./public/images/coconut.png" class="relative md:absolute rounded-[20px] mb-6 md:mb-0 md:bottom-0 md:right-0 w-full md:w-1/2 object-contain transform translate-y-0 md:translate-y-10 group-hover:translate-y-0 transition-transform duration-500" alt="Product lifestyle">
                    </div>
                     <div class="reveal bg-[#faf5eb] rounded-3xl p-8 relative overflow-hidden group flex flex-col-reverse md:block">
                        <div class="relative z-10">
                            <h3 class="text-2xl font-medium text-brand-dark max-w-xs">Pure, Traditional & Cold-Pressed for generations</h3>
                            <p class="mt-3 text-gray-600 text-sm max-w-xs">Experience the authentic taste and natural goodness <br/> of oils made <br/>the way our ancestors <br/>  intended.</p>
                        </div>
                        <div class="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-brand-yellow rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <img src="./public/images/sesameoil.jpg" class="relative md:absolute rounded-[20px] mb-6 md:mb-0 md:bottom-0 md:right-0 w-full md:w-1/2 object-contain transform translate-y-0 md:translate-y-10 group-hover:translate-y-0 transition-transform duration-500" alt="Sesame Oil">
                    </div>
                    <div class="reveal bg-[#e8ece6] rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-col justify-between group" style="transition-delay: 200ms;">
                        <img src="./public/images/nature2.jpg" class="relative md:absolute md:bottom-[-20px] md:left-[-20px] w-full md:w-2/3 object-contain rounded-2xl mb-6 md:mb-0 group-hover:translate-y-0 transition-transform " alt="Vegetables">
                        <h3 class="text-2xl font-medium text-brand-dark text-left md:text-right relative z-10">The future of health starts today</h3>
                    </div>
                    <div class="reveal bg-gradient-to-br from-[#9fab76] to-[#7d8c55] rounded-3xl p-8 flex items-end justify-start relative overflow-hidden" style="transition-delay: 300ms;">
                        <div class="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20"></div>
                        <h3 class="text-4xl md:text-5xl font-medium text-white leading-tight relative z-10">
                            Balance your<br/>health, sleep,<br/>and energy.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
        `;

    if (window.lucide) window.lucide.createIcons();
  }
}
customElements.define("app-lifestyle", Lifestyle);
