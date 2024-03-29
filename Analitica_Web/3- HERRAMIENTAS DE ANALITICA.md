# HERRAMIENTAS DE ANALÍTICA

En este apartado profundizaremos en el uso de:

- El uso de Google analytics y el uso de yahoo analytics.
- Conocer herramientas gratuitas de analítica web.
- Conocer herramientas de pago de analítica web.

## Mapa conceptual

![Herramientas de analítica web](./assets/analitica_web.png)

## Google Analytics

### ¿Qué es Google Analytics?

Analytics, desde ahora GA como se suele conocer por su acrónimo, es la herramienta que nos proporciona Google para poder analizar la audiencia, tráfico, comportamiento conversiones, entre otras métricas.

Esta herramienta funciona usando en conjunto cookies de navegador, las distintas API's del navegador y fragmentos de código Javascript para poder trabajar correctamente.

### Crear cuenta y configurar Google Analytics

Para poder configurar correctamente GA tenemos que hacer lo siguiente:

1. Crear una cuenta de GA en https://www.google.com/analytics e iniciar sesión.
2. Crear una nueva propiedad y configurar el entorno para poder analizar las métricas web de nuestro sitio. ** Este proceso suele ser bastante intuitivo.
3. Realizado los pasos anteriores, GA nos provee un ID para dicha propiedad y un fragmento JS que tendrémos que incluir en todas las páginas de nuestro sitio web.

### Incorporar código de seguimiento

Resumiendo el tutorial podriamos decir que tenemos que encontrar en las pestañas de configuración de la propiedad el código de seguimiento js que utilizaremos para darle seguimiento a nuestro sitio web.

Después de haber configurado correctamente el código JS en nuestro sitio web, comprobamos en el dashboard de GA que esta recopilando correctamente los datos.

### Cambiar configuración de cuenta de GA

** Información redundante acerca de la configuración de la propiedad a analizar.

### Gestión de usuarios

También podemos agregar o eliminar usuarios a la propiedad para que puedan utilizar y analizar los datos de nuestro sitio web. Podemos indicar que tipo de usuario queremos agragar y sus permisos.

### Funcionalidades básicas de GA

Uno de las principales funcionalidades de GA es poder analizar los datos usando la fecha como filtro. Esto nos permite tener análisis más precisos dependiendo de la temporalidad del estudio en cuestión.

En conjunto con las variables explicadas anteriormente, usamos estas en conjunto con la que veremos a continuació para tener un análisis más profundo respecto a los puntos que estemos estudiando.

#### Audiencia

Este punto se refiere al como identificamos al perfil del tráfico que nos visita. Las herramientas nos permiten obtener además de los datos geográficos, otros datos de interes para poder segmentar correctamente los datos de los visitantes.

- Visión General:

    En esta vista podemos ver de un vistazo los puntos más importantes que nos proporciona la herramienta para poder analizar rápidamente los datos de nuestro sitio web.

![Vista general](./assets/vista_general.jpg)

- Datos demográficos:

    Perfíl ordenado por edad y sexo de nuestros visitantes. **Esta información debemos activarla manualmente** mediante la configuración de la propiedad en el panel de administración de Google Analitycs.

![Datos demográficos](./assets/datos_demograficos.jpg)

- Interes:

    Al crear una propiedad en GA, debemos indicar el sector al cual pertenece nuestro sitio web. Esta configuración es importante porque nos ayuda mediante sus herramientas internas a saber los intereses de los visitantes. Esta métrica es bastante importante porque nos ayuda a saber en que sitios debemos enfocarnos para mejorar nuestras campañas de marketing y negociación con sitios de terceros.

![Sitios de interés](./assets/sitios_interes.jpg)

- Información Geográfica:

    Esta métrica nos indica la ubicación y el idioma de los visitantes. Muy interesante para webs que tienen un enfoque internacional. Esto nos ayuda a saber e que idiomas debemos priorizar la traducción y mejorar nuestras campañas de marketing dependiendo de la ubicación de neustros visitantes.

![Información geográfica](./assets/informacion_geografica.jpg)

- Comportamiento:

    Se trata de información que devuelve referente al comportamiento de las sesiones. Podremos ver los visitantes nuevos y los recurrentes, la frecuencia media de los usuarios (dependiendo del intervalo de tiempo el cual se este estudiando).

![Comportamiento usuarios](./assets/comportamiento.jpg)
    

- Tecnología:

    Datos sobre le navegador y la compañia telefónica del cual estan usando la red.

![Tecnología](./assets/tecnologia.jpg)


- Dispositivos móviles:

    Métricas detalladas sobre el formato del dispositivo utilizado en la visita (Móviles, tabletas o pc), incluso podemos saber le modelo exacto de los mismos.

![Dispositivos móviles](./assets/dispositivos.jpg)

#### Adquisición:

- Visión general:

    En esta sección veremos una visión general de los principales medidores que nos provee esta herramienta.

- Todo el tráfico:

    Se trata de un análisis más especifico de cada sección. En este apartado podremos  ver la Fuente/Medio la cual es el encargado de mostrar la información relativa a las campañas publicitarias de marketing.

- Adwords: 

En esta podremos ver un vistazo general de las campañas de Adwords que tengamos activas junto al departamento de Marketing. En este podremos observar de manera ráìda las pujas, las palabras claves, el tráfico, y las url's finales.

- Search Console: 

En este apartado podremos ver un resumen de las estadísticas más relacionadas con el seo de nuestros sitios web. Aunque nos muestra un breve resumen, lo mejor es ir directamente a la herramienta de Search Console para poder analizar mejor estos datos por separado. Esto lo podremos hacer en https://www.google.com/webmasters

- Medios Sociales: 

Tráfico proveniente de distintas redes sociales.

- Campañas: 

Este es el encargado de mostrar tanto las campañas de Adwords como las campañas que traen tráfico de webs externas. Aquí podremos monitorizar las camapañas personalizadas que comentamos anteriormente que usan los parámetros UTM_*.

#### Comportamiento:

- Visión General: 

Este nos permite ver una visión general de los datos de comportamiento de nuestro sitio web pero más enfocado a los datos provenientes de las páginas.

![Visión general comportamiento](./assets/vision_general_comportamiento.jpg)

- Flujo de comportamiento: 

Se trata de un esquema gráfico que nos permite ver el flujo de páginas por las cuales los usuarios visitan a lo largo de su sesión por nuestro sitio web.

![Flujo comportamiento](./assets/flujo_comportamiento.jpg)

- Contenido del sitio: 

Información relativa a todas las páginas del dominio. Nos permite ver de un vistazo informació de todas las páginas y sus datos para observer cuales estan aumentando o reduciendo sus visitas a lo largo del tiempo.

![Visitas comportamiento](./assets/visitas_comportamiento.jpg)

- Velocidad del sitio:

Mediante esta sección podremos ver los tiempos de carga de nuestro sitio web y cada una de sus páginas para poder optimizar el rendimiento de las mismas.

![Tiempos carga sitio](./assets/tiempos_carga.jpg)

- Busquedas en el sitio:

Mediante esta sección podremos observar mediante el buscador interno del sitio, cuales son las busquedas que los usurios suelen realizar y poder estudiar cuales son los productos o servicios de mayor interes para nuestros usuarios.

![Busquedas internas](./assets/busquedas_internas.jpg)

#### Conversiones:

- Objetivos:

En este apartado debemos haber previamente definido los objetivos que deseamos que nuestro sitio web satisfaga mediante el panel de administración del dominio en GA.

- Comercio Electrónico:

Al igual que el paso anterior, debemos definir los objetivos manualmente en el panel. Estas están más enfocadas a las conversiones de tipo comercio electronico teniendo apartados especificos para definir y capturar las conversiones de estos.

- Embudos multicanal:

Los embudos estan diseñados para poder guiar a los usuarios al lugar donde se producirá la conversión en cuestión. Esto nos permite analizar en que parte del embudo los usuarios abandonan el proceso de conversión.

---

Hay muchos más conceptos que abarcar de GA pero estos no se van a tocar debido a que se requiere de un nivel más avanzado de conocimientos para poder sacarle todo el provecho a dicha información.

## Yahoo Analytics

Yahoo Analytics dejo de funcionar a partir del año 2012 

## Otras herramientas gratuitas

Ga es el lider indiscutible en cuanto se refiere a la recopilación y análisis de datos de comportamiento de los usurios. Pero eso no implica que no hayan otras herramientas que cuenten con características similares para el análisis de comportmaiento de los usuarios. A continuación veremos unas cuantas:

- AWSTATS:

Se trata de una herramienta enfocada en el análisis de datos ya sea de correos electronicos, ftps, webs etc... Su funcionamiento está más enfocado en el análisis de los datos que recopila el servidor mediante el log. Es una buena herramienta aunque cuenta con menos análisis que GA.

- WEBALIZER:

Es una pequeña herramienta desarrollada en C que nos permite obtener reportes de nuestro sitio web. Esta también funciona recopilando y manejando los datos que genera el servidor mediante logs. Este los analiza y devuelve una HTMl la cual nos permite revisar los datos análizados.

- PIWIK:

Esta es una alternativa OS a GA que también nos proporciona herramientas para el reporte de datos generados de nuestros sitios web.

Caracteristicas de PIWIK:

- Privacidad: Piwik prioriza la privacidad de los usuarios de manera que los datos que estos generen no sean utilizados ni vendidos a terceros como ocurre en el caso de GA.

- Experiencia del usuario: Al ser OS nos permite ver el código y modificarlo a nuestro gusto de manera que podamos mejorar y extender las fucionalidades que nos ofrece le software base a nuestro gusto.

- Capacidad: la herramienta la debemos gestionar mediante nuestros propios servidores por lo que su eficacia dependerá directamente de los recursos que le proporcionemos a lamisma para poder operar.

![Dashboard de Piwik](./assets/PIWIK_dashboard.jpg)

### MAPAS DE CALOR

No es una herramienta en si, sino un tipo de análisis muy útil que nos permite analizar el comportamiento de nuestros usuario observando en que secciones de cada página suelen enfocarse más.

### ClickHeat

Al igual que Mapas de calor, es un tipo de análisis que nos ayuda a identificar los sitios más clicados dentro de nuestro sitio web con el fin de poder analizar tanto el comportamiento como mejorar los aspectos de UX/UI de nuestra web.

## HERRAMIENTAS DE PAGO

- ADOBE SYTE CATALYST

Es una herramienta de gran potencial que permite realizar las tareas de análisis y reporte de os sitios web en conjunto de datos de otras herramientas.

- KISSMETRICS

Esta herramienta está más enfocada en los datos del usuario que nos visita que en los datos de nuestra web. Esto con el fin de poder generar reportes de que tipo de usuarios son los que acceden a nuestra  web.

- COREMETRIX

Herramienta que nos provee de datos en tiempo real de las principales métricas de nustra web.

- WEBTRENDS

Parecida a PIWIK priorizando la privacidad de los datos de nuestros clientes.

- MIXPANEL

Esta herramienta está más enfocada en el análisis de los datos de los dispositivos moviles.

- Clicktale

Esta herramienta nos da un análisis más detallado del comportamiento de nuestros usuarios permitiendonos hasta ver una emulación de las accionas que hacen nuestros usuarios en nuestra web.

Entre otras cosas, clicktale nos permite trackear el movimiento del raton del usuario, Mapas de calor del sitio web y analisis de conversiones.

![Clicktale](./assets/clicktale.jpg)
