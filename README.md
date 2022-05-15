# MISO-PA

Integrantes:
* Camilo Alejandro Sánchez Cruz ca.sanchezc12@uniandes.edu.co
* Lizeth Daniela Castellanos Alfonso ld.castellanos@uniandes.edu.co


## Entregables de Semana 6
* [Escenarios de prueba](#casos) incluyendo cambios
* [Instrucciones para ejecutar escenarios de Cypress](#instrucciones_cypress)
* [Instrucciones para ejecutar escenarios de Kraken](#instrucciones_kraken)
* [Reporte de regresión visual ](https://drive.google.com/drive/folders/1OAehaP05M9WhC0HBfRuBZkEoQRQmte70?usp=sharing)
* [Instrucciones para generar reporte](#instrucciones_reportes)
* [Incidencias reportadas](https://github.com/CamielaTeam/MISO-PA/issues)
* [Ventajas y desventajas de las herramientas usadas](#pros_contras)

1.  Funcionalidades de GHOST que se incluyen en las pruebas de la semana 6, cada una tiene uno o varios escenarios

  * Crear página
  * Eliminar página
  * Crear post
  * Eliminar post
  * Editar post
  * Crear tag
  * Eliminar
  * Editar tag

Podrá ver estas funcionalidades específicamente en la [lista de pruebas](#casos) 



## Instalación del entorno

####Pre-requisitos:
* Tener una versión LTS de node reciente (preferiblemente v14.17.3) y una versión compatible de npm. La versión 14.17.3 será util para instalar ambas versiones de ghost
* Instalar adb en su sistema operativo
* Tener una versión actualizada de Google Chrome **IMPORTANTE: Los tests de regresión visual se ejecutaron únicamente en este navegador**

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

<a name="instrucciones_cypress"></a>
## Ejecución de tests de Cypress
* Ejecutar el comando `npm run cypress:open` en a raíz del proyecto
* Hacer click en cada paquete de tests, _NewVersionPage_ y _NewVersionPost_ generarán las capturas de pantalla necesarias para el reporte
* Los screenshots de los tests estarán en la carpeta `cypress/screenshots`

**NOTA** : Para la generación de las imágenes para VRT, se debe dar click uno a uno a cada archivo de tests, de lo contrario, el generador de reportes no encontrará las imágenes especificadas

<a name="instrucciones_kraken"></a>
##  Ejecución de tests de Kraken
* Ejecutar el comando `npm run kraken:run` en la raíz del proyecto, Kraken ejecutará los tests en orden alfabético
* Si desea ejecutar tests específicos, deberá borrar los demás
**NOTA**
Los tests en la version 3.42 (nueva) empiezan con el prefijo **{#No}-3-42-{nombre}**
Los screenshots de los tests estarán en la carpeta `feature/web/screenshots`

<a name="instrucciones_reportes"></a>
##  Generación de reportes con screenshots (Semana 6)
En esta sección encontrará la información necesaria para generar reportes de regresión visual.
Tambien podrá ver los resultados de un reporte en el siguiente enlace

https://drive.google.com/drive/folders/1OAehaP05M9WhC0HBfRuBZkEoQRQmte70?usp=sharing

### Pre-requisitos
* Haber ejecutado los test de Cypress de los paquetes o carpetas _NewVersionPage_ y _NewVersionPost_
* Haber ejecutado los test de Kraken 

### Pasos
* Una vez ejecutados los tests para generar las capturas de pantalla, es necesario generar el reporte con el comando:
  `node main.js`
* Para visualizar los reportes generados, ejecutar el comando 
  `npm run report:serve`
* Ir a la url `localhost:8080`
* Hacer click en la carpeta results, en donde se verán las carpetas con los reportes generados para cypress y Kraken
* Haga click en la carpeta de su preferencia (cypress o kraken)
* Haga click en el ultimo reporte generado
* Haga click en el escenario que desea ver
* Haga click en `report.html`
* Allí podrá ver la regresión visual del escenario, con screenshots en cada versión y comparación

 **IMPORTANTE** : Si desea volver a ejecutar las pruebas de cypress y kraken, recomendamos eliminar las carpetas que contienen los screenshots `cypress/screenshots` y `features/web/screenshots` antes de ejecutar las pruebas

<a name="casos"></a>
## Descripción de casos de prueba 

### Cypress


#### Versión 4.41.3

| # | Test | Archivo | Funcionalidad | Notas|
|---|---|---|---|---|
| 1 | Crear post  | Post.feature |Crear post | [Screenshots](https://drive.google.com/file/d/1TbmGZIPMyqVV-ADEigYokcQVKqr3gKvI/view?usp=sharing) |
| 2 | Crear post programado | Post.feature | Crear post| |
| 3 | Borrar post programado | Post.feature |Borrar post| | 
| 4 | Borrar post publicado | Post.feature | Borrar post |[Screenshots](https://drive.google.com/file/d/1n9x1BVrEeA4C28NyoILQjBFlhUHd5Ak-/view?usp=sharing)| 
| 5 | Editar post publicado | Post.feature | Editar post |[Screenshots](https://drive.google.com/file/d/1UA4ZtbfN4W1VQUYO-JXyi99ppgGTUIkb/view?usp=sharing)|
| 6 | Crear post en borrador | Post.feature | Crear post | |
| 7 | Borrar post en borrador | Post.feature |Borrar post | |
| 8 | Borrar página programada | Page.feature |Borrar página | |
| 9 | Borrar página | Page.feature | Borrar página| [Screenshots](https://drive.google.com/file/d/1aJcnnxTMCkcloqo4cxTxLUkFKX0ScmqH/view?usp=sharing)|
| 10 | Crear página programada | Page.feature | Crear página| |
| 11 | Crear página en borrador | Page.feature | Crear página| |
| 12 | Crear página | Page.feature | Crear página|[Screenshots](https://drive.google.com/file/d/146BvU9XHcVil4gkecp35fdLnRjMCMX13/view?usp=sharing) | 
| 13 | Cambiar link de Facebook | Setting.feature | Configurar sitio| |
| 14 | Cambiar link de Twitter | Setting.feature |Configurar sitio | |
| 15 | Cambiar título y descripción del sitio | Setting.feature | Configurar sitio| |
| 16 | Crear tag | Tag.feature | Crear tag| |
| 17 | Editar tag | Tag.feature | Editar tag| |
| 18 | Borrar tag | Tag.feature | Borrar tag | |
| 19 | Asignar tag a un post | Tag.feature | Asignar tag| |

#### Versión 3.42.0

| # | Test | Archivo |Funcionalidad| Notas |
|---|---|---|---|---|
| 1 | Borrar post publicado | NewVersionPost.feature |Borrar post|[Screenshots](https://drive.google.com/file/d/1n9x1BVrEeA4C28NyoILQjBFlhUHd5Ak-/view?usp=sharing)|
| 2 | Crear post | NewVersionPost.feature |Crear post| [Screenshots](https://drive.google.com/file/d/1TbmGZIPMyqVV-ADEigYokcQVKqr3gKvI/view?usp=sharing) |
| 3 | Editar post publicado | NewVersionPost.feature |Editar post| [Screenshots](https://drive.google.com/file/d/1UA4ZtbfN4W1VQUYO-JXyi99ppgGTUIkb/view?usp=sharing)|
| 4 | Crear página | NewVersionPage.feature |Crear página|[Screenshots](https://drive.google.com/file/d/146BvU9XHcVil4gkecp35fdLnRjMCMX13/view?usp=sharing)  |
| 5 | Borrar página | NewVersionPage.feature |Borrar página| [Screenshots](https://drive.google.com/file/d/1aJcnnxTMCkcloqo4cxTxLUkFKX0ScmqH/view?usp=sharing)|


### Kraken

#### Versión 4.41.3

| # | Test | Archivo | Notas |
|---|---|---|---|
| 1 | Borrar post publicado  | 1-delete-published-post.feature | [Screenshots](https://drive.google.com/file/d/1SqPXPafE3ET4ebQi55gPjaodnL_BD0fa/view?usp=sharing)  |
| 2 | Borrar post programado | 2-delete-scheduled-post.feature | [Screenshots](https://drive.google.com/file/d/1qJP4QBcybIMZp3vEK_bLbJuZL69hi7yB/view?usp=sharing) |
| 3 | Borrar tag | 3-delete-tag.feature | [Screenshots](https://drive.google.com/file/d/1eChrZ3auW312P53rKAc5gaXjBbvnqAwb/view?usp=sharing)|
| 4 | Crear tag | 4-create-tag.feature | [Screenshots](https://drive.google.com/file/d/11_GtZl_qF7Dx5KRxXjORw1AwRqCFezVq/view?usp=sharing) |
| 5 | Editar tag | 5-edit-tag.feature | [Screenshots](https://drive.google.com/file/d/1tBxER5u3_U4wH1DqIMgqJuijhpgvGbXD/view?usp=sharing) |
| 6 | Asignar tag a un post | 6-asign-tag.feature | |
| 7 | Crear post | 7-create-post.feature | [Screenshots](https://drive.google.com/file/d/1lMP79u8-UhBEyXvJ2MTcwi5xgHJx1xO4/view?usp=sharing) |
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

#### Versión 3.42.0

| # | Test | Archivo | Notas |
|---|---|---|---|
| 1 | Borrar tag | 3--3-42-delete-tag.feature |[Screenshots](https://drive.google.com/file/d/1eChrZ3auW312P53rKAc5gaXjBbvnqAwb/view?usp=sharing) |
| 2 | Crear tag| 4--3-42-create-tag.feature | [Screenshots](https://drive.google.com/file/d/11_GtZl_qF7Dx5KRxXjORw1AwRqCFezVq/view?usp=sharing) |
| 3 | Editar tag | 5--3-42-edit-tag.feature | [Screenshots](https://drive.google.com/file/d/1tBxER5u3_U4wH1DqIMgqJuijhpgvGbXD/view?usp=sharing)|
| 4 | Borrar post publicado | 5--3-42-delete-published-post.feature | [Screenshots](https://drive.google.com/file/d/1SqPXPafE3ET4ebQi55gPjaodnL_BD0fa/view?usp=sharing) |
| 5 | Borrar post programado | 5--3-42-delete-scheduled-post.feature | [Screenshots](https://drive.google.com/file/d/1qJP4QBcybIMZp3vEK_bLbJuZL69hi7yB/view?usp=sharing) |
| 6 | Crear post | 6--3-42-create-post.feature | [Screenshots](https://drive.google.com/file/d/1lMP79u8-UhBEyXvJ2MTcwi5xgHJx1xO4/view?usp=sharing) |



<a name="pros_contras"></a>
#  VRT Kraken y VRT Cypress (Usando RessembleJS)
## ResembleJS
### Ventajas
* Ofrece un API de comparación de imágenes que se consume de forma sencilla
* Ofrece información útil sobre la comparación de las imágenes, como por ejemplo diferencial porcentual de las imágenes a comparar

### Desventajas
* Carece de funcionalidades más robustas enfocadas a VRT 
* Queda del lado del framework de pruebas la toma de screenshots
* Requiere la intervención de un humano para definir si la diferencia identificada entre dos imágenes es debido a un error, esto porque no se analiza el DOM sino las imágenes directamente

## Cypress en VRT

### Ventajas
* Permite la toma de screenshots de forma sencilla
* Permite la configuración del viewport de forma sencilla
### Desventajas
* Ejecución limitada en ciertos navegadores
***

## Kraken en VRT
### Ventajas
* Toma de screenshots automática
* Ofrece todas las funcionalidades de configuración de Webdriver.io, entre ellas las referentes al viewport

### Desventajas
* La toma de screenshots no se genera con una estructura de carpetas
***

