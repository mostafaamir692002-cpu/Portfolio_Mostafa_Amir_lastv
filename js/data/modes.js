/* ============================================================
   DATA · DISCIPLINES (operating modes) — Product Builder focus.
   Bilingual english and Arabic (Egyptian colloquial refined).
   ============================================================ */
(function (MOS) {
  "use strict";

  MOS.data = MOS.data || {};

  MOS.data.MODES = [
    {
      t: "Product Strategy & Positioning",
      arT: "استراتيجية وتموضع المنتجات",
      d: "I define the product vision, pricing architecture, and customer positioning before a single pixel is designed. Aligning business objectives with actual market demand to create viable products.",
      ar: "بحدد رؤية المنتج، هيكل التسعير، وتموضع العميل قبل رسم بكسل واحد. مواءمة أهداف البيزنس مع طلب السوق الحقيقي لخلق منتجات ناجحة ولها قيمة.",
      m: [["Market Discovery", 92], ["Pricing Architecture", 88], ["Product Thinking", 95]]
    },
    {
      t: "Commerce Architecture",
      arT: "هندسة منصات التجارة",
      d: "Designing end-to-end commerce structures that optimize product discovery and checkout flows. Structuring product databases, cart rules, and payment integrations to drive revenue.",
      ar: "تصميم بنية التجارة بالكامل لتحسين تصفح المنتجات ومسار الدفع. تنظيم قواعد بيانات المنتجات، شروط السلة، وتكامل المدفوعات لزيادة الأرباح.",
      m: [["Catalog Design", 94], ["Conversion UX", 91], ["Payment Flow", 90]]
    },
    {
      t: "Business Workflows & Logistics",
      arT: "تدفقات العمل واللوجستيات",
      d: "Mapping, auditing, and optimizing the operational processes behind a product. Restructuring warehouse dispatch, courier handoffs, and customer tracking cycles.",
      ar: "رسم ومراجعة وتحسين العمليات التشغيلية اللي ورا المنتج. إعادة هيكلة توزيع المخازن، تسليم المناديب، ودورات تتبع العميل للطلبات.",
      m: [["Workflow Design", 90], ["Fulfillment Logic", 92], ["Operational Audit", 86]]
    },
    {
      t: "Growth Strategy & Go-to-Market",
      arT: "استراتيجية النمو والإطلاق للسوق",
      d: "Designing the full launch plan — from pricing and channel selection to messaging and conversion funnels. Turning a ready product into real market traction.",
      ar: "تصميم خطة الإطلاق الكاملة — من التسعير واختيار القنوات لحد رسائل التسويق ومسارات التحويل. تحويل المنتج الجاهز لحركة حقيقية في السوق.",
      m: [["Launch Planning", 92], ["Channel Strategy", 89], ["Conversion Funnels", 94]]
    },
    {
      t: "Brand Systems & Identity",
      arT: "أنظمة وهوية العلامة التجارية",
      d: "Structuring visual assets and design systems that scale. Creating clear style guidelines and components that ensure brand consistency across packaging, print, and web.",
      ar: "بناء الأنظمة البصرية وأدلة التصميم للتوسع السلس. خلق أدلة أسلوب ومكونات واضحة تضمن اتساق البراند في التعبئة والتغليف، المطبوعات، والويب.",
      m: [["Visual Systems", 90], ["Brand Consistency", 93], ["Packaging Design", 85]]
    }
  ];
})(window.MOS = window.MOS || {});
