 📚 API REST de Estudiantes con Express

Este proyecto es una API REST sencilla construida con **Node.js** y **Express** que permite gestionar un recurso de **estudiantes**.  
Se implementaron las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y se probó con Postman/Thunder Client.

---

## ⚙️ Instalación del entorno

1. Clonar este repositorio:
   ```bash
   git clone https://github.com/<tu-usuario>/mi-api-estudiantes.git
   cd mi-api-estudiantes
Instalar dependencias:

bash
Copy code
npm install
(Opcional) Instalar nodemon para desarrollo:

bash
Copy code
npm install --save-dev nodemon
🚀 Ejecución
Modo normal:

bash
Copy code
npm start
Modo desarrollo (con nodemon):

bash
Copy code
npm run dev
El servidor se ejecuta en:
👉 http://localhost:3000

📌 Endpoints CRUD
1. GET /estudiantes
Lista todos los estudiantes registrados.

Respuesta ejemplo:

json
Copy code
[
  { "id": 1, "nombre": "Ana", "edad": 20, "correo": "ana@mail.com" }
]
2. POST /estudiantes
Crea un nuevo estudiante.

Body JSON:

json
Copy code
{
  "nombre": "Ana",
  "edad": 20,
  "correo": "ana@mail.com"
}
Respuesta ejemplo:

json
Copy code
{
  "id": 1,
  "nombre": "Ana",
  "edad": 20,
  "correo": "ana@mail.com"
}
3. PUT /estudiantes/:id
Actualiza un estudiante existente.

URL: /estudiantes/1

Body JSON (ejemplo):

json
Copy code
{
  "edad": 21
}
Respuesta ejemplo:

json
Copy code
{
  "id": 1,
  "nombre": "Ana",
  "edad": 21,
  "correo": "ana@mail.com"
}
4. DELETE /estudiantes/:id
Elimina un estudiante por su ID.

URL: /estudiantes/1

Respuesta: Código 204 No Content

🧪 Pruebas
Las rutas fueron probadas con Postman y Thunder Client.
En la carpeta docs/ se encuentran las capturas de las pruebas exitosas de cada endpoint.

📂 Estructura del proyecto
pgsql
Copy code
mi-api-estudiantes/
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── docs/    (capturas de Postman/Thunder Client)
📜 Tecnologías usadas
Node.js (v20.x o LTS estable)

Express.js

Nodemon (para desarrollo)

Postman / Thunder Client (para pruebas)
