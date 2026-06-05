# Sistema de Gamificación para el Cumplimiento de Tratamientos Médicos Infantiles - Configuración Inicial


## 1. Ficha Técnica del Entorno
* **Stack Tecnológico:** 
Frontend (Interfaz del Niño y Panel de Padres/Médicos)
•	Framework: React.js (con JavaScript/TypeScript).
•	Librería 
Backend (API y Lógica de Negocio)
•	Entorno y Framework: Node.js con Express.js.
Base de Datos
•	Motor: PostgreSQL (Versión 18.4).•	
* **Justificación del Stack:** 
Este proyecto utiliza un stack basado en JavaScript/TypeScript (React, Node.js y Express) coordinado bajo npm (v11.13.0) para acelerar el desarrollo mediante un lenguaje único y componentes reutilizables, logrando una interfaz dinámica y animada para los niños con Tailwind CSS y Framer Motion a la vez que se mantiene un panel robusto para los adultos. La persistencia y seguridad de los datos médicos y de juego se garantizan mediante PostgreSQL (v18.4) por su integridad relacional y manejo de JSON, mientras que el entorno de desarrollo se optimiza con Node.js (v24.16.0) para un rendimiento moderno, Git (v2.33.1) para un control de versiones ordenado por ramas, y Visual Studio Code (v1.101.0) como un IDE ligero, extensible y eficiente para la depuración del código.

* **Herramientas de Desarrollo (Tooling):** 
Entorno de Ejecución: Node.js (v24.16.0)
Gestor de Paquetes: npm (v11.13.0)
Control de Versiones: Git (v2.33.1.windows.1)
Editor de Código / IDE: Visual Studio Code (v1.101.0)


## 2. Ingeniería Aumentada
* **Prompt Utilizado:**
  > Actúa como un Arquitecto de Software Fullstack Senior experto en Node.js, React y PostgreSQL.
Contexto del Proyecto: Estoy desarrollando un "Sistema de Gamificación para el Cumplimiento de Tratamientos Médicos Infantiles". Es una plataforma web con dos entornos: un panel serio para padres/médicos y una interfaz interactiva/gamificada para niños (misiones, puntos, medallas e historias animadas).

> Stack Tecnológico Exacto:
Estructura: Monorrepo (Carpetas independientes /backend y /frontend en la raíz).
Backend: Node.js (v24.16.0) con Express.js y el driver pg para PostgreSQL (v18.4).
Frontend: React.js (inicializado con Vite), Tailwind CSS y Framer Motion para las animaciones.
Gestor de paquetes: npm (v11.13.0).
Objetivo: Necesito que generes el boilerplate profesional y la estructura de archivos inicial para arrancar el proyecto.

> Provéeme únicamente:
El árbol de directorios visual de todo el proyecto (Monorrepo), mostrando una arquitectura limpia y escalable (separa rutas, controladores y modelos en el backend; componentes, vistas y hooks en el frontend).
El código del archivo backend/index.js (o app.js) con la configuración básica de Express, CORS, parseo de JSON y una conexión inicial de prueba a PostgreSQL usando pg.
El código del archivo frontend/src/App.jsx configurado con un estado básico de React y un contenedor envuelto en Tailwind CSS para verificar que los estilos cargan correctamente.


* **Ajuste Humano (Gobernanza):** [Explica qué partes de la respuesta de la IA tuviste que corregir, eliminar o adaptar porque no cumplían con un estándar de calidad real].


## 3. Instrucciones de Ejecución 
Instrucciones claras para que cualquier otro desarrollador pueda clonar tu repositorio y levantar el proyecto en 3 comandos:
1. Clonar el repositorio.
2. Instalar dependencias).
3. Ejecutar en entorno de desarrollo.
