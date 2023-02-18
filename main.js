const express = require("express");
const cors = require("cors");
const { SERVER_PORT } = require("./config/config");
const app = express();

const Port = SERVER_PORT || 5000

app.use(cors());
app.use(express.json());

app.listen(Port, () => {
  console.log(`server start ${Port}`);
});
