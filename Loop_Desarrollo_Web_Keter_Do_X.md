# Loop de desarrollo web de Keter Do X

Fecha de preparación: 31 de octubre de 2026.

Versión 1.1 Actualizada con la transcripción aportada por el usuario.

Este documento contiene un prompt maestro y los mensajes para desarrollar la web por fases. Copia el prompt maestro una vez y ejecuta después una fase por mensaje. El objetivo inicial es una página de presentación en HTML5, CSS y JavaScript, con contenido real y archivos separados. PHP y MySQL se incorporarán cuando exista una necesidad concreta de servidor o almacenamiento.

El loop es: pedir un cambio acotado, implementarlo, probarlo, aportar evidencia, corregir y volver a probar. Una fase termina cuando sus criterios se cumplen y se registra el resultado. Pedir al modelo que revise su propia respuesta sin ejecutar pruebas aporta una revisión, pero no demuestra que el sitio funcione.

## Base del proyecto y fuentes

Se revisaron la propuesta Word adjunta, la imagen de identidad visual y la página https://ktrdx.top/. La propuesta sirve para orientar la arquitectura; sus recomendaciones no acreditan que servicios, instalaciones o condiciones comerciales ya existan.

El sitio publica formación en tecnología e IA, comunicación, estrategia, robótica, producción musical, cocina y belleza; también describe una metodología de aprender, crear y producir. Se utilizará esta información como contenido publicado por la marca. La oferta vigente, las modalidades, los horarios, los precios y las condiciones de inscripción requieren confirmación antes del lanzamiento.

Se analizó la transcripción del video de YouTube facilitada por el usuario, desde 0:00 hasta 53:51. La revisión se basa en ese texto y no en una reproducción directa del video. Instagram sigue pendiente de revisión. Las observaciones históricas del tutorial sobre capacidades de ChatGPT no se adoptan como descripciones actuales del producto.

| Fuente | Uso permitido en el proyecto |
| --- | --- |
| Instrucciones actuales del usuario | Objetivo, tecnología, identidad y restricción de no inventar historias |
| Logo y paleta adjuntos | Referencia visual y códigos de color rotulados |
| Propuesta y Canvas de Mejora Web | Ideas de navegación, agrupación y conversión que deben evaluarse |
| https://ktrdx.top/ | Información publicada por la marca, con fecha de revisión |
| https://www.instagram.com/keterdox/ | Enlace facilitado por el usuario; publicaciones pendientes de revisión |
| Texto pegado.txt y https://www.youtube.com/watch?v=8OufESMHw64 | Transcripción aportada por el usuario; referencia de la secuencia de desarrollo y de los errores mostrados |

## Aprendizajes del video incorporados al loop

El tutorial muestra un desarrollo iterativo: estructura, estilos, datos, interacciones, depuración, repositorio y publicación. Para Keter Do X se adapta esa secuencia a contenido real y a pruebas explícitas. Las correcciones técnicas de esta guía son recomendaciones para el proyecto; no todas se explican de esa forma en el video.

| Tramo de la transcripción | Lo que muestra | Aplicación a Keter Do X |
| --- | --- | --- |
| 1:17 a 6:18 | Elección de HTML, CSS y JavaScript; creación de index.html y prueba en navegador | Fijar la tecnología antes de generar archivos y comprobar cada entrega |
| 6:21 a 10:13 | Archivo CSS separado, enlace al HTML y ajustes de color | Entregar también la integración del archivo y conservar la paleta de marca |
| 15:09 a 24:58 | Errores de nombres y extensiones; datos en JSON; un cambio no solicitado a PHP | Registrar rutas exactas y contrato de datos; mantener la tecnología acordada |
| 25:00 a 27:55 | JavaScript se ejecuta antes de que exista el contenedor | Usar defer para el script externo y comprobar los elementos que necesita |
| 28:00 a 31:45 | Ajustes de columnas e imágenes mediante retroalimentación | Verificar la cuadrícula y el encuadre en móvil y escritorio |
| 31:45 a 49:16 | Filtros que fallan por tipos de datos, símbolo de moneda y opción de todos los precios | Conservar precios numéricos, separar el formato y probar cada estado del filtro |
| 49:18 a 53:13 | Repositorio y publicación en un servicio de alojamiento | Guardar versiones y comprobar la URL publicada, además de la copia local |

La ausencia de errores de consola no demuestra que un filtro devuelva resultados correctos. Cada prueba debe comparar el resultado observado con los datos reales que deberían aparecer.

## Identidad visual

Se toman los códigos escritos en la guía adjunta, ya que una captura comprimida puede mostrar los colores de forma distinta. El logo mantiene su proporción, sus colores y su composición. Cuando esté disponible el archivo original, se usará ese recurso en lugar de redibujarlo o agrandar la captura hasta perder nitidez.

| Color | Código | Aplicación propuesta |
| --- | --- | --- |
| Azul marino | #1B2A4A | Tipografía principal, navegación y superficies oscuras |
| Naranja | #EB7A2C | Acción principal, con texto azul marino |
| Verde azulado | #1E9B8A | Detalles gráficos y acentos; verificar contraste según uso |
| Verde | #8CC63F | Detalles y etiquetas con texto azul marino |
| Azul | #2E75B6 | Botones secundarios con texto blanco |
| Blanco | #FFFFFF | Superficie neutral de apoyo |

La dirección visual propuesta utiliza fondos claros, tipografía legible, espacios amplios y pocos acentos simultáneos. Los cinco colores no necesitan aparecer en cada bloque.

El cálculo de contraste da aproximadamente 4,98:1 para azul marino sobre naranja, 6,95:1 para azul marino sobre verde y 4,84:1 para blanco sobre azul. Blanco sobre naranja da 2,86:1, insuficiente para texto normal. Las combinaciones se deben revisar también en estados de foco, hover y selección. Estos cálculos no sustituyen una auditoría de accesibilidad completa.

## Archivos y alcance

| Archivo | Función | Momento |
| --- | --- | --- |
| index.html | Contenido y estructura semántica | Fase 1 |
| assets/css/styles.css | Diseño responsive y estados visuales | Fase 2 |
| assets/js/main.js | Interacciones y mejoras progresivas | Fase 3 |
| assets/data/programas.json | Catálogo estructurado, solo si se justifica separar los datos | Fase 3 opcional |
| assets/img/ | Logo e imágenes reales autorizadas | Según disponibilidad |
| ESTADO_PROYECTO.md | Decisiones, versión, fuentes, pruebas y pendientes | Desde fase 0 |
| robots.txt y sitemap.xml | Configuración de rastreo para el dominio real | Preparación para publicación |
| contacto.php y configuración de servidor | Procesamiento real de formularios, si se requiere | Fase opcional posterior |

HTML, CSS y JavaScript cubren la primera versión visual. Un formulario que valide campos en el navegador todavía necesita un destino real para entregar una solicitud. PHP necesita un servidor compatible y MySQL necesita una base de datos configurada. No se añadirá una base de datos para una página que únicamente presenta información y enlaza a un canal de contacto.

Desde la primera fase se utilizará una carpeta de proyecto y una vista previa en navegador. Si se añade fetch para leer JSON, la prueba debe hacerse mediante HTTP local y no abriendo index.html con file://. El prompt de la fase debe proporcionar instrucciones compatibles con el equipo del usuario, por ejemplo mediante Live Server si está disponible, y explicar cómo abrir la consola y la pestaña Red o Network.

## Prompt maestro

Copia este bloque en el primer mensaje de trabajo, junto con la propuesta y los recursos de marca.

```text
Actúa como desarrollador web senior y diseñador UX/UI con conocimientos de accesibilidad, SEO técnico y contenido claro para buscadores y sistemas de respuesta.

Vamos a desarrollar la web de Keter Do X. La marca utiliza el descriptor “Academia · Cowork · Media Lab”; confirma la oferta operativa antes de crear páginas, precios o servicios específicos para cada línea. Estamos empezando: presenta la propuesta real de la marca con un tono profesional y cercano.

OBJETIVO
Crear una web que explique la oferta disponible, permita encontrar programas y facilite solicitar información. Primera entrega: una página principal en HTML5, CSS y JavaScript vainilla, organizada para poder incorporar páginas de programas más adelante.

FUENTES
Usa mis instrucciones, el logo y la paleta adjuntos, la propuesta Word, https://ktrdx.top/ y https://www.instagram.com/keterdox/.
El video de referencia es https://www.youtube.com/watch?v=8OufESMHw64.
La transcripción suministrada en Texto pegado.txt es la fuente disponible para analizar el video. Usa sus aprendizajes sin copiar datos ficticios ni observaciones históricas sobre ChatGPT como hechos vigentes.
Registra qué pudiste consultar. Si una fuente no es accesible, informa la limitación y continúa con lo disponible.
Distingue información confirmada por mí, publicada por la marca, propuesta de diseño y dato pendiente. Si hay una contradicción comercial, déjala pendiente y avanza con el resto. La propuesta Word contiene sugerencias que deben verificarse.

CONTENIDO
Usa solo información respaldada. Omite cifras de alumnos, años de trayectoria, testimonios, rankings, alianzas, certificaciones, becas, financiamiento, horarios, precios o instalaciones que carezcan de confirmación suficiente.
Los reclamos promocionales del sitio anterior no prueban liderazgo o resultados. Los planes fechados necesitan revisión de vigencia.
Mantén los datos pendientes en comentarios de desarrollo y en ESTADO_PROYECTO.md. Una duda importante sobre un servicio debe resolverse antes de publicarlo.
Usa imágenes reales autorizadas. Las imágenes conceptuales deben identificarse como tales y no presentarse como fotos del campus o de alumnos.

TECNOLOGÍA
Usa index.html, assets/css/styles.css y assets/js/main.js.
Implementa cada capa por separado y conserva clases e IDs estables.
Registra nombres, extensiones y rutas exactas de los recursos. Si separas el catálogo en JSON, define sus campos y tipos antes de implementar la lectura. Conserva el contenido esencial en HTML y evita dos copias mantenidas manualmente del mismo catálogo; justifica cómo conservarás su coherencia o mantén el catálogo en HTML.
Reserva PHP y MySQL para una fase posterior si se requieren formularios reales, gestión de inscripciones o contenido administrable. No cambies la tecnología por conveniencia.

IDENTIDAD
Conserva el logo original, sus proporciones y colores.
Paleta: #1B2A4A, #EB7A2C, #1E9B8A, #8CC63F y #2E75B6.
Usa superficies claras neutrales, azul marino como base y acentos con moderación. Verifica el contraste de cada combinación.
Busca una composición limpia y coherente con el logo, con jerarquía tipográfica y espacio suficiente.

ARQUITECTURA INICIAL
Propón cabecera, presentación principal, oferta académica agrupada, metodología si está respaldada, preguntas frecuentes verificadas, contacto y pie.
Usa agrupaciones comprensibles a partir de la oferta real. Confirma si estas agrupaciones serán nombres comerciales o solo etiquetas de navegación.
Incluye una sección cuando haya contenido suficiente y verificable. Reserva testimonios, galería y condiciones de pago hasta disponer de material confirmado.

FORMA DE TRABAJO
Trabaja únicamente en la fase solicitada.
Cada iteración debe incluir objetivo, alcance, archivos modificados, entrega, pruebas y resultado.
Entrega completos los archivos modificados, uno por bloque, indicando su ruta. Evita fragmentos incompletos y “el resto sigue igual”.
Planifica entregas pequeñas que quepan completas. Si una salida se corta, identifica el archivo como incompleto y vuelve a entregarlo completo por separado antes de probarlo.
Si trabajo directamente con archivos, aplica los cambios y resume el resultado sin repetir todo el código en el chat.
Corrige el defecto dentro del menor alcance razonable y verifica que lo previamente funcional sigue funcionando.
Registra versión, fase, decisiones, fuentes, comprobaciones y pendientes en ESTADO_PROYECTO.md.
Distingue entre prueba ejecutada, revisión por lectura y prueba pendiente. Declara una fase validada únicamente con evidencia suficiente.
Cuando una interacción falle, registra valores, tipos de datos y resultado esperado antes de proponer otra corrección. Una consola sin errores no sustituye las pruebas funcionales.
Si careces de herramientas de ejecución, proporciona los pasos de prueba y espera su resultado para cerrar la fase.

CRITERIOS GENERALES
Estructura semántica, idioma español, navegación clara, contenido esencial accesible sin JavaScript, enlaces reales y archivos sin rutas rotas.
En la versión diseñada: adaptación a 320, 375, 768, 1024 y 1440 píxeles, sin desplazamiento horizontal involuntario.
Navegación por teclado, foco visible y contraste mínimo de 4,5:1 en texto normal; aplicar las excepciones de WCAG para texto grande.
Interacciones sin errores de consola atribuibles al sitio.
SEO con metadatos coherentes y contenido visible. Para AEO y GEO, usa respuestas claras, hechos consistentes y datos estructurados pertinentes. La aparición en buscadores o respuestas de IA no es un resultado garantizado.
Una solicitud se considera enviada solo cuando el canal real confirme la entrega; abrir WhatsApp o validar campos no confirma un envío.

PRIMERA ACCIÓN
Ejecuta únicamente la fase 0: inventario de contenido y recursos, propuesta de estructura, datos pendientes y criterios de aceptación. Entrega el estado inicial del proyecto. La siguiente instrucción indicará cuándo comenzar la fase 1.
```

## Mensajes para ejecutar las fases

### Fase 0 Registro y alcance

La primera acción del prompt maestro inicia esta fase. Su resultado debe contener un inventario breve que permita identificar qué información puede usarse.

| Dato o recurso | Estado | Fuente | Acción antes del lanzamiento |
| --- | --- | --- | --- |
| Nombre y descriptor de marca | Aportado por el usuario | Logo adjunto | Mantener escritura consistente |
| Paleta | Aportada por el usuario | Guía visual adjunta | Usar los códigos rotulados |
| Oferta publicada | Publicada por la marca | Web existente | Confirmar vigencia |
| Contacto y ubicación exacta | Por comprobar | Recurso verificable pendiente | Confirmar antes de enlazar o insertar mapa |
| Testimonios, fotos, alianzas y resultados | Por comprobar | Material autorizado pendiente | Incorporar únicamente con respaldo |

La fase termina cuando el alcance y las fuentes están registrados, los pendientes están identificados y existe una estructura que se puede implementar sin inventar contenido.

### Fase 1 Estructura HTML

```text
Ejecuta la fase 1 con el alcance de la fase 0.

Genera únicamente index.html con HTML5 semántico. Todavía no agregues CSS, estilos en línea, JavaScript ni referencias a archivos que no existan.

Incluye doctype, lang="es", charset, viewport, title y meta description coherentes. Usa header, nav, main, secciones con títulos y footer. Mantén un H1 principal y una jerarquía de encabezados comprensible.

Crea enlaces internos reales y un enlace para saltar al contenido. Usa botones para acciones y enlaces para navegar. Puedes utilizar details y summary en preguntas frecuentes verificadas.

Integra únicamente recursos disponibles. Si falta el archivo utilizable del logo, usa temporalmente el nombre de marca como texto y registra el recurso pendiente. Si falta un canal de contacto confirmado, dirige el CTA a una sección informativa de contacto sin inventar números o direcciones.

Entrega el archivo completo, el listado de clases e IDs y los pasos para abrirlo y validarlo. Actualiza el registro del proyecto.

Explica cómo crear la carpeta, guardar el archivo con su extensión real y abrir la vista previa. Ajusta las instrucciones al entorno disponible, sin exigir una herramienta concreta cuando el trabajo pueda hacerse con otra.

Aceptación: contenido legible sin estilos, HTML sin errores de validación, IDs únicos, anclas válidas y recursos sin rutas rotas. Identifica qué pruebas ejecutaste y cuáles siguen pendientes.
```

Comprueba que los títulos y la navegación aparecen en el orden correcto. El resultado de esta fase tendrá la apariencia sencilla del navegador; el diseño visual pertenece a la siguiente.

### Fase 2 Diseño CSS

```text
Ejecuta la fase 2 sobre el HTML validado.

Crea assets/css/styles.css y enlázalo desde index.html. Aplica un diseño mobile first, una cuadrícula flexible y variables CSS para la paleta.

Conserva el logo, la estructura y el contenido aprobados. Usa espacio suficiente, tipografía legible y una sola acción principal por bloque. Naranja con texto azul marino puede servir para el CTA principal; verifica también sus estados interactivos.

Comprueba que las imágenes caben en sus contenedores. Define dimensiones y encuadre: el logo debe verse completo y sin deformación; las fotografías pueden recortarse únicamente cuando el contenido y el diseño lo permitan. La cantidad de columnas debe adaptarse al ancho disponible.

Implementa estados de foco visibles, botones cómodos de pulsar —objetivo de diseño de 44 por 44 píxeles— y respeto por prefers-reduced-motion. Mantén la navegación utilizable mientras no exista JavaScript.

Entrega completos los archivos modificados, explica las decisiones visuales y actualiza el registro.

Aceptación: revisar 320, 375, 768, 1024 y 1440 píxeles; ausencia de desbordamiento horizontal; logo sin deformación; textos legibles al ampliar; contraste adecuado y navegación por teclado. Aporta capturas si tienes herramientas; en caso contrario deja la revisión visual pendiente con instrucciones.
```

Revisa el diseño en móvil y escritorio, incluidos el menú abierto, el foco de los controles y los textos largos. Describe cualquier cambio visual de forma concreta.

### Fase 3 Interactividad JavaScript

```text
Ejecuta la fase 3 sobre la versión validada.

Crea assets/js/main.js y enlázalo con defer. Implementa únicamente las interacciones que el diseño necesita, como menú móvil y filtros de programas.

Comprueba los IDs y el momento de inicialización antes de modificar el DOM. Verifica que los archivos se cargan desde sus rutas exactas.

Si el catálogo funciona bien en HTML, añade filtros sobre esas tarjetas. Introduce assets/data/programas.json solo si aporta una mejora concreta y resuelve cómo mantener el contenido esencial accesible sin JavaScript sin duplicar manualmente los datos.

Si usas JSON, define identificador, nombre, categoría, descripción, ruta de imagen y estado de publicación. Incluye únicamente registros reales respaldados. Precio, moneda, duración y modalidad son opcionales y necesitan confirmación. Un precio desconocido se omite o se representa con null; nunca se convierte en cero. Los precios confirmados se guardan como números, separados de la moneda y del texto que se muestra. Aplica Intl.NumberFormat al presentarlos.

Si usas fetch, sirve el proyecto mediante HTTP local, comprueba response.ok y valida el JSON recibido. Diferencia estados de carga, error y ausencia de resultados. Una falla de carga debe conservar el contenido esencial o una vía útil de navegación y contacto.

El menú debe actualizar aria-expanded, admitir teclado y cerrar con Escape cuando corresponda, manteniendo un foco coherente. Usa controles HTML nativos cuando resuelvan la necesidad. El contenido principal y una ruta de navegación deben seguir disponibles sin JavaScript.

Si existe un WhatsApp confirmado, crea un enlace con el mensaje correctamente codificado y explica que el visitante debe enviarlo desde WhatsApp. Si hay un formulario, implementa su envío solo cuando exista un destino real. La validación local se identifica como validación; una demostración no debe mostrar “enviado” ni guardar datos personales.

Entrega completos los archivos modificados y actualiza el registro.

Aceptación: menú, filtros y contacto funcionan por ratón y teclado; no hay errores de consola atribuibles al sitio; las secciones principales siguen accesibles al desactivar JavaScript. Comprueba todos los programas, cada categoría, combinaciones de filtros, ningún resultado y restablecimiento. Si hay precios confirmados, prueba valores límite y la opción “todos los precios” como ausencia de restricción, sin confundirla con un precio de cero. Si hay carga de JSON, prueba también un fallo de carga. Compara los resultados con los registros reales. Registra la evidencia disponible.
```

### Fase 4 Accesibilidad SEO y cierre

```text
Audita la versión actual y corrige los defectos encontrados dentro del alcance.

Accesibilidad: teclado, orden de foco, nombres accesibles, etiquetas, contraste, ampliación de texto, alternativas de imágenes y reducción de movimiento. Revisa con herramientas y comprobación manual; una puntuación automática no demuestra por sí sola conformidad completa con WCAG.

SEO: idioma, title, description, encabezados, enlaces rastreables, contenido visible y medios optimizados. Configura canonical y Open Graph solo con URL de producción y recursos reales confirmados. Prepara robots.txt y sitemap.xml cuando corresponda al dominio y a las páginas existentes. Distingue la configuración de pruebas de la que permitirá indexar el sitio final.

AEO: redacta preguntas y respuestas breves con datos confirmados.
GEO: mantén nombre, actividad, ubicación y datos de contacto consistentes; aporta contexto verificable en texto visible.
Agrega JSON-LD pertinente, por ejemplo Organization o EducationalOrganization, únicamente con propiedades verdaderas y coherentes con la página. El bloque JSON-LD es información estructurada, no lógica de interfaz. Evita reseñas, calificaciones, precios o certificaciones sin evidencia.

Rendimiento: comprueba peso y dimensiones de imágenes, estabilidad visual y carga de recursos. Usa lazy loading para imágenes fuera del primer bloque cuando corresponda. Si ejecutas Lighthouse, informa condiciones y resultados reales; registra objetivos pendientes sin inventar puntuaciones.

Entrega los archivos corregidos y una tabla con criterio, método, resultado y evidencia. Repite solo las pruebas afectadas por cambios y las comprobaciones de regresión necesarias.

Cierra como “prototipo validado” cuando las pruebas locales estén completas. Reserva “listo para publicar” para una versión sin datos ficticios, rutas rotas o funciones de demostración y con configuración de producción comprobada. Mantén el estado “publicado y comprobado” pendiente hasta verificar el despliegue real.
```

Las prácticas de SEO siguen siendo aplicables a las funciones de IA de Google. Su documentación indica que no existe un marcado especial obligatorio para aparecer en ellas. Las preguntas frecuentes pueden ayudar al lector, pero no se debe prometer que obtendrán resultados destacados ni citas en respuestas de IA.

### Fase 5 Versiones y publicación

Esta fase agrega el cierre del tutorial al loop. Preparar la publicación no equivale a haber desplegado el sitio. Se conserva el dominio vigente mientras no se decida un cambio.

```text
Ejecuta la fase 5 sobre la versión que haya superado las pruebas.

Prepara el proyecto para su entrega y publicación. Comprueba qué repositorio y alojamiento se usarán antes de dar instrucciones específicas. Registra una versión recuperable en Git si está disponible; si no lo está, entrega un paquete con los archivos y un registro de versión. Conserva las versiones que ya funcionan.

Verifica que el alojamiento admite la tecnología final. La versión de HTML, CSS y JavaScript necesita alojamiento estático; una futura integración PHP y MySQL necesitará un servicio compatible o un servidor de aplicación separado. No supongas que publicar HTML ejecutará PHP.

Entrega instrucciones concretas según la plataforma elegida y su documentación vigente. Si la publicación ya está autorizada y dispones de acceso suficiente, complétala y comprueba el resultado. Si falta una cuenta o una decisión necesaria, termina primero la preparación y señala únicamente el dato o acceso que impide desplegar.

Después de publicar, abre la URL final y repite las comprobaciones esenciales: navegación, logo, imágenes, estilos, JavaScript, filtros y contacto en móvil y escritorio. Revisa especialmente rutas, mayúsculas y minúsculas de nombres, archivos JSON y configuración de indexación. Confirma que la versión servida coincide con la entregada.

Entrega URL, versión publicada, pruebas ejecutadas y pendientes. Usa “publicado y comprobado” únicamente cuando haya evidencia de la URL en funcionamiento. Si solo preparaste el proyecto, indica “listo para publicar” y el paso pendiente.
```

## Plantilla para cerrar cada vuelta

Copia este mensaje al encontrar un problema. Adjunta únicamente la evidencia pertinente y el código necesario.

```text
Proyecto: Keter Do X
Fase y versión:
Archivo o componente:
Navegador y sistema:
Ancho de pantalla:
Pasos para reproducir:
Resultado esperado:
Resultado observado:
Error exacto de consola o captura:
Código actual relevante:
Valor y tipo de las variables relevantes, si aplica:
Solicitud fallida en Red o Network y su estado HTTP, si aplica:
Alcance permitido para la corrección:

Corrige la causa, entrega completos los archivos modificados y explica qué cambió. Repite la prueba que falló y comprueba las funciones relacionadas. Registra evidencia y pendientes. Mantén la fase actual hasta cumplir sus criterios.
```

Ejemplo:

```text
Fase 2, versión 0.2. En Chrome, a 375 píxeles de ancho, el botón de contacto sale del contenedor y aparece desplazamiento horizontal. Espero que el botón quede dentro del ancho disponible. Ajusta el CSS del contenedor y del botón, sin modificar los textos. Vuelve a revisar 375 y 1440 píxeles y entrega el archivo CSS actualizado.
```

Si una corrección no resuelve el mismo defecto tras dos intentos, pide una reproducción mínima: versión actual de los archivos implicados, pasos y evidencia. El siguiente cambio debe responder a una causa comprobada; la repetición por sí sola no valida una solución.

## Registro para retomar el proyecto

```text
Proyecto: Keter Do X
Versión:
Fase actual:
Objetivo de la versión:
Archivos vigentes:
Contenido confirmado y fuentes:
Decisiones de diseño:
Pruebas ejecutadas y resultados:
Revisión por lectura:
Pruebas pendientes:
Defectos abiertos:
Datos o recursos faltantes:
Contrato de datos y archivos JSON, si aplica:
Versión recuperable o referencia Git, si aplica:
URL y versión desplegada, si aplica:
Siguiente paso:
Estado: en desarrollo / pendiente de prueba / prototipo validado /
listo para publicar / publicado y comprobado
```

Al retomar en otro chat, adjunta los archivos actuales y este registro. Las capturas muestran apariencia, pero no sustituyen el código vigente ni las pruebas de funcionamiento.

## Fase 6 opcional PHP y MySQL

Úsala después de validar la interfaz, si realmente se necesitan solicitudes almacenadas, inscripciones o un panel de administración.

```text
Diseña e implementa la integración de servidor manteniendo la interfaz validada. Conserva PHP y MySQL como tecnologías requeridas.

Primero define qué datos se necesitan, quién podrá consultarlos y cuándo se considera completado el envío. Confirma si basta la entrega por correo o si debe existir almacenamiento; utiliza MySQL cuando la función lo requiera.

Implementa validación del lado del servidor, consultas preparadas si se usa base de datos, credenciales fuera de archivos públicos, controles de acceso y protección apropiada frente al abuso y la falsificación de solicitudes cuando corresponda. Recoge únicamente datos necesarios y comunica su finalidad con información real de la organización.

El navegador debe diferenciar error de validación, fallo del servidor, fallo de red y confirmación real de recepción. Conserva los datos del formulario ante errores cuando sea apropiado.

Entrega esquema de datos si aplica, archivos completos, instrucciones de configuración y pruebas reproducibles de éxito y error. Registra cualquier configuración que todavía dependa del alojamiento.
```

## Referencias técnicas

- Google Search Central, AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- W3C WAI, Contrast Minimum: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum
- W3C WAI, Target Size Minimum: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- Validador HTML de W3C: https://validator.w3.org/nu/
- MDN, elemento script y atributo defer: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script
- MDN, uso de fetch y comprobación de respuestas: https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
- MDN, Intl.NumberFormat: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
- GitHub Docs, creación de un sitio y limitaciones de PHP en GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

Los 44 píxeles de los controles son un objetivo de diseño adoptado para este proyecto. El criterio WCAG 2.2 AA de tamaño mínimo utiliza 24 píxeles CSS con excepciones y condiciones de separación. La evaluación completa debe revisar los criterios que correspondan.

