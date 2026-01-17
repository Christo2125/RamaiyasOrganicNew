class About extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="py-24 px-4 md:px-6 bg-brand-bg relative overflow-hidden">
            <div class="max-w-7xl mx-auto">
                <!-- Header Section -->
                <div class="text-center mb-20 reveal">
                    <span class="text-brand-green font-semibold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
                    <h1 class="text-6xl md:text-8xl font-serif font-bold text-brand-dark mb-6 leading-tight">
                        Legacy of <br/> 
                        <span class="text-brand-green italic">Purity.</span>
                    </h1>
                    <p class="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
                        Rooted in tradition, Ramaiah's brings the ancient wisdom of cold-pressing to your modern kitchen.
                    </p>
                </div>

                <!-- Main Content Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div class="reveal active bg-white rounded-[3rem] p-12 shadow-xl shadow-brand-green/5 flex flex-col justify-center">
                        <h2 class="text-3xl font-serif font-bold text-brand-dark mb-6">Traditional Extraction</h2>
                        <p class="text-gray-600 leading-relaxed mb-6">
                            At Ramaiah's, we believe that nature knows best. Our journey began with a simple mission: to preserve the nutritional integrity of oils just as they are found in nature. 
                        </p>
                        <p class="text-gray-600 leading-relaxed">
                            We use the ancient wood-pressed method. This traditional extraction process ensures no heat is generated, preserving all the vital nutrients, minerals, and the authentic aroma of the seeds.
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
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <div class="reveal bg-[#f0f2eb] rounded-3xl p-8 relative overflow-hidden group h-[400px] flex flex-col justify-between">
                        <div>
                            <span class="bg-brand-green text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">Innovation</span>
                            <h3 class="text-2xl font-serif font-bold text-brand-dark mt-4">Merging Tradition <br/> with Quality</h3>
                        </div>
                        <p class="text-gray-600 text-sm relative z-10">We use modern quality checks on ancient pressing techniques.</p>
                        <div class="absolute bottom-[-50px] right-[-50px] w-48 h-48 bg-brand-green rounded-full blur-3xl opacity-10"></div>
                    </div>

                    <div class="reveal bg-[#faf5eb] rounded-3xl p-8 relative overflow-hidden group h-[400px] flex flex-col justify-between md:col-span-2">
                         <div class="max-w-md relative z-10">
                            <span class="bg-brand-yellow text-brand-dark text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">Purity</span>
                            <h3 class="text-4xl font-serif font-bold text-brand-dark mt-4">100% Organic, <br/> 0% Compromise</h3>
                            <p class="text-gray-600 text-lg mt-4">Every drop is a testament to our commitment to your health and the environment.</p>
                        </div>
                        <div class="absolute inset-0 w-full h-full md:w-1/2 md:left-auto md:right-0">
                            <img src="./public/images/leave.jpg" class="w-full h-full object-cover opacity-70 md:opacity-100" alt="Sustainable farming">
                        </div>
                    </div>
                </div>

                <!-- Values Section -->
                <div class="reveal bg-brand-dark rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10"></div>
                    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 class="text-4xl md:text-5xl font-serif font-bold mb-8 italic text-brand-yellow">Why Ramaiah's?</h2>
                            <ul class="space-y-6">
                                <li class="flex items-center gap-4">
                                    <div class="w-8 h-8 bg-brand-yellow/20 rounded-full flex items-center justify-center border border-brand-yellow/30">
                                        <i data-lucide="check" class="w-4 h-4 text-brand-yellow"></i>
                                    </div>
                                    <span class="text-lg font-medium">True Cold-Pressed Technique</span>
                                </li>
                                <li class="flex items-center gap-4">
                                    <div class="w-8 h-8 bg-brand-yellow/20 rounded-full flex items-center justify-center border border-brand-yellow/30">
                                        <i data-lucide="check" class="w-4 h-4 text-brand-yellow"></i>
                                    </div>
                                    <span class="text-lg font-medium">No Chemicals or Preservatives</span>
                                </li>
                                <li class="flex items-center gap-4">
                                    <div class="w-8 h-8 bg-brand-yellow/20 rounded-full flex items-center justify-center border border-brand-yellow/30">
                                        <i data-lucide="check" class="w-4 h-4 text-brand-yellow"></i>
                                    </div>
                                    <span class="text-lg font-medium">Sustainably Sourced Seeds</span>
                                </li>
                            </ul>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                             <div class="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 border border-white/10">
                                <i data-lucide="shield-check" class="w-8 h-8 text-brand-yellow mb-4"></i>
                                <span class="text-sm font-bold uppercase tracking-wider text-center">Safety <br/> First</span>
                             </div>
                             <div class="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 border border-white/10">
                                <i data-lucide="heart" class="w-8 h-8 text-brand-yellow mb-4"></i>
                                <span class="text-sm font-bold uppercase tracking-wider text-center">Handmade <br/> with Love</span>
                             </div>
                             <div class="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 border border-white/10">
                                <i data-lucide="leaf" class="w-8 h-8 text-brand-yellow mb-4"></i>
                                <span class="text-sm font-bold uppercase tracking-wider text-center">Eco <br/> Friendly</span>
                             </div>
                             <div class="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 border border-white/10">
                                <i data-lucide="award" class="w-8 h-8 text-brand-yellow mb-4"></i>
                                <span class="text-sm font-bold uppercase tracking-wider text-center">Premium <br/> Quality</span>
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
