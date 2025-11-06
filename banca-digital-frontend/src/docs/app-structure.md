## Estructura de Carpetas Raíz

```js
banca-digital/
│
├─ public/
│
├─ app/
│
├─ components/
│
├─ config/
│
├─ hooks/
│
├─ docs/
│
├─ context/
│
├─ service/
│
├─ utils/
│
└─ styles/

```

## Descripción de la Estructura de Carpetas Raíz

### `public/`

Contiene archivos estáticos accesibles públicamente, como imágenes, íconos, y el favicon del sitio. Todo lo que se coloque aquí puede ser referenciado directamente desde la raíz (`/imagen.png`).

### `app/`

Es el directorio principal de Next.js (App Router). Aquí se definen las rutas, layouts, páginas y metadatos de la aplicación. Se controla el enrutamiento del proyecto.

### `components/`

Almacena los componentes reutilizables de la interfaz.

### `config/`

Destinada para guardar configuraciones de la aplicación, como URL de conexión a Api, o estructuras de contratos.

### `hooks/`

Destinada para hooks personalizados que sirven para manejar lógica reutilizable.

### `docs/`

Espacio para documentación del proyecto.

### `context/`

Carpeta donde se define el estado global del proyecto.

### `service/`

Encapsula la lógica de comunicación con APIs.

### `utils/`

Espacio para funciones auxiliares.

### `styles/`

Carpeta para los definir estilos del proyecto, y de ser necesario agregar personalizados.
