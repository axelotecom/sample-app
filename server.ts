const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const {registerApi} = require("./api");

if (process.env.PRODUCTION) {
    app.use('/', express.static(path.join(__dirname, 'build')))
}

app.use(express.json());
app.use(cors());

const router = express.Router();
registerApi(router);
app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`);
});