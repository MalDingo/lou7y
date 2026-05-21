// Replace this number with your WhatsApp number in international format.
const whatsappNumber = "2340000000000";

const orderMessages = {
  featured:
    "عسلامة، نحب نطلب ديكور الحيطان 3D المستوحى من بورش. ابعثلي السوم وتفاصيل التوصيل.",
  "custom-car":
    "عسلامة، نحب قطعة ديكور كرهبة حسب الطلب. شنوة الموديلات والقياسات والالوان والسوم؟",
  homer:
    "عسلامة، نحب نسال على ديكور هومر. ابعثلي السوم وتفاصيل التوصيل.",
  spider:
    "عسلامة، نحب نسال على ديكور سبايدر مان. ابعثلي السوم وتفاصيل التوصيل.",
  "marble-ref10":
    "عسلامة، نحب نسال على رولو فو ماربر ref10 قياس 3م / 1.20م وسمك 3 مم. ابعثلي السوم وتفاصيل التوصيل.",
  catalog:
    "عسلامة، نحب نشوف المنتوجات المتوفرة والاسوام.",
};

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  const productKey = link.dataset.product || "catalog";
  const message = orderMessages[productKey] || orderMessages.catalog;

  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noreferrer";
});
