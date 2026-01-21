class Contact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="contact" class="py-24 px-4 md:px-6 bg-brand-bg relative overflow-hidden">
            <!-- Decorative Elements -->
            <div class="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div class="max-w-7xl mx-auto relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <!-- Text Content -->
                    <div class="reveal">
                        <span class="text-brand-green font-semibold tracking-wider uppercase text-sm mb-4 block">Get in Touch</span>
                        <h2 class="text-5xl md:text-6xl font-serif font-bold text-brand-dark mb-8 leading-tight">
                            Experience Purity <br/> 
                            <span class="text-brand-green italic">At Your Doorstep.</span>
                        </h2>
                        
                        <p class="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed">
                            Have questions about our traditional cold-pressing methods? Or want to place a bulk order? We'd love to hear from you.
                        </p>

                        <div class="space-y-8">
                            <div class="flex items-start gap-5">
                                <div class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-green shrink-0">
                                    <i data-lucide="map-pin" class="w-6 h-6"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-brand-dark mb-1">Our Location</h4>
                                    <p class="text-gray-500">Main bazar, Udangudi, India</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-5">
                                <div class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-green shrink-0">
                                    <i data-lucide="phone" class="w-6 h-6"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-brand-dark mb-1">Phone</h4>
                                    <p class="text-gray-500">9543811405,7871691725 </p>
                                </div>
                            </div>

                            <div class="flex items-start gap-5">
                                <div class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-green shrink-0">
                                    <i data-lucide="mail" class="w-6 h-6"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-brand-dark mb-1">Email</h4>
                                    <p class="text-gray-500">ramaiahorganic@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <!-- Social Links -->
                        <div class="mt-12 flex gap-4">
                            <a href="https://www.instagram.com/ramaiah_organic_udangudi?igsh=MXR2ZDZmM2pyZjRzNA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <i data-lucide="instagram" class="w-5 h-5 text-gray-400 hover:text-brand-dark cursor-pointer"></i>
                    </a>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <div class="reveal bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-brand-green/5 border border-white" style="transition-delay: 200ms;">
                        <form action="https://formspree.io/f/mjggkjpz" method="POST" class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-2">
                                    <label class="text-sm font-semibold text-brand-dark px-1">Full Name</label>
                                    <input type="text" name="name" required placeholder="your name" class="w-full px-6 py-4 rounded-2xl bg-brand-bg/50 border-0 focus:ring-2 focus:ring-brand-green outline-none transition-all placeholder:text-gray-400">
                                </div>
                                <div class="space-y-2">
                                    <label class="text-sm font-semibold text-brand-dark px-1">Email Address</label>
                                    <input type="email" name="email" required placeholder="email@example.com" class="w-full px-6 py-4 rounded-2xl bg-brand-bg/50 border-0 focus:ring-2 focus:ring-brand-green outline-none transition-all placeholder:text-gray-400">
                                </div>
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-semibold text-brand-dark px-1">Interested Project</label>
                                <select name="product" class="w-full px-6 py-4 rounded-2xl bg-brand-bg/50 border-0 focus:ring-2 focus:ring-brand-green outline-none transition-all text-gray-500 appearance-none">
                                    <option>Sesame Oil</option>
                                    <option>Coconut Oil</option>
                                    <option>Bulk Inquiry</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-semibold text-brand-dark px-1">Message</label>
                                <textarea name="message" required rows="4" placeholder="How can we help you?" class="w-full px-6 py-4 rounded-2xl bg-brand-bg/50 border-0 focus:ring-2 focus:ring-brand-green outline-none transition-all placeholder:text-gray-400 resize-none"></textarea>
                            </div>

                            <button type="submit" class="w-full bg-brand-dark text-white py-5 rounded-2xl font-bold hover:bg-brand-green transition-all shadow-lg hover:shadow-brand-green/20 flex items-center justify-center gap-3">
                                Send Message
                                <i data-lucide="send" class="w-5 h-5"></i>
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Footer Image Banner -->
                <div class="mt-24 reveal h-[400px] rounded-[3rem] overflow-hidden relative group">
                    <img 
                        src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=2070&auto=format&fit=crop" 
                        alt="Organic Farming" 
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
                    <div class="absolute bottom-12 left-12">
                        <p class="text-white/80 font-medium mb-2 uppercase tracking-widest text-sm">Harvested with love</p>
                        <h3 class="text-3xl md:text-4xl font-serif text-white font-bold italic">From Nature to You.</h3>
                    </div>
                </div>
            </div>
        </section>
        `;

    if (window.lucide) window.lucide.createIcons();

    const form = this.querySelector("form");
    const btn = form.querySelector('button[type="submit"]');
    const btnText = btn.innerHTML;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Set loading state
      btn.disabled = true;
      btn.innerHTML = `
        <div class="flex items-center gap-2">
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="fill-current opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
        </div>`;

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
          form.innerHTML = `
            <div class="text-center py-12">
                <div class="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i data-lucide="check-circle-2" class="w-10 h-10 text-brand-green"></i>
                </div>
                <h3 class="text-3xl font-serif font-bold text-brand-dark mb-4">Message Sent!</h3>
                <p class="text-gray-600 mb-8">Thank you for reaching out. We've received your message and will get back to you shortly.</p>
                <button onclick="location.reload()" class="text-brand-green font-bold hover:underline">Send another message</button>
            </div>`;
          if (window.lucide) window.lucide.createIcons();
        } else {
          throw new Error();
        }
      } catch (error) {
        alert(
          "Oops! There was a problem submitting your form. Please try again."
        );
        btn.disabled = false;
        btn.innerHTML = btnText;
      }
    });
  }
}
customElements.define("app-contact", Contact);
