class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="bg-brand-bg pt-16 pb-8 px-6 border-t border-gray-200">
            <div class="max-w-3xl mx-auto text-center">
                
                
                <div class="flex flex-col items-center gap-6">
                    <div class="flex items-center gap-4">
                        <a href="https://wa.me/9543811405" target="_blank" rel="noopener noreferrer" class="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-110 group">
                            <svg class="w-6 h-6 text-gray-600 group-hover:text-[#25D366] transition-colors fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/Ramaiah_organic_udangudi?igsh=MXR2ZDZmM2pyZjRzNA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" class="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-110 group">
                            <i data-lucide="instagram" class="w-6 h-6 text-gray-600 group-hover:text-pink-600 transition-colors"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" class="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-110 group">
                            <i data-lucide="facebook" class="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors"></i>
                        </a>
                    </div>
                    
                    <div class="text-sm text-gray-400 flex flex-col items-center gap-2">
                        <span>&copy; 2026 Ramaiah Organic. All rights reserved.</span>
                        <span class="text-xs">
                            Designed & Developed by DigiMarketrix 
                        </span>
                    </div>
                </div>
            </div>
        </footer>
        `;

    if (window.lucide) window.lucide.createIcons();

    const form = this.querySelector("form");
    if (!form) return;

    const input = form.querySelector("input");
    const btn = form.querySelector("button");
    const btnText = btn.innerHTML;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      btn.disabled = true;
      btn.innerHTML = `
        <svg class="animate-spin h-5 w-5 text-brand-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="fill-current opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>`;

      const formData = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          form.parentElement.innerHTML = `
            <div class="text-center py-4 bg-brand-green/10 rounded-2xl">
                <i data-lucide="party-popper" class="w-8 h-8 text-brand-green mx-auto mb-2"></i>
                <h4 class="font-bold text-brand-dark">You're Subscribed!</h4>
                <p class="text-sm text-gray-600">Thanks for joining us!</p>
            </div>`;
          if (window.lucide) window.lucide.createIcons();
        } else {
          throw new Error();
        }
      } catch (error) {
        alert("Submission failed. Please try again.");
        btn.disabled = false;
        btn.innerHTML = btnText;
      }
    });
  }
}
customElements.define("app-footer", Footer);
