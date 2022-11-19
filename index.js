const express = require('express')
const app = express()
const port = 2400

const path = require('node:path');

const cors = require('cors');
app.use(cors());

app.use('/web/', express.static(path.resolve('./')));
app.use('/web/login', express.static(path.resolve('./')));

app.listen(port, () => { console.log(`Example app listening on port ${port}!`) })