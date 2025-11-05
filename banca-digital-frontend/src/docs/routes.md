## Explicación de las Rutas

La estructura de rutas sigue la convención del App Router de Next.js.  
Dentro del directorio `app/` se creó la carpeta `app-layout/`, que agrupa las vistas principales de la aplicación autenticada:

- `/app-layout/dashboard`
- `/app-layout/transferencias`
- `/app-layout/historial`

Esta decisión permite reservar el espacio raíz (`/app/`) para una posible pantalla de **login** u otras vistas públicas, manteniendo así separada la lógica de acceso y la navegación interna del usuario autenticado.
