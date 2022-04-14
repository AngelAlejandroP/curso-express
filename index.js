const express = require('express');
const app=express();

// ruta inicial ===============================
app.get('/', (req, res) => {
    res.send('Metodo GET resivido');    
});

// creando rutas ===============================
app.get('/post', (req, res) => {
    res.send('Peticion POST resivida');
});

app.put('/put', (req, res) => {
    res.send('Peticion PUT resivida');
});

app.delete('/delete', (req, res) => {
    res.send('Petision DELETE resivida');
});

// Iniciando servidor ===============================
app.listen(3000, () => {
    console.log('servidor en puerto: ',app.get('port'));
});