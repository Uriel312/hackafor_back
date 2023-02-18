const dotenv = require("dotenv")
dotenv.config();

const SERVER_PORT = process.env.PORT;

module.exports = {
    SERVER_PORT
}