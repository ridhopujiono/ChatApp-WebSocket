const express = require('express');
const app = express();

// Mengakses file Bootstrap dari folder 'node_modules'
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// Menampilkan file index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Menjalankan server
app.listen(3000, () => console.log('Server berjalan di port 3000!'));