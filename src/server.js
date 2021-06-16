const express = require("express");
const cors = require("cors");
const db = require("./db");
const services = require("./services");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/apis", services);
const port = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log("Now server is running: " + port));
  app.on("error", (error) =>
    console.info(" ❌Sorry but Server is not running due to : ", error,"do not forget to debug error.")
  );
});
