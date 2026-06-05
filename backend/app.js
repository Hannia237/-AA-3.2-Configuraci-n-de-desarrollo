import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();
const app = express();
const pool = new pg.Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'gamificacion_medica',
});

app.use(cors());
app.use(express.json());

app.get('/api/prueba-conexion', async (req, res) => {
  try {
    const respuestaDb = await pool.query('SELECT NOW() as hora_servidor_db');
    res.json({ estado: 'Conexión Exitosa', hora_db: respuestaDb.rows[0].hora_servidor_db });
  } catch (error) {
    res.status(500).json({ estado: 'Error', error: error.message });
  }
});

app.listen(4000, () => console.log('🚀 Servidor Express ejecutándose en el puerto 4000'));