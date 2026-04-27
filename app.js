const slides = [
  {
    number: 1,
    title: "Antecedentes de la revolución",
    icon: "🗺️",
    visualTitle: "Cuba, Estados Unidos y soberanía",
    bullets: [
      "1898: Independencia tardía de España con apoyo de Estados Unidos durante la Guerra Hispanoamericana.",
      "1901: Enmienda Platt: derecho de Estados Unidos de intervenir en los asuntos cubanos.",
      "1925–1933: dictadura de Machado y proyecto de Regeneración Nacional.",
      "1933: golpe de Estado liderado por Fulgencio Batista y nombramiento de Ramón Grau San Martín."
    ]
  },
  {
    number: 2,
    title: "Ramón Grau: presidente provisional",
    icon: "⚖️",
    visualTitle: "Reformas y presión política",
    bullets: [
      "1933: abolición de la Enmienda Platt, voto femenino, salario mínimo y trabajo para los nacidos en Cuba.",
      "1934: reformas exigidas por el Partido Socialista y renuncia presidencial obligada por Fulgencio Batista."
    ],
    badges: ["Voto femenino", "Salario mínimo", "Soberanía"]
  },
  {
    number: 3,
    title: "Elecciones",
    icon: "🗳️",
    visualTitle: "Presidencias bajo influencia militar",
    bullets: [
      "1933–1940: alianza de Batista con el Partido Socialista y los sindicatos.",
      "Elección de presidentes marioneta: Carlos Hevia, Manuel Márquez Sterling, Carlos Mendieta, José A. Barnet y Federico Laredo Brú.",
      "1934: Constitución progresista: jornada de 8 horas, educación y justicia social."
    ]
  },
  {
    number: 4,
    title: "Azúcar y política",
    icon: "🍬",
    visualTitle: "Economía dependiente",
    bullets: [
      "1940–1944: Batista fue elegido presidente; fortaleció la educación y las relaciones con Estados Unidos, e incrementó la exportación de azúcar.",
      "1944–1948: Grau fue elegido presidente por el Partido Revolucionario.",
      "Estados Unidos controlaba el 40% de la producción de azúcar y el 50% del transporte ferroviario.",
      "El crimen organizado estadounidense y la corrupción prosperaron en la isla."
    ]
  },
  {
    number: 5,
    title: "Dictadura de Batista",
    icon: "🚨",
    visualTitle: "Golpe de Estado de 1952",
    bullets: [
      "1952: Batista retornó a la isla como candidato presidencial.",
      "Después de las elecciones, dio un golpe de Estado y se nombró a sí mismo presidente provisional.",
      "La policía y el ejército suprimieron toda la oposición."
    ]
  },
  {
    number: 6,
    quiz: true,
    question: "En la primera mitad del siglo XX Estados Unidos intervino en Cuba a través de:",
    options: [
      "El control absoluto de la producción azucarera.",
      "El crimen organizado que promovió el tráfico de drogas.",
      "La Enmienda Platt.",
      "La imposición de Fulgencio Batista como presidente provisional."
    ],
    correct: 2
  },
  {
    number: 7,
    title: "Fidel Castro y los revolucionarios",
    icon: "🔥",
    visualTitle: "Nacionalismo y oposición armada",
    bullets: [
      "Movimiento liderado por profesionales, intelectuales de clase media, ortodoxos radicales y personajes de la élite.",
      "Inspirados por el nacionalismo de José Martí, el heroísmo de Chibás y los revolucionarios independentistas."
    ],
    quote: "“Si Batista llegó al poder por la fuerza, debemos sacarlo por la fuerza”. — Fidel Castro"
  },
  {
    number: 8,
    quiz: true,
    question: "Los líderes revolucionarios cubanos fueron:",
    options: [
      "Infiltrados soviéticos que llegaron a la isla en la década de los cincuenta.",
      "Guerrilleros de toda Latinoamérica que llegaron a la isla en la década de los cuarenta.",
      "Profesionales, intelectuales, sectores de la clase media y nacionalistas.",
      "Militares cubanos inconformes."
    ],
    correct: 2
  },
  {
    number: 9,
    title: "Derrota inicial",
    icon: "🏛️",
    visualTitle: "Cuartel de Moncada",
    bullets: [
      "1953: ataque revolucionario a la armada de Santiago, Cuartel de Moncada: 61 muertos y decenas de detenidos.",
      "Fidel Castro fue condenado a 15 años de prisión.",
      "1955: amnistía para Castro y exilio en México.",
      "Creación del Movimiento 26 de Julio y alianza con Ernesto “Che” Guevara."
    ]
  },
  {
    number: 10,
    quiz: true,
    question: "¿Cuál fue la importancia del ataque al cuartel de Moncada en 1953?",
    options: [
      "Fue un gran triunfo revolucionario.",
      "Los revolucionarios consiguieron armas y municiones.",
      "Los revolucionarios obtuvieron visibilidad pública.",
      "Los revolucionarios tomaron como rehén a Batista."
    ],
    correct: 2
  },
  {
    number: 11,
    title: "La victoria revolucionaria",
    icon: "⛰️",
    visualTitle: "Granma y Sierra Maestra",
    bullets: [
      "1956: 82 rebeldes viajaron desde México en el Granma, fueron descubiertos por el régimen de Batista y huyeron a la Sierra Maestra.",
      "1957: entrevista en la Sierra Maestra e intento de tomar el Palacio Presidencial.",
      "Sangrienta persecución contra los revolucionarios.",
      "Castro respondió con el manifiesto de 1957: elecciones, reforma agraria y alfabetización masiva."
    ]
  },
  {
    number: 12,
    title: "El triunfo de la revolución",
    icon: "🎆",
    visualTitle: "Enero de 1959",
    bullets: [
      "1958: apoyo comunista y bloqueo de La Habana.",
      "Estados Unidos retiró su apoyo a Batista, quien convocó a elecciones que fueron boicoteadas. Control revolucionario de Santiago.",
      "1959: el 1 de enero Batista renunció y huyó a República Dominicana con 424 millones de dólares de la reserva nacional.",
      "Dos días después, el Movimiento 26 de Julio tomó el control del país."
    ]
  },
  {
    number: 13,
    title: "Entrevista a Fidel Castro",
    icon: "🎥",
    visualTitle: "Triunfo de la Revolución",
    bullets: [
      "Explora con curiosidad esta entrevista a Fidel Castro en el momento del triunfo de la revolución."
    ],
    video: "https://www.youtube.com/embed/lo4hOus5TKc",
    link: "https://www.youtube.com/watch?v=lo4hOus5TKc"
  },
  {
    number: 14,
    title: "Pausa de conexión",
    icon: "🧭",
    visualTitle: "Del antecedente a la causa",
    bullets: [
      "Observa cómo se conectan intervención externa, dependencia económica, autoritarismo y movilización social.",
      "La siguiente sección sintetiza las causas económicas, sociales y políticas de la Revolución cubana."
    ],
    badges: ["Intervención", "Dependencia", "Autoritarismo", "Movilización"]
  },
  {
    number: 15,
    title: "Causas de la Revolución cubana",
    icon: "📌",
    visualTitle: "Tres dimensiones",
    bullets: [
      "Económicas: dependencia del monocultivo y del mercado externo, desempleo, subempleo, desigualdad extrema y poca inversión industrial.",
      "Sociales: demandas insatisfechas de la población urbana, clase media, industriales y sindicatos; inequidad, crecimiento urbano y analfabetismo.",
      "Políticas: vínculos de Batista con la corrupción y las mafias."
    ],
    badges: ["Económicas", "Sociales", "Políticas"]
  },
  {
    number: 16,
    quiz: true,
    question: "Son causas de la Revolución cubana:",
    options: [
      "La intervención chino-soviética en la región.",
      "Las demandas insatisfechas del pueblo cubano.",
      "La intervención armada de los Estados Unidos.",
      "La invasión de guerrillas centroamericanas."
    ],
    correct: 1
  }
];

let current = 0;
const slideEl = document.getElementById("slide");
const counterEl = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const menuBtn = document.getElementById("menuBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const drawer = document.getElementById("drawer");
const closeDrawerBtn = document.getElementById("closeDrawerBtn");
const slideList = document.getElementById("slideList");

function renderSlide() {
  const slide = slides[current];
  counterEl.textContent = `${slide.number} / ${slides.length}`;
  progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
  slideEl.className = `slide ${slide.quiz ? "slide--quiz" : ""}`;

  if (slide.quiz) {
    slideEl.innerHTML = renderQuiz(slide);
    attachQuizHandlers(slide);
  } else if (slide.video) {
    slideEl.innerHTML = renderVideoSlide(slide);
  } else {
    slideEl.innerHTML = renderContentSlide(slide);
  }

  renderSlideList();
  slideEl.focus({ preventScroll: true });
}

function renderContentSlide(slide) {
  return `
    <article>
      <span class="kicker">Diapo ${slide.number}</span>
      <h2>${slide.title}</h2>
      <ul class="content-list">${slide.bullets.map(item => `<li>${item}</li>`).join("")}</ul>
      ${slide.quote ? `<div class="quote">${slide.quote}</div>` : ""}
      ${slide.badges ? `<div class="badges">${slide.badges.map(b => `<span class="badge">${b}</span>`).join("")}</div>` : ""}
    </article>
    <aside class="visual" aria-label="Idea gráfica">
      <div>
        <div class="visual__icon">${slide.icon}</div>
        <div class="visual__title">${slide.visualTitle}</div>
        <p class="visual__caption">Sustituye este bloque por una imagen en la carpeta assets si quieres usar material propio.</p>
      </div>
    </aside>
  `;
}

function renderVideoSlide(slide) {
  return `
    <article>
      <span class="kicker">Diapo ${slide.number}</span>
      <h2>${slide.title}</h2>
      <ul class="content-list">${slide.bullets.map(item => `<li>${item}</li>`).join("")}</ul>
      <p><a href="${slide.link}" target="_blank" rel="noopener">Abrir entrevista en YouTube ↗</a></p>
    </article>
    <aside class="video-card" aria-label="Video de YouTube">
      <iframe src="${slide.video}" title="Entrevista a Fidel Castro al triunfo de la Revolución" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </aside>
  `;
}

function renderQuiz(slide) {
  return `
    <article>
      <span class="kicker">Diapo ${slide.number} · pregunta interactiva</span>
      <h2 class="quiz-question">${slide.question}</h2>
      <div class="options">
        ${slide.options.map((option, index) => `<button class="option" data-index="${index}" type="button">${index + 1}. ${option}</button>`).join("")}
      </div>
      <div class="feedback" id="feedback" aria-live="polite"></div>
    </article>
  `;
}

function attachQuizHandlers(slide) {
  const optionButtons = [...slideEl.querySelectorAll(".option")];
  const feedback = document.getElementById("feedback");
  optionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selected = Number(button.dataset.index);
      optionButtons.forEach((btn, index) => {
        btn.classList.toggle("is-correct", index === slide.correct);
        btn.classList.toggle("is-wrong", selected === index && selected !== slide.correct);
      });
      feedback.textContent = selected === slide.correct ? "Correcto. La respuesta clave queda resaltada en amarillo." : "Revisa la opción resaltada en amarillo.";
    });
  });
}

function renderSlideList() {
  slideList.innerHTML = slides.map((slide, index) => {
    const label = slide.quiz ? `Pregunta ${slide.number}` : `${slide.number}. ${slide.title}`;
    return `<button type="button" class="${index === current ? "active" : ""}" data-go="${index}">${label}</button>`;
  }).join("");

  slideList.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      current = Number(button.dataset.go);
      drawer.hidden = true;
      renderSlide();
    });
  });
}

function go(delta) {
  const next = current + delta;
  if (next >= 0 && next < slides.length) {
    current = next;
    renderSlide();
  }
}

prevBtn.addEventListener("click", () => go(-1));
nextBtn.addEventListener("click", () => go(1));
menuBtn.addEventListener("click", () => drawer.hidden = false);
closeDrawerBtn.addEventListener("click", () => drawer.hidden = true);
fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
  else document.exitFullscreen?.();
});

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight" || event.key === " ") go(1);
  if (event.key === "ArrowLeft") go(-1);
  if (event.key === "Escape") drawer.hidden = true;
});

renderSlide();
