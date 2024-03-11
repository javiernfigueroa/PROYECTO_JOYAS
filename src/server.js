require('dotenv').config();
const express = require('express');
const joyasRoutes = require('./routes/joyas');
const { requestLogger } = require('./middlewares/requestLogger');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(requestLogger);

app.use('/api', joyasRoutes);

app.all('*', (_, res) => res.status(404).json({ code: 404, message: 'Recurso no encontrado' }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
