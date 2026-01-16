const translations = {
  ca: {
    nav_projects: "Projectes",
    nav_about: "Sobre",
    nav_contact: "Contacte",
    hero_title: "Dissenyant el futur digital.",
    hero_subtitle:
      "Laboratori de dades i solucions creatives per a reptes reals.",
    about_text:
      "Carbomoon és una plataforma de recursos digitals. Transformem dades macroeconòmiques i eines de gestió en actius intel·ligents per a un aprenentatge intens i estratègic.",
    form_title: "Parlem del teu proper projecte",
    form_btn: "ENVIAR PROPOSTA",
  },
  es: {
    nav_projects: "Proyectos",
    nav_about: "Sobre",
    nav_contact: "Contacto",
    hero_title: "Diseñando el futuro digital.",
    hero_subtitle:
      "Laboratorio de datos y soluciones creativas para retos reales.",
    about_text:
      "Carbomoon es una plataforma de recursos digitales. Transformamos datos macroeconómicos y herramientas de gestión en activos inteligentes para un aprendizaje intenso y estratégico.",
    form_title: "Hablemos de tu próximo proyecto",
    form_btn: "ENVIAR PROPUESTA",
  },
  en: {
    nav_projects: "Projects",
    nav_about: "About",
    nav_contact: "Contact",
    hero_title: "Designing the digital future.",
    hero_subtitle: "Data lab and creative solutions for real-world challenges.",
    about_text:
      "Carbomoon is a digital resource platform. We transform macroeconomic data and management tools into intelligent assets for intense and strategic learning.",
    form_title: "Let's talk about your next project",
    form_btn: "SEND PROPOSAL",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language.split("-")[0];
  const lang = translations[userLang] ? userLang : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });
});
