/*
  ARCHIVO EDITABLE
  Cambia aquí títulos, textos, imágenes, preguntas y respuestas.
  Las rutas de imágenes parten de la carpeta assets/.
*/
window.PRESENTATION = {
  title: "Una isla a 145 km de Florida",
  slides: [
    {
      number: 1,
      type: "timeline",
      kicker: "Antecedentes · 1898–1933",
      title: "Antecedentes de la revolución",
      intro: "La soberanía cubana nació condicionada por la influencia de Estados Unidos y una larga inestabilidad política.",
      image: "assets/map-cuba-florida.webp",
      imageAlt: "Mapa que muestra la cercanía entre Cuba y Florida",
      events: [
        ["1898", "Independencia tardía de España con apoyo de Estados Unidos durante la Guerra Hispanoamericana."],
        ["1901", "Enmienda Platt: derecho de Estados Unidos de intervenir en los asuntos cubanos."],
        ["1925–1933", "Dictadura de Machado y proyecto de Regeneración Nacional."],
        ["1933", "Golpe de Estado liderado por Fulgencio Batista y nombramiento de Ramón Grau San Martín."]
      ]
    },
    {
      number: 2,
      type: "profile",
      kicker: "Reformas y presión política",
      title: "Ramón Grau: presidente provisional",
      image: "assets/ramon-grau.webp",
      imageAlt: "Retrato editorial de Ramón Grau",
      bullets: [
        "1933: abolición de la Enmienda Platt, voto femenino, salario mínimo y trabajo para los nacidos en Cuba.",
        "1934: reformas exigidas por el Partido Socialista y renuncia presidencial obligada por Fulgencio Batista."
      ],
      tags: ["Voto femenino", "Salario mínimo", "Soberanía"]
    },
    {
      number: 3,
      type: "document",
      kicker: "Elecciones · 1933–1940",
      title: "El poder detrás de las urnas",
      image: "assets/constitution.webp",
      imageAlt: "Constitución y documentos históricos cubanos",
      bullets: [
        "Alianza de Batista con el Partido Socialista y los sindicatos.",
        "Elección de presidentes marioneta: Carlos Hevia, Manuel Márquez Sterling, Carlos Mendieta, José A. Barnet y Federico Laredo Brú.",
        "1934: Constitución progresista: jornada de 8 horas, educación y justicia social."
      ]
    },
    {
      number: 4,
      type: "stat",
      kicker: "Economía y dependencia",
      title: "Azúcar y política",
      image: "assets/sugar-cane.webp",
      imageAlt: "Caña de azúcar y archivo documental",
      bullets: [
        "1940–1944: Batista fue elegido presidente; fortaleció la educación y las relaciones con Estados Unidos e incrementó la exportación de azúcar.",
        "1944–1948: Grau fue elegido presidente por el Partido Revolucionario.",
        "El crimen organizado estadounidense y la corrupción prosperaron en la isla."
      ],
      stats: [["40%", "de la producción de azúcar"], ["50%", "del transporte ferroviario"]],
      statNote: "Sectores controlados por capital estadounidense"
    },
    {
      number: 5,
      type: "impact",
      kicker: "Golpe de Estado · 1952",
      title: "Dictadura de Batista",
      image: "assets/havana.webp",
      imageAlt: "La Habana en la década de 1950",
      bullets: [
        "Batista retornó a la isla como candidato presidencial.",
        "Después de las elecciones, dio un golpe de Estado y se nombró a sí mismo presidente provisional.",
        "La policía y el ejército suprimieron toda la oposición."
      ]
    },
    {
      number: 6,
      type: "quiz",
      kicker: "Pausa de análisis · 01",
      question: "En la primera mitad del siglo XX, Estados Unidos intervino en Cuba a través de…",
      image: "assets/yanet-question.webp",
      options: [
        "El control absoluto de la producción azucarera.",
        "El crimen organizado que promovió el tráfico de drogas.",
        "La Enmienda Platt.",
        "La imposición de Fulgencio Batista como presidente provisional."
      ],
      correct: 2,
      explanation: "La Enmienda Platt otorgaba a Estados Unidos el derecho de intervenir en los asuntos cubanos."
    },
    {
      number: 7,
      type: "characters",
      kicker: "Oposición armada",
      title: "Fidel Castro y los revolucionarios",
      images: ["assets/fidel.webp", "assets/che.webp", "assets/jose-marti.webp"],
      imageLabels: ["Fidel Castro", "Ernesto «Che» Guevara", "José Martí · inspiración"],
      bullets: [
        "Movimiento liderado por profesionales, intelectuales de clase media, ortodoxos radicales y personajes de la élite.",
        "Inspirados por el nacionalismo de José Martí, el heroísmo de Chibás y los revolucionarios independentistas."
      ],
      quote: "«Si Batista llegó al poder por la fuerza, debemos sacarlo por la fuerza»."
    },
    {
      number: 8,
      type: "quiz",
      kicker: "Pausa de análisis · 02",
      question: "¿Quiénes lideraron el movimiento revolucionario cubano?",
      image: "assets/yanet-question.webp",
      options: [
        "Infiltrados soviéticos que llegaron a la isla en la década de los cincuenta.",
        "Guerrilleros de toda Latinoamérica que llegaron a la isla en la década de los cuarenta.",
        "Profesionales, intelectuales, sectores de la clase media y nacionalistas.",
        "Militares cubanos inconformes."
      ],
      correct: 2,
      explanation: "El movimiento reunió a profesionales, intelectuales, sectores de la clase media y nacionalistas cubanos."
    },
    {
      number: 9,
      type: "document",
      kicker: "Derrota inicial · 1953–1955",
      title: "Del Moncada al Movimiento 26 de Julio",
      image: "assets/moncada.webp",
      imageAlt: "Cuartel de Moncada",
      bullets: [
        "1953: ataque al Cuartel de Moncada en Santiago: 61 muertos y decenas de detenidos.",
        "Fidel Castro fue condenado a 15 años de prisión.",
        "1955: amnistía para Castro y exilio en México.",
        "Creación del Movimiento 26 de Julio y alianza con Ernesto «Che» Guevara."
      ]
    },
    {
      number: 10,
      type: "quiz",
      kicker: "Pausa de análisis · 03",
      question: "¿Cuál fue la importancia del ataque al Cuartel de Moncada en 1953?",
      image: "assets/yanet-question.webp",
      options: [
        "Fue un gran triunfo revolucionario.",
        "Los revolucionarios consiguieron armas y municiones.",
        "Los revolucionarios obtuvieron visibilidad pública.",
        "Los revolucionarios tomaron como rehén a Batista."
      ],
      correct: 2,
      explanation: "Aunque fue una derrota militar, el ataque dio visibilidad pública al movimiento revolucionario."
    },
    {
      number: 11,
      type: "route",
      kicker: "De México a Sierra Maestra",
      title: "La ofensiva revolucionaria",
      image: "assets/map-sierra-maestra.webp",
      imageAlt: "Ruta del Granma y Sierra Maestra",
      object: "assets/granma.webp",
      bullets: [
        "1956: 82 rebeldes viajaron desde México en el Granma. Descubiertos por el régimen, huyeron a Sierra Maestra.",
        "1957: entrevista en Sierra Maestra e intento de tomar el Palacio Presidencial.",
        "Sangrienta persecución contra los revolucionarios.",
        "Castro respondió con el manifiesto de 1957: elecciones, reforma agraria y alfabetización masiva."
      ]
    },
    {
      number: 12,
      type: "impact",
      kicker: "El triunfo · 1958–1959",
      title: "La revolución toma el control",
      image: "assets/sierra-maestra.webp",
      imageAlt: "Paisaje de Sierra Maestra",
      bullets: [
        "1958: apoyo comunista y bloqueo de La Habana.",
        "Estados Unidos retiró su apoyo a Batista; las elecciones fueron boicoteadas y los revolucionarios controlaron Santiago.",
        "1 de enero de 1959: Batista renunció y huyó a República Dominicana con 424 millones de dólares de la reserva nacional.",
        "Dos días después, el Movimiento 26 de Julio tomó el control del país."
      ]
    },
    {
      number: 13,
      type: "video",
      kicker: "Fuente audiovisual",
      title: "El triunfo, contado por Fidel Castro",
      intro: "Explora con curiosidad esta entrevista realizada en el momento del triunfo de la revolución.",
      video: "https://www.youtube.com/embed/lo4hOus5TKc?rel=0",
      link: "https://www.youtube.com/watch?v=lo4hOus5TKc"
    },
    {
      number: 14,
      type: "causes",
      kicker: "Síntesis histórica",
      title: "Causas de la Revolución cubana",
      image: "assets/yanet-desk.webp",
      imageAlt: "Yanet organiza documentos y causas históricas",
      causes: [
        ["Económicas", "Dependencia del monocultivo y del mercado externo, desempleo, subempleo, desigualdad extrema y poca inversión industrial."],
        ["Sociales", "Demandas insatisfechas de la población urbana, clase media, industriales y sindicatos; inequidad, crecimiento urbano y analfabetismo."],
        ["Políticas", "Vínculos de Batista con la corrupción y las mafias."]
      ]
    },
    {
      number: 15,
      type: "quiz",
      kicker: "Comprobación final",
      question: "Son causas de la Revolución cubana…",
      image: "assets/yanet-collab.webp",
      options: [
        "La intervención chino-soviética en la región.",
        "Las demandas insatisfechas del pueblo cubano.",
        "La intervención armada de Estados Unidos.",
        "La invasión de guerrillas centroamericanas."
      ],
      correct: 1,
      explanation: "Las demandas sociales, económicas y políticas insatisfechas fueron un factor central del proceso revolucionario.",
      final: true
    }
  ]
};
