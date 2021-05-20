const express = require("express");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const routes = require("./routes");

const options = { useNewUrlParser: true }
const host = process.env.HOST;
const port = process.env.PORT;
const db_name = process.env.DB_NAME;

const server_port = process.env.SERVER_PORT;

const connectionParameters = `mongodb://${host}:${port}/${db_name}`;

mongoose.connect(connectionParameters, options)
        .then(() => {
            console.log("Database connection was successful");

            const app = express();
            app.use(express.json());
            app.use("/api", routes);

            app.listen (server_port, () => {
                console.log("Server has started ");
            });
        });
