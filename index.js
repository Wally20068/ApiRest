const express = require('express');
const app = express();
app.use(express.json());

let estudiantes = [
  { id: 1, nombre: 'Javier Carrera', edad: 22, carrera: 'Redes' },
  { id: 2, nombre: 'Adrian Bravo',  edad: 23, carrera: 'Sistemas' }
];
let nextId = 3;

// GET /estudiantes → listar
app.get('/estudiantes', (req, res) => {
  res.json(estudiantes);
});

// POST /estudiantes → crear
app.post('/estudiantes', (req, res) => {
  const { nombre, edad, carrera } = req.body;
  if (!nombre || typeof edad !== 'number' || !carrera) {
    return res.status(400).json({ error: 'nombre, edad (número) y carrera requeridos' });
  }
  const nuevo = { id: nextId++, nombre, edad, carrera };
  estudiantes.push(nuevo);
  res.status(201).json(nuevo);
});

// PUT /estudiantes/:id → actualizar
app.put('/estudiantes/:id', (req, res) => {
  const idx = estudiantes.findIndex(e => e.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Estudiante no encontrado' });

  const { nombre, edad, carrera } = req.body;
  if (nombre  !== undefined) estudiantes[idx].nombre  = nombre;
  if (edad    !== undefined) estudiantes[idx].edad    = edad;
  if (carrera !== undefined) estudiantes[idx].carrera = carrera;

  res.json(estudiantes[idx]);
});

// DELETE /estudiantes/:id → eliminar
app.delete('/estudiantes/:id', (req, res) => {
  const idx = estudiantes.findIndex(e => e.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Estudiante no encontrado' });

  estudiantes.splice(idx, 1);
  res.status(204).send();
});

// Ruta de prueba
app.get('/', (_, res) => res.send('API Estudiantes OK'));

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
