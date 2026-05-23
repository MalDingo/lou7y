// Replace this number with your WhatsApp number in international format.
const whatsappNumber = "21622421292";
const messengerPageId = "61589614307266";

const orderMessages = {
  featured:
    "عسلامة، نحب نطلب ديكور الحيطان 3D المستوحى من بورش. ابعثلي القياسات المتوفرة وتفاصيل التوصيل. نعرف اللي السوم يتحسب بالطول × العرض.",
  "custom-car":
    "عسلامة، نحب قطعة ديكور كرهبة حسب الطلب. شنوة الموديلات والقياسات والالوان والسوم؟",
  homer:
    "عسلامة، نحب نسال على ديكور هومر. ابعثلي القياسات المتوفرة وتفاصيل التوصيل.",
  spider:
    "عسلامة، نحب نسال على ديكور سبايدر مان. ابعثلي القياسات المتوفرة وتفاصيل التوصيل.",
  "marble-ref10":
    "عسلامة، نحب نسال على رولو فو ماربر ref10 قياس 3م / 1.20م وسمك 3 مم. ابعثلي السوم وتفاصيل التوصيل.",
  ronaldo:
    "عسلامة، نحب نسال على ديكور رونالدو CR7. ابعثلي السوم والقياسات وتفاصيل التوصيل.",
  messi:
    "عسلامة، نحب نسال على ديكور ميسي رقم 10. ابعثلي السوم والقياسات وتفاصيل التوصيل.",
  "led-music":
    "عسلامة، نحب نطلب لوحة موسيقى LED حسب الطلب. شنوة المعلومات والصورة والاغنية اللي يلزم نبعثهم؟",
  "clear-music":
    "عسلامة، نحب نطلب لوحة اغنية شفافة حسب الطلب. شنوة المعلومات والصورة والاغنية اللي يلزم نبعثهم؟",
  "wood-notebook":
    "عسلامة، نحب نسال على الكراسات الخشب المنقوشة. ابعثلي الموديلات والاسوام.",
  "music-stand":
    "عسلامة، نحب نطلب ستاند صورة واغنية حسب الطلب. شنوة الصورة والاغنية اللي يلزم نبعثهم؟",
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

document.querySelectorAll(".messenger-link").forEach((link) => {
  link.href = `https://m.me/${messengerPageId}`;
  link.target = "_blank";
  link.rel = "noreferrer";
});

const designForm = document.querySelector("#design-form");

designForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(designForm);
  const idea = formData.get("idea")?.toString().trim();
  const name = formData.get("name")?.toString().trim() || "ما فماش";
  const colors = formData.get("colors")?.toString().trim() || "ما فماش";
  const size = formData.get("size")?.toString().trim() || "مازال";
  const referenceFile = formData.get("reference");
  const hasReference =
    referenceFile instanceof File && referenceFile.name
      ? "عندي صورة مثال ونبعثها هنا."
      : "ما عنديش صورة مثال.";

  const message = [
    "عسلامة، نحب نطلب تصميم خاص.",
    `شنوة نحب في التصميم: ${idea}`,
    `الاسم: ${name}`,
    `الالوان: ${colors}`,
    `القياس: ${size}`,
    hasReference,
  ].join("\n");

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noreferrer",
  );
});
