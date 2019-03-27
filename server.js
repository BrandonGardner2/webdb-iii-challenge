const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const cohortsRouter = require("./routes/cohorts-route.js");
const studentsRouter = require("./routes/students-route.js");

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: "./data/lambda.sqlite3"
  },
  useNullAsDefault: true
};

//Server and Database initialization
const db = knex(knexConfig);
const server = express();

//Middleware
server.use(express.json());
server.use(helmet());

//Routes Middleware
server.use("/api/cohorts", cohortsRouter);
server.use("/api/students", studentsRouter);

module.exports = server;
