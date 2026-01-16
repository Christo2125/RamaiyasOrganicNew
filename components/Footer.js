class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="bg-brand-bg pt-16 pb-8 px-6 border-t border-gray-200">
            <div class="max-w-3xl mx-auto text-center">
                <div class="bg-gray-200 rounded-3xl p-8 mb-8 relative overflow-hidden">
                    <h3 class="text-2xl font-bold mb-6 text-brand-dark">Subscribe for our newsletter</h3>
                    <form action="https://formspree.io/f/mjggkjpz" method="POST" class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto relative z-10">
                        <input type="email" name="email" required placeholder="Enter your email" class="flex-1 px-6 py-3 rounded-full bg-white/50 border-none outline-none focus:ring-2 focus:ring-brand-green/20 placeholder:text-gray-500 text-brand-dark">
                        <button type="submit" class="bg-brand-yellow px-8 py-3 rounded-full font-bold text-brand-dark hover:bg-yellow-300 transition-colors whitespace-nowrap">Subscribe</button>
                    </form>
                </div>
                
                <div class="flex flex-col items-center gap-6">
                    <a href="https://www.instagram.com/ramaiah_organic_udangudi?igsh=MXR2ZDZmM2pyZjRzNA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" class="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-110 group">
                        <i data-lucide="instagram" class="w-6 h-6 text-gray-600 group-hover:text-pink-600 transition-colors"></i>
                    </a>
                    
                    <div class="text-sm text-gray-400">
                        &copy; ${new Date().getFullYear()} Ramaiah's Oils. All rights reserved.
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
