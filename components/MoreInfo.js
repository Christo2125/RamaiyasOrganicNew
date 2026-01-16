class MoreInfo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-6 text-center">
                <h2 class="text-[10vw] font-serif font-bold text-brand-dark mb-12 reveal">More...</h2>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <!-- Option 1 -->
                    <div class="reveal p-6 rounded-3xl bg-gray-50 border-2 border-brand-green/10 flex flex-col items-center hover:bg-gray-50 transition-colors">
                        <div class="mb-8 relative">
                            <div class="w-2 h-24 bg-[#d4a373] mx-auto rounded-full"></div>
                            <div class="w-24 h-24 bg-[#d4a373] rounded-full -mt-2 flex items-center justify-center shadow-inner">
                                <div class="w-16 h-16 rounded-full bg-brand-green shadow-sm"></div>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold mb-4">Nuvèra</h3>
                        <p class="text-xs text-gray-400 mb-6">Save up to $800/mo* on your</p>
                        <div class="w-full space-y-3 mb-6">
                            <div class="flex justify-between text-sm"><span class="text-gray-500">Protein</span><span class="font-medium text-brand-dark">100-120g/day</span></div>
                            <div class="flex justify-between text-sm"><span class="text-gray-500">Movement</span><span class="font-medium text-brand-dark">10-40g/day</span></div>
                            <div class="flex justify-between text-sm"><span class="text-gray-500">Sleep</span><span class="font-medium text-brand-dark">70-80g/day</span></div>
                        </div>
                        <div class="flex gap-2 w-full">
                            <button class="flex-1 bg-brand-yellow py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors">Buy Now</button>
                            <button class="flex-1 border border-gray-300 py-2 rounded-full font-bold text-sm hover:border-brand-dark transition-colors">Explore</button>
                        </div>
                    </div>
                    <!-- Option 2 -->
                    <div class="reveal p-6 rounded-3xl bg-transparent flex flex-col items-center hover:bg-gray-50 transition-colors" style="transition-delay: 100ms;">
                        <div class="mb-8 relative">
                            <div class="w-2 h-24 bg-[#d4a373] mx-auto rounded-full"></div>
                            <div class="w-24 h-24 bg-[#d4a373] rounded-full -mt-2 flex items-center justify-center shadow-inner">
                                <div class="w-16 h-16 rounded-full bg-white shadow-sm"></div>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold mb-4">Veridian</h3>
                        <p class="text-xs text-gray-400 mb-6">Save up to $800/mo* on your</p>
                        <div class="w-full space-y-3 mb-6">
                            <div class="flex justify-between text-sm"><span class="text-gray-500">Protein</span><span class="font-medium text-brand-dark">100-120g/day</span></div>
                            <div class="flex justify-between text-sm"><span class="text-gray-500">Movement</span><span class="font-medium text-brand-dark">10-40g/day</span></div>
                            <div class="flex justify-between text-sm"><span class="text-gray-500">Sleep</span><span class="font-medium text-brand-dark">70-80g/day</span></div>
                        </div>
                        <div class="flex gap-2 w-full">
                            <button class="flex-1 bg-brand-yellow py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors">Buy Now</button>
                            <button class="flex-1 border border-gray-300 py-2 rounded-full font-bold text-sm hover:border-brand-dark transition-colors">Explore</button>
                        </div>
                    </div>
                    <!-- Option 3 -->
                    <div class="reveal p-6 rounded-3xl bg-transparent flex flex-col items-center hover:bg-gray-50 transition-colors" style="transition-delay: 200ms;">
                        <div class="mb-8 relative">
                            <div class="w-2 h-24 bg-[#d4a373] mx-auto rounded-full"></div>
                            <div class="w-24 h-24 bg-[#d4a373] rounded-full -mt-2 flex items-center justify-center shadow-inner">
                                <div class="w-16 h-16 rounded-full bg-blue-100 shadow-sm"></div>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold mb-4">OptiLife</h3>
                        <p class="text-xs text-gray-400 mb-6">Save up to $800/mo* on your</p>
                        <div class="w-full space-y-3 mb-6">
                            <div class="flex justify-between text-sm"><span class="text-gray-500">Protein</span><span class="font-medium text-brand-dark">100-120g/day</span></div>
                            <div class="flex justify-between text-sm"><span class="text-gray-500">Movement</span><span class="font-medium text-brand-dark">10-40g/day</span></div>
                            <div class="flex justify-between text-sm"><span class="text-gray-500">Sleep</span><span class="font-medium text-brand-dark">70-80g/day</span></div>
                        </div>
                        <div class="flex gap-2 w-full">
                            <button class="flex-1 bg-brand-yellow py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors">Buy Now</button>
                            <button class="flex-1 border border-gray-300 py-2 rounded-full font-bold text-sm hover:border-brand-dark transition-colors">Explore</button>
                        </div>
                    </div>
                    <!-- Option 4 -->
                    <div class="reveal p-6 rounded-3xl bg-transparent flex flex-col items-center hover:bg-gray-50 transition-colors" style="transition-delay: 300ms;">
                        <div class="mb-8 relative">
                            <div class="w-2 h-24 bg-[#d4a373] mx-auto rounded-full"></div>
                            <div class="w-24 h-24 bg-[#d4a373] rounded-full -mt-2 flex items-center justify-center shadow-inner">
                                <div class="w-16 h-16 rounded-full bg-yellow-100 shadow-sm"></div>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold mb-4">VitalGuard</h3>
                        <p class="text-xs text-gray-400 mb-6">Save up to $800/mo* on your</p>
                        <div class="w-full space-y-3 mb-6">
                            <div class="flex justify-between text-sm"><span class="text-gray-500">Protein</span><span class="font-medium text-brand-dark">100-120g/day</span></div>
                            <div class="flex justify-between text-sm"><span class="text-gray-500">Movement</span><span class="font-medium text-brand-dark">10-40g/day</span></div>
                            <div class="flex justify-between text-sm"><span class="text-gray-500">Sleep</span><span class="font-medium text-brand-dark">70-80g/day</span></div>
                        </div>
                        <div class="flex gap-2 w-full">
                            <button class="flex-1 bg-brand-yellow py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors">Buy Now</button>
                            <button class="flex-1 border border-gray-300 py-2 rounded-full font-bold text-sm hover:border-brand-dark transition-colors">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
        
        if (window.lucide) window.lucide.createIcons();
    }
}
customElements.define('app-more-info', MoreInfo);
