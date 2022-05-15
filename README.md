# MISO-PA

Integrantes:
* Camilo Alejandro Sánchez Cruz ca.sanchezc12@uniandes.edu.co
* Lizeth Daniela Castellanos Alfonso ld.castellanos@uniandes.edu.co

## Cómo ejecutar los tests

####Pre-requisitos:
* Tener una versión LTS de node reciente (preferiblemente v14.17.3) y una versión compatible de npm. La versión 14.17.3 será util para instalar ambas versiones de ghost
* Instalar adb en su sistema operativo

####Configuración de ghost:
* Instalar la versión 4.41.3 de ghost, para ello se puede ejecutar el siguiente comando
`ghost install 4.41.3 --local`

* Instalar la versión 3.42.0 de ghots, para ello se puede ejecutar el siguiente comando
  `ghost install 3.42.0 --local`
* Compruebe que la ejecución de las dos versiones con los puertos correctos de

| Versión | Puerto |
|---|---|
| 4.41.3  | http://localhost:2368/ghost/  | 
| 3.42.0  | http://localhost:2369/ghost/  |

* Ejecutar ambas versiones de ghost localmente (v4.41.3 en el puerto 2368 y v3.42.0 en el puerto 2369), **IMPORTANTE:** los sitios deben estar limpios, sin posts o tags creados

* Para ambas versiones, crear un sitio con la siguiente configuración: 
  **Nombre del sitio:** Test
  **Nombre completo:** Testing User
  **Correo:** test_ghost_g13@gmail.com
  **Contraseña:** prueba123123


####Configuración del proyecto
  
* Clonar el repositorio https://github.com/CamielaTeam/MISO-PA/
`git clone https://github.com/CamielaTeam/MISO-PA/`

* Ejecutar `npm install` en la carpeta en la que se clonó el repositorio


### Ejecución de tests de Cypress
* Ejecutar el comando `npm run cypress:open` en a raíz del proyecto
* **IMPORTANTE** : Para la generación de las imágenes para VRT, se debe dar click uno a uno a cada archivo de tests, de lo contrario, el generador de reportes no encontrará las imágenes especificadas
* Los screenshots de los tests estarán en la carpeta `cypress/screenshots`

###  Ejecución de tests de Kraken
* En la página de tests de Cypress podrá encontrar el listado de tests y su respectiva asociación con el archivo
* Ejecutar el comando `npm run kraken:run` en la raíz del proyecto
* Para ver un listado de los posibles errores por favor visitar el siguiente [enlace](https://thesoftwaredesignlab.github.io/AutTesingCodelabs/w5/krakenWeb/index.html) en la sección "Consideraciones adicionales"
* Los screenshots de los tests estarán en la carpeta `feature/web/screenshots`

### Visual Regression Testing
* Para generar los reportes de la regresión visual, ejecutar el comando `node main.js` en la raíz del proyecto
* Para visualizar los reportes generados, ejecutar el comando `npm run report:serve`, ir a la url `localhost:8080` y hacer click en la carpeta results, en donde se verán las carpetas con los reportes generados a partir de las pruebas de cypress y kraken
* **IMPORTANTE** : Si se desea volver a ejecutar las pruebas de cypress y kraken, recomendamos eliminar las carpetas que contienen los screenshots `cypress/screenshots` y `features/web/screenshots` antes de ejecutar las pruebas

## Descripción de casos de prueba Cypress

### Versión 4.41.3

| # | Test | Archivo | Notas |
|---|---|---|---|
| 1 | Crear post  | Post.feature | |
| 2 | Crear post programado | Post.feature | |
| 3 | Borrar post programado | Post.feature | |
| 4 | Borrar post publicado | Post.feature | |
| 5 | Editar post publicado | Post.feature | |
| 6 | Crear post en borrador | Post.feature | |
| 7 | Borrar post en borrador | Post.feature | |
| 8 | Borrar página programada | Page.feature | |
| 9 | Borrar página | Page.feature | |
| 10 | Crear página programada | Page.feature | |
| 11 | Crear página en borrador | Page.feature | |
| 12 | Crear página | Page.feature | |
| 13 | Cambiar link de Facebook | Setting.feature | |
| 14 | Cambiar link de Twitter | Setting.feature | |
| 15 | Cambiar título y descripción del sitio | Setting.feature | |
| 16 | Crear tag | Tag.feature | |
| 17 | Editar tag | Tag.feature | |
| 18 | Borrar tag | Tag.feature | |
| 19 | Asignar tag a un post | Tag.feature | |

### Versión 3.42.0

| # | Test | Archivo | Notas |
|---|---|---|---|
| 1 | Borrar post publicado | NewVersionPost.feature | |
| 2 | Crear post | NewVersionPost.feature | |
| 3 | Editar post publicado | NewVersionPost.feature | |
| 4 | Crear página | NewVersionPage.feature | |
| 5 | Borrar página | NewVersionPage.feature | |


## Descripción de casos de prueba Kraken

### Versión 4.41.3

| # | Test | Archivo | Notas |
|---|---|---|---|
| 1 | Eliminar post publicado  | 1-delete-published-post.feature | |
| 2 | Eliminar post programado | 2-delete-scheduled-post.feature | |
| 3 | Borrar tag | 3-delete-tag.feature | |
| 4 | Crear tag | 4-create-tag.feature | |
| 5 | Editar tag | 5-edit-tag.feature | |
| 6 | Asignar tag a un post | 6-asign-tag.feature | |
| 7 | Crear post | 7-create-post.feature | |
| 8 | Programar post | 8-create-post-scheduled.feature | |
| 9 | Crear borrador de post | 9-create-post-draft.feature | |
| 10 | Editar post | 10-edit-post.feature | |
| 11 | Borrar página | 11-delete-page.feature | |
| 12 | Editar página | 12-edit-page.feature | |
| 13 | Editar status de página | 13-edit-page-status.feature.feature | |
| 14 | Crear página | 14-create-page.feature | |
| 15 | Crear página como borrador | 15-create-draft-page.feature | |
| 16 | Crear página y previsualizar | 16-create-page-preview.feature | |
| 17 | Crear página con feature | 17-create-page-with-feature.feature | |
| 18 | Crear página y ver sitio | 18-create-page-view-site.feature | |

### Versión 3.42.0

| # | Test | Archivo | Notas |
|---|---|---|---|
| 1 | Borrar tag | 1--3-42-delete-tag.feature | |
| 2 | Crear tag| 2--3-42-create-tag.feature | |
| 3 | Editar tag | 3--3-42-edit-tag.feature | |
| 4 | Borrar post publicado | 4--3-42-delete-published-post.feature | |
| 5 | Borrar post programado | 5--3-42-delete-scheduled-post.feature | |
| 6 | Crear post | 6--3-42-create-post.feature | |

