(() => {
  // Edit project data here — same pattern as cart-static.js productCatalog.
  // Fill in title, location, description, gallery captions, year, category, totalArea when ready.
  const IMAGE_BASE = "./assets/images/projects";

  const projectCatalog = [
    {
      id: "project-1",
      title: "The Onyx Lounge",
      room: "Sitting Room",
      location: "Lekki Phase 1, Lagos",
      description:
        "An open-plan sitting room conceived as a sanctuary of contemporary luxury — where polished marble floors, plush grey upholstery, and burnt-orange accents meet layered ceiling lighting and a statement crystal chandelier.",
      descriptionExtra:
        "A custom slatted media wall with marble detailing anchors the space, while a geometric mirrored partition softly defines the dining zone beyond. Every surface, from the velvet armchairs to the integrated staircase lighting, was specified to feel both grand for entertaining and intimate for everyday living.",
      descriptionClosing:
        "The result is a sitting room that belongs entirely to this skyline, this family, and this way of life.",
      year: "2024",
      category: "Full Residential Design",
      totalArea: "48 sqm",
      gridClass: "md:col-span-2 md:row-span-2",
      coverImage: `${IMAGE_BASE}/project1_1.avif`,
      gallery: [
        { src: `${IMAGE_BASE}/project1_1.avif`, caption: "Sitting Room — Open-plan lounge with crystal chandelier and marble flooring" },
        { src: `${IMAGE_BASE}/project1_2.avif`, caption: "Living Area — Custom slatted TV wall with marble media console" },
        { src: `${IMAGE_BASE}/project1_3.avif`, caption: "Staircase — Marble and fluted wood feature wall with integrated LED lighting" },
        { src: `${IMAGE_BASE}/project1_4.avif`, caption: "Sitting Room — Wide view of seating, media wall, and dining partition" },
        { src: `${IMAGE_BASE}/project1_5.avif`, caption: "Seating Detail — Textured grey sofa with rust bouclé accent pillows" },
        { src: `${IMAGE_BASE}/project1_6.avif`, caption: "Ceiling Design — Tiered cove lighting with crystal chandelier centerpiece" },
        { src: `${IMAGE_BASE}/project1_7.avif`, caption: "Media Wall — Marble-backed television with geometric floating console" },
      ],
    },
    {
      id: "project-2",
      title: "The Linden Master Suite",
      room: "Master Bedroom",
      location: "Victoria Island, Lagos",
      description:
        "A serene master suite designed around warmth, proportion, and quiet luxury. Floor-to-ceiling windows, layered drapery, and a wall-to-wall upholstered headboard create a restful retreat at the heart of the home.",
      descriptionExtra:
        "The suite flows seamlessly into a glass-enclosed walk-in wardrobe with integrated lighting, while a bespoke floating workspace with LED-lit shelving offers a private corner for reading and reflection. Vertical wood slats and cove-lit ceilings lend architectural depth throughout.",
      descriptionClosing:
        "Every detail — from the tailored bench at the foot of the bed to the soft taupe palette — was composed to feel calm, considered, and unmistakably bespoke.",
      year: "2023",
      category: "Bedroom & Wardrobe Design",
      totalArea: "52 sqm",
      gridClass: "md:col-span-1 md:row-span-1",
      coverImage: `${IMAGE_BASE}/project2_1.avif`,
      gallery: [
        { src: `${IMAGE_BASE}/project2_1.avif`, caption: "Master Suite — Bedroom with walk-in wardrobe and slatted feature wall" },
        { src: `${IMAGE_BASE}/project2_2.avif`, caption: "Bedroom — Upholstered headboard with warm wood slat accent lighting" },
        { src: `${IMAGE_BASE}/project2_3.avif`, caption: "Walk-in Wardrobe — Glass-enclosed closet with integrated ambient lighting" },
        { src: `${IMAGE_BASE}/project2_4.avif`, caption: "Master Bedroom — Tray ceiling with cove lighting and tailored bench" },
        { src: `${IMAGE_BASE}/project2_5.avif`, caption: "Bedside Detail — Floating walnut nightstand with drum shade lamp" },
        { src: `${IMAGE_BASE}/project2_6.avif`, caption: "Window Treatment — Layered sheer and velvet drapes with natural light" },
        { src: `${IMAGE_BASE}/project2_7.avif`, caption: "Suite Overview — Reading nook, wardrobe, and sleeping area in one composition" },
        { src: `${IMAGE_BASE}/project2_8.avif`, caption: "Home Office Nook — Floating desk with LED-lit shelves beside the wardrobe" },
      ],
    },
    {
      id: "project-3",
      title: "The Calacatta Kitchen",
      room: "Kitchen",
      location: "Ikoyi, Lagos",
      description:
        "A chef's kitchen sculpted from Calacatta marble, warm walnut, and matte charcoal cabinetry — designed for both daily ritual and grand entertaining. The waterfall island commands the room while remaining effortlessly functional.",
      descriptionExtra:
        "Professional-grade appliances are fully integrated into the joinery, with a custom walnut range hood, brass fixtures, and a concealed pantry finished in rich timber. Layered lighting — from sculptural pendants to under-cabinet LEDs — brings warmth to every surface.",
      descriptionClosing:
        "A kitchen where natural stone, fine craftsmanship, and intelligent storage converge into one cohesive, timeless space.",
      year: "2024",
      category: "Kitchen & Pantry Design",
      totalArea: "38 sqm",
      gridClass: "md:col-span-1 md:row-span-2",
      coverImage: `${IMAGE_BASE}/project3_1.avif`,
      gallery: [
        { src: `${IMAGE_BASE}/project3_1.avif`, caption: "Kitchen — Marble waterfall island with charcoal cabinetry and walnut accents" },
        { src: `${IMAGE_BASE}/project3_2.avif`, caption: "Kitchen Overview — Full view of island, pendants, and integrated appliances" },
        { src: `${IMAGE_BASE}/project3_3.avif`, caption: "Marble Detail — Waterfall edge with natural grey veining" },
        { src: `${IMAGE_BASE}/project3_4.avif`, caption: "Cooking Wall — Walnut range hood with Fisher & Paykel professional range" },
        { src: `${IMAGE_BASE}/project3_5.avif`, caption: "Pendant Lighting — Matte black and brass disc lights over the island" },
        { src: `${IMAGE_BASE}/project3_6.avif`, caption: "Island Detail — Brushed brass faucet with black undermount sink" },
        { src: `${IMAGE_BASE}/project3_7.avif`, caption: "Appliance Stack — Integrated oven and microwave in matte grey cabinetry" },
        { src: `${IMAGE_BASE}/project3_8.avif`, caption: "Pantry — Walnut-lined storage with warm LED lighting and pull-out drawers" },
      ],
    },
    {
      id: "project-4",
      title: "The Whitmore Study",
      room: "Office",
      location: "Banana Island, Lagos",
      description:
        "An executive home office designed for focus, prestige, and comfort. Custom walnut bookcases flank a floor-to-ceiling window wall, while a generous L-shaped desk anchors a room finished in polished marble and warm ambient light.",
      descriptionExtra:
        "Integrated LED shelf lighting, a geometric ceiling fixture, and layered window treatments create a workspace that feels as refined after dark as it does in morning light. Abstract art and indoor greenery soften the room's architectural precision.",
      descriptionClosing:
        "A study built for decisive work — and for the quiet satisfaction of a space that reflects how our client leads.",
      year: "2023",
      category: "Home Office Design",
      totalArea: "32 sqm",
      gridClass: "md:col-span-1 md:row-span-1",
      coverImage: `${IMAGE_BASE}/project4_1.avif`,
      gallery: [
        { src: `${IMAGE_BASE}/project4_1.avif`, caption: "Home Office — Executive desk with walnut bookcases and marble flooring" },
        { src: `${IMAGE_BASE}/project4_2.avif`, caption: "Desk — Walnut L-shaped workstation with leather executive chair" },
        { src: `${IMAGE_BASE}/project4_3.avif`, caption: "Bookshelves — Floor-to-ceiling walnut cabinetry with integrated LED lighting" },
        { src: `${IMAGE_BASE}/project4_4.avif`, caption: "Ceiling — Geometric LED fixture with tray ceiling and recessed spotlights" },
        { src: `${IMAGE_BASE}/project4_5.avif`, caption: "Window Area — Layered sheer and pleated drapes with cove lighting" },
        { src: `${IMAGE_BASE}/project4_6.avif`, caption: "Decorative Wall — Abstract gold-leaf artwork with accent spotlighting" },
      ],
    },
    {
      id: "project-5",
      title: "The Azure Lounge",
      room: "Sitting Room",
      location: "Eko Atlantic City, Lagos",
      description:
        "A second sitting room in a softer, more sculptural register — channel-tufted velvet, navy accents, and a backlit marble media wall define a space that feels both cinematic and deeply liveable.",
      descriptionExtra:
        "Layered ceiling lighting combines warm cove LEDs with cool accent spots, while a black marble coffee table, curated shelving, and classic wall moulding add depth and contrast. Every piece was chosen to balance glamour with ease.",
      descriptionClosing:
        "A sitting room designed for long evenings, good conversation, and the quiet pleasure of beautiful materials.",
      year: "2025",
      category: "Living Room Design",
      totalArea: "44 sqm",
      gridClass: "md:col-span-2 md:row-span-1",
      coverImage: `${IMAGE_BASE}/project5_1.avif`,
      gallery: [
        { src: `${IMAGE_BASE}/project5_1.avif`, caption: "Sitting Room — Curved velvet sofa with marble media wall and layered lighting" },
        { src: `${IMAGE_BASE}/project5_2.avif`, caption: "Ceiling Design — Tray ceiling with cove lighting and track spotlights" },
        { src: `${IMAGE_BASE}/project5_3.avif`, caption: "Media Wall — Backlit marble TV panel with illuminated display shelving" },
        { src: `${IMAGE_BASE}/project5_4.avif`, caption: "Living Area — White roses on black marble table with moulded wall panels" },
        { src: `${IMAGE_BASE}/project5_5.avif`, caption: "Entertainment Wall — Floating console with soundbar and accent shelving" },
        { src: `${IMAGE_BASE}/project5_6.avif`, caption: "Coffee Table — Black marble top with fluted base and fresh floral arrangement" },
      ],
    },
  ];

  const catalogById = Object.fromEntries(projectCatalog.map((project) => [project.id, project]));

  const mapPinIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-map-pin text-[#C19A6B]" aria-hidden="true">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  `;

  const getDisplayTitle = (project) => project.title || project.room;

  const renderPortfolioCard = (project) => {
    const title = getDisplayTitle(project);
    const locationBadge = project.location
      ? `<div class="absolute top-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1.5 text-white text-[10px] tracking-widest uppercase">
          ${mapPinIcon}${project.location}
        </div>`
      : "";

    return `
      <div class="relative overflow-hidden group cursor-pointer ${project.gridClass}" style="opacity: 1; transform: none;">
        <a aria-label="View ${title}" href="project-detail.html?id=${project.id}" class="absolute inset-0 z-10"></a>
        <img alt="${title}"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          src="${project.coverImage}">
        <div class="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/60 transition-colors duration-500"></div>
        ${locationBadge}
        <div class="absolute inset-0 p-8 flex flex-col justify-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <h3 class="font-serif text-2xl md:text-3xl text-white mb-1">${title}</h3>
          <p class="text-[#C19A6B] tracking-widest uppercase text-xs">View Project →</p>
        </div>
      </div>
    `;
  };

  const setupPortfolioGrids = () => {
    const grids = document.querySelectorAll("[data-portfolio-grid]");
    if (!grids.length) {
      return;
    }

    const markup = projectCatalog.map(renderPortfolioCard).join("");
    grids.forEach((grid) => {
      grid.innerHTML = markup;
    });
  };

  const getProjectFromUrl = () => {
    const id = new URLSearchParams(window.location.search).get("id");
    return id ? catalogById[id] : null;
  };

  const setupProjectDetailPage = () => {
    const project = getProjectFromUrl();
    if (!project) {
      window.location.replace("portfolio.html");
      return;
    }

    const title = getDisplayTitle(project);
    document.title = `Vantage Interiors - ${title}`;

    const images = project.gallery.map((image) => ({
      src: image.src,
      caption: image.caption || title,
    }));

    let currentIndex = 0;

    const mainImage = document.getElementById("main-image");
    const mainGallery = document.getElementById("main-gallery");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const fullscreenBtn = document.getElementById("fullscreen-btn");
    const caption = document.getElementById("gallery-caption");
    const dotsContainer = document.getElementById("gallery-dots");
    const thumbnailsContainer = document.getElementById("gallery-thumbnails");

    const modal = document.getElementById("fullscreen-modal");
    const modalImage = document.getElementById("modal-image");
    const modalCaption = document.getElementById("modal-caption");
    const modalCounter = document.getElementById("modal-counter");
    const closeModal = document.getElementById("close-modal");
    const modalPrev = document.getElementById("modal-prev");
    const modalNext = document.getElementById("modal-next");

    if (!mainImage || !mainGallery || !dotsContainer || !thumbnailsContainer) {
      return;
    }

    dotsContainer.innerHTML = images
      .map(
        (_, index) =>
          `<button type="button" data-gallery-dot="${index}" class="w-1.5 h-1.5 rounded-full ${index === 0 ? "bg-[#C19A6B]" : "bg-white/40"}"></button>`
      )
      .join("");

    thumbnailsContainer.innerHTML = images
      .map(
        (image, index) => `
          <button type="button" data-gallery-thumb="${index}" class="flex-shrink-0 w-20 h-14 overflow-hidden border-2 ${index === 0 ? "border-[#C19A6B] opacity-100" : "border-transparent opacity-50 hover:opacity-80"}">
            <img src="${image.src}" alt="" class="w-full h-full object-cover">
          </button>
        `
      )
      .join("");

    const dots = dotsContainer.querySelectorAll("[data-gallery-dot]");
    const thumbnails = thumbnailsContainer.querySelectorAll("[data-gallery-thumb]");

    const getGalleryLimits = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width < 640) {
        return { maxHeight: Math.min(height * 0.58, 420), minHeight: 220 };
      }

      if (width < 1024) {
        return { maxHeight: Math.min(height * 0.68, 620), minHeight: 280 };
      }

      if (width < 1536) {
        return { maxHeight: Math.min(height * 0.75, 780), minHeight: 320 };
      }

      return { maxHeight: Math.min(height * 0.78, 880), minHeight: 340 };
    };

    const resizeMainGallery = () => {
      if (!mainGallery || !mainImage) {
        return;
      }

      const { naturalWidth, naturalHeight } = mainImage;
      if (!naturalWidth || !naturalHeight) {
        return;
      }

      const { maxHeight, minHeight } = getGalleryLimits();
      const containerWidth = mainGallery.clientWidth || mainGallery.offsetWidth || window.innerWidth;
      const ratio = naturalWidth / naturalHeight;

      let galleryHeight = containerWidth / ratio;
      galleryHeight = Math.max(minHeight, Math.min(maxHeight, galleryHeight));

      mainGallery.style.height = `${Math.round(galleryHeight)}px`;
    };

    let resizeFrame = null;
    const scheduleGalleryResize = () => {
      if (resizeFrame) {
        window.cancelAnimationFrame(resizeFrame);
      }

      resizeFrame = window.requestAnimationFrame(() => {
        resizeFrame = null;
        resizeMainGallery();
      });
    };

    const updateGallery = () => {
      const current = images[currentIndex];
      mainImage.src = current.src;
      mainImage.alt = current.caption;
      caption.textContent = current.caption;

      if (mainImage.complete && mainImage.naturalWidth) {
        scheduleGalleryResize();
      }

      dots.forEach((dot, index) => {
        dot.classList.toggle("bg-[#C19A6B]", index === currentIndex);
        dot.classList.toggle("bg-white/40", index !== currentIndex);
      });

      thumbnails.forEach((thumb, index) => {
        const isActive = index === currentIndex;
        thumb.classList.toggle("border-[#C19A6B]", isActive);
        thumb.classList.toggle("border-transparent", !isActive);
        thumb.classList.toggle("opacity-100", isActive);
        thumb.classList.toggle("opacity-50", !isActive);
      });
    };

    const updateModal = () => {
      const current = images[currentIndex];
      modalImage.src = current.src;
      modalImage.alt = current.caption;
      modalCaption.textContent = current.caption;
      modalCounter.textContent = `${currentIndex + 1} / ${images.length}`;
    };

    const openModal = () => {
      modal.classList.remove("opacity-0", "invisible");
      modal.classList.add("opacity-100");
      updateModal();
      document.body.style.overflow = "hidden";
    };

    const closeModalFunc = () => {
      modal.classList.add("opacity-0", "invisible");
      modal.classList.remove("opacity-100");
      document.body.style.overflow = "";
    };

    const nextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateGallery();
    };

    const prevImage = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateGallery();
    };

    prevBtn?.addEventListener("click", prevImage);
    nextBtn?.addEventListener("click", nextImage);
    fullscreenBtn?.addEventListener("click", openModal);
    closeModal?.addEventListener("click", closeModalFunc);
    modalPrev?.addEventListener("click", () => {
      prevImage();
      updateModal();
    });
    modalNext?.addEventListener("click", () => {
      nextImage();
      updateModal();
    });

    thumbnails.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        currentIndex = Number(thumb.getAttribute("data-gallery-thumb"));
        updateGallery();
      });
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        currentIndex = Number(dot.getAttribute("data-gallery-dot"));
        updateGallery();
      });
    });

    modal?.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModalFunc();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (!modal?.classList.contains("opacity-100")) {
        return;
      }

      if (event.key === "Escape") {
        closeModalFunc();
      } else if (event.key === "ArrowLeft") {
        prevImage();
        updateModal();
      } else if (event.key === "ArrowRight") {
        nextImage();
        updateModal();
      }
    });

    const locationHero = document.getElementById("project-location-hero");
    const titleEl = document.getElementById("project-title");
    const descriptionEl = document.getElementById("project-description");
    const descriptionExtraEl = document.getElementById("project-description-extra");
    const descriptionClosingEl = document.getElementById("project-description-closing");
    const detailLocation = document.getElementById("project-detail-location");
    const detailYear = document.getElementById("project-detail-year");
    const detailCategory = document.getElementById("project-detail-category");
    const detailArea = document.getElementById("project-detail-area");

    if (locationHero) {
      locationHero.textContent = project.location;
      locationHero.hidden = !project.location;
    }

    if (titleEl) {
      titleEl.textContent = title;
    }

    if (descriptionEl) {
      descriptionEl.textContent = project.description;
      descriptionEl.hidden = !project.description;
    }

    if (descriptionExtraEl) {
      descriptionExtraEl.textContent = project.descriptionExtra;
      descriptionExtraEl.hidden = !project.descriptionExtra;
    }

    if (descriptionClosingEl) {
      descriptionClosingEl.textContent = project.descriptionClosing;
      descriptionClosingEl.hidden = !project.descriptionClosing;
    }

    if (detailLocation) {
      detailLocation.textContent = project.location || "—";
    }

    if (detailYear) {
      detailYear.textContent = project.year || "—";
    }

    if (detailCategory) {
      detailCategory.textContent = project.category || project.room || "—";
    }

    if (detailArea) {
      detailArea.textContent = project.totalArea || "—";
    }

    mainImage.addEventListener("load", scheduleGalleryResize);
    window.addEventListener("resize", scheduleGalleryResize);

    updateGallery();
    scheduleGalleryResize();
  };

  setupPortfolioGrids();

  if (document.title.includes("Project") || window.location.pathname.includes("project-detail")) {
    setupProjectDetailPage();
  }
})();
