const products = [
  {
    id: "porsche",
    title: "ديكور حيطان بورش",
    category: "ديكور حيطان",
    image: "assets/porsche-wall-art.jpg",
    description: "قطعة 3D لعشاق الكراهب، تصلح للبيت، الكراج، المكتب ولا كهدية.",
    size: "القياس على الطلب",
    extra: "قطعة 3D للكراهب",
  },
  {
    id: "homer",
    title: "ديكور هومر",
    category: "ديكور غرفة",
    image: "assets/15b7a6982c918e02cadbd1cf4aa682f3.jpg",
    description: "قطعة حيطان مرحة للصالون، الغرفة ولا ركن الڨايمينڨ.",
    size: "القياس على الطلب",
    extra: "ديكور حيطان",
  },
  {
    id: "spider",
    title: "ديكور سبايدر مان",
    category: "ديكور ابطال",
    image: "assets/08afd21a0a193c2e6735f2098a77eedb.jpg",
    description: "ستايل قوي لغرفة، setup ولا هدية لعشاق الابطال.",
    size: "القياس على الطلب",
    extra: "ديكور حيطان",
  },
  {
    id: "marble-ref10",
    title: "رولو فو ماربر ref10",
    category: "ديكور حيط",
    image: "assets/faux-marble-roll-ref10.png",
    description: "رولو فو ماربر ابيض بعروق ذهبية يعطي لمسة فخمة للحيوط.",
    size: "3 م / 1.20 م",
    extra: "سمك 3 مم",
  },
  {
    id: "ronaldo",
    title: "ديكور رونالدو CR7",
    category: "ديكور كورة",
    image: "assets/6acb43db627ae6082aec8e4138a1ac6d.jpg",
    description: "كادر حيطان لعشاق الكورة وغرف الشباب والsetup.",
    size: "القياس على الطلب",
    extra: "كادر حيطان",
  },
  {
    id: "messi",
    title: "ديكور ميسي 10",
    category: "ديكور كورة",
    image: "assets/6ab8ac789ad98a24ec0ea3ee5237ac3e.jpg",
    description: "قطعة حيطان رياضية لهدية ولا ديكور غرفة كورة.",
    size: "القياس على الطلب",
    extra: "كادر حيطان",
  },
  {
    id: "led-music",
    title: "لوحة موسيقى LED",
    category: "هدية موسيقى",
    image: "assets/904b76030d381e436d35765d5dcc86df.jpg",
    description: "تصميم اغنية وصورة باضاءة، هدية رومانسية ومميزة.",
    size: "القياس على الطلب",
    extra: "صورة واغنية",
  },
  {
    id: "clear-music",
    title: "لوحة اغنية شفافة",
    category: "هدية شخصية",
    image: "assets/03408cd582cf13e4b314f6d06eb81515.jpg",
    description: "صورة واغنية وكود موسيقى في قطعة شخصية للذكرى.",
    size: "القياس على الطلب",
    extra: "صورة واغنية",
  },
  {
    id: "wood-notebook",
    title: "كراسات خشب منقوشة",
    category: "منتوج خشب",
    image: "assets/abaa7590be805e36a9b885e64c8daa8e.jpg",
    description: "كراسات بواجهات خشب وزخارف للهدية والاستعمال.",
    size: "القياس على الطلب",
    extra: "زخارف مختلفة",
  },
  {
    id: "music-stand",
    title: "ستاند صورة واغنية",
    category: "هدية خشب",
    image: "assets/b017790e20db0289528d4e1d8bafad71.jpg",
    description: "حامل خشب بصورة واغنية، يصلح هدية شخصية.",
    size: "القياس على الطلب",
    extra: "صورة واغنية",
  },
  {
    id: "cartoon-personal",
    title: "كادر cartoon شخصي",
    category: "هدية صورة",
    image: "assets/f85e4818939df0c28b310134d8d8ceb0.jpg",
    description: "نحوّل صورة الحريف لستايل cartoon في كادر هدية.",
    size: "القياس على الطلب",
    extra: "صورة شخصية",
  },
  {
    id: "cartoon-family",
    title: "كادر cartoon عائلي",
    category: "هدية عائلية",
    image: "assets/531b655f1d071f2a284e2f5131784028.jpg",
    description: "صورة والد وطفل ولا عائلة تتحول لهدية في كادر.",
    size: "القياس على الطلب",
    extra: "صورة عائلة",
  },
  {
    id: "cartoon-couple",
    title: "كادر cartoon couple",
    category: "هدية ثنائي",
    image: "assets/cc7502885634783d381fa7a480422d68.jpg",
    description: "كادر صورة مخصص للثنائي بستايل هدية مميز.",
    size: "القياس على الطلب",
    extra: "صورة ثنائي",
  },
  {
    id: "cartoon-heart",
    title: "كادر قلب cartoon",
    category: "هدية ثنائي",
    image: "assets/d06ece7cf223e3b82c8e5ae839c12830.jpg",
    description: "هدية بصورة شخصية في شكل قلب للثنائي والذكريات.",
    size: "القياس على الطلب",
    extra: "صورة زوجين",
  },
  {
    id: "arabic-coasters",
    title: "سوس بلاط عربي",
    category: "ديكور مائدة",
    image: "assets/f94980c9ba2668e680db45ff83b2481f.jpg",
    description: "قطع خشب منقوشة بكلمات عربية للمائدة والديكور.",
    size: "القياس على الطلب",
    extra: "كلمات عربية",
  },
  {
    id: "coffee-coasters",
    title: "سوس بلاط قهوة",
    category: "ديكور قهوة",
    image: "assets/e1616b86ac6f2649e90a553e5259f5f4.jpg",
    description: "مجموعة خشب محفورة برسومات قهوة للمكتب والمطبخ.",
    size: "القياس على الطلب",
    extra: "رسومات قهوة",
  },
  {
    id: "keychain-photo",
    title: "ميدالية صورة شخصية",
    category: "ميدالية",
    image: "assets/7281801deb5a1ae0ba90adff8c750aac.jpg",
    description: "ميدالية خشب منقوشة بصورة فرد ولا عائلة.",
    size: "القياس على الطلب",
    extra: "صورة فرد ولا عائلة",
  },
  {
    id: "keychain-portrait",
    title: "ميدالية بورتريه",
    category: "ميدالية شخصية",
    image: "assets/5e476d8932bc655c157273a8d720e58b.jpg",
    description: "صورة فردية محفورة على ميدالية خشب للذكرى.",
    size: "القياس على الطلب",
    extra: "صورة فردية",
  },
  {
    id: "keychain-medina",
    title: "ميدالية المدينة",
    category: "ميدالية خشب",
    image: "assets/58687ba8ff6fb6a124805f9e819aede6.jpg",
    description: "ميدالية خشب بنقش المسجد النبوي وعبارة المدينة.",
    size: "القياس على الطلب",
    extra: "المدينة المنورة",
  },
];

document.querySelectorAll(".catalog-card, .product-sheet").forEach((card, index) => {
  const product = products[index];
  if (!product) return;

  card.dataset.productId = product.id;
  card.tabIndex = 0;
  card.setAttribute("role", "link");
  card.setAttribute("aria-label", `شوف تفاصيل ${product.title}`);

  const openProduct = () => {
    window.location.href = `product.html?id=${encodeURIComponent(product.id)}`;
  };

  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) return;
    openProduct();
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter") openProduct();
  });
});

const productTitle = document.querySelector("#product-title");

if (productTitle) {
  const id = new URLSearchParams(window.location.search).get("id") || products[0].id;
  const product = products.find((item) => item.id === id) || products[0];

  document.title = `${product.title} | الفخامة`;
  document.querySelector("#product-image").src = product.image;
  document.querySelector("#product-image").alt = product.title;
  document.querySelector("#product-category").textContent = product.category;
  productTitle.textContent = product.title;
  document.querySelector("#product-description").textContent = product.description;
  document.querySelector("#product-size").textContent = product.size;
  document.querySelector("#product-extra").textContent = product.extra;
}
