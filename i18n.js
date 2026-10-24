/* DRAKO figures — traducción EN/ES sin tocar el HTML original.
   Cada texto visible del sitio tiene su versión en español aquí.
   Si falta alguna cadena, se queda en inglés (nunca rompe la página). */
(function () {
  'use strict';

  var DICT = {
    // ── Navegación ─────────────────────────────────────────────
    "Skip to content": "Ir al contenido",
    "DRAKO figures": "DRAKO figures",
    "LLC · Digital collectibles": "LLC · Coleccionables digitales",
    "Studio": "Estudio",
    "Work": "Trabajo",
    "Gallery": "Galería",
    "Business": "Empresa",
    "Contact": "Contacto",
    "Get in touch": "Escríbenos",

    // ── Portada ────────────────────────────────────────────────
    "Independent 3D design studio": "Estudio independiente de diseño 3D",
    "Digital collectible figures for": "Figuras coleccionables digitales para",
    "3D printing": "impresión 3D",
    "DRAKO figures LLC designs original, display-ready STL figures for resin printing. Sculpted in detail, prepared for real printing, and delivered as digital files worldwide.":
      "DRAKO figures LLC diseña figuras STL originales, listas para exhibir, pensadas para impresión en resina. Esculpidas al detalle, preparadas para imprimir de verdad y entregadas como archivos digitales en todo el mundo.",
    "Now releasing": "Lanzamiento actual:",
    "Goddess of Heavy Metal": "Diosa del Heavy Metal",
    ", figure 01 of four in the": ", figura 01 de cuatro de la",
    "Goddess of Rock": "Diosa del Rock",
    "collection. Support and unsupported files, personal and commercial licences.":
      "colección. Archivos con y sin soportes, licencias personal y comercial.",
    "DRAKO figures LLC": "DRAKO figures LLC",
    "Collection": "Colección",
    "Goddess of Rock · 4 figures": "Diosa del Rock · 4 figuras",
    "Scale": "Escala",
    "120 mm / 75 mm": "120 mm / 75 mm",
    "Delivery": "Entrega",
    "Instant download · worldwide": "Descarga inmediata · todo el mundo",
    "View the collection": "Ver la colección",
    "Business information": "Información de empresa",
    "120 mm STL": "STL 120 mm",

    // ── Franja ─────────────────────────────────────────────────
    "Digital delivery": "Entrega digital",
    "Worldwide customers": "Clientes en todo el mundo",
    "Personal & commercial licenses": "Licencias personal y comercial",

    // ── Colección ──────────────────────────────────────────────
    "The collection": "La colección",
    "Four figures. One collection. Now presenting": "Cuatro figuras. Una colección. Presentamos",
    "01 — Goddess of Heavy Metal": "01 — Diosa del Heavy Metal",
    "01 / 04 — Goddess of Heavy Metal": "01 / 04 — Diosa del Heavy Metal",
    "One character. Three stages. Three guitars.": "Un personaje. Tres escenarios. Tres guitarras.",
    "The first of four figures in the collection: a 120 mm resin figure with interchangeable hands, three display bases and three guitars, designed as a set and shown as one complete piece.":
      "La primera de las cuatro figuras de la colección: una figura en resina de 120 mm con manos intercambiables, tres bases de exhibición y tres guitarras, diseñada como un conjunto y presentada como una sola pieza.",
    "Figure 01 of 04": "Figura 01 de 04",
    "120 mm and 75 mm versions": "Versiones de 120 mm y 75 mm",
    "3 bases: Power, Cathedral, Sound Stage": "3 bases: Power, Cathedral, Sound Stage",
    "3 guitars: Dragon, Demon Axe, Angel Wing": "3 guitarras: Dragon, Demon Axe, Angel Wing",
    "8 interchangeable hands": "8 manos intercambiables",
    "Supported and unsupported files": "Archivos con y sin soportes",
    "SFW release": "Versión SFW",
    "See release links": "Ver enlaces de lanzamiento",
    "01 · Available": "01 · Disponible",
    "Kickstarter release · 2026": "Lanzamiento en Kickstarter · 2026",
    "In development": "En desarrollo",
    "Goddess of Punk": "Diosa del Punk",
    "Goddess of Synth": "Diosa del Synth",
    "Goddess of Glam": "Diosa del Glam",
    "Coming after release": "Después del lanzamiento",

    // ── Galería ────────────────────────────────────────────────
    "Built to print, piece by piece.": "Hecha para imprimir, pieza por pieza.",
    "Complete figure, back view, premium detail, the Early Bird and Collector rewards, the three bases, the guitars, the hands, the scale comparison, the pre-supported Chitubox view, the legend and the NSFW version.":
      "Figura completa, vista trasera, detalle premium, las recompensas Early Bird y Collector, las tres bases, las guitarras, las manos, la comparación de escala, la vista pre-soportada en Chitubox, la leyenda y la versión NSFW.",
    "Complete figure": "Figura completa",
    "120 mm · SFW": "120 mm · SFW",
    "Back view": "Vista trasera",
    "360° sculpt": "Escultura 360°",
    "Premium detail": "Detalle premium",
    "Face & armour": "Rostro y armadura",
    "Early Bird": "Early Bird",
    "$24 · 100 backers": "$24 · 100 patrocinadores",
    "Main Collector": "Main Collector",
    "NSFW version": "Versión NSFW",
    "+18": "+18",
    "3 bases": "3 bases",
    "Power · Cathedral · Stage": "Power · Cathedral · Stage",
    "3 guitars": "3 guitarras",
    "Dragon · Demon · Angel": "Dragon · Demon · Angel",
    "8 hands": "8 manos",
    "Swap set": "Set intercambiable",
    "Scale comparison": "Comparación de escala",
    "75 · 120 mm · bust": "75 · 120 mm · busto",
    "Chitubox · 75 mm": "Chitubox · 75 mm",
    "Pre-supported": "Pre-soportada",
    "The legend": "La leyenda",
    "Kickstarter tiers": "Niveles de Kickstarter",
    "Planned prices in USD. Final tiers and availability confirmed at launch.":
      "Precios previstos en USD. Los niveles finales y la disponibilidad se confirman en el lanzamiento.",
    "$24": "$24",
    "$29": "$29",
    "$39": "$39",
    "$59": "$59",
    "+$12": "+$12",
    "First 100 backers · free bust gift": "Primeros 100 patrocinadores · busto de regalo",
    "Figure, 3 guitars, 3 bases, 8 hands": "Figura, 3 guitarras, 3 bases, 8 manos",
    "Instant All": "Instant All",
    "Everything included · stretch goals": "Todo incluido · metas extra",
    "Merchant": "Merchant",
    "Commercial licence · sell prints": "Licencia comercial · vender impresiones",
    "NSFW add-on": "Complemento NSFW",
    "Optional upgrade · 18+": "Mejora opcional · 18+",
    "Clay turntable": "Turntable en arcilla",
    "Sculpt preview": "Vista previa de la escultura",

    // ── Empresa ────────────────────────────────────────────────
    "Company details": "Datos de la empresa",
    "Information for partners, platforms and financial institutions.":
      "Información para socios, plataformas e instituciones financieras.",
    "Legal name": "Razón social",
    "Business type": "Tipo de negocio",
    "Digital products & online retail": "Productos digitales y venta online",
    "Products": "Productos",
    "3D-printable STL figure files": "Archivos STL de figuras imprimibles en 3D",
    "Digital download only": "Solo descarga digital",
    "Customers": "Clientes",
    "Worldwide": "Todo el mundo",
    "Sales channels": "Canales de venta",
    "Online marketplaces & subscriptions": "Marketplaces online y suscripciones",
    "DRAKO figures LLC creates and sells original digital sculpts for 3D printing. Revenue comes from direct sales of digital files, collection releases and commercial licenses. There is no physical inventory and no shipping operation.":
      "DRAKO figures LLC crea y vende esculturas digitales originales para impresión 3D. Los ingresos vienen de la venta directa de archivos digitales, los lanzamientos de colección y las licencias comerciales. No hay inventario físico ni operación de envíos.",
    "Products are delivered as downloadable files. Buyers print them on their own equipment. The company operates online and serves individual makers, painters and small print shops.":
      "Los productos se entregan como archivos descargables. Cada comprador los imprime en su propio equipo. La empresa opera online y atiende a makers, pintores y pequeños talleres de impresión.",
    "Brand and studio:": "Marca y estudio:",
    ". DRAKO is a standalone brand with its own catalog, pricing and audience.":
      ". DRAKO es una marca independiente con su propio catálogo, precios y público.",
    "DRAKO is a standalone brand with its own catalog, pricing and audience.":
      "DRAKO es una marca independiente con su propio catálogo, precios y público.",

    // ── Políticas ──────────────────────────────────────────────
    "Policies": "Políticas",
    "Delivery, refunds & license": "Entrega, reembolsos y licencia",
    "Clear terms for customers, platforms and payment partners.":
      "Condiciones claras para clientes, plataformas y pasarelas de pago.",
    "All products are digital files (STL). After payment, the buyer receives a download link by email or through the sales platform. No physical item is shipped.":
      "Todos los productos son archivos digitales (STL). Tras el pago, el comprador recibe un enlace de descarga por correo o a través de la plataforma de venta. No se envía ningún artículo físico.",
    "Files are delivered in the format and scale stated on each listing.":
      "Los archivos se entregan en el formato y la escala indicados en cada ficha.",
    "Refunds": "Reembolsos",
    "Because files are digital and delivered immediately, sales are final once the download is available.":
      "Como los archivos son digitales y se entregan de inmediato, la venta es definitiva una vez disponible la descarga.",
    "If a file is corrupted, incomplete or not as described, contact us within 14 days and we will repair it, replace it or refund the purchase.":
      "Si un archivo está dañado, incompleto o no corresponde a lo descrito, escríbenos dentro de los 14 días y lo reparamos, lo reemplazamos o devolvemos el dinero.",
    "License": "Licencia",
    "Personal:": "Personal:",
    "print for private use.": "imprimir para uso privado.",
    "Commercial:": "Comercial:",
    "sell physical prints, not the digital files.": "vender impresiones físicas, no los archivos digitales.",
    "Reselling, sharing or redistributing STL files is not allowed.":
      "No se permite revender, compartir ni redistribuir los archivos STL.",
    "Each purchase is for one person or studio.": "Cada compra es para una persona o estudio.",
    "Privacy & payments": "Privacidad y pagos",
    "This site has no user accounts and no tracking cookies. Emails are used only to answer inquiries.":
      "Este sitio no tiene cuentas de usuario ni cookies de seguimiento. Los correos se usan solo para responder consultas.",
    "Payments are processed by third-party platforms. We do not receive or store card data.":
      "Los pagos los procesan plataformas externas. No recibimos ni almacenamos datos de tarjetas.",

    // ── Contacto ───────────────────────────────────────────────
    "Business & licensing": "Empresa y licencias",
    "For commercial licenses, platform verification, partnerships or press, email us directly.":
      "Para licencias comerciales, verificación de plataformas, alianzas o prensa, escríbenos directamente.",
    "Platform or verification requests: include the platform and deadline in the subject.":
      "Solicitudes de verificación: incluye la plataforma y la fecha límite en el asunto.",
    "Official links": "Enlaces oficiales",
    "Email the studio": "Escribe al estudio",
    "Product information": "Información del producto",
    "Profile": "Perfil",
    "Kickstarter": "Kickstarter",
    "MyMiniFactory": "MyMiniFactory",
    "Store": "Tienda",

    // ── Pie ────────────────────────────────────────────────────
    "License": "Licencia",
    "Privacy": "Privacidad",
    "© 2026 DRAKO figures LLC. All rights reserved.": "© 2026 DRAKO figures LLC. Todos los derechos reservados.",
    "Digital collectible figures for 3D printing.": "Figuras coleccionables digitales para impresión 3D."
  };

  var orig = new WeakMap();

  function norm(s) {
    return s.replace(/\s+/g, ' ').trim();
  }

  function apply(lang) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) { nodes.push(walker.currentNode); }

    nodes.forEach(function (n) {
      var key = norm(n.nodeValue || '');
      if (!key || !DICT.hasOwnProperty(key)) { return; }
      if (!orig.has(n)) { orig.set(n, n.nodeValue); }
      var base = orig.get(n);
      var lead = (base.match(/^\s*/) || [''])[0];
      var trail = (base.match(/\s*$/) || [''])[0];
      n.nodeValue = lead + (lang === 'es' ? DICT[key] : key) + trail;
    });

    document.documentElement.lang = lang;
    document.title = lang === 'es'
      ? 'DRAKO figures LLC — Figuras coleccionables digitales para impresión 3D'
      : 'DRAKO figures LLC — Digital collectible figures for 3D printing';

    try { localStorage.setItem('drakolang', lang); } catch (e) { }

    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang-btn') === lang);
      b.setAttribute('aria-pressed', b.getAttribute('data-lang-btn') === lang ? 'true' : 'false');
    });
  }

  function init() {
    var saved = 'en';
    try { saved = localStorage.getItem('drakolang') || 'en'; } catch (e) { }
    if (saved !== 'es') { saved = 'en'; }

    // Permite enlazar directo en español: ...?lang=es
    try {
      var q = new URLSearchParams(window.location.search).get('lang');
      if (q === 'es' || q === 'en') { saved = q; }
    } catch (e) { }

    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-lang-btn')); });
    });

    apply(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
