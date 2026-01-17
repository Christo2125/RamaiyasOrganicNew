class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-6">
            <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center gap-2">
                    <a href="index.html" class="h-10 w-auto text-brand-green flex items-center justify-center">
                        <img src="./public/images/logo.jpg" alt="Ramaiah Organic Logo" class="h-40 w-auto object-contain rounded-lg pt-4">
                    </a>
                </div>

                <!-- Desktop Links -->
                <div class="hidden md:flex items-center gap-8">
                    <a href="index.html" class="text-gray-600 hover:text-brand-green font-medium transition-colors text-sm uppercase tracking-wide">Home</a>
                    <a href="products.html" class="text-gray-600 hover:text-brand-green font-medium transition-colors text-sm uppercase tracking-wide">Products</a>
                    <a href="about.html" class="text-gray-600 hover:text-brand-green font-medium transition-colors text-sm uppercase tracking-wide">About Us</a>
                </div>

                <!-- Actions -->
                <div class="flex items-center gap-4">
                    <a href="contact.html" class="hidden md:block">
                        <button class="bg-brand-yellow px-6 py-3 rounded-full font-semibold text-brand-dark hover:bg-yellow-300 transition-colors shadow-sm">
                            Contact Us
                        </button>
                    </a>
                    
                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="md:hidden p-2 text-brand-dark hover:text-brand-green transition-colors">
                        <i data-lucide="menu" class="w-8 h-8"></i>
                    </button>
                </div>
            </div>
        </nav>

            <!-- Mobile Menu Overlay -->
            <div id="mobile-menu" class="fixed inset-0 bg-brand-bg z-50 transform translate-x-full transition-transform duration-300 flex flex-col items-center justify-center md:hidden">
                <button id="close-menu-btn" class="absolute top-8 right-8 p-2 text-brand-dark hover:text-brand-green transition-colors">
                    <i data-lucide="x" class="w-8 h-8"></i>
                </button>
                
                <div class="flex flex-col items-center gap-8 text-xl">
                    <a href="index.html" class="mobile-link text-brand-dark hover:text-brand-green font-serif font-bold transition-colors">Home</a>
                    <a href="about.html" class="mobile-link text-brand-dark hover:text-brand-green font-serif font-bold transition-colors">About Us</a>
                    <a href="products.html" class="mobile-link text-brand-dark hover:text-brand-green font-serif font-bold transition-colors">Products</a>
                    <a href="contact.html" class="mobile-link text-brand-dark hover:text-brand-green font-serif font-bold transition-colors">Contact Us</a>
                </div>
            </div>
        `;

    // Re-initialize icons for this component
    if (window.lucide) window.lucide.createIcons();

    // Mobile Menu Logic
    const mobileMenuBtn = this.querySelector("#mobile-menu-btn");
    const closeMenuBtn = this.querySelector("#close-menu-btn");
    const mobileMenu = this.querySelector("#mobile-menu");
    const mobileLinks = this.querySelectorAll(".mobile-link");

    function toggleMenu() {
      mobileMenu.classList.toggle("translate-x-full");
      document.body.classList.toggle("overflow-hidden");
    }

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", toggleMenu);
    }

    if (closeMenuBtn) {
      closeMenuBtn.addEventListener("click", toggleMenu);
    }

    if (mobileLinks) {
      mobileLinks.forEach((link) => {
        link.addEventListener("click", toggleMenu);
      });
    }

    // Navbar Scroll Effect
    const navEl = this.querySelector("#navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navEl.classList.add(
          "bg-brand-bg/90",
          "backdrop-blur-md",
          "py-4",
          "shadow-sm"
        );
        navEl.classList.remove("bg-transparent", "py-6");
      } else {
        navEl.classList.remove(
          "bg-brand-bg/90",
          "backdrop-blur-md",
          "py-4",
          "shadow-sm"
        );
        navEl.classList.add("bg-transparent", "py-6");
      }
    });
  }
}
customElements.define("app-navbar", Navbar);
