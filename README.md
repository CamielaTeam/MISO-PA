# MISO-PA

Integrantes:
* Camilo Alejandro Sánchez Cruz ca.sanchezc12@uniandes.edu.co
* Lizeth Daniela Castellanos Alfonso ld.castellanos@uniandes.edu.co

# Video Semana 8
https://youtu.be/4fRA85hcTcI

# Entregables de Semana 8
* [Instalación del entorno](#instalacion_entorno)
* [Pruebas manuales](#pruebas_manuales)
* [Pruebas exploratorias](#pruebas_exploratorias)
* [Pruebas e2e](#e2e)
* [Pruebas de regresión visual](#visual_regression)
* [Pruebas de validación de datos](#validacion_datos)
* [Incidencias reportadas](https://github.com/CamielaTeam/MISO-PA/issues)

## Consideraciones
Se recomienda eliminar las carpetas de reportes para cypress y kraken luego de la ejecución de cada tipo de prueba, esto para evitar la generación de recursos múltiples veces (estos recursos pueden ser utilizados en estrategias de prueba como Visual Regression Testing)

<a name="instalacion_entorno"></a>

### Instalación del entorno

#### Pre-requisitos:

Tener una versión LTS de node reciente (preferiblemente v14.17.3) y una versión compatible de npm. La versión 14.17.3 será util para instalar ambas versiones de ghost
Instalar adb en su sistema operativo
Tener una versión actualizada de Google Chrome IMPORTANTE: Los tests de regresión visual se ejecutaron únicamente en este navegador
#### Configuración de ghost:

Instalar la versión 4.41.3 de ghost, para ello se puede ejecutar el siguiente comando ghost install 4.41.3 --local

Instalar la versión 3.42.0 de ghots, para ello se puede ejecutar el siguiente comando ghost install 3.42.0 --local

Compruebe que la ejecución de las dos versiones con los puertos correctos:

| Versión	| Puerto |
|---|---|
| 4.41.3	| http://localhost:2368/ghost/ |
| 3.42.0	| http://localhost:2369/ghost/ |

Ejecutar ambas versiones de ghost localmente (v4.41.3 en el puerto 2368 y v3.42.0 en el puerto 2369), **IMPORTANTE**: los sitios deben estar limpios, sin posts o tags creados

Para ambas versiones, crear un sitio con la siguiente configuración: Nombre del sitio: Test Nombre completo: Testing User Correo: test_ghost_g13@gmail.com Contraseña: prueba123123

#### Configuración del proyecto

Clonar el repositorio https://github.com/CamielaTeam/MISO-PA/ git clone https://github.com/CamielaTeam/MISO-PA/

Ejecutar npm install en la carpeta en la que se clonó el repositorio y cada subcarpeta de primer nivel que posea un package.json en su interior

<a name="pruebas_manuales"></a>

## Pruebas manuales
La estrategia planteada para realizar las pruebas manuales y el respectivo inventario de pruebas se encuentra en el siguiente [archivo PDF](https://uniandes-my.sharepoint.com/:b:/g/personal/ca_sanchezc12_uniandes_edu_co/EXyuNf0d-5tEtyxmDAEzn0AB7tPQJt_3FEOi-FIj_tPlMw?e=7somUX)


<a name="pruebas_exploratorias"></a>

## Pruebas exploratorias

### Pruebas con Monkey
Ingresar a la carpeta monkey-cypress y ejecutar `npm install` si no se ha ejecutado.

Luego, ejecutar `npx cypress run --config-file ./smart-monkey-config.json` en esa misma carpeta

Los resultados se verán en el directorio `monkey-cypress/results`

### Pruebas con Ripper
Ingresar a la carpeta RIPuppet y ejecutar `npm install` si no se ha ejecutado.

Luego, ejecutar `node index.js` en esa misma carpeta. Notar que los parámetros de ejecución del ripper son configurables en el archivo config.json (acá se puede configurar los niveles de profundidad de la exploración)

Los resultados se verán en el directorio `RIPuppet/results`


<a name="e2e"></a>

## Pruebas E2E

### Cypress
* Ejecutar el comando `npm run cypress:open` en a raíz del proyecto
* Hacer click en el archivo de pruebas que se desea ejecutar
### Kraken
* Ejecutar el comando `npm run kraken:run` en la raíz del proyecto


<a name="visual_regression"></a>

## Pruebas de regresión visual

### Cómo ejecutar tests de kraken
* Ejecutar el comando npm run kraken:run en la raíz del proyecto, Kraken ejecutará los tests en orden alfabético
* Si desea ejecutar tests específicos, deberá borrar los demás **NOTA** Los tests en la version 3.42 (nueva) empiezan con el prefijo {#No}-3-42-{nombre} Los screenshots de los tests estarán en la carpeta feature/web/screenshots

### Cómo ejecutar tests de cypress
* Ejecutar el comando `npm run cypress:open` en a raíz del proyecto
* Hacer click en cada paquete de tests, `NewVersionPage` y `NewVersionPost` generarán las capturas de pantalla necesarias para el reporte
* Los screenshots de los tests estarán en la carpeta `cypress/screenshots`
* **NOTA** : Para la generación de las imágenes para VRT, se debe dar click uno a uno a cada archivo de tests, de lo contrario, el generador de reportes no encontrará las imágenes especificadas

### Generación de reporte
En esta sección encontrará la información necesaria para generar reportes de regresión visual. También podrá ver los resultados de un reporte en el siguiente enlace

https://drive.google.com/drive/folders/1OAehaP05M9WhC0HBfRuBZkEoQRQmte70?usp=sharing

#### Pre-requisitos
* Haber ejecutado los test de Cypress de los paquetes o carpetas `NewVersionPage` y `NewVersionPost`
* Haber ejecutado los test de Kraken

#### Pasos
* Una vez ejecutados los tests para generar las capturas de pantalla, es necesario generar el reporte con el comando: `node main.js`
* Para visualizar los reportes generados, ejecutar el comando `npm run report:serve`
* Ir a la url localhost:8080
* Hacer click en la carpeta results, en donde se verán las carpetas con los reportes generados para cypress y Kraken
* Haga click en la carpeta de su preferencia (cypress o kraken)
* Haga click en el ultimo reporte generado
* Haga click en el escenario que desea ver
* Haga click en `report.html`
* Allí podrá ver la regresión visual del escenario, con screenshots en cada versión y comparación
* **IMPORTANTE**  : Si desea volver a ejecutar las pruebas de cypress y kraken, recomendamos eliminar las carpetas que contienen los screenshots cypress/screenshots y features/web/screenshots antes de ejecutar las pruebas




<a name="validacion_datos"></a>

## Escenarios de validación de datos

#### Ejecución de tests de Cypress
* Ejecutar el comando `npm run cypress:open` en a raíz del proyecto
* Hacer click en cada uno de los siguientes paquetes de tests: `APriori.feature`, `PseudoRandom.feature`, `Random.feature`. Cada archivo corresponde a una suite de tests con cada estrategia de generación de datos
#### Descripción de las estrategias usadas para la generación de datos
Se tomaron los siguientes formularios para los escenarios de prueba:
1. Login
2. Edición de perfil
3. Creación de miembro
4. Búsqueda en el sitio
5. Creación de tags
6. Edición del título del sitio

Estos escenarios de prueba se crearon desde cero con la herramienta Cypress

A estos formularios se les aplicaron las siguientes estrategias:

1. **Pool de datos A-priori**: Para esto, se creó en el archivo `cypress/integration/common/DataPool.js` el objeto `dataDict` con datos predefinidos para su uso en las pruebas que se encuentran alojadas en el archivo `cypress/integration/APriori.feature`. La creación de estos datos de prueba se realizaron a demanda de los tests según se iba requiriendo.
2. **Pool de datos (pseudo aleatorios)**: Para esto, se creó en el archivo `cypress/integration/common/DataPool.js` el objeto `pseudoRandDict` con datos generados al inicio de la compilación del proyecto por medio de la librería Faker-js
3. **Dinámicos aleatorios**: Para esto, se creó en el archivo `cypress/integration/common/DataPool.js` el objeto `randDict` que define funciones de Faker-js para generar datos aleatorios, siendo complementados con la definición del paso "I put {string} on the {string} element" definido en el archivo `cypress/integration/Random/random.js`. Con estas dos fuentes de generación de datos se generan datos aleatorios a medida que los escenarios de prueba lo requieren.

Las estrategias utilizadas ayudan a la centralización de la fuente de datos utilizada para completar los formularios y verificar la correctitud de las validaciones presentes.
