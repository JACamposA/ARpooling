# ARPooling - Carpools Escolares, Deportes y Eventos

MVP de matching de carpools para familias. Conecta familias cercanas para organizar viajes compartidos al colegio, actividades deportivas y eventos.

Sitio 100% estático (HTML/CSS/JS) - sin backend, sin dependencias, listo para GitHub Pages.

## Como funciona

1. Completas tus datos en el formulario (direccion, horarios, preferencias)
2. El algoritmo busca familias compatibles por proximidad y compatibilidad
3. Contactas por WhatsApp a las familias con mejor match

## Tres modos de uso

### Escolar
Carpool diario al colegio. Soporta dos colegios: **Colegio Los Molinos** (varones) y **Colegio El Buen Ayre** (mujeres). Los padres pueden elegir uno o ambos. Incluye tipo de viaje (Ida / Vuelta / Ida y Vuelta), horarios de entrada y salida, grados y dias disponibles.

### Deportes
Carpool para actividades deportivas semanales (futbol, hockey, tenis, rugby, natacion). Matching por deporte, dia y horario.

### Eventos
Carpool para eventos puntuales (cumpleanos, pijamadas, fiestas). Matching por fecha, horario y proximidad.

## Deploy en GitHub Pages

1. Crear un repositorio en GitHub
2. Subir los archivos: `index.html`, `results.html`, `styles.css`, `script.js`
3. Ir a **Settings > Pages**
4. En "Source" seleccionar **Deploy from a branch**
5. Seleccionar la rama `main` y carpeta `/ (root)`
6. Guardar. El sitio estara disponible en `https://tu-usuario.github.io/tu-repo/`

## Estructura

```
index.html      # Pagina principal con formulario (3 tabs)
results.html    # Pagina de resultados con match cards
styles.css      # Estilos, iconos SVG inline, fondo ilustrado
script.js       # Datos dummy, algoritmos de matching, logica de UI
README.md       # Este archivo
```

## Algoritmos de Matching

### Escolar (score 0-100%, umbral 60%)

| Criterio | Peso | Detalle |
|----------|------|---------|
| Distancia casa-casa | 40pts | Haversine: <1km=40, 1-2km=28, 2-3km=16, >3km=4 |
| Horario | 30pts | Exacto=30, +-15min=15, >15min=0 |
| Dias en comun | 20pts | Proporcional a dias compartidos |
| Grados en comun | 10pts | Al menos 1 grado en comun = 10 |

Hard filter: al menos un colegio en comun.

### Deportes (score 0-100%, umbral 50%)

| Criterio | Peso | Detalle |
|----------|------|---------|
| Distancia casa-casa | 40pts | Misma escala que escolar |
| Mismo dia | 30pts | Coincide=30, no=0 |
| Horario | 30pts | Exacto=30, +-30min=15, >30min=0 |

Hard filter: al menos un deporte en comun.

### Eventos (score 0-100%, umbral 40%)

| Criterio | Peso | Detalle |
|----------|------|---------|
| Distancia casa-casa | 50pts | <1km=50, 1-2km=35, 2-3km=20, >3km=5 |
| Horario | 50pts | Exacto=50, +-30min=25, >30min=0 |

Hard filter: misma fecha.

## Datos dummy

- 15 familias para matching escolar
- 10 familias para matching deportivo
- 8 eventos para matching de eventos

Las coordenadas del usuario se generan aleatoriamente cerca de la zona de las familias dummy para simular resultados.

## Stack

- HTML5 / CSS3 / JavaScript vanilla
- Sin frameworks, sin npm, sin backend
- Iconos SVG inline (sin dependencias externas)
- Fondo ilustrado estilo infantil (SVG inline en CSS)
- localStorage para pasar datos entre paginas

## Limitaciones del MVP

- Datos de familias hardcodeados (no hay backend ni base de datos)
- Coordenadas simuladas (no usa geocoding real)
- Sin persistencia entre sesiones
- Sin autenticacion de usuarios
