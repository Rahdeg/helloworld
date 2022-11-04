const express = require("express");
const solveRoutes = require('./src/routes/solve')
const cors = require("cors");

const app = express();
app.use(cors({origin:true}));
app.use(express.json());

app.use(
  "/api/v1/users",solveRoutes
);

app.get("/", (req, res) => {
    res.status(200).json({ "slackUsername": "Rahdeg", "backend": true, "age": 27, "bio": "web developer"})
  });
  
  app.all("*", (req, res) => {
    res.send({
      status: false,
      messsage: "Oops! you've hit an invalid route.",
    });
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
