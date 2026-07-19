# Trello Clone - Frontend

Interfaz de usuario moderna y responsiva para el clon de Trello, construida con **React 18**, **Vite** y **Socket.IO**. Proporciona gestión de tableros, listas, tareas, comentarios y actualizaciones en tiempo real.

---

## Demo en Vivo

** [Ver demo en producción](https://trello-clone-frontend-ki2y.onrender.com)**

> **Credenciales de prueba:**  
> - **Email:** `demo@email.com`  
> - **Contraseña:** `123456`  
> *(Si el usuario demo no existe, puedes registrarte libremente)*

---

## Características

- **Autenticación de usuarios** (Registro / Login / Logout)
-  **Gestión de tableros y listas**
-  **Tareas** con título, descripción, estado, fecha límite y asignación
-  **Comentarios** en tiempo real
-  **Calendario** de tareas con fecha límite
-  **WebSockets** para actualizaciones en tiempo real
-  **Interfaz responsiva** para todos los dispositivos
-  **Rutas protegidas** con autenticación
-  **Desplegado en Render** con CDN global

---

## Tecnologías

| Tecnología | Propósito |
|------------|-----------|
| **React 18** | Biblioteca para interfaces de usuario |
| **React Router** | Enrutamiento SPA |
| **Socket.IO Client** | Comunicación en tiempo real |
| **Vite** | Bundler y servidor de desarrollo |
| **CSS3** | Estilos personalizados |

---

## Estructura del Proyecto

```
trello-frontend/
├── public/
│   └── _redirects          # Configuración para SPA en Render
├── src/
│   ├── components/
│   │   └── jsx/
│   │       ├── App.jsx             # Componente principal
│   │       ├── Login.jsx           # Página de login
│   │       ├── Register.jsx        # Página de registro
│   │       ├── Header.jsx          # Barra de navegación
│   │       ├── NewTask.jsx         # Crear tarea
│   │       ├── EditTask.jsx        # Editar tarea
│   │       └── Calendario.jsx      # Calendario de tareas
│   ├── css/
│   │   ├── Login.css
│   │   ├── Register.css
│   │   ├── Calendario.css
│   │   └── NewTask.css
│   ├── socket.js            # Configuración de Socket.IO
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Instalación Local

### Requisitos previos

- **Node.js 20+** → [Descargar](https://nodejs.org/)
- **Git** → [Descargar](https://git-scm.com/)

### 1. Clonar el repositorio

```bash
git clone https://github.com/danielfelipeca98/trello-clone-frontend.git
cd trello-clone-frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variable de entorno

```bash
echo "VITE_API_URL=http://localhost:8080" > .env
```

**O para Windows PowerShell:**

```powershell
"VITE_API_URL=http://localhost:8080" | Out-File -FilePath .env
```

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

### 5. Abrir la aplicación

- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend:** [http://localhost:8080](http://localhost:8080)

---

## WebSockets

**El frontend se conecta automáticamente al backend mediante Socket.IO.**

**Eventos escuchados:**

| Evento | Acción |
|--------|--------|
| `connect` | Conexión establecida |
| `task-created` | Nueva tarea creada → Actualiza la lista |
| `task-deleted` | Tarea eliminada → Elimina de la lista |
| `task-updated` | Tarea actualizada → Actualiza en la lista |
| `new-comment` | Nuevo comentario → Agrega a la tarea |

---

##  Despliegue en Render

### 1. Crear cuenta en [Render](https://render.com)

### 2. Conectar repositorio de GitHub

### 3. Crear Static Site:

| Campo | Valor |
|-------|-------|
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

### 4. Variable de entorno:

| Variable | Valor |
|----------|-------|
| `VITE_API_URL` | `https://trello-clone-backend-8zp1.onrender.com` |

### 5. Configurar SPA (Redirects/Rewrites):

| Source | Destination | Type |
|--------|-------------|------|
| `/*` | `/index.html` | **Rewrite** |

### 6. Desplegar

Render construirá y desplegará automáticamente tu frontend.

---

## Pruebas

| Prueba | Estado |
|--------|--------|
| Registro de usuario | OK |
| Login | OK |
| Crear tarea | OK |
| Editar tarea | OK |
| Eliminar tarea | OK |
| Comentarios en tiempo real | OK |
| Calendario | OK |
| WebSockets | OK |
| Responsive | OK |

---

## Solución de problemas comunes

| Problema | Solución |
|----------|----------|
| **Error 404 al recargar** | Configurar Redirects/Rewrites en Render (`/*` → `/index.html`) |
| **CORS bloquea peticiones** | Verificar `FRONTEND_URL` en el backend |
| **WebSocket no conecta** | Asegurar que `VITE_API_URL` usa `https://` en producción |
| **No se ven las tareas** | Crear una tarea nueva o verificar `listId` en MongoDB |

---

##  Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

##  Contacto

**Daniel Felipe Castro**  
GitHub: [danielfelipeca98](https://github.com/danielfelipeca98)

---

##  Repositorios

- **Backend:** [https://github.com/danielfelipeca98/trello-clone-backend](https://github.com/danielfelipeca98/trello-clone-backend)
- **Frontend:** [https://github.com/danielfelipeca98/trello-clone-frontend](https://github.com/danielfelipeca98/trello-clone-frontend)

---

