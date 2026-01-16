const translations = {
  ca: {
    nav_projects: "Projectes",
    nav_about: "Sobre",
    nav_contact: "Contacte",
    hero_title: "Dissenyant el futur digital.",
    hero_subtitle:
      "Laboratori de dades i solucions creatives per a reptes reals.",
    btn_explore: "Explora el treball",
    project_alpha_title: "Projecte Alpha: Insights",
    project_alpha_desc:
      "Accés centralitzat a indicadors econòmics i socials de fonts oficials globals.",
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
    btn_explore: "Explora el trabajo",
    project_alpha_title: "Proyecto Alpha: Insights",
    project_alpha_desc:
      "Acceso centralizado a indicadores económicos y sociales de fuentes oficiales globales.",
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
    btn_explore: "Explore work",
    project_alpha_title: "Project Alpha: Insights",
    project_alpha_desc:
      "Centralized access to economic and social indicators from global official sources.",
    about_text:
      "Carbomoon is a digital resource platform. We transform macroeconomic data and management tools into intelligent assets for intense and strategic learning.",
    form_title: "Let's talk about your next project",
    form_btn: "SEND PROPOSAL",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Detectar idioma del navegador (ca, es, en...)
  const userLang = navigator.language.split("-")[0];

  // 2. Triar idioma disponible o defecte (anglès)
  const lang = translations[userLang] ? userLang : "en";

  // 3. Aplicar traduccions a tots els elements amb l'atribut data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      // Si l'element és un input o textarea, canviem el placeholder
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[lang][key];
      } else {
        // Per a la resta, canviem el text intern
        element.innerText = translations[lang][key];
      }
    }
  });
});
