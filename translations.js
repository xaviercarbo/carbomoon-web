const translations = {
  ca: {
    hero_title: "Dissenyant el futur digital.",
    hero_subtitle:
      "Laboratori de dades i solucions creatives per a reptes reals.",
    btn_explore: "Explora el treball",
    projectes_nav: "Projectes",
    sobre_nav: "Sobre",
  },
  es: {
    hero_title: "Diseñando el futuro digital.",
    hero_subtitle:
      "Laboratorio de datos y soluciones creativas para retos reales.",
    btn_explore: "Explora el trabajo",
    projectes_nav: "Proyectos",
    sobre_nav: "Sobre",
  },
  en: {
    hero_title: "Designing the digital future.",
    hero_subtitle: "Data lab and creative solutions for real-world challenges.",
    btn_explore: "Explore work",
    projectes_nav: "Projects",
    sobre_nav: "About",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language.split("-")[0]; // Detecta 'ca', 'es' o 'en'
  const lang = translations[userLang] ? userLang : "en"; // Si no el tenim, anglès per defecte

  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });
});
