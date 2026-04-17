ADDS — Plataforma web de videojuegos
1. ArgenPlay

2. Introducción
El presente documento describe el analisis y diseño de una aplicación web orientada a la exploración de videojuegos. El sistema tiene como objetivo funcionar como proyecto de portfolio, evidenciando conocimientos en desarrollo frontend moderno con React, manejo de estado, consumo de APIs, navegación entre vistas y buenas prácticas de desarrollo.

3. Descripción general del sistema
La aplicación permitirá a los usuarios explorar un catálogo de videojuegos, realizar búsquedas, aplicar filtros, acceder a información detallada y guardar favoritos.

Inicialmente se trabajará con datos mockeados, para luego integrar una API REST.

4. Objetivo general

Desarrollar una aplicación web que demuestre habilidades en React, JavaScript, HTML, CSS, navegación, consumo de API REST, manejo de estado y documentación técnica.

5. Objetivos específicos
Implementar una interfaz moderna y responsive
Manejar estado dinámico con React
Implementar navegación entre páginas
Consumir datos desde una API externa
Persistir datos en el navegador
Aplicar buenas prácticas de arquitectura frontend

6. Alcance
Incluye:

catálogo de juegos
buscador
filtros
detalle
favoritos
documentación

7. Usuarios
Usuario nuevo:
navegar el sistema
buscar y filtrar juegos
ver detalles
guardar favoritos

8. Requerimientos funcionales
RF1

El sistema deberá permitir al usuario ingresar a la página principal de la aplicación.

RF2

El sistema deberá permitir al usuario visualizar un listado de videojuegos.

RF3

El sistema deberá mostrar cada videojuego mediante una tarjeta que incluya, como mínimo, imagen, nombre y categoría principal.

RF4

El sistema deberá permitir al usuario navegar hacia una sección específica de catálogo de juegos.

RF5

El sistema deberá permitir al usuario buscar videojuegos por nombre.

RF6

El sistema deberá permitir al usuario aplicar filtros sobre el catálogo de juegos.

RF7

El sistema deberá permitir al usuario acceder a una vista de detalle de cada videojuego.

RF8

El sistema deberá mostrar en la vista de detalle información ampliada del videojuego seleccionado.

RF9

El sistema deberá permitir al usuario marcar videojuegos como favoritos.

RF10

El sistema deberá permitir conservar la lista de favoritos utilizando almacenamiento local del navegador.

RF11

El sistema deberá permitir al usuario acceder a una sección donde se muestren sus videojuegos favoritos.

RF12

El sistema deberá permitir al usuario navegar entre las distintas páginas de la aplicación sin recargar completamente el sitio.

RF13

El sistema deberá incluir una sección de documentación o presentación del proyecto.

RF14

El sistema deberá estar preparado para integrar una API REST en una etapa posterior.

9. Requerimientos no funcionales
RNF1

La aplicación deberá presentar una interfaz visual moderna, clara y fácil de usar.

RNF2

La aplicación deberá ser responsive y adaptarse correctamente a distintos tamaños de pantalla.

RNF3

El sistema deberá organizarse mediante componentes reutilizables para favorecer su mantenimiento.

RNF4

La navegación deberá ser fluida y consistente.

RNF5

El código deberá mantener una estructura ordenada y comprensible.

RNF6

La aplicación deberá poder desplegarse en un entorno web público.

RNF7

La persistencia local de favoritos deberá funcionar sin depender de conexión a un servidor.

RNF8

La documentación técnica deberá ser suficiente para comprender el propósito, estructura y funcionamiento general del proyecto.

10. Casos de uso principales
CU1: Visualizar catálogo de juegos

Actor: Usuario visitante
Descripción: El usuario ingresa al sistema y accede al catálogo general de videojuegos.
Resultado esperado: El sistema muestra una lista de juegos disponibles.

CU2: Buscar un videojuego

Actor: Usuario visitante
Descripción: El usuario ingresa un término en el buscador para encontrar juegos por nombre.
Resultado esperado: El sistema filtra y muestra únicamente los juegos que coinciden con la búsqueda.

CU3: Filtrar videojuegos

Actor: Usuario visitante
Descripción: El usuario aplica uno o más filtros sobre el catálogo.
Resultado esperado: El sistema actualiza el listado según los criterios seleccionados.

CU4: Ver detalle de un videojuego

Actor: Usuario visitante
Descripción: El usuario selecciona un juego del catálogo para ver más información.
Resultado esperado: El sistema dirige a una vista con los datos ampliados del juego.

CU5: Agregar a favoritos

Actor: Usuario visitante
Descripción: El usuario marca un juego como favorito.
Resultado esperado: El sistema guarda el juego en la lista de favoritos y conserva la información localmente.

CU6: Consultar favoritos

Actor: Usuario visitante
Descripción: El usuario accede a la sección de favoritos.
Resultado esperado: El sistema muestra los juegos previamente guardados.

11. Modelo de datos conceptual

En una primera etapa, cada videojuego podrá manejar la siguiente información:

id
nombre
imagen
género
plataforma
rating
fecha de lanzamiento
descripción

Ejemplo de entidad: Juego
id: identificador único
name: nombre del juego
image: imagen de portada
genre: género principal
platform: plataforma
rating: calificación
releaseDate: fecha de lanzamiento
description: descripción general

Ejemplo de entidad: Favorito
idJuego: identificador del juego guardado
fechaAgregado: fecha opcional de agregado

12. Estructura general de la aplicación
Páginas principales: 
Home
Games
GameDetail
Favorites
Documentation 

Componentes esperados: 
Navbar
Footer
Hero
GameCard
GameList
SearchBar
FilterBar
FavoriteButton

13. Gestión de estado y efectos (React)

La aplicación utilizará el sistema de estado provisto por React para gestionar la información dinámica de la interfaz.

Se emplearán principalmente los hooks:

useState para manejar estados locales
useEffect para manejar efectos secundarios

13. 1. Estados principales del sistema

Se identifican los siguientes estados clave:

games → lista de videojuegos
searchTerm → texto ingresado en el buscador
filters → criterios de filtrado
selectedGame → juego seleccionado
favorites → lista de juegos guardados
loading → estado de carga
error → manejo de errores

13. 2. Uso de useState

El hook useState permitirá:

almacenar la lista de juegos
controlar el input del buscador
gestionar filtros dinámicos
mantener los favoritos
manejar estados de UI (loading y error)

Ejemplo conceptual:

al escribir en el buscador → cambia searchTerm
al aplicar un filtro → cambia filters
al agregar favorito → cambia favorites

13. 3. Uso de useEffect

El hook useEffect será utilizado para manejar efectos secundarios.

Casos de uso:
Carga inicial de datos
obtener juegos (mock o API)
actualizar estado games
Sincronización con localStorage
guardar favoritos cuando cambian
recuperar favoritos al iniciar
Reactividad del sistema
recalcular resultados cuando cambian filtros o búsqueda

13. 4. Persistencia con localStorage

Se utilizará almacenamiento local del navegador para mantener los favoritos.

Comportamiento:
al iniciar la app → cargar favoritos
al modificarlos → guardarlos automáticamente

Esto se implementará con useEffect.

13. 5. Flujo de datos

El flujo de datos será unidireccional:

estado en componentes padres
props hacia hijos
eventos desde hijos hacia padres

Ejemplo:

SearchBar modifica searchTerm
GameList recibe lista filtrada
GameCard muestra datos
13.6 Separación de responsabilidades
Componentes presentacionales → UI (GameCard)
Componentes contenedores → lógica (pages)
Hooks → estado y efectos

13. 7. Escalabilidad

Se podrán implementar:

hooks personalizados (useGames, useFavorites)
centralización de estado (Context API)