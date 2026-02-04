class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="bg-brand-bg pt-16 pb-8 px-6 border-t border-gray-200">
            <div class="max-w-3xl mx-auto text-center">
                
                
                <div class="flex flex-col items-center gap-6">
                    <div class="flex items-center gap-4">
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
