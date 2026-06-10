/* ============================================================
   DATA · PROJECTS — single source of truth for project content.
   Edit THIS file to update the portfolio. Cards + modals render
   from here; no markup changes needed.

   Arabic register: refined Egyptian colloquial (عامية بيضاء).
   NOTE: values marked [confirm] are structural placeholders —
   replace with verified numbers before going live.
   ============================================================ */
(function (MOS) {
  "use strict";

  MOS.data = MOS.data || {};

  /* order = display order in the carousel */
  MOS.data.PROJECTS = [
    {
      id: "ROYAL SEA",
      glyph: "R",
      glyphClass: "wc-3",
      tag:   { en: "E-Commerce · Brand System", ar: "تجارة إلكترونية · نظام هوية" },
      title: "Royal Sea",
      card: {
        en: "Full brand identity and bilingual Shopify commerce system for a premium seafood brand — 38-product catalog engineered, translated, and QA'd end-to-end.",
        ar: "هوية بصرية كاملة ونظام تجارة إلكترونية بلغتين على شوبيفاي لبراند مأكولات بحرية فاخر — كتالوج ٣٨ منتج اتبنى واتترجم واتراجع من الأول للآخر."
      },
      meta: {
        en: ["Shopify", "Brand Identity", "AR/EN Localization"],
        ar: ["شوبيفاي", "الهوية البصرية", "تعريب كامل"]
      },
      techs: ["Shopify", "Brand Identity", "Commerce Ops", "Localization"],
      desc: {
        en: "A complete brand and commerce system for a premium seafood label. Designed the visual identity — a five-color maritime system built around Deep Ocean and Sea Blue — and engineered the Shopify store: structured 38-SKU catalog, six collections, bilingual storefront with full Arabic localization, and data QA across every product before launch.",
        ar: "نظام هوية وتجارة كامل لبراند مأكولات بحرية فاخر. صممت الهوية البصرية — نظام خمس ألوان بحري مبني على الأزرق العميق — وهندست متجر الشوبيفاي: كتالوج منظم من ٣٨ منتج، ست مجموعات، واجهة بلغتين بتعريب كامل، ومراجعة دقيقة لبيانات كل منتج قبل الإطلاق."
      },
      stats: [
        { lbl: "CATALOG ENGINEERED", val: "38 SKUs", desc: "Structured, QA'd, and import-ready" },
        { lbl: "STOREFRONT LOCALIZATION", val: "100% AR/EN", desc: "Full catalog, pages, navigation & SEO meta" }
      ],
      link: "mailto:mostafaamir692002@gmail.com"
    },
    {
      id: "MEDIEVAL ALOUD",
      glyph: "M",
      glyphClass: "wc-1",
      tag:   { en: "Brand · Commerce · Localization", ar: "البراند · التجارة · التعريب" },
      title: "Medieval Aloud",
      card: {
        en: "Arabian fragrance brand (oud & musk) — Shopify commerce system with full Arabic localization, refined product language, and Gulf-market SEO architecture.",
        ar: "براند عطور عربي (عود ومسك) — نظام تجارة على شوبيفاي بتعريب كامل، لغة منتجات متصقولة، وهندسة SEO مظبوطة على السوق الخليجي."
      },
      meta: {
        en: ["Shopify", "Localization", "Gulf Market"],
        ar: ["شوبيفاي", "التعريب", "السوق الخليجي"]
      },
      techs: ["Shopify", "Brand Voice", "SEO Meta System", "AR Localization"],
      desc: {
        en: "Commerce and language system for an Arabian fragrance house specializing in oud and musk. Built the Shopify product architecture and executed full Arabic localization — product naming, collection copy, navigation, and SEO meta — with the product language refined line-by-line for the Gulf market's premium fragrance vocabulary.",
        ar: "نظام تجارة ولغة لدار عطور عربية متخصصة في العود والمسك. بنيت هيكل المنتجات على شوبيفاي ونفذت التعريب الكامل — أسامي المنتجات، نصوص المجموعات، التنقل، وبيانات الـ SEO — مع صقل لغة المنتجات سطر سطر على قاموس العطور الفاخرة في السوق الخليجي."
      },
      stats: [
        { lbl: "CATALOG LOCALIZED", val: "100%", desc: "Products, collections, meta & UI strings" },
        { lbl: "SEO META SYSTEM", val: "Full stack", desc: "Bilingual titles & descriptions, market-tuned" }
      ],
      link: "mailto:mostafaamir692002@gmail.com"
    },
    {
      id: "UNITED",
      glyph: "U",
      glyphClass: "wc-2",
      tag:   { en: "Brand Identity · Commerce System", ar: "هوية البراند · نظام التجارة" },
      title: "UNITED",
      card: {
        en: "End-to-end brand and commerce system for a fashion label. Visual architecture wired directly into the commerce infrastructure.",
        ar: "نظام هوية وتجارة متكامل لبراند في قطاع الأزياء — البنية البصرية متوصلة مباشرة بمنظومة التجارة الإلكترونية."
      },
      meta: {
        en: ["Brand Strategy", "Identity", "Shopify"],
        ar: ["الاستراتيجية", "الهوية", "شوبيفاي"]
      },
      techs: ["Brand Strategy", "Identity System", "Shopify", "Commerce Architecture"],
      desc: {
        en: "End-to-end brand and commerce system for a fashion label. Designed the complete visual architecture and wired it directly to the commerce infrastructure — identity through checkout — for a consistent experience across every touchpoint.",
        ar: "نظام هوية وتجارة متكامل لبراند أزياء. صممت البنية البصرية الكاملة ووصلتها مباشرة بمنظومة التجارة — من الهوية لحد الدفع — عشان التجربة تفضل متسقة في كل نقطة تواصل."
      },
      stats: [
        { lbl: "BRAND SYSTEM", val: "[confirm]", desc: "Component count / scope — to verify" },
        { lbl: "STORE PERFORMANCE", val: "[confirm]", desc: "Benchmark — to verify" }
      ],
      link: "mailto:mostafaamir692002@gmail.com"
    },
    {
      id: "FISHMONGER",
      glyph: "F",
      glyphClass: "wc-4",
      tag:   { en: "Commerce · Operations System", ar: "التجارة · نظام العمليات" },
      title: "Fishmonger",
      card: {
        en: "Commerce architecture and operations system for a fresh seafood brand — store, inventory workflows, and fulfillment automation connected end-to-end.",
        ar: "بنية تجارية ونظام عمليات لبراند أسماك طازة — المتجر وتدفقات المخزون وأتمتة التوريد متوصلين من الأول للآخر."
      },
      meta: {
        en: ["Commerce", "Operations", "Automation"],
        ar: ["التجارة", "العمليات", "الأتمتة"]
      },
      techs: ["Commerce Architecture", "Operations Design", "Shopify", "Workflow Automation"],
      desc: {
        en: "A commerce and operations system for a fresh seafood brand. Engineered the store architecture, inventory management systems, and the operational workflows connecting sourcing to fulfillment — automating the routine so the team focuses on quality.",
        ar: "نظام تجارة وعمليات لبراند أسماك طازة. هندست بنية المتجر وأنظمة المخزون وتدفقات الشغل اللي بتوصّل التوريد بالتوصيل — الروتين كله اتأتمت عشان الفريق يركز في الجودة."
      },
      stats: [
        { lbl: "OPS AUTOMATION", val: "[confirm]", desc: "Hours saved / workflows — to verify" },
        { lbl: "FULFILLMENT", val: "[confirm]", desc: "Accuracy metric — to verify" }
      ],
      link: "mailto:mostafaamir692002@gmail.com"
    },
    {
      id: "PANTOUFLA",
      glyph: "P",
      glyphClass: "wc-5",
      tag:   { en: "Brand · Identity · E-Commerce", ar: "البراند · الهوية · التجارة" },
      title: "Pantoufla",
      card: {
        en: "Brand system and commerce platform for a premium footwear label — visual identity that communicates luxury, paired with a Shopify store built for discovery and conversion.",
        ar: "نظام هوية ومنصة تجارة لبراند أحذية فاخر — هوية بصرية بتوصّل إحساس الفخامة، مع متجر شوبيفاي متبني للتصفح السهل والتحويل العالي."
      },
      meta: {
        en: ["Brand System", "Identity", "Shopify"],
        ar: ["نظام البراند", "الهوية", "شوبيفاي"]
      },
      techs: ["Brand System", "Visual Identity", "Shopify", "Product UX"],
      desc: {
        en: "A brand system and commerce platform for a premium footwear label. Built a visual identity system communicating luxury and craft, paired with a Shopify store engineered for effortless discovery and high-intent conversion.",
        ar: "نظام هوية ومنصة تجارة لبراند أحذية منزلية فاخر. بنيت نظام بصري بيعكس الجودة والشياكة، ومتجر شوبيفاي متهندس إن العميل يلاقي اللي بيدور عليه بسهولة ويشتري من غير مجهود."
      },
      stats: [
        { lbl: "IDENTITY ASSETS", val: "[confirm]", desc: "Scope across digital & packaging — to verify" },
        { lbl: "ORDER VALUE", val: "[confirm]", desc: "AOV impact — to verify" }
      ],
      link: "mailto:mostafaamir692002@gmail.com"
    }
  ];

  /* lookup by id for the modal */
  MOS.data.PROJECT_BY_ID = {};
  MOS.data.PROJECTS.forEach(function (p) { MOS.data.PROJECT_BY_ID[p.id] = p; });
})(window.MOS = window.MOS || {});
