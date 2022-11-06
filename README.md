# Frontend Tarea Development Adara

Se desarrolló esta aplicación para la tarea de development del proceso de postulación de Adara.

Repositorio backend: https://github.com/hebusch/adara_backend

## Tecnologías Utilizadas :computer:

```json
{
    "language": "Node.js",
    "UILibrary": "React.js",
    "CSSLibrary": "TailwindCSS",
    "testing": "jest",
    "packageManager": "npm"
}
```

## Configuración Inicial :wrench:

1. Instalar las dependencias:

```bash
$ npm install
```

2. Crear archivo `.env` para las variables de entorno:

```env
REACT_APP_API_URL=
```

A modo de ejemplo:

```env
REACT_APP_API_URL=http://localhost:3000
```

3. Iniciar la App

```bash
$ npm start
```

## Tests :clipboard:

Para correr los tests correr el siguiente comando:

```bash
$ npm test
```

## ¿Qué hice y cómo lo hice?

#### Vistas

Hice tres vistas principales. En dos de ellas se pueden realizar las funcionalidades solicitades, y una corresponde a la landing page. 

* `/`: Landing Page.
* `/register`: Vista con un formulario para registrar un nuevo usuario.
* `/users`: Vista con un formulario para solicitar información de un usuario con el correo.

Toda la interfaz de usuario fue realizada con `React.js`, y el CSS fue realizado con la librería `TailwindCSS`.

Se puede navegar a través de las páginas gracias a la Navbar implementada.

#### Validaciones

Para las validaciones se utilizó la librería `react-hook-forms`. Esta librería es útil para realizar formularios más eficientes y generar validaciones rápidas.

#### Testing

Hice testeo, con la librería `jest`, para ver si los componentes y las vistas se renderizan correctamente.

#### Uso de Git

Hice un correcto uso de gitflow, al seguir diferentes ramas, conventional commits y pull requests.

#### ¿Qué me faltó?

Debido a la limitación de tiempo, no incorporé estilo en el display de la información del usuario solicitado. Mi idea aquí era implementar una tabla para desplegar la información.

Tampoco implementé `selects` para los atributos de Región y Comuna. Mi idea era mostrar ambos selects con las regiones de chile y sus comunas respectivas.

También me hubiese gustado implementar un anillo de "loading", al momento de esperar los datos de usuario. Realizar esto con tailwind y useState de React es sencillo.

## Preguntas

1. ¿Cómo deployearías esta aplicación para producción?

Para deployar el frontend, utilizaría un servicio como `Netlify`, o `Vercel`, las cuales son buenas opciones para deployar frontend. 

Para esto, se vincula el servicio con github, específicamente la rama `main` del repositorio del proyecto. De esta forma, cada pull request hacia `main`, redeployearía la aplicación. 

Para el caso del backend, en primer lugar, es cambiar la variable de entorno `NODE_ENV` a `production`. Luego, es necesario hostear la API en un web server con Node. Para esto pueden ser utiles servicios de `AWS`, `DigitalOcean`, `Heroku`, entre otros. 

También en el caso del backend, es necesario contar con un host de bases de datos, donde los mismos proveedores mencionados anteriormente son útiles para resolver esto.

Por último, se asigna como variable de entorno en el backend la `URL` de la base de datos.

2. ¿Por qué elegiste esta tarea y no la otra?

Si bien también se como resolver la otra tarea, elegí esta tarea porque el desarrollo full stack es mi fuerte y la que más me apasiona entre ambas áreas. 
