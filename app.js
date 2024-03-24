import express from 'express';
import productsRoutes from './src/routes/products.routes';
import authRoutes from './src/routes/auth.routes';
import { createRoles } from './src/libs/initialSetup';

const app = express();
//ejecutar la funcion para crear roles por defecto
createRoles();

app.use(express.json());
app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes);


export default app;