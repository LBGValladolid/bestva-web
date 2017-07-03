# Página de BEST Valladolid

##0. Explicación elementos

##1. Estructura de los archivos

###1.1. HTML

Todos los archivos HTML se sitúan en la carpeta principal de la web.

El archivo `index.html` es el punto de entrada a la página (por defecto Apache devuelve el archivo llamado `index.html`).

###1.2. CSS

Para los estilos se usan dos hojas de estilo CSS, que se encuentran en la carpeta `css`. Estos archivos son:

**1.2.1. Hoja de estilo principal**

En `style.css` se almacena todos los estilos de la web. En él se encuentran, entre otras cosas:
- Los estilos de los menús.
- Los fondos de los diferentes *div* (id y class).
    - Colores sólidos: *orange-background, white-background, ...*
    - Fotos de fondo: *portatil, impresoras, ...*.
    - La configuración de las etiquetas: *header*, listas, *footer*, ...
    - Configuración de fuentes
    - Clases de espaciado: *normal-padding*, *big-padding*, ...
__Resumen__: todo menos el *grid* (la rejilla que nos permite colocar todo de manera cómoda).

**1.2.2. Grid**

En `simple-grid.css` es una rejilla que nos permite colocar los elementos de una manera cómoda y estética en la página. Es del estilo de [Bootstrap](https://getbootstrap.com), pero más sencilla. Esta se llama [Simple Grid](https://simplegrid.io), y se ha modificado reduciendo a lo esencial este código.

_1.2.2.1. Funcionamiento del grid_

Básicamente usaremos contenedores de filas, en las cuales meteremos contenedores con un ancho concreto. Cada fila se divide en 12, y los contenedores tendrán un ancho de 1 a 12. De esta manera, si queremos tener dos bloques, uno el doble que el otro, utilizaremos las clases `col-8` y `col-4`.

La página es responsive, y cuando tengamos un tamaño suficientemente pequeño, las columnas ocuparán todo el ancho de la pantalla. Si no se quiere que se expandan, tendremos que utilizar las clases con sufijo `-sm`, como por ejemplo `col-8-sm`.

_Resumen Grid:_

- Englobar los `col-` en un contenedor de clase `row`
- Asignar la anchura por las clases `col-`
- Si no se quiere que un `col-` ocupe todo el ancho en pantallas pequeñas, añadir el sufijo `-sm`. Ejemplo: `col-5-sm`.

**1.3. Archivos multimedia**

Los archivos multimedia se agrupan en varias carpetas:
- *icon*: iconos. 
- *icon16px*: iconos. En un futuro se trasladará a *media*.
- *media*: esta es la importante, y donde se encuentran las fotos de los fondos y en definitiva todos los archivos de las diferentes páginas de la web. Por ejemplo, la survival guide del AC se encuentra en la carpeta */media/ac17*.

**1.4. JavaScript**

Como en esta web no se usan scripts complejos, no se utiliza ningún archivo externo *.js*. Todos los scripts se encuentran dentro del código html.

## Archivos AC
La carpeta medios AC contiene los archivos enlazados a la PA. No los borréis o movais, porque no se pueden cambiar una vez que este publicado el curso :)