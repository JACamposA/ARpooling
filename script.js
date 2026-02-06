/* ============================================
   ARPooling - Lógica principal
   MVP: Matching de carpools escolares, deportes y eventos
   ============================================ */

// =============================================
// 1. CONSTANTES Y DATOS
// =============================================

// Colegios hardcodeados
const COLEGIOS = {
  los_molinos: { nombre: "Colegio Los Molinos", label: "Los Molinos (varones)" },
  el_buen_ayre: { nombre: "Colegio El Buen Ayre", label: "El Buen Ayre (mujeres)" }
};

// Mapeo de grados
const GRADOS_LABEL = {
  0: "Inicial", 1: "1ro", 2: "2do", 3: "3ro", 4: "4to", 5: "5to", 6: "6to"
};

// Mapeo de días
const DIAS_LABEL = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V" };

const TIPO_VIAJE_LABEL = {
  ida: "Ida", vuelta: "Vuelta", ida_y_vuelta: "Ida y Vuelta"
};

const DEPORTES_LABEL = {
  futbol: "Fútbol", hockey: "Hockey", tenis: "Tenis",
  rugby: "Rugby", natacion: "Natación", otro: "Otro"
};

// =============================================
// 1a. DATOS ESCOLAR - 15 familias
// =============================================

const FAMILIAS = [
  {
    id: 1, nombre: "Familia González",
    lat: -34.5050, lng: -58.4950,
    colegios: ["los_molinos"],
    tipoViaje: "ida_y_vuelta", horarioEntrada: "7:30 AM", horarioSalida: "4:00 PM",
    grados: [1, 3], dias: [1, 2, 3, 4, 5],
    lugaresAuto: 3, cantidadHijos: 2,
    whatsapp: "+54 11 5555-0101"
  },
  {
    id: 2, nombre: "Familia Rodríguez",
    lat: -34.5065, lng: -58.4965,
    colegios: ["el_buen_ayre"],
    tipoViaje: "ida", horarioEntrada: "7:45 AM", horarioSalida: null,
    grados: [2, 4], dias: [1, 2, 3, 4, 5],
    lugaresAuto: 2, cantidadHijos: 2,
    whatsapp: "+54 11 5555-0202"
  },
  {
    id: 3, nombre: "Familia Martínez",
    lat: -34.5030, lng: -58.4980,
    colegios: ["los_molinos", "el_buen_ayre"],
    tipoViaje: "ida_y_vuelta", horarioEntrada: "8:00 AM", horarioSalida: "4:15 PM",
    grados: [5, 6], dias: [1, 2, 4, 5],
    lugaresAuto: 4, cantidadHijos: 3,
    whatsapp: "+54 11 5555-0303"
  },
  {
    id: 4, nombre: "Familia López",
    lat: -34.5080, lng: -58.4940,
    colegios: ["los_molinos"],
    tipoViaje: "ida", horarioEntrada: "7:30 AM", horarioSalida: null,
    grados: [1], dias: [1, 2, 3, 4, 5],
    lugaresAuto: 2, cantidadHijos: 1,
    whatsapp: "+54 11 5555-0404"
  },
  {
    id: 5, nombre: "Familia Fernández",
    lat: -34.5055, lng: -58.4972,
    colegios: ["el_buen_ayre"],
    tipoViaje: "vuelta", horarioEntrada: null, horarioSalida: "4:00 PM",
    grados: [3, 4], dias: [1, 3, 5],
    lugaresAuto: 3, cantidadHijos: 2,
    whatsapp: "+54 11 5555-0505"
  },
  {
    id: 6, nombre: "Familia García",
    lat: -34.5042, lng: -58.4958,
    colegios: ["los_molinos", "el_buen_ayre"],
    tipoViaje: "ida_y_vuelta", horarioEntrada: "8:15 AM", horarioSalida: "4:30 PM",
    grados: [2], dias: [1, 2, 3, 4],
    lugaresAuto: 5, cantidadHijos: 2,
    whatsapp: "+54 11 5555-0606"
  },
  {
    id: 7, nombre: "Familia Pérez",
    lat: -34.5045, lng: -58.4935,
    colegios: ["los_molinos"],
    tipoViaje: "ida_y_vuelta", horarioEntrada: "7:30 AM", horarioSalida: "3:45 PM",
    grados: [2, 5], dias: [1, 2, 3, 4, 5],
    lugaresAuto: 3, cantidadHijos: 2,
    whatsapp: "+54 11 5555-0707"
  },
  {
    id: 8, nombre: "Familia Sánchez",
    lat: -34.5060, lng: -58.4968,
    colegios: ["el_buen_ayre"],
    tipoViaje: "ida", horarioEntrada: "7:45 AM", horarioSalida: null,
    grados: [1, 4], dias: [1, 2, 3, 5],
    lugaresAuto: 2, cantidadHijos: 2,
    whatsapp: "+54 11 5555-0808"
  },
  {
    id: 9, nombre: "Familia Díaz",
    lat: -34.5038, lng: -58.4990,
    colegios: ["los_molinos"],
    tipoViaje: "vuelta", horarioEntrada: null, horarioSalida: "4:00 PM",
    grados: [3], dias: [2, 3, 4, 5],
    lugaresAuto: 4, cantidadHijos: 1,
    whatsapp: "+54 11 5555-0909"
  },
  {
    id: 10, nombre: "Familia Torres",
    lat: -34.5035, lng: -58.4955,
    colegios: ["los_molinos", "el_buen_ayre"],
    tipoViaje: "ida_y_vuelta", horarioEntrada: "7:30 AM", horarioSalida: "4:00 PM",
    grados: [4, 6], dias: [1, 2, 3, 4, 5],
    lugaresAuto: 3, cantidadHijos: 2,
    whatsapp: "+54 11 5555-1010"
  },
  {
    id: 11, nombre: "Familia Romero",
    lat: -34.5075, lng: -58.4945,
    colegios: ["el_buen_ayre"],
    tipoViaje: "vuelta", horarioEntrada: null, horarioSalida: "4:15 PM",
    grados: [0, 1], dias: [1, 3, 4, 5],
    lugaresAuto: 2, cantidadHijos: 2,
    whatsapp: "+54 11 5555-1111"
  },
  {
    id: 12, nombre: "Familia Moreno",
    lat: -34.5070, lng: -58.4925,
    colegios: ["los_molinos"],
    tipoViaje: "ida_y_vuelta", horarioEntrada: "7:45 AM", horarioSalida: "4:00 PM",
    grados: [5], dias: [1, 2, 3, 4, 5],
    lugaresAuto: 3, cantidadHijos: 1,
    whatsapp: "+54 11 5555-1212"
  },
  {
    id: 13, nombre: "Familia Acosta",
    lat: -34.5048, lng: -58.4978,
    colegios: ["el_buen_ayre"],
    tipoViaje: "ida", horarioEntrada: "7:30 AM", horarioSalida: null,
    grados: [2, 3], dias: [1, 2, 4],
    lugaresAuto: 4, cantidadHijos: 2,
    whatsapp: "+54 11 5555-1313"
  },
  {
    id: 14, nombre: "Familia Molina",
    lat: -34.5042, lng: -58.4988,
    colegios: ["los_molinos", "el_buen_ayre"],
    tipoViaje: "vuelta", horarioEntrada: null, horarioSalida: "3:45 PM",
    grados: [0, 3, 6], dias: [1, 2, 3, 4, 5],
    lugaresAuto: 5, cantidadHijos: 3,
    whatsapp: "+54 11 5555-1414"
  },
  {
    id: 15, nombre: "Familia Herrera",
    lat: -34.5058, lng: -58.4962,
    colegios: ["los_molinos"],
    tipoViaje: "ida_y_vuelta", horarioEntrada: "8:15 AM", horarioSalida: "4:30 PM",
    grados: [1, 5], dias: [2, 3, 4, 5],
    lugaresAuto: 2, cantidadHijos: 2,
    whatsapp: "+54 11 5555-1515"
  }
];

// =============================================
// 1b. DATOS DEPORTES - 10 familias
// =============================================

const FAMILIAS_DEPORTES = [
  { id: 1, nombre: "Familia González", lat: -34.5050, lng: -58.4950, deportes: ["futbol"], dia: "Sábado", horario: "10:00 AM", lugaresAuto: 3, cantidadHijos: 2, whatsapp: "+54 11 5555-0101" },
  { id: 2, nombre: "Familia Rodríguez", lat: -34.5065, lng: -58.4965, deportes: ["hockey", "tenis"], dia: "Sábado", horario: "9:00 AM", lugaresAuto: 2, cantidadHijos: 1, whatsapp: "+54 11 5555-0202" },
  { id: 3, nombre: "Familia Martínez", lat: -34.5030, lng: -58.4980, deportes: ["futbol", "rugby"], dia: "Sábado", horario: "10:00 AM", lugaresAuto: 4, cantidadHijos: 2, whatsapp: "+54 11 5555-0303" },
  { id: 4, nombre: "Familia López", lat: -34.5080, lng: -58.4940, deportes: ["natacion"], dia: "Sábado", horario: "11:00 AM", lugaresAuto: 2, cantidadHijos: 1, whatsapp: "+54 11 5555-0404" },
  { id: 5, nombre: "Familia Fernández", lat: -34.5055, lng: -58.4972, deportes: ["hockey"], dia: "Domingo", horario: "10:00 AM", lugaresAuto: 3, cantidadHijos: 2, whatsapp: "+54 11 5555-0505" },
  { id: 6, nombre: "Familia García", lat: -34.5042, lng: -58.4958, deportes: ["futbol", "tenis"], dia: "Sábado", horario: "10:30 AM", lugaresAuto: 5, cantidadHijos: 1, whatsapp: "+54 11 5555-0606" },
  { id: 7, nombre: "Familia Pérez", lat: -34.5045, lng: -58.4935, deportes: ["rugby"], dia: "Domingo", horario: "9:30 AM", lugaresAuto: 3, cantidadHijos: 2, whatsapp: "+54 11 5555-0707" },
  { id: 8, nombre: "Familia Sánchez", lat: -34.5060, lng: -58.4968, deportes: ["futbol"], dia: "Sábado", horario: "10:00 AM", lugaresAuto: 2, cantidadHijos: 1, whatsapp: "+54 11 5555-0808" },
  { id: 9, nombre: "Familia Torres", lat: -34.5035, lng: -58.4955, deportes: ["natacion", "hockey"], dia: "Sábado", horario: "9:00 AM", lugaresAuto: 3, cantidadHijos: 2, whatsapp: "+54 11 5555-1010" },
  { id: 10, nombre: "Familia Moreno", lat: -34.5070, lng: -58.4925, deportes: ["futbol", "rugby"], dia: "Domingo", horario: "10:00 AM", lugaresAuto: 4, cantidadHijos: 1, whatsapp: "+54 11 5555-1212" }
];

// =============================================
// 1c. DATOS EVENTOS - 8 eventos
// =============================================

const EVENTOS = [
  { id: 1, nombre: "Familia González", lat: -34.5050, lng: -58.4950, descripcion: "Cumple de Mateo", fecha: "2026-03-15", horario: "3:00 PM", lugaresAuto: 3, cantidadHijos: 1, whatsapp: "+54 11 5555-0101" },
  { id: 2, nombre: "Familia Rodríguez", lat: -34.5065, lng: -58.4965, descripcion: "Cumple de Valentina", fecha: "2026-03-15", horario: "4:00 PM", lugaresAuto: 2, cantidadHijos: 1, whatsapp: "+54 11 5555-0202" },
  { id: 3, nombre: "Familia Martínez", lat: -34.5030, lng: -58.4980, descripcion: "Pijamada de Lucas", fecha: "2026-03-22", horario: "6:00 PM", lugaresAuto: 4, cantidadHijos: 2, whatsapp: "+54 11 5555-0303" },
  { id: 4, nombre: "Familia López", lat: -34.5080, lng: -58.4940, descripcion: "Cumple de Sofía", fecha: "2026-03-15", horario: "3:30 PM", lugaresAuto: 2, cantidadHijos: 1, whatsapp: "+54 11 5555-0404" },
  { id: 5, nombre: "Familia Fernández", lat: -34.5055, lng: -58.4972, descripcion: "Fiesta de fin de año", fecha: "2026-03-22", horario: "5:00 PM", lugaresAuto: 3, cantidadHijos: 2, whatsapp: "+54 11 5555-0505" },
  { id: 6, nombre: "Familia García", lat: -34.5042, lng: -58.4958, descripcion: "Cumple de Tomás", fecha: "2026-04-05", horario: "4:00 PM", lugaresAuto: 5, cantidadHijos: 1, whatsapp: "+54 11 5555-0606" },
  { id: 7, nombre: "Familia Pérez", lat: -34.5045, lng: -58.4935, descripcion: "Cumple de Emma", fecha: "2026-03-15", horario: "3:00 PM", lugaresAuto: 3, cantidadHijos: 1, whatsapp: "+54 11 5555-0707" },
  { id: 8, nombre: "Familia Torres", lat: -34.5035, lng: -58.4955, descripcion: "Cumple de Bautista", fecha: "2026-04-05", horario: "3:00 PM", lugaresAuto: 3, cantidadHijos: 2, whatsapp: "+54 11 5555-1010" }
];


// =============================================
// 2. FUNCIONES UTILITARIAS
// =============================================

/** Haversine: distancia en km entre dos coordenadas */
function calcularDistancia(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/** Convierte "7:30 AM" a minutos desde medianoche */
function horarioAMinutos(horario) {
  if (!horario) return null;
  const m = horario.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!m) return null;
  let h = parseInt(m[1]);
  const min = parseInt(m[2]);
  const p = m[3].toUpperCase();
  if (p === "PM" && h !== 12) h += 12;
  if (p === "AM" && h === 12) h = 0;
  return h * 60 + min;
}

/** Score de distancia casa-a-casa (40 pts max) */
function scoreDistancia(dist) {
  if (dist < 1) return 40;
  if (dist < 2) return 28;
  if (dist < 3) return 16;
  return 4;
}

/** Genera coordenadas ficticias para una dirección ingresada */
function generarCoordenadas(direccion) {
  const v = () => (Math.random() - 0.5) * 0.012;
  return { lat: -34.5055 + v(), lng: -58.4960 + v() };
}

/** Formatea distancia para mostrar */
function formatearDistancia(dist) {
  return dist < 1 ? (dist * 1000).toFixed(0) + " m" : dist.toFixed(1) + " km";
}


// =============================================
// 3. ALGORITMO ESCOLAR
// =============================================

function calcularCompatibilidadEscolar(usuario, familia) {
  // Hard filter: al menos 1 colegio en común
  const colegiosComun = usuario.colegios.filter(c => familia.colegios.includes(c));
  if (colegiosComun.length === 0) return null;

  // A) Distancia casa-casa (40 pts)
  const dist = calcularDistancia(usuario.lat, usuario.lng, familia.lat, familia.lng);
  const ptsDistancia = scoreDistancia(dist);

  // B) Horario (30 pts) — comparar según tipo de viaje en común
  let ptsHorario = 0;
  const uTipo = usuario.tipoViaje;
  const fTipo = familia.tipoViaje;

  // Determinar si comparten ida, vuelta, o ambos
  const compartenIda = (uTipo === "ida" || uTipo === "ida_y_vuelta") &&
    (fTipo === "ida" || fTipo === "ida_y_vuelta");
  const compartenVuelta = (uTipo === "vuelta" || uTipo === "ida_y_vuelta") &&
    (fTipo === "vuelta" || fTipo === "ida_y_vuelta");

  if (compartenIda && compartenVuelta) {
    // Ambos comparten ida y vuelta: promediar scores
    const scoreIda = scoreHorarioCalc(usuario.horarioEntrada, familia.horarioEntrada);
    const scoreVuelta = scoreHorarioCalc(usuario.horarioSalida, familia.horarioSalida);
    ptsHorario = (scoreIda + scoreVuelta) / 2;
  } else if (compartenIda) {
    ptsHorario = scoreHorarioCalc(usuario.horarioEntrada, familia.horarioEntrada);
  } else if (compartenVuelta) {
    ptsHorario = scoreHorarioCalc(usuario.horarioSalida, familia.horarioSalida);
  }
  // Si no comparten ningún tipo → 0 pts horario

  // C) Días en común (20 pts)
  const diasComun = usuario.dias.filter(d => familia.dias.includes(d));
  const ptsDias = usuario.dias.length > 0 ? 20 * (diasComun.length / usuario.dias.length) : 0;

  // D) Grados en común (10 pts)
  const ptsGrados = usuario.grados.some(g => familia.grados.includes(g)) ? 10 : 0;

  const score = Math.round(ptsDistancia + ptsHorario + ptsDias + ptsGrados);
  return { score, distancia: dist, colegiosComun };
}

/** Calcula score de horario (30 pts max) */
function scoreHorarioCalc(h1, h2) {
  const m1 = horarioAMinutos(h1);
  const m2 = horarioAMinutos(h2);
  if (m1 === null || m2 === null) return 0;
  const diff = Math.abs(m1 - m2);
  if (diff === 0) return 30;
  if (diff <= 15) return 15;
  return 0;
}


// =============================================
// 4. ALGORITMO DEPORTES
// =============================================

function calcularCompatibilidadDeportes(usuario, familia) {
  // Hard filter: al menos 1 deporte en común
  const deportesComun = usuario.deportes.filter(d => familia.deportes.includes(d));
  if (deportesComun.length === 0) return null;

  // A) Distancia (40 pts)
  const dist = calcularDistancia(usuario.lat, usuario.lng, familia.lat, familia.lng);
  const ptsDistancia = scoreDistancia(dist);

  // B) Mismo día (30 pts)
  const ptsDia = usuario.dia === familia.dia ? 30 : 0;

  // C) Horario (30 pts)
  const m1 = horarioAMinutos(usuario.horario);
  const m2 = horarioAMinutos(familia.horario);
  let ptsHorario = 0;
  if (m1 !== null && m2 !== null) {
    const diff = Math.abs(m1 - m2);
    if (diff === 0) ptsHorario = 30;
    else if (diff <= 30) ptsHorario = 15;
  }

  const score = Math.round(ptsDistancia + ptsDia + ptsHorario);
  return { score, distancia: dist, deportesComun };
}


// =============================================
// 5. ALGORITMO EVENTOS
// =============================================

function calcularCompatibilidadEventos(usuario, evento) {
  // Hard filter: misma fecha
  if (usuario.fecha !== evento.fecha) return null;

  // A) Distancia casa-casa (50 pts)
  const dist = calcularDistancia(usuario.lat, usuario.lng, evento.lat, evento.lng);
  let ptsDistancia;
  if (dist < 1) ptsDistancia = 50;
  else if (dist < 2) ptsDistancia = 35;
  else if (dist < 3) ptsDistancia = 20;
  else ptsDistancia = 5;

  // B) Horario (50 pts)
  const m1 = horarioAMinutos(usuario.horario);
  const m2 = horarioAMinutos(evento.horario);
  let ptsHorario = 0;
  if (m1 !== null && m2 !== null) {
    const diff = Math.abs(m1 - m2);
    if (diff === 0) ptsHorario = 50;
    else if (diff <= 30) ptsHorario = 25;
  }

  const score = Math.round(ptsDistancia + ptsHorario);
  return { score, distancia: dist };
}


// =============================================
// 6. BÚSQUEDA DE MATCHES
// =============================================

function buscarMatchesEscolar(usuario) {
  return FAMILIAS
    .map(f => {
      const r = calcularCompatibilidadEscolar(usuario, f);
      return r && r.score >= 60 ? { familia: f, ...r } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);
}

function buscarMatchesDeportes(usuario) {
  return FAMILIAS_DEPORTES
    .map(f => {
      const r = calcularCompatibilidadDeportes(usuario, f);
      return r && r.score >= 50 ? { familia: f, ...r } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);
}

function buscarMatchesEventos(usuario) {
  return EVENTOS
    .map(e => {
      const r = calcularCompatibilidadEventos(usuario, e);
      return r && r.score >= 40 ? { evento: e, ...r } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);
}


// =============================================
// 7. LÓGICA DEL FORMULARIO (index.html)
// =============================================

function initFormulario() {
  // --- Tab switching ---
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");
  if (tabBtns.length === 0) return; // No estamos en index.html

  tabBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const target = this.dataset.tab;
      tabBtns.forEach(b => b.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));
      this.classList.add("active");
      document.getElementById("tab-" + target).classList.add("active");
    });
  });

  // --- Trip type toggle (escolar) ---
  const tipoRadios = document.querySelectorAll('input[name="tipoViaje"]');
  const grupoEntrada = document.getElementById("grupo-horario-entrada");
  const grupoSalida = document.getElementById("grupo-horario-salida");

  tipoRadios.forEach(radio => {
    radio.addEventListener("change", function () {
      const val = this.value;
      grupoEntrada.classList.toggle("hidden", val === "vuelta");
      grupoSalida.classList.toggle("hidden", val === "ida");
    });
  });

  // --- Form: Escolar ---
  initFormEscolar();

  // --- Form: Deportes ---
  initFormDeportes();

  // --- Form: Eventos ---
  initFormEventos();
}

function initFormEscolar() {
  const form = document.getElementById("formEscolar");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    limpiarErrores(form);

    const nombre = form.querySelector("#esc-nombre").value.trim();
    const direccion = form.querySelector("#esc-direccion").value.trim();
    const whatsapp = form.querySelector("#esc-whatsapp").value.trim();
    const tipoViaje = form.querySelector('input[name="tipoViaje"]:checked');
    const horarioEntrada = form.querySelector("#esc-horario-entrada").value;
    const horarioSalida = form.querySelector("#esc-horario-salida").value;
    const lugaresAuto = form.querySelector("#esc-lugares").value;
    const cantidadHijos = form.querySelector("#esc-hijos").value;

    const colegiosChecked = form.querySelectorAll('input[name="colegios"]:checked');
    const colegios = Array.from(colegiosChecked).map(cb => cb.value);

    const gradosChecked = form.querySelectorAll('input[name="grados"]:checked');
    const grados = Array.from(gradosChecked).map(cb => parseInt(cb.value));

    const diasChecked = form.querySelectorAll('input[name="dias"]:checked');
    const dias = Array.from(diasChecked).map(cb => parseInt(cb.value));

    // Validación
    let valid = true;
    if (!nombre || nombre.length < 3) { mostrarError("esc-nombre", "Ingresá el nombre de tu familia (mín. 3 caracteres)"); valid = false; }
    else if (!/^[a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s]+$/.test(nombre)) { mostrarError("esc-nombre", "Solo letras y espacios"); valid = false; }
    if (!direccion || direccion.length < 10) { mostrarError("esc-direccion", "Ingresá una dirección completa (mín. 10 caracteres)"); valid = false; }
    if (colegios.length === 0) { mostrarError("esc-colegios", "Seleccioná al menos un colegio"); valid = false; }
    if (!tipoViaje) { mostrarError("esc-tipo-viaje", "Seleccioná el tipo de viaje"); valid = false; }

    const tipo = tipoViaje ? tipoViaje.value : "";
    if ((tipo === "ida" || tipo === "ida_y_vuelta") && !horarioEntrada) {
      mostrarError("esc-horario-entrada", "Seleccioná horario de entrada"); valid = false;
    }
    if ((tipo === "vuelta" || tipo === "ida_y_vuelta") && !horarioSalida) {
      mostrarError("esc-horario-salida", "Seleccioná horario de salida"); valid = false;
    }
    if (grados.length === 0) { mostrarError("esc-grados", "Seleccioná al menos un grado"); valid = false; }
    if (dias.length === 0) { mostrarError("esc-dias", "Seleccioná al menos un día"); valid = false; }
    if (!lugaresAuto) { mostrarError("esc-lugares", "Seleccioná lugares disponibles"); valid = false; }
    if (!cantidadHijos) { mostrarError("esc-hijos", "Seleccioná cantidad de hijos"); valid = false; }
    if (!whatsapp) { mostrarError("esc-whatsapp", "Ingresá tu WhatsApp"); valid = false; }
    else if (!/^\+?[\d\s\-()]{7,20}$/.test(whatsapp)) { mostrarError("esc-whatsapp", "Número inválido (ej: +54 11 1234-5678)"); valid = false; }

    if (!valid) return;

    const coords = generarCoordenadas(direccion);
    const usuario = {
      tab: "escolar", nombre, direccion,
      lat: coords.lat, lng: coords.lng,
      colegios, tipoViaje: tipo,
      horarioEntrada: (tipo === "ida" || tipo === "ida_y_vuelta") ? horarioEntrada : null,
      horarioSalida: (tipo === "vuelta" || tipo === "ida_y_vuelta") ? horarioSalida : null,
      grados, dias,
      lugaresAuto: parseInt(lugaresAuto), cantidadHijos: parseInt(cantidadHijos),
      whatsapp
    };

    localStorage.setItem("arpooling_usuario", JSON.stringify(usuario));
    mostrarLoading();
  });
}

function initFormDeportes() {
  const form = document.getElementById("formDeportes");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    limpiarErrores(form);

    const nombre = form.querySelector("#dep-nombre").value.trim();
    const direccion = form.querySelector("#dep-direccion").value.trim();
    const whatsapp = form.querySelector("#dep-whatsapp").value.trim();
    const dia = form.querySelector("#dep-dia").value;
    const horario = form.querySelector("#dep-horario").value;
    const lugaresAuto = form.querySelector("#dep-lugares").value;
    const cantidadHijos = form.querySelector("#dep-hijos").value;

    const deportesChecked = form.querySelectorAll('input[name="deportes"]:checked');
    const deportes = Array.from(deportesChecked).map(cb => cb.value);

    let valid = true;
    if (!nombre || nombre.length < 3) { mostrarError("dep-nombre", "Ingresá el nombre (mín. 3 caracteres)"); valid = false; }
    if (!direccion || direccion.length < 10) { mostrarError("dep-direccion", "Dirección incompleta (mín. 10 caracteres)"); valid = false; }
    if (deportes.length === 0) { mostrarError("dep-deportes", "Seleccioná al menos un deporte"); valid = false; }
    if (!dia) { mostrarError("dep-dia", "Seleccioná un día"); valid = false; }
    if (!horario) { mostrarError("dep-horario", "Seleccioná un horario"); valid = false; }
    if (!lugaresAuto) { mostrarError("dep-lugares", "Seleccioná lugares disponibles"); valid = false; }
    if (!cantidadHijos) { mostrarError("dep-hijos", "Seleccioná cantidad de hijos"); valid = false; }
    if (!whatsapp) { mostrarError("dep-whatsapp", "Ingresá tu WhatsApp"); valid = false; }
    else if (!/^\+?[\d\s\-()]{7,20}$/.test(whatsapp)) { mostrarError("dep-whatsapp", "Número inválido"); valid = false; }

    if (!valid) return;

    const coords = generarCoordenadas(direccion);
    const usuario = {
      tab: "deportes", nombre, direccion,
      lat: coords.lat, lng: coords.lng,
      deportes, dia, horario,
      lugaresAuto: parseInt(lugaresAuto), cantidadHijos: parseInt(cantidadHijos),
      whatsapp
    };

    localStorage.setItem("arpooling_usuario", JSON.stringify(usuario));
    mostrarLoading();
  });
}

function initFormEventos() {
  const form = document.getElementById("formEventos");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    limpiarErrores(form);

    const nombre = form.querySelector("#evt-nombre").value.trim();
    const direccion = form.querySelector("#evt-direccion").value.trim();
    const whatsapp = form.querySelector("#evt-whatsapp").value.trim();
    const fecha = form.querySelector("#evt-fecha").value;
    const horario = form.querySelector("#evt-horario").value;
    const descripcion = form.querySelector("#evt-descripcion").value.trim();
    const lugaresAuto = form.querySelector("#evt-lugares").value;
    const cantidadHijos = form.querySelector("#evt-hijos").value;

    let valid = true;
    if (!nombre || nombre.length < 3) { mostrarError("evt-nombre", "Ingresá el nombre (mín. 3 caracteres)"); valid = false; }
    if (!direccion || direccion.length < 10) { mostrarError("evt-direccion", "Dirección incompleta (mín. 10 caracteres)"); valid = false; }
    if (!fecha) { mostrarError("evt-fecha", "Seleccioná la fecha del evento"); valid = false; }
    if (!horario) { mostrarError("evt-horario", "Seleccioná el horario"); valid = false; }
    if (!descripcion) { mostrarError("evt-descripcion", "Agregá una descripción breve"); valid = false; }
    if (!lugaresAuto) { mostrarError("evt-lugares", "Seleccioná lugares disponibles"); valid = false; }
    if (!cantidadHijos) { mostrarError("evt-hijos", "Seleccioná cantidad de hijos"); valid = false; }
    if (!whatsapp) { mostrarError("evt-whatsapp", "Ingresá tu WhatsApp"); valid = false; }
    else if (!/^\+?[\d\s\-()]{7,20}$/.test(whatsapp)) { mostrarError("evt-whatsapp", "Número inválido"); valid = false; }

    if (!valid) return;

    const coords = generarCoordenadas(direccion);
    const usuario = {
      tab: "eventos", nombre, direccion,
      lat: coords.lat, lng: coords.lng,
      fecha, horario, descripcion,
      lugaresAuto: parseInt(lugaresAuto), cantidadHijos: parseInt(cantidadHijos),
      whatsapp
    };

    localStorage.setItem("arpooling_usuario", JSON.stringify(usuario));
    mostrarLoading();
  });
}

// --- Helpers de formulario ---

function limpiarErrores(form) {
  form.querySelectorAll(".form-error").forEach(el => el.classList.remove("visible"));
  form.querySelectorAll(".form-input, .form-select, .checkbox-group, .radio-group").forEach(el => el.classList.remove("error"));
}

function mostrarError(fieldId, mensaje) {
  const field = document.getElementById(fieldId);
  const errorEl = document.getElementById(fieldId + "-error");
  if (field && field.classList) field.classList.add("error");
  if (errorEl) { errorEl.textContent = mensaje; errorEl.classList.add("visible"); }
}

function mostrarLoading() {
  const loading = document.getElementById("loadingOverlay");
  if (loading) loading.classList.add("active");
  setTimeout(function () { window.location.href = "results.html"; }, 1000);
}


// =============================================
// 8. LÓGICA DE RESULTADOS (results.html)
// =============================================

function initResultados() {
  const container = document.getElementById("resultsContainer");
  if (!container) return;

  const userData = localStorage.getItem("arpooling_usuario");
  if (!userData) {
    container.innerHTML = renderEmptyState("No hay datos de búsqueda", "Completá el formulario primero.");
    return;
  }

  const usuario = JSON.parse(userData);
  const userNameEl = document.getElementById("userName");
  if (userNameEl) userNameEl.textContent = usuario.nombre;

  // Mostrar tipo de búsqueda
  const tabLabelEl = document.getElementById("tabLabel");
  const tabLabels = { escolar: "Escolar", deportes: "Deportes", eventos: "Eventos" };
  if (tabLabelEl) tabLabelEl.textContent = tabLabels[usuario.tab] || "";

  let matches;
  if (usuario.tab === "escolar") {
    matches = buscarMatchesEscolar(usuario);
  } else if (usuario.tab === "deportes") {
    matches = buscarMatchesDeportes(usuario);
  } else if (usuario.tab === "eventos") {
    matches = buscarMatchesEventos(usuario);
  } else {
    matches = [];
  }

  const summaryEl = document.getElementById("resultsSummary");

  if (matches.length === 0) {
    if (summaryEl) summaryEl.style.display = "none";
    const msgs = {
      escolar: "No hay familias con suficiente compatibilidad (60%). Probá ajustar horarios o días.",
      deportes: "No hay familias con suficiente compatibilidad (50%). Probá otro deporte o día.",
      eventos: "No hay familias buscando viaje para esa fecha."
    };
    container.innerHTML = renderEmptyState("No se encontraron matches", msgs[usuario.tab] || "");
    return;
  }

  if (summaryEl) {
    summaryEl.innerHTML = "Se " + (matches.length === 1 ? "encontró" : "encontraron") +
      " <strong>" + matches.length + "</strong> " +
      (matches.length === 1 ? "familia compatible" : "familias compatibles");
  }

  if (usuario.tab === "escolar") {
    container.innerHTML = matches.map(m => renderCardEscolar(m, usuario)).join("");
  } else if (usuario.tab === "deportes") {
    container.innerHTML = matches.map(m => renderCardDeportes(m)).join("");
  } else {
    container.innerHTML = matches.map(m => renderCardEventos(m)).join("");
  }
}

// --- Render cards ---

function renderCardEscolar(match, usuario) {
  const f = match.familia;
  const scoreClass = match.score >= 85 ? "score-high" : match.score >= 70 ? "score-medium" : "score-low";
  const distStr = formatearDistancia(match.distancia);

  // Colegios en común
  const colegiosHTML = match.colegiosComun.map(c =>
    '<span class="school-badge">' + COLEGIOS[c].nombre + '</span>'
  ).join("");

  // Tipo de viaje
  const tipoHTML = '<span class="trip-badge trip-' + f.tipoViaje + '">' + TIPO_VIAJE_LABEL[f.tipoViaje] + '</span>';

  // Horarios
  let horariosHTML = "";
  if (f.horarioEntrada) horariosHTML += '<span>Entrada: ' + f.horarioEntrada + '</span>';
  if (f.horarioEntrada && f.horarioSalida) horariosHTML += ' &nbsp;|&nbsp; ';
  if (f.horarioSalida) horariosHTML += '<span>Salida: ' + f.horarioSalida + '</span>';

  // Días
  const diasHTML = [1, 2, 3, 4, 5].map(d =>
    '<span class="day-badge' + (f.dias.includes(d) ? " active" : "") + '">' + DIAS_LABEL[d] + '</span>'
  ).join("");

  // Grados
  const gradosHTML = f.grados.map(g => '<span class="grade-badge">' + GRADOS_LABEL[g] + '</span>').join("");

  // WhatsApp
  const waLink = "https://wa.me/" + f.whatsapp.replace(/[\s\-()]/g, "");

  return '<div class="match-card">' +
    '<div class="match-card-header">' +
      '<span class="match-card-name">' + f.nombre + '</span>' +
      '<span class="badge-score ' + scoreClass + '">' + match.score + '%</span>' +
    '</div>' +
    '<div class="match-card-badges">' + colegiosHTML + tipoHTML + '</div>' +
    '<div class="match-details">' +
      '<div class="match-detail"><span class="match-detail-icon icon-location"></span><span>a ' + distStr + '</span></div>' +
      '<div class="match-detail"><span class="match-detail-icon icon-clock"></span><span>' + horariosHTML + '</span></div>' +
      '<div class="match-detail"><span class="match-detail-icon icon-calendar"></span><div class="days-row">' + diasHTML + '</div></div>' +
      '<div class="match-detail"><span class="match-detail-icon icon-grade"></span><div class="grade-badges">' + gradosHTML + '</div></div>' +
      '<div class="match-detail"><span class="match-detail-icon icon-car"></span><span>' + f.lugaresAuto + ' lugares disponibles</span></div>' +
      '<div class="match-detail"><span class="match-detail-icon icon-kids"></span><span>' + f.cantidadHijos + (f.cantidadHijos === 1 ? ' hijo' : ' hijos') + ' a trasladar</span></div>' +
    '</div>' +
    '<div class="match-card-actions">' +
      '<a href="' + waLink + '" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">Contactar por WhatsApp</a>' +
    '</div>' +
  '</div>';
}

function renderCardDeportes(match) {
  const f = match.familia;
  const scoreClass = match.score >= 85 ? "score-high" : match.score >= 70 ? "score-medium" : "score-low";
  const distStr = formatearDistancia(match.distancia);

  const deportesHTML = match.deportesComun.map(d =>
    '<span class="sport-badge">' + DEPORTES_LABEL[d] + '</span>'
  ).join("");

  const waLink = "https://wa.me/" + f.whatsapp.replace(/[\s\-()]/g, "");

  return '<div class="match-card">' +
    '<div class="match-card-header">' +
      '<span class="match-card-name">' + f.nombre + '</span>' +
      '<span class="badge-score ' + scoreClass + '">' + match.score + '%</span>' +
    '</div>' +
    '<div class="match-card-badges">' + deportesHTML + '</div>' +
    '<div class="match-details">' +
      '<div class="match-detail"><span class="match-detail-icon icon-location"></span><span>a ' + distStr + '</span></div>' +
      '<div class="match-detail"><span class="match-detail-icon icon-calendar"></span><span>' + f.dia + '</span></div>' +
      '<div class="match-detail"><span class="match-detail-icon icon-clock"></span><span>' + f.horario + '</span></div>' +
      '<div class="match-detail"><span class="match-detail-icon icon-car"></span><span>' + f.lugaresAuto + ' lugares disponibles</span></div>' +
      '<div class="match-detail"><span class="match-detail-icon icon-kids"></span><span>' + f.cantidadHijos + (f.cantidadHijos === 1 ? ' hijo' : ' hijos') + '</span></div>' +
    '</div>' +
    '<div class="match-card-actions">' +
      '<a href="' + waLink + '" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">Contactar por WhatsApp</a>' +
    '</div>' +
  '</div>';
}

function renderCardEventos(match) {
  const e = match.evento;
  const scoreClass = match.score >= 85 ? "score-high" : match.score >= 70 ? "score-medium" : "score-low";
  const distStr = formatearDistancia(match.distancia);

  // Formatear fecha
  const [y, m, d] = e.fecha.split("-");
  const fechaStr = d + "/" + m + "/" + y;

  const waLink = "https://wa.me/" + e.whatsapp.replace(/[\s\-()]/g, "");

  return '<div class="match-card">' +
    '<div class="match-card-header">' +
      '<span class="match-card-name">' + e.nombre + '</span>' +
      '<span class="badge-score ' + scoreClass + '">' + match.score + '%</span>' +
    '</div>' +
    '<div class="match-card-badges"><span class="event-badge">' + e.descripcion + '</span></div>' +
    '<div class="match-details">' +
      '<div class="match-detail"><span class="match-detail-icon icon-location"></span><span>a ' + distStr + '</span></div>' +
      '<div class="match-detail"><span class="match-detail-icon icon-calendar"></span><span>' + fechaStr + '</span></div>' +
      '<div class="match-detail"><span class="match-detail-icon icon-clock"></span><span>' + e.horario + '</span></div>' +
      '<div class="match-detail"><span class="match-detail-icon icon-car"></span><span>' + e.lugaresAuto + ' lugares disponibles</span></div>' +
      '<div class="match-detail"><span class="match-detail-icon icon-kids"></span><span>' + e.cantidadHijos + (e.cantidadHijos === 1 ? ' hijo' : ' hijos') + '</span></div>' +
    '</div>' +
    '<div class="match-card-actions">' +
      '<a href="' + waLink + '" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">Contactar por WhatsApp</a>' +
    '</div>' +
  '</div>';
}

function renderEmptyState(titulo, mensaje) {
  return '<div class="empty-state">' +
    '<span class="empty-state-icon"></span>' +
    '<h2>' + titulo + '</h2>' +
    '<p>' + mensaje + '</p>' +
    '<a href="index.html" class="btn btn-primary">Buscar de nuevo</a>' +
  '</div>';
}


// =============================================
// 9. INICIALIZACIÓN
// =============================================
document.addEventListener("DOMContentLoaded", function () {
  initFormulario();
  initResultados();
});
