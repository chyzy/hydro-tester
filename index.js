const express = require('express');
const app = express();
const path = require('path');

// Serwowanie plików statycznych
app.use(express.static(path.join(__dirname, 'public')));

// Domyślna trasa, gdy otwierasz stronę
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ustawienie portu
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));