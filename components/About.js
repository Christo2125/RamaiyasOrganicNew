class About extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="py-24 px-4 md:px-6 bg-brand-bg relative overflow-hidden">
            <div class="max-w-7xl mx-auto">
                <!-- Header Section -->
                <div class="text-center mb-20 reveal">
                    <span class="text-brand-green font-semibold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
                    <h1 class="text-6xl md:text-8xl font-serif font-bold text-brand-dark mb-6 leading-tight">
                        Welcome To <br/> 
                        <span class="text-brand-green italic">Ramaiah Organic</span>
                    </h1>
                    <p class="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
                       As all we commonly know that UDANKUDI is famously know for KARUPATI . And it's Trade Mark 
                    </p>
                </div>

                <!-- Main Content Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div class="reveal active bg-white rounded-[3rem] p-12 shadow-xl shadow-brand-green/5 flex flex-col justify-center">
                        <h2 class="text-4xl font-serif font-bold text-brand-dark mb-6">Our Farm & Heritage</h2>
                        <p class="text-gray-600 leading-relaxed mb-6">
                            We Ramahaiya Organic origin of Udankudi we have more than 20 acers of our own farm land which is maintained with organic fertilizers and chemical free . 

Our outlet for all our products are in Udankudi Market which is more than 80yrs old and a 4th generation is also in same business. Which prescribes the quality and value of the product we deliver in market.
                        </p>
                        <p class="text-gray-600 leading-relaxed">
                            Our outlet in Udankudi Market is more than 80 years old, where the 4th generation is now continuing the business. This longevity prescribes the quality and value of every product we deliver.
                        </p>
                    </div>
                    <div class="reveal active rounded-[3rem] overflow-hidden h-[500px] shadow-2xl">
                        <img 
                            src="./public/images/AboutPageOil.jpg" 
                            alt="Traditional Extraction Process" 
                            class="w-full h-full object-cover"
                        >
                    </div>
                </div>

                <!-- Visual Grid (Inspiration from Lifestyle.js) -->  
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
                    <div class="reveal bg-gradient-to-br from-emerald-50 to-emerald-100/40 rounded-3xl p-8 relative overflow-hidden group h-auto lg:h-[400px] flex flex-col justify-between border border-emerald-100/50">
                        <div>
                            <span class="bg-brand-green text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">Generation</span>
                            <h3 class="text-4xl font-serif font-bold text-brand-dark mt-4">Direct Market <br/> Distribution</h3>
                        </div>
                        <p class="text-gray-600 text-sm relative z-10 font-medium mt-6 md:mt-0">Now we the 4th Gen Coming to the direct market distribution with out any middle man where people can get quality product in very reasonable price and quality .
What we do in Farm ????</p>
                        <div class="absolute bottom-[-50px] right-[-50px] w-48 h-48 bg-brand-green rounded-full blur-3xl opacity-10"></div>
                    </div>

                    <div class="reveal bg-gradient-to-br from-amber-50 to-amber-100/40 rounded-3xl p-8 relative overflow-hidden group h-auto lg:h-[400px] flex flex-col justify-between md:col-span-2 border border-amber-100/50">
                         <div class="max-w-md relative z-10">
                            <span class="bg-brand-yellow text-brand-dark text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">Purity</span>
                            <h3 class="text-4xl font-serif font-bold text-brand-dark mt-4">Pure  <br/> Trees</h3>
                            <p class="text-gray-600 font-medium text-lg mt-4 leading-tight">We have Palm Tress which are given only organic fertilizers.  no chemicals are used </p>
                        </div>
                        <div class="absolute inset-0 w-full h-full md:w-1/2 md:left-auto md:right-0">
                            <img src="./public/images/leave.jpg" class="w-full h-full object-cover opacity-20 md:opacity-90" alt="Sustainable farming">
                        </div>
                    </div>
                </div>

                <!-- Values Section -->
                <div class="reveal bg-gradient-to-br from-[#9fab76] to-[#7d8c55] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10"></div>
                    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 class="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">Our Signature Products</h2>
                            <ul class="space-y-6">
                                <li class="flex items-center gap-4">
                                    <div class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                                        <i data-lucide="check" class="w-4 h-4 text-white"></i>
                                    </div>
                                    <span class="text-lg font-medium">Panakelangu / Powder</span>
                                </li>
                                <li class="flex items-center gap-4">
                                    <div class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                                        <i data-lucide="check" class="w-4 h-4 text-white"></i>
                                    </div>
                                    <span class="text-lg font-medium">Panakarkandu</span>
                                </li>
                                <li class="flex items-center gap-4">
                                    <div class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                                        <i data-lucide="check" class="w-4 h-4 text-white"></i>
                                    </div>
                                    <span class="text-lg font-medium uppercase">Karupatti</span>
                                </li>
                            </ul>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                             <div class="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 border border-white/10">
                                 <i data-lucide="shield-check" class="w-8 h-8 text-white mb-4 opacity-80"></i>
                                 <span class="text-sm font-bold uppercase tracking-wider text-center text-white/90">Safety <br/> First</span>
                             </div>
                             <div class="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 border border-white/10">
                                 <i data-lucide="heart" class="w-8 h-8 text-white mb-4 opacity-80"></i>
                                 <span class="text-sm font-bold uppercase tracking-wider text-center text-white/90">Handmade <br/> with Love</span>
                             </div>
                             <div class="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 border border-white/10">
                                 <i data-lucide="leaf" class="w-8 h-8 text-white mb-4 opacity-80"></i>
                                 <span class="text-sm font-bold uppercase tracking-wider text-center text-white/90">Eco <br/> Friendly</span>
                             </div>
                             <div class="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 border border-white/10">
                                 <i data-lucide="award" class="w-8 h-8 text-white mb-4 opacity-80"></i>
                                 <span class="text-sm font-bold uppercase tracking-wider text-center text-white/90">Timeless <br/> Health</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;

    if (window.lucide) window.lucide.createIcons();
  }
}
customElements.define("app-about-content", About);
