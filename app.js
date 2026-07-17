const deck = window.PRESENTATION.slides;
const slideEl = document.getElementById("slide");
const counterEl = document.getElementById("counter");
const scoreLabel = document.getElementById("scoreLabel");
const progressBar = document.getElementById("progressBar");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const drawer = document.getElementById("drawer");
const scrim = document.getElementById("scrim");
const slideList = document.getElementById("slideList");
const cover = document.getElementById("cover");
let current = 0;
const answered = new Map();

const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
}[char]));

function image(path, alt, className = "") {
  return `<img class="${className}" src="${path}" alt="${escapeHtml(alt || "")}">`;
}

function bullets(items) {
  return `<ul class="bullet-list">${items.map((item, i) => `<li style="--delay:${i}">${item}</li>`).join("")}</ul>`;
}

function header(slide, title = slide.title) {
  return `<span class="kicker">${slide.kicker}</span><h2>${title}</h2>`;
}

function renderStandard(slide) {
  const layout = slide.type === "impact" ? "layout layout--impact" : "layout";
  return `<div class="${layout}">
    <article class="copy">${header(slide)}${slide.intro ? `<p class="intro">${slide.intro}</p>` : ""}${bullets(slide.bullets || [])}
      ${slide.tags ? `<div class="tags">${slide.tags.map(tag => `<span>${tag}</span>`).join("")}</div>` : ""}
    </article>
    <figure class="archive-image">${image(slide.image, slide.imageAlt)}<span class="pin"></span><figcaption>Archivo de análisis · ${String(slide.number).padStart(2,"0")}</figcaption></figure>
  </div>`;
}

function renderTimeline(slide) {
  return `<div class="layout layout--timeline"><article class="copy">${header(slide)}<p class="intro">${slide.intro}</p>
    <div class="timeline">${slide.events.map(([date, text], i) => `<div class="timeline__event" style="--delay:${i}"><strong>${date}</strong><p>${text}</p></div>`).join("")}</div>
  </article><figure class="map-image">${image(slide.image, slide.imageAlt)}<span class="distance-line">Cuba ↔ Florida</span></figure></div>`;
}

function renderProfile(slide) {
  return `<div class="layout layout--profile"><figure class="portrait">${image(slide.image, slide.imageAlt)}<figcaption>Ramón Grau San Martín</figcaption></figure>
    <article class="copy">${header(slide)}${bullets(slide.bullets)}<div class="tags">${slide.tags.map(tag => `<span>${tag}</span>`).join("")}</div></article></div>`;
}

function renderStat(slide) {
  return `<div class="layout"><article class="copy">${header(slide)}${bullets(slide.bullets)}<p class="source-note">${slide.statNote}</p></article>
    <div class="stat-visual"><figure>${image(slide.image, slide.imageAlt)}</figure><div class="stats">${slide.stats.map(([value,label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("")}</div></div></div>`;
}

function renderCharacters(slide) {
  return `<div class="characters-layout"><article class="copy">${header(slide)}${bullets(slide.bullets)}<blockquote>${slide.quote}<cite>Fidel Castro</cite></blockquote></article>
    <div class="character-strip">${slide.images.map((src,i) => `<figure>${image(src, slide.imageLabels[i])}<figcaption>${slide.imageLabels[i]}</figcaption></figure>`).join("")}</div></div>`;
}

function renderRoute(slide) {
  return `<div class="layout layout--route"><article class="copy">${header(slide)}${bullets(slide.bullets)}</article><div class="route-visual"><figure class="map-image">${image(slide.image, slide.imageAlt)}</figure>${image(slide.object,"Yate Granma","route-object")}</div></div>`;
}

function renderVideo(slide) {
  return `<div class="video-layout"><article class="copy">${header(slide)}<p class="intro">${slide.intro}</p><a class="external-link" href="${slide.link}" target="_blank" rel="noopener">Abrir en YouTube ↗</a></article>
    <div class="video-frame"><iframe src="${slide.video}" title="Entrevista a Fidel Castro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div>`;
}

function renderCauses(slide) {
  return `<div class="causes-layout"><article class="copy">${header(slide)}<div class="cause-list">${slide.causes.map(([name,text],i) => `<section style="--delay:${i}"><span>0${i+1}</span><div><h3>${name}</h3><p>${text}</p></div></section>`).join("")}</div></article><figure class="archive-image archive-image--tall">${image(slide.image,slide.imageAlt)}<figcaption>Yanet conecta causas y consecuencias</figcaption></figure></div>`;
}

function renderQuiz(slide) {
  const previous = answered.get(slide.number);
  return `<div class="quiz-layout"><article class="quiz-panel">${header(slide, slide.question)}<p class="quiz-instruction">Selecciona una respuesta.</p>
    <div class="options">${slide.options.map((option,index) => {
      const state = previous == null ? "" : index === slide.correct ? "is-correct" : index === previous ? "is-wrong" : "is-muted";
      return `<button class="option ${state}" data-answer="${index}" type="button"><span>${String.fromCharCode(65+index)}</span>${option}</button>`;
    }).join("")}</div>
    <div class="feedback ${previous == null ? "" : previous === slide.correct ? "feedback--correct" : "feedback--wrong"}" id="feedback" aria-live="polite">${previous == null ? "" : `<strong>${previous === slide.correct ? "¡Correcto!" : "Revisa la respuesta destacada."}</strong> ${slide.explanation}`}</div>
    ${slide.final && previous != null ? `<button class="result-button" id="resultButton" type="button">Ver mi resultado</button>` : ""}
  </article><figure class="quiz-visual">${image(slide.image,"Yanet analiza la pregunta")}</figure></div>`;
}

function renderSlide() {
  const slide = deck[current];
  const renderers = {timeline: renderTimeline, profile: renderProfile, stat: renderStat, characters: renderCharacters, route: renderRoute, video: renderVideo, causes: renderCauses, quiz: renderQuiz};
  slideEl.innerHTML = (renderers[slide.type] || renderStandard)(slide);
  slideEl.dataset.type = slide.type;
  counterEl.textContent = `${slide.number} / ${deck.length}`;
  progressBar.style.width = `${((current + 1) / deck.length) * 100}%`;
  prevButton.disabled = current === 0;
  nextButton.disabled = current === deck.length - 1;
  nextButton.textContent = current === deck.length - 1 ? "Fin del recorrido" : "Siguiente →";
  attachInteractions(slide);
  updateScore();
  renderIndex();
  slideEl.focus({preventScroll:true});
}

function attachInteractions(slide) {
  slideEl.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => {
    if (answered.has(slide.number)) return;
    answered.set(slide.number, Number(button.dataset.answer));
    renderSlide();
  }));
  document.getElementById("resultButton")?.addEventListener("click", showResult);
}

function showResult() {
  const quizSlides = deck.filter(slide => slide.type === "quiz");
  const correct = quizSlides.filter(slide => answered.get(slide.number) === slide.correct).length;
  slideEl.innerHTML = `<div class="result-screen"><span class="kicker">Recorrido completado</span><h2>${correct} de ${quizSlides.length}</h2><p>${correct === quizSlides.length ? "Excelente lectura histórica." : "Cada pregunta abre una nueva perspectiva para revisar."}</p><div class="result-actions"><button class="primary" id="reviewButton" type="button">Revisar respuestas</button><button id="restartButton" type="button">Volver al inicio</button></div></div>`;
  document.getElementById("reviewButton").addEventListener("click", () => { current = 5; renderSlide(); });
  document.getElementById("restartButton").addEventListener("click", () => { current = 0; answered.clear(); renderSlide(); cover.hidden = false; });
}

function updateScore() {
  const quizzes = deck.filter(slide => slide.type === "quiz");
  const correct = quizzes.filter(slide => answered.get(slide.number) === slide.correct).length;
  scoreLabel.textContent = `${correct} / ${quizzes.length} respuestas`;
}

function renderIndex() {
  slideList.innerHTML = deck.map((slide,index) => `<button type="button" data-go="${index}" class="${index === current ? "active" : ""}"><span>${String(slide.number).padStart(2,"0")}</span><div><strong>${slide.type === "quiz" ? "Pregunta interactiva" : slide.title}</strong><small>${slide.kicker}</small></div></button>`).join("");
  slideList.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => {current = Number(button.dataset.go); closeDrawer(); renderSlide();}));
}

function go(delta) {
  const target = current + delta;
  if (target >= 0 && target < deck.length) { current = target; renderSlide(); }
}

function openDrawer() { drawer.hidden = false; scrim.hidden = false; }
function closeDrawer() { drawer.hidden = true; scrim.hidden = true; }

document.getElementById("startButton").addEventListener("click", () => { cover.hidden = true; slideEl.focus(); });
document.getElementById("menuButton").addEventListener("click", openDrawer);
document.getElementById("closeDrawerButton").addEventListener("click", closeDrawer);
scrim.addEventListener("click", closeDrawer);
prevButton.addEventListener("click", () => go(-1));
nextButton.addEventListener("click", () => go(1));
document.getElementById("fullscreenButton").addEventListener("click", () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.());
document.addEventListener("keydown", event => {
  if (!cover.hidden && (event.key === "Enter" || event.key === " ")) { cover.hidden = true; return; }
  if (event.key === "ArrowRight") go(1);
  if (event.key === "ArrowLeft") go(-1);
  if (event.key === "Escape") closeDrawer();
});

renderSlide();
