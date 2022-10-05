# Pending Tasks:

## Descripción:

Este proyecto es una aplicación web desarrollada con NodeJS, Express, Knex, PostgreSQL, y EJS y consiste en un blog en el que anotar tareas personales que estén pendientes de hacer y no queramos olvidar.

## Cómo poner en marcha el proyecto en local:

### Base de datos:

Para preparar nuestra base datos seguiremos los siguientes pasos:

- Ejecutaremos, en primer lugar, el comando < docker-compose up > para levantar en un docker nuestro servicio de PostgreSQL.

- Para comprobar que nuestro contenedor está levantado ejecutaremos el comado docker ps. Este comando nos tiene que listar los contenedores que tenemos en esta up.

- El siguiente paso será conectar DBeaver con nuestra base de datos. Para ello abriremos la aplicación y crearemos una nueva conexión con root tanto para base de datos como para usuario y contraseña.

- Una vez hecho esto ejecutaremos, desde la raíz de nuestro proyecto, el comando < npm run knexMigrate >. De esta manera, exportaremos nuestros esquemas a la base de datos. Estos esquemas ya tienen que aparecer en nuestra base de datos root.

### Arrancar el servidor:

Para arrancar nuestro servidor de Express ejecutaremos el comando < npm run dev >. Desde este momento, ya podemos empezar a hacer peticione a los diferentes end points desde cualquier cliente web.
