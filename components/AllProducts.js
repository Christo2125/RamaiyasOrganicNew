class AllProducts extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
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
                bottom: 125%;
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
        <section class="w-full py-12 md:py-24 bg-brand-bg min-h-screen">
            <div class="max-w-7xl mx-auto px-6">
                <!-- Header -->
                <div class="text-center mb-16">
                    <h1 class="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-4 reveal">Our Products</h1>
                    <p class="text-gray-600 max-w-2xl mx-auto reveal" style="transition-delay: 100ms;">
                        Explore our complete range of authentic, traditional, and natural products, thoughtfully prepared to support everyday wellness.
                    </p>
                </div>

                <!-- Product Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    
                    <!-- 1. Ramaiah's Sesame Oil -->
                    <a href="contact.html" class="reveal group bg-gradient-to-br from-amber-50 to-amber-200/60 rounded-[2.5rem] p-6 flex flex-col items-center hover:shadow-2xl hover:shadow-amber-200/40 transition-all duration-500 block border border-amber-100/50">
                        <div class="w-full aspect-[4/5] relative mb-6 flex items-center justify-center overflow-hidden rounded-3xl bg-white/60 transform group-hover:scale-[1.02] transition-transform duration-500">
                             <img src="./public/images/sesameoilImg.png" alt="Ramaiah's Sesame Oil" class="w-full h-full object-contain transform group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500 filter drop-shadow-xl">
                        </div>
                        <div class="text-center w-full transition-transform duration-300 group-hover:-translate-y-1">
                            <h3 class="text-xl font-bold text-brand-dark mb-2">Ramaiah’s Sesame Oil</h3>
                            <p class="text-amber-800/80 font-serif text-sm italic mb-2">Marachekku Gingili Oil / மரச்செக்கு நல்லெண்ணெய்</p>
                            <p class="text-xs font-bold text-brand-dark mb-4 bg-amber-200/40 py-1 px-3 rounded-full inline-block">Available in 1000ml , 500 ml</p>
                            <div class="tooltip-container mb-6">
                                <p class="text-gray-600 text-xs line-clamp-2 opacity-80">Traditional cold-pressed gingili oil extracted using the age-old marachekku method. Rich in nutrients, natural aroma...</p>
                                <div class="tooltip-text">
                                    Traditional cold-pressed gingili oil extracted using the age-old marachekku method. Rich in nutrients, natural aroma, and authentic taste, perfect for daily cooking and healthy living.
                                </div>
                            </div>
                            <button class="w-full bg-white border border-amber-200/50 py-3 rounded-full text-sm font-bold shadow-sm group-hover:bg-brand-yellow group-hover:border-transparent btn-animate">Order Now</button>
                        </div>
                    </a>

                    <!-- 2. Ramaiah's Coconut Oil -->
                    <a href="contact.html" class="reveal group bg-gradient-to-br from-emerald-50 to-emerald-200/60 rounded-[2.5rem] p-6 flex flex-col items-center hover:shadow-2xl hover:shadow-emerald-200/40 transition-all duration-500 block border border-emerald-100/50" style="transition-delay: 100ms;">
                        <div class="w-full aspect-[4/5] relative mb-6 flex items-center justify-center overflow-hidden rounded-3xl bg-white/60 transform group-hover:scale-[1.02] transition-transform duration-500">
                             <img src="./public/images/groundnutoilHand.png" alt="Ramaiah's Coconut Oil" class="w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500 filter drop-shadow-xl">
                        </div>
                        <div class="text-center w-full transition-transform duration-300 group-hover:-translate-y-1">
                            <h3 class="text-xl font-bold text-brand-dark mb-2">Ramaiah’s Coconut Oil</h3>
                            <p class="text-emerald-800/80 font-serif text-sm italic mb-2">Marachekku Coconut Oil / மரச்செக்கு தேங்காய் எண்ணெய்</p>
                            <p class="text-xs font-bold text-brand-dark mb-4 bg-emerald-200/40 py-1 px-3 rounded-full inline-block">Available in 1000 ml , 500ml , 200ml</p>
                            <div class="tooltip-container mb-6">
                                <p class="text-gray-600 text-xs line-clamp-2 opacity-80">Pure marachekku coconut oil made without heat or chemicals...</p>
                                <div class="tooltip-text">
                                    Pure marachekku coconut oil made without heat or chemicals. Preserving natural nutrients and authentic taste for your wellbeing.
                                </div>
                            </div>
                            <button class="w-full bg-white border border-emerald-200/50 py-3 rounded-full text-sm font-bold shadow-sm group-hover:bg-brand-yellow group-hover:border-transparent btn-animate">Order Now</button>
                        </div>
                    </a>

                    <!-- 3. Ramaiah's Groundnut Oil -->
                    <a href="contact.html" class="reveal group bg-gradient-to-br from-orange-50 to-orange-200/60 rounded-[2.5rem] p-6 flex flex-col items-center hover:shadow-2xl hover:shadow-orange-200/40 transition-all duration-500 block border border-orange-100/50" style="transition-delay: 200ms;">
                        <div class="w-full aspect-[4/5] relative mb-6 flex items-center justify-center overflow-hidden rounded-3xl bg-white/60 transform group-hover:scale-[1.02] transition-transform duration-500">
                             <img src="./public/images/groundnutImage.png" alt="Ramaiah's Groundnut Oil" class="w-full h-full object-contain transform group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500 filter drop-shadow-xl">
                        </div>
                        <div class="text-center w-full transition-transform duration-300 group-hover:-translate-y-1">
                            <h3 class="text-xl font-bold text-brand-dark mb-2">Ramaiah’s Groundnut Oil</h3>
                            <p class="text-orange-800/80 font-serif text-sm italic mb-2">Marachekku Groundnut Oil / மரச்செக்கு கடலை எண்ணெய்</p>
                            <p class="text-xs font-bold text-brand-dark mb-4 bg-orange-200/40 py-1 px-3 rounded-full inline-block">Available in 1000 ml ,500ml</p>
                            <div class="tooltip-container mb-6">
                                <p class="text-gray-600 text-xs line-clamp-2 opacity-80">Traditional cold-pressed groundnut oil with natural flavour...</p>
                                <div class="tooltip-text">
                                    Traditional cold-pressed groundnut oil with natural flavour. Extracted using the traditional wood-pressed method for maximum nutrient retention.
                                </div>
                            </div>
                            <button class="w-full bg-white border border-orange-200/50 py-3 rounded-full text-sm font-bold shadow-sm group-hover:bg-brand-yellow group-hover:border-transparent btn-animate">Order Now</button>
                        </div>
                    </a>

                    <!-- 4. Udangudi Karupathi -->
                    <a href="contact.html" class="reveal group bg-gradient-to-br from-rose-50 to-rose-200/60 rounded-[2.5rem] p-6 flex flex-col items-center hover:shadow-2xl hover:shadow-rose-200/40 transition-all duration-500 block border border-rose-100/50">
                        <div class="w-full aspect-[4/5] relative mb-6 flex items-center justify-center overflow-hidden rounded-3xl bg-white/60 transform group-hover:scale-[1.02] transition-transform duration-500">
                             <img src="./public/images/UdangudiKarupathi.png" alt="Udangudi Karupathi" class="w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500 filter drop-shadow-xl">
                        </div>
                        <div class="text-center w-full transition-transform duration-300 group-hover:-translate-y-1">
                            <h3 class="text-xl font-bold text-brand-dark mb-2">Udangudi Karupathi</h3>
                            <p class="text-rose-700/80 font-serif text-sm italic mb-2">Palm Jaggery / உடன்குடி கருப்பட்டி</p>
                            <div class="tooltip-container mb-6">
                                <p class="text-gray-600 text-xs line-clamp-2 opacity-80">Traditional palm jaggery from Udangudi palm juice. Extracted using age-old methods...</p>
                                <div class="tooltip-text">
                                    Traditional palm jaggery from Udangudi palm juice. Extracted using age-old methods, rich in iron and minerals, acting as a natural detoxifier for the body.
                                </div>
                            </div>
                            <button class="w-full bg-white border border-rose-200/50 py-3 rounded-full text-sm font-bold shadow-sm group-hover:bg-brand-yellow group-hover:border-transparent btn-animate">Order Now</button>
                        </div>
                    </a>

                    <!-- 5. Panam Kalkandu -->
                    <a href="contact.html" class="reveal group bg-gradient-to-br from-sky-50 to-sky-200/60 rounded-[2.5rem] p-6 flex flex-col items-center hover:shadow-2xl hover:shadow-sky-200/40 transition-all duration-500 block border border-sky-100/50" style="transition-delay: 100ms;">
                        <div class="w-full aspect-[4/5] relative mb-6 flex items-center justify-center overflow-hidden rounded-3xl bg-white/60 transform group-hover:scale-[1.02] transition-transform duration-500">
                             <img src="./public/images/PanamKalkandu.png" alt="Panam Kalkandu" class="w-full h-full object-contain transform group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500 filter drop-shadow-xl">
                        </div>
                        <div class="text-center w-full transition-transform duration-300 group-hover:-translate-y-1">
                            <h3 class="text-xl font-bold text-brand-dark mb-2">Panam Kalkandu</h3>
                            <p class="text-sky-700/80 font-serif text-sm italic mb-2">Palm Candy / பனங்கற்கண்டு</p>
                            <div class="tooltip-container mb-6">
                                <p class="text-gray-600 text-xs line-clamp-2 opacity-80">Natural crystal sugar made from palmyra juice. Known for its cooling properties...</p>
                                <div class="tooltip-text">
                                    Natural crystal sugar made from palmyra juice. Known for its cooling properties and effectiveness in relieving cough and respiratory issues.
                                </div>
                            </div>
                            <button class="w-full bg-white border border-sky-200/50 py-3 rounded-full text-sm font-bold shadow-sm group-hover:bg-brand-yellow group-hover:border-transparent btn-animate">Order Now</button>
                        </div>
                    </a>

                    <!-- 6. Nattu Sakkarai -->
                    <a href="contact.html" class="reveal group bg-gradient-to-br from-orange-50 to-orange-200/60 rounded-[2.5rem] p-6 flex flex-col items-center hover:shadow-2xl hover:shadow-orange-200/40 transition-all duration-500 block border border-orange-100/50" style="transition-delay: 200ms;">
                         <div class="w-full aspect-[4/5] relative mb-6 flex items-center justify-center overflow-hidden rounded-3xl bg-white/60 transform group-hover:scale-[1.02] transition-transform duration-500">
                             <img src="./public/images/NattuSarkarai.png" alt="Nattu Sakkarai" class="w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500 filter drop-shadow-xl">
                        </div>
                        <div class="text-center w-full transition-transform duration-300 group-hover:-translate-y-1">
                            <h3 class="text-xl font-bold text-brand-dark mb-2">Nattu Sakkarai</h3>
                            <p class="text-orange-700/80 font-serif text-sm italic mb-2">Country Sugar / நாட்டு சக்கரை</p>
                            <div class="tooltip-container mb-6">
                                <p class="text-gray-600 text-xs line-clamp-2 opacity-80">Organic unrefined cane sugar, prepared without any chemical processing...</p>
                                <div class="tooltip-text">
                                    Organic unrefined cane sugar, prepared without any chemical processing. Retains all natural minerals and acts as a healthy alternative to white sugar.
                                </div>
                            </div>
                            <button class="w-full bg-white border border-orange-200/50 py-3 rounded-full text-sm font-bold shadow-sm group-hover:bg-brand-yellow group-hover:border-transparent btn-animate">Order Now</button>
                        </div>
                    </a>

                     <!-- 7. Forest Honey -->
                    <a href="contact.html" class="reveal group bg-gradient-to-br from-yellow-50 to-yellow-200/60 rounded-[2.5rem] p-6 flex flex-col items-center hover:shadow-2xl hover:shadow-yellow-200/40 transition-all duration-500 block border border-yellow-100/50">
                        <div class="w-full aspect-[4/5] relative mb-6 flex items-center justify-center overflow-hidden rounded-3xl bg-white/60 transform group-hover:scale-[1.02] transition-transform duration-500">
                             <img src="./public/images/forestHoney.jpg" alt="Forest Honey" class="h-full w-auto object-contain transform group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500 filter drop-shadow-xl mix-blend-multiply">
                        </div>
                        <div class="text-center w-full transition-transform duration-300 group-hover:-translate-y-1">
                            <h3 class="text-xl font-bold text-brand-dark mb-2">Forest Honey</h3>
                            <p class="text-yellow-800/80 font-serif text-sm italic mb-2">Wild Honey / மலைத்தேன்</p>
                            <p class="text-xs font-bold text-brand-dark mb-4 bg-yellow-200/40 py-1 px-3 rounded-full inline-block">Available in 1kg , 1/2 kg , 1/4 kg</p>
                            <div class="tooltip-container mb-6">
                                <p class="text-gray-600 text-xs line-clamp-2 opacity-80">100% pure wild honey collected from natural forest hives. Unprocessed and nutrient-rich...</p>
                                <div class="tooltip-text">
                                    100% pure wild honey collected from natural forest hives. Unprocessed and nutrient-rich, offering authentic taste and numerous health benefits.
                                </div>
                            </div>
                            <button class="w-full bg-white border border-yellow-200/50 py-3 rounded-full text-sm font-bold shadow-sm group-hover:bg-brand-yellow group-hover:border-transparent btn-animate">Order Now</button>
                        </div>
                    </a>

                </div>
            </div>
        </section>
        `;
  }
}
customElements.define("app-all-products", AllProducts);
