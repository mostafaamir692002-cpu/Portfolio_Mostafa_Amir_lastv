/* ============================================================
   DATA · PROJECTS — single source of truth for project content.
   Every project is a real, live business. Renders as comprehensive
   case studies inside the OS modal system.
   ============================================================ */
(function (MOS) {
  "use strict";

  MOS.data = MOS.data || {};

  MOS.data.PROJECTS = [
    {
      id: "ROYAL SEA",
      glyph: "R",
      glyphClass: "wc-3",
      tag: { en: "Premium Seafood Commerce", ar: "متجر مأكولات بحرية فاخرة" },
      title: "Royal Sea",
      website: "https://royal-sea-eg.com",
      status: { en: "Live", ar: "مشروع حي" },
      previewImage: "https://royal-sea-eg.com/cdn/shop/files/ChatGPT_Image_Jun_3_2026_09_47_12_PM.png?v=1780512456&width=1200",
      problem_short: {
        en: "How do you sell premium seafood online when standard storefronts feel cheap?",
        ar: "إزاي تبيع مأكولات بحرية فاخرة وقوالب المتاجر التقليدية بتبان رخيصة؟"
      },
      outcome_short: {
        en: "A bilingual commerce system — 38 SKUs, full AR/EN localization, zero friction checkout.",
        ar: "نظام تجارة كامل بلغتين — ٣٨ منتج، تعريب شامل، وتجربة دفع بدون أي عقبات."
      },
      card: {
        en: "Bilingual Shopify commerce system for a premium seafood brand — 38-product catalog engineered, translated, and QA'd end-to-end.",
        ar: "نظام تجارة إلكترونية كامل على شوبيفاي بلغتين لبراند مأكولات بحرية فاخر — كتالوج ٣٨ منتج اتبنى واتراجع من الأول للآخر."
      },
      meta: {
        en: ["Brand Experience", "Commerce Architecture", "Catalog Design"],
        ar: ["تجربة العلامة", "بنية التجارة", "تصميم الكتالوج"]
      },
      focusTags: {
        en: ["Brand Building", "Commerce System", "Product Catalog", "Bilingual UX", "Customer Journey"],
        ar: ["بناء العلامة", "نظام التجارة", "كتالوج المنتجات", "تجربة ثنائية اللغة", "رحلة العميل"]
      },
      techs: {
        en: ["Shopify Engine", "Catalog Architecture", "Customer Journey", "Bilingual Localization"],
        ar: ["محرك شوبيفاي", "بنية الكتالوج", "رحلة العميل", "التعريب المزدوج"]
      },
      focus: {
        en: ["Brand Building", "Commerce Experience", "Product Catalog Architecture", "Customer Journey", "Operational Thinking"],
        ar: ["بناء العلامة التجارية", "تجربة التجارة الإلكترونية", "بنية كتالوج المنتجات", "رحلة العميل", "التفكير التشغيلي"]
      },
      overview: {
        en: "Royal Sea is a premium seafood brand that delivers high-quality catches directly to consumers. We took their offline culinary authority and translated it into a streamlined, high-converting digital shopping system tailored for a premium customer base.",
        ar: "رويال سي هو براند مأكولات بحرية فاخر بيوصل صيد البحر الطازة للعملاء مباشرة. أخدنا هيبتهم ومصداقيتهم في السوق التقليدي وترجمناها لنظام تسوق رقمي سريع ومقنع، متصمم بالظبط لقاعدة عملاء بتبحث عن الجودة الفائقة."
      },
      businessContext: {
        en: "Premium seafood demands a trust-heavy customer experience. The digital storefront needed to convey absolute freshness, clarify sourcing practices, and make the premium price point feel fully justified from the first click.",
        ar: "المأكولات البحرية الفاخرة بتحتاج ثقة كبيرة من العميل. الواجهة الرقمية كان لازم تنقل إحساس الطزاجة المطلقة، وتوضح طرق التوريد، وتخلي السعر المميز مبرر تماماً من أول كليكة."
      },
      problem: {
        en: "Standard Shopify templates felt cheap and failed to convey quality. Sourcing variables, catch-type segregation (fresh vs. frozen), and delivery scheduling were complex, causing friction and drop-offs during checkout.",
        ar: "قوالب شوبيفاي التقليدية كانت بتظهر بشكل رخيص ومش بتعكس الفخامة. كمان تفاصيل التوريد، وتقسيم المنتجات (طازة ضد مجمد)، وتنسيق مواعيد التوصيل كانت معقدة وبتسبب خروج العميل من صفحة الدفع."
      },
      solution: {
        en: "Built a customized Shopify system with a rigid, high-end visual design. Structured the 38-SKU catalog around clear freshness signals, integrated local checkout flows, and simplified delivery slot selections for Cairo logistics.",
        ar: "بنينا نظام شوبيفاي مخصص بهيكل بصري راقي ومتماسك. رتبنا الكتالوج اللي بيضم ٣٨ منتج حول علامات طزاجة واضحة، ودمجنا بوابات الدفع المحلية، وسهلنا اختيار مواعيد التوصيل لتتناسب مع لوجستيات القاهرة."
      },
      decisions: {
        en: [
          "Catalog Separation: Split fresh catch from frozen collections to align expectations on delivery time.",
          "Visual Quality Signals: Designed custom badges for catch location (e.g., Red Sea, Mediterranean) to build instant trust.",
          "Frictionless Checkout: Removed nested steps in cart, reducing details down to delivery date and time slots."
        ],
        ar: [
          "فصل الكتالوج: قسمنا المنتجات لمجموعات طازة ومجمدة لتنسيق توقعات العميل عن وقت التوصيل.",
          "إشارات الثقة البصرية: عملنا شارات مخصصة لمكان الصيد (البحر الأحمر، المتوسط) لبناء مصداقية فورية.",
          "تبسيط الدفع: لغينا الخطوات الكتيرة في السلة واختصرنا البيانات المطلوبة في تاريخ التوصيل والميعاد المفضل."
        ]
      },
      systemArchitecture: {
        en: "Wired Shopify's Liquid backend into a streamlined frontend. Configured local payment gateways, Arabic domain routing, and structured metadata for SEO search queries.",
        ar: "ربطنا خلفية شوبيفاي بواجهة سريعة وخفيفة. ضبطنا بوابات الدفع المحلية، وتوجيه النطاق العربي، وهيكلة البيانات الوصفية لمحركات البحث."
      },
      outcome: {
        en: "Launched a highly functional, premium bilingual storefront. The catalog is optimized for immediate discovery, resulting in an effortless digital journey that matches the quality of the product itself.",
        ar: "تم إطلاق واجهة متجر راقية وسريعة بلغتين. الكتالوج متهندس للوصول السريع للمنتجات، والنتيجة رحلة رقمية مريحة بتليق بجودة المنتج نفسه."
      },
      stats: [
        { lbl: "CATALOG SIZE", val: "38 SKUs", desc: "Structured & QA'd end-to-end" },
        { lbl: "LOCALIZATION", val: "100% AR/EN", desc: "Catalogs, pages & metadata synced" }
      ],
      link: "https://royal-sea-eg.com"
    },
    {
      id: "MEDIEVAL ALOUD",
      glyph: "M",
      glyphClass: "wc-1",
      tag: { en: "Luxury Fragrance Brand", ar: "دار عطور فاخرة" },
      title: "Medieval Aloud",
      website: "https://medieval-aloud.com",
      status: { en: "Live", ar: "مشروع حي" },
      previewImage: "https://medieval-aloud.com/cdn/shop/files/ChatGPT_Image_May_24_2026_06_48_23_PM.png?v=1779637738&width=1200",
      problem_short: {
        en: "A luxury oud & musk brand with zero search visibility in the Gulf — and copy that sounded generic.",
        ar: "دار عطور عود ومسك فاخرة بدون ظهور في محركات البحث الخليجية — ونصوص بتبان عادية."
      },
      outcome_short: {
        en: "Full brand voice overhaul, Gulf-market SEO architecture, and a storefront that feels like a boutique.",
        ar: "إعادة صياغة كاملة لنبرة البراند، بنية SEO خليجية، ومتجر يحس بنفسه محل عطور فاخر."
      },
      card: {
        en: "Premium fragrance house (Oud & Musk) Shopify system with full Arabic localization, premium copy, and Gulf-market SEO architecture.",
        ar: "نظام تجارة لدار عطور عربية فاخرة (العود والمسك) على شوبيفاي بتعريب كامل، وصياغة راقية، وبنية SEO مظبوطة للسوق الخليجي."
      },
      meta: {
        en: ["Luxury Positioning", "Brand Voice", "Search Architecture"],
        ar: ["تموضع الفخامة", "نبرة الصوت للبراند", "بنية البحث"]
      },
      focusTags: {
        en: ["Brand Strategy", "Luxury Positioning", "Content Direction", "Gulf SEO", "Commerce Experience"],
        ar: ["استراتيجية البراند", "تموضع الفخامة", "توجيه المحتوى", "SEO خليجي", "تجربة التجارة"]
      },
      techs: {
        en: ["Shopify Engine", "Premium Copywriting", "SEO Optimization", "Gulf Market Adaptability"],
        ar: ["محرك شوبيفاي", "كتابة النصوص الفاخرة", "تحسين الـ SEO", "ملاءمة السوق الخليجي"]
      },
      focus: {
        en: ["Brand Strategy", "Luxury Positioning", "Product System Design", "Ecommerce Experience", "Content & Visual Direction"],
        ar: ["استراتيجية البراند", "تموضع الفخامة", "تصميم نظام المنتجات", "تجربة التجارة الإلكترونية", "التوجيه البصري والمحتوى"]
      },
      overview: {
        en: "Medieval Aloud is a luxury fragrance house specializing in oud, musk, and premium Arabian oils. We designed a commerce system that elevates the brand voice and optimizes product storytelling to match the elegance of high-end perfume boutiques.",
        ar: "ميدييفال ألاود هي دار عطور فاخرة متخصصة في العود والمسك والزيوت العربية الثمينة. صممنا نظام تجارة بيرتقي بنبرة البراند ويركز على سرد قصة كل منتج ليحاكي أناقة محلات العطور العالمية الفخمة."
      },
      businessContext: {
        en: "Fragrance shopping relies on sensory imagination. The digital experience must feel premium, using evocative language, clean typography, and high-end positioning to convert search interest into premium purchases.",
        ar: "شراء العطور بيعتمد على إثارة خيال العميل وحواسه. التجربة الرقمية كان لازم تعكس الفخامة عبر نصوص منتقاة بدقة، وخطوط متناسقة، وتموضع فاخر يحول الباحثين لعملاء مشترين."
      },
      problem: {
        en: "Oud and musk products are often poorly categorized online, leading to search confusion. The brand had zero search visibility in the highly lucrative Gulf market, and the product vocabulary lacked the premium tone expected by fragrance connoisseurs.",
        ar: "منتجات العود والمسك غالباً بيتم تصنيفها بشكل عشوائي أونلاين، وده بيعمل تشتيت للعملاء. البراند مكنش ظاهر خالص في نتائج البحث في السوق الخليجي الغني، ومصطلحات المنتجات كانت بتفتقر للغة الفاخرة اللي بينتظرها عشاق العطور."
      },
      solution: {
        en: "Structured the Shopify catalog with clear scent families. Wrote evocative, luxury-grade Arabic and English product narratives. Engineered a Gulf-focused SEO metadata architecture targeting premium Oud keywords.",
        ar: "رتبنا كتالوج شوبيفاي لعائلات عطور واضحة. كتبنا نصوص عطور تعبيرية وراقية جداً بالعربي والإنجليزي. وهندسنا بنية بيانات SEO مركزة على السوق الخليجي ومستهدفة للكلمات المفتاحية الفاخرة للعود."
      },
      decisions: {
        en: [
          "Story-First Layout: Put ingredients and notes above tech specs to build sensory appeal.",
          "Gulf Copy Tuning: Refined the Arabic copy line-by-line using premium Gulf vocabulary instead of generic translations.",
          "Clean Checkout Path: Simplified the steps to purchase on mobile device screen sizes to optimize conversions in fast-paced markets."
        ],
        ar: [
          "تنسيق القصة أولاً: حطينا المكونات والنوتات العطرية فوق المواصفات الفنية لإثارة رغبة العميل.",
          "ضبط نصوص الخليج: صقلنا النصوص العربية سطر سطر لتتناسب مع لهجة وقاموس الفخامة في الخليج بدلاً من الترجمة الحرفية.",
          "مسار دفع سريع: بسّطنا خطوات الشراء على الموبايل لرفع معدل التحويل في أسواق سريعة الحركة."
        ]
      },
      systemArchitecture: {
        en: "Configured clean Shopify Liquid structuring, optimized page asset sizes for fast mobile loads in Saudi Arabia and the UAE, and set up bilingual URL mapping.",
        ar: "ضبطنا هيكل شوبيفاي ليكون سريع وخفيف، وحسّنا أحجام ملفات الموقع لسرعة تحميل فائقة في السعودية والإمارات، وعملنا روابط متوافقة بين اللغتين."
      },
      outcome: {
        en: "Delivered a fully localized, premium fragrance storefront. The brand now speaks the language of luxury, and the digital shelf provides an immersive purchase experience that converts.",
        ar: "سلّمنا متجر عطور فاخر ومعرّب بالكامل. البراند دلوقتي بيتكلم لغة الفخامة المناسبة ليه، والواجهة الرقمية بتقدم تجربة شراء ممتعة بتجيب نتايج فعالة."
      },
      stats: [
        { lbl: "SEO COVERAGE", val: "100%", desc: "Bilingual search-optimized metadata" },
        { lbl: "CATALOG DEPLOYED", val: "Fully local", desc: "Refined copy and pricing structures" }
      ],
      link: "https://medieval-aloud.com"
    },
    {
      id: "SEAFOOD MOOD",
      glyph: "S",
      glyphClass: "wc-4",
      tag: { en: "Seafood Commerce Platform", ar: "منصة تجارة مأكولات بحرية" },
      title: "Seafood Mood",
      website: "https://seafood-mood.com",
      status: { en: "Live", ar: "مشروع حي" },
      previewImage: "https://www.seafood-mood.com/cdn/shop/files/5_9b25aaa5-430f-430c-a9e5-2630fd9e93a0.png?v=1774365601&width=1200",
      problem_short: {
        en: "Fresh seafood inventory changes daily — static carts cause order failures and delivery chaos.",
        ar: "مخزون الأسماك الطازجة بيتغير يومياً — السلة التقليدية بتسبب فشل في الطلبات وفوضى في التوصيل."
      },
      outcome_short: {
        en: "A dynamic commerce engine — live inventory sync, automated WhatsApp tracking, and 100% digital order flow.",
        ar: "محرك تجارة ديناميكي — مزامنة مخزون حية، متابعة واتساب أوتوماتيكية، وعمليات طلبات ١٠٠% رقمية."
      },
      card: {
        en: "Dynamic commerce platform for fresh catch ordering — inventory workflows, live pricing, and fulfillment logic connected end-to-end.",
        ar: "منصة تجارة ديناميكية لطلب الأسماك الطازجة — تدفقات المخزون، الأسعار الحية، ومنطق التوريد متصلين من الأول للآخر."
      },
      meta: {
        en: ["Platform Design", "Operational Flow", "Inventory Systems"],
        ar: ["تصميم المنصة", "التدفق التشغيلي", "أنظمة المخزون"]
      },
      focusTags: {
        en: ["Digital Commerce", "Inventory Operations", "Customer Experience", "Workflow Design", "Fulfillment Logic"],
        ar: ["التجارة الرقمية", "عمليات المخزون", "تجربة العميل", "تصميم التدفقات", "منطق التوريد"]
      },
      techs: {
        en: ["Commerce Engine", "Dynamic Pricing Workflows", "Order Routing System", "UX Design"],
        ar: ["محرك التجارة", "تدفقات التسعير الديناميكي", "نظام توجيه الطلبات", "تصميم تجربة المستخدم"]
      },
      focus: {
        en: ["Digital Commerce", "Customer Experience", "Product Structure", "Business Workflow Design"],
        ar: ["التجارة الرقمية", "تجربة العملاء", "هيكل المنتجات", "تصميم تدفقات عمل البيزنس"]
      },
      overview: {
        en: "Seafood Mood is an interactive commerce platform built to bring the ocean's best harvests to metropolitan buyers. The platform connects live inventory variables with a sleek consumer ordering frontend.",
        ar: "سيفود مود هي منصة تجارية تفاعلية اتبنت عشان تقرب صيد البحر الطازة للمشترين في المدن. المنصة بتوصل متغيرات المخزون الحية بواجهة مستخدم ممتازة وسهلة الطلب."
      },
      businessContext: {
        en: "Fresh seafood commerce is volatile. Sourcing details change daily, prices shift based on market catch volume, and customers expect fast, reliable delivery slots. The platform had to turn these challenges into a stable business asset.",
        ar: "تجارة الأسماك الطازجة متقلبة. تفاصيل التوريد بتتغير يومياً، والأسعار بتتحرك حسب حجم الصيد في اليوم، والعملاء بينتظروا مواعيد توصيل دقيقة وسريعة. كان لازم المنصة تحول التحديات دي لنقاط قوة وقيمة حقيقية."
      },
      problem: {
        en: "Standard static carts fail when items go out of stock mid-day. Sourcing routes and order fulfillment were disconnected, leading to manual order edits and delayed delivery calls.",
        ar: "سلة التسوق التقليدية بتبوظ لما المنتجات تخلص فجأة وسط اليوم. كمان طرق التوريد وتلبية الطلبات كانت منفصلة، وده كان بيؤدي لتعديل الطلبات يدوياً ومكالمات توصيل متأخرة."
      },
      solution: {
        en: "Architected a responsive commerce engine that updates product availability, streamlines delivery options based on live logistics capacity, and organizes backend orders for direct routing.",
        ar: "صممنا محرك تجاري مرن بيحدث توافر المنتجات فوراً، وبيسهل خيارات التوصيل بناءً على القدرة اللوجستية الحقيقية، ويرتب الطلبات في الخلفية للتوجيه المباشر."
      },
      decisions: {
        en: [
          "Dynamic Inventory Sync: Set up automated stock thresholds to hide sold-out catches instantly.",
          "Visual Freshness Cards: Rebuilt the cards layout to show catch dates and delivery windows clearly.",
          "Unified Customer View: Integrated customer accounts with automated WhatsApp tracking alerts."
        ],
        ar: [
          "مزامنة المخزون الديناميكية: ضبطنا حدود المخزون التلقائية لإخفاء الأسماك المباعة فوراً وتجنب الطلبات الملغاة.",
          "كروت الطزاجة البصرية: أعدنا تصميم الكروت لعرض تاريخ الصيد ومواعيد التوصيل بوضوح للعميل.",
          "حساب موحد للعميل: ربطنا حسابات العملاء بتنبيهات تتبع أوتوماتيكية عبر الواتساب."
        ]
      },
      systemArchitecture: {
        en: "Integrated commerce backend with automated dispatching pipelines, localized address-mapping systems, and payment gateway APIs.",
        ar: "ربطنا خلفية المتجر بمسارات توزيع آلية، وأنظمة لتحديد العناوين محلياً، وبوابات الدفع الإلكتروني."
      },
      outcome: {
        en: "Delivered a high-conversion seafood platform that takes the chaos out of fresh commerce. Operations are streamlined, and buyers enjoy a fast, reliable path from sea to table.",
        ar: "سلّمنا منصة مأكولات بحرية عالية التحويل شالت العشوائية من التجارة الطازة. العمليات بقت أسرع والعميل بقا يستمتع برحلة سهلة وموثوقة من البحر لطاولة الطعام."
      },
      stats: [
        { lbl: "DELIVERY LATENCY", val: "Minimized", desc: "Dynamic scheduling in place" },
        { lbl: "ORDER LOOP", val: "100% Digital", desc: "Automated routing replaces manual calls" }
      ],
      link: "https://seafood-mood.com"
    },
    {
      id: "UNITED",
      glyph: "U",
      glyphClass: "wc-2",
      tag: { en: "B2B Fresh Produce Supplier", ar: "مورد حاصلات طازجة B2B" },
      title: "UNITED",
      website: "https://united-ffv.com",
      status: { en: "Live", ar: "مشروع حي" },
      previewImage: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=1200&q=80",
      problem_short: {
        en: "A B2B produce supplier running wholesale on WhatsApp and phone calls — invoice errors, expired stock, zero visibility.",
        ar: "مورد جملة بيدير طلباته على الواتساب والتليفون — أخطاء فواتير، منتجات تالفة، وصفر رؤية."
      },
      outcome_short: {
        en: "Digitized the full supply chain — contract pricing portal, auto-PDF invoicing, warehouse packing manifests.",
        ar: "رقمنة كاملة لسلسلة التوريد — بوابة أسعار العقود، فواتير PDF أوتوماتيكية، وقوائم تعبئة المخازن."
      },
      card: {
        en: "Comprehensive B2B commerce and operations system for a fresh produce supplier — automating ordering, invoicing, and supply chain logistics.",
        ar: "نظام عمليات وتجارة B2B متكامل لمورد حاصلات زراعية طازجة — أتمتة الطلبات، الفواتير، ولوجستيات سلاسل التوريد."
      },
      meta: {
        en: ["B2B Infrastructure", "Supply Chain Systems", "Operational Automation"],
        ar: ["بنية تحتية B2B", "أنظمة سلاسل التوريد", "أتمتة العمليات"]
      },
      focusTags: {
        en: ["B2B Commerce", "Supply Chain Design", "Workflow Automation", "Operations", "Digital Transformation"],
        ar: ["التجارة B2B", "تصميم سلاسل التوريد", "أتمتة العمليات", "التشغيل", "التحول الرقمي"]
      },
      techs: {
        en: ["Operations Design", "Invoice Automation", "Logistics Routing", "Wholesale Portal UX"],
        ar: ["تصميم العمليات", "أتمتة الفواتير", "توجيه اللوجستيات", "واجهة بوابة الجملة"]
      },
      focus: {
        en: ["Business Systems", "Operations", "B2B Commerce", "Supply Chain Thinking", "Digital Transformation"],
        ar: ["أنظمة الأعمال", "العمليات", "التجارة بين الشركات", "تفكير سلاسل التوريد", "التحول الرقمي"]
      },
      overview: {
        en: "UNITED is a major B2B supplier of fresh fruits and vegetables to hotels, restaurants, and caterers. We restructured their manual wholesale ordering loop into a robust digital operations system that eliminates administrative overhead and automates daily shipping cycles.",
        ar: "يونايتد هي مورد B2B كبير للفواكه والخضروات للفنادق والمطاعم وشركات التموين. أعدنا هيكلة دورة طلبات الجملة اليدوية لنظام عمليات رقمي قوي بيقضي على المجهود الإداري وبيأتمت دورات الشحن اليومية."
      },
      businessContext: {
        en: "B2B commerce operates on volume and accuracy. Restaurant kitchens need precise produce deliveries, customized price contracts must be dynamically honored, and invoicing must align with corporate accounting schedules without human errors.",
        ar: "التجارة بين الشركات (B2B) بتعتمد على الحجم والدقة. مطابخ المطاعم بتحتاج توصيل دقيق للخضار والفاكهة، وأسعار العقود المخصصة لازم تتنفذ أوتوماتيكياً، وإصدار الفواتير لازم يتطابق مع الأنظمة المحاسبية للشركات بدون أخطاء بشرية."
      },
      problem: {
        en: "The supplier relied on phone calls and WhatsApp sheets, creating invoice mismatches and logistics delays. Fresh produce expired in warehouses due to lack of real-time demand visibility, leading to high product waste.",
        ar: "كان المورد بيعتمد على المكالمات الهاتفية وقوائم الواتساب، وده كان بيعمل أخطاء في الفواتير وتأخير في التوصيل. كمان المنتجات الطازة كانت بتبوظ في المخازن لعدم وجود رؤية لحظية للطلب، مما أدى لهدر كبير للمنتجات."
      },
      solution: {
        en: "Engineered a wholesale digital portal where buyers place contract-priced orders. Integrated an automated invoice generation engine and a warehouse packing list system synchronized with shipping dispatch schedules.",
        ar: "صممنا بوابة رقمية للجملة بيقوم المشترين من خلالها بطلب احتياجاتهم بأسعار عقودهم المحددة. ودمجنا محرك أوتوماتيكي لإصدار الفواتير ونظام لقوائم التعبئة في المخازن متزامن مع مواعيد الشحن."
      },
      decisions: {
        en: [
          "Contract-Based Pricing: Built custom price profiles so each restaurant group sees their pre-negotiated wholesale rates.",
          "Automated PDF Invoicing: Programmed direct PDF creation on order confirmation to bypass accounting bottlenecks.",
          "Warehouse Manifest Generation: Configured automated sorting of items by weight and cooling requirements to speed up packing."
        ],
        ar: [
          "التسعير القائم على العقود: بنينا ملفات أسعار مخصصة عشان كل مجموعة مطاعم تظهرلها أسعار الجملة المتفاوض عليها مسبقاً.",
          "أتمتة فواتير PDF: برمجنا إصدار فواتير الـ PDF تلقائياً عند تأكيد الطلب لتخطي الاختناق المحاسبي.",
          "قوائم ترتيب المخازن: عملنا ترتيب تلقائي للمنتجات حسب الوزن والاحتياج للتبريد لتسريع عملية التعبئة للسيارات."
        ]
      },
      systemArchitecture: {
        en: "Wired the wholesale commerce flow with custom database pricing structures, logistics dispatch routes, and invoice print templates.",
        ar: "ربطنا تدفق تجارة الجملة بقواعد بيانات أسعار مخصصة، ومسارات التوزيع اللوجستية، وقوالب طباعة الفواتير."
      },
      outcome: {
        en: "Digitized the entire supply chain workflow. Reduced order errors to near zero, accelerated invoice delivery, and optimized warehouse space by aligning inventory with real culinary buyer demand.",
        ar: "حولنا كامل سلسلة التوريد للرقمية. قللنا أخطاء الطلبات لـ صفر تقريباً، وسرّعنا تسليم الفواتير، وحسّنا استخدام مساحات المخازن بربط المخزون بالطلب الفعلي."
      },
      stats: [
        { lbl: "INVOICING SPEED", val: "Instant", desc: "Automated PDFs bypass manual entry" },
        { lbl: "ORDER ERRORS", val: "~0%", desc: "Precise contract validation on entry" }
      ],
      link: "https://united-ffv.com"
    }
  ];

  /* lookup by id for the modal */
  MOS.data.PROJECT_BY_ID = {};
  MOS.data.PROJECTS.forEach(function (p) { MOS.data.PROJECT_BY_ID[p.id] = p; });
})(window.MOS = window.MOS || {});
