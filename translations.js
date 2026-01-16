const translations = {
  ca: {
    // Navegació
    nav_projects: "Projectes",
    nav_about: "Sobre",
    nav_contact: "Contacte",

    // Hero Section
    hero_title: "Dissenyant el futur digital.",
    hero_subtitle:
      "Laboratori de dades i solucions creatives per a reptes reals.",
    btn_explore: "Explora els projectes",

    // Projectes Home
    project_alpha_title: "Projecte Alpha: Insights",
    project_alpha_desc:
      "Accés centralitzat a indicadors econòmics i socials de fonts oficials globals.",

    // Secció Sobre
    about_text:
      "Carbomoon és una plataforma de recursos digitals. Transformem dades macroeconòmiques i eines de gestió en actius intel·ligents per a un aprenentatge intens i estratègic.",

    // Formulari
    form_title: "Parlem del teu proper projecte",
    form_name: "NOM",
    form_email: "EMAIL",
    form_msg: "COM ET PUC AJUDAR?",
    form_btn: "ENVIAR PROPOSTA",

    // Pàgina Dades Alpha
    alpha_title: "ALPHA INSIGHTS",
    alpha_subtitle:
      "Accés centralitzat a indicadors oficials. Una eina per a l'anàlisi estratègic i la presa de decisions basada en dades.",
    data_pib_title: "PIB Global",
    data_pib_desc:
      "Creixement anual del producte interior brut a preus de mercat.",
    data_ipc_title: "IPC (Inflació)",
    data_ipc_desc: "Variació de l'Índex de Preus de Consum harmonitzat.",
    data_rates_title: "Tipus d'Interès",
    data_rates_desc:
      "Taxa de referència de les principals entitats monetàries.",
    btn_back_home: "TORNAR A LA HOME",
    footer_copy: "© 2026 Carbomoon. Dades d'utilitat pública.",
    // Mail Contacte
    form_success: "PROPUESTA ENVIADA, GRÀCIES!",
  },
  es: {
    // Navegación
    nav_projects: "Proyectos",
    nav_about: "Sobre",
    nav_contact: "Contacto",

    // Hero Section
    hero_title: "Diseñando el futuro digital.",
    hero_subtitle:
      "Laboratorio de datos y soluciones creativas para retos reales.",
    btn_explore: "Explora los proyectos",

    // Proyectos Home
    project_alpha_title: "Proyecto Alpha: Insights",
    project_alpha_desc:
      "Acceso centralizado a indicadores económicos y sociales de fuentes oficiales globales.",

    // Sección Sobre
    about_text:
      "Carbomoon es una plataforma de recursos digitales. Transformamos datos macroeconómicos y herramientas de gestión en activos inteligentes para un aprendizaje intenso y estratégico.",

    // Formulario
    form_title: "Hablemos de tu próximo proyecto",
    form_name: "NOMBRE",
    form_email: "EMAIL",
    form_msg: "¿CÓMO PUEDO AYUDARTE?",
    form_btn: "ENVIAR PROPUESTA",

    // Página Datos Alpha
    alpha_title: "ALPHA INSIGHTS",
    alpha_subtitle:
      "Acceso centralizado a indicadores oficiales. Una herramienta para el análisis estratégico y la toma de decisiones basada en datos.",
    data_pib_title: "PIB Global",
    data_pib_desc:
      "Crecimiento anual del producto interior bruto a precios de mercado.",
    data_ipc_title: "IPC (Inflación)",
    data_ipc_desc: "Variación del Índice de Precios de Consumo armonizado.",
    data_rates_title: "Tipos de Interés",
    data_rates_desc:
      "Tasa de referencia de las principales entidades monetarias.",
    btn_back_home: "VOLVER A LA HOME",
    footer_copy: "© 2026 Carbomoon. Datos de utilidad pública.",
    // Mail Contacto
    form_success: "PROPUESTA ENVIADA, ¡GRACIAS!",
  },
  en: {
    // Navigation
    nav_projects: "Projects",
    nav_about: "About",
    nav_contact: "Contact",

    // Hero Section
    hero_title: "Designing the digital future.",
    hero_subtitle: "Data lab and creative solutions for real-world challenges.",
    btn_explore: "Explore the projects",

    // Projects Home
    project_alpha_title: "Project Alpha: Insights",
    project_alpha_desc:
      "Centralized access to economic and social indicators from global official sources.",

    // About Section
    about_text:
      "Carbomoon is a digital resource platform. We transform macroeconomic data and management tools into intelligent assets for intense and strategic learning.",

    // Form
    form_title: "Let's talk about your next project",
    form_name: "NAME",
    form_email: "EMAIL",
    form_msg: "HOW CAN I HELP YOU?",
    form_btn: "SEND PROPOSAL",

    // Data Alpha Page
    alpha_title: "ALPHA INSIGHTS",
    alpha_subtitle:
      "Centralized access to official indicators. A tool for strategic analysis and data-driven decision making.",
    data_pib_title: "Global GDP",
    data_pib_desc: "Annual growth of gross domestic product at market prices.",
    data_ipc_title: "CPI (Inflation)",
    data_ipc_desc: "Variation of the harmonized Consumer Price Index.",
    data_rates_title: "Interest Rates",
    data_rates_desc: "Reference rate of the main monetary entities.",
    btn_back_home: "BACK TO HOME",
    footer_copy: "© 2026 Carbomoon. Public utility data.",
    // Contact mail
    form_success: "PROPOSAL SENT, THANK YOU!",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language.split("-")[0];
  const lang = translations[userLang] ? userLang : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[lang][key];
      } else {
        element.innerText = translations[lang][key];
      }
    }
  });
});
