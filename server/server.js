const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/materials', (req, res) => {
    const materials = [
        { id: 1, materialName: 'Material 1', isVolume: 10, isColor: '#5BD2B6', eachCost: 5.99, isDate: '2023-03-05' },
        { id: 2, name: 'Material 2', volume: 20, color: '#F44336', cost: 2.99, date: '2023-03-04' },
        { id: 3, name: 'Material 3', volume: 5, color: '#9C27B0', cost: 1.99, date: '2023-03-03' },
      ];
    res.json(materials);
  });
  
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
