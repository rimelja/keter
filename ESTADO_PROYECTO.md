# Estado del proyecto Keter Do X

Fecha de revisión: 11 de noviembre de 2026, America/Caracas.
Versión del registro: 0.2.
Guía aplicada: Loop_Desarrollo_Web_Keter_Do_X.md, versión 1.1.
Estado: fase 1 implementada y validada estáticamente; revisión visual y por teclado pendiente.
Siguiente paso: comprobar la estructura en navegador antes de cerrar la fase 1 e iniciar la fase 2.

## Objetivo y alcance

Preparar una página principal que explique la oferta de la marca, ayude a encontrar un programa y permita solicitar información. La primera versión se construirá por capas: HTML5, CSS y JavaScript vainilla. PHP y MySQL quedan reservados para necesidades reales de servidor o almacenamiento.

La fase 0 entregó inventario, fuentes, arquitectura, decisiones visuales, pendientes y criterios de aceptación. La fase 1 incorpora index.html con estructura semántica y el recurso de marca existente. Las verificaciones realizadas y sus límites se detallan al final; el diseño CSS y la lógica JavaScript continúan en sus fases correspondientes.

## Evidencia del repositorio

Repositorio revisado: https://github.com/rimelja/keter
Rama: main.
Base consultada en la fase 0: 9d0716dda36b65cf4a4b50f8b2367020169acee3.
Base consultada en la fase 1: 1dc8054251546aa59749fad45cd8eca10d948f0d.
Commit de index.html en esta fase: 2bd7ebd9894a2e1fcfb5b9582ca8f7c4a82a6839.

En la revisión inicial se encontraron la guía, PROMPT_INICIAL.txt, LEEME_PRIMERO.txt, README.md y la lámina de marca WhatsApp Image 2026-10-27 at 9.00.40 AM.jpeg. No había ESTADO_PROYECTO.md, AGENTS.md ni archivos del sitio en esa rama.

El mensaje inicial refería una carpeta referencias que no existe en la versión consultada. Se ajusta ese mensaje a los recursos realmente disponibles. La propuesta Word y la transcripción se analizaron desde los archivos de la conversación; sus originales aún no están en este repositorio. No se atribuyen esos archivos a una ruta inexistente.

El avance mostrado en un chat de configuración puede permanecer dentro de ese entorno. Este registro se basa en los archivos efectivamente encontrados en GitHub.

## Clasificación de fuentes

C significa aportado o confirmado por el usuario.
P significa publicado por la marca; no equivale a confirmar su operación actual.
D significa decisión de diseño propuesta para esta primera versión.
F significa dato o recurso pendiente.

| Fuente | Resultado de la revisión | Uso |
| --- | --- | --- |
| Instrucciones del usuario | C | Crear por fases y usar información real |
| Guía del loop en el repositorio | C | Alcance, tecnología y forma de validar |
| Lámina de marca del repositorio | C | Nombre, descriptor, variantes visuales y colores |
| Propuesta y Canvas de Mejora Web de Keter Do X | Leída; contiene propuestas | Orientar navegación y registrar sugerencias como D |
| https://ktrdx.top/ | Contenido recuperado el 8 de noviembre y revisado de nuevo el 11 de noviembre de 2026 mediante lectura web | P; base del inventario y de los textos de programas |
| https://www.instagram.com/keterdox/ | El lector devolvió DisabledError | URL aportada; publicaciones sin revisar |
| Texto pegado.txt | Transcripción aportada y analizada en la preparación del loop | Método de iteración; no es fuente de datos del negocio |

La consulta web realizada aquí no demuestra que el permiso de red esté aplicado en otro entorno de Codex. No se ha comprobado la configuración de ese entorno. El resumen documentado permite continuar con las fuentes disponibles.

## Inventario de información publicada

Fuente de esta tabla: https://ktrdx.top/, consultas del 8 y del 11 de noviembre de 2026.

| Elemento | Dato recuperado | Estado y tratamiento |
| --- | --- | --- |
| Actividad y ciudad | Academia en Caracas | P; base para una presentación breve |
| Público | Profesionales, emprendedores y estudiantes | P |
| Áreas | Tecnología e IA; Comunicación; Estrategia; Robótica Avanzada; Música y Producción; Artes Culinarias; Belleza y Estética | P; confirmar oferta vigente antes del lanzamiento |
| Metodología | Aprender, Crear y Producir | P; describir sin garantizar resultados |
| Campaña fechada | Plan Vacacional 2026 | P; reservar hasta confirmar fechas y disponibilidad |
| Contacto enlazado | https://wa.me/584242340915 | P; comprobar que sigue atendido antes del lanzamiento |
| Condiciones comerciales | Modalidad híbrida, duración, certificaciones, Cashea, pagos y becas | P; requieren confirmación específica antes de trasladarlas |
| Afirmaciones promocionales | Liderazgo y resultados formativos | Su publicación no aporta evidencia; excluir |

El enlace de contacto se identificó en la navegación de la fuente. Su apertura mediante el lector falló al redirigir a WhatsApp; no se probó la atención del número ni se envió ningún mensaje.

La existencia del descriptor de marca no confirma servicios operativos de cowork o producción, equipamiento, capacidades ni tarifas.

## Inventario visual

Recurso disponible: WhatsApp Image 2026-10-27 at 9.00.40 AM.jpeg.

La imagen contiene un brand board con logotipo horizontal y principal, isotipo, versión negativa y aplicaciones. Es una referencia de identidad; no es una fotografía de instalaciones ni un archivo independiente listo para cada uso del logo.

Nombre de trabajo: Keter Do X.
Descriptor de marca: Academia · Cowork · Media Lab.

| Color rotulado | Código | Uso propuesto D |
| --- | --- | --- |
| Azul marino | #1B2A4A | Texto y estructura visual principal |
| Naranja | #EB7A2C | Acción principal con texto azul marino |
| Verde azulado | #1E9B8A | Acentos gráficos |
| Verde | #8CC63F | Acentos y etiquetas con contraste revisado |
| Azul | #2E75B6 | Acciones secundarias y detalles |
| Blanco de apoyo | #FFFFFF | Superficies neutrales |

Se usarán los códigos rotulados y se conservarán las proporciones y composición del logo. Los muestrarios tipográficos no identifican de manera inequívoca las familias de fuente; su nombre y disponibilidad quedan pendientes.

Dirección visual D: fondos claros, jerarquía tipográfica legible, espacios amplios y un acento dominante por bloque. La composición debe integrar el logo sin llenar cada sección con los cinco colores. Los contrastes se comprobarán en la fase CSS, incluidos foco y estados interactivos.

El 11 de noviembre de 2026 el usuario volvió a aportar la misma identidad gráfica con el logo. En index.html se utiliza el logotipo horizontal de la lámina original del repositorio mediante una ventana SVG. La imagen fuente conserva sus bytes, colores y proporciones; no se redibuja el logotipo ni se crea una imagen nueva.

El recurso se referencia con su nombre exacto y los espacios codificados en la URL. Su tamaño intrínseco es 1080 por 602 píxeles. La ventana corresponde al logotipo horizontal y el SVG tiene nombre accesible. Queda pendiente comprobar su encuadre renderizado.

Para optimización visual posterior se mantiene pendiente una versión independiente del logo y la identificación de las fuentes. La lámina ya está integrada como recurso de esta estructura.

## Arquitectura propuesta D

Primera entrega: una sola página, con secciones enlazadas mediante anclas. Las páginas individuales de programas se incorporarán después de disponer de fichas completas.

| Bloque | ID previsto | Contenido y función |
| --- | --- | --- |
| Cabecera | cabecera | Marca, navegación y acceso al contacto |
| Presentación | inicio | Una frase clara de actividad y dos acciones: explorar programas y solicitar información |
| Presentación de la marca | nosotros | Explicación breve respaldada; sin historia, trayectoria ni cifras añadidas |
| Oferta | programas | Tarjetas agrupadas para facilitar la exploración |
| Método | metodologia | Tres pasos, con explicaciones prudentes y sin promesas de entregables universales |
| Preguntas frecuentes | preguntas | Solo preguntas con respuesta respaldada |
| Contacto | contacto | Canal publicado y datos cuya fuente esté identificada |
| Pie | pie | Marca, descriptor y enlaces reales |

Navegación propuesta: Inicio, Programas, Metodología y Contacto.
CTA principal: Explorar programas.
CTA secundario: Solicitar información.
Las acciones de navegación llevarán a secciones existentes; no se enlazarán fichas que todavía no estén creadas.

Agrupaciones de navegación D:

| Etiqueta de navegación | Criterio de agrupación |
| --- | --- |
| Tecnología | Contenido técnico y programación |
| Comunicación y creación | Contenido, medios y producción |
| Estrategia | Toma de decisiones y pensamiento estratégico |
| Oficios | Formación práctica en las áreas correspondientes |

Estas etiquetas organizan la página; no se presentan como nuevas academias, titulaciones ni nombres comerciales confirmados.

Cowork y Media Lab conservarán su presencia en el descriptor. Su desarrollo como servicios independientes queda pendiente de alcance y datos operativos.

## Contenido editorial y consultas D

Tono: claro, profesional, cercano y acorde con una marca que comienza.
La presentación debe explicar qué se ofrece y cómo consultar, sin asegurar empleabilidad, ingresos, acreditaciones o resultados que no estén respaldados.

Título SEO del HTML: Keter Do X | Academia en Caracas.
Descripción del HTML: Conoce las áreas de formación y la metodología de Keter Do X en Caracas. Explora los programas y solicita información por WhatsApp.
Ambos se han incorporado al head de index.html.

Preguntas iniciales admisibles: qué áreas se presentan y cómo solicitar información.
Las respuestas sobre requisitos, edades, duración, modalidad, precios o fechas se añadirán cuando existan datos confirmados.
Para AEO se priorizarán respuestas directas; para GEO, identidad y datos consistentes. No se prometerán posiciones ni menciones en sistemas de IA.

## Datos pendientes

| Dato o recurso | Consecuencia | Decisión para avanzar |
| --- | --- | --- |
| Oferta activa y descripción de cada programa | No permite presentar matrícula o cupos abiertos | Usar áreas publicadas como base del borrador; confirmar antes del lanzamiento |
| Fechas, horarios, edades y requisitos | Impide publicar convocatorias completas | Reservar esos campos |
| Precios, moneda y condiciones de pago | Impide publicar tarifas o financiación | Omitir precios y distintivos comerciales |
| Modalidad y duración por programa | Impide afirmar una condición común a todos | Evitar generalizaciones |
| Alcance de certificaciones y alianzas | Impide mostrar avales | Excluir hasta contar con evidencia |
| Dirección exacta y horarios de atención | Impide colocar un mapa o datos locales completos | Mantener la ubicación general respaldada |
| Vigencia y atención del contacto publicado | Afecta la conversión del sitio final | Confirmar antes de lanzar |
| Alcance operativo de las otras líneas de marca | Impide ofrecer prestaciones concretas | Reservar sus fichas de servicio |
| Logos independientes y familias tipográficas | Afecta la optimización visual final | La estructura usa el logo de la lámina; conservar la optimización como pendiente |
| Fotografías, testimonios y proyectos autorizados | Impide una galería o prueba social verificable | Reservar esos bloques |
| Objetivo y destino de un formulario real | Impide implementar un envío | Usar inicialmente enlaces de contacto |

No se requiere resolver todos estos datos para iniciar el HTML. Cada elemento que carezca de respaldo seguirá omitido o reservado en el borrador y quedará identificado en este registro. La publicación exige resolver los pendientes de las funciones y contenidos que finalmente se incluyan.

## Criterios de aceptación

### Cierre de fase 0

- [x] Guía y alcance revisados.
- [x] Repositorio y recursos reales inventariados.
- [x] Información aportada, publicada, propuesta y pendiente diferenciada.
- [x] Estructura navegable definida sin depender de datos inventados.
- [x] Identidad y tecnología registradas.
- [x] Pendientes y siguiente paso documentados.

Resultado: fase 0 completada para iniciar la fase 1.

### Fase 1 Estructura HTML

- [x] Crear index.html y actualizar este registro.
- [x] Incluir HTML5 semántico, idioma español, charset, viewport, title y description.
- [x] Mantener un H1 principal y una jerarquía de encabezados.
- [x] Comprobar los 38 IDs únicos y los destinos de los enlaces internos.
- [x] Crear un enlace para saltar al contenido y etiquetar la navegación.
- [x] Incorporar siete programas agrupados y tres preguntas frecuentes nativas.
- [x] Referenciar el archivo de imagen que sí existe en el repositorio.
- [x] Mantener los contenidos comerciales pendientes fuera del texto público.
- [x] Superar html-validate 11.21.0: cero errores y cero advertencias.
- [x] Comprobar la ausencia de CSS, JavaScript, formularios y manejadores en línea.
- [ ] Comprobar en navegador la legibilidad, el encuadre del logo y la navegación por teclado.
- [ ] Verificar visualmente móvil y escritorio y abrir los enlaces externos.

Resultado: implementación y validación estática completadas. El cierre visual y funcional de esta fase sigue pendiente; la fase 2 todavía no se inicia.

### Fases posteriores

- CSS: revisar 320, 375, 768, 1024 y 1440 píxeles; evitar desbordamiento y deformación del logo; comprobar teclado, foco, contraste y ampliación.
- JavaScript: mejorar la interfaz conservando el contenido esencial; probar cada estado funcional y registrar cualquier limitación.
- Revisión: comprobar accesibilidad, metadatos, consistencia del contenido, enlaces y rendimiento con evidencia real.
- Publicación: verificar el alojamiento, la versión entregada y la URL final.

Estas son condiciones de trabajo pendientes de ejecución; no son resultados de pruebas de una interfaz.

## Verificaciones de la fase 0

Se leyó la guía actual del repositorio y se contrastó con la propuesta aportada. Se revisó el árbol completo de main y la lámina de marca. Se recuperó el contenido de la web y se identificó el enlace de contacto. Se registró la limitación de Instagram y se comprobaron las rutas citadas por el mensaje inicial.

En aquella revisión inicial aún no existía la interfaz. Las comprobaciones de la fase 1 se registran a continuación.

## Implementación y verificación de la fase 1

Archivos modificados: index.html y ESTADO_PROYECTO.md.
El archivo de identidad gráfica existente no cambia.

index.html contiene cabecera y navegación, inicio, presentación, programas agrupados, metodología, preguntas frecuentes, contacto y pie. Los enlaces a programas llevan a la sección de contacto. No se simulan inscripciones, mensajes enviados ni disponibilidad.

Las preguntas frecuentes utilizan details y summary, preparados para interacción nativa sin JavaScript. La funcionalidad de teclado aún necesita comprobarse en navegador.

### Comprobaciones ejecutadas

| Comprobación | Método | Resultado |
| --- | --- | --- |
| Conformidad y reglas del HTML | html-validate 11.21.0, configuración recomendada | 0 errores, 0 advertencias |
| Estructura | Parser y comprobaciones de semántica | Un main, un H1, idioma y metadatos correctos |
| Identificadores y referencias | Comprobación de IDs y aria-labelledby | 38 IDs únicos y referencias resueltas |
| Enlaces | Inspección de los 19 destinos | Fragmentos internos existentes; dos URLs externas HTTPS |
| Recursos | Resolución local de la ruta de imagen | Archivo existente y dimensiones comprobadas |
| Separación de capas | Inspección del documento | Sin CSS ni JavaScript enlazado o en línea |
| Información | Contraste con el inventario | Se conservan las exclusiones de datos no confirmados |

La validación se ejecutó de forma auxiliar, sin añadir dependencias ni archivos de pruebas al repositorio del sitio. Comando portable equivalente desde la carpeta del proyecto:

```text
npm exec --yes --package=html-validate -- html-validate --formatter json index.html
```

La versión observada del validador fue 11.21.0. En la última ejecución el resultado fue una lista vacía de incidencias.

### Límites de la verificación

El intento de lanzar Chromium con Playwright terminó antes de abrir la página: socket() failed: Operation not permitted. La apertura del archivo local en el navegador cloud también fue rechazada por su política de protocolos. No se eludieron esas restricciones.

Por ello no se atribuyen resultados a pruebas de teclado, consola, renderizado, encuadre del logo ni anchos de pantalla. Los enlaces externos se inspeccionaron como destinos, sin enviar mensajes ni acreditar que el servicio esté atendido.

### Clases e IDs preparados para las siguientes capas

Clases existentes:

```text
about brand brand__logo contact contact__details contact__link contact__link--instagram contact__link--whatsapp contact__list cta cta--primary cta--secondary faq faq-item faq-item__answer faq-item__question faq__items hero hero__actions hero__eyebrow hero__intro hero__title method method-step method-step__description method-step__title method__steps primary-nav primary-nav__link primary-nav__list program-card program-card__description program-card__link program-card__title program-grid program-group program-group__title programs section section__intro section__title site-footer site-footer__back site-footer__brand site-footer__copyright site-header site-main skip-link
```

IDs existentes:

```text
cabecera titulo-logo contenido inicio titulo-inicio nosotros titulo-nosotros programas titulo-programas categoria-tecnologia titulo-tecnologia programa-tecnologia-ia titulo-programa-tecnologia-ia programa-robotica titulo-programa-robotica categoria-comunicacion titulo-comunicacion programa-comunicacion titulo-programa-comunicacion programa-musica titulo-programa-musica categoria-estrategia titulo-estrategia programa-estrategia titulo-programa-estrategia categoria-oficios titulo-oficios programa-artes-culinarias titulo-programa-artes-culinarias programa-belleza titulo-programa-belleza metodologia titulo-metodologia preguntas titulo-preguntas contacto titulo-contacto pie
```

### Cómo abrir y revisar esta entrega

1. Descarga el repositorio desde GitHub mediante Code y Download ZIP.
2. Extrae los archivos conservando index.html y la imagen original en la misma carpeta.
3. Abre index.html en Chrome, Edge o Firefox. Esta fase tendrá la apariencia básica del navegador.
4. Comprueba que el logo horizontal se ve completo y que cada enlace del menú llega a su sección.
5. Usa Tab y Enter para probar Saltar al contenido. Abre y cierra las tres preguntas con teclado.
6. Revisa la legibilidad en una ventana estrecha y otra amplia. Comprueba los destinos de contacto.

No hace falta crear la carpeta ni pegar el código manualmente: index.html ya está en la raíz del repositorio. Si se copia a otra ubicación, debe conservarse junto al archivo de imagen con su nombre exacto y extensión real.

## Siguiente instrucción

Revisa index.html en un navegador y registra el resultado o los ajustes que hagan falta en esta fase. Cuando la estructura esté validada, continúa con la fase 2 de Loop_Desarrollo_Web_Keter_Do_X.md para crear assets/css/styles.css, aplicar la identidad gráfica y revisar el diseño responsive.
