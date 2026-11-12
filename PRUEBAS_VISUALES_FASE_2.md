# Pruebas visuales de Keter Do X — fase 2

Fecha: 12 de noviembre de 2026 (UTC).
Resultado: móvil emulado, escritorio, zoom y teclado verificados en Chromium. Se detecta un error menor de recurso y una observación tipográfica; no se considera superado el criterio de consola sin errores.

## Versión y ejecución

- Fuente de la página: main, commit a8699a10725ecdeb5f1516a23634d805675a5bae.
- Rama aislada de pruebas: qa/fase2-20261112.
- Código final de las pruebas: commit 727a384520a5929cf6525e09fbdff91f8993d2db.
- Ejecución: https://github.com/rimelja/keter/actions/runs/43142818407
- Navegador: Chromium 158.0.8127.18, Linux; Playwright 1.65.0.
- Se ejecutaron nueve escenarios. Se inspeccionaron las capturas de la página y de los estados de teclado y zoom.

La página se sirvió únicamente dentro del entorno de pruebas de GitHub. No se desplegó un sitio ni se cambiaron index.html, styles.css o la lámina de marca. Los hashes de los tres archivos coinciden con main.

| Archivo | Hash Git del recurso probado |
| --- | --- |
| index.html | d96e69d1a7d95caaeea96e82913c35783dabb5b4 |
| assets/css/styles.css | 2138f006e886469dc5c1e629ed0324cc20807252 |
| Lámina de marca JPEG | 12ec27fde6668855b4d80038c6eba83db08fbdf1 |

## Resultados

| Prueba | Resultado observado |
| --- | --- |
| 320 × 900, móvil emulado | Ancho de documento 320 px; sin desplazamiento horizontal ni texto recortado; menú en varias líneas y tarjetas en una columna |
| 375 × 900, móvil emulado | Ancho de documento 375 px; sin desplazamiento horizontal ni texto recortado; las tres preguntas abren y cierran con toque |
| 768 × 900 | Ancho de documento 768 px; dos columnas de programas y tres pasos de metodología; sin recortes horizontales |
| 1024 × 900 | Ancho de documento 1024 px; cabecera horizontal y distribución de escritorio; sin recortes horizontales |
| 1440 × 900 | Ancho de documento 1440 px; logo, texto y decoración separados; tarjetas, metodología, preguntas y contacto legibles |
| Zoom real al 200 % | Factor 2 confirmado con la API de zoom del navegador; ancho útil de 1440 a 720 px CSS; sin desplazamiento horizontal ni texto fuera del ancho; capturas nativas de inicio, programas, metodología, preguntas y contacto |
| Teclado a 375 y 1440 px | 21 paradas de foco visibles en orden; Tab y Shift+Tab; salto al contenido; cuatro enlaces de menú; Enter abre y Espacio cierra las tres preguntas; enlace dentro de la primera respuesta alcanzable |
| Movimiento reducido | Preferencia reconocida; desplazamiento automático y transiciones desactivadas |
| Objetivos principales | Altura mínima medida de 44 px CSS para los enlaces y controles principales seleccionados |
| Logo | Visible completo y sin deformación apreciable en las capturas revisadas |
| Errores de página | Cero excepciones JavaScript |
| Consola | Un 404 de /favicon.ico en el contexto usado para zoom; pendiente |

Los controles de las preguntas se probaron con teclado y con toque, sin JavaScript de la página. Los destinos de WhatsApp e Instagram no se activaron durante esta revisión; no se enviaron mensajes.

## Hallazgos

### 1. Falta el icono de pestaña — prioridad baja

Reproducción: abrir la página en un perfil de Chromium que solicita el icono predeterminado. El navegador solicita /favicon.ico y el servidor devuelve 404.

Evidencia: resultados.json registra la URL de la consola y httpNotFound contiene /favicon.ico. No existe un favicon en el árbol de la versión probada ni un enlace a otro icono en el HTML.

Efecto: no impide navegar, pero deja un error de recurso y el icono de pestaña sin definir. La ejecución termina con estado failure exclusivamente por el criterio de consola sin errores. No debe presentarse como una ejecución completamente aprobada.

Dirección de corrección: preparar un icono de marca autorizado y enlazarlo desde el head, o servir un favicon válido. Volver a probar la consola tras el cambio.

### 2. La «X» queda aislada en algunos títulos — prioridad baja

En el encabezado principal a 768 px y al 200 %, la X final puede quedar sola en una línea. El rótulo «¿Qué es Keter Do X?» también separa Do y X en los anchos revisados. El contenido permanece completo y legible, pero la composición del nombre pierde continuidad.

Dirección de corrección: conservar «Do X» como un grupo al distribuir el texto y revisar la anchura máxima del rótulo de presentación. Es una mejora visual pendiente; no se cambió la página durante esta solicitud de pruebas.

## Evidencia y límites

El artefacto keter-fase2-evidencia-visual de la ejecución contiene 19 capturas PNG y resultados.json. Las capturas completas cubren los cinco anchos; las de teclado muestran el salto al contenido y una pregunta abierta; las de zoom muestran cinco posiciones. El artefacto de GitHub caduca el 15 de noviembre de 2026.

Resultados detallados persistidos en este repositorio: RESULTADOS_VISUALES_FASE_2.json.

La primera ejecución utilizó dos criterios demasiado estrictos: contabilizaba el saliente de 2 px de una flecha decorativa como texto recortado y exigía que el contacto quedara arriba incluso al alcanzar el final del documento. Se corrigieron las mediciones para comprobar recorte real, texto fuera de pantalla y destino visible al llegar al límite de desplazamiento. No se modificaron los estilos para satisfacer la prueba.

También se sustituyó la captura de Playwright que recortaba el área al ampliar por una captura nativa del viewport de Chromium. La prueba final conserva el zoom real, sin cambiar el CSS del sitio ni simularlo con una transformación.

Las pruebas utilizan emulación de tamaños y toque en Chromium sobre Linux. No equivalen a una prueba en teléfonos físicos, Safari/iOS, Firefox ni con las fuentes de Windows. Tampoco constituyen una certificación completa de accesibilidad, SEO, GEO o AEO. Las familias tipográficas oficiales siguen pendientes.

## Siguiente paso

Corregir el favicon y ajustar los saltos del nombre. Volver a ejecutar la prueba después de esas correcciones antes de marcar toda la fase 2 como aprobada.
