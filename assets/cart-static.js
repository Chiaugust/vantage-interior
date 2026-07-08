(() => {
  const CART_STORAGE_KEY = "vantage-cart";
  const WINDOW_STATE_KEY = "__vantage_state__";
  const PRODUCT_IMAGE_BASE = "./assets/images/products";

  const productCatalog = [
    {
      id: "sanctuary-abstract-canvas",
      name: "Sanctuary - Abstract Canvas",
      category: "Original Artwork",
      edition: "Limited Edition of 12",
      size: "90 x 120 cm",
      price: 320000,
      image: `${PRODUCT_IMAGE_BASE}/sanctuary-abstract-canvas.avif`,
      description:
        "Original acrylic on canvas. A meditative composition in warm sand and burnished gold leaf.",
    },
    {
      id: "dusk-study-no-3",
      name: "Dusk Study No. 3",
      category: "Original Artwork",
      edition: "Limited Edition of 8",
      size: "80 x 100 cm",
      price: 410000,
      image: `${PRODUCT_IMAGE_BASE}/dusk-study-no-3.avif`,
      description:
        "Mixed media on linen. Warm terracotta tones with delicate gold accents and raw texture.",
    },
    {
      id: "form-and-void",
      name: "Form & Void",
      category: "Sculpture",
      edition: "Edition of 6",
      size: "H: 45 cm",
      price: 720000,
      image: `${PRODUCT_IMAGE_BASE}/form-and-void.avif`,
      description:
        "Cast bronze with hand-applied patina finish. A refined sculptural statement for the modern interior.",
    },
    {
      id: "wabi-ceramic-series",
      name: "Wabi - Ceramic Series",
      category: "Sculpture",
      edition: "Open Edition",
      size: "Set of 3",
      price: 95000,
      image: `${PRODUCT_IMAGE_BASE}/wabi-ceramic-series.avif`,
      description:
        "Hand-thrown stoneware with matte volcanic glaze. Each piece uniquely imperfect by design.",
    },
    {
      id: "aura-decorative-vessel",
      name: "Aura - Decorative Vessel",
      category: "Interior Object",
      edition: "Limited Edition of 20",
      size: "H: 62 cm",
      price: 155000,
      image: `${PRODUCT_IMAGE_BASE}/aura-decorative-vessel.avif`,
      description:
        "Oversized hand-formed vessel in speckled cream stoneware. A commanding centrepiece for any room.",
    },
    {
      id: "soleil-brass-table-lamp",
      name: "Soleil - Brass Table Lamp",
      category: "Interior Object",
      edition: "Limited Edition of 15",
      size: "H: 55 cm",
      price: 215000,
      image: `${PRODUCT_IMAGE_BASE}/soleil-brass-table-lamp.avif`,
      description:
        "Solid brushed brass with a hand-spun linen shade. Warm, directional light for living and study spaces.",
    },
  ];

  const catalogById = Object.fromEntries(productCatalog.map((product) => [product.id, product]));

  const canUseLocalStorage = (() => {
    try {
      const key = "__vantage_storage_test__";
      window.localStorage.setItem(key, "1");
      window.localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  })();

  const readWindowState = () => {
    try {
      const parsed = JSON.parse(window.name || "{}");
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  };

  const writeWindowState = (value) => {
    try {
      const state = readWindowState();
      state[WINDOW_STATE_KEY] = value;
      window.name = JSON.stringify(state);
    } catch {
      window.name = JSON.stringify({ [WINDOW_STATE_KEY]: value });
    }
  };

  const readStorageValue = () => {
    if (canUseLocalStorage) {
      return window.localStorage.getItem(CART_STORAGE_KEY);
    }

    return readWindowState()[WINDOW_STATE_KEY] || null;
  };

  const writeStorageValue = (value) => {
    if (canUseLocalStorage) {
      window.localStorage.setItem(CART_STORAGE_KEY, value);
      return;
    }

    writeWindowState(value);
  };

  const readCart = () => {
    try {
      const parsed = JSON.parse(readStorageValue() || "[]");
      if (!Array.isArray(parsed)) {
        return [];
      }

      return parsed
        .map((item) => ({
          id: typeof item?.id === "string" ? item.id : "",
          qty: Number.isFinite(item?.qty) ? Math.max(1, Math.floor(item.qty)) : 1,
        }))
        .filter((item) => Boolean(catalogById[item.id]));
    } catch {
      return [];
    }
  };

  const writeCart = (cart) => {
    writeStorageValue(JSON.stringify(cart));
  };

  const getCartItems = () =>
    readCart().map((item) => ({
      ...catalogById[item.id],
      qty: item.qty,
      total: catalogById[item.id].price * item.qty,
    }));

  const formatMoney = (value) => `NGN ${value.toLocaleString("en-US")}`;

  const addItemToCart = (id) => {
    const cart = readCart();
    const existing = cart.find((item) => item.id === id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id, qty: 1 });
    }

    writeCart(cart);
  };

  const updateItemQuantity = (id, nextQty) => {
    const cart = readCart()
      .map((item) => (item.id === id ? { ...item, qty: nextQty } : item))
      .filter((item) => item.qty > 0);
    writeCart(cart);
  };

  const removeItem = (id) => {
    writeCart(readCart().filter((item) => item.id !== id));
  };

  const syncCartLinks = () => {
    const count = readCart().reduce((total, item) => total + item.qty, 0);
    const cartLinks = document.querySelectorAll(
      'header a[href="cart.html"], div.fixed.inset-0.z-40 a[href="cart.html"]'
    );

    cartLinks.forEach((link) => {
      let badge = link.querySelector("[data-cart-count]");

      if (count > 0) {
        if (!badge) {
          badge = document.createElement("span");
          badge.setAttribute("data-cart-count", "");
          badge.setAttribute("aria-hidden", "true");
          badge.className =
            "ml-2 inline-flex min-w-[1.3rem] h-[1.3rem] items-center justify-center rounded-full bg-[#C19A6B] px-1.5 text-[10px] font-medium leading-none text-white";
          link.appendChild(badge);
        }

        badge.textContent = String(count);
      } else if (badge) {
        badge.remove();
      }
    });
  };

  const setupShopPage = () => {
    const addToCartButtons = Array.from(document.querySelectorAll("button")).filter((button) =>
      button.textContent.includes("Add to Cart")
    );

    addToCartButtons.forEach((button, index) => {
      const product = productCatalog[index];
      if (!product) {
        return;
      }

      const originalMarkup = button.innerHTML;
      button.type = "button";
      button.addEventListener("click", () => {
        addItemToCart(product.id);
        syncCartLinks();
        button.innerHTML = originalMarkup.replace("Add to Cart", "Added");
        button.classList.add("bg-[#222222]", "text-white");

        window.setTimeout(() => {
          button.innerHTML = originalMarkup;
          button.classList.remove("bg-[#222222]", "text-white");
        }, 1400);
      });
    });
  };

  const renderEmptyCart = () => `
    <div class="bg-white border border-[#EDE8E1] p-12 md:p-16 text-center">
      <div class="max-w-md mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart mx-auto mb-6 text-[#4B4540]/40" aria-hidden="true">
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
        <h3 class="font-serif text-2xl text-[#222222] mb-4">Your cart is empty</h3>
        <p class="text-[#4B4540]/70 text-sm font-light leading-relaxed mb-8">
          Discover our curated collection of original artworks and interior objects.
        </p>
        <a href="shop.html" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#222222] text-white hover:bg-[#222222]/90 hover:scale-[1.02] shadow-sm h-12 px-8 py-3 uppercase tracking-widest text-xs">
          Browse Shop
        </a>
      </div>
    </div>
  `;

  const renderCartItems = (items) => {
    const subtotal = items.reduce((total, item) => total + item.total, 0);

    return `
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div class="lg:col-span-2 space-y-6">
          ${items
        .map(
          (item) => `
                <div class="bg-white border border-[#EDE8E1] p-5">
                  <div class="flex gap-4 mb-4">
                    <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover flex-shrink-0">
                    <div class="flex-1 min-w-0">
                      <h3 class="font-serif text-base text-[#222222] mb-1 leading-snug">${item.name}</h3>
                      <p class="text-[#4B4540]/60 text-xs">${item.size} · ${item.edition}</p>
                      <p class="text-[#4B4540]/60 text-xs mt-2">${item.category}</p>
                    </div>
                    <button type="button" data-cart-action="remove" data-cart-id="${item.id}" class="text-[#4B4540]/40 hover:text-red-500 transition-colors flex-shrink-0 self-start" aria-label="Remove ${item.name}">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="flex items-center justify-between border-t border-[#EDE8E1] pt-4">
                    <p class="font-serif text-lg text-[#C19A6B]">${formatMoney(item.total)}</p>
                    <div class="flex items-center border border-[#EDE8E1]">
                      <button type="button" data-cart-action="decrease" data-cart-id="${item.id}" class="px-3 py-1.5 text-[#4B4540] hover:bg-[#EDE8E1] transition-colors text-sm">-</button>
                      <span class="px-4 py-1.5 text-sm text-[#222222] border-x border-[#EDE8E1]">${item.qty}</span>
                      <button type="button" data-cart-action="increase" data-cart-id="${item.id}" class="px-3 py-1.5 text-[#4B4540] hover:bg-[#EDE8E1] transition-colors text-sm">+</button>
                    </div>
                  </div>
                </div>
              `
        )
        .join("")}
          <div class="pt-4">
            <a href="shop.html" class="text-xs uppercase tracking-widest text-[#4B4540]/60 hover:text-[#C19A6B] transition-colors border-b border-current pb-1">
              Continue Shopping
            </a>
          </div>
        </div>
        <div class="bg-[#4B4540] text-white p-8 h-fit">
          <h2 class="font-serif text-2xl mb-8 border-b border-white/20 pb-6">Order Summary</h2>
          <div class="space-y-4 text-sm mb-8">
            <div class="flex justify-between">
              <span class="text-white/70">Subtotal</span>
              <span>${formatMoney(subtotal)}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-white/70">Shipping</span>
              <span class="text-[#C19A6B]">Complimentary</span>
            </div>
            <div class="flex justify-between border-t border-white/20 pt-4 font-serif text-lg">
              <span>Total</span>
              <span>${formatMoney(subtotal)}</span>
            </div>
          </div>
          <a href="checkout.html" class="flex items-center justify-center gap-2 w-full py-4 bg-[#C19A6B] text-white text-xs uppercase tracking-widest hover:bg-[#a8845b] transition-colors">
            Proceed to Checkout
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          <p class="text-white/40 text-xs text-center mt-4">White-glove delivery included</p>
        </div>
      </div>
    `;
  };

  const setupCartPage = () => {
    const cartSection = document.querySelector("main section");
    const cartContainer = cartSection?.querySelector(".container");
    if (!cartSection || !cartContainer) {
      return;
    }

    const render = () => {
      const items = getCartItems();
      cartContainer.innerHTML = items.length === 0 ? renderEmptyCart() : renderCartItems(items);
      syncCartLinks();
    };

    cartSection.addEventListener("click", (event) => {
      const control = event.target.closest("[data-cart-action]");
      if (!control) {
        return;
      }

      const id = control.getAttribute("data-cart-id");
      const action = control.getAttribute("data-cart-action");
      const current = readCart().find((item) => item.id === id);

      if (!id || !action || !current) {
        return;
      }

      if (action === "increase") {
        updateItemQuantity(id, current.qty + 1);
      }

      if (action === "decrease") {
        updateItemQuantity(id, current.qty - 1);
      }

      if (action === "remove") {
        removeItem(id);
      }

      render();
    });

    render();
  };

  const setupCheckoutPage = () => {
    const summaryCard = document.querySelector("#order-summary section");
    if (!summaryCard) {
      return;
    }

    const items = getCartItems();
    const subtotal = items.reduce((total, item) => total + item.total, 0);

    if (items.length === 0) {
      summaryCard.innerHTML = `
        <div class="flex items-start justify-between gap-4 mb-8">
          <div>
            <p class="text-[#C19A6B] text-xs tracking-[0.3em] uppercase mb-3">Order Summary</p>
            <h2 class="font-serif text-3xl text-white">Your Order</h2>
          </div>
        </div>
        <p class="text-white/70 text-sm leading-relaxed mb-8">
          Your cart is empty. Add a piece from the shop to continue to checkout.
        </p>
        <a href="shop.html" class="w-full inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#C19A6B] text-white hover:bg-[#a8845b] hover:scale-[1.01] shadow-sm h-12 px-8 py-3 uppercase tracking-widest text-xs">
          Browse Shop
        </a>
      `;
      return;
    }

    summaryCard.innerHTML = `
      <div class="flex items-start justify-between gap-4 mb-8">
        <div>
          <p class="text-[#C19A6B] text-xs tracking-[0.3em] uppercase mb-3">Order Summary</p>
          <h2 class="font-serif text-3xl text-white">Your Order</h2>
        </div>
        <a href="cart.html" class="text-xs uppercase tracking-widest text-white/50 hover:text-[#C19A6B] transition-colors">
          Edit Cart
        </a>
      </div>
      <div class="space-y-5 mb-8">
        ${items
        .map(
          (item) => `
              <div class="flex gap-4 border-b border-white/10 pb-5">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover flex-shrink-0">
                <div class="min-w-0">
                  <p class="font-serif text-base text-white leading-snug">${item.name}</p>
                  <p class="text-white/50 text-xs uppercase tracking-widest mt-1">${item.size} · Qty ${item.qty}</p>
                  <p class="text-[#C19A6B] text-sm mt-2">${formatMoney(item.total)}</p>
                </div>
              </div>
            `
        )
        .join("")}
      </div>
      <div class="space-y-4 text-sm mb-8">
        <div class="flex justify-between">
          <span class="text-white/60">Subtotal</span>
          <span>${formatMoney(subtotal)}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-white/60">Shipping</span>
          <span class="text-[#C19A6B]">Complimentary</span>
        </div>
        <div class="flex justify-between">
          <span class="text-white/60">Duties and taxes</span>
          <span>Calculated on review</span>
        </div>
        <div class="flex justify-between border-t border-white/20 pt-4 font-serif text-xl">
          <span>Total</span>
          <span>${formatMoney(subtotal)}</span>
        </div>
      </div>
      <button type="button" class="w-full inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#C19A6B] text-white hover:bg-[#a8845b] hover:scale-[1.01] shadow-sm h-12 px-8 py-3 uppercase tracking-widest text-xs">
        Place Order
      </button>
      <p class="text-white/40 text-xs text-center mt-4 leading-relaxed">
        Payment capture and delivery scheduling are confirmed by our team after review.
      </p>
    `;
  };

  if (document.title.includes("Shop")) {
    setupShopPage();
  }

  if (document.title.includes("Cart")) {
    setupCartPage();
  }

  if (document.title.includes("Checkout")) {
    setupCheckoutPage();
  }

  syncCartLinks();
})();
