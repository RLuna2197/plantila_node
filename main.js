const express = require('express');
const cors = require('cors');
const api = require('./routes/api');
require('dotenv').config();

module.exports = class Main {
  constructor() {
    this.app = express();
    this.server();
    this.routes();
  }

  routes() {
    this.app.use('/api', api);
  }

  server() {
    const PORT = process.env.PORT || 3000;
    const HOST = process.env.HOST || 'localhost';

    this.app.use(express.json());

    this.app.use(express.urlencoded({ extended: true }));

    const corsOptions = {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      exposedHeaders: ['page', 'per_page', 'total_rows'],
      optionsSuccessStatus: 204,
    };

    this.app.use(cors(corsOptions));
    this.app.listen(PORT, () => {
      console.log(`Server is running on http://${HOST}:${PORT}`);
    });
  }
};
