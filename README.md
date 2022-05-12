# MISO-PA

Integrantes:
* Camilo Alejandro Sánchez Cruz ca.sanchezc12@uniandes.edu.co
* Lizeth Daniela Castellanos Alfonso ld.castellanos@uniandes.edu.co

## Cómo ejecutar los tests

Pre-requisitos:
* Instalar la versión 4.41.3 de ghost, para ello se puede ejecutar el siguiente comando
`ghost install 4.41.3 --local`

* Instalar la versión 3.42.0 de ghots, para ello se puede ejecutar el siguiente comando `ghost install 3.42.0 --local`
* Para ambas versiones, crear un sitio con la siguiente configuración: 
  ```Nombre del sitio: Test ; Nombre completo: Testing User ; Correo: test_ghost_g13@gmail.com ; Contraseña: prueba123123```

* Tener una versión LTS de node reciente (preferiblemente v16.15.0) y una versión compatible de npm

* Instalar adb en su sistema operativo
  
* Ejecutar `npm install` en la carpeta en la que se clonó el repositorio

* Ejecutar ambas versiones de ghost localmente, los sitios deben estar limpios, sin posts o tags creados
### Cypress
* Ejecutar el comando `npm run cypress:open` en a raíz del proyecto
* **IMPORTANTE** : Para la generación de las imágenes para VRT, se debe dar click uno a uno a cada archivo de tests, de lo contrario, el generador de reportes no encontrará las imágenes especificadas
* Los screenshots de los tests estarán en la carpeta `cypress/screenshots`

### Kraken
* Ejecutar el comando `npm run kraken:run` en la raíz del proyecto
* Para ver un listado de los posibles errores por favor visitar el siguiente [enlace](https://thesoftwaredesignlab.github.io/AutTesingCodelabs/w5/krakenWeb/index.html) en la sección "Consideraciones adicionales"
* Los screenshots de los tests estarán en la carpeta `feature/web/screenshots`

### Visual Regression Testing
* Para generar los reportes de la regresión visual, ejecutar el comando `node main.js` en la raíz del proyecto
* Para visualizar los reportes generados, ejecutar el comando `npm run report:serve`, ir a la url `localhost:8080` y hacer click en la carpeta results, en donde se verán las carpetas con los reportes generados a partir de las pruebas de cypress y kraken


## Descripción de casos de prueba

### 1.  Crear posts:
  * Creación exitosa de un post (flujo: Login -> Crear Post -> Publicar post -> Listar posts -> Filtrar posts)
  * Creación exitosa de un post en modo borrador (flujo: Login -> Crear Post -> Listar posts -> Filtrar posts)
  * Creación exitosa de un post programado para su publicación (flujo: Login -> Crear post -> Programar publicación -> Listar posts -> Filtrar posts)
### 2. Eliminar posts:
  * Eliminación exitosa de un post ya publicado (flujo: Login -> Crear post -> Publicar post -> Listar posts -> Editar post -> Eliminar post -> Listar posts)
  * Eliminación exitosa de un post programado para su publicación  (flujo: Login -> Crear post -> Programar publicación del post -> Listar posts -> Editar post -> Eliminar post -> Listar post -> Filtrar posts)
  * Eliminación exitosa de un post borrador (flujo: Login -> Crear post -> Listar posts -> Editar post -> Eliminar post -> Listar post -> Filtrar posts)

### 3. Editar posts:
  * Edición exitosa de un post (flujo: Login -> Crear Post -> Publicar post -> Listar posts -> Abrir edición de post -> Editar post -> Actualizar post -> Listar posts)

### 4. Crear tag:
  * Creación exitosa de un tag (flujo: Login -> Lista de tags -> Crear tag -> Guardar tag -> Listar tags)

### 5. Editar tag:
  * Creación exitosa de un tag (flujo: Login -> Lista de tags -> Crear tag -> Guardar tag -> Listar tags -> Editar tag-> Guardar tag -> Listar tags)
  
### 6. Eliminar tag:
  * Eliminación exitosa de un tag guardado (flujo: Login -> Lista de tags -> Crear tag -> Guardar tag -> Listar tags -> Abrir tag -> Eliminar tag -> Listar tags)

### 7. Asignar tag a un post:
  * Asignar tag a un post (flujo: Login -> Lista de tags -> Crear tag -> Guardar tag -> Listar posts -> Crear post -> Asignar tag -> Publicar post -> Listar posts)

### 8. Crear page:
  * Crear page en borrador (flujo: Login -> ir a pages > Crear page -> Listar pages)
  * Crear page y publicar (flujo: Login -> ir a pages > Crear page -> Publicar -> Ver sitio)
  * Crear page, publicar y visualizar en lista pages (flujo: Login -> ir a pages > Crear page -> Publicar -> Listar pages)
  * Crear page programada (flujo: Login -> ir a pages -> crear page -> programar publicacion -> listar pages)

### 9. Editar page:
  * Editar page (flujo: Login -> ir a pages > Click en la primera pagina -> Editar titulo -> Actualizar -> Listar pages)

### 10. Asignar una featured page:
  * Asignar una featured page (flujo: Login -> ir a pages > Crear featured page -> Publicar -> Listar pages)

### 11. Cambiar estado de pagina:
  * Cambiar estado de pagina (flujo: Login -> ir a pages > Crear page -> Publicar -> Listar pages  -> Click en la primera pagina -> Actualizar -> No publicar -> Listar pages)

### 12. Borrar pagina:
  * Borrar pagina (flujo: Login -> ir a pages > Crear page -> Publicar -> Listar pages  -> Click en la primera pagina ->  Eliminar pagina)

### 13. Cambiar título de página:
  * Cambiar el nombre del sitio (flujo: Login -> Ir a configuración -> Ir a configuración general -> Reemplazar titulo -> Guardar configuración  -> Revisar título del sitio)

### 14. Cambiar links de redes sociales:
  * Se puede reemplazar la url de facebook en la configuración de la página (flujo: Login -> Ir a configuración -> Ir a configuración general -> Desplegar opción de cuentas de redes sociales -> Reemplazar url de facebook  -> Guardar cambios -> Ir al sitio -> Comprobar link de facebook del sitio)
  * Se puede reemplazar la url de twitter en la configuración de la página (flujo: Login -> Ir a configuración -> Ir a configuración general -> Desplegar opción de cuentas de redes sociales -> Reemplazar url de twitter  -> Guardar cambios -> Ir al sitio -> Comprobar link de twitter del sitio)

### 15. Previsualizar pagina:
  * Previsualizar pagina (flujo: Login -> ir a pages > Crear page -> Previsualizar)

### 16. Visualizar email de usuario:
  * Previsualizar pagina (flujo: Login -> ir a pages > usuario)

### 17. Visualizar nobre_usuario del usuario:
  * Visualizar nobre_usuario del usuario (flujo: Login -> ir a pages > usuario)
