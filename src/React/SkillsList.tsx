import React, { useState } from "react";

const CategoryIcons = {
  "Full Stack Developer": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3H3V4zm0 5h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9zm5 2v2h2v-2H8zm0 4v2h2v-2H8z" />
    </svg>
  ),
  "Oracle PL/SQL Developer": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Full Stack Developer": [
      "Desarrollo de aplicaciones web completas (frontend y backend)",
      "Implementación de SPAs con React y Node.js",
      "Consumo e integración de APIs REST y GraphQL",
      "Uso de herramientas modernas como Astro, Tailwind CSS y TypeScript",
    ],
    "Oracle PL/SQL Developer": [
      "Diseño y optimización de procedimientos almacenados y funciones",
      "Consultas SQL complejas y manejo avanzado de bases de datos Oracle",
      "Automatización de procesos con scripts PL/SQL",
      "Manejo de triggers, paquetes y cursores en Oracle",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category] || null}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M12 15.5l-6-6 1.4-1.4L12 12.7l4.6-4.6 1.4 1.4z" />
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="pr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;

