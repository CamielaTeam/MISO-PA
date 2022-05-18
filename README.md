# MISO-PA

Integrantes:
* Camilo Alejandro Sánchez Cruz ca.sanchezc12@uniandes.edu.co
* Lizeth Daniela Castellanos Alfonso ld.castellanos@uniandes.edu.co


## Entregables de Semana 7
* [Instrucciones para ejecutar escenarios de Cypress](#instrucciones_cypress)
* [Incidencias reportadas](https://github.com/CamielaTeam/MISO-PA/issues)
* [Descripción de estrategias utilizadas](#descripcion_estrategias)

## Instalación del entorno

#### Pre-requisitos:
* Tener una versión LTS de node reciente (preferiblemente v14.17.3) y una versión compatible de npm
* Tener una versión actualizada de Google Chrome **IMPORTANTE: Los tests con datos generados se realizaron únicamente en este navegador**

#### Configuración de ghost:
* Instalar la versión 4.41.3 de ghost, para ello se puede ejecutar el siguiente comando
`ghost install 4.41.3 --local`

* Compruebe que la ejecución de la versión de ghost como lo muestra el cuadro

| Versión | Puerto |
|---|---|
| 4.41.3  | http://localhost:2368/ghost/  | 

* **IMPORTANTE:** Crear un sitio con la siguiente configuración: 
  **Nombre del sitio:** Test
  **Nombre completo:** Testing User
  **Correo:** test_ghost_g13@gmail.com
  **Contraseña:** prueba123123


#### Configuración del proyecto
  
* Clonar el repositorio https://github.com/CamielaTeam/MISO-PA/
`git clone https://github.com/CamielaTeam/MISO-PA/`

* Ejecutar `npm install` en la carpeta en la que se clonó el repositorio

<a name="instrucciones_cypress"></a>
## Ejecución de tests de Cypress
* Ejecutar el comando `npm run cypress:open` en a raíz del proyecto
* Hacer click en cada uno de los siguientes paquetes de tests: `APriori.feature`, `PseudoRandom.feature`, `Random.feature`. Cada archivo corresponde a una suite de tests con cada estrategia de generación de datos

<a name="descripcion_estrategias"></a>
## Descripción de las estrategias usadas para la generación de datos
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